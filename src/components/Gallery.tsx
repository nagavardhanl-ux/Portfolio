"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Asset } from "@/data/marketing";
import { ArrowLeft, ArrowRight, Close, Expand } from "./icons";
import { Media } from "./Placeholder";

const SPEED = 18; // px per second: slow enough to read, fast enough to notice

/**
 * Horizontal collateral strip that drifts slowly back and forth.
 * Pauses on hover, keyboard focus, touch/wheel input, while the lightbox is
 * open and while off-screen; never moves under prefers-reduced-motion.
 * Each item opens in a native <dialog> lightbox.
 */
export default function Gallery({ items, label }: { items: Asset[]; label: string }) {
  const strip = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const lightboxOpen = useRef(false);

  // Auto-scroll.
  useEffect(() => {
    const el = strip.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    let pos = el.scrollLeft;
    let dir = 1;
    let visible = false;
    let hovered = false;
    let focused = false;
    let holdUntil = 0;

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((t - (last || t)) / 1000, 0.1);
      last = t;
      if (hovered || focused || lightboxOpen.current || t < holdUntil) {
        pos = el.scrollLeft; // pick up wherever the visitor left it
        return;
      }
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      pos += dir * SPEED * dt;
      if (pos >= max) {
        pos = max;
        dir = -1;
        holdUntil = t + 1500;
      } else if (pos <= 0) {
        pos = 0;
        dir = 1;
        holdUntil = t + 1500;
      }
      el.scrollLeft = Math.round(pos);
    };

    const start = () => {
      if (raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(el);

    const hold = () => {
      holdUntil = performance.now() + 4000;
    };
    const enter = () => (hovered = true);
    const leave = () => (hovered = false);
    const fin = () => (focused = true);
    const fout = () => (focused = el.contains(document.activeElement));
    const onVis = () => (document.hidden ? stop() : start());

    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("focusin", fin);
    el.addEventListener("focusout", fout);
    el.addEventListener("wheel", hold, { passive: true });
    el.addEventListener("touchstart", hold, { passive: true });
    el.addEventListener("pointerdown", hold);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("focusin", fin);
      el.removeEventListener("focusout", fout);
      el.removeEventListener("wheel", hold);
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("pointerdown", hold);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const open = (i: number) => {
    setIndex(i);
    lightboxOpen.current = true;
    dialog.current?.showModal();
  };

  const close = useCallback(() => dialog.current?.close(), []);

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClose = () => {
      lightboxOpen.current = false;
      setIndex((i) => {
        if (i !== null) triggers.current[i]?.focus();
        return null;
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClick = (e: MouseEvent) => {
      if (e.target === el) close();
    };
    el.addEventListener("close", onClose);
    el.addEventListener("keydown", onKey);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("close", onClose);
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("click", onClick);
    };
  }, [step, close]);

  const current = index === null ? null : items[index];

  return (
    <>
      <div ref={strip} className="strip" role="region" aria-label={`${label}, scrolls sideways`} tabIndex={0}>
        <ul className="strip__track" role="list">
          {items.map((item, i) => (
            <li key={item.id} className="strip__item" style={{ ["--r" as string]: String(item.ratio) }}>
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                type="button"
                className="gallery__btn"
                onClick={() => open(i)}
                aria-label={`Open ${item.title} (${item.kind}) larger`}
              >
                <Media item={item} showHint={false} />
                <span className="gallery__cap">
                  <span>{item.title}</span>
                  <span className="label" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                    {item.kind} <Expand size={12} />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog ref={dialog} className="lightbox" aria-label={current ? `${current.title}, ${current.kind}` : label}>
        {current && index !== null && (
          <>
            <div className="lightbox__bar">
              <p className="h4">{current.title}</p>
              <button type="button" className="icon-btn" onClick={close} aria-label="Close" autoFocus>
                <Close />
              </button>
            </div>
            <div className="lightbox__stage">
              <Media item={current} />
            </div>
            <div className="lightbox__foot">
              <p className="label num">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · {current.kind}
              </p>
              <div className="lightbox__nav">
                <button type="button" className="icon-btn" onClick={() => step(-1)} aria-label="Previous item">
                  <ArrowLeft />
                </button>
                <button type="button" className="icon-btn" onClick={() => step(1)} aria-label="Next item">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
