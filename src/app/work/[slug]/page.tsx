import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { PlaceholderText } from "@/components/Placeholder";
import SiteEmbed from "@/components/SiteEmbed";
import { caseStudies, caseStudyBySlug } from "@/data/caseStudies";
import { siteById } from "@/data/sites";
import { pageMetadata } from "@/lib/meta";

// Static export: one page per case study, anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return pageMetadata(`/work/${slug}/`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudyBySlug(slug);
  if (!cs) notFound();
  const site = siteById(cs.siteId);

  const i = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <header className="page-head">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs label" role="list">
              <li>
                <Link href="/#work">Work</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--text)" }}>
                {cs.title}
              </li>
            </ol>
          </nav>
          <h1 className="h1">{cs.title}</h1>
          <p className="lead">{cs.summary}</p>
          <dl className="facts">
            {cs.facts.map((f) => (
              <div key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="section--tight" aria-label={`${cs.title} live site`}>
        <div className="container reveal">
          <SiteEmbed site={site} priority />
        </div>
      </section>

      <section className="section" aria-label="Case study" style={{ paddingTop: 0 }}>
        <div className="container cs-sections">
          {cs.sections.map((s, n) => (
            <section key={s.heading} className="cs-section reveal" aria-labelledby={`cs-${n}`}>
              <div>
                <p className="label num">{String(n + 1).padStart(2, "0")}</p>
                <h2 id={`cs-${n}`} className="h3" style={{ marginTop: 10 }}>
                  {s.heading}
                </h2>
              </div>
              {s.body.length ? (
                <div className="body">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : (
                <PlaceholderText what={`Case study body: “${s.heading}”. To be written.`} />
              )}
            </section>
          ))}
        </div>
      </section>

      <nav className="container" aria-label="More case studies" style={{ paddingBottom: "var(--section)" }}>
        <div className="pager">
          <Link href={`/work/${prev.slug}/`}>
            <span className="label" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <ArrowLeft size={14} /> Previous
            </span>
            <span className="h3">{prev.title}</span>
          </Link>
          <Link href={`/work/${next.slug}/`}>
            <span className="label" style={{ display: "inline-flex", gap: 8, alignItems: "center", justifySelf: "end" }}>
              Next <ArrowRight size={14} />
            </span>
            <span className="h3">{next.title}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
