import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import Shot from "@/components/Shot";
import { whatIDoPage, capabilitySections } from "@/data/whatIDo";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/what-i-do/");

export default function WhatIDoPage() {
  const [pm, dg, content, web, ai] = capabilitySections;

  return (
    <main className="wid-page">
      {/* ── Page Hero ────────────────────────────────────────── */}
      <header className="wid-hero">
        <div className="wid-container">
          <h1 className="wid-hero__title">{whatIDoPage.heading}</h1>
          <p className="wid-hero__intro">{whatIDoPage.intro}</p>

          <nav className="wid-quicknav" aria-label="Capabilities jump list">
            <a href="#product-marketing" className="wid-quicknav__link">
              <span className="wid-quicknav__num">01</span>
              <span>Product Marketing</span>
            </a>
            <span className="wid-quicknav__divider" aria-hidden="true">/</span>
            <a href="#demand-generation" className="wid-quicknav__link">
              <span className="wid-quicknav__num">02</span>
              <span>Demand Generation</span>
            </a>
            <span className="wid-quicknav__divider" aria-hidden="true">/</span>
            <a href="#content" className="wid-quicknav__link">
              <span className="wid-quicknav__num">03</span>
              <span>Content and LinkedIn</span>
            </a>
            <span className="wid-quicknav__divider" aria-hidden="true">/</span>
            <a href="#websites-seo" className="wid-quicknav__link">
              <span className="wid-quicknav__num">04</span>
              <span>Websites &amp; SEO</span>
            </a>
            <span className="wid-quicknav__divider" aria-hidden="true">/</span>
            <a href="#ai-execution" className="wid-quicknav__link">
              <span className="wid-quicknav__num">05</span>
              <span>AI-Led Execution</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="wid-container">
        {/* ── 01. Product Marketing ───────────────────────────── */}
        <section id="product-marketing" className="wid-section" aria-labelledby="pm-title">
          <div className="wid-sec__header">
            <div className="wid-sec__meta">
              <span className="wid-sec__num">01</span>
              <span className="wid-sec__tag">POSITIONING &amp; GO-TO-MARKET</span>
            </div>
            <h2 id="pm-title" className="wid-sec__title">{pm.title}</h2>
            <p className="wid-sec__lead">{pm.intro}</p>
          </div>

          <div className="wid-split wid-split--5-7">
            <div className="wid-col-text">
              <h3 className="wid-subheading">What I Do</h3>
              <ul className="wid-dash-list" role="list">
                {pm.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <h3 className="wid-subheading">Selected Deliverables</h3>
              <ul className="wid-work-index" role="list">
                {pm.work.map((w, i) => (
                  <li key={w} className="wid-work-item">
                    <span className="wid-work-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="wid-col-specimen">
              <div className="wid-specimen">
                <div className="wid-specimen__head">
                  <div className="wid-specimen__title">Smart AI Investor · B2B ICP Segment Matrix</div>
                  <span className="wid-specimen__pill">Segment Playbook</span>
                </div>

                <div className="wid-matrix">
                  <div className="wid-matrix__row">
                    <span className="wid-matrix__key">Target segments</span>
                    <span className="wid-matrix__val">VC fund partners, angel networks, accelerators, solo angels, family offices</span>
                  </div>
                  <div className="wid-matrix__row">
                    <span className="wid-matrix__key">Each segment covers</span>
                    <span className="wid-matrix__val">Decision makers, pain points, buying triggers, channels, messaging angle</span>
                  </div>
                  <div className="wid-matrix__row">
                    <span className="wid-matrix__key">Screening rule</span>
                    <span className="wid-matrix__val">Conflict-of-interest screening built in</span>
                  </div>
                </div>

                <div className="wid-competitor-strip">
                  <span className="wid-competitor-strip__label">Competitor Positioning &amp; Battlecards</span>
                  <div className="wid-competitor-strip__tags">
                    <span className="wid-tag">PitchBook</span>
                    <span className="wid-tag">Affinity</span>
                    <span className="wid-tag">Harmonic</span>
                    <span className="wid-tag">Hatcher</span>
                    <span className="wid-tag">Caena</span>
                    <span className="wid-tag">Comparison pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. Demand Generation ───────────────────────────── */}
        <section id="demand-generation" className="wid-section" aria-labelledby="dg-title">
          <div className="wid-sec__header">
            <div className="wid-sec__meta">
              <span className="wid-sec__num">02</span>
              <span className="wid-sec__tag">OUTBOUND</span>
            </div>
            <h2 id="dg-title" className="wid-sec__title">{dg.title}</h2>
            <p className="wid-sec__lead">{dg.intro}</p>
          </div>

          <div className="wid-split wid-split--7-5">
            <div className="wid-col-specimen">
              <div className="wid-specimen">
                <div className="wid-specimen__head">
                  <div className="wid-specimen__title">How a campaign runs</div>
                  <span className="wid-specimen__pill">Outbound</span>
                </div>

                <div className="wid-competitor-strip__tags" style={{ marginBottom: 20 }}>
                  <span className="wid-tag">Partners</span>
                  <span className="wid-tag">Investors</span>
                  <span className="wid-tag">Product buyers</span>
                </div>

                <div className="wid-pipeline-flow">
                  <div className="wid-pipeline-step">
                    <span className="wid-pipeline-icon">01</span>
                    <div>
                      <strong style={{ color: "var(--text, #F4F0E8)" }}>Targeting:</strong> Industry filters and a scoring formula to find the right decision makers.
                    </div>
                  </div>
                  <div className="wid-pipeline-step">
                    <span className="wid-pipeline-icon">02</span>
                    <div>
                      <strong style={{ color: "var(--text, #F4F0E8)" }}>List checks:</strong> Every list verified before it is sent.
                    </div>
                  </div>
                  <div className="wid-pipeline-step">
                    <span className="wid-pipeline-icon">03</span>
                    <div>
                      <strong style={{ color: "var(--text, #F4F0E8)" }}>Sending:</strong> Cold email sequences and LinkedIn outreach.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wid-col-text">
              <h3 className="wid-subheading">What I Do</h3>
              <ul className="wid-dash-list" role="list">
                {dg.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <h3 className="wid-subheading">Selected Deliverables</h3>
              <ul className="wid-work-index" role="list">
                {dg.work.map((w, i) => (
                  <li key={w} className="wid-work-item">
                    <span className="wid-work-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 03. Content and LinkedIn ─────────────────────────── */}
        <section id="content" className="wid-section" aria-labelledby="content-title">
          <div className="wid-sec__header">
            <div className="wid-sec__meta">
              <span className="wid-sec__num">03</span>
              <span className="wid-sec__tag">EDITORIAL, BLOGS &amp; LINKEDIN</span>
            </div>
            <h2 id="content-title" className="wid-sec__title">{content.title}</h2>
            <p className="wid-sec__lead">{content.intro}</p>
          </div>

          <div className="wid-split wid-split--6-6">
            <div className="wid-col-text">
              <h3 className="wid-subheading">What I Do</h3>
              <ul className="wid-dash-list" role="list">
                {content.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="wid-col-text">
              <h3 className="wid-subheading">Selected Deliverables</h3>
              <ul className="wid-work-index" role="list">
                {content.work.map((w, i) => (
                  <li key={w} className="wid-work-item">
                    <span className="wid-work-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="wid-links-row" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "24px" }}>
            <a
              href="https://aiqod.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="wid-tag"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>AIQoD blog</span>
              <span aria-hidden="true" style={{ color: "var(--accent-gold, #D5B77A)" }}>↗</span>
            </a>
            <a
              href="https://www.venturehub360.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="wid-tag"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>VentureHub360 blog</span>
              <span aria-hidden="true" style={{ color: "var(--accent-gold, #D5B77A)" }}>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/company/aiqod/"
              target="_blank"
              rel="noopener noreferrer"
              className="wid-tag"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>AIQoD on LinkedIn</span>
              <span aria-hidden="true" style={{ color: "var(--accent-gold, #D5B77A)" }}>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/company/venturehub360/"
              target="_blank"
              rel="noopener noreferrer"
              className="wid-tag"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>VentureHub360 on LinkedIn</span>
              <span aria-hidden="true" style={{ color: "var(--accent-gold, #D5B77A)" }}>↗</span>
            </a>
          </div>
        </section>

        {/* ── 04. Websites & SEO ───────────────────────────────── */}
        <section id="websites-seo" className="wid-section" aria-labelledby="web-title">
          <div className="wid-sec__header">
            <div className="wid-sec__meta">
              <span className="wid-sec__num">04</span>
              <span className="wid-sec__tag">SITES AND SEARCH</span>
            </div>
            <h2 id="web-title" className="wid-sec__title">{web.title}</h2>
            <p className="wid-sec__lead">{web.intro}</p>
          </div>

          <div className="wid-web-gallery">
            <div className="wid-web-frame">
              <div className="wid-web-frame__bar">
                <div className="wid-web-frame__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="wid-web-frame__url">venturehub360.com</span>
              </div>
              <div className="wid-web-frame__shot">
                <Shot name="venturehub360" alt="VentureHub360 live platform site" priority />
              </div>
              <div className="wid-web-frame__info">
                <div className="wid-web-frame__name">VentureHub360</div>
                <div className="wid-web-frame__caption">
                  Built from scratch: structure, product copy and pages, with a prerender setup so search engines and AI tools can read it.
                </div>
              </div>
            </div>

            <div className="wid-web-frame">
              <div className="wid-web-frame__bar">
                <div className="wid-web-frame__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="wid-web-frame__url">aiqod.com</span>
              </div>
              <div className="wid-web-frame__shot">
                <Shot name="aiqod" alt="AIQoD enterprise AI platform website" priority />
              </div>
              <div className="wid-web-frame__info">
                <div className="wid-web-frame__name">AIQoD</div>
                <div className="wid-web-frame__caption">
                  Rebuilt off WordPress with new structure, content and SEO.
                </div>
              </div>
            </div>
          </div>

          <div className="wid-tech-seo-bar">
            <span className="accent">Technical SEO &amp; Crawlability:</span>
            <span>llms.txt &amp; robots.txt configuration</span>
            <span>·</span>
            <span>React prerender crawler setup</span>
            <span>·</span>
            <span>AEO &amp; GEO visibility audits</span>
            <span>·</span>
            <span>Search Console &amp; GA4 tracking</span>
          </div>

          <div className="wid-split wid-split--6-6">
            <div className="wid-col-text">
              <h3 className="wid-subheading">What I Do</h3>
              <ul className="wid-dash-list" role="list">
                {web.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="wid-col-text">
              <h3 className="wid-subheading">Selected Deliverables</h3>
              <ul className="wid-work-index" role="list">
                {web.work.map((w, i) => (
                  <li key={w} className="wid-work-item">
                    <span className="wid-work-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "24px" }}>
                <Link href="/websites/" className="btn btn--primary">
                  See all websites <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. AI-Led Execution ────────────────────────────── */}
        <section id="ai-execution" className="wid-section" aria-labelledby="ai-title">
          <div className="wid-sec__header">
            <div className="wid-sec__meta">
              <span className="wid-sec__num">05</span>
              <span className="wid-sec__tag">TOOLS AND WORKFLOW</span>
            </div>
            <h2 id="ai-title" className="wid-sec__title">{ai.title}</h2>
            <p className="wid-sec__lead">{ai.intro}</p>
          </div>

          <div className="wid-ai-domains">
            <div className="wid-ai-card">
              <span className="wid-ai-card__num">01 / RESEARCH</span>
              <h4 className="wid-ai-card__title">Research</h4>
              <div className="wid-ai-card__tools">
                <span className="wid-tool-badge">ChatGPT</span>
                <span className="wid-tool-badge">Claude</span>
                <span className="wid-tool-badge">Perplexity</span>
              </div>
              <p className="wid-ai-card__desc">
                ICP research, competitor pricing, industry research and the daily leadership brief.
              </p>
            </div>

            <div className="wid-ai-card">
              <span className="wid-ai-card__num">02 / CONTENT</span>
              <h4 className="wid-ai-card__title">Content</h4>
              <div className="wid-ai-card__tools">
                <span className="wid-tool-badge">Canva</span>
                <span className="wid-tool-badge">ChatGPT</span>
              </div>
              <p className="wid-ai-card__desc">
                Blog drafts, social copy and carousels.
              </p>
            </div>

            <div className="wid-ai-card">
              <span className="wid-ai-card__num">03 / VIDEO</span>
              <h4 className="wid-ai-card__title">Video</h4>
              <div className="wid-ai-card__tools">
                <span className="wid-tool-badge">HeyGen</span>
                <span className="wid-tool-badge">Google Flow</span>
              </div>
              <p className="wid-ai-card__desc">
                AI avatar videos and short walkthroughs cut from product demos.
              </p>
            </div>

            <div className="wid-ai-card">
              <span className="wid-ai-card__num">04 / ANALYSE</span>
              <h4 className="wid-ai-card__title">Analytics</h4>
              <div className="wid-ai-card__tools">
                <span className="wid-tool-badge">Search Console</span>
                <span className="wid-tool-badge">GA4</span>
              </div>
              <p className="wid-ai-card__desc">
                Search traffic, AI referral traffic in GA4, and how often ChatGPT, Gemini and Claude pick up the sites.
              </p>
            </div>
          </div>

          <div className="wid-col-text">
            <h3 className="wid-subheading">Selected Deliverables</h3>
            <ul className="wid-work-index" role="list">
              {ai.work.map((w, i) => (
                <li key={w} className="wid-work-item">
                  <span className="wid-work-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
