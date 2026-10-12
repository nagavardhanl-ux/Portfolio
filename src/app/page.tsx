import Link from "next/link";
import FigureCount from "@/components/FigureCount";
import Clip from "@/components/Clip";
import { ArrowRight } from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import HomeShowcase from "@/components/HomeShowcase";
import ToolsGrid from "@/components/ToolsGrid";
import ShippedBento from "@/components/ShippedBento";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import { hero, keyFigures } from "@/data/content";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/");

export default function Home() {
  const [first] = hero.headline.split(". ");
  return (
    <div className="signal-home">
      {/* Hero */}
      <section className="hero signal-hero hero--center" aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" className="display hero__title">
            {first}
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
            title="Three company sites"
            intro="VentureHub360, built from scratch; AIQoD, rebuilt from its previous version; and AIQoD360, which I manage."
          />
          <HomeShowcase />
        </div>
      </section>


      {/* Capabilities */}
      <section className="section signal-capabilities" aria-labelledby="do-title" id="capabilities" style={{ paddingTop: 0 }}>
        <div className="container">
          <CapabilitiesSection />
        </div>
      </section>

      {/* What I've shipped */}
      <section className="section" aria-labelledby="shipped-title" id="shipped" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="05" label="Shipped" id="shipped-title" title="What I&apos;ve shipped" intro="A sample of the work behind the roles." />
          <ShippedBento />
        </div>
      </section>

      {/* The tools I work with */}
      <section className="section signal-tools" aria-labelledby="tools-title" id="tools" style={{ paddingTop: 0 }}>
        <div className="container">
          <ToolsGrid />
        </div>
      </section>
    </div>
  );
}
