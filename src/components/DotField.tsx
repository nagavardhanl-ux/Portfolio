"use client";

import { useEffect, useRef } from "react";

/**
 * Quiet background layer: a fine dot grid that drifts slowly and leans away
 * from the cursor. Faint grey points with the occasional blue one.
 * - ~30fps, DPR capped at 2, one canvas per instance
 * - starts after load + idle, paused when off-screen or the tab is hidden
 * - never starts under prefers-reduced-motion (CSS also hides it)
 */
export default function DotField({ density = 26 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let spacing = density;
    let raf = 0;
    let last = 0;
    let visible = false;
    let ox = 0;
    let oy = 0;
    let grey = "154,154,163";
    let blue = "143,168,255";
    let baseAlpha = 0.3;

    // Pointer, in canvas-local CSS pixels, eased toward its target.
    const target = { x: -9999, y: -9999 };
    const p = { x: -9999, y: -9999 };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      grey = cs.getPropertyValue("--dot").trim() || grey;
      blue = cs.getPropertyValue("--dot-accent").trim() || blue;
      baseAlpha = document.documentElement.dataset.theme === "light" ? 0.32 : 0.3;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      spacing = w < 640 ? density - 4 : density;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Deterministic "is this grid cell blue" so blue points drift with the grid.
    const isBlue = (i: number, j: number) => {
      let n = (i * 374761393 + j * 668265263) | 0;
      n = (n ^ (n >>> 13)) * 1274126177;
      return ((n ^ (n >>> 16)) >>> 0) % 41 === 0;
    };

    const R = 150;

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 33) return; // ~30fps
      const dt = Math.min((t - last) / 1000, 0.1);
      last = t;

      // Slow diagonal drift.
      ox += 5 * dt;
      oy += 3 * dt;

      p.x += (target.x - p.x) * 0.12;
      p.y += (target.y - p.y) * 0.12;

      ctx.clearRect(0, 0, w, h);

      const sx = ox % spacing;
      const sy = oy % spacing;
      const ci0 = Math.floor(ox / spacing);
      const cj0 = Math.floor(oy / spacing);
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      for (let j = -1; j < rows; j++) {
        const y0 = j * spacing + sy;
        for (let i = -1; i < cols; i++) {
          const x0 = i * spacing + sx;
          let x = x0;
          let y = y0;
          let a = baseAlpha;
          let s = 1.5;

          const dx = x0 - p.x;
          const dy = y0 - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / R) ** 2;
            x += (dx / d) * f * 7;
            y += (dy / d) * f * 7;
            a += f * 0.4;
            s += f * 0.7;
          }

          const b = isBlue(i - ci0, j - cj0);
          ctx.fillStyle = `rgba(${b ? blue : grey},${b ? Math.min(a + 0.25, 0.85) : a})`;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    };

    // Don't compete with first render: begin only once the page has loaded and gone idle.
    let ready = false;
    let idle = 0;
    const start = () => {
      if (!ready || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      target.x = -9999;
      target.y = -9999;
    };
    const onVis = () => (document.hidden ? stop() : start());
    const onReduce = () => {
      if (reduce.matches) {
        stop();
        canvas.classList.remove("is-on");
      }
    };

    readColors();
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const mo = new MutationObserver(readColors);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    reduce.addEventListener("change", onReduce);

    const begin = () => {
      ready = true;
      canvas.classList.add("is-on");
      start();
    };
    const kick = () => {
      idle = "requestIdleCallback" in window
        ? window.requestIdleCallback(begin, { timeout: 2000 })
        : (setTimeout(begin, 600) as unknown as number);
    };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    return () => {
      stop();
      window.removeEventListener("load", kick);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idle);
      window.clearTimeout(idle);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      reduce.removeEventListener("change", onReduce);
    };
  }, [density]);

  return <canvas ref={ref} className="dotfield" aria-hidden="true" />;
}
