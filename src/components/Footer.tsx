import Link from "next/link";

const navPages = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/websites/", label: "Websites" },
  { href: "/what-i-do/", label: "What I do" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer-graphical" aria-label="Site footer">
      <div className="container">
        {/* Animated Gold Border Beam Navigation Cards */}
        <nav aria-label="Footer pages navigation" className="footer-nav-grid">
          {navPages.map((page, idx) => (
            <Link key={page.href} href={page.href} className="footer-card" style={{ ["--beam-delay" as string]: `${idx * -0.8}s` }}>
              <span className="footer-card__inner">
                <span className="footer-card__name">{page.label}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom Colophon Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <span className="footer-bottom__wordmark">Nagavardhan Lella</span>
            <span className="footer-bottom__sub">B2B marketing and the websites it runs on</span>
          </div>

          <div className="footer-bottom__right">
            <span>&copy; {new Date().getFullYear()} · All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
