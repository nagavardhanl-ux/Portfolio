"use client";

import React from "react";
import Link from "next/link";
import { asset } from "@/lib/config";
import { shipped } from "@/data/shipped";



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
            src={asset("shipped-bg.webp")}
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
            src={asset("blog-cluster-bg.webp")}
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
        <div className="sb-visual sb-visual--cluster">
          <div className="sb-cluster-tree">
            <a
              href="https://aiqod.com/blog/what-is-agentic-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="sb-cluster-pillar"
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
                <span className="sb-cluster-marker">CORE PILLAR</span>
                <span className="sb-cluster-title" style={{ fontSize: "0.76rem", lineHeight: 1.3 }}>
                  What Is Agentic AI? The Complete Enterprise Guide
                </span>
              </div>
              <span className="sb-cluster-status" style={{ flexShrink: 0 }}>Pillar and spoke</span>
            </a>
            <div className="sb-cluster-nodes">
              <a
                href="https://aiqod.com/blog/agentic-ai-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="sb-cluster-node"
                style={{ textDecoration: "none" }}
              >
                <span className="sb-node-dot" />
                <span className="sb-node-text">Agentic AI Statistics: Adoption, ROI and Market Size</span>
              </a>
              <a
                href="https://aiqod.com/blog/ai-agent-governance"
                target="_blank"
                rel="noopener noreferrer"
                className="sb-cluster-node"
                style={{ textDecoration: "none" }}
              >
                <span className="sb-node-dot" />
                <span className="sb-node-text">AI Agent Governance: Ownership, Policies and Lifecycle</span>
              </a>
              <a
                href="https://aiqod.com/blog/ai-agent-orchestration"
                target="_blank"
                rel="noopener noreferrer"
                className="sb-cluster-node"
                style={{ textDecoration: "none" }}
              >
                <span className="sb-node-dot" />
                <span className="sb-node-text">AI Agent Orchestration: Coordinating Multi Agent Workflows</span>
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "2px" }}>
              <a
                href="https://aiqod.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--cat-accent, #D5B77A)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Read the cluster ↗
              </a>
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
            src={asset("brief-bg.webp")}
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
                <span className="sb-brief-pulse" /> DAILY BRIEF
              </span>
            </div>
            <div className="sb-brief-signals" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "6px" }}>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Top story</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>The one development everyone needs today</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Founder</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Market and strategy</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Sales</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Buyer and competitor signals</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>R&amp;D</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>New tech and product angles</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Delivery</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Rollout and operations</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--cat-accent, #A99AE0)", fontFamily: "var(--font-mono)" }}>Mondays</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Social content pack for the week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 04. OUTBOUND CAMPAIGNS (Span 7 cols) */}
      <article
        className="sb-card sb-card--investors sb-card--blue reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("investors-bg.webp")}
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

        {/* Visual: Outbound Campaigns */}
        <div className="sb-visual sb-visual--table" aria-hidden="true">
          <div className="sb-db-preview">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px" }}>
              <div className="sb-lane-card">
                <span className="sb-lane-head">PARTNERS</span>
                <span className="sb-lane-title">Resellers and implementation firms</span>
              </div>
              <div className="sb-lane-card">
                <span className="sb-lane-head">INVESTORS</span>
                <span className="sb-lane-title">Smart AI Investor and fundraising</span>
              </div>
              <div className="sb-lane-card">
                <span className="sb-lane-head">PRODUCTS</span>
                <span className="sb-lane-title">M&amp;A, hiring, fleet compliance</span>
              </div>
            </div>

            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>CHANNELS</span>
              <div className="sb-db-header-chips">
                <span className="sb-stat-chip">Cold email sequences</span>
                <span className="sb-stat-chip">LinkedIn outreach</span>
              </div>
            </div>

            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>BEFORE SENDING</span>
              <div className="sb-db-header-chips">
                <span className="sb-stat-chip">Targeting rules</span>
                <span className="sb-stat-chip">Lead scoring</span>
                <span className="sb-stat-chip">Verified lists</span>
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
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("playbook-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[3].label}</h3>
          <p className="sb-card__desc">{shipped[3].detail}</p>
        </div>

        {/* Visual: Segment & Messaging Playbook Matrix */}
        <div className="sb-visual sb-visual--playbook" aria-hidden="true">
          <div className="sb-playbook-content">
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>SEGMENTS</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="sb-stat-chip">VC fund partners</span>
                <span className="sb-stat-chip">Angel networks</span>
                <span className="sb-stat-chip">Accelerators</span>
                <span className="sb-stat-chip">Solo angels</span>
                <span className="sb-stat-chip">Family offices</span>
              </div>
            </div>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#FFFFFF", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>EACH SEGMENT COVERS</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="sb-stat-chip">Decision makers</span>
                <span className="sb-stat-chip">Pain points</span>
                <span className="sb-stat-chip">Buying triggers</span>
                <span className="sb-stat-chip">Channels</span>
                <span className="sb-stat-chip">Messaging angle</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 06. BLOGS FOR BOTH PLATFORMS (Span 6 cols) */}
      <article
        className="sb-card sb-card--series sb-card--gold reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("series-bg.webp")}
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

        {/* Visual: Platform Blogs Rack Display */}
        <div className="sb-visual sb-visual--series">
          <div className="sb-series-rack">
            <div className="sb-series-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="sb-series-header" style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#F4F0E8", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>AIQoD</span>
                  <span className="sb-stat-chip" style={{ fontSize: "0.58rem", color: "var(--cat-accent, #D5B77A)", borderColor: "var(--cat-accent-border, rgba(213, 183, 122, 0.25))", whiteSpace: "nowrap", display: "inline-block" }}>Enterprise AI</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "6px 0 12px" }}>
                  <span className="sb-stat-chip" style={{ whiteSpace: "nowrap" }}>Agentic AI</span>
                  <span className="sb-stat-chip" style={{ whiteSpace: "nowrap" }}>AI Governance</span>
                  <span className="sb-stat-chip" style={{ whiteSpace: "nowrap" }}>Enterprise Architecture</span>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://aiqod.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--cat-accent, #D5B77A)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Visit the blog ↗
                </a>
              </div>
            </div>

            <div className="sb-series-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="sb-series-header" style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#F4F0E8", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>VentureHub360</span>
                  <span className="sb-stat-chip" style={{ fontSize: "0.58rem", color: "var(--cat-accent, #D5B77A)", borderColor: "var(--cat-accent-border, rgba(213, 183, 122, 0.25))", whiteSpace: "nowrap", display: "inline-block" }}>Founders and investors</span>
                </div>
                <ul className="sb-series-list" style={{ margin: "6px 0 12px" }}>
                  <li>
                    <span className="sb-item-num">01</span>
                    <a
                      href="https://www.venturehub360.com/blog/evaluation-gap-pitch-decks"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Evaluation Gap: Why Pitch Decks Deserve More Than a Surface Read
                    </a>
                  </li>
                  <li>
                    <span className="sb-item-num">02</span>
                    <a
                      href="https://www.venturehub360.com/blog/what-investors-ask-in-a-pitch-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      What Investors Actually Ask in a Pitch Meeting
                    </a>
                  </li>
                  <li>
                    <span className="sb-item-num">03</span>
                    <a
                      href="https://www.venturehub360.com/blog/how-startup-funding-rounds-work"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How Startup Funding Rounds Work: Pre-Seed to Series B Explained
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://www.venturehub360.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--cat-accent, #D5B77A)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Visit the blog ↗
                </a>
              </div>
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
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("competitor-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[8].label}</h3>
          <p className="sb-card__desc">{shipped[8].detail}</p>
        </div>

        {/* Visual: Competitive Research by Product */}
        <div className="sb-visual sb-visual--competitor" aria-hidden="true">
          <div className="sb-competitor-content">
            <div className="sb-competitor-card">
              <span className="sb-comp-title">Smart AI Investor</span>
              <p className="sb-comp-desc">
                <span className="sb-comp-label">Studied against: </span>
                PitchBook, Affinity, Harmonic, Hatcher, Caena
              </p>
              <p className="sb-comp-used">
                <span className="sb-comp-label">Used for: </span>
                Comparison pages and positioning
              </p>
            </div>

            <div className="sb-competitor-card">
              <span className="sb-comp-title">AIQoD platform</span>
              <p className="sb-comp-desc">
                <span className="sb-comp-label">Studied against: </span>
                Point solutions, agent frameworks, vendor AI suites, services-led builds
              </p>
              <p className="sb-comp-used">
                <span className="sb-comp-label">Used for: </span>
                Website messaging
              </p>
            </div>

            <div className="sb-competitor-card">
              <span className="sb-comp-title">Sales X</span>
              <p className="sb-comp-desc">
                <span className="sb-comp-label">Studied against: </span>
                Established and new lead generation platforms
              </p>
              <p className="sb-comp-used">
                <span className="sb-comp-label">Used for: </span>
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
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("products-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[2].label}</h3>
          <p className="sb-card__desc">{shipped[2].detail}</p>
        </div>

        {/* Visual: Product ICP Portfolio Matrix */}
        <div className="sb-visual sb-visual--products" aria-hidden="true">
          <div className="sb-products-grid">
            <div className="sb-product-pill">
              <span className="sb-prod-name">M&amp;A deal sourcing and analysis</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Agentic AI</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">ATS</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Ticket management</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Fleet compliance</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Smart AI Investor</span>
              <span className="sb-prod-brand">VentureHub360</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Startup Pitch Analyser</span>
              <span className="sb-prod-brand">VentureHub360</span>
            </div>
            <div className="sb-product-pill sb-product-pill--more">
              <span className="sb-prod-name">And many more products</span>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 5: LINKEDIN AND VIDEO (7 cols + 5 cols)
          ========================================================================= */}

      {/* 09. LINKEDIN FOR BOTH BRANDS (Span 7 cols) */}
      <article
        className="sb-card sb-card--rebuilt sb-card--sage reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("linkedin-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[9].label}</h3>
          <p className="sb-card__desc">{shipped[9].detail}</p>
        </div>

        {/* Visual: LinkedIn Presence for Both Brands */}
        <div className="sb-visual sb-visual--rebuilt">
          <div className="sb-linkedin-grid">
            <div className="sb-linkedin-col">
              <div>
                <div className="sb-linkedin-head">
                  <span className="sb-linkedin-brand">AIQoD</span>
                  <span className="sb-stat-chip sb-linkedin-tag">Running</span>
                </div>
                <div className="sb-linkedin-chips">
                  <span className="sb-stat-chip">Weekly posts and carousels</span>
                  <span className="sb-stat-chip">Founder and sales head drafts</span>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://www.linkedin.com/company/aiqod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "var(--cat-accent, #91B5A0)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  View page ↗
                </a>
              </div>
            </div>

            <div className="sb-linkedin-col">
              <div>
                <div className="sb-linkedin-head">
                  <span className="sb-linkedin-brand">VentureHub360</span>
                  <span className="sb-stat-chip sb-linkedin-tag">Running</span>
                </div>
                <div className="sb-linkedin-chips">
                  <span className="sb-stat-chip">Company page from zero</span>
                  <span className="sb-stat-chip">Group posting system</span>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://www.linkedin.com/company/venturehub360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.68rem", fontFamily: "var(--font-mono)", color: "var(--cat-accent, #91B5A0)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  View page ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 10. AI AVATAR AND PRODUCT VIDEOS (Span 5 cols) */}
      <article
        className="sb-card sb-card--videos sb-card--violet reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("videos-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[7].label}</h3>
          <p className="sb-card__desc">{shipped[7].detail}</p>
        </div>

        {/* Visual: Video Production & Editing */}
        <div className="sb-visual sb-visual--videos">
          <div className="sb-video-deck">
            <div className="sb-video-screen">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#F4F0E8" }}>Video production</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="sb-stat-chip">AI avatar videos</span>
                <span className="sb-stat-chip">Product demo cuts</span>
                <span className="sb-stat-chip">Voiceover and editing</span>
              </div>
            </div>
            <div className="sb-waveform" aria-hidden="true">
              <span className="sb-wave-bar" style={{ height: "40%" }} />
              <span className="sb-wave-bar" style={{ height: "70%" }} />
              <span className="sb-wave-bar" style={{ height: "100%" }} />
              <span className="sb-wave-bar" style={{ height: "55%" }} />
              <span className="sb-wave-bar" style={{ height: "85%" }} />
              <span className="sb-wave-bar" style={{ height: "60%" }} />
              <span className="sb-wave-bar" style={{ height: "90%" }} />
              <span className="sb-wave-bar" style={{ height: "35%" }} />
              <span className="sb-wave-bar" style={{ height: "75%" }} />
              <span className="sb-wave-bar" style={{ height: "95%" }} />
              <span className="sb-wave-bar" style={{ height: "50%" }} />
              <span className="sb-wave-bar" style={{ height: "80%" }} />
            </div>
            <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
              <Link
                href="/gallery/"
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--cat-accent, #A99AE0)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Watch videos ↗
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          ROW 6: INTERNATIONAL PARTNER RESEARCH (12 cols)
          ========================================================================= */}

      {/* 11. INTERNATIONAL PARTNER RESEARCH (Span 12 cols) */}
      <article
        className="sb-card sb-card--partners sb-card--blue reveal"
        tabIndex={0}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="sb-card__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("partners-bg.webp")}
            alt=""
            loading="lazy"
            className="sb-card__bg-img"
          />
          <div className="sb-card__bg-glow" />
          <div className="sb-card__bg-overlay" />
        </div>

        <div className="sb-card__body">
          <h3 className="sb-card__title">{shipped[5].label}</h3>
          <p className="sb-card__desc">{shipped[5].detail}</p>
        </div>

        {/* Visual: Global Market Partner Coverage Dossier */}
        <div className="sb-visual sb-visual--partners" aria-hidden="true">
          <div className="sb-partners-dossier">
            <div className="sb-partner-tiers">
              <span className="sb-tier-pill">Resell and white-label</span>
              <span className="sb-tier-pill">Implementation partners</span>
              <span className="sb-tier-pill">Referral partners</span>
            </div>
            <div className="sb-partner-tiers">
              <span className="sb-tier-pill">Tier 2 and 3 firms</span>
              <span className="sb-tier-pill">Mid-size and smaller companies</span>
              <span className="sb-tier-pill">Researched country by country</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
