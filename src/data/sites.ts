/** Three live company sites first, then five concept builds. Order here is display order. */
export type Status = "Live company site" | "Concept build";

/** What I did: built it, or manage a site someone else built. */
export type Role = "Built" | "Managed";

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
  role: Role;
  /** Longer role label for the home work cards and the What I do page. */
  roleDetail?: string;
  /** Basename for public/shots (screenshot) and public/clips (scroll clip), made by the scripts. */
  shot: string;
}

export const sites: Site[] = [
  {
    id: "venturehub360",
    name: "VentureHub360",
    line: "Live company site for an AI pitch and deal-evaluation platform. Built the brand and the site from scratch.",
    url: "https://www.venturehub360.com/",
    embedUrl: "https://www.venturehub360.com/",
    status: "Live company site",
    role: "Built",
    roleDetail: "Built from scratch",
    shot: "venturehub360",
  },
  {
    id: "aiqod",
    name: "AIQoD",
    line: "Live company site for an enterprise agentic AI platform. Moved off WordPress and rebuilt, with new content and SEO.",
    url: "https://aiqod.com/",
    embedUrl: "https://aiqod.com/",
    status: "Live company site",
    role: "Built",
    roleDetail: "Rebuilt from its previous version",
    shot: "aiqod",
  },
  {
    id: "aiqod360",
    name: "AIQoD360",
    line: "Managed and updated in Wix: content, new pages and ongoing changes.",
    url: "https://www.aiqod360.com/",
    embedUrl: "https://www.aiqod360.com/",
    status: "Live company site",
    role: "Managed",
    shot: "aiqod360",
  },
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
    role: "Built",
    shot: "wayfarer",
  },
  {
    id: "f1-experience",
    name: "F1 Experience",
    line: "A cinematic Formula 1 showcase build. A visual and interaction exercise.",
    url: "https://nagavardhanl-ux.github.io/f1-experience/",
    embedUrl: "https://nagavardhanl-ux.github.io/f1-experience/",
    status: "Concept build",
    role: "Built",
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
    role: "Built",
    shot: "mustang",
  },
  {
    id: "axion",
    name: "Axion Growth",
    line: "A D2C performance marketing agency concept site.",
    url: "https://nagavardhanl-ux.github.io/Project-1/",
    embedUrl: "https://nagavardhanl-ux.github.io/Project-1/",
    status: "Concept build",
    role: "Built",
    shot: "axion",
  },
  {
    id: "ether",
    name: "ÉTHER",
    line: "A patisserie and café brand concept.",
    url: "https://nagavardhanl-ux.github.io/Project-2/#/",
    embedUrl: "https://nagavardhanl-ux.github.io/Project-2/#/",
    status: "Concept build",
    role: "Built",
    shot: "ether",
  },
];

export const siteById = (id: string) => sites.find((s) => s.id === id)!;
