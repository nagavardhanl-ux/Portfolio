import Link from "next/link";
import CvButton from "@/components/CvButton";
import DotField from "@/components/DotField";
import { ArrowRight } from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import Shot from "@/components/Shot";
import { caseStudies } from "@/data/caseStudies";
import { capabilities, hero, keyFigures, thread, whatIDo } from "@/data/content";
import { siteById } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/");

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const [first, second] = hero.headline.split(". ");
  return (
    <>
      {/* Hero */}
      <section className="hero has-field" aria-labelledby="hero-title">
        <DotField />
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
            <li key={c}>
              <span className="num">{pad(i + 1)}</span>
              {c}
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
            title="Three sites, end to end."
            intro="A study-abroad consultancy, and the two AI platforms I run marketing for. Each one built, written and shipped by me."
          />
          <div className="work-grid">
            {caseStudies.map((c, i) => {
              const s = siteById(c.siteId);
              return (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}/`}
                  className={`card work-card reveal${i === 0 ? " work-card--lead" : ""}`}
                  style={{ ["--delay" as string]: `${i * 50}ms` }}
                >
                  <div className="shot">
                    <Shot
                      name={s.shot}
                      alt={`Screenshot of the ${c.title} website`}
                      sizes={i === 0 ? "(min-width: 1320px) 1320px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    />
                  </div>
                  <div className="card__body">
                    <div className="card__meta">
                      <span className="label num">{pad(i + 1)} · Case study</span>
                      <span className="tag" data-live={s.status === "Live" ? "" : undefined}>
                        {s.status}
                      </span>
                    </div>
                    <h3 className={i === 0 ? "h2" : "h3"}>{c.title}</h3>
                    <p className="body">{c.summary}</p>
                    <span className="card__more">
                      Read the case study <ArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="reveal" style={{ marginTop: 40 }}>
            <Link href="/websites/" className="arrow-link">
              All seven websites, live <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <div className="section-break has-field" aria-hidden="true">
        <DotField density={22} />
      </div>

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
          <ol className="beats" role="list">
            {thread.map((b, i) => (
              <li key={b.title} className="beat reveal">
                <span className="num">{pad(i + 1)}</span>
                <h3 className="h3">{b.title}</h3>
                <p className="body">{b.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What I do */}
      <section className="section" aria-labelledby="do-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="03" label="What I do" id="do-title" title="Four jobs, one person." />
          <ul className="do-grid" role="list">
            {whatIDo.map((d, i) => (
              <li key={d.title} className="do-block reveal" style={{ ["--delay" as string]: `${(i % 2) * 50}ms` }}>
                <span className="num">{pad(i + 1)}</span>
                <h3 className="h3">{d.title}</h3>
                <p className="body">{d.body}</p>
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
