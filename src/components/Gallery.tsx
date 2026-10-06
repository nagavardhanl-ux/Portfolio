"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Asset } from "@/data/marketing";
import { ArrowLeft, ArrowRight, Close, Expand } from "./icons";
import { Media } from "./Placeholder";

/**
 * Image grid where every item opens in a native <dialog> lightbox
 * (arrow keys step through, Escape or the backdrop closes, focus returns).
 * `layout="masonry"` keeps each item's own aspect ratio in columns;
 * `layout="even"` is a regular grid for same-shaped items.
 */
export default function Gallery({
  items,
  label,
  layout = "masonry",
}: {
  items: Asset[];
  label: string;
  layout?: "masonry" | "even";
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
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
      <ul className={`gallery gallery--${layout}`} role="list" aria-label={label}>
        {items.map((item, i) => (
          <li key={item.id} className="gallery__item reveal" style={{ ["--delay" as string]: `${(i % 3) * 40}ms` }}>
            <button
              ref={(el) => {
                triggers.current[i] = el;
              }}
              type="button"
              className="gallery__btn"
              onClick={() => open(i)}
              aria-label={`Open ${item.title} (${item.kind}) larger`}
            >
              <Media item={item} compact />
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
