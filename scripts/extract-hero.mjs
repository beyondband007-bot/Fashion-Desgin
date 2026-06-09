import fs from "fs";
const html = fs.readFileSync("src/assets/photostudio_landing_v2_close_to_ui.html", "utf8");
const marker = 'class="hero-composite" src="';
const start = html.indexOf(marker);
if (start === -1) { console.error("not found"); process.exit(1); }
const dataStart = start + marker.length;
const dataEnd = html.indexOf('"', dataStart);
const dataUrl = html.slice(dataStart, dataEnd);
const b64 = dataUrl.split(",")[1];
fs.mkdirSync("src/assets/img", { recursive: true });
fs.writeFileSync("src/assets/img/hero-composite.png", Buffer.from(b64, "base64"));
console.log("saved", fs.statSync("src/assets/img/hero-composite.png").size);
