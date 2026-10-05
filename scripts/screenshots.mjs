/**
 * Captures a resting-state screenshot of every site in src/data/sites.ts with
 * headless Chrome (or Edge), then writes AVIF + WebP at two widths to public/shots/.
 * Also renders public/og/og-default.png from scripts/og.html.
 *
 *   npm run screenshots            # all sites + OG image
 *   npm run screenshots -- aiqod   # one site
 *   npm run screenshots -- og      # OG image only
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import { sites } from "../src/data/sites.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "shots");
const ogDir = join(root, "public", "og");
mkdirSync(outDir, { recursive: true });
mkdirSync(ogDir, { recursive: true });

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];
const browser = process.env.CHROME_PATH ?? browsers.find((b) => existsSync(b));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const tmp = mkdtempSync(join(tmpdir(), "shots-"));

function capture(url, file, width, height, budget = 12000) {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--mute-audio",
      `--user-data-dir=${join(tmp, "profile")}`,
      `--window-size=${width},${height}`,
      `--virtual-time-budget=${budget}`,
      `--screenshot=${file}`,
      url,
    ],
    { stdio: "ignore", timeout: 90_000 },
  );
}

const only = process.argv[2];
const WIDTHS = [1440, 800];

for (const s of sites.filter((x) => !only || x.id === only || x.shot === only)) {
  const png = join(tmp, `${s.shot}.png`);
  process.stdout.write(`${s.name.padEnd(18)} ${s.embedUrl}\n`);
  capture(s.embedUrl, png, 1440, 900);
  for (const w of WIDTHS) {
    const img = sharp(png).resize({ width: w });
    await img.clone().avif({ quality: 55, effort: 6 }).toFile(join(outDir, `${s.shot}-${w}.avif`));
    await img.clone().webp({ quality: 78 }).toFile(join(outDir, `${s.shot}-${w}.webp`));
  }
}

if (!only || only === "og") {
  const ogPng = join(tmp, "og.png");
  capture(pathToFileURL(join(root, "scripts", "og.html")).href, ogPng, 1200, 630, 4000);
  await sharp(ogPng).png({ compressionLevel: 9 }).toFile(join(ogDir, "og-default.png"));
  console.log("OG image       public/og/og-default.png");
}

rmSync(tmp, { recursive: true, force: true });
