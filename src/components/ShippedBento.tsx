"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { asset } from "@/lib/config";
import { shippedProjects, type ShippedProject } from "@/data/shipped";

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

      {/* Drawer Grid: two equal columns */}
      <div className="shipped-drawer__content">
        {/* Left: what it is and what I did */}
        <div className="shipped-drawer__left">
          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">What it is</h4>
            <p className="shipped-drawer__text">{project.overview}</p>
          </div>

          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">What I did</h4>
            <p className="shipped-drawer__text">{project.contribution}</p>
          </div>
        </div>

        {/* Right: what came out of it and links */}
        <div className="shipped-drawer__right">
          <div className="shipped-drawer__section">
            <h4 className="shipped-drawer__label">What came out of it</h4>
            <ul className="shipped-drawer__deliverables" role="list">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="shipped-drawer__deliverable-item">
                  <span className="shipped-drawer__dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="shipped-drawer__section">
              <h4 className="shipped-drawer__label">See the work</h4>
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
            </div>
          )}
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
 * - Remaining projects in one sliding row (4 visible on desktop) with arrows.
 * - Smooth inline expansion with authentic data and interactive visuals.
 */
export default function ShippedBento() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Group projects into their designated editorial arrangement
  const featuredProjects = shippedProjects.slice(0, 3); // 01, 02, 03 (3 cards)
  const moreProjects = shippedProjects.slice(3); // 04 onwards, one sliding row

  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".shipped-card");
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    const step = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

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
  const activeMore = moreProjects.find((p) => p.id === expandedId);

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

      {/* More work: one sliding row */}

      <div
        className="shipped-carousel"
        ref={trackRef}
        onScroll={updateArrows}
        role="list"
        aria-label="More projects"
      >
        {moreProjects.map((project) => (
          <div className="shipped-carousel__item" role="listitem" key={project.id}>
            <ShippedCard
              project={project}
              isFeatured={false}
              isActive={expandedId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          </div>
        ))}
      </div>

      {/* Details for the selected card open below the row on every screen size */}
      {activeMore && (
        <div className="shipped-carousel-drawer">
          <ShippedDetailDrawer project={activeMore} onClose={() => setExpandedId(null)} />
        </div>
      )}
    </div>
  );
}
