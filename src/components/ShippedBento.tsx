"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { asset } from "@/lib/config";
import { shippedProjects, type ShippedProject } from "@/data/shipped";

/**
 * Authentic visual diagrams corresponding to each project.
 * Preserves the exact verified diagrams, data points, and working links.
 */
function ProjectVisual({ project }: { project: ShippedProject }) {
  switch (project.id) {
    case "agentic-ai-cluster":
      return (
        <div className="shipped-visual-block" aria-label="Topic cluster diagram">
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
              <span className="sb-cluster-status" style={{ flexShrink: 0 }}>Pillar &amp; spoke</span>
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
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "4px" }}>
              <a
                href="https://aiqod.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="shipped-inline-link"
              >
                Read the cluster on AIQoD ↗
              </a>
            </div>
          </div>
        </div>
      );

    case "ai-intelligence-brief":
      return (
        <div className="shipped-visual-block" aria-label="Executive morning dispatch preview">
          <div className="sb-brief-dispatch">
            <div className="sb-brief-top">
              <span className="sb-brief-badge">
                <span className="sb-brief-pulse" /> DAILY BRIEF
              </span>
            </div>
            <div className="sb-brief-signals" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "6px" }}>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>Top story</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>The one development everyone needs today</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>Founder</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Market and strategy</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>Sales</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Buyer and competitor signals</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>R&amp;D</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>New tech and product angles</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>Delivery</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Rollout and operations</p>
                </div>
              </div>
              <div className="sb-signal-item">
                <div>
                  <span className="sb-sig-head" style={{ fontSize: "0.68rem", color: "var(--accent, #D5B77A)", fontFamily: "var(--font-mono)" }}>Mondays</span>
                  <p className="sb-sig-desc" style={{ fontSize: "0.65rem", color: "#F4F0E8", margin: "2px 0 0" }}>Social content pack for the week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "linkedin-both-brands":
      return (
        <div className="shipped-visual-block" aria-label="LinkedIn channels overview">
          <div className="sb-linkedin-grid">
            <div className="sb-linkedin-col">
              <div>
                <div className="sb-linkedin-head">
                  <span className="sb-linkedin-brand">AIQoD</span>
                  <span className="sb-stat-chip sb-linkedin-tag">Running</span>
                </div>
                <div className="sb-linkedin-chips">
                  <span className="sb-stat-chip">Weekly posts and carousels</span>
                  <span className="sb-stat-chip">Founder &amp; sales head drafts</span>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://www.linkedin.com/company/aiqod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shipped-inline-link"
                >
                  View AIQoD page ↗
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
                  <span className="sb-stat-chip">Investor group posting</span>
                </div>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid #343438" }}>
                <a
                  href="https://www.linkedin.com/company/venturehub360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shipped-inline-link"
                >
                  View VentureHub360 page ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      );

    case "outbound-campaigns":
      return (
        <div className="shipped-visual-block" aria-label="Outbound campaign pipeline">
          <div className="sb-db-preview">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px" }}>
              <div className="sb-lane-card">
                <span className="sb-lane-head">PARTNERS</span>
                <span className="sb-lane-title">Resellers &amp; implementation</span>
              </div>
              <div className="sb-lane-card">
                <span className="sb-lane-head">INVESTORS</span>
                <span className="sb-lane-title">Smart AI Investor &amp; fundraise</span>
              </div>
              <div className="sb-lane-card">
                <span className="sb-lane-head">PRODUCTS</span>
                <span className="sb-lane-title">M&amp;A, ATS, fleet compliance</span>
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
      );

    case "platform-blogs":
      return (
        <div className="shipped-visual-block" aria-label="Platform blogs display">
          <div className="sb-series-rack">
            <div className="sb-series-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="sb-series-header" style={{ marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#F4F0E8" }}>AIQoD</span>
                  <span className="sb-stat-chip" style={{ fontSize: "0.58rem", color: "var(--accent, #D5B77A)" }}>Enterprise AI</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "4px 0 10px" }}>
                  <span className="sb-stat-chip">Agentic AI</span>
                  <span className="sb-stat-chip">AI Governance</span>
                  <span className="sb-stat-chip">Enterprise Architecture</span>
                </div>
              </div>
              <div style={{ paddingTop: "6px", borderTop: "1px solid #343438" }}>
                <a href="https://aiqod.com/blog" target="_blank" rel="noopener noreferrer" className="shipped-inline-link">
                  Visit the blog ↗
                </a>
              </div>
            </div>

            <div className="sb-series-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="sb-series-header" style={{ marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "#F4F0E8" }}>VentureHub360</span>
                  <span className="sb-stat-chip" style={{ fontSize: "0.58rem", color: "var(--accent, #D5B77A)" }}>Founders &amp; Investors</span>
                </div>
                <ul className="sb-series-list" style={{ margin: "4px 0 10px" }}>
                  <li>
                    <span className="sb-item-num">01</span>
                    <a href="https://www.venturehub360.com/blog/evaluation-gap-pitch-decks" target="_blank" rel="noopener noreferrer">
                      The Evaluation Gap: Pitch Decks
                    </a>
                  </li>
                  <li>
                    <span className="sb-item-num">02</span>
                    <a href="https://www.venturehub360.com/blog/what-investors-ask-in-a-pitch-meeting" target="_blank" rel="noopener noreferrer">
                      What Investors Ask in a Pitch
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ paddingTop: "6px", borderTop: "1px solid #343438" }}>
                <a href="https://www.venturehub360.com/blog" target="_blank" rel="noopener noreferrer" className="shipped-inline-link">
                  Visit the blog ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      );

    case "segment-icp-playbook":
      return (
        <div className="shipped-visual-block" aria-label="Segment playbook matrix">
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
      );

    case "competitive-research":
      return (
        <div className="shipped-visual-block" aria-label="Competitor breakdown preview">
          <div className="sb-competitor-content">
            <div className="sb-competitor-card">
              <span className="sb-comp-title">Smart AI Investor</span>
              <p className="sb-comp-desc">
                <span className="sb-comp-label">Studied against: </span>
                PitchBook, Affinity, Harmonic, Hatcher
              </p>
              <p className="sb-comp-used">
                <span className="sb-comp-label">Used for: </span>
                Comparison pages and positioning
              </p>
            </div>
            <div className="sb-competitor-card">
              <span className="sb-comp-title">AIQoD Platform</span>
              <p className="sb-comp-desc">
                <span className="sb-comp-label">Studied against: </span>
                Point solutions, agent frameworks, vendor AI suites
              </p>
              <p className="sb-comp-used">
                <span className="sb-comp-label">Used for: </span>
                Website messaging
              </p>
            </div>
          </div>
        </div>
      );

    case "product-icps":
      return (
        <div className="shipped-visual-block" aria-label="Product ICP grid">
          <div className="sb-products-grid">
            <div className="sb-product-pill">
              <span className="sb-prod-name">M&amp;A deal sourcing</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">Agentic AI</span>
              <span className="sb-prod-brand">AIQoD</span>
            </div>
            <div className="sb-product-pill">
              <span className="sb-prod-name">ATS &amp; Hiring</span>
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
              <span className="sb-prod-name">Pitch Analyser</span>
              <span className="sb-prod-brand">VentureHub360</span>
            </div>
          </div>
        </div>
      );

    case "ai-avatar-videos":
      return (
        <div className="shipped-visual-block" aria-label="Video production waveform preview">
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
            <div style={{ paddingTop: "6px", borderTop: "1px solid #343438" }}>
              <Link href="/gallery/" className="shipped-inline-link">
                Watch videos in gallery ↗
              </Link>
            </div>
          </div>
        </div>
      );

    case "international-partners":
      return (
        <div className="shipped-visual-block" aria-label="International partner tiers">
          <div className="sb-partners-dossier">
            <div className="sb-partner-tiers">
              <span className="sb-tier-pill">Resell and white-label</span>
              <span className="sb-tier-pill">Implementation partners</span>
              <span className="sb-tier-pill">Referral partners</span>
            </div>
            <div className="sb-partner-tiers">
              <span className="sb-tier-pill">Tier 2 and 3 firms</span>
              <span className="sb-tier-pill">Mid-size software companies</span>
              <span className="sb-tier-pill">Country-by-country mapping</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/**
 * Editorial Card Component (Featured or Standard).
 */
function ShippedCard({
  project,
  isFeatured = false,
  isActive = false,
  onToggle,
}: {
  project: ShippedProject;
  isFeatured?: boolean;
  isActive?: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`shipped-card ${isFeatured ? "shipped-card--featured" : "shipped-card--standard"} ${isActive ? "is-active" : ""} reveal`}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-controls={`shipped-drawer-${project.id}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* Top Meta Bar */}
      <div className="shipped-card__meta">
        <span className="shipped-card__num">{project.number}</span>
        <span className="shipped-card__category">{project.category}</span>
      </div>

      {/* Media Window: Contains existing artwork with restrained editorial frame */}
      <div className="shipped-card__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(project.image)}
          alt=""
          loading="lazy"
          className="shipped-card__img"
        />
        <div className="shipped-card__scrim" />
      </div>

      {/* Card Body */}
      <div className="shipped-card__body">
        <h3 className="shipped-card__title">{project.label}</h3>
        <p className="shipped-card__desc">{project.detail}</p>
      </div>

      {/* Clear Project Interaction Action */}
      <div className="shipped-card__action">
        <span className="shipped-card__action-text">
          {isActive ? "Close details" : "Explore project"}
        </span>
        <span className="shipped-card__action-icon" aria-hidden="true">
          {isActive ? "✕" : "→"}
        </span>
      </div>
    </article>
  );
}

/**
 * Inline Detail Drawer
 * Expands inline within the section without page navigation, modal overlays, or layout distortion.
 */
function ShippedDetailDrawer({
  project,
  onClose,
}: {
  project: ShippedProject;
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [project.id]);

  return (
    <div
      ref={drawerRef}
      id={`shipped-drawer-${project.id}`}
      className="shipped-drawer"
      role="region"
      aria-label={`Project details for ${project.label}`}
    >
      {/* Drawer Header Bar */}
      <div className="shipped-drawer__header">
        <div className="shipped-drawer__headline">
          <span className="shipped-drawer__badge">
            {project.number} · {project.category}
          </span>
          <h3 className="shipped-drawer__title">{project.label}</h3>
        </div>
        <button
          type="button"
          className="shipped-drawer__close"
          onClick={onClose}
          aria-label={`Close details for ${project.label}`}
        >
          <span className="shipped-drawer__close-text">Close details</span>
          <span className="shipped-drawer__esc" aria-hidden="true">Esc</span>
          <span className="shipped-drawer__close-icon" aria-hidden="true">✕</span>
        </button>
      </div>

      {/* Drawer Grid: Visual Preview (Left) + Editorial Dossier (Right) */}
      <div className="shipped-drawer__content">
        {/* Left Column: Authentic Interactive Visual Diagram + External Links */}
        <div className="shipped-drawer__left">
          <div className="shipped-drawer__visual-surface">
            <ProjectVisual project={project} />
          </div>

          {project.links && project.links.length > 0 && (
            <div className="shipped-drawer__links">
              {project.links.map((link) =>
                link.external ? (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shipped-drawer__link"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link key={link.url} href={link.url} className="shipped-drawer__link">
                    <span>{link.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                )
              )}
            </div>
          )}
        </div>

        {/* Right Column: Editorial Overview, Contribution, and Deliverables */}
        <div className="shipped-drawer__right">
          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">Project Overview</h4>
            <p className="shipped-drawer__text">{project.overview}</p>
          </div>

          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">My Contribution</h4>
            <p className="shipped-drawer__text">{project.contribution}</p>
          </div>

          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">Deliverables &amp; Signals</h4>
            <ul className="shipped-drawer__deliverables" role="list">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="shipped-drawer__deliverable-item">
                  <span className="shipped-drawer__dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hybrid Editorial Showcase for "What I've Shipped"
 *
 * Structure:
 * - 3 equally sized Featured Project Cards in one row on desktop.
 * - 7 remaining project cards arranged in a 4 + 3 desktop grid.
 * - All 10 projects visible without clicking or filtering.
 * - Smooth inline expansion with authentic data and interactive visuals.
 */
export default function ShippedBento() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Group projects into their designated editorial arrangement
  const featuredProjects = shippedProjects.slice(0, 3); // 01, 02, 03 (3 cards)
  const remainingRow1 = shippedProjects.slice(3, 7); // 04, 05, 06, 07 (4 cards)
  const remainingRow2 = shippedProjects.slice(7, 10); // 08, 09, 10 (3 cards)

  const toggleProject = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  // Close inline expansion on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Find active project if one is open in a specific row
  const activeFeatured = featuredProjects.find((p) => p.id === expandedId);
  const activeRow1 = remainingRow1.find((p) => p.id === expandedId);
  const activeRow2 = remainingRow2.find((p) => p.id === expandedId);

  return (
    <div className="shipped-editorial" role="region" aria-label="What I've shipped editorial showcase">
      {/* ───────────────────────────────────────────────────────────────────
          TIER 1: FEATURED PROJECTS (3 equally sized cards in one row on desktop)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="shipped-featured-grid">
        {featuredProjects.map((project) => (
          <React.Fragment key={project.id}>
            <ShippedCard
              project={project}
              isFeatured={true}
              isActive={expandedId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
            {/* Mobile-only inline drawer (appears directly below tapped card on small screens) */}
            {expandedId === project.id && (
              <div className="shipped-drawer-mobile-container">
                <ShippedDetailDrawer project={project} onClose={() => setExpandedId(null)} />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Desktop inline drawer for Featured row */}
        {activeFeatured && (
          <div className="shipped-drawer-desktop-container">
            <ShippedDetailDrawer project={activeFeatured} onClose={() => setExpandedId(null)} />
          </div>
        )}
      </div>

      {/* Subtle Editorial Section Subheading / Divider */}
      <div className="shipped-grid-divider">
        <span className="shipped-divider-tag">ADDITIONAL WORK &amp; INITIATIVES</span>
        <span className="shipped-divider-line" aria-hidden="true" />
        <span className="shipped-divider-count">7 PROJECTS</span>
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          TIER 2: REMAINING PROJECTS — ROW 1 (4 cards)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="shipped-row1-grid">
        {remainingRow1.map((project) => (
          <React.Fragment key={project.id}>
            <ShippedCard
              project={project}
              isFeatured={false}
              isActive={expandedId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
            {/* Mobile-only inline drawer */}
            {expandedId === project.id && (
              <div className="shipped-drawer-mobile-container">
                <ShippedDetailDrawer project={project} onClose={() => setExpandedId(null)} />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Desktop inline drawer for Row 1 */}
        {activeRow1 && (
          <div className="shipped-drawer-desktop-container">
            <ShippedDetailDrawer project={activeRow1} onClose={() => setExpandedId(null)} />
          </div>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          TIER 3: REMAINING PROJECTS — ROW 2 (3 cards, balanced width)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="shipped-row2-grid">
        {remainingRow2.map((project) => (
          <React.Fragment key={project.id}>
            <ShippedCard
              project={project}
              isFeatured={false}
              isActive={expandedId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
            {/* Mobile-only inline drawer */}
            {expandedId === project.id && (
              <div className="shipped-drawer-mobile-container">
                <ShippedDetailDrawer project={project} onClose={() => setExpandedId(null)} />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Desktop inline drawer for Row 2 */}
        {activeRow2 && (
          <div className="shipped-drawer-desktop-container">
            <ShippedDetailDrawer project={activeRow2} onClose={() => setExpandedId(null)} />
          </div>
        )}
      </div>
    </div>
  );
}
