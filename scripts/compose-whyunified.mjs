import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const raw = 'E:/Work/TGS/LandingPage/public/portfolio/why-unified/raw'
const out = 'E:/Work/TGS/LandingPage/public/portfolio/why-unified'
const out2 = 'E:/Work/TGS/LandingPage/portofolio/why-unified'
fs.mkdirSync(out, { recursive: true })
fs.mkdirSync(out2, { recursive: true })

const W = 1600
const H = 900

const svgText = (opts) => {
  const {
    width,
    height,
    bg = '#0a0a0a',
    children = '',
  } = opts
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bg}"/>
  ${children}
</svg>`)
}

async function hero() {
  const phone = await sharp(path.join(raw, 'shot-02.jpg'))
    .resize(520, 900, { fit: 'cover', position: 'top' })
    .toBuffer()

  const overlay = svgText({
    width: W,
    height: H,
    bg: '#111111',
    children: `
      <rect x="0" y="0" width="920" height="900" fill="#C8102E"/>
      <text x="72" y="210" font-family="Arial Black, Arial, sans-serif" font-size="64" fill="#ffffff" font-weight="900">Why Unified®</text>
      <text x="72" y="280" font-family="Arial, sans-serif" font-size="28" fill="#111111" font-weight="700">Dropshipping Platform</text>
      <text x="72" y="360" font-family="Arial, sans-serif" font-size="34" fill="#ffffff" font-weight="700">Sell on Amazon &amp; Walmart.</text>
      <text x="72" y="410" font-family="Arial, sans-serif" font-size="34" fill="#ffffff" font-weight="700">Pay as you sell.</text>
      <text x="72" y="460" font-family="Arial, sans-serif" font-size="34" fill="#111111" font-weight="700">Run on auto-pilot.</text>
      <rect x="72" y="520" width="220" height="44" rx="22" fill="#111111"/>
      <text x="100" y="549" font-family="Arial, sans-serif" font-size="18" fill="#ffffff">iOS · Android</text>
      <rect x="310" y="520" width="280" height="44" rx="22" fill="#ffffff"/>
      <text x="335" y="549" font-family="Arial, sans-serif" font-size="18" fill="#111111">Marketplace SaaS</text>
      <text x="72" y="820" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" opacity="0.9">Official store creative · Real product UI</text>
    `,
  })

  await sharp(overlay)
    .composite([{ input: phone, left: 980, top: 0 }])
    .png()
    .toFile(path.join(out, '01-hero.png'))
}

async function screenStrip() {
  const shots = ['shot-01.jpg', 'shot-02.jpg', 'shot-03.jpg', 'shot-06.jpg']
  const gap = 24
  const panelW = Math.floor((W - gap * 5) / 4)
  const panelH = H - gap * 2
  const parts = []
  let x = gap
  for (const s of shots) {
    const buf = await sharp(path.join(raw, s))
      .resize(panelW, panelH, { fit: 'cover', position: 'centre' })
      .png()
      .toBuffer()
    parts.push({ input: buf, left: x, top: gap })
    x += panelW + gap
  }

  const bg = svgText({
    width: W,
    height: H,
    bg: '#0a0a0a',
    children: `
      <text x="40" y="38" font-family="Arial, sans-serif" font-size="16" fill="#C8102E" font-weight="700">OFFICIAL APP CREATIVES</text>
    `,
  })

  // leave room at top for label - adjust panels slightly lower
  const labeled = await sharp(bg)
    .composite(
      parts.map((p, i) => ({
        ...p,
        top: 52,
        left: gap + i * (panelW + gap),
      })),
    )
    .png()
    .toFile(path.join(out, '02-screens.png'))
  return labeled
}

async function pulseFeature() {
  const phone = await sharp(path.join(raw, 'shot-05.jpg'))
    .resize(700, 820, { fit: 'contain', background: { r: 20, g: 20, b: 20, alpha: 1 } })
    .png()
    .toBuffer()

  const overlay = svgText({
    width: W,
    height: H,
    bg: '#141414',
    children: `
      <text x="72" y="120" font-family="Arial Black, Arial, sans-serif" font-size="48" fill="#ffffff">Pulse Dashboard</text>
      <text x="72" y="175" font-family="Arial, sans-serif" font-size="22" fill="#C8102E" font-weight="700">Live marketplace control</text>
      <text x="72" y="250" font-family="Arial, sans-serif" font-size="22" fill="#dddddd">• Connect seller accounts</text>
      <text x="72" y="295" font-family="Arial, sans-serif" font-size="22" fill="#dddddd">• Track Amazon / Walmart revenue</text>
      <text x="72" y="340" font-family="Arial, sans-serif" font-size="22" fill="#dddddd">• Manage products &amp; licensing</text>
      <text x="72" y="385" font-family="Arial, sans-serif" font-size="22" fill="#dddddd">• Support PIN + in-app help</text>
      <rect x="72" y="450" width="420" height="120" rx="16" fill="#C8102E"/>
      <text x="96" y="505" font-family="Arial, sans-serif" font-size="20" fill="#ffffff" font-weight="700">Pay-as-you-sell model</text>
      <text x="96" y="540" font-family="Arial, sans-serif" font-size="18" fill="#ffffff">No large upfront inventory — sell first</text>
      <text x="72" y="820" font-family="Arial, sans-serif" font-size="16" fill="#888888">Real Play Store creative (not mocked UI)</text>
    `,
  })

  await sharp(overlay)
    .composite([{ input: phone, left: 820, top: 40 }])
    .png()
    .toFile(path.join(out, '03-pulse.png'))
}

async function activateFeature() {
  const phone = await sharp(path.join(raw, 'shot-03.jpg'))
    .resize(560, 900, { fit: 'cover', position: 'top' })
    .toBuffer()

  const overlay = svgText({
    width: W,
    height: H,
    bg: '#C8102E',
    children: `
      <text x="640" y="220" font-family="Arial Black, Arial, sans-serif" font-size="52" fill="#111111">Activate your store</text>
      <text x="640" y="290" font-family="Arial Black, Arial, sans-serif" font-size="52" fill="#ffffff">and start selling</text>
      <text x="640" y="360" font-family="Arial Black, Arial, sans-serif" font-size="52" fill="#ffffff">everywhere</text>
      <text x="640" y="460" font-family="Arial, sans-serif" font-size="24" fill="#ffffff">Connect Amazon, Walmart &amp; more</text>
      <text x="640" y="510" font-family="Arial, sans-serif" font-size="24" fill="#111111">Managed fulfillment · Shipping · Returns</text>
      <text x="640" y="800" font-family="Arial, sans-serif" font-size="16" fill="#ffffff" opacity="0.85">whyunified.com · App Store · Google Play</text>
    `,
  })

  await sharp(overlay)
    .composite([{ input: phone, left: 40, top: 0 }])
    .png()
    .toFile(path.join(out, '04-activate.png'))
}

await hero()
await screenStrip()
await pulseFeature()
await activateFeature()

// copy listing if present
const listing = path.join(out, '05-playstore.png')
if (fs.existsSync(listing)) {
  // keep
} else {
  const tmp = 'D:/DevCache/Temp/cursor/screenshots/whyunified-playstore-listing.png'
  if (fs.existsSync(tmp)) fs.copyFileSync(tmp, listing)
}

for (const f of ['01-hero.png', '02-screens.png', '03-pulse.png', '04-activate.png']) {
  fs.copyFileSync(path.join(out, f), path.join(out2, f))
  console.log(f, fs.statSync(path.join(out, f)).size)
}
if (fs.existsSync(listing)) {
  fs.copyFileSync(listing, path.join(out2, '05-playstore.png'))
  console.log('05-playstore.png', fs.statSync(listing).size)
}
console.log('DONE')
