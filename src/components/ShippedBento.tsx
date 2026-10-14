"use client";

import React from "react";
import { asset } from "@/lib/config";
import { shipped } from "@/data/shipped";

/* Inline SVG helpers for crisp, light graphics */
const SvgCheck = ({ className = "" }: { className?: string }) => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SvgCross = ({ className = "" }: { className?: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SvgRadar = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SvgChart = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const SvgMigrationArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

const SvgWarning = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/**
 * Polished Art-Directed Asymmetric Bento Grid for "What I've Shipped"
 * Features clear card silhouettes, consistent 16px desktop gaps,
 * distinct charcoal/slate surfaces, and restrained ambient lighting.
 */
export default function ShippedBento() {
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.setProperty("--card-px", `${(x * 16).toFixed(1)}px`);
    e.currentTarget.style.setProperty("--card-py", `${(y * 16).toFixed(1)}px`);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--card-px", "0px");
    e.currentTarget.style.setProperty("--card-py", "0px");
  };

  return (
    <div className="shipped-bento" role="region" aria-label="What I've shipped gallery">
      {/* =========================================================================
          ROW 1: FEATURED CARDS (7 cols + 5 cols)
          ========================================================================= */}

      {/* 01. 8 WEBSITES (Span 7 cols) — Priority Anchor */}
      <article
        className="sb-card sb-card--websites sb-card--gold reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("shipped-bg.jpg")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[10].label}</h3>
          <p className="sb-card__desc">{shipped[10].detail}</p>
        </div>

        {/* Visual: Direct Multi-Site Panoramic Screenshot Strip */}
        <div className="sb-visual sb-visual--websites" aria-hidden="true">
          <div className="sb-site-strip">
            <div className="sb-site-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("shots/venturehub360-800.webp")}
                alt="VentureHub360 website preview"
                loading="lazy"
                className="sb-site-img"
              />
              <span className="sb-site-label">
                <span className="sb-dot sb-dot--live" /> VentureHub360
              </span>
            </div>
            <div className="sb-site-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("shots/aiqod-800.webp")}
                alt="AIQoD website preview"
                loading="lazy"
                className="sb-site-img"
              />
              <span className="sb-site-label">
                <span className="sb-dot sb-dot--live" /> AIQoD
              </span>
            </div>
            <div className="sb-site-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("shots/aiqod360-800.webp")}
                alt="AIQoD360 website preview"
                loading="lazy"
                className="sb-site-img"
              />
              <span className="sb-site-label">
                <span className="sb-dot sb-dot--live" /> AIQoD360
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* 02. 11-BLOG CONTENT CLUSTER (Span 5 cols) — Priority Anchor */}
      <article
        className="sb-card sb-card--cluster sb-card--gold reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("blog-cluster-bg.jpg")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[0].label}</h3>
          <p className="sb-card__desc">{shipped[0].detail}</p>
        </div>

        {/* Visual: Editorial Topic Cluster & Schema Framework */}
        <div className="sb-visual sb-visual--cluster" aria-hidden="true">
          <div className="sb-cluster-tree">
            <div className="sb-cluster-pillar">
              <span className="sb-cluster-marker">CORE PILLAR</span>
              <span className="sb-cluster-title">Enterprise Agentic AI Architecture</span>
              <span className="sb-cluster-status">Rank #1-3 Target</span>
            </div>
            <div className="sb-cluster-nodes">
              <div className="sb-cluster-node">
                <span className="sb-node-dot" />
                <span className="sb-node-text">Autonomous Agent Governance</span>
                <span className="sb-node-chip sb-node-chip--teal">FAQ Schema</span>
              </div>
              <div className="sb-cluster-node">
                <span className="sb-node-dot" />
                <span className="sb-node-text">AEO: Zero-Click Answers</span>
                <span className="sb-node-chip sb-node-chip--cyan">Perplexity / AI</span>
              </div>
              <div className="sb-cluster-node">
                <span className="sb-node-dot" />
                <span className="sb-node-text">Multi-Agent Workflow ROI</span>
                <span className="sb-node-chip sb-node-chip--teal">GEO Citations</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 2: DATA & INTELLIGENCE (7 cols + 5 cols)
          ========================================================================= */}

      {/* 03. DAILY AI INTELLIGENCE BRIEF (Span 5 cols) */}
      <article
        className="sb-card sb-card--brief sb-card--violet reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("brief-bg.jpg")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[6].label}</h3>
          <p className="sb-card__desc">{shipped[6].detail}</p>
        </div>

        {/* Visual: Executive Morning Dispatch Terminal Preview */}
        <div className="sb-visual sb-visual--brief" aria-hidden="true">
          <div className="sb-brief-dispatch">
            <div className="sb-brief-top">
              <span className="sb-brief-badge">
                <span className="sb-brief-pulse" /> EXECUTIVE DISPATCH
              </span>
              <span className="sb-brief-time">08:00 AM • 5 C-Level Execs</span>
            </div>
            <div className="sb-brief-signals">
              <div className="sb-signal-item">
                <span className="sb-sig-icon"><SvgRadar /></span>
                <div>
                  <span className="sb-sig-head">Agentic AI LLM Pricing Shift</span>
                  <p className="sb-sig-desc">Inference cost analysis on multi-agent execution pipelines.</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <span className="sb-sig-icon"><SvgChart /></span>
                <div>
                  <span className="sb-sig-head">Competitor Valuation Update</span>
                  <p className="sb-sig-desc">PitchBook rolled out autonomous startup scoring feature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 04. 2,300+ INVESTOR RECORDS (Span 7 cols) — Priority Anchor */}
      <article
        className="sb-card sb-card--investors sb-card--blue reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("investors-bg.jpg")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[4].label}</h3>
          <p className="sb-card__desc">{shipped[4].detail}</p>
        </div>

        {/* Visual: High-Density Structured Database Table */}
        <div className="sb-visual sb-visual--table" aria-hidden="true">
          <div className="sb-db-preview">
            <div className="sb-db-header-chips">
              <span className="sb-stat-chip"><b>1,221</b> Angels</span>
              <span className="sb-stat-chip"><b>835</b> Family Offices</span>
              <span className="sb-stat-chip"><b>263</b> VC Firms</span>
            </div>
            <div className="sb-db-table">
              <div className="sb-db-row sb-db-row--head">
                <span>INVESTOR ENTITY</span>
                <span>CATEGORY</span>
                <span>TICKET SIZE</span>
                <span>VERIFICATION</span>
              </div>
              <div className="sb-db-row">
                <span className="sb-entity">Beacon Crest Capital</span>
                <span className="sb-category">Family Office</span>
                <span className="sb-ticket">$2M – $10M</span>
                <span className="sb-verified"><SvgCheck className="sb-check-icon" /> 100% Clean</span>
              </div>
              <div className="sb-db-row">
                <span className="sb-entity">Nexus Horizon Ventures</span>
                <span className="sb-category">Venture Capital</span>
                <span className="sb-ticket">Series A / B</span>
                <span className="sb-verified"><SvgCheck className="sb-check-icon" /> 100% Clean</span>
              </div>
              <div className="sb-db-row">
                <span className="sb-entity">Bay Area Syndicate</span>
                <span className="sb-category">Angel Syndicate</span>
                <span className="sb-ticket">$100K – $500K</span>
                <span className="sb-verified"><SvgCheck className="sb-check-icon" /> 100% Clean</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 3: B2B ICP & CONTENT SERIES (6 cols + 6 cols)
          ========================================================================= */}

      {/* 05. 80+ SEGMENT ICP PLAYBOOK (Span 6 cols) */}
      <article
        className="sb-card sb-card--playbook sb-card--sage reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[3].label}</h3>
          <p className="sb-card__desc">{shipped[3].detail}</p>
        </div>

        {/* Visual: Segment & Messaging Playbook Matrix */}
        <div className="sb-visual sb-visual--playbook" aria-hidden="true">
          <div className="sb-playbook-grid">
            <div className="sb-playbook-tier">
              <div className="sb-tier-header">
                <span className="sb-tier-title">Early-Stage VC Funds</span>
                <span className="sb-tier-tag">Segment 01</span>
              </div>
              <p className="sb-tier-pain"><b>Pain:</b> 50+ decks/week review bandwidth bottleneck</p>
              <p className="sb-tier-hook"><b>Hook:</b> Automated 1st-pass IC memo in under 3 minutes</p>
            </div>
            <div className="sb-playbook-tier">
              <div className="sb-tier-header">
                <span className="sb-tier-title">Single Family Offices</span>
                <span className="sb-tier-tag">Segment 02</span>
              </div>
              <p className="sb-tier-pain"><b>Pain:</b> Sourcing un-brokered direct AI startup deals</p>
              <p className="sb-tier-hook"><b>Hook:</b> Proprietary thesis matching with vetted financials</p>
            </div>
          </div>
        </div>
      </article>

      {/* 06. 20 BLOGS ACROSS TWO SERIES (Span 6 cols) */}
      <article
        className="sb-card sb-card--series sb-card--gold reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("series-bg.jpg")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[1].label}</h3>
          <p className="sb-card__desc">{shipped[1].detail}</p>
        </div>

        {/* Visual: Dual-Series Rack Display */}
        <div className="sb-visual sb-visual--series" aria-hidden="true">
          <div className="sb-series-rack">
            <div className="sb-series-card">
              <div className="sb-series-header">
                <span className="sb-series-badge">SERIES 1</span>
                <span className="sb-series-count">10 PARTS</span>
              </div>
              <h4 className="sb-series-name">The Dealflow Problem</h4>
              <ul className="sb-series-list">
                <li><span className="sb-item-num">01</span> Why Traditional Screening Fails</li>
                <li><span className="sb-item-num">02</span> Solo GP Bandwidth Bottlenecks</li>
                <li><span className="sb-item-num">03</span> Autonomous IC Evaluation</li>
              </ul>
            </div>
            <div className="sb-series-card">
              <div className="sb-series-header">
                <span className="sb-series-badge">SERIES 2</span>
                <span className="sb-series-count">10 BLOGS</span>
              </div>
              <h4 className="sb-series-name">Startup Pitch Analyser</h4>
              <ul className="sb-series-list">
                <li><span className="sb-item-num">01</span> Anatomy of an AI Pitch Deck</li>
                <li><span className="sb-item-num">02</span> Founder-Investor Asymmetry</li>
                <li><span className="sb-item-num">03</span> Metrics That Matter in 2026</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 4: MULTI-MEDIA & RECOVERY (4 cols + 4 cols + 4 cols)
          ========================================================================= */}

      {/* 07. AI AVATAR AND PRODUCT VIDEOS (Span 4 cols) */}
      <article
        className="sb-card sb-card--videos sb-card--violet reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[7].label}</h3>
          <p className="sb-card__desc">{shipped[7].detail}</p>
        </div>

        {/* Visual: Video Monitor & Audio Waveform Preview */}
        <div className="sb-visual sb-visual--videos" aria-hidden="true">
          <div className="sb-video-deck">
            <div className="sb-video-screen">
              <div className="sb-video-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("icons/heygen.png")}
                  alt="HeyGen"
                  className="sb-heygen-icon"
                />
                <span className="sb-play-btn">▶</span>
              </div>
              <div className="sb-video-meta">
                <span className="sb-video-time">02:18 / 1080p 60fps</span>
                <span className="sb-video-sub">“AI Agents for Enterprise Ops”</span>
              </div>
            </div>
            <div className="sb-waveform" aria-hidden="true">
              <span style={{ height: "40%" }} />
              <span style={{ height: "70%" }} />
              <span style={{ height: "100%" }} />
              <span style={{ height: "55%" }} />
              <span style={{ height: "85%" }} />
              <span style={{ height: "60%" }} />
              <span style={{ height: "90%" }} />
              <span style={{ height: "35%" }} />
              <span style={{ height: "75%" }} />
              <span style={{ height: "95%" }} />
              <span style={{ height: "50%" }} />
              <span style={{ height: "80%" }} />
            </div>
          </div>
        </div>
      </article>

      {/* 08. COMPETITOR COMPARISON CONTENT (Span 4 cols) */}
      <article
        className="sb-card sb-card--competitor sb-card--gold reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[8].label}</h3>
          <p className="sb-card__desc">{shipped[8].detail}</p>
        </div>

        {/* Visual: Head-to-Head Comparison Grid */}
        <div className="sb-visual sb-visual--competitor" aria-hidden="true">
          <div className="sb-compare-box">
            <div className="sb-compare-row sb-compare-row--head">
              <span>CRITERIA</span>
              <span className="sb-hl">OURS</span>
              <span>PITCHBOOK</span>
              <span>AFFINITY</span>
            </div>
            <div className="sb-compare-row">
              <span className="sb-crit">Instant IC Memo</span>
              <span className="sb-hl sb-check-wrap"><SvgCheck className="sb-check-icon" /> Yes</span>
              <span className="sb-x"><SvgCross className="sb-cross-icon" /> No</span>
              <span className="sb-x"><SvgCross className="sb-cross-icon" /> No</span>
            </div>
            <div className="sb-compare-row">
              <span className="sb-crit">AI Deal Scoring</span>
              <span className="sb-hl sb-check-wrap"><SvgCheck className="sb-check-icon" /> Yes</span>
              <span className="sb-partial">~ Filter</span>
              <span className="sb-x"><SvgCross className="sb-cross-icon" /> No</span>
            </div>
            <div className="sb-compare-row">
              <span className="sb-crit">Solo GP Pricing</span>
              <span className="sb-hl sb-check-wrap"><SvgCheck className="sb-check-icon" /> Yes</span>
              <span className="sb-x">$25K+</span>
              <span className="sb-x">Seat-fee</span>
            </div>
          </div>
        </div>
      </article>

      {/* 09. REBUILT THE AIQOD BLOG (Span 4 cols) */}
      <article
        className="sb-card sb-card--rebuilt sb-card--sage reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[9].label}</h3>
          <p className="sb-card__desc">{shipped[9].detail}</p>
        </div>

        {/* Visual: Migration Recovery Timeline */}
        <div className="sb-visual sb-visual--rebuilt" aria-hidden="true">
          <div className="sb-recovery-timeline">
            <div className="sb-recovery-step sb-recovery-step--alert">
              <span className="sb-step-icon"><SvgWarning /></span>
              <div>
                <span className="sb-step-title">WordPress Wipe</span>
                <span className="sb-step-sub">Database wiped during host migration</span>
              </div>
            </div>
            <div className="sb-recovery-arrow">
              <SvgMigrationArrow />
            </div>
            <div className="sb-recovery-step sb-recovery-step--success">
              <span className="sb-step-icon sb-step-icon--success"><SvgCheck /></span>
              <div>
                <span className="sb-step-title">Next.js Headless Rebuild</span>
                <span className="sb-step-sub">100% URLs, Meta & Schema Restored</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 5: RESEARCH & MARKETS (6 cols + 6 cols)
          ========================================================================= */}

      {/* 10. ICPS FOR 6 PRODUCTS (Span 6 cols) */}
      <article
        className="sb-card sb-card--products sb-card--blue reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[2].label}</h3>
          <p className="sb-card__desc">{shipped[2].detail}</p>
        </div>

        {/* Visual: 6-Product Persona Matrix */}
        <div className="sb-visual sb-visual--products" aria-hidden="true">
          <div className="sb-products-grid">
            <div className="sb-product-pill">
              <span className="sb-prod-num">01</span>
              <div>
                <span className="sb-prod-name">M&A Deal Platform</span>
                <span className="sb-prod-role">Target: CFO / Corp Dev</span>
              </div>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-num">02</span>
              <div>
                <span className="sb-prod-name">Contract Digitization</span>
                <span className="sb-prod-role">Target: General Counsel</span>
              </div>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-num">03</span>
              <div>
                <span className="sb-prod-name">AI ATS Recruiter</span>
                <span className="sb-prod-role">Target: VP Talent</span>
              </div>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-num">04</span>
              <div>
                <span className="sb-prod-name">Ticket Management</span>
                <span className="sb-prod-role">Target: VP Operations</span>
              </div>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-num">05</span>
              <div>
                <span className="sb-prod-name">Pharma Analytics</span>
                <span className="sb-prod-role">Target: R&D Director</span>
              </div>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-num">06</span>
              <div>
                <span className="sb-prod-name">E-KYC Verifier</span>
                <span className="sb-prod-role">Target: Compliance Head</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 11. PARTNER RESEARCH, 19 COUNTRIES (Span 6 cols) */}
      <article
        className="sb-card sb-card--partners sb-card--blue reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[5].label}</h3>
          <p className="sb-card__desc">{shipped[5].detail}</p>
        </div>

        {/* Visual: Global Market Partner Coverage Dossier */}
        <div className="sb-visual sb-visual--partners" aria-hidden="true">
          <div className="sb-partners-dossier">
            <div className="sb-countries-cloud">
              <span className="sb-country-tag"><span className="sb-flag">🇺🇸</span> USA</span>
              <span className="sb-country-tag"><span className="sb-flag">🇬🇧</span> UK</span>
              <span className="sb-country-tag"><span className="sb-flag">🇦🇪</span> UAE</span>
              <span className="sb-country-tag"><span className="sb-flag">🇸🇬</span> Singapore</span>
              <span className="sb-country-tag"><span className="sb-flag">🇩🇪</span> Germany</span>
              <span className="sb-country-tag"><span className="sb-flag">🇫🇷</span> France</span>
              <span className="sb-country-tag"><span className="sb-flag">🇦🇺</span> Australia</span>
              <span className="sb-country-tag"><span className="sb-flag">🇯🇵</span> Japan</span>
              <span className="sb-country-tag"><span className="sb-flag">🇨🇦</span> Canada</span>
              <span className="sb-country-tag"><span className="sb-flag">🇳🇱</span> Netherlands</span>
              <span className="sb-country-tag sb-country-tag--more">+9 Global Mkts</span>
            </div>
            <div className="sb-partner-tiers">
              <span className="sb-tier-pill">System Integrators</span>
              <span className="sb-tier-pill">Tier-1 VARs</span>
              <span className="sb-tier-pill">B2B Consultancies</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
