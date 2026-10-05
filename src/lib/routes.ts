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
      "Eight websites, shipped and managed: three company sites (AIQoD, VentureHub360, AIQoD360) and five concept builds. Open each one in place.",
  },
  {
    path: "/what-i-do/",
    title: "What I do · Nagavardhan Reddy Lella",
    description:
      "Product marketing, demand generation, websites and SEO, and AI-led execution for two AI platforms: what each involves and the work behind it.",
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
