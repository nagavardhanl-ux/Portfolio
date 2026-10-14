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
    // Respect reduced motion: reveal all content immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    // Fallback if IntersectionObserver is not supported
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    // Trigger when element is 14% into the viewport from the bottom
    // so the reveal animation runs visibly in front of the user, rather
    // than firing prematurely while still off-screen.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.06,
      }
    );

    const observeElements = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        io.observe(el);
      });
    };

    observeElements();

    // Re-observe if new elements are added dynamically
    const mo = new MutationObserver(observeElements);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety fallback: ensure no element is left at opacity 0 if observer fails
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("is-in");
        }
      });
    }, 4000);

    return () => {
      clearTimeout(safetyTimer);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
