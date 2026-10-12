"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";
import { whatIDo } from "@/data/content";
import { capabilityAnchors } from "@/data/whatIDo";

const pad = (n: number) => String(n).padStart(2, "0");



export default function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Collect visible entries with their intersection ratios
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Sort by highest intersection ratio to pick the most prominent capability in view
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topVisible = visible[0];
          const idx = Number(topVisible.target.getAttribute("data-index"));
          if (!isNaN(idx)) {
            setActiveIndex(idx);
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.15, 0.4, 0.7],
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCapability = (idx: number) => {
    setActiveIndex(idx);
    const target = itemRefs.current[idx];
    if (target) {
      const navOffset = 90;
      const rect = target.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="cap-editorial">
      {/* =========================================================================
          LEFT COLUMN — STICKY INTRODUCTION & PROGRESS INDICATOR
          ========================================================================= */}
      <aside className="cap-sticky" aria-label="Capabilities overview and navigation">
        <div className="cap-sticky__inner">
          <h2 id="do-title" className="cap-sticky__heading">
            One person, end to end
          </h2>
          <p className="cap-sticky__intro">
            Product marketing, demand generation, content, websites and AI-led execution, from the brief to the thing that ships.
          </p>

          <nav className="cap-sticky__nav" aria-label="Capability sequence indicator">
            <ol className="cap-sticky__list" role="list">
              {whatIDo.map((cap, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <li key={cap.title} className="cap-sticky__item-wrapper">
                    <button
                      type="button"
                      className={`cap-sticky__item ${isActive ? "cap-sticky__item--active" : ""}`}
                      onClick={() => scrollToCapability(idx)}
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`Jump to capability ${pad(idx + 1)}: ${cap.title}`}
                    >
                      <span className="cap-sticky__marker" aria-hidden="true" />
                      <span className="cap-sticky__num">{pad(idx + 1)}.</span>
                      <span className="cap-sticky__label">{cap.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN — FIVE EDITORIAL CAPABILITY SEQUENCES
          ========================================================================= */}
      <div className="cap-sequence" role="feed" aria-label="Capability details">
        {/* =======================================================================
            CAPABILITY 01: PRODUCT MARKETING
            ======================================================================= */}
        <article
          id="cap-seq-0"
          data-index={0}
          ref={(el) => { itemRefs.current[0] = el; }}
          className="cap-seq-item"
          aria-labelledby="cap-title-0"
        >


          <h3 id="cap-title-0" className="cap-seq-item__title">
            {whatIDo[0].title}
          </h3>

          {/* Minimal Diagram 01: Vertical Flow */}
          <div className="cap-diag" aria-label="Product marketing workflow diagram">
            <div className="cap-diag__header">
              <span className="cap-diag__tag">POSITIONING ARCHITECTURE</span>
              <span className="cap-diag__status">
                <span className="cap-status-dot" /> STRATEGIC FOUNDATION
              </span>
            </div>

            <div className="cap-diag-vflow">
              <div className="cap-diag-vstage">
                <span className="cap-diag-vstage__idx">01</span>
                <div className="cap-diag-vstage__body">
                  <strong className="cap-diag-vstage__name">ICP &amp; Buyer Personas</strong>
                  <span className="cap-diag-vstage__sub">Decision makers · Day-to-day pain points · Buying triggers</span>
                </div>
              </div>

              <div className="cap-diag-vconnector" aria-hidden="true">
                <div className="cap-diag-vline" />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className="cap-diag-vstage">
                <span className="cap-diag-vstage__idx">02</span>
                <div className="cap-diag-vstage__body">
                  <strong className="cap-diag-vstage__name">Positioning &amp; Messaging</strong>
                  <span className="cap-diag-vstage__sub">Core narrative · Value props · Competitor differentiation</span>
                </div>
              </div>

              <div className="cap-diag-vconnector" aria-hidden="true">
                <div className="cap-diag-vline" />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className="cap-diag-vstage">
                <span className="cap-diag-vstage__idx">03</span>
                <div className="cap-diag-vstage__body">
                  <strong className="cap-diag-vstage__name">Sales Material &amp; Launch</strong>
                  <span className="cap-diag-vstage__sub">Sales decks · One-pagers · Battlecards · Launch brochures</span>
                </div>
              </div>
            </div>

            <footer className="cap-diag__footer">
              <span className="cap-diag__foot-label">DELIVERABLES:</span>
              <span className="cap-diag__foot-val">Competitor Battlecards · Sales Decks · 1-Pagers · Brochures</span>
            </footer>
          </div>

          <p className="cap-seq-item__desc">{whatIDo[0].body}</p>

          <div className="cap-seq-item__actions">
            <Link
              href={`/what-i-do/#${capabilityAnchors[0]}`}
              className="cap-cta-btn"
              aria-label={`More on ${whatIDo[0].title}`}
            >
              <span>More on {whatIDo[0].title}</span>
              <ArrowRight className="cap-cta-btn__arrow" />
            </Link>
          </div>
        </article>

        {/* =======================================================================
            CAPABILITY 02: DEMAND GENERATION
            ======================================================================= */}
        <article
          id="cap-seq-1"
          data-index={1}
          ref={(el) => { itemRefs.current[1] = el; }}
          className="cap-seq-item"
          aria-labelledby="cap-title-1"
        >


          <h3 id="cap-title-1" className="cap-seq-item__title">
            {whatIDo[1].title}
          </h3>

          {/* Minimal Diagram 02: Campaign Flow */}
          <div className="cap-diag" aria-label="Demand generation campaign flow diagram">
            <div className="cap-diag__header">
              <span className="cap-diag__tag">MULTI-SEQUENCE OUTBOUND CADENCE</span>
              <span className="cap-diag__status">EMAIL + LINKEDIN</span>
            </div>

            <div className="cap-diag-hflow">
              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">01</span>
                <strong className="cap-diag-hstage__name">Audience Research</strong>
                <span className="cap-diag-hstage__sub">List sourcing &amp; data verification</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">02</span>
                <strong className="cap-diag-hstage__name">Outreach</strong>
                <span className="cap-diag-hstage__sub">Cold email &amp; LinkedIn sequences</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">03</span>
                <strong className="cap-diag-hstage__name">Follow-up</strong>
                <span className="cap-diag-hstage__sub">Personalized hooks &amp; copy iteration</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--focus">
                <span className="cap-diag-hstage__idx">04</span>
                <strong className="cap-diag-hstage__name">Qualified Conversations</strong>
                <span className="cap-diag-hstage__sub">High-intent buyer &amp; partner replies</span>
              </div>
            </div>

            <footer className="cap-diag__footer">
              <span className="cap-diag__foot-label">INTERNATIONAL MARKETS:</span>
              <span className="cap-diag__foot-val">US · UK · Europe · Middle East · Southeast Asia</span>
            </footer>
          </div>

          <p className="cap-seq-item__desc">{whatIDo[1].body}</p>

          <div className="cap-seq-item__actions">
            <Link
              href={`/what-i-do/#${capabilityAnchors[1]}`}
              className="cap-cta-btn"
              aria-label={`More on ${whatIDo[1].title}`}
            >
              <span>More on {whatIDo[1].title}</span>
              <ArrowRight className="cap-cta-btn__arrow" />
            </Link>
          </div>
        </article>

        {/* =======================================================================
            CAPABILITY 03: CONTENT
            ======================================================================= */}
        <article
          id="cap-seq-2"
          data-index={2}
          ref={(el) => { itemRefs.current[2] = el; }}
          className="cap-seq-item"
          aria-labelledby="cap-title-2"
        >


          <h3 id="cap-title-2" className="cap-seq-item__title">
            {whatIDo[2].title}
          </h3>

          {/* Minimal Diagram 03: Content System Flow */}
          <div className="cap-diag" aria-label="Content system workflow diagram">
            <div className="cap-diag__header">
              <span className="cap-diag__tag">CONTENT DISCOVERY ENGINE</span>
              <span className="cap-diag__status">RANK + CITE</span>
            </div>

            <div className="cap-diag-hflow cap-diag-hflow--3col">
              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">01</span>
                <strong className="cap-diag-hstage__name">Research</strong>
                <span className="cap-diag-hstage__sub">Core pillars, topic clusters &amp; AI answer gaps</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">02</span>
                <strong className="cap-diag-hstage__name">Content</strong>
                <span className="cap-diag-hstage__sub">Deep-dive blog clusters &amp; LinkedIn thought leadership</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--focus">
                <span className="cap-diag-hstage__idx">03</span>
                <strong className="cap-diag-hstage__name">Search Visibility</strong>
                <span className="cap-diag-hstage__sub">Google Search ranking · Perplexity &amp; Claude AI answers</span>
              </div>
            </div>

            <footer className="cap-diag__footer">
              <span className="cap-diag__foot-label">DISCOVERY TARGETS:</span>
              <span className="cap-diag__foot-val">Google Search · Perplexity · ChatGPT · Claude</span>
            </footer>
          </div>

          <p className="cap-seq-item__desc">{whatIDo[2].body}</p>

          <div className="cap-seq-item__actions">
            <Link
              href={`/what-i-do/#${capabilityAnchors[2]}`}
              className="cap-cta-btn"
              aria-label={`More on ${whatIDo[2].title}`}
            >
              <span>More on {whatIDo[2].title}</span>
              <ArrowRight className="cap-cta-btn__arrow" />
            </Link>
          </div>
        </article>

        {/* =======================================================================
            CAPABILITY 04: WEBSITES & SEO
            ======================================================================= */}
        <article
          id="cap-seq-3"
          data-index={3}
          ref={(el) => { itemRefs.current[3] = el; }}
          className="cap-seq-item"
          aria-labelledby="cap-title-3"
        >


          <h3 id="cap-title-3" className="cap-seq-item__title">
            {whatIDo[3].title}
          </h3>

          {/* Minimal Diagram 04: Website-Building Flow */}
          <div className="cap-diag" aria-label="Website building and SEO workflow diagram">
            <div className="cap-diag__header">
              <span className="cap-diag__tag">WEBSITE &amp; SEO PIPELINE</span>
              <span className="cap-diag__status">END-TO-END SHIP</span>
            </div>

            <div className="cap-diag-hflow">
              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">01</span>
                <strong className="cap-diag-hstage__name">Structure</strong>
                <span className="cap-diag-hstage__sub">Site architecture, pages &amp; navigation</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">02</span>
                <strong className="cap-diag-hstage__name">Content &amp; Design</strong>
                <span className="cap-diag-hstage__sub">Copywriting, UI layouts &amp; interactions</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage">
                <span className="cap-diag-hstage__idx">03</span>
                <strong className="cap-diag-hstage__name">SEO</strong>
                <span className="cap-diag-hstage__sub">Semantic schema, metadata &amp; indexing</span>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--focus">
                <span className="cap-diag-hstage__idx">04</span>
                <strong className="cap-diag-hstage__name">Published Website</strong>
                <span className="cap-diag-hstage__sub">Live deployment, Search Console &amp; GA4</span>
              </div>
            </div>

            <footer className="cap-diag__footer">
              <span className="cap-diag__foot-label">AUTONOMOUS DEPLOYMENT:</span>
              <span className="cap-diag__foot-val">Built &amp; shipped directly using AI tools without waiting on a developer</span>
            </footer>
          </div>

          <p className="cap-seq-item__desc">{whatIDo[3].body}</p>

          <div className="cap-seq-item__actions">
            <Link
              href={`/what-i-do/#${capabilityAnchors[3]}`}
              className="cap-cta-btn"
              aria-label={`More on ${whatIDo[3].title}`}
            >
              <span>More on {whatIDo[3].title}</span>
              <ArrowRight className="cap-cta-btn__arrow" />
            </Link>
          </div>
        </article>

        {/* =======================================================================
            CAPABILITY 05: AI-LED EXECUTION (CONCLUDING CAPSTONE SEQUENCE)
            ======================================================================= */}
        <article
          id="cap-seq-4"
          data-index={4}
          ref={(el) => { itemRefs.current[4] = el; }}
          className="cap-seq-item cap-seq-item--concluding"
          aria-labelledby="cap-title-4"
        >


          <div className="cap-concluding-title-wrap">
            <h3 id="cap-title-4" className="cap-seq-item__title">
              {whatIDo[4].title}
            </h3>
            <span className="cap-concluding-badge">CONNECTED AI STACK</span>
          </div>

          {/* Minimal Diagram 05: Concluding 4-Stage Workflow */}
          <div className="cap-diag cap-diag--concluding" aria-label="AI-led execution workflow pipeline">
            <div className="cap-diag__header">
              <span className="cap-diag__tag">FULL-LIFECYCLE AI EXECUTION PIPELINE</span>
              <span className="cap-diag__telemetry">ACTIVE DAILY WORKFLOW</span>
            </div>

            <div className="cap-diag-hflow cap-diag-hflow--hub">
              <div className="cap-diag-hstage cap-diag-hstage--hub">
                <div className="cap-diag-hstage__top">
                  <span className="cap-diag-hstage__idx">01</span>
                  <strong className="cap-diag-hstage__name">Research</strong>
                </div>
                <span className="cap-diag-hstage__sub">Synthesis &amp; market intelligence</span>
                <div className="cap-diag-pills">
                  <span className="cap-diag-pill">ChatGPT</span>
                  <span className="cap-diag-pill">Claude</span>
                  <span className="cap-diag-pill">Perplexity</span>
                </div>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--hub">
                <div className="cap-diag-hstage__top">
                  <span className="cap-diag-hstage__idx">02</span>
                  <strong className="cap-diag-hstage__name">Creation</strong>
                </div>
                <span className="cap-diag-hstage__sub">Content, video &amp; graphics</span>
                <div className="cap-diag-pills">
                  <span className="cap-diag-pill">Canva</span>
                  <span className="cap-diag-pill">HeyGen</span>
                  <span className="cap-diag-pill">Google Flow</span>
                </div>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--hub">
                <div className="cap-diag-hstage__top">
                  <span className="cap-diag-hstage__idx">03</span>
                  <strong className="cap-diag-hstage__name">Execution</strong>
                </div>
                <span className="cap-diag-hstage__sub">Websites, code &amp; prototypes</span>
                <div className="cap-diag-pills">
                  <span className="cap-diag-pill">Lovable</span>
                  <span className="cap-diag-pill">Antigravity</span>
                  <span className="cap-diag-pill">Claude Code</span>
                </div>
              </div>

              <div className="cap-diag-hconnector" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#82714F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="cap-diag-hstage cap-diag-hstage--hub cap-diag-hstage--focus">
                <div className="cap-diag-hstage__top">
                  <span className="cap-diag-hstage__idx">04</span>
                  <strong className="cap-diag-hstage__name">Measurement</strong>
                </div>
                <span className="cap-diag-hstage__sub">Signals, traffic &amp; citations</span>
                <div className="cap-diag-pills">
                  <span className="cap-diag-pill">Search Console</span>
                  <span className="cap-diag-pill">GA4</span>
                </div>
              </div>
            </div>

            <footer className="cap-diag__footer cap-diag__footer--hub">
              <div className="cap-diag__foot-col">
                <span className="cap-diag__foot-label">CYCLE TIME:</span>
                <span>Brief to live deployment in days</span>
              </div>
              <div className="cap-diag__foot-col">
                <span className="cap-diag__foot-label">HUMAN IN THE LOOP:</span>
                <span>Strategy, copy &amp; code directed by one person</span>
              </div>
              <div className="cap-diag__foot-col">
                <span className="cap-diag__foot-label">DISCOVERY:</span>
                <span>Monitored in Google GA4 &amp; AI answer engines</span>
              </div>
            </footer>
          </div>

          <p className="cap-seq-item__desc">{whatIDo[4].body}</p>

          <div className="cap-seq-item__actions">
            <Link
              href={`/what-i-do/#${capabilityAnchors[4]}`}
              className="cap-cta-btn"
              aria-label={`More on ${whatIDo[4].title}`}
            >
              <span>More on {whatIDo[4].title}</span>
              <ArrowRight className="cap-cta-btn__arrow" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
