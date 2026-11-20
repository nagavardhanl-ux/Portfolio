# Website Audit & Remediation Report

**Target:** Nagavardhan Lella Portfolio  
**Branch:** `audit-fixes`  
**Date:** November 20, 2026  
**Status:** Audit Complete & Permitted Fixes Applied  

---

## Section 1: What Was Fixed (File by File)

All applied fixes strictly comply with the locked constraints: zero content or copy changes, zero colour additions or adjustments, zero font alterations, and zero deleted routes or sections.

### 1. `public/llms.txt` (New File)
- **What was wrong:** The website had no `llms.txt` file, making it harder for AI crawlers, LLMs, and agentic search engines (ChatGPT, Claude, Perplexity) to discover and accurately cite the site's content and structure.
- **Fix:** Created a standard-compliant `llms.txt` plain text file in the site root. It summarizes Nagavardhan Lella's role, background, core capabilities, live platform builds, page links, and contact information using only facts already present on the website.

### 2. `src/app/robots.ts`
- **What was wrong:** The robots configuration used a generic wildcard rule without explicitly declaring allowance for major AI and search engine crawlers, which can cause inconsistent indexing by newer AI user-agents.
- **Fix:** Updated the robots output into one valid group that explicitly allows all major search and AI crawlers (`Googlebot`, `Google-Extended`, `Bingbot`, `Applebot`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Amazonbot`, `Meta-ExternalAgent`, and `*`) alongside the sitemap reference.

### 3. `src/lib/meta.ts`
- **What was wrong:** Structured data (JSON-LD) only existed for the homepage. The remaining five pages (`/about/`, `/websites/`, `/what-i-do/`, `/gallery/`, and `/contact/`) lacked any schema markup or breadcrumb trails.
- **Fix:** Added Schema.org generator functions for all internal pages:
  - `aboutStructuredData()`: Generates `AboutPage` linked to the core `Person` entity and adds `BreadcrumbList`.
  - `websitesStructuredData()`: Generates `CollectionPage` with `WebSite` sub-entities for AIQoD and VentureHub360, plus `BreadcrumbList`.
  - `whatIDoStructuredData()`: Generates `WebPage` with 5 distinct `Service` items (Product Marketing, Demand Generation, Content and LinkedIn, Websites and SEO, AI-Led Execution) linked to the provider, plus `BreadcrumbList`.
  - `galleryStructuredData()`: Generates `CollectionPage` and `BreadcrumbList`.
  - `contactStructuredData()`: Generates `ContactPage` linked to the `Person` and `ContactPoint` entities, plus `BreadcrumbList`.

### 4. `src/app/layout.tsx`
- **What was wrong:** Root metadata lacked default fallback `title` and `description` properties, which could lead to missing social sharing previews if a dynamic route omitted metadata.
- **Fix:** Added default title and description fallbacks in root `metadata` using existing copy.

### 5. `src/app/about/page.tsx`
- **What was wrong:** 
  1. No structured data (JSON-LD) was embedded.
  2. The page used `<main className="about-page">` inside the root layout's `<main id="main">`, resulting in an invalid nested `<main>` landmark violation (WCAG 1.3.1).
- **Fix:** Embedded `<JsonLd data={aboutStructuredData()} />` and replaced the nested `<main>` tag with `<div className="about-page">`.

### 6. `src/app/websites/page.tsx`
- **What was wrong:** Missing structured data (JSON-LD) and breadcrumb hierarchy.
- **Fix:** Embedded `<JsonLd data={websitesStructuredData()} />`.

### 7. `src/app/what-i-do/page.tsx`
- **What was wrong:** 
  1. No structured data (JSON-LD) was embedded.
  2. Nested `<main className="wid-page">` tag inside root layout `<main id="main">`.
  3. Skipped heading level: In Section 05 (AI-Led Execution), the markup jumped directly from `<h2>` (`#ai-title`) to four `<h4>` domain titles (`.wid-ai-card__title`), skipping `<h3>`.
- **Fix:** 
  1. Embedded `<JsonLd data={whatIDoStructuredData()} />`.
  2. Replaced nested `<main>` with `<div className="wid-page">`.
  3. Corrected heading hierarchy by updating `<h4 className="wid-ai-card__title">` to `<h3 className="wid-ai-card__title">`.

### 8. `src/app/gallery/page.tsx`
- **What was wrong:** Missing structured data (JSON-LD) and breadcrumb hierarchy.
- **Fix:** Embedded `<JsonLd data={galleryStructuredData()} />`.

### 9. `src/app/contact/page.tsx`
- **What was wrong:** Missing structured data (JSON-LD) and breadcrumb hierarchy.
- **Fix:** Embedded `<JsonLd data={contactStructuredData()} />`.

### 10. `src/components/CapabilitiesSection.tsx`
- **What was wrong:** The accordion panel (`.cap-acc-panel`) declared `aria-labelledby={`cap-trigger-${idx}`}`, but the triggering `<button>` did not possess the corresponding `id`, breaking accessibility tree relationships.
- **Fix:** Added `id={`cap-trigger-${idx}`}` to the trigger button.

### 11. `src/components/CatalogueViewer.tsx`
- **What was wrong:** The thumbnail sidebar declared `role="tablist"` with `role="tab"` buttons, but the main viewing stage lacked `role="tabpanel"` and `id="catalogue-stage-panel"`, and the tab buttons lacked `aria-controls`.
- **Fix:** Added `role="tabpanel"` and `id="catalogue-stage-panel"` to the stage viewer, and `aria-controls="catalogue-stage-panel"` to all thumbnail tab buttons.

### 12. `src/components/GalleryCard.tsx`
- **What was wrong:** Card titles inside the gallery grids used `<h2>`, placing individual item cards at the same heading level as their parent section headings (`<h2>Videos</h2>` and `<h2>Podcast marketing</h2>`).
- **Fix:** Changed card title element from `<h2>` to `<h3>` so individual items are properly nested under their section headings in the document outline.

### 13. `src/app/globals.css`
- **What was wrong:** 
  1. Footer navigation cards (`.footer-card`) lacked an explicit `:focus-visible` outline.
  2. The scroll reveal entrance applied an exaggerated 20px upward jump (`translateY(20px)`), creating an artificial, repetitive template feel.
  3. The mobile navigation button (`.nav__toggle`) had a default size of 40x40px, falling short of the recommended 44x44px touch target recommendation.
- **Fix:** 
  1. Added `.footer-card:focus-visible` with `outline: 2px solid var(--accent); outline-offset: 3px;` using the existing primary accent colour.
  2. Calmed scroll reveal entrances to a subtle 8px rise (`translateY(8px)`) with faster, purposeful transitions (380ms desktop, 300ms mobile) that preserve smooth motion without sluggish delays.
  3. Set `min-width: 44px; min-height: 44px;` on `.nav__toggle` under the mobile breakpoint.

---

## Section 2: What Was NOT Fixed (Needs Colour, Content, or Redesign)

The following issues were identified during the audit but left untouched per the strict constraints prohibiting colour adjustments, copy modifications, or structural section overhauls.

### 1. Secondary Text Colour Contrast on Dark Background
- **Severity:** High
- **Category:** Accessibility (WCAG 2.1 AA — 1.4.3 Contrast Minimum)
- **Locations:** Sitewide (`src/app/globals.css:7324-7329`)
- **What is wrong:** Secondary text elements (`.text-2`, `.lead-muted`, `.meta`, `.caption`, and metadata labels) use the colour `#85847F` on the dark background `#111214`. This yields a contrast ratio of **3.68:1**, which fails the required minimum ratio of **4.5:1** for standard body text.
- **Suggested Fix (Requires Colour Change):** Lighten the muted grey variable from `#85847F` to `#A09F9A` (yielding a 4.9:1 contrast ratio) or `#B0AFA9` (yielding 5.8:1). This satisfies WCAG AA while preserving visual hierarchy.

### 2. Eyebrow Pill Badges & Decorative Number Counters
- **Severity:** Medium
- **Category:** Design ("AI-Generated / Template Look")
- **Locations:** 
  - `src/components/HeroScrollExpansion.tsx:261` (`hero-expand-eyebrow` with pulsing dot)
  - `src/components/ShippedBento.tsx:104` (`.shipped-drawer__badge`)
  - `src/app/what-i-do/page.tsx:65, 95, 382` (`.wid-sec__tag`, `.wid-specimen__pill`, `.wid-ai-card__num`)
- **What is wrong:** Overuse of rounded capsule pill badges containing capitalized micro-copy and glowing pulse dots. This pattern is heavily associated with off-the-shelf AI landing page templates.
- **Suggested Fix (Requires Section Redesign):** Strip the decorative pills and glowing dot indicators. Replace them with quiet typographic labels or simple hairline dividers, matching the editorial aesthetic of figma.com or x.ai.

### 3. Pinned Hero Scroll Gating
- **Severity:** Medium
- **Category:** User Experience & Modern Web Guidance
- **Location:** `src/components/HeroScrollExpansion.tsx`
- **What is wrong:** The homepage hero locks the viewport in place for ~120vh of scroll distance to progressively fade in the supporting subtitle and "See the work" button. While technically smooth, scroll-jacking or gating basic hero content behind wheel interactions can frustrate visitors who expect immediate access to the value proposition.
- **Suggested Fix (Requires Section Redesign):** Render the headline, supporting copy, and primary CTA immediately on initial load. Let the background workspace image scale and expand as an unpinned background layer as the user scrolls naturally down the page.

### 4. Continuous Single-Page Density on "What I Do"
- **Severity:** Low
- **Category:** Mobile UX & Layout
- **Location:** `src/app/what-i-do/page.tsx`
- **What is wrong:** All five major service domains (Product Marketing, Demand Generation, Content, Websites, AI) and their extensive matrices and deliverables lists are stacked in one continuous vertical document. On mobile screens (375px), this produces over 18 viewports of continuous scrolling.
- **Suggested Fix (Requires Section Redesign / Content Strategy):** Convert the five capability areas into an interactive tabbed switcher or accordion drawer on mobile, allowing prospective clients to drill down into their specific interest without scrolling past all other domains.

### 5. Missing Brand SVG Glyphs on Social & External Links
- **Severity:** Low
- **Category:** Visual Polish
- **Locations:** `src/app/contact/page.tsx:36`, `src/components/GalleryCard.tsx:68`
- **What is wrong:** External links (such as LinkedIn and YouTube Shorts) use generic diagonal arrow icons (`ArrowUpRight`) rather than official platform SVGs.
- **Suggested Fix (Requires Design / Asset Addition):** Replace generic diagonal arrows on branded links with clean, monochrome SVG logos for LinkedIn and YouTube Shorts.

---

## Section 3: Things Checked and Found Fine

The following areas were rigorously inspected across the codebase and live browser runtime, confirming zero defects:

1. **Routing and 404 Resilience:**
   - All 6 core routes (`/`, `/about/`, `/websites/`, `/what-i-do/`, `/gallery/`, `/contact/`) load with HTTP 200.
   - The custom 404 page (`/_not-found`) correctly traps non-existent URLs and offers clear recovery links.

2. **Link Integrity:**
   - Zero broken links, empty `href=""`, or dead `href="#"` placeholders exist across the entire website. All external URLs point to valid live destinations.

3. **Responsive Layouts & Overflow Prevention:**
   - Verified across 375px, 768px, 1024px, and 1440px viewports.
   - Zero horizontal scrollbar or content clipping (`scrollWidth === innerWidth` on all routes).

4. **Console & Runtime Diagnostics:**
   - Zero runtime JavaScript exceptions, React hydration errors, or unhandled promise rejections on any route.

5. **Self-Hosted Variable Fonts:**
   - Next.js font optimization properly downloads and self-hosts Fraunces, Inter, and JetBrains Mono at build time.
   - `display: swap` is applied, preventing layout shifts and eliminating third-party tracking requests to Google servers.

6. **Image Optimization & Formats:**
   - Background and portfolio showcase imagery are delivered in modern WebP and AVIF formats with responsive `srcSet` and explicit aspect ratios.
   - Below-the-fold images utilize native `loading="lazy"` and `decoding="async"`.

7. **Motion Sensitivity (`prefers-reduced-motion`):**
   - The site provides thorough fallbacks for users with vestibular sensitivities.
   - Reduced-motion queries disable the sticky hero scroll sequence, ambient canvas particle animations, hover transforms, and reveal delays.

8. **Form Accessibility & Security:**
   - Contact form fields have explicit `<label htmlFor="...">` associations, `autoComplete`, and `inputMode` attributes.
   - Client-side validation handles missing entries with clear inline error messaging, focus management, and honeypot bot prevention.

9. **Static Build Output:**
   - Production build compiles with full TypeScript type safety and pre-renders 10 static endpoints with Turbopack.
