/** One entry per prerendered page. Also drives per-route meta and the sitemap. */
export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: "Nagavardhan Reddy Lella · B2B marketer who builds the websites too",
    description:
      "B2B marketer running marketing for two AI platforms, AIQoD and VentureHub360, and building the sites, content and campaigns that go with them.",
  },
  {
    path: "/websites/",
    title: "Websites · Nagavardhan Reddy Lella",
    description:
      "Seven websites, live: Wayfarer, VentureHub360, AIQoD, F1 Experience, Mustang Archive, Axion Growth and ÉTHER. Open each one in place.",
  },
  {
    path: "/work/wayfarer/",
    title: "Wayfarer case study · Nagavardhan Reddy Lella",
    description:
      "A full study-abroad consultancy site with 11 country pages, four branches, and working cost, loan and eligibility tools.",
  },
  {
    path: "/work/venturehub360/",
    title: "VentureHub360 case study · Nagavardhan Reddy Lella",
    description:
      "Brand and website for an AI pitch and deal-evaluation platform, built from scratch.",
  },
  {
    path: "/work/aiqod/",
    title: "AIQoD case study · Nagavardhan Reddy Lella",
    description:
      "Rebuild of the website for an enterprise agentic AI platform, with content and SEO.",
  },
  {
    path: "/marketing/",
    title: "Marketing · Nagavardhan Reddy Lella",
    description:
      "Campaigns, ICPs and positioning, collateral and video for two AI platforms, run into the US, UK, Europe, the Middle East and Southeast Asia.",
  },
  {
    path: "/icp-builder/",
    title: "ICP builder · Nagavardhan Reddy Lella",
    description:
      "Pick an industry, company size and region. Get who to sell to, three pain points, three job titles to target and an opening line.",
  },
  {
    path: "/about/",
    title: "About · Nagavardhan Reddy Lella",
    description:
      "From operations and vendor work to running marketing for two AI platforms. The AI workflow, the CV and how to get in touch.",
  },
];

export const notFoundMeta: RouteMeta = {
  path: "/404",
  title: "Page not found · Nagavardhan Reddy Lella",
  description: "This page does not exist. The work, the websites and the ICP builder are one click away.",
};

const normalise = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export const metaFor = (pathname: string): RouteMeta =>
  routeMeta.find((r) => r.path === normalise(pathname)) ?? notFoundMeta;
