import SiteEmbed from "@/components/SiteEmbed";
import SiteTags from "@/components/SiteTags";
import { sites } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/websites/");

const pad = (n: number) => String(n).padStart(2, "0");
const words = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const word = (n: number) => words[n] ?? String(n);
const cap = (t: string) => t[0].toUpperCase() + t.slice(1);

export default function WebsitesPage() {
  const [lead, ...rest] = sites;
  const companies = sites.filter((s) => s.status === "Live company site").length;
  const concepts = sites.length - companies;
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Websites</b>
          </p>
          <h1 className="h1">{cap(word(sites.length))} websites, shipped and managed.</h1>
          <p className="lead">
            {cap(word(companies))} company sites and {word(concepts)} concept builds.
            Each preview plays a short scroll-through; select one to use the real site in place. On a phone, each opens in
            its own tab.
          </p>
        </div>
      </header>

      <section className="section" aria-label="Websites">
        <div className="container site-list">
          <article className="site-row site-row--lead" aria-labelledby={`site-${lead.id}`}>
            <div className="site-row__meta">
              <div className="site-row__intro stack" style={{ ["--stack" as string]: "18px" }}>
                <span className="num label">{pad(1)} · Featured</span>
                <h2 id={`site-${lead.id}`} className="h2">
                  {lead.name}
                </h2>
                <span>
                  <SiteTags site={lead} />
                </span>
              </div>
              <p className="lead" style={{ maxWidth: "52ch" }}>
                {lead.line}
              </p>
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
                  <SiteTags site={s} />
                </span>
                <p className="body">{s.line}</p>
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
