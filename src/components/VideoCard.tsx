"use client";

import { useState } from "react";
import type { Video } from "@/data/marketing";
import { Play } from "./icons";
import { Placeholder } from "./Placeholder";

/** Video slot. Nothing loads until play is pressed; no autoplay with sound. */
export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(video.embedUrl);

  return (
    <figure className="video reveal">
      <div className="video__stage">
        {playing && video.embedUrl ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Placeholder
              title={video.title}
              kind={video.kind}
              hint={ready ? undefined : `Add embed URL → src/data/marketing.ts · ${video.id}`}
            />
            <div className="video__play">
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => setPlaying(true)}
                disabled={!ready}
                title={ready ? undefined : "Video not added yet"}
              >
                <Play size={12} /> {ready ? "Play" : "Coming soon"}
              </button>
            </div>
          </>
        )}
      </div>
      <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <span className="h4">{video.title}</span>
        <span className="label">{video.kind}</span>
      </figcaption>
    </figure>
  );
}
