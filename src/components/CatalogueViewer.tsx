"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Close, Expand } from "@/components/icons";
import { asset } from "@/lib/config";

interface CatalogueViewerProps {
  pages: string[];
}

export default function CatalogueViewer({ pages }: CatalogueViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const total = pages.length;
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sidebarListRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setCurrentPage((p) => (p > 0 ? p - 1 : total - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrentPage((p) => (p < total - 1 ? p + 1 : 0));
  }, [total]);

  // Keyboard navigation with Left and Right arrow keys, and Escape to close fullscreen
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Escape" && isFullscreen) {
        e.preventDefault();
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next, isFullscreen]);

  // Lock background page scroll while fullscreen preview is open
  useEffect(() => {
    if (!isFullscreen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isFullscreen]);

  // Reset fullscreen scroll position to top when changing pages
  useEffect(() => {
    if (isFullscreen && fullscreenRef.current) {
      fullscreenRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, isFullscreen]);

  // Scroll active thumbnail inside the sidebar container ONLY (avoids window viewport scrolling)
  useEffect(() => {
    const list = sidebarListRef.current;
    const thumb = thumbRefs.current[currentPage];
    if (!list || !thumb) return;

    const listRect = list.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();

    // Check if vertical scrolling (desktop sidebar)
    if (list.scrollHeight > list.clientHeight) {
      const thumbTopRel = thumbRect.top - listRect.top;
      const thumbBottomRel = thumbRect.bottom - listRect.top;

      if (thumbTopRel < 0) {
        list.scrollTo({ top: Math.max(0, list.scrollTop + thumbTopRel - 12), behavior: "smooth" });
      } else if (thumbBottomRel > list.clientHeight) {
        list.scrollTo({
          top: list.scrollTop + (thumbBottomRel - list.clientHeight) + 12,
          behavior: "smooth",
        });
      }
    } else {
      // Horizontal scrolling (mobile strip)
      const thumbLeftRel = thumbRect.left - listRect.left;
      const thumbRightRel = thumbRect.right - listRect.left;

      if (thumbLeftRel < 0) {
        list.scrollTo({ left: Math.max(0, list.scrollLeft + thumbLeftRel - 10), behavior: "smooth" });
      } else if (thumbRightRel > list.clientWidth) {
        list.scrollTo({
          left: list.scrollLeft + (thumbRightRel - list.clientWidth) + 10,
          behavior: "smooth",
        });
      }
    }
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
          {/* Preview / Fullscreen Icon Button */}
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            aria-label="Preview page in full screen"
            title="Full screen preview"
            className="catalogue-stage__preview-btn"
          >
            <Expand size={16} />
          </button>

          {/* Previous Icon Button on the Left */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous page"
            className="catalogue-stage__nav catalogue-stage__nav--prev"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Main Stage Image */}
          <div
            id="catalogue-stage-panel"
            role="tabpanel"
            aria-label={`Catalogue page ${currentPage + 1}`}
            className="catalogue-stage__content"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`catalogue/${pages[currentPage]}`)}
              alt={`LVL Groups & Enterprises Catalogue, page ${currentPage + 1} of ${total}`}
              width={1311}
              height={1819}
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
            <ArrowRight size={18} />
          </button>

          {/* Clean Floating Page Counter Pill */}
          <div className="catalogue-stage__counter" aria-live="polite">
            Page {currentPage + 1} of {total}
          </div>
        </div>

        {/* Side Thumbnails Column - Image only, no text/page numbers */}
        <aside className="catalogue-sidebar" aria-label="Catalogue page thumbnails">
          <div
            ref={sidebarListRef}
            className="catalogue-sidebar__list"
            role="tablist"
            aria-label="Catalogue pages"
          >
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
                  aria-controls="catalogue-stage-panel"
                  aria-label={`Page ${idx + 1}`}
                  onClick={() => setCurrentPage(idx)}
                  className={`catalogue-thumb-item ${isSelected ? "catalogue-thumb-item--active" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(`catalogue/thumbs/${page}`)}
                    alt=""
                    width={300}
                    height={416}
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

      {isFullscreen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={fullscreenRef}
            className="catalogue-fullscreen"
            role="dialog"
            aria-modal="true"
            aria-label={`Full screen preview: Catalogue page ${currentPage + 1} of ${total}`}
            onClick={(e) => {
              if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("catalogue-fullscreen__stage")) {
                setIsFullscreen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close full screen preview"
              title="Close (Esc)"
              className="catalogue-fullscreen__close"
            >
              <Close size={20} />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous page"
              title="Previous page (Left arrow)"
              className="catalogue-fullscreen__nav catalogue-fullscreen__nav--prev"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="catalogue-fullscreen__stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`catalogue/${pages[currentPage]}`)}
                alt={`LVL Groups & Enterprises Catalogue, page ${currentPage + 1} of ${total}`}
                width={1311}
                height={1819}
                draggable={false}
                onContextMenu={blockSave}
                className="catalogue-fullscreen__img"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next page"
              title="Next page (Right arrow)"
              className="catalogue-fullscreen__nav catalogue-fullscreen__nav--next"
            >
              <ArrowRight size={20} />
            </button>

            <div className="catalogue-fullscreen__counter" aria-live="polite">
              Page {currentPage + 1} of {total}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
