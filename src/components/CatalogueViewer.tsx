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

  // Arrow key navigation
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

  // Scroll active thumbnail into view
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
      {/* Viewer toolbar: Previous / Counter / Next */}
      <div className="catalogue-viewer__toolbar">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous page"
          className="catalogue-nav-btn"
        >
          <ArrowLeft size={16} />
          <span>Previous</span>
        </button>

        <span className="catalogue-viewer__counter" aria-live="polite">
          Page {currentPage + 1} of {total}
        </span>

        <button
          type="button"
          onClick={next}
          aria-label="Next page"
          className="catalogue-nav-btn"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Main stage: Large current page */}
      <div className="catalogue-viewer__stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={currentPage}
          src={asset(`catalogue/${pages[currentPage]}`)}
          alt={`LVL Groups & Enterprises Catalogue, page ${currentPage + 1} of ${total}`}
          draggable={false}
          loading={currentPage === 0 ? "eager" : "lazy"}
          onContextMenu={blockSave}
          className="catalogue-viewer__img"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="catalogue-viewer__thumbs" role="tablist" aria-label="Catalogue pages">
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
              aria-label={`Go to page ${idx + 1} of ${total}`}
              onClick={() => setCurrentPage(idx)}
              className={`catalogue-thumb ${isSelected ? "catalogue-thumb--active" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`catalogue/${page}`)}
                alt=""
                loading="lazy"
                draggable={false}
                onContextMenu={blockSave}
                className="catalogue-thumb__img"
              />
              <span className="catalogue-thumb__num">{idx + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
