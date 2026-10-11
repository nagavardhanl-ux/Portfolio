"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Close, MenuIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/websites/", label: "Websites" },
  { href: "/what-i-do/", label: "What I do" },
];

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export default function Nav() {
  const pathname = norm(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileBtn = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation (state adjusted during render, not in an effect).
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

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

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="nav" data-scrolled={scrolled || mobileOpen}>
      <div className="container nav__inner">
        <Link href="/" className="wordmark" aria-label="Nagavardhan, B2B marketing, home">
          Nagavardhan <span>B2B marketing</span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav__links" role="list">
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
          <Link href="/contact/" className="btn btn--primary btn--sm nav__cta">
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
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/">Get in touch</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
