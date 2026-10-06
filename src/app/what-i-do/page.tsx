import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import IndexList from "@/components/IndexList";
import SectionNav from "@/components/SectionNav";
import Workflow from "@/components/Workflow";
import { capabilitySections, whatIDoPage, type Capability } from "@/data/whatIDo";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/what-i-do/");

const Sub = ({ children }: { children: React.ReactNode }) => <h3 className="marker cap__sub">{children}</h3>;

/** Extra link under each section's selected work, where there is one. */
const extras: Record<string, { href: string; label: string; primary?: boolean }> = {
  "product-marketing": { href: "/marketing/", label: "See the collateral and ICP samples" },
  "demand-generation": { href: "/marketing/", label: "See the marketing work" },
  "websites-seo": { href: "/websites/", label: "See all eight websites", primary: true },
};

/**
 * One capability as a full-width row: text on one side, selected work on the
 * other, flipping every other row. On phones it stacks text first, then work.
 */
function CapabilityRow({ c, flip }: { c: Capability; flip: boolean }) {
  const extra = extras[c.id];
  const isAi = c.id === "ai-execution";
  return (
    <section id={c.id} className={`cap-row${flip ? " cap-row--flip" : ""}`} aria-labelledby={`${c.id}-title`}>
      <div className="cap-row__text reveal">
        <p className="cap-row__index" aria-hidden="true">
          {c.index}
        </p>
        <h2 className="h2" id={`${c.id}-title`}>
          {c.title}
        </h2>
        <p className="lead">{c.intro}</p>
        {!isAi && (
          <>
            <Sub>What I do</Sub>
            <ul className="dash-list" role="list">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="cap-row__work">
        <Sub>Selected work</Sub>
        <IndexList items={c.work} label={`${c.title}: selected work`} />
        {extra && (
          <p className="reveal">
            <Link href={extra.href} className={extra.primary ? "btn btn--primary" : "arrow-link"}>
              {extra.label} <ArrowRight />
            </Link>
          </p>
        )}
      </div>

      {isAi && (
        <div className="cap-row__full">
          <Sub>What I do</Sub>
          <Workflow />
        </div>
      )}
    </section>
  );
}

export default function WhatIDoPage() {
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
          {capabilitySections.map((c, i) => (
            <CapabilityRow key={c.id} c={c} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </>
  );
}
