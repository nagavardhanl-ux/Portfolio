"use client";

import { useState } from "react";
import { youtubeEmbed, type Video } from "@/data/marketing";
import { Play } from "./icons";
import { Placeholder } from "./Placeholder";

/** Video slot. The YouTube player only loads when play is pressed; no autoplay on page load. */
export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const embed = youtubeEmbed(video.youtube);

  return (
    <figure className="video reveal">
      <div className="video__stage">
        {playing && embed ? (
          <iframe
            src={embed}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <>
            <Placeholder
              title={video.title}
              kind={video.kind}
              hint={embed ? undefined : `Add YouTube link → src/data/marketing.ts · ${video.id}`}
            />
            <div className="video__play">
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => setPlaying(true)}
                disabled={!embed}
                title={embed ? undefined : "Video not added yet"}
              >
                <Play size={12} /> {embed ? "Play" : "Coming soon"}
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
