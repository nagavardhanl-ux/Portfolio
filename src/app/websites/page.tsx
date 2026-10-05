import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import SiteEmbed from "@/components/SiteEmbed";
import { sites } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/websites/");

const pad = (n: number) => String(n).padStart(2, "0");

export default function WebsitesPage() {
  const [lead, ...rest] = sites;
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Websites</b>
          </p>
          <h1 className="h1">Seven websites. All live.</h1>
          <p className="lead">
            Each preview is a screenshot until you load it. Load one to use the real site in place; nothing loads until
            you ask. On a phone, each one opens in its own tab.
          </p>
        </div>
      </header>

      <section className="section" aria-label="Websites">
        <div className="container site-list">
          <article className="site-row site-row--lead" aria-labelledby={`site-${lead.id}`}>
            <div className="site-row__meta">
              <div className="site-row__intro stack" style={{ ["--stack" as string]: "18px" }}>
                <span className="num label">{pad(1)} · Lead build</span>
                <h2 id={`site-${lead.id}`} className="h2">
                  {lead.name}
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "52ch" }}>
                {lead.line}
              </p>
              {lead.caseStudy && (
                <div className="site-row__links">
                  <Link href={lead.caseStudy} className="arrow-link">
                    Read the case study <ArrowRight />
                  </Link>
                </div>
              )}
            </div>
            <div className="reveal">
              <SiteEmbed site={lead} />
            </div>
          </article>

          {rest.map((s, i) => (
            <article key={s.id} className="site-row" aria-labelledby={`site-${s.id}`}>
              <div className="site-row__meta">
                <span className="num">{pad(i + 2)}</span>
                <h2 id={`site-${s.id}`} className="h3">
                  {s.name}
                </h2>
                <span>
                  <span className="tag" data-live={s.status === "Live" ? "" : undefined}>
                    {s.status}
                  </span>
                </span>
                <p className="body">{s.line}</p>
                {s.caseStudy && (
                  <div className="site-row__links">
                    <Link href={s.caseStudy} className="arrow-link">
                      Read the case study <ArrowRight />
                    </Link>
                  </div>
                )}
              </div>
              <div className="reveal">
                <SiteEmbed site={s} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
