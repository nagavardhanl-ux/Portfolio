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

      {/* 01. COMPANY WEBSITES (Span 7 cols) - Priority Anchor */}
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

      {/* 02. AGENTIC AI CONTENT CLUSTER (Span 5 cols) - Priority Anchor */}
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
              <span className="sb-cluster-status">Pillar and spoke</span>
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
              <span className="sb-brief-time">08:00 AM / Leadership team</span>
            </div>
            <div className="sb-brief-signals" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "6px" }}>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Top story</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>The one development everyone needs today</p>
                </div>
              </div>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Founder</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Market and strategy</p>
                </div>
              </div>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Sales</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Buyer and competitor signals</p>
                </div>
              </div>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>R&amp;D</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>New tech and product angles</p>
                </div>
              </div>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Delivery</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Rollout and operations</p>
                </div>
              </div>
              <div className="sb-signal-item" style={{ padding: "6px 8px" }}>
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Mondays</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Social content pack for the week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 04. INVESTOR DATABASES (Span 7 cols) - Priority Anchor */}
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
              <div style={{ background: "#202125", border: "1px solid #343438", borderRadius: "6px", padding: "8px 10px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.06em", fontWeight: 600 }}>PRODUCT OUTREACH</span>
                <span style={{ display: "block", fontSize: "0.74rem", color: "#F4F0E8", fontWeight: 500, marginTop: "2px" }}>Smart AI Investor</span>
              </div>
              <div style={{ background: "#202125", border: "1px solid #343438", borderRadius: "6px", padding: "8px 10px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.06em", fontWeight: 600 }}>FUNDRAISING OUTREACH</span>
                <span style={{ display: "block", fontSize: "0.74rem", color: "#F4F0E8", fontWeight: 500, marginTop: "2px" }}>Company seed round</span>
              </div>
            </div>

            <div className="sb-db-header-chips">
              <span className="sb-stat-chip">Angels</span>
              <span className="sb-stat-chip">Angel networks</span>
              <span className="sb-stat-chip">Family offices</span>
              <span className="sb-stat-chip">VC firms</span>
              <span className="sb-stat-chip">Accelerators</span>
            </div>

            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#85847F", letterSpacing: "0.08em", marginBottom: "6px" }}>EACH RECORD HOLDS</span>
              <div className="sb-db-header-chips">
                <span className="sb-stat-chip">Investment sectors</span>
                <span className="sb-stat-chip">Region</span>
                <span className="sb-stat-chip">Source quality</span>
                <span className="sb-stat-chip">Priority targets</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 3: B2B ICP & CONTENT SERIES (6 cols + 6 cols)
          ========================================================================= */}

      {/* 05. SEGMENT ICP PLAYBOOK (Span 6 cols) */}
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
          <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#85847F", letterSpacing: "0.08em", marginBottom: "6px" }}>SEGMENTS</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="sb-stat-chip">VC fund partners</span>
                <span className="sb-stat-chip">Angel networks</span>
                <span className="sb-stat-chip">Accelerators</span>
                <span className="sb-stat-chip">Solo angels</span>
                <span className="sb-stat-chip">Family offices</span>
              </div>
            </div>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#85847F", letterSpacing: "0.08em", marginBottom: "6px" }}>EACH SEGMENT COVERS</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="sb-stat-chip">Decision makers</span>
                <span className="sb-stat-chip">Pain points</span>
                <span className="sb-stat-chip">Buying triggers</span>
                <span className="sb-stat-chip">Channels</span>
                <span className="sb-stat-chip">Messaging angle</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingTop: "6px", borderTop: "1px solid #343438" }}>
              <SvgCheck className="sb-check-icon" />
              <span style={{ fontSize: "0.68rem", color: "var(--cat-accent, #91B5A0)", fontFamily: "var(--font-mono)" }}>Conflict-of-interest screening built in</span>
            </div>
          </div>
        </div>
      </article>

      {/* 06. TWO BLOG SERIES FOR VENTUREHUB360 (Span 6 cols) */}
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
                <span className="sb-series-count">SERIES</span>
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
                <span className="sb-series-count">SERIES</span>
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
          ROW 4: COMPETITIVE RESEARCH & PRODUCT ICPS (7 cols + 5 cols)
          ========================================================================= */}

      {/* 07. COMPETITIVE RESEARCH ACROSS PRODUCTS (Span 7 cols) */}
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

        {/* Visual: Competitive Research by Product */}
        <div className="sb-visual sb-visual--competitor" aria-hidden="true">
          <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ background: "#202125", border: "1px solid #343438", borderRadius: "6px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#F4F0E8" }}>Smart AI Investor</span>
              <p style={{ fontSize: "0.65rem", color: "#B9B8B3", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Studied against: </span>
                PitchBook, Affinity, Harmonic, Hatcher, Caena
              </p>
              <p style={{ fontSize: "0.65rem", color: "var(--cat-accent, #D5B77A)", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Used for: </span>
                Comparison pages and positioning
              </p>
            </div>

            <div style={{ background: "#202125", border: "1px solid #343438", borderRadius: "6px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#F4F0E8" }}>AIQoD platform</span>
              <p style={{ fontSize: "0.65rem", color: "#B9B8B3", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Studied against: </span>
                Point solutions, agent frameworks, vendor AI suites, services-led builds
              </p>
              <p style={{ fontSize: "0.65rem", color: "var(--cat-accent, #D5B77A)", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Used for: </span>
                Website messaging
              </p>
            </div>

            <div style={{ background: "#202125", border: "1px solid #343438", borderRadius: "6px", padding: "8px 10px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "0.74rem", fontWeight: 600, color: "#F4F0E8" }}>Sales X</span>
              <p style={{ fontSize: "0.65rem", color: "#B9B8B3", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Studied against: </span>
                Established and new lead generation platforms
              </p>
              <p style={{ fontSize: "0.65rem", color: "var(--cat-accent, #D5B77A)", margin: 0, lineHeight: 1.35 }}>
                <span style={{ color: "#85847F", fontFamily: "var(--font-mono)", fontSize: "0.58rem" }}>Used for: </span>
                Pricing and packaging
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 08. PRODUCT ICPS ACROSS THE PORTFOLIO (Span 5 cols) */}
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

        {/* Visual: Product ICP Portfolio Matrix */}
        <div className="sb-visual sb-visual--products" aria-hidden="true">
          <div className="sb-products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "7px", padding: "10px" }}>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>M&amp;A deal sourcing and analysis</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Contract digitization</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Hiring and resume screening</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Ticket management</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Pharma pricing analytics</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>E-KYC</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Smart AI Investor</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>VentureHub360</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Startup Pitch Analyser</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>VentureHub360</span>
            </div>
            <div className="sb-product-pill" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", padding: "6px 9px" }}>
              <span className="sb-prod-name" style={{ fontSize: "0.72rem", color: "#F4F0E8", fontWeight: 500, lineHeight: 1.25 }}>Fleet compliance</span>
              <span className="sb-prod-brand" style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--cat-accent, #83AFC7)", letterSpacing: "0.04em" }}>AIQoD</span>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 5: MEDIA, RECOVERY & MARKETS (4 cols + 4 cols + 4 cols)
          ========================================================================= */}

      {/* 09. AI AVATAR AND PRODUCT VIDEOS (Span 4 cols) */}
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

      {/* 10. REBUILT THE AIQOD BLOG (Span 4 cols) */}
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
                <span className="sb-step-title">Rebuilt from scratch</span>
                <span className="sb-step-sub">New posts, structure and SEO</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 11. INTERNATIONAL PARTNER RESEARCH (Span 4 cols) */}
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
          <div className="sb-partners-dossier" style={{ gap: "12px", padding: "14px 12px" }}>
            <div className="sb-partner-tiers" style={{ gap: "8px" }}>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Resell and white-label</span>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Implementation partners</span>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Referral partners</span>
            </div>
            <div className="sb-partner-tiers" style={{ gap: "8px" }}>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Tier 2 and 3 firms</span>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Mid-size and smaller companies</span>
              <span className="sb-tier-pill" style={{ padding: "4px 9px", fontSize: "0.7rem" }}>Researched country by country</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
