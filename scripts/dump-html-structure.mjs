import fs from 'fs'

const html = fs.readFileSync('src/assets/photostudio_landing_v2_close_to_ui.html', 'utf8')
const strip = (s) =>
  s
    .replace(/data:image[^"']+/g, '[IMG]')
    .replace(/<img[^>]*>/g, '[IMG]')

const start = html.indexOf('<section class="hero"')
console.log(strip(html.slice(start, start + 15000)))
