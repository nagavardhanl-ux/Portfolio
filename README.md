# Nagavardhan Reddy Lella · Portfolio

Next.js 16 (App Router) exported as static HTML and hosted on GitHub Pages at
https://nagavardhanl-ux.github.io/Portfolio/

## Run it

```bash
npm install
npm run dev          # http://localhost:3000  (no base path in dev)
npm run build        # static site in ./dist, served under /Portfolio/
```

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.

## Where to change things

| What | File |
| --- | --- |
| Email, phone, LinkedIn, CV switch, Formspree ID | `src/lib/config.ts` |
| Hero, capabilities, the thread, What I do, About text, AI workflow | `src/data/content.ts` |
| The eight websites, labels, embed URLs, deep links | `src/data/sites.ts` |
| Marketing images and videos | `src/data/marketing.ts` |
| ICP builder industries, sizes, regions | `src/data/icp.ts` |
| Page titles and meta descriptions | `src/lib/routes.ts` |
| Colours, type, spacing | `src/app/globals.css` (tokens at the top) |

## Placeholders still to fill

Everything marked **PLACEHOLDER** on the site renders at the final size, so filling
it in never moves the layout.

- **Contact form:** create a form at formspree.io and paste its ID into
  `formspreeId` in `src/lib/config.ts`. Until then the form says it isn't connected.
- **Marketing images:** put files in `public/work/` and set `src` (e.g.
  `"work/brochure-01.webp"`) on the item in `src/data/marketing.ts`.
- **Videos:** set `embedUrl` (YouTube/Vimeo embed link) on each video in
  `src/data/marketing.ts`.

## Screenshots, scroll clips and OG image

Generated with headless Chrome from the URLs in `src/data/sites.ts`:

```bash
npm run screenshots            # public/shots/: AVIF + WebP stills, plus the OG image
npm run screenshots -- aiqod   # one site
npm run screenshots -- og      # OG image only (from scripts/og.html)
npm run clips                  # public/clips/: silent MP4 + WebM scroll-throughs
npm run clips -- aiqod360      # one site
```

Re-run both for a site after it changes. Adding a site = add it to `sites.ts`,
then run both commands for its `shot` name.

## Motion and background

- `HeroFx`: the one WebGL effect (Vanta.js NET, three.js + Vanta from CDN),
  hero only, 768px+ only, loaded after idle, ~30fps, paused off-screen.
- `AmbientField`: one fixed dot-grid canvas behind every page; animated on
  desktop, a single static frame below 768px.
- `Clip`: scroll clips load lazily one at a time, play only while visible, and
  fall back to the still on phones, slow/data-saver connections and reduced motion.
- Everything animated is off under `prefers-reduced-motion`.

## Notes

- `scripts/flatten-prefetch.mjs` runs after `next build`. Next 16's static export
  writes prefetch files in nested folders but requests them with dotted names;
  the script adds the dotted copies so a static host doesn't return 404s.
- `public/.nojekyll` stops GitHub Pages from hiding the `_next/` folder.
