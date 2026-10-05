/**
 * Case studies. The bodies are deliberately empty: every section renders as a
 * marked placeholder until `body` is filled in. Do not invent content here.
 */
export interface CaseSection {
  heading: string;
  /** Paragraphs. Leave empty to show the placeholder block. */
  body: string[];
}

export interface CaseStudy {
  slug: string;
  siteId: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  sections: CaseSection[];
}

const emptySections = (): CaseSection[] => [
  { heading: "Context", body: [] },
  { heading: "What I did", body: [] },
  { heading: "How it was built", body: [] },
  { heading: "What shipped", body: [] },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "wayfarer",
    siteId: "wayfarer",
    title: "Wayfarer",
    summary:
      "A full study-abroad consultancy site: 11 country pages, four branches, and working cost, loan and eligibility tools.",
    facts: [
      { label: "Scope", value: "Full site build" },
      { label: "Pages", value: "11 country pages, 4 branches" },
      { label: "Tools", value: "Cost, loan EMI, eligibility" },
    ],
    sections: emptySections(),
  },
  {
    slug: "venturehub360",
    siteId: "venturehub360",
    title: "VentureHub360",
    summary:
      "Live company site for an AI pitch and deal-evaluation platform. Built the brand and the site from scratch.",
    facts: [
      { label: "Scope", value: "Brand and website" },
      { label: "Starting point", value: "From scratch" },
      { label: "Status", value: "Live" },
    ],
    sections: emptySections(),
  },
  {
    slug: "aiqod",
    siteId: "aiqod",
    title: "AIQoD",
    summary:
      "Live site for an enterprise agentic AI platform. Rebuilt from its previous version, with content and SEO.",
    facts: [
      { label: "Scope", value: "Website rebuild" },
      { label: "Includes", value: "Content and SEO" },
      { label: "Status", value: "Live" },
    ],
    sections: emptySections(),
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
