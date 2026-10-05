import Link from "next/link";
import Gallery from "@/components/Gallery";
import { ArrowRight } from "@/components/icons";
import { Media } from "@/components/Placeholder";
import SectionHead from "@/components/SectionHead";
import VideoCard from "@/components/VideoCard";
import { campaignAssets, collateral, icpAssets, videos } from "@/data/marketing";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/marketing/");

export default function MarketingPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Marketing</b>
          </p>
          <h1 className="h1">Campaigns, positioning and the material behind them.</h1>
          <p className="lead">
            The marketing side of the work: outreach into five regions, ICPs across products and markets, and the
            collateral and video that go with them.
          </p>
        </div>
      </header>

      <div className="container">
        <section className="mk-section" aria-labelledby="mk-campaigns">
          <SectionHead
            index="01"
            label="Campaigns"
            id="mk-campaigns"
            title="Outreach that runs on lists, sequences and tracking."
            intro="Cold email and LinkedIn outreach for partner recruitment, product lines and investor outreach, run into international markets with list building, verification and tracking."
          />
          <ul className="asset-row" role="list">
            {campaignAssets.map((a, i) => (
              <li key={a.id} className="reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                <Media item={a} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mk-section" aria-labelledby="mk-icp">
          <SectionHead
            index="02"
            label="ICPs & Positioning"
            id="mk-icp"
            title="Who we sell to, written down."
            intro="Ideal customer profiles across multiple AI products and markets, turned into campaign targeting and sales material."
          />
          <ul className="asset-row asset-row--2" role="list">
            {icpAssets.map((a, i) => (
              <li key={a.id} className="reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                <Media item={a} />
              </li>
            ))}
          </ul>
          <p className="reveal">
            <Link href="/icp-builder/" className="arrow-link">
              Try the ICP builder <ArrowRight />
            </Link>
          </p>
        </section>

        <section className="mk-section" aria-labelledby="mk-collateral">
          <SectionHead
            index="03"
            label="Collateral"
            id="mk-collateral"
            title="Brochures, one-pagers and creatives."
            intro="Brochures, one-pagers, pricing sheets, banners, posters and social creatives. Select any piece to see it larger."
          />
          <Gallery items={collateral} label="Collateral gallery" />
        </section>

        <section className="mk-section" aria-labelledby="mk-video">
          <SectionHead
            index="04"
            label="Video"
            id="mk-video"
            title="Avatar videos, a product promo and a venue film."
            intro="AI avatar videos, a product promo and the venue video. Nothing plays until you press play."
          />
          <div className="video-grid">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
