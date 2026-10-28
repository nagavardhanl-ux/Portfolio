import SectionHead from "@/components/SectionHead";
import GalleryCard from "@/components/GalleryCard";
import CatalogueViewer from "@/components/CatalogueViewer";
import { videos, cataloguePages } from "@/data/gallery";
import { pageMetadata } from "@/lib/meta";
import { asset } from "@/lib/config";

export const metadata = pageMetadata("/gallery/");

export default function GalleryPage() {
  return (
    <>
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
          <p className="lead">Videos and design work. More added as it ships.</p>
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

      {/* Section 2: Catalogue (View Only) */}
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
