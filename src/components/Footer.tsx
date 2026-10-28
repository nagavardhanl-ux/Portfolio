import Link from "next/link";

const navPages = [
  { href: "/", label: "Home", num: "01" },
  { href: "/about/", label: "About", num: "02" },
  { href: "/websites/", label: "Websites", num: "03" },
  { href: "/what-i-do/", label: "What I do", num: "04" },
  { href: "/gallery/", label: "Gallery", num: "05" },
  { href: "/contact/", label: "Contact", num: "06" },
];

export default function Footer() {
  return (
    <footer className="footer-graphical" aria-label="Site footer">
      <div className="container">
        {/* Graphical Navigation Deck */}
        <nav aria-label="Footer pages navigation" className="footer-deck">
          <div className="footer-deck__header">
            <p className="footer-deck__label">Index</p>
          </div>
          <div className="footer-deck__grid">
            {navPages.map((page) => (
              <Link key={page.href} href={page.href} className="footer-deck__item">
                <span className="footer-deck__num">{page.num}</span>
                <span className="footer-deck__name">{page.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom Colophon Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <span className="footer-bottom__wordmark">Nagavardhan Reddy Lella</span>
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
