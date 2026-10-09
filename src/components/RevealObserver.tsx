"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Any element with class "reveal" fades and rises in once it scrolls into view.
 * Uses a rAF-throttled scroll check rather than IntersectionObserver, which
 * stopped reporting after the first callback on this page and left content
 * hidden. New or re-created blocks are picked up through a MutationObserver.
 * Under prefers-reduced-motion the CSS never hides anything in the first place.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < limit && r.bottom > 0) el.classList.add("is-in");
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return null;
}
