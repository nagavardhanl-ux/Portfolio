import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { contact, site } from "@/lib/config";
import CvButton from "./CvButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="stack" style={{ ["--stack" as string]: "24px" }}>
            <p className="h2">Marketing, and the site it runs on.</p>
            <p className="body">
              <a className="link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/about/#contact" className="btn btn--primary">
                Get in touch
              </Link>
              <CvButton />
            </div>
          </div>

          <nav aria-label="Footer" className="footer__links">
            <p className="label" style={{ marginBottom: 6 }}>
              Pages
            </p>
            <Link href="/">Home</Link>
            <Link href="/websites/">Websites</Link>
            <Link href="/marketing/">Marketing</Link>
            <Link href="/icp-builder/">ICP builder</Link>
            <Link href="/about/">About</Link>
          </nav>

          <div className="footer__links">
            <p className="label" style={{ marginBottom: 6 }}>
              Case studies
            </p>
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}/`}>
                {c.title}
              </Link>
            ))}
            <p className="label" style={{ margin: "18px 0 6px" }}>
              Elsewhere
            </p>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="label">© {new Date().getFullYear()} {site.name}</p>
          <p className="label">Built with Next.js · Hosted on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
