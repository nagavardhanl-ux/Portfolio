import SiteCard from "@/components/SiteCard";
import SiteEmbed from "@/components/SiteEmbed";
import { sites } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/websites/");

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
            {cap(word(companies))} company sites and {word(concepts)} concept builds. Each preview plays a short
            scroll-through; select one to use the real site in place. On a phone, each opens in its own tab.
          </p>
        </div>
      </header>

      <section className="section" aria-label="Websites">
        <div className="container site-gallery">
          <SiteCard site={lead} index={1} size="lead" headingLevel={2} media={<SiteEmbed site={lead} />} />
          {rest.map((s, i) => (
            <SiteCard key={s.id} site={s} index={i + 2} headingLevel={2} media={<SiteEmbed site={s} />} />
          ))}
        </div>
      </section>
    </>
  );
}
