import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const out = path.join('E:/Work/TGS/LandingPage/public/portfolio/crmgrow')
const out2 = path.join('E:/Work/TGS/LandingPage/portofolio/crmgrow')
fs.mkdirSync(out, { recursive: true })
fs.mkdirSync(out2, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})

await page.goto('https://www.crmgrow.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 90000,
})
await page.waitForTimeout(1500)

await page.addStyleTag({
  content:
    'html,body{overflow-x:hidden!important} ::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}',
})

const accept = page.locator('button:has-text("Accept")')
if (await accept.count()) {
  await accept.first().click({ timeout: 3000 }).catch(() => {})
}

await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(500)
await page.screenshot({
  path: path.join(out, '01-hero.png'),
  clip: { x: 0, y: 0, width: 1440, height: 900 },
})

const sections = [
  { text: 'Team leaders choose', file: '02-leaders.png' },
  { text: 'So Your Agents Can', file: '03-agents.png' },
  { text: 'Everything you need', file: '04-features.png' },
  { text: 'Native Power Dialer', file: '05-dialer.png' },
]

for (const section of sections) {
  const heading = page.getByRole('heading', { name: new RegExp(section.text, 'i') }).first()
  await heading.scrollIntoViewIfNeeded()
  await page.waitForTimeout(400)
  const box = await heading.boundingBox()
  const y = box ? Math.max(0, Math.floor(box.y - 48)) : 0
  await page.screenshot({
    path: path.join(out, section.file),
    clip: { x: 0, y, width: 1440, height: 900 },
  })
  console.log('captured', section.file, 'at y=', y)
}

for (const f of [
  '01-hero.png',
  '02-leaders.png',
  '03-agents.png',
  '04-features.png',
  '05-dialer.png',
]) {
  fs.copyFileSync(path.join(out, f), path.join(out2, f))
  console.log(f, fs.statSync(path.join(out, f)).size)
}

await browser.close()
console.log('DONE')
