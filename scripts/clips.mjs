/**
 * Records a short, silent scroll-through clip of every site in src/data/sites.ts.
 * Real scrolling in Chrome (so sticky headers and scroll animations behave),
 * frame by frame, then encoded with ffmpeg to MP4 (H.264) + WebM (VP9).
 *
 *   npm run clips              # all sites
 *   npm run clips -- aiqod     # one site
 *
 * Output: public/clips/<shot>.mp4 and .webm (960px wide, no audio).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";
import puppeteer from "puppeteer-core";
import { sites } from "../src/data/sites.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "clips");
mkdirSync(outDir, { recursive: true });

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];
const executablePath = process.env.CHROME_PATH ?? browsers.find((b) => existsSync(b));
if (!executablePath) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const W = 1280;
const H = 800;
const FPS = 24;
const HOLD = 0.7; // seconds still at the top and bottom
const TRAVEL = 6; // seconds of scrolling
const DEPTH = 2.6; // how many viewports to scroll through

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const only = process.argv[2];
const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--hide-scrollbars", "--mute-audio", "--autoplay-policy=no-user-gesture-required"],
  defaultViewport: { width: W, height: H, deviceScaleFactor: 1 },
});

try {
  for (const s of sites.filter((x) => !only || x.id === only || x.shot === only)) {
    const tmp = mkdtempSync(join(tmpdir(), `clip-${s.shot}-`));
    const page = await browser.newPage();
    process.stdout.write(`${s.name.padEnd(18)} `);
    try {
      await page.goto(s.embedUrl, { waitUntil: "networkidle2", timeout: 60_000 }).catch(() => {});
      // Some sites open with an intro/loader; wait (up to 20s) until the page can scroll.
      await page
        .waitForFunction(
          (h) => (document.scrollingElement || document.documentElement).scrollHeight > h * 1.5,
          { timeout: 20_000, polling: 500 },
          H,
        )
        .catch(() => {});
      await sleep(1500);

      const setY = (y) =>
        page.evaluate((v) => {
          const el = document.scrollingElement || document.documentElement;
          window.scrollTo({ top: v, behavior: "instant" });
          el.scrollTop = v;
        }, y);

      // Warm-up pass so lazy images and scroll-triggered reveals have fired.
      const max = await page.evaluate(
        () => (document.scrollingElement || document.documentElement).scrollHeight - window.innerHeight,
      );
      const depth = Math.max(0, Math.min(max, Math.round(H * DEPTH)));
      for (let y = 0; y <= depth; y += 200) {
        await setY(y);
        await sleep(120);
      }
      await setY(0);
      await sleep(1200);

      const total = Math.round((HOLD * 2 + TRAVEL) * FPS);
      for (let f = 0; f < total; f++) {
        const t = f / FPS;
        const p = t < HOLD ? 0 : t > HOLD + TRAVEL ? 1 : ease((t - HOLD) / TRAVEL);
        await setY(Math.round(depth * p));
        await sleep(16);
        await page.screenshot({
          path: join(tmp, `f${String(f).padStart(4, "0")}.jpg`),
          type: "jpeg",
          quality: 82,
        });
      }

      const input = ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(tmp, "f%04d.jpg")];
      const vf = ["-vf", "scale=960:-2:flags=lanczos", "-an"];
      const mp4 = join(outDir, `${s.shot}.mp4`);
      const webm = join(outDir, `${s.shot}.webm`);
      execFileSync(ffmpeg, [...input, ...vf, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "30", "-preset", "slow", "-movflags", "+faststart", mp4]);
      execFileSync(ffmpeg, [...input, ...vf, "-c:v", "libvpx-vp9", "-crf", "42", "-b:v", "0", "-row-mt", "1", "-deadline", "good", webm]);
      const kb = (f) => `${Math.round(statSync(f).size / 1024)}KB`;
      console.log(`mp4 ${kb(mp4)}  webm ${kb(webm)}  (${depth}px)`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    } finally {
      await page.close();
      rmSync(tmp, { recursive: true, force: true });
    }
  }
} finally {
  await browser.close();
}
