/** Three live company sites, five concept builds. Nothing else. */
export type Status = "Live company site" | "Concept build";

export interface Site {
  id: string;
  name: string;
  line: string;
  /** Home page of the live site. */
  url: string;
  /** Page the embed opens on (a specific tool or section where the brief asks for one). */
  embedUrl: string;
  /** Short label for where the embed points, e.g. "Cost calculator". */
  embedLabel?: string;
  /** Extra deep links shown next to the embed. */
  extraLinks?: { label: string; href: string }[];
  status: Status;
  /** Basename for public/shots (screenshot) and public/clips (scroll clip), made by the scripts. */
  shot: string;
}

export const sites: Site[] = [
  {
    id: "wayfarer",
    name: "Wayfarer",
    line: "A full study-abroad consultancy site: 11 country pages, four branches, and working cost, loan and eligibility tools. Open the cost calculator.",
    url: "https://nagavardhanl-ux.github.io/wayfarer-study-abroad/",
    embedUrl: "https://nagavardhanl-ux.github.io/wayfarer-study-abroad/tools/cost-calculator/",
    embedLabel: "Cost calculator",
    extraLinks: [
      {
        label: "Loan EMI calculator",
        href: "https://nagavardhanl-ux.github.io/wayfarer-study-abroad/tools/loan-emi-calculator/",
      },
    ],
    status: "Concept build",
    shot: "wayfarer",
  },
  {
    id: "venturehub360",
    name: "VentureHub360",
    line: "Live company site for an AI pitch and deal-evaluation platform. Built the brand and the site from scratch.",
    url: "https://www.venturehub360.com/",
    embedUrl: "https://www.venturehub360.com/",
    status: "Live company site",
    shot: "venturehub360",
  },
  {
    id: "aiqod",
    name: "AIQoD",
    line: "Live site for an enterprise agentic AI platform. Rebuilt from its previous version, with content and SEO.",
    url: "https://aiqod.com/",
    embedUrl: "https://aiqod.com/",
    status: "Live company site",
    shot: "aiqod",
  },
  {
    id: "aiqod360",
    name: "AIQoD360",
    line: "Live company site. Managed and updated in Wix: content, new pages and ongoing changes.",
    url: "https://www.aiqod360.com/",
    embedUrl: "https://www.aiqod360.com/",
    status: "Live company site",
    shot: "aiqod360",
  },
  {
    id: "f1-experience",
    name: "F1 Experience",
    line: "A cinematic Formula 1 showcase build. A visual and interaction exercise.",
    url: "https://nagavardhanl-ux.github.io/f1-experience/",
    embedUrl: "https://nagavardhanl-ux.github.io/f1-experience/",
    status: "Concept build",
    shot: "f1-experience",
  },
  {
    id: "mustang",
    name: "Mustang Archive",
    line: "A digital archive of the Ford Mustang's history. Scroll to the timeline.",
    url: "https://nagavardhanl-ux.github.io/Project-3-Mustang/#/",
    embedUrl: "https://nagavardhanl-ux.github.io/Project-3-Mustang/#/timeline",
    embedLabel: "Timeline",
    status: "Concept build",
    shot: "mustang",
  },
  {
    id: "axion",
    name: "Axion Growth",
    line: "A D2C performance marketing agency concept site.",
    url: "https://nagavardhanl-ux.github.io/Project-1/",
    embedUrl: "https://nagavardhanl-ux.github.io/Project-1/",
    status: "Concept build",
    shot: "axion",
  },
  {
    id: "ether",
    name: "ÉTHER",
    line: "A patisserie and café brand concept.",
    url: "https://nagavardhanl-ux.github.io/Project-2/#/",
    embedUrl: "https://nagavardhanl-ux.github.io/Project-2/#/",
    status: "Concept build",
    shot: "ether",
  },
];

export const siteById = (id: string) => sites.find((s) => s.id === id)!;
