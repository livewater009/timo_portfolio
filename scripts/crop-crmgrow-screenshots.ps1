Add-Type -AssemblyName System.Drawing

$sourceDir = "E:\Work\TGS\LandingPage\public\portfolio\crmgrow"
$destDir   = "E:\Work\TGS\LandingPage\portofolio\crmgrow"

$cropRight  = 18
$cropBottom = 18
$minWidth   = 400
$minHeight  = 300

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$results = @()

Get-ChildItem -Path $sourceDir -Filter "*.png" -File | Sort-Object Name | ForEach-Object {
    $path = $_.FullName
    $name = $_.Name

    $img = [System.Drawing.Image]::FromFile($path)
    try {
        $origW = $img.Width
        $origH = $img.Height

        $newW = $origW
        $newH = $origH
        $cropped = $false

        if ($origW -gt $minWidth -and $origH -gt $minHeight) {
            $newW = $origW - $cropRight
            $newH = $origH - $cropBottom
            if ($newW -lt 1) { $newW = 1 }
            if ($newH -lt 1) { $newH = 1 }
            $cropped = $true
        }

        if ($cropped) {
            $bmp = New-Object System.Drawing.Bitmap $newW, $newH
            try {
                $g = [System.Drawing.Graphics]::FromImage($bmp)
                try {
                    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                    $srcRect = New-Object System.Drawing.Rectangle 0, 0, $newW, $newH
                    $destRect = New-Object System.Drawing.Rectangle 0, 0, $newW, $newH
                    $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
                } finally {
                    $g.Dispose()
                }

                $img.Dispose()
                $img = $null

                # Overwrite source (FromFile locks file until dispose)
                $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
                $destPath = Join-Path $destDir $name
                $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
            } finally {
                $bmp.Dispose()
            }
        } else {
            $destPath = Join-Path $destDir $name
            Copy-Item -Path $path -Destination $destPath -Force
        }

        # Re-read dimensions from saved file for report
        $verify = [System.Drawing.Image]::FromFile($path)
        try {
            $finalW = $verify.Width
            $finalH = $verify.Height
        } finally {
            $verify.Dispose()
        }

        $results += [PSCustomObject]@{
            File     = $name
            Original = "${origW}x${origH}"
            Final    = "${finalW}x${finalH}"
            Cropped  = $cropped
        }
    } finally {
        if ($null -ne $img) { $img.Dispose() }
    }
}

Write-Host ""
Write-Host "CRM Grow screenshot crop report"
Write-Host "================================"
$results | Format-Table -AutoSize
Write-Host "Processed $($results.Count) file(s)."
