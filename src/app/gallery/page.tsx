import SectionHead from "@/components/SectionHead";
import GalleryCard from "@/components/GalleryCard";
import ReelsRail from "@/components/ReelsRail";
import CatalogueViewer from "@/components/CatalogueViewer";
import JsonLd from "@/components/JsonLd";
import { videos, productReels, podcastMarketingReels, cataloguePages } from "@/data/gallery";
import { galleryStructuredData, pageMetadata } from "@/lib/meta";
import { asset } from "@/lib/config";

export const metadata = pageMetadata("/gallery/");

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryStructuredData()} />
      <header className="page-head page-head--has-bg page-head--gallery" aria-labelledby="gallery-hero-title">
        <div className="page-head__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("gallery/gallery-hero.webp")}
            alt=""
            className="page-head__bg-img"
          />
          <div className="page-head__scrim" />
        </div>
        <div className="container">
          <h1 id="gallery-hero-title" className="h1">Gallery</h1>
          <p className="lead">Videos, product reels, podcast marketing, and design work. More added as it ships.</p>
        </div>
      </header>

      {/* Section 1: Videos */}
      <section className="section" aria-labelledby="videos-title">
        <div className="container">
          <SectionHead
            id="videos-title"
            title="Videos"
          />
          <div className="gallery-grid">
            {videos.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Product Reels */}
      <section className="section" aria-labelledby="product-reels-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="product-reels-title"
            title="Product & feature reels"
            intro="Short-form vertical reels covering AI agent architecture, platform capabilities, and product concepts."
          />
          <div className="gallery-grid gallery-grid--reels">
            {productReels.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Podcast Marketing */}
      <section className="section" aria-labelledby="podcast-marketing-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="podcast-marketing-title"
            title="Podcast marketing"
            intro="Short-form reels created using Claude for podcast marketing, executive soundbites, and audience growth."
          />
          <ReelsRail items={podcastMarketingReels} label="Podcast marketing reels" />
        </div>
      </section>

      {/* Section 4: Catalogue (View Only) */}
      <section className="section" aria-labelledby="catalogue-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            id="catalogue-title"
            title="Earlier design work"
            intro="A product and IT sourcing catalogue I designed end to end at LVL Groups & Enterprises. View only."
          />
          <CatalogueViewer pages={cataloguePages} />
        </div>
      </section>
    </>
  );
}
