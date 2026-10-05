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
| The seven websites, embed URLs, deep links | `src/data/sites.ts` |
| Case study facts and bodies | `src/data/caseStudies.ts` |
| Marketing images and videos | `src/data/marketing.ts` |
| ICP builder industries, sizes, regions | `src/data/icp.ts` |
| Page titles and meta descriptions | `src/lib/routes.ts` |
| Colours, type, spacing | `src/app/globals.css` (tokens at the top) |

## Placeholders still to fill

Everything marked **PLACEHOLDER** on the site renders at the final size, so filling
it in never moves the layout.

- **Contact form:** create a form at formspree.io and paste its ID into
  `formspreeId` in `src/lib/config.ts`. Until then the form says it isn't connected.
- **Case study bodies:** fill the `body` arrays in `src/data/caseStudies.ts`.
- **Marketing images:** put files in `public/work/` and set `src` (e.g.
  `"work/brochure-01.webp"`) on the item in `src/data/marketing.ts`.
- **Videos:** set `embedUrl` (YouTube/Vimeo embed link) on each video in
  `src/data/marketing.ts`.

## Screenshots and OG image

Website screenshots in `public/shots/` and the social card in `public/og/` are
generated with headless Chrome:

```bash
npm run screenshots            # all sites + OG image
npm run screenshots -- aiqod   # one site
npm run screenshots -- og      # OG image only (from scripts/og.html)
```

## Notes

- `scripts/flatten-prefetch.mjs` runs after `next build`. Next 16's static export
  writes prefetch files in nested folders but requests them with dotted names;
  the script adds the dotted copies so a static host doesn't return 404s.
- `public/.nojekyll` stops GitHub Pages from hiding the `_next/` folder.
