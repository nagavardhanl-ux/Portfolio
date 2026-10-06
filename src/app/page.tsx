import Link from "next/link";
import CvButton from "@/components/CvButton";
import Clip from "@/components/Clip";
import HeroFx from "@/components/HeroFx";
import { ArrowRight } from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import SiteCard from "@/components/SiteCard";
import { capabilities, hero, keyFigures, thread, whatIDo } from "@/data/content";
import { siteById } from "@/data/sites";
import { capabilityAnchors } from "@/data/whatIDo";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/");

const pad = (n: number) => String(n).padStart(2, "0");

/** Selected work on the home page: the three live company sites (two built, one managed). */
const selected = ["venturehub360", "aiqod", "aiqod360"].map(siteById);

export default function Home() {
  const [first, second] = hero.headline.split(". ");
  return (
    <>
      {/* Hero */}
      <section className="hero has-field" aria-labelledby="hero-title">
        <HeroFx />
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
                <Link href="/websites/" className="btn btn--primary">
                  See the work <ArrowRight />
                </Link>
                <CvButton />
              </div>
            </div>
            <dl className="figures">
              {keyFigures.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="figure__value">{f.value}</dd>
                  <dd className="figure__label">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="container">
        <ul className="capstrip" role="list" aria-label="Capabilities">
          {capabilities.map((c, i) => (
            <li key={c} className="hover-lift">
              <span className="num">{pad(i + 1)}</span>
              <Link href={`/what-i-do/#${capabilityAnchors[i]}`} className="stretch">
                {c}
              </Link>
              <ArrowRight className="go" />
            </li>
          ))}
        </ul>
      </div>

      {/* Selected work */}
      <section className="section" aria-labelledby="work-title" id="work">
        <div className="container">
          <SectionHead
            index="01"
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
                  <Clip
                    name={s.shot}
                    alt={`Screenshot of the ${s.name} website`}
                    sizes={i === 0 ? "(min-width: 1320px) 1320px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                  />
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
              <span className="num">02</span>
              <b>The thread</b>
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

      {/* What I do */}
      <section className="section" aria-labelledby="do-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="03" label="What I do" id="do-title" title="Four jobs, one person." />
          <ul className="do-grid" role="list">
            {whatIDo.map((d, i) => (
              <li key={d.title} className="do-block hover-lift reveal" style={{ ["--delay" as string]: `${(i % 2) * 50}ms` }}>
                <span className="num">{pad(i + 1)}</span>
                <h3 className="h3">
                  <Link href={`/what-i-do/#${capabilityAnchors[i]}`} className="stretch">
                    {d.title}
                  </Link>
                </h3>
                <p className="body">{d.body}</p>
                <span className="do-block__more" aria-hidden="true">
                  More on {d.title} <ArrowRight className="go" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next steps */}
      <section className="section" aria-labelledby="next-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 id="next-title" className="sr-only">
            Next steps
          </h2>
          <div className="cta-pair">
            <Link href="/icp-builder/" className="card cta reveal">
              <span className="marker">
                <b>Tool</b>
              </span>
              <span className="stack" style={{ ["--stack" as string]: "14px" }}>
                <span className="h3" style={{ display: "block" }}>
                  Build an ICP in three clicks.
                </span>
                <span className="body" style={{ display: "block" }}>
                  Industry, size and region in. Who to sell to, their pains, the titles to target and an opening line out.
                </span>
              </span>
              <span className="card__more">
                Open the ICP builder <ArrowRight />
              </span>
            </Link>
            <Link href="/about/#contact" className="card cta reveal" style={{ ["--delay" as string]: "50ms" }}>
              <span className="marker">
                <b>Contact</b>
              </span>
              <span className="stack" style={{ ["--stack" as string]: "14px" }}>
                <span className="h3" style={{ display: "block" }}>
                  Email, phone or LinkedIn.
                </span>
                <span className="body" style={{ display: "block" }}>
                  Questions about the work, a role or a website build.
                </span>
              </span>
              <span className="card__more">
                Get in touch <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
