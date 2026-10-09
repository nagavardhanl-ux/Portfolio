"use client";

import { useEffect, useRef } from "react";

/** Desktop-only pointer accent; native cursors remain available to keyboard and touch users. */
export default function BrandCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = ref.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !fine.matches || reduce.matches) return;

    const move = (event: PointerEvent) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.dataset.visible = "true";
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      cursor.dataset.label = target?.dataset.cursor ?? "";
      cursor.dataset.active = target ? "true" : "false";
      const magnetic = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-magnetic]") : null;
      if (magnetic) {
        const box = magnetic.getBoundingClientRect();
        const x = Math.max(-4, Math.min(4, ((event.clientX - box.left - box.width / 2) / box.width) * 8));
        const y = Math.max(-4, Math.min(4, ((event.clientY - box.top - box.height / 2) / box.height) * 8));
        magnetic.style.setProperty("--mag-x", `${x}px`);
        magnetic.style.setProperty("--mag-y", `${y}px`);
      }
    };
    const leave = () => {
      cursor.dataset.visible = "false";
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.setProperty("--mag-x", "0px");
        el.style.setProperty("--mag-y", "0px");
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ref} className="brand-cursor" aria-hidden="true" data-visible="false" data-active="false" data-label="" />;
}
