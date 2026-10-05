"use client";

import { useEffect, useRef } from "react";

/**
 * The one heavy effect on the site: a Vanta.js NET field behind the hero,
 * tinted to the accent. Desktop only (768px+), never under reduced motion.
 * three.js and Vanta load from CDN after the page is idle, so they never
 * compete with first paint. Capped at ~30fps and paused off-screen.
 * Below 768px the hero simply shows the site-wide AmbientField (static there).
 */

const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_SRC = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js";

type VantaEffect = {
  destroy: () => void;
  setOptions: (o: Record<string, unknown>) => void;
  animationLoop: () => void;
  req: number;
};
type VantaWindow = Window & { VANTA?: { NET: (o: Record<string, unknown>) => VantaEffect } };

const loaded = new Map<string, Promise<void>>();
function loadScript(src: string) {
  if (!loaded.has(src)) {
    loaded.set(
      src,
      new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.crossOrigin = "anonymous";
        s.onload = () => resolve();
        s.onerror = () => {
          loaded.delete(src);
          reject(new Error(`Failed to load ${src}`));
        };
        document.head.appendChild(s);
      }),
    );
  }
  return loaded.get(src)!;
}

const colors = () =>
  document.documentElement.dataset.theme === "light"
    ? { backgroundColor: 0xffffff, color: 0x3b5bff }
    : { backgroundColor: 0x0b0b0c, color: 0x3b5bff };

/** Tell the ambient layer whether the hero effect is currently filling the view. */
const announce = (covering: boolean) => window.dispatchEvent(new CustomEvent("herofx", { detail: covering }));

export default function HeroFx() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");

    let effect: VantaEffect | null = null;
    let cancelled = false;
    let visible = true;
    let idle = 0;
    let io: IntersectionObserver | null = null;
    let mo: MutationObserver | null = null;

    const teardown = () => {
      io?.disconnect();
      mo?.disconnect();
      io = mo = null;
      if (effect) {
        cancelAnimationFrame(effect.req);
        effect.destroy();
        effect = null;
      }
      el.classList.remove("is-on");
      announce(false);
    };

    const create = async () => {
      if (cancelled || effect || reduce.matches || !wide.matches) return;
      try {
        await loadScript(THREE_SRC);
        await loadScript(VANTA_SRC);
      } catch {
        return; // CDN unavailable: the ambient layer still shows through.
      }
      const VANTA = (window as VantaWindow).VANTA;
      if (cancelled || effect || !VANTA || reduce.matches || !wide.matches) return;

      effect = VANTA.NET({
        el,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        points: 9,
        maxDistance: 21,
        spacing: 19,
        showDots: true,
        ...colors(),
      });

      // Cap at ~30fps and stop scheduling entirely while the hero is off-screen.
      const fx = effect;
      const original = fx.animationLoop;
      let last = 0;
      const loop = () => {
        if (!visible || effect !== fx) return;
        const now = performance.now();
        if (now - last < 33) {
          fx.req = requestAnimationFrame(loop);
          return;
        }
        last = now;
        original.call(fx); // renders one frame and schedules fx.animationLoop (= loop) again
      };
      cancelAnimationFrame(fx.req);
      fx.animationLoop = loop;
      fx.req = requestAnimationFrame(loop);

      io = new IntersectionObserver(
        ([entry]) => {
          const was = visible;
          visible = entry.isIntersecting;
          announce(entry.intersectionRatio > 0.5);
          if (visible && !was && effect === fx) fx.req = requestAnimationFrame(loop);
        },
        { threshold: [0, 0.5, 1] },
      );
      io.observe(el);

      mo = new MutationObserver(() => fx.setOptions(colors()));
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

      el.classList.add("is-on");
    };

    const kick = () => {
      idle =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(() => void create(), { timeout: 2500 })
          : (setTimeout(() => void create(), 800) as unknown as number);
    };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    const onChange = () => (reduce.matches || !wide.matches ? teardown() : void create());
    reduce.addEventListener("change", onChange);
    wide.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      window.removeEventListener("load", kick);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idle);
      clearTimeout(idle);
      reduce.removeEventListener("change", onChange);
      wide.removeEventListener("change", onChange);
      teardown();
    };
  }, []);

  return <div ref={ref} className="herofx" aria-hidden="true" />;
}
