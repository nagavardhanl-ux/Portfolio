import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/data/gallery";
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
          <p className="lead">Videos and collateral from the work. More added as it ships.</p>
        </div>
      </header>

      <section className="section" aria-label="Videos and collateral">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
