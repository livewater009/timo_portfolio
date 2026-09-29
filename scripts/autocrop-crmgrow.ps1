# Auto-crop near-uniform background margins from portfolio PNGs
Add-Type -AssemblyName System.Drawing

function Test-ContentPixel([System.Drawing.Color]$c, [int]$tr, [int]$tg, [int]$tb, [int]$tol) {
  $dr = [Math]::Abs([int]$c.R - $tr)
  $dg = [Math]::Abs([int]$c.G - $tg)
  $db = [Math]::Abs([int]$c.B - $tb)
  return ($dr -gt $tol -or $dg -gt $tol -or $db -gt $tol)
}

function Crop-ContentMargins {
  param(
    [string]$Path,
    [int]$Tol = 18,
    [int]$Pad = 8
  )

  $img = [System.Drawing.Bitmap]::FromFile($Path)
  $w = $img.Width
  $h = $img.Height

  # sample corner to get background color
  $bg = $img.GetPixel(2, 2)
  $tr = [int]$bg.R; $tg = [int]$bg.G; $tb = [int]$bg.B

  $minX = $w; $minY = $h; $maxX = 0; $maxY = 0
  $step = [Math]::Max(1, [int]([Math]::Min($w, $h) / 400))

  for ($y = 0; $y -lt $h; $y += $step) {
    for ($x = 0; $x -lt $w; $x += $step) {
      $p = $img.GetPixel($x, $y)
      if (Test-ContentPixel $p $tr $tg $tb $Tol) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  if ($maxX -le $minX -or $maxY -le $minY) {
    Write-Output "SKIP (no content bounds): $Path"
    $img.Dispose()
    return
  }

  $minX = [Math]::Max(0, $minX - $Pad)
  $minY = [Math]::Max(0, $minY - $Pad)
  $maxX = [Math]::Min($w - 1, $maxX + $Pad)
  $maxY = [Math]::Min($h - 1, $maxY + $Pad)
  $cw = $maxX - $minX + 1
  $ch = $maxY - $minY + 1

  # only crop if we're removing meaningful margins
  $removed = ($w - $cw) + ($h - $ch)
  if ($removed -lt 40) {
    Write-Output "SKIP (already tight $($w)x$($h)): $Path"
    $img.Dispose()
    return
  }

  $rect = New-Object System.Drawing.Rectangle $minX, $minY, $cw, $ch
  $cropped = $img.Clone($rect, $img.PixelFormat)
  $img.Dispose()

  $tmp = "$Path.tmp.png"
  $cropped.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
  $cropped.Dispose()
  Move-Item -Force $tmp $Path
  Write-Output "CROP $($w)x$($h) -> ${cw}x${ch}: $Path"
}

$dirs = @(
  "E:\Work\TGS\LandingPage\public\portfolio\crmgrow",
  "E:\Work\TGS\LandingPage\portofolio\crmgrow"
)

foreach ($dir in $dirs) {
  Get-ChildItem $dir -Filter *.png | ForEach-Object {
    Crop-ContentMargins -Path $_.FullName -Tol 22 -Pad 6
  }
}
