import SectionHead from "@/components/SectionHead";
import HomeShowcase from "@/components/HomeShowcase";
import ToolsGrid from "@/components/ToolsGrid";
import ShippedBento from "@/components/ShippedBento";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HeroScrollExpansion from "@/components/HeroScrollExpansion";
import JsonLd from "@/components/JsonLd";
import { homeStructuredData, pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <div className="signal-home">
      <JsonLd data={homeStructuredData()} />

      {/* Hero */}
      <HeroScrollExpansion />

      {/* What I've shipped */}
      <section className="section" aria-labelledby="shipped-title" id="shipped">
        <div className="container">
          <SectionHead index="02" label="Shipped" id="shipped-title" title="What I&apos;ve shipped" intro="A sample of the work behind the roles." />
          <ShippedBento />
        </div>
      </section>

      {/* Selected work */}
      <section className="section" aria-labelledby="work-title" id="work" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            index="03"
            label="Selected work"
            id="work-title"
            title="Company sites"
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

      {/* The tools I work with */}
      <section className="section signal-tools" aria-labelledby="tools-title" id="tools" style={{ paddingTop: 0 }}>
        <div className="container">
          <ToolsGrid />
        </div>
      </section>
    </div>
  );
}
