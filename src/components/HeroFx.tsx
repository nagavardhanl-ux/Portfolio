"use client";

import { useEffect, useRef } from "react";

/** A quiet, CSS-led information grid. Pointer movement is limited to a few pixels. */
export default function HeroFx() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const observer = new IntersectionObserver(([entry]) => {
      window.dispatchEvent(new CustomEvent("herofx", { detail: entry.intersectionRatio > 0.5 }));
    }, { threshold: [0, 0.5, 1] });
    observer.observe(el);
    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      el.style.setProperty("--pointer-x", `${x}px`);
      el.style.setProperty("--pointer-y", `${y}px`);
    };
    if (fine.matches && !reduce.matches) window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      observer.disconnect();
      window.dispatchEvent(new CustomEvent("herofx", { detail: false }));
    };
  }, []);

  return <div ref={ref} className="herofx" aria-hidden="true"><span /><span /><span /><span /></div>;
}
