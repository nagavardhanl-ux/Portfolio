"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { asset } from "@/lib/config";

interface CatalogueViewerProps {
  pages: string[];
}

export default function CatalogueViewer({ pages }: CatalogueViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const total = pages.length;
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const prev = useCallback(() => {
    setCurrentPage((p) => (p > 0 ? p - 1 : total - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrentPage((p) => (p < total - 1 ? p + 1 : 0));
  }, [total]);

  // Keyboard navigation with Left and Right arrow keys
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  // Scroll the active thumbnail into view in the sidebar
  useEffect(() => {
    thumbRefs.current[currentPage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentPage]);

  // Casual saving deterrence only (not DRM/full protection, as files are on a public host)
  const blockSave = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="catalogue-viewer reveal" role="region" aria-label="Catalogue viewer">
      <div className="catalogue-viewer__layout">
        {/* Main Stage with Left and Right Icon Nav Buttons */}
        <div className="catalogue-viewer__stage-card">
          {/* Previous Icon Button on the Left */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous page"
            className="catalogue-stage__nav catalogue-stage__nav--prev"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Main Stage Image */}
          <div className="catalogue-stage__content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={currentPage}
              src={asset(`catalogue/${pages[currentPage]}`)}
              alt={`LVL Groups & Enterprises Catalogue, page ${currentPage + 1} of ${total}`}
              draggable={false}
              loading={currentPage === 0 ? "eager" : "lazy"}
              onContextMenu={blockSave}
              className="catalogue-stage__img"
            />
          </div>

          {/* Next Icon Button on the Right */}
          <button
            type="button"
            onClick={next}
            aria-label="Next page"
            className="catalogue-stage__nav catalogue-stage__nav--next"
          >
            <ArrowRight size={20} />
          </button>

          {/* Clean Floating Page Counter Pill */}
          <div className="catalogue-stage__counter" aria-live="polite">
            Page {currentPage + 1} of {total}
          </div>
        </div>

        {/* Side Thumbnails Column - Image only, no text/page numbers */}
        <aside className="catalogue-sidebar" aria-label="Catalogue page thumbnails">
          <div className="catalogue-sidebar__list" role="tablist" aria-label="Catalogue pages">
            {pages.map((page, idx) => {
              const isSelected = currentPage === idx;
              return (
                <button
                  key={page}
                  ref={(el) => {
                    thumbRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Page ${idx + 1}`}
                  onClick={() => setCurrentPage(idx)}
                  className={`catalogue-thumb-item ${isSelected ? "catalogue-thumb-item--active" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(`catalogue/${page}`)}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    onContextMenu={blockSave}
                    className="catalogue-thumb-item__img"
                  />
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
