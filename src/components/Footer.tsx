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
        {/* Animated Gold Border Beam Navigation Box */}
        <nav aria-label="Footer pages navigation" className="footer-nav-box">
          <div className="footer-nav-box__inner">
            <div className="footer-nav-box__grid">
              {navPages.map((page) => (
                <Link key={page.href} href={page.href} className="footer-nav-box__item">
                  <span className="footer-nav-box__name">{page.label}</span>
                </Link>
              ))}
            </div>
          </div>
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
