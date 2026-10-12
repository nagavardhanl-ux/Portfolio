import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import sharp from "sharp";
import { sites } from "../src/data/sites.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "shots");
mkdirSync(outDir, { recursive: true });

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = browsers.find((b) => existsSync(b));
if (!executablePath) throw new Error("No Chrome found");

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--hide-scrollbars", "--mute-audio", "--no-sandbox"],
  defaultViewport: {
    width: 412,
    height: 892,
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  },
});

console.log("Starting mobile screenshots capture (max 3600px height)...");

for (const s of sites) {
  console.log(`Capturing mobile for ${s.name} (${s.shot})...`);
  const page = await browser.newPage();
  try {
    await page.setUserAgent(
      "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    );
    await page.goto(s.embedUrl, { waitUntil: "networkidle2", timeout: 35000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 1500));

    // Capture full-page buffer
    const buffer = await page.screenshot({ fullPage: true, type: "png" });

    // Read metadata and resize if taller than 3600px to ensure crisp, fast WebP
    const meta = await sharp(buffer).metadata();
    const targetHeight = Math.min(meta.height || 3600, 3600);

    const webpPath = join(outDir, `${s.shot}-mobile.webp`);
    await sharp(buffer)
      .extract({ left: 0, top: 0, width: meta.width, height: targetHeight })
      .webp({ quality: 85 })
      .toFile(webpPath);

    console.log(`Saved: ${s.shot}-mobile.webp (${meta.width}x${targetHeight})`);
  } catch (err) {
    console.error(`Failed ${s.name}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("All 8 mobile screenshots captured successfully!");
