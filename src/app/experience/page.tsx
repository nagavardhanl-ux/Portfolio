import { experience, experienceIntro } from "@/data/experience";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/experience/");

export default function ExperiencePage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Experience</b>
          </p>
          <h1 className="h1">Experience</h1>
          <p className="lead">{experienceIntro}</p>
        </div>
      </header>

      <section className="section" aria-label="Career timeline">
        <div className="container">
          <ol className="timeline" role="list">
            {experience.map((c) => (
              <li key={c.company} className={`timeline__company reveal${c.featured ? " timeline__company--featured" : ""}`}>
                <span className="timeline__node" aria-hidden="true" />
                <div className="timeline__head">
                  <h2 className={c.featured ? "h2" : "h3"}>{c.company}</h2>
                  {c.note && <p className="label">{c.note}</p>}
                  {c.roles.length > 1 && (
                    <p className="timeline__progression label">
                      {[...c.roles].reverse().map((r) => r.title.replace("Marketing ", "").replace("Executive, ", "")).join(" → ")}
                    </p>
                  )}
                </div>
                <ol className="timeline__roles" role="list">
                  {c.roles.map((r) => (
                    <li key={r.title} className="timeline__role">
                      <div className="timeline__role-head">
                        <h3 className="timeline__title">{r.title}</h3>
                        <p className="timeline__dates num">{r.dates}</p>
                      </div>
                      <ul className="dash-list" role="list">
                        {r.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
