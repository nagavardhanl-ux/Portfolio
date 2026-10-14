"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { hero } from "@/data/content";
import { asset } from "@/lib/config";

/**
 * Scroll-Driven, Staged Hero Reveal & Synchronized Background Expansion
 *
 * 1. Initial State (Page Load / p = 0):
 *    - Name label ("Nagavardhan Reddy Lella") and H1 ("B2B marketer and I also build websites")
 *      are fully displayed and clearly visible.
 *    - Supporting copy and "See the work" button are initially hidden, ready to reveal through scrolling.
 *    - Background workspace image is contained with rounded corners, subtle border, and shadow.
 *
 * 2. Scroll Stage 1 (p ~0.04 → 0.35) — Reveal Supporting Copy:
 *    - H1 and name label remain 100% visible throughout.
 *    - Supporting copy smoothly reveals with upward vertical translation (+20px → 0px) and fade-in (0 → 1).
 *    - Background image simultaneously begins expanding and repositioning upward.
 *
 * 3. Scroll Stage 2 (p ~0.35 → 0.65) — Reveal the CTA:
 *    - Name label, H1, and supporting copy all remain visible.
 *    - "See the work" CTA smoothly reveals with upward translation (+20px → 0px) and fade-in (0 → 1).
 *    - Background image continues expanding toward viewport edges.
 *
 * 4. Scroll Stage 3 (p ~0.65 → 0.88) — Complete Background Transformation:
 *    - All existing hero text (name label, H1, supporting copy) and the CTA remain visible.
 *    - Background image expands to fill 100% of viewport width (scale 1.0, border-radius 0px).
 *    - Contrast scrim ensures readability between typography and background photo throughout.
 *
 * 5. Final Hold & Natural Release (p 0.88 → 1.00+):
 *    - The complete hero state holds deliberately before the sticky pin releases.
 *    - Smooth, natural continuation into "What I've Shipped".
 *    - Fully reversible on backward scrolling. Respects prefers-reduced-motion.
 */
export default function HeroScrollExpansion() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bgFrameRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion: reveal everything in unpinned, natural state
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (leadRef.current) {
        leadRef.current.style.opacity = "1";
        leadRef.current.style.transform = "none";
        leadRef.current.style.visibility = "visible";
      }
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.style.transform = "none";
        ctaRef.current.style.visibility = "visible";
        ctaRef.current.style.pointerEvents = "auto";
      }
      return;
    }

    let rafId = 0;
    let isTicking = false;

    const getMetrics = () => {
      const w = window.innerWidth;
      if (w < 640) {
        return { initialScale: 0.92, initialRadius: 14, initialY: 12 };
      } else if (w < 1024) {
        return { initialScale: 0.88, initialRadius: 16, initialY: 16 };
      } else {
        return { initialScale: 0.84, initialRadius: 20, initialY: 20 };
      }
    };

    let metrics = getMetrics();

    const updateFrame = () => {
      isTicking = false;
      if (!trackRef.current || !stickyRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const totalScroll = trackRef.current.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      // Scroll progress p in [0, 1]
      let p = -trackRect.top / totalScroll;
      p = Math.max(0, Math.min(1, p));

      // ────────────────────────────────────────────────────────────
      // STAGE 1: Supporting Copy Reveal (p: 0.04 → 0.35)
      // H1 and name label remain 100% visible and stationary.
      // ────────────────────────────────────────────────────────────
      const LEAD_START = 0.04;
      const LEAD_END = 0.35;

      if (leadRef.current) {
        if (p <= LEAD_START) {
          leadRef.current.style.opacity = "0";
          leadRef.current.style.transform = "translate3d(0, 20px, 0)";
          leadRef.current.style.visibility = "hidden";
        } else if (p < LEAD_END) {
          const t = (p - LEAD_START) / (LEAD_END - LEAD_START);
          const e = 1 - Math.pow(1 - t, 2.2);
          const op = e;
          const y = 20 * (1 - e);
          leadRef.current.style.opacity = op.toFixed(3);
          leadRef.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
          leadRef.current.style.visibility = "visible";
        } else {
          leadRef.current.style.opacity = "1";
          leadRef.current.style.transform = "translate3d(0, 0, 0)";
          leadRef.current.style.visibility = "visible";
        }
      }

      // ────────────────────────────────────────────────────────────
      // STAGE 2: "See the work" CTA Reveal (p: 0.35 → 0.65)
      // Name label, H1, and supporting copy remain fully visible.
      // ────────────────────────────────────────────────────────────
      const CTA_START = 0.35;
      const CTA_END = 0.65;

      if (ctaRef.current) {
        if (p <= CTA_START) {
          ctaRef.current.style.opacity = "0";
          ctaRef.current.style.transform = "translate3d(0, 20px, 0)";
          ctaRef.current.style.visibility = "hidden";
          ctaRef.current.style.pointerEvents = "none";
        } else if (p < CTA_END) {
          const t = (p - CTA_START) / (CTA_END - CTA_START);
          const e = 1 - Math.pow(1 - t, 2.2);
          const op = e;
          const y = 20 * (1 - e);
          ctaRef.current.style.opacity = op.toFixed(3);
          ctaRef.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
          ctaRef.current.style.visibility = "visible";
          ctaRef.current.style.pointerEvents = op > 0.4 ? "auto" : "none";
        } else {
          ctaRef.current.style.opacity = "1";
          ctaRef.current.style.transform = "translate3d(0, 0, 0)";
          ctaRef.current.style.visibility = "visible";
          ctaRef.current.style.pointerEvents = "auto";
        }
      }

      // ────────────────────────────────────────────────────────────
      // STAGES 1, 2, 3: Synchronized Background Image Movement & Expansion (p: 0.02 → 0.88)
      // Begins moving & expanding in Stage 1, continues through Stage 2,
      // and completes to full-bleed in Stage 3.
      // ────────────────────────────────────────────────────────────
      const EXPAND_START = 0.02;
      const EXPAND_END = 0.88;

      if (bgFrameRef.current) {
        if (p <= EXPAND_START) {
          bgFrameRef.current.style.transform = `translate3d(0, ${metrics.initialY}px, 0) scale(${metrics.initialScale})`;
          bgFrameRef.current.style.borderRadius = `${metrics.initialRadius}px`;
          bgFrameRef.current.style.borderColor = "rgba(255, 255, 255, 0.12)";
          bgFrameRef.current.style.boxShadow = "0 24px 64px -16px rgba(0, 0, 0, 0.75)";
        } else if (p < EXPAND_END) {
          const t = (p - EXPAND_START) / (EXPAND_END - EXPAND_START);
          const e = 1 - Math.pow(1 - t, 2.4);
          const curScale = metrics.initialScale + (1.0 - metrics.initialScale) * e;
          const curY = metrics.initialY * (1 - e);
          const curRadius = metrics.initialRadius * (1 - e);
          const borderAlpha = 0.12 * (1 - e);
          const shadowAlpha = 0.75 * (1 - e);

          bgFrameRef.current.style.transform = `translate3d(0, ${curY.toFixed(1)}px, 0) scale(${curScale.toFixed(4)})`;
          bgFrameRef.current.style.borderRadius = `${curRadius.toFixed(1)}px`;
          bgFrameRef.current.style.borderColor = `rgba(255, 255, 255, ${borderAlpha.toFixed(3)})`;
          bgFrameRef.current.style.boxShadow = `0 24px 64px -16px rgba(0, 0, 0, ${shadowAlpha.toFixed(3)})`;
        } else {
          bgFrameRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
          bgFrameRef.current.style.borderRadius = "0px";
          bgFrameRef.current.style.borderColor = "transparent";
          bgFrameRef.current.style.boxShadow = "none";
        }
      }

      // ────────────────────────────────────────────────────────────
      // Contrast Scrim: Maintains high contrast so text is readable
      // throughout all stages, settling comfortably over the expanded image.
      // ────────────────────────────────────────────────────────────
      if (scrimRef.current) {
        const e = Math.min(1, Math.max(0, (p - 0.04) / 0.84));
        const scrimOpacity = 0.80 - 0.08 * e;
        scrimRef.current.style.opacity = scrimOpacity.toFixed(3);
      }
    };

    const onScrollOrResize = () => {
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    const handleResize = () => {
      metrics = getMetrics();
      onScrollOrResize();
    };

    updateFrame();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-expand-track" ref={trackRef}>
      <section
        id="hero-section"
        className="hero signal-hero hero--center hero-expand-sticky"
        ref={stickyRef}
        aria-labelledby="hero-title"
      >
        {/* Background Visual Layer: Expands and repositions to cover viewport */}
        <div className="hero-expand-bg" aria-hidden="true">
          <div className="hero-expand-bg-frame" ref={bgFrameRef}>
            <picture>
              <source
                type="image/avif"
                srcSet={`${asset("shots/hero-desk-800.avif")} 800w, ${asset("shots/hero-desk-1440.avif")} 1440w`}
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet={`${asset("shots/hero-desk-800.webp")} 800w, ${asset("shots/hero-desk-1440.webp")} 1440w`}
                sizes="100vw"
              />
              <img
                src={asset("shots/hero-desk-1440.webp")}
                alt=""
                width={1440}
                height={960}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="hero-expand-bg-img"
              />
            </picture>
            {/* Scrim overlay: protects typography contrast at all times */}
            <div className="hero-expand-scrim" ref={scrimRef} />
          </div>
        </div>

        {/* Foreground Content: Progressive Staged Text Reveal */}
        <div className="container hero-expand-content">
          {/* Eyebrow / Name label — always visible */}
          <div className="hero-expand-eyebrow">
            <span className="hero-expand-eyebrow-dot" aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Headline (H1) — always visible throughout the entire sequence */}
          <h1 id="hero-title" className="display hero__title hero-expand-title">
            {hero.headline.includes(" and ") ? (
              <>
                {hero.headline.split(" and ")[0]} and <br />
                {hero.headline.split(" and ")[1]}
              </>
            ) : (
              hero.headline
            )}
          </h1>

          {/* Supporting Copy — revealed in Scroll Stage 1 */}
          <p className="lead hero-expand-lead" ref={leadRef}>
            {hero.sub}
          </p>

          {/* "See the work" CTA — revealed in Scroll Stage 2 */}
          <div className="hero-expand-actions" ref={ctaRef}>
            <Link href="/websites/" className="btn btn--primary">
              See the work <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
