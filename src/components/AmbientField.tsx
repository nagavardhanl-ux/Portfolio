"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide background: one fixed canvas behind every page. A fine dot grid
 * drifts slowly and leans away from the cursor; faint grey points with the
 * occasional blue one, at very low opacity.
 * - Desktop (768px+): animated at ~30fps, after load + idle; paused when the
 *   tab is hidden or the hero's WebGL effect is filling the view.
 * - Below 768px: one static frame, no animation.
 * - prefers-reduced-motion: not drawn at all (CSS hides the canvas too).
 */
export default function AmbientField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const wide = window.matchMedia("(min-width: 768px)");

    let w = 0;
    let h = 0;
    let spacing = 28;
    let raf = 0;
    let last = 0;
    let ox = 0;
    let oy = 0;
    let ready = false;
    let heroCovering = false;
    let idle = 0;
    let grey = "154,154,163";
    let blue = "143,168,255";
    let baseAlpha = 0.15;

    const target = { x: -9999, y: -9999 };
    const p = { x: -9999, y: -9999 };
    const R = 160;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      grey = cs.getPropertyValue("--dot").trim() || grey;
      blue = cs.getPropertyValue("--dot-accent").trim() || blue;
      baseAlpha = document.documentElement.dataset.theme === "light" ? 0.2 : 0.15;
    };

    const isBlue = (i: number, j: number) => {
      let n = (i * 374761393 + j * 668265263) | 0;
      n = (n ^ (n >>> 13)) * 1274126177;
      return ((n ^ (n >>> 16)) >>> 0) % 47 === 0;
    };

    const frame = () => {
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
          let s = 1.4;
          const dx = x0 - p.x;
          const dy = y0 - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / R) ** 2;
            x += (dx / d) * f * 6;
            y += (dy / d) * f * 6;
            a += f * 0.3;
            s += f * 0.6;
          }
          const b = isBlue(i - ci0, j - cj0);
          ctx.fillStyle = `rgba(${b ? blue : grey},${b ? Math.min(a + 0.2, 0.7) : a})`;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      spacing = wide.matches ? 28 : 24;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!raf) frame(); // keep the static frame current (mobile, paused states)
    };

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (t - last < 33) return; // ~30fps cap
      const dt = Math.min((t - last) / 1000, 0.1);
      last = t;
      ox += 4 * dt;
      oy += 2.5 * dt;
      p.x += (target.x - p.x) * 0.1;
      p.y += (target.y - p.y) * 0.1;
      frame();
    };

    const shouldRun = () => ready && wide.matches && !document.hidden && !heroCovering;
    const start = () => {
      if (raf || !shouldRun()) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const sync = () => (shouldRun() ? start() : stop());

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onLeave = () => {
      target.x = target.y = -9999;
    };
    const onHero = (e: Event) => {
      heroCovering = Boolean((e as CustomEvent<boolean>).detail);
      sync();
    };
    const onWide = () => {
      resize();
      sync();
    };
    const onReduce = () => {
      if (reduce.matches) {
        stop();
        ctx.clearRect(0, 0, w, h);
      }
    };

    readColors();
    resize();
    canvas.classList.add("is-on");

    const begin = () => {
      ready = true;
      sync();
    };
    const kick = () => {
      idle =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(begin, { timeout: 2000 })
          : (setTimeout(begin, 600) as unknown as number);
    };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    const mo = new MutationObserver(() => {
      readColors();
      if (!raf) frame();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("herofx", onHero);
    wide.addEventListener("change", onWide);
    reduce.addEventListener("change", onReduce);

    return () => {
      stop();
      window.removeEventListener("load", kick);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idle);
      clearTimeout(idle);
      mo.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("herofx", onHero);
      wide.removeEventListener("change", onWide);
      reduce.removeEventListener("change", onReduce);
    };
  }, []);

  return <canvas ref={ref} className="ambient" aria-hidden="true" />;
}
