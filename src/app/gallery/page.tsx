import SectionHead from "@/components/SectionHead";
import GalleryCard from "@/components/GalleryCard";
import CatalogueViewer from "@/components/CatalogueViewer";
import { videos, cataloguePages } from "@/data/gallery";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/gallery/");

export default function GalleryPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Gallery</b>
          </p>
          <h1 className="h1">Gallery</h1>
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
