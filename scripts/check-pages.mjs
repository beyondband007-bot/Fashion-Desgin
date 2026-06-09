import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:5176'
const pages = [
  '/',
  '/pricing',
  '/ai-generate',
  '/enterprise',
  '/login',
  '/projects',
  '/credits',
]

async function checkPage(path, theme) {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
  await page.goto(`${BASE_URL}${path}`)
  await page.evaluate((t) => {
    localStorage.setItem('theme-mode', t)
    document.documentElement.setAttribute('data-theme', t)
    document.body.setAttribute('arco-theme', t)
  }, theme)
  await page.reload({ waitUntil: 'networkidle' })
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth
  })
  await browser.close()
  return { path, theme, hasOverflow }
}

const results = []
for (const theme of ['light', 'dark']) {
  for (const path of pages) {
    results.push(await checkPage(path, theme))
  }
}

const issues = results.filter((r) => r.hasOverflow)
if (issues.length) {
  console.error('Overflow issues:', issues)
  process.exit(1)
}

console.log('All pages OK:', results.length)
