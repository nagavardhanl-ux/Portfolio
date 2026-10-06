import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import SectionNav from "@/components/SectionNav";
import Shot from "@/components/Shot";
import { aiWorkflow } from "@/data/content";
import { siteById } from "@/data/sites";
import { capabilitySections, whatIDoPage, type Capability } from "@/data/whatIDo";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/what-i-do/");

const pad = (n: number) => String(n).padStart(2, "0");

function CapHead({ c, align = "start" }: { c: Capability; align?: "start" | "center" }) {
  return (
    <header className={`cap__head reveal${align === "center" ? " cap__head--center" : ""}`}>
      <p className="cap__index" aria-hidden="true">
        {c.index}
      </p>
      <h2 className="h2" id={`${c.id}-title`}>
        {c.title}
      </h2>
      <p className="lead">{c.intro}</p>
    </header>
  );
}

const SubLabel = ({ children }: { children: React.ReactNode }) => <h3 className="marker cap__sub">{children}</h3>;

export default function WhatIDoPage() {
  const [pm, dg, web, ai] = capabilitySections;
  const companySites = ["venturehub360", "aiqod", "aiqod360"].map(siteById);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Capabilities</b>
          </p>
          <h1 className="h1">{whatIDoPage.heading}</h1>
          <p className="lead">{whatIDoPage.intro}</p>
        </div>
      </header>

      <div className="container wid">
        <aside className="wid__aside">
          <SectionNav items={capabilitySections} />
        </aside>

        <div className="wid__main">
          {/* 01 · Product Marketing: points as a two-column grid, work as cards */}
          <section id={pm.id} className="cap cap--grid" aria-labelledby={`${pm.id}-title`}>
            <CapHead c={pm} />
            <SubLabel>What I do</SubLabel>
            <ul className="pts-grid" role="list">
              {pm.points.map((p, i) => (
                <li key={p} className="reveal" style={{ ["--delay" as string]: `${(i % 2) * 40}ms` }}>
                  <span className="num">{pad(i + 1)}</span>
                  <p>{p}</p>
                </li>
              ))}
            </ul>
            <SubLabel>Selected work</SubLabel>
            <ul className="work-cards" role="list">
              {pm.work.map((w, i) => (
                <li key={w} className="card hover-lift reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                  <span className="label num">{pad(i + 1)}</span>
                  <p>{w}</p>
                </li>
              ))}
            </ul>
            <p className="reveal">
              <Link href="/marketing/" className="arrow-link">
                See the collateral and ICP samples <ArrowRight />
              </Link>
            </p>
          </section>

          {/* 02 · Demand Generation: split, points left, work panels right on a surface band */}
          <section id={dg.id} className="cap cap--split" aria-labelledby={`${dg.id}-title`}>
            <div className="cap--split__left">
              <CapHead c={dg} />
              <SubLabel>What I do</SubLabel>
              <ul className="pts-list" role="list">
                {dg.points.map((p) => (
                  <li key={p} className="reveal">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cap--split__right">
              <SubLabel>Selected work</SubLabel>
              <ul className="panels" role="list">
                {dg.work.map((w, i) => (
                  <li key={w} className="panel hover-lift reveal" style={{ ["--delay" as string]: `${i * 50}ms` }}>
                    <span className="panel__num">{pad(i + 1)}</span>
                    <p>{w}</p>
                  </li>
                ))}
              </ul>
              <p className="reveal">
                <Link href="/marketing/" className="arrow-link">
                  See the marketing work <ArrowRight />
                </Link>
              </p>
            </div>
          </section>

          {/* 03 · Websites & SEO: points as a row, work as a ledger beside site thumbnails */}
          <section id={web.id} className="cap cap--row" aria-labelledby={`${web.id}-title`}>
            <CapHead c={web} />
            <SubLabel>What I do</SubLabel>
            <ul className="pts-row" role="list">
              {web.points.map((p, i) => (
                <li key={p} className="reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                  <span className="num">{pad(i + 1)}</span>
                  <p>{p}</p>
                </li>
              ))}
            </ul>
            <div className="cap--row__work">
              <div>
                <SubLabel>Selected work</SubLabel>
                <ul className="ledger" role="list">
                  {web.work.map((w, i) => (
                    <li key={w} className="reveal">
                      <span className="num">{pad(i + 1)}</span>
                      <p>{w}</p>
                    </li>
                  ))}
                </ul>
                <p className="reveal" style={{ marginTop: 28 }}>
                  <Link href="/websites/" className="btn btn--primary">
                    See all eight websites <ArrowRight />
                  </Link>
                </p>
              </div>
              <ul className="thumbs reveal" role="list" aria-label="Company sites">
                {companySites.map((s) => (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="thumb hover-lift">
                      <span className="shot">
                        <Shot name={s.shot} alt={`Screenshot of the ${s.name} website`} sizes="(min-width: 1024px) 280px, 50vw" />
                      </span>
                      <span className="thumb__cap">
                        <span>{s.name}</span>
                        <span className="label">{s.roleDetail ?? s.role}</span>
                      </span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 04 · AI-Led Execution: centred intro, tools as a workflow row, work as tiles */}
          <section id={ai.id} className="cap cap--flow" aria-labelledby={`${ai.id}-title`}>
            <CapHead c={ai} align="center" />
            <SubLabel>What I do</SubLabel>
            <ul className="flow reveal" role="list" aria-label="AI workflow">
              {aiWorkflow.map((s, i) => (
                <li key={s.step}>
                  <span className="label num">{pad(i + 1)}</span>
                  <p className="h3">{s.step}</p>
                  <ul className="flow__tools" role="list">
                    {s.tools.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <SubLabel>Selected work</SubLabel>
            <ul className="tiles" role="list">
              {ai.work.map((w, i) => (
                <li key={w} className="tile hover-lift reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
                  <span className="label num">{pad(i + 1)}</span>
                  <p>{w}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
