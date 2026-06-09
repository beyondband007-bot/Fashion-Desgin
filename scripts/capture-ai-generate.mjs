import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5173'
const OUT_DIR = join(process.cwd(), 'docs', 'screenshots', 'ai-generate')

const viewports = [
  { name: '1920', width: 1920, height: 1080 },
  { name: '1440', width: 1440, height: 900 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
]

mkdirSync(OUT_DIR, { recursive: true })

const browser = await chromium.launch()

for (const theme of ['light', 'dark']) {
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
    await page.goto(`${BASE_URL}/ai-generate/clothes`)
    await page.evaluate((t) => {
      localStorage.setItem('theme-mode', t)
      document.documentElement.setAttribute('data-theme', t)
      document.body.setAttribute('arco-theme', t)
    }, theme)
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)
    await page.screenshot({
      path: join(OUT_DIR, `ai-generate-${vp.name}-${theme}.png`),
      fullPage: false,
    })
    await page.close()
    console.log(`saved ai-generate-${vp.name}-${theme}.png`)
  }
}

await browser.close()
console.log('Done:', OUT_DIR)
