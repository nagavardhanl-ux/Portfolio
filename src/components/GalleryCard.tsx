"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "@/components/icons";
import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${item.id}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

  return (
    <article className="gallery-card reveal" aria-labelledby={`gallery-title-${item.id}`}>
      <div className="gallery-card__media">
        {!isPlaying ? (
          <button
            type="button"
            className="gallery-card__facade"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${item.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt=""
              loading="lazy"
              className="gallery-card__thumb"
            />
            <span className="gallery-card__play" aria-hidden="true">
              <Play size={24} />
            </span>
          </button>
        ) : (
          <iframe
            src={embedUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="gallery-card__iframe"
          />
        )}
      </div>

      <div className="gallery-card__body">
        <h2 id={`gallery-title-${item.id}`} className="gallery-card__title">
          {item.title}
        </h2>
        <p className="gallery-card__role">{item.role}</p>
        <div className="gallery-card__actions">
          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-card__link"
          >
            <span>Watch on YouTube</span>
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
