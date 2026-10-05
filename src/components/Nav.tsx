"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { Chevron, Close, MenuIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/websites/", label: "Websites" },
  { href: "/marketing/", label: "Marketing" },
  { href: "/icp-builder/", label: "ICP builder" },
  { href: "/about/", label: "About" },
];

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export default function Nav() {
  const pathname = norm(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const workBtn = useRef<HTMLButtonElement>(null);
  const mobileBtn = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (state adjusted during render, not in an effect).
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setWorkOpen(false);
    setMobileOpen(false);
  }

  // Work menu: close on outside click and Escape.
  useEffect(() => {
    if (!workOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setWorkOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setWorkOpen(false);
        workBtn.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [workOpen]);

  // Mobile menu: lock scroll, focus first link, Escape closes, close if resized to desktop.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobilePanel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileBtn.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1000px)");
    const onMq = () => mq.matches && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [mobileOpen]);

  const onWorkKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setWorkOpen(true);
      requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>(".menu__item")?.focus());
    }
  };

  const onPanelKey = (e: React.KeyboardEvent) => {
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>(".menu__item") ?? []);
    const i = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(i + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(i - 1 + items.length) % items.length]?.focus();
    }
  };

  const inWork = pathname.startsWith("/work/");
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="nav" data-scrolled={scrolled || mobileOpen}>
      <div className="container nav__inner">
        <Link href="/" className="wordmark" aria-label="Nagavardhan, B2B marketing, home">
          Nagavardhan <span>B2B marketing</span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav__links" role="list">
            <li className="menu" ref={menuRef}>
              <button
                ref={workBtn}
                type="button"
                className="nav__link"
                aria-expanded={workOpen}
                aria-controls="work-menu"
                data-active={inWork}
                onClick={() => setWorkOpen((o) => !o)}
                onKeyDown={onWorkKey}
              >
                Work <Chevron />
              </button>
              <div id="work-menu" className="menu__panel" hidden={!workOpen} onKeyDown={onPanelKey}>
                <ul role="list">
                  {caseStudies.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/work/${c.slug}/`}
                        className="menu__item"
                        aria-current={current(`/work/${c.slug}/`)}
                      >
                        <strong>{c.title}</strong>
                        <span>Case study</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="nav__link" aria-current={current(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <Link href="/about/#contact" className="btn btn--primary btn--sm nav__cta">
            Get in touch
          </Link>
          <button
            ref={mobileBtn}
            type="button"
            className="icon-btn nav__toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <Close /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={mobilePanel} className="mobile-menu" hidden={!mobileOpen}>
        <nav aria-label="Mobile">
          <ul role="list">
            <li>
              <Link href="/" aria-current={current("/")}>
                Home
              </Link>
            </li>
            <li>
              <span className="label" style={{ display: "block", padding: "22px 0 4px" }}>
                Case studies
              </span>
              <ul role="list" className="sub">
                {caseStudies.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/work/${c.slug}/`} aria-current={current(`/work/${c.slug}/`)}>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about/#contact">Get in touch</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
