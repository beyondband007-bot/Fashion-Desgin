import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE_URL = 'http://localhost:5176'
const OUT_DIR = join(process.cwd(), 'docs', 'screenshots')

async function capture(name, theme) {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

  await page.goto(BASE_URL)
  await page.evaluate((t) => {
    localStorage.setItem('theme-mode', t)
    document.documentElement.setAttribute('data-theme', t)
    document.body.setAttribute('arco-theme', t)
  }, theme)
  await page.reload({ waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  await page.screenshot({ path: join(OUT_DIR, `${name}.png`), fullPage: true })
  await browser.close()
}

mkdirSync(OUT_DIR, { recursive: true })

await capture('theme-light', 'light')
await capture('theme-dark', 'dark')
await capture('home-final-light', 'light')

console.log('Screenshots saved to', OUT_DIR)
