import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const out = path.join('E:/Work/TGS/LandingPage/public/portfolio/crmgrow')
const out2 = path.join('E:/Work/TGS/LandingPage/portofolio/crmgrow')

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})

await page.goto('https://www.crmgrow.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 90000,
})
await page.waitForTimeout(1200)
await page.addStyleTag({
  content:
    'html,body{overflow-x:hidden!important} ::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}',
})

const accept = page.locator('button:has-text("Accept")')
if (await accept.count()) {
  await accept.first().click({ timeout: 3000 }).catch(() => {})
}

// Capture a clean framed section around Native Power Dialer + Keep Your Data
const dialer = page.getByRole('heading', { name: /Native Power Dialer/i }).first()
await dialer.scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
await page.evaluate(() => window.scrollBy(0, -80))
await page.waitForTimeout(300)
await page.screenshot({
  path: path.join(out, '05-dialer.png'),
  clip: { x: 0, y: 0, width: 1440, height: 900 },
})

// Also refresh features with less top whitespace: scroll heading near top
const features = page.getByRole('heading', { name: /Everything you need/i }).first()
await features.scrollIntoViewIfNeeded()
await page.waitForTimeout(400)
await page.evaluate(() => window.scrollBy(0, -60))
await page.waitForTimeout(200)
await page.screenshot({
  path: path.join(out, '04-features.png'),
  clip: { x: 0, y: 0, width: 1440, height: 900 },
})

for (const f of ['04-features.png', '05-dialer.png']) {
  fs.copyFileSync(path.join(out, f), path.join(out2, f))
  console.log(f, fs.statSync(path.join(out, f)).size)
}

await browser.close()
console.log('DONE')
