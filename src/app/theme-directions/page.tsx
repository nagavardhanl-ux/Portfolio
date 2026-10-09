import type { ReactNode } from "react";
import { aiWorkflow, hero, keyFigures, thread, whatIDo } from "@/data/content";
import { siteById } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";
import Shot from "@/components/Shot";
import "./theme-directions.css";

export const metadata = pageMetadata("/theme-directions/");

const themes = [
  {
    id: "journal",
    number: "01",
    name: "Measured Journal",
    descriptor: "Warm paper, clear thinking.",
    note: "A quiet editorial system: warm paper, ink, and a small cobalt signal.",
    palette: "Paper · ink · cobalt",
    type: "Expressive serif / precise sans",
    layout: "Open grid with a lead project",
    motion: "Short, staggered fade and rise",
  },
  {
    id: "signal",
    number: "02",
    name: "Signal & Structure",
    descriptor: "A little more edge, still human.",
    note: "A deeper graphite canvas pairs strong type with a structured, analytical rhythm.",
    palette: "Graphite · chalk · periwinkle",
    type: "Large grotesk / serif accents",
    layout: "Modular rows with firm alignment",
    motion: "Crisp reveals, minimal travel",
  },
  {
    id: "field",
    number: "03",
    name: "Field Notes",
    descriptor: "Tactile, modular, considered.",
    note: "Soft sage and parchment make room for the human story and the working detail.",
    palette: "Sage · parchment · charcoal",
    type: "Broad serif / compact sans",
    layout: "Asymmetric spreads and notes",
    motion: "Stepped, gentle progression",
  },
] as const;

const projects = ["venturehub360", "aiqod", "aiqod360"].map(siteById);

function Marker({ children }: { children: ReactNode }) {
  return <p className="td-marker">{children}</p>;
}

function CapabilityArtifact({ index }: { index: number }) {
  if (index === 0) return <div className="td-artifact td-positioning"><span>WHO IT&apos;S FOR</span><b>ICP</b><i>→</i><span>WHY IT MATTERS</span><b>Positioning</b></div>;
  if (index === 1) return <div className="td-artifact td-sequence"><span>OUTREACH SEQUENCE</span><b><i>01</i> Cold email</b><b><i>02</i> LinkedIn follow-up</b><b><i>03</i> Read replies · refine</b></div>;
  if (index === 2) return <div className="td-artifact td-site-artifact"><div className="td-mini-browser"><i /><i /><i /><b>PAGE / LIVE</b></div><div><b>Structure</b><span>Content · on-page SEO</span></div><div><b>Measure</b><span>Search Console · GA4</span></div></div>;
  return <div className="td-artifact td-workflow">{aiWorkflow.map((step, i) => <span key={step.step}><i>0{i + 1}</i><b>{step.step}</b><small>{step.tools.join(" · ")}</small></span>)}</div>;
}

function PortfolioPreview({ themeId, mode }: { themeId: string; mode: "desktop" | "mobile" }) {
  return (
    <div className={`td-preview td-${themeId} td-${mode}`}>
      <header className="td-nav"><b>NRL<span>—</span></b><nav>WORK&nbsp;&nbsp; STORY&nbsp;&nbsp; CAPABILITIES</nav><span>IN / HELLO</span></header>
      <section className="td-hero">
        <Marker>MARKETING · BUILT END TO END</Marker>
        <h3>{hero.headline}</h3>
        <div className="td-hero-foot"><p>{hero.sub}</p><span>↓ &nbsp;THE WORK</span></div>
      </section>
      <section className="td-proof">
        {keyFigures.map((figure) => <div key={figure.label}><b>{figure.value}</b><span>{figure.label}</span></div>)}
      </section>
      <section className="td-work">
        <div className="td-section-head"><Marker>01 / SELECTED WORK</Marker><h4>Built for the real world.</h4></div>
        <div className="td-projects">
          {projects.map((project, i) => <a className={`td-project td-project-${i}`} href={project.url} target="_blank" rel="noreferrer" key={project.id}>
            <div className="td-browser"><span>● ● ●</span><b>{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</b><i>↗</i><Shot name={project.shot} alt={`${project.name} real website preview`} sizes="(min-width: 1100px) 28vw, 700px" /></div>
            <div className="td-project-caption"><b>{project.name}</b><span>{i === 0 ? "ANALYTICAL" : i === 1 ? "ENTERPRISE" : "OPERATIONAL"}</span></div>
            <p>{project.line}</p>
          </a>)}
        </div>
      </section>
      <section className="td-career">
        <div className="td-section-head"><Marker>02 / CAREER STORY</Marker><h4>Brochures to two AI platforms.</h4></div>
        <ol>{thread.map((beat, i) => <li key={beat.title}><i>0{i + 1}</i><div><b>{beat.title}</b><span>{beat.line}</span></div></li>)}</ol>
      </section>
      <section className="td-capabilities">
        <div className="td-section-head"><Marker>03 / FOUR CAPABILITIES</Marker><h4>One person, end to end.</h4></div>
        <div className="td-cap-list">{whatIDo.map((capability, i) => <article key={capability.title}>
          <div className="td-cap-heading"><i>0{i + 1}</i><h5>{capability.title}</h5></div>
          <CapabilityArtifact index={i} /><p>{capability.body}</p>
        </article>)}</div>
      </section>
      <footer className="td-close"><Marker>THE THROUGH-LINE</Marker><h4>Marketing, and the site it runs on.</h4><span>GET IN TOUCH ↗</span></footer>
    </div>
  );
}

export default function ThemeDirections() {
  return <div className="theme-directions">
    <header className="td-intro">
      <Marker>PORTFOLIO REDESIGN · THREE DIRECTIONS</Marker>
      <h1>One story.<br />Three ways to tell it.</h1>
      <p>Same work, same facts, three distinct visual systems. Compare the desktop and mobile reading experience in each direction.</p>
      <a href="https://nagavardhanl-ux.github.io/Portfolio/" target="_blank" rel="noreferrer">Based on the live portfolio ↗</a>
    </header>
    <div className="td-direction-grid">{themes.map((theme) => <article className={`td-direction td-${theme.id}-direction`} key={theme.id}>
      <header className="td-direction-title"><span>{theme.number} / DIRECTION</span><h2>{theme.name}</h2><p>{theme.note}</p></header>
      <div className="td-preview-label">DESKTOP PREVIEW <span>↘</span></div>
      <div className="td-desktop-shell"><PortfolioPreview themeId={theme.id} mode="desktop" /></div>
      <div className="td-preview-label td-mobile-label">MOBILE PREVIEW <span>390 PX</span></div>
      <div className="td-phone-shell"><div className="td-phone-camera" /><PortfolioPreview themeId={theme.id} mode="mobile" /></div>
      <dl className="td-notes">
        <div><dt>Palette</dt><dd>{theme.palette}</dd></div>
        <div><dt>Typography</dt><dd>{theme.type}</dd></div>
        <div><dt>Layout</dt><dd>{theme.layout}</dd></div>
        <div><dt>Motion</dt><dd>{theme.motion}</dd></div>
      </dl>
      <p className="td-mobile-note">On narrow screens, project previews and artifacts stack in reading order; reduced motion leaves every section immediately visible.</p>
    </article>)}</div>
    <footer className="td-endnote"><span>ALL THREE DIRECTIONS</span><p>Fade-and-rise section reveals use the existing reduced-motion-safe observer. Each theme keeps the same content order from positioning to contact.</p></footer>
  </div>;
}
