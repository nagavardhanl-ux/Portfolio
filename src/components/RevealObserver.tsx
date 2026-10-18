"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Any element with class "reveal" fades and rises in once it scrolls into view.
 * Tested against Emil Kowalski & UI Skills interaction design principles:
 * - Fluid, natural entrance right as content enters the viewport
 * - Instant unhide for elements already in or near viewport on mount
 * - Passive scroll safeguard ensuring content is never stuck at opacity 0
 * - Unconditional fallback for prefers-reduced-motion and missing IO
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

    const isMobile = window.innerWidth <= 680;

    // Trigger naturally as content enters the viewport.
    // -6% on mobile so cards enter promptly without empty gaps.
    // -10% on desktop so reveals run visibly right within the user's field of view.
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
        rootMargin: isMobile ? "0px 0px -6% 0px" : "0px 0px -10% 0px",
        threshold: 0.04,
      }
    );

    const observeElements = () => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport on mount, reveal it immediately
        if (rect.top < vh && rect.bottom > 0) {
          el.classList.add("is-in");
        } else {
          io.observe(el);
        }
      });
    };

    observeElements();

    // Re-observe if new elements are added dynamically
    const mo = new MutationObserver(observeElements);
    mo.observe(document.body, { childList: true, subtree: true });

    // Passive scroll check: safety fallback for rapid flings or throttled IO
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const pending = document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
          if (pending.length === 0) {
            window.removeEventListener("scroll", onScroll);
          } else {
            pending.forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.top < vh + 50 && r.bottom > -50) {
                el.classList.add("is-in");
                io.unobserve(el);
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Safety timer: guarantees content is NEVER permanently hidden if any observer stalls
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        el.classList.add("is-in");
      });
      window.removeEventListener("scroll", onScroll);
    }, 2500);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
