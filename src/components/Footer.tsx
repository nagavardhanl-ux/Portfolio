import Link from "next/link";
import { contact, site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="stack" style={{ ["--stack" as string]: "24px" }}>
            <p className="footer__statement">Marketing, and the site it runs on.</p>
            <p className="body">
              <a className="link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn--primary" data-magnetic="">
                Get in touch
              </Link>
            </div>
          </div>

          <nav aria-label="Footer" className="footer__links">
            <p className="label" style={{ marginBottom: 6 }}>
              Pages
            </p>
            <Link href="/">Home</Link>
            <Link href="/websites/">Websites</Link>
            <Link href="/what-i-do/">What I do</Link>
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

        <div className="footer__bottom">
          <p className="label">© {new Date().getFullYear()} {site.name}</p>
          <p className="label">Designed and built by {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
