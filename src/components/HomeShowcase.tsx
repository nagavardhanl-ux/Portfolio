"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "./icons";
import { siteById } from "@/data/sites";
import { asset } from "@/lib/config";

const vhSite = siteById("venturehub360");
const aiqodSite = siteById("aiqod");
const aiqod360Site = siteById("aiqod360");

/**
 * Silent, looped live-scrolling screen player.
 * Uses native video playback throttled with IntersectionObserver.
 */
function LiveScreen({
  name,
  url,
  poster,
  alt,
}: {
  name: string;
  url: string;
  poster: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const promise = video.play();
          if (promise !== undefined) {
            promise
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="showcase-browser-canvas">
      {/* Top browser bar */}
      <div className="showcase-browser-bar">
        <div className="showcase-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="showcase-browser-url">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {url}
        </div>
        <div className="showcase-live-tag">
          <span className="showcase-live-dot" />
          <span>LIVE SCROLL</span>
        </div>
      </div>

      {/* Screen container */}
      <div className="showcase-screen-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(`shots/${poster}`)}
          alt={alt}
          className={`showcase-screen-poster ${isPlaying ? "is-hidden" : ""}`}
          loading="lazy"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="showcase-screen-video"
          aria-label={alt}
        >
          <source src={asset(`clips/${name}.webm`)} type="video/webm" />
          <source src={asset(`clips/${name}.mp4`)} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default function HomeShowcase() {
  return (
    <div className="home-showcase">
      {/* ===================================================================
          1. VENTUREHUB360 — Content LEFT, Visual RIGHT
          AI pitch evaluation & IC memo intelligence
      =================================================================== */}
      <article className="showcase-card showcase-card--row reveal" aria-labelledby="showcase-vh">
        <div className="showcase-card__layout">
          {/* Content Left */}
          <div className="showcase-info">
            <div className="showcase-info__eyebrow">
              <span className="showcase-info__idx">01</span>
              <span className="showcase-info__sep">•</span>
              <span className="showcase-info__tag">BUILT FROM SCRATCH</span>
            </div>

            <h3 id="showcase-vh" className="showcase-info__title">
              <a
                href={vhSite.embedUrl || vhSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-info__title-link"
              >
                {vhSite.name}
                <ArrowUpRight className="showcase-info__icon" />
              </a>
            </h3>

            <p className="showcase-info__desc">{vhSite.line}</p>

            <div className="showcase-info__highlights">
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>AI pitch evaluation &amp; IC-ready memo generator</span>
              </div>
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>Two-sided platform: VCs evaluate, founders practice</span>
              </div>
            </div>

            <div className="showcase-info__actions">
              <a
                href={vhSite.embedUrl || vhSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-btn showcase-btn--purple"
              >
                Visit VentureHub360 <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Visual Right */}
          <div className="showcase-stage showcase-stage--vh" aria-hidden="true">
            <LiveScreen
              name="venturehub360"
              url="venturehub360.com"
              poster="venturehub360-1440.webp"
              alt="VentureHub360 live scrolling screen"
            />
          </div>
        </div>
      </article>

      {/* ===================================================================
          2. AIQOD — Visual LEFT, Content RIGHT (Alternating!)
          Enterprise Agentic AI Platform & Operations Topology
      =================================================================== */}
      <article className="showcase-card showcase-card--row showcase-card--reverse reveal" aria-labelledby="showcase-aiqod">
        <div className="showcase-card__layout">
          {/* Content (will appear on the Right via CSS order on desktop) */}
          <div className="showcase-info">
            <div className="showcase-info__eyebrow">
              <span className="showcase-info__idx">02</span>
              <span className="showcase-info__sep">•</span>
              <span className="showcase-info__tag">REBUILT FROM PREVIOUS VERSION</span>
            </div>

            <h3 id="showcase-aiqod" className="showcase-info__title">
              <a
                href={aiqodSite.embedUrl || aiqodSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-info__title-link"
              >
                {aiqodSite.name}
                <ArrowUpRight className="showcase-info__icon" />
              </a>
            </h3>

            <p className="showcase-info__desc">{aiqodSite.line}</p>

            <div className="showcase-info__highlights">
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>The Intelligence Layer for autonomous enterprise agents</span>
              </div>
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>Moved off WordPress, completely rebuilt with new structure &amp; SEO</span>
              </div>
            </div>

            <div className="showcase-info__actions">
              <a
                href={aiqodSite.embedUrl || aiqodSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-btn showcase-btn--cyan"
              >
                Visit AIQoD <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Visual (will appear on the Left via CSS order on desktop) */}
          <div className="showcase-stage showcase-stage--aiqod" aria-hidden="true">
            <LiveScreen
              name="aiqod"
              url="aiqod.com"
              poster="aiqod-1440.webp"
              alt="AIQoD live scrolling screen"
            />
          </div>
        </div>
      </article>

      {/* ===================================================================
          3. AIQOD360 — Content LEFT, Visual RIGHT (Alternating!)
          Super App & Multi-Agent Workflows
      =================================================================== */}
      <article className="showcase-card showcase-card--row reveal" aria-labelledby="showcase-aiqod360">
        <div className="showcase-card__layout">
          {/* Content Left */}
          <div className="showcase-info">
            <div className="showcase-info__eyebrow">
              <span className="showcase-info__idx">03</span>
              <span className="showcase-info__sep">•</span>
              <span className="showcase-info__tag">MANAGED IN WIX EDITOR</span>
            </div>

            <h3 id="showcase-aiqod360" className="showcase-info__title">
              <a
                href={aiqod360Site.embedUrl || aiqod360Site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-info__title-link"
              >
                {aiqod360Site.name}
                <ArrowUpRight className="showcase-info__icon" />
              </a>
            </h3>

            <p className="showcase-info__desc">{aiqod360Site.line}</p>

            <div className="showcase-info__highlights">
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>Super App architecture: multiple AI agents in one ecosystem</span>
              </div>
              <div className="showcase-highlight">
                <span className="showcase-highlight__dot" aria-hidden="true" />
                <span>Automating accounts payable, hiring, collaboration and sales</span>
              </div>
            </div>

            <div className="showcase-info__actions">
              <a
                href={aiqod360Site.embedUrl || aiqod360Site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-btn showcase-btn--coral"
              >
                Visit AIQoD360 <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Visual Right */}
          <div className="showcase-stage showcase-stage--aiqod360" aria-hidden="true">
            <LiveScreen
              name="aiqod360"
              url="aiqod360.com"
              poster="aiqod360-1440.webp"
              alt="AIQoD360 live scrolling screen"
            />
          </div>
        </div>
      </article>

      {/* Footer link to all websites */}
      <div className="showcase-footer reveal">
        <Link href="/websites/" className="arrow-link">
          All eight websites <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
