import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outRaw = path.join(root, 'public/portfolio/mohd/raw')
const outMirror = path.join(root, 'portofolio/mohd')

fs.mkdirSync(outRaw, { recursive: true })
fs.mkdirSync(outMirror, { recursive: true })

const VIEWPORT = { width: 1440, height: 900 }
const saved = []

async function dismissCookies(page) {
  for (let attempt = 0; attempt < 4; attempt++) {
    let clicked = false
    const acceptAll = page.getByRole('button', { name: /accept all/i })
    if (await acceptAll.count().catch(() => 0)) {
      await acceptAll.first().click({ timeout: 5000 }).catch(() => {})
      clicked = true
    } else {
      const candidates = [
        page.getByRole('button', { name: /^accept$/i }),
        page.locator('button:has-text("Accept All")'),
        page.locator('button:has-text("Accept all")'),
        page.locator('button:has-text("I agree")'),
      ]
      for (const loc of candidates) {
        if (await loc.count().catch(() => 0)) {
          await loc.first().click({ timeout: 5000 }).catch(() => {})
          clicked = true
          break
        }
      }
    }
    if (!clicked) break
    await page.waitForTimeout(700)
  }
}

async function dismissShopLocaleModal(page) {
  const startShopping = page.getByRole('button', { name: /start shopping/i })
  const startShoppingLink = page.getByRole('link', { name: /start shopping/i })
  if (await startShopping.count().catch(() => 0)) {
    await startShopping.first().click({ timeout: 8000 }).catch(() => {})
    await page.waitForTimeout(900)
  } else if (await startShoppingLink.count().catch(() => 0)) {
    await startShoppingLink.first().click({ timeout: 8000 }).catch(() => {})
    await page.waitForTimeout(900)
  } else {
    const welcomeVisible = await page
      .getByText(/Welcome on Mohd/i)
      .first()
      .isVisible()
      .catch(() => false)
    if (welcomeVisible) {
      const closeCandidates = [
        page.getByRole('button', { name: /^close$/i }),
        page.locator('[aria-label="Close"]'),
        page.locator('[aria-label*="close" i]'),
        page.locator('button[class*="close" i]').first(),
        page.locator('[class*="modal" i] button').first(),
      ]
      for (const loc of closeCandidates) {
        if (await loc.count().catch(() => 0)) {
          await loc.first().click({ timeout: 5000 }).catch(() => {})
          await page.waitForTimeout(600)
          break
        }
      }
      await page.keyboard.press('Escape').catch(() => {})
      await page.waitForTimeout(400)
    }
  }

  await page
    .getByText(/Welcome on Mohd/i)
    .first()
    .waitFor({ state: 'hidden', timeout: 8000 })
    .catch(() => {})
}

async function waitForImages(page) {
  await page.waitForLoadState('load', { timeout: 25000 }).catch(() => {})
  await page.evaluate(async () => {
    const imgs = Array.from(document.images)
    await Promise.race([
      Promise.all(
        imgs.slice(0, 60).map((img) => {
          if (img.complete) return Promise.resolve()
          return new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true })
            img.addEventListener('error', resolve, { once: true })
          })
        }),
      ),
      new Promise((resolve) => setTimeout(resolve, 4000)),
    ])
  })
  await page.waitForTimeout(1000)
}

async function gotoPage(page, url) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  } catch {
    await page.goto(url, { waitUntil: 'commit', timeout: 90000 })
  }
}

async function hideScrollbars(page) {
  await page.addStyleTag({
    content:
      'html,body{overflow-x:hidden!important} ::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}',
  })
}

async function viewportShot(page, filename, { scrollTop = true } = {}) {
  const filePath = path.join(outRaw, filename)
  if (scrollTop) {
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(200)
  }
  await page.screenshot({
    path: filePath,
    type: 'png',
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
  })
  fs.copyFileSync(filePath, path.join(outMirror, filename))
  const stat = fs.statSync(filePath)
  saved.push({ file: filename, bytes: stat.size, url: page.url() })
  console.log('saved', filename, stat.size, page.url())
}

async function scrollToBrandsSection(page) {
  const patterns = [/Together with the best brands/i, /best brands/i]
  for (const pattern of patterns) {
    const target = page.getByText(pattern).first()
    for (let i = 0; i < 45; i++) {
      if (await target.isVisible().catch(() => false)) {
        await target.scrollIntoViewIfNeeded()
        await page.waitForTimeout(400)
        await page.evaluate(() => window.scrollBy(0, -72))
        await page.waitForTimeout(300)
        return true
      }
      await page.evaluate(() => window.scrollBy(0, 480))
      await page.waitForTimeout(280)
    }
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(200)
  }
  return false
}

function normalizeHref(href, base) {
  try {
    return new URL(href, base).href
  } catch {
    return null
  }
}

async function collectLinks(page) {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]'))
      .map((a) => a.href)
      .filter(Boolean),
  )
}

async function navHref(page, namePattern) {
  const link = page.getByRole('link', { name: namePattern }).first()
  if (await link.count()) {
    return link.getAttribute('href')
  }
  return null
}

function isInteriorCandidate(href) {
  if (!href || !/mohd\.it/i.test(href)) return false
  if (!/(interior-design|design-service)/i.test(href)) return false
  if (/\/our-stories\//i.test(href)) return false
  if (/\/en\/interior-design\/?(\?|#|$)/i.test(href)) return false
  return true
}

async function discoverInteriorUrl(context, homePage, homeUrl, links) {
  const candidates = []

  const navPatterns = [/interior design service/i, /interior design/i]
  for (const pat of navPatterns) {
    const href = normalizeHref(await navHref(homePage, pat), homeUrl)
    if (href && isInteriorCandidate(href)) candidates.push(href)
  }

  for (const href of links) {
    if (isInteriorCandidate(href)) candidates.push(href)
  }

  candidates.push('https://www.mohd.it/en/design-service/')

  const seen = new Set()
  const unique = []
  for (const href of candidates) {
    const normalized = normalizeHref(href, homeUrl)
    if (!normalized || seen.has(normalized)) continue
    seen.add(normalized)
    unique.push(normalized)
  }

  unique.sort((a, b) => {
    const score = (u) =>
      (/design-service/i.test(u) ? 2 : 0) + (/interior-design/i.test(u) ? 1 : 0)
    return score(b) - score(a)
  })

  for (const url of unique) {
    try {
      const res = await context.request.get(url, { maxRedirects: 5 })
      if (res.ok()) return res.url()
    } catch {
      /* try next */
    }
  }

  return 'https://www.mohd.it/en/design-service/'
}

async function capturePage(context, url, filename, prep) {
  const page = await context.newPage()
  page.setDefaultNavigationTimeout(90000)
  page.setDefaultTimeout(45000)
  try {
    let navigated = false
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await gotoPage(page, url)
        navigated = true
        break
      } catch (err) {
        if (attempt === 2) throw err
        await page.waitForTimeout(2500 * (attempt + 1))
      }
    }
    if (!navigated) throw new Error(`Could not navigate to ${url}`)
    await hideScrollbars(page)
    await dismissCookies(page)
    await waitForImages(page)
    await dismissCookies(page)
    if (prep) await prep(page)
    await dismissCookies(page)
    await viewportShot(page, filename)
    return page.url()
  } finally {
    await page.close()
  }
}

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 1,
  locale: 'en-US',
})

const homePage = await context.newPage()
homePage.setDefaultNavigationTimeout(90000)
homePage.setDefaultTimeout(45000)

const homeUrl = 'https://www.mohd.it/en/'
await gotoPage(homePage, homeUrl)
await hideScrollbars(homePage)
await dismissCookies(homePage)
await waitForImages(homePage)
await dismissCookies(homePage)

await homePage.evaluate(() => window.scrollTo(0, 0))
await homePage.waitForTimeout(400)
await viewportShot(homePage, '01-home-hero.png')

const brandsFound = await scrollToBrandsSection(homePage)
if (!brandsFound) {
  console.warn('brands section text not found; using fallback scroll')
  await homePage.evaluate(() => window.scrollBy(0, 1400))
  await homePage.waitForTimeout(600)
}
await dismissCookies(homePage)
await viewportShot(homePage, '02-home-brands.png', { scrollTop: false })

const links = await collectLinks(homePage)
const interiorUrl = await discoverInteriorUrl(context, homePage, homeUrl, links)
console.log('interior URL', interiorUrl)

const shopNav =
  normalizeHref(await navHref(homePage, /^shop$/i), homeUrl) ??
  normalizeHref(await navHref(homePage, /shop/i), homeUrl)

const shopUrl =
  links.find((h) => /shop\.mohd\.it/i.test(h)) ?? shopNav ?? 'https://shop.mohd.it/en'

const inspirationNav = normalizeHref(
  await navHref(homePage, /^inspiration$/i),
  homeUrl,
)

const magazineUrl =
  links.find((h) => /\/en\/magazine\/?(\?|#|$)/i.test(h)) ??
  inspirationNav ??
  links.find(
    (h) => /magazine/i.test(h) && /mohd\.it/i.test(h) && !/shop\.mohd\.it/i.test(h),
  ) ??
  'https://www.mohd.it/en/magazine/'

await homePage.close()

const targets = [
  { url: interiorUrl, file: '03-interior.png' },
  {
    url: shopUrl,
    file: '04-shop.png',
    prep: async (page) => {
      await dismissCookies(page)
      await dismissShopLocaleModal(page)
      await page.waitForTimeout(600)
      await dismissShopLocaleModal(page)
      await dismissCookies(page)
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForTimeout(300)
    },
  },
  {
    url: magazineUrl,
    file: '05-magazine.png',
    prep: async (page) => {
      await dismissCookies(page)
      await page.waitForTimeout(400)
      await dismissCookies(page)
    },
  },
]

for (const { url, file, prep } of targets) {
  const normalized = normalizeHref(url, homeUrl) ?? url
  try {
    await capturePage(context, normalized, file, prep)
  } catch (err) {
    console.warn('failed', file, normalized, err.message)
  }
}

await context.close()
await browser.close()

console.log('\n=== CAPTURE SUMMARY ===')
for (const row of saved) {
  console.log(
    JSON.stringify({
      file: row.file,
      path: path.join('public/portfolio/mohd/raw', row.file),
      bytes: row.bytes,
      url: row.url,
    }),
  )
}
