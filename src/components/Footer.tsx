import Link from "next/link";
import { contact } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <nav aria-label="Footer" className="footer__links">
            <p className="label" style={{ marginBottom: 6 }}>
              Pages
            </p>
            <Link href="/">Home</Link>
            <Link href="/websites/">Websites</Link>
            <Link href="/what-i-do/">What I do</Link>
            <Link href="/experience/">Experience</Link>
            <Link href="/contact/">Contact</Link>
          </nav>

          <div className="footer__links">
            <p className="label" style={{ marginBottom: 6 }}>
              Elsewhere
            </p>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
