import Gallery from "@/components/Gallery";
import VideoCard from "@/components/VideoCard";
import { collateral, icpWork, videos } from "@/data/marketing";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/marketing/");

/** Visual proof page: artefacts with one-line captions. The descriptions live on /what-i-do. */
function Block({ id, index, title, children }: { id: string; index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mk-section" aria-labelledby={id}>
      <h2 id={id} className="marker reveal">
        <span className="num">{index}</span>
        <b>{title}</b>
      </h2>
      {children}
    </section>
  );
}

export default function MarketingPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Marketing</b>
          </p>
          <h1 className="h1">Marketing work</h1>
          <p className="lead">The actual things I made: collateral, campaigns and content.</p>
        </div>
      </header>

      <div className="container">
        <Block id="mk-collateral" index="01" title="Collateral">
          <Gallery items={collateral} label="Collateral" />
        </Block>

        <Block id="mk-icp" index="02" title="ICP and positioning">
          <Gallery items={icpWork} label="ICP and positioning samples" layout="even" />
        </Block>

        <Block id="mk-video" index="03" title="Video">
          <div className="video-grid">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </Block>
      </div>
    </>
  );
}
