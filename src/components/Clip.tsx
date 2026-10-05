"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/config";
import Shot from "./Shot";

/**
 * Silent, looped scroll-through clip of a site, over its static screenshot.
 * - The screenshot is always rendered first (and is all phones, slow or
 *   data-saver connections and reduced-motion users ever get).
 * - The video's source is only attached when it nears the viewport, and loads
 *   go through a one-at-a-time queue so clips never all download together.
 * - Plays while visible, pauses when scrolled away or the tab is hidden.
 */

// One clip loads at a time across the whole page.
let queue: Promise<void> = Promise.resolve();
const enqueue = (job: () => Promise<void>) => {
  queue = queue.then(job, job);
  return queue;
};

function canPlayClips() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(max-width: 767px)").matches) return false;
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (c?.saveData) return false;
  if (c?.effectiveType && /(^|-)(2g|3g)$/.test(c.effectiveType)) return false;
  return true;
}

export default function Clip({
  name,
  alt,
  priority = false,
  sizes,
}: {
  name: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false); // sources attached
  const [playing, setPlaying] = useState(false);

  const release = useRef<() => void>(undefined);

  // Attach sources when close to the viewport (once), via the shared queue.
  useEffect(() => {
    const el = box.current;
    if (!el || !canPlayClips()) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        enqueue(
          () =>
            new Promise<void>((done) => {
              // Released when this clip can play, errors, or after a cap.
              const t = window.setTimeout(done, 4000);
              release.current = () => {
                window.clearTimeout(t);
                done();
              };
              setArmed(true);
            }),
        );
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      release.current?.();
    };
  }, []);

  // Sources are in the DOM now: start loading and free the queue when ready.
  useEffect(() => {
    const v = video.current;
    if (!armed || !v) return;
    const free = () => release.current?.();
    v.addEventListener("canplay", free, { once: true });
    v.addEventListener("error", free, { once: true });
    v.load();
    return () => {
      v.removeEventListener("canplay", free);
      v.removeEventListener("error", free);
    };
  }, [armed]);

  // Play only while on screen.
  useEffect(() => {
    const el = box.current;
    const v = video.current;
    if (!armed || !el || !v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !document.hidden) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    const onVis = () => (document.hidden ? v.pause() : null);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      v.pause();
    };
  }, [armed]);

  return (
    <div ref={box} className="shot clip" data-playing={playing}>
      <Shot name={name} alt={alt} priority={priority} sizes={sizes} />
      <video
        ref={video}
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {armed && <source src={asset(`clips/${name}.webm`)} type="video/webm" />}
        {armed && <source src={asset(`clips/${name}.mp4`)} type="video/mp4" />}
      </video>
    </div>
  );
}
