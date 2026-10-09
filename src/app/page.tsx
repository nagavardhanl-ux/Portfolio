import Link from "next/link";
import FigureCount from "@/components/FigureCount";
import Clip from "@/components/Clip";
import { ArrowRight } from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import SiteCard from "@/components/SiteCard";
import ToolsGrid from "@/components/ToolsGrid";
import { aiWorkflow, hero, keyFigures, thread, whatIDo } from "@/data/content";
import { siteById } from "@/data/sites";
import { capabilityAnchors } from "@/data/whatIDo";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/");

const pad = (n: number) => String(n).padStart(2, "0");

/** Selected work on the home page: the three live company sites (two built, one managed). */
const selected = ["venturehub360", "aiqod", "aiqod360"].map(siteById);

function CapabilityArtifact({ index }: { index: number }) {
  if (index === 0) return (
    <div className="signal-artifact signal-positioning" aria-label="Product positioning workflow">
      <div><span>WHO IT&apos;S FOR</span><b>ICP &amp; buyer persona</b></div><i>→</i><div><span>WHY IT MATTERS</span><b>Positioning &amp; messaging</b></div>
      <p>Competitor research <span>·</span> sales material</p>
    </div>
  );
  if (index === 1) return (
    <div className="signal-artifact signal-sequence" aria-label="Demand generation workflow">
      <div className="signal-sequence__head"><span>OUTBOUND / MULTI-SEQUENCE</span><span>EMAIL + LINKEDIN</span></div>
      <ol><li><i>01</i><b>Build and verify the list</b></li><li><i>02</i><b>Write and run the sequence</b></li><li><i>03</i><b>Read replies; refine</b></li></ol>
      <p>US <span>·</span> UK <span>·</span> Europe <span>·</span> Middle East <span>·</span> Southeast Asia</p>
    </div>
  );
  if (index === 2) return (
    <div className="signal-artifact signal-site-work" aria-label="Website and SEO workflow">
      <div className="signal-site-work__bar"><i /><i /><i /><span>WEBSITE / SHIP + MEASURE</span></div>
      <div className="signal-site-work__steps"><span><b>01</b>Structure &amp; content</span><i>→</i><span><b>02</b>On-page SEO</span><i>→</i><span><b>03</b>Search Console &amp; GA4</span></div>
    </div>
  );
  return (
    <div className="signal-artifact signal-ai-work" aria-label="AI-led execution workflow">
      {aiWorkflow.map((step, i) => <div key={step.step}><i>0{i + 1}</i><b>{step.step}</b><span>{step.tools.join(" · ")}</span></div>)}
    </div>
  );
}

export default function Home() {
  const [first, second] = hero.headline.split(". ");
  return (
    <div className="signal-home">
      {/* Hero */}
      <section className="hero signal-hero" aria-labelledby="hero-title">
        <div className="container">
          <p className="marker hero__eyebrow">
            <b>{hero.eyebrow}</b>
          </p>
          <h1 id="hero-title" className="display hero__title">
            {first}.<span className="line2">{second}</span>
          </h1>
          <div className="hero__foot">
            <div>
              <p className="lead">{hero.sub}</p>
              <div className="hero__actions">
                <Link href="/websites/" className="btn btn--primary" data-magnetic="">
                  See the work <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="signal-proof" aria-label="At a glance">
        <div className="container signal-proof__inner">
          <p className="marker"><span className="num">01</span><b>At a glance</b></p>
          <dl className="figures">
            {keyFigures.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="figure__value"><FigureCount value={f.value} /></dd>
                <dd className="figure__label">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" aria-labelledby="work-title" id="work">
        <div className="container">
          <SectionHead
            index="02"
            label="Selected work"
            id="work-title"
            title="Three company sites."
            intro="VentureHub360, built from scratch; AIQoD, rebuilt from its previous version; and AIQoD360, which I manage. Each preview plays a short scroll-through of the real site."
          />
          <div className="site-gallery">
            {selected.map((s, i) => (
              <SiteCard
                key={s.id}
                site={s}
                index={i + 1}
                size={i === 0 ? "lead" : "regular"}
                detailed
                media={
                  <div className="browser-scene" data-cursor="VIEW">
                    <div className="browser-chrome" aria-hidden="true">
                      <span className="browser-dots"><i /><i /><i /></span>
                      <span className="browser-address">{s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                      <span className="browser-index">{pad(i + 1)} / 03</span>
                    </div>
                    <Clip
                      name={s.shot}
                      alt={`Screenshot of the ${s.name} website`}
                      sizes={i === 0 ? "(min-width: 1320px) 1320px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    />
                  </div>
                }
              />
            ))}
          </div>
          <p className="reveal" style={{ marginTop: 40 }}>
            <Link href="/websites/" className="arrow-link">
              All eight websites <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* The thread */}
      <section className="section" aria-labelledby="thread-title">
        <div className="container thread">
          <div className="thread__aside reveal">
            <p className="marker">
              <span className="num">03</span>
              <b>Career story</b>
            </p>
            <h2 id="thread-title" className="h2">
              From brochures to two AI platforms.
            </h2>
            <p className="body">Five steps, each one adding to the last.</p>
          </div>
          <ul className="beats" role="list">
            {thread.map((b, i) => (
              <li key={b.title} className="beat reveal">
                <span className="num">{pad(i + 1)}</span>
                <h3 className="h3">{b.title}</h3>
                <p className="body">{b.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section signal-capabilities" aria-labelledby="do-title" id="capabilities" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="04" label="Capabilities" id="do-title" title="One person, end to end." intro="Product marketing, demand generation, websites and AI-led execution—from the brief to the thing that ships." />
          <ul className="do-grid signal-capability-grid" role="list">
            {whatIDo.map((d, i) => (
              <li key={d.title} className="do-block signal-capability reveal" style={{ ["--delay" as string]: `${i * 55}ms` }}>
                <div className="signal-capability__title"><span className="num">{pad(i + 1)} / 04</span><h3 className="h3">{d.title}</h3></div>
                <CapabilityArtifact index={i} />
                <p className="body">{d.body}</p>
                <span className="do-block__more" aria-hidden="true">
                  <Link href={`/what-i-do/#${capabilityAnchors[i]}`}>More on {d.title} <ArrowRight className="go" /></Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The tools I work with */}
      <section className="section signal-tools" aria-labelledby="tools-title" id="tools" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="05" label="Tools in the workflow" id="tools-title" title="The tools I work with." intro="The real AI and marketing tools used, grouped by what they're used for." />
          <ToolsGrid />
        </div>
      </section>
    </div>
  );
}
