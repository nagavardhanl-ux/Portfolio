import type { CSSProperties } from "react";
import { results } from "@/data/results";

export default function ResultsStrip({ style }: { style?: CSSProperties } = {}) {
  return (
    <section className="section results-strip-section" aria-labelledby="results-title" id="results" style={style}>
      <div className="container">
        <header className="results-strip__header reveal">
          <h2 id="results-title" className="results-strip__title">
            Results so far
          </h2>
          <p className="results-strip__sub">
            AIQoD marketing, as of October 2026.
          </p>
        </header>

        <div className="results-strip__grid" role="list" aria-label="Results so far metrics">
          {results.map((item) => (
            <article key={item.caption} className="results-strip__card reveal" role="listitem">
              <span className="results-strip__val">{item.value}</span>
              <p className="results-strip__caption">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
