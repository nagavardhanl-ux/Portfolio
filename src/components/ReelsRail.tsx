"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import GalleryCard from "@/components/GalleryCard";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import type { VideoItem } from "@/data/gallery";

interface ReelsRailProps {
  items: VideoItem[];
  label?: string;
}

export default function ReelsRail({ items, label = "Reels rail" }: ReelsRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkScroll]);

  const scrollByDirection = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".gallery-reel-rail__item");
    const gap = 32;
    const step = card ? (card.offsetWidth + gap) * 2 : 504;
    el.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <div className="reels-rail-container" role="region" aria-label={label}>
      <div className="reels-rail-header">
        <div className="reels-rail-nav">
          <button
            type="button"
            className="reels-rail-btn"
            onClick={() => scrollByDirection("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            className="reels-rail-btn"
            onClick={() => scrollByDirection("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div
        className="gallery-reel-rail"
        ref={trackRef}
        onScroll={checkScroll}
        tabIndex={0}
        aria-label="Scrollable reels list"
      >
        {items.map((item) => (
          <div className="gallery-reel-rail__item" key={item.id}>
            <GalleryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
