"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky in-page nav for the What I do page. Side rail at 1024px+, a sticky
 * bar under the main nav below that. Highlights the section in view.
 */
export default function SectionNav({ items }: { items: { id: string; index: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const bar = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    // A section is "active" while it crosses a band just below the sticky navs.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  // Keep the active item visible in the horizontal bar on small screens.
  useEffect(() => {
    const el = bar.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    const list = bar.current;
    if (!el || !list || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="secnav" aria-label="On this page">
      <p className="label secnav__title">On this page</p>
      <ul ref={bar} className="secnav__list" role="list">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              data-id={i.id}
              className="secnav__link"
              aria-current={active === i.id ? "location" : undefined}
            >
              <span className="num">{i.index}</span>
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
