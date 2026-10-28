import SiteCard from "@/components/SiteCard";
import SectionHead from "@/components/SectionHead";
import { sites } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";
import { asset } from "@/lib/config";

export const metadata = pageMetadata("/websites/");

export default function WebsitesPage() {
  const companySites = sites.filter((s) => s.status === "Live company site");
  const [leadCompany, ...otherCompanies] = companySites;
  const conceptSites = sites.filter((s) => s.status === "Concept build");

  return (
    <>
      <header className="page-head page-head--has-bg page-head--websites" aria-labelledby="websites-hero-title">
        <div className="page-head__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("websites/websites-hero.webp")}
            alt=""
            className="page-head__bg-img"
          />
          <div className="page-head__scrim" />
        </div>
        <div className="container">
          <h1 id="websites-hero-title" className="h1">Company websites, built and run end to end</h1>
          <p className="lead">
            Live sites for the AI platforms I market, built and managed alongside the marketing.
          </p>
        </div>
      </header>

      <section className="section" aria-label="Company websites">
        <div className="container site-gallery">
          {leadCompany && (
            <SiteCard site={leadCompany} size="lead" headingLevel={2} />
          )}
          {otherCompanies.map((s) => (
            <SiteCard key={s.id} site={s} headingLevel={2} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="side-builds-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="side-builds-title"
            title="Side builds"
            intro="Concept sites built to try new layouts, interactions and tools."
          />
          <div className="site-gallery">
            {conceptSites.map((s) => (
              <SiteCard key={s.id} site={s} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
