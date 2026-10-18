"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { asset } from "@/lib/config";

// PLACEHOLDER: replace avatar-still.png and add avatar-loop.webm with the real avatar.

interface AboutAvatarProps {
  webmSrc?: string;
  pngSrc?: string;
  className?: string;
}

function checkCanPlayVideo(webmSrc?: string): boolean {
  if (typeof window === "undefined" || !webmSrc) return false;
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  if (isIOS || isSafari) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

export default function AboutAvatar({
  webmSrc,
  pngSrc = asset("about/avatar.webp"),
  className = "",
}: AboutAvatarProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const canPlay = useSyncExternalStore(
    subscribeReducedMotion,
    () => checkCanPlayVideo(webmSrc),
    () => false
  );

  const shouldRenderVideo = Boolean(webmSrc) && canPlay && !videoFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => setVideoFailed(true));
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    } else {
      video.play().catch(() => setVideoFailed(true));
    }
  }, [shouldRenderVideo]);

  return (
    <div className={`about-avatar ${className}`}>
      {shouldRenderVideo ? (
        <video
          ref={videoRef}
          src={webmSrc}
          muted
          loop
          playsInline
          aria-hidden="true"
          className="about-avatar__media"
          onError={() => setVideoFailed(true)}
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={pngSrc}
          alt="Nagavardhan"
          className="about-avatar__media"
          loading="eager"
          width={1024}
          height={935}
        />
      )}
    </div>
  );
}
