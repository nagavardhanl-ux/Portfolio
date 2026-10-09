"use client";

import { useEffect, useRef, useState } from "react";

/** Starts at zero only when the proof point enters view; reduced-motion users see the final value immediately. */
export default function FigureCount({ value }: { value: string }) {
  const target = Number(value);
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !Number.isFinite(target) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let started = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShown("0");
      const animate = (now: number) => {
        if (!started) started = now;
        const progress = Math.min((now - started) / 620, 1);
        const eased = 1 - (1 - progress) ** 3;
        setShown(String(Math.round(target * eased)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      io.disconnect();
    }, { threshold: 0.35 });
    io.observe(node);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);

  return <span ref={ref} aria-hidden="true">{shown}</span>;
}
