/** One entry per prerendered page. Also drives per-route meta and the sitemap. */
export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  hidden?: boolean;
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
      "Company websites for AIQoD and VentureHub360, built and run end to end, plus concept builds. Open each one in place.",
  },
  {
    path: "/what-i-do/",
    title: "What I do · Nagavardhan Reddy Lella",
    description:
      "Product marketing, demand generation, content and LinkedIn, websites and SEO, and AI-led execution for two AI platforms: what each involves and the work behind it.",
  },
  {
    path: "/about/",
    title: "About · Nagavardhan Reddy Lella",
    description:
      "From five years in operations to running marketing for two AI platforms: the path, how I work and what I want to learn next.",
    hidden: true,
  },
  {
    path: "/contact/",
    title: "Contact · Nagavardhan Reddy Lella",
    description: "Get in touch with Nagavardhan Reddy Lella by email or LinkedIn, or send a message through the form.",
  },
];

export const notFoundMeta: RouteMeta = {
  path: "/404",
  title: "Page not found · Nagavardhan Reddy Lella",
  description: "This page does not exist. The work and the websites are one click away.",
};

const normalise = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export const metaFor = (pathname: string): RouteMeta =>
  routeMeta.find((r) => r.path === normalise(pathname)) ?? notFoundMeta;
