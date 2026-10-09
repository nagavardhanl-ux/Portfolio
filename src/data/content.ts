import { sites } from "./sites";

export const hero = {
  eyebrow: "Nagavardhan Reddy Lella",
  headline: "B2B marketer. I build the websites too.",
  sub: "I run marketing for two AI platforms, and I build the sites, the content and the campaigns that go with them.",
};

export const capabilities = [
  "Product Marketing",
  "Demand Generation",
  "Content",
  "Websites & SEO",
  "AI-Led Execution",
];

const built = sites.filter((s) => s.role === "Built").length;
const managed = sites.filter((s) => s.role === "Managed").length;

/** The two figures that get the accent colour. Website counts come from src/data/sites.ts. */
export const keyFigures = [
  { value: "2", label: "AI platforms I run marketing for" },
  { value: String(built + managed), label: `Websites: ${built} built, ${managed} managed` },
];

export const thread = [
  {
    title: "Marketing before the title",
    line: "Started in offline marketing: brochures, posters, banners, a venue promo video and a local TV spot, with bookings coming through referrals.",
  },
  {
    title: "Learning the catalogue",
    line: "Ran product marketing for a trading company: a 30-product brochure book, pricing sheets, website content, and inbound leads handled over calls.",
  },
  {
    title: "Getting in",
    line: "First marketing job at an AI company: lead sourcing, content and the first AI tools in the workflow.",
  },
  {
    title: "Building a brand from nothing",
    line: "Rebuilt one company website and built a second as a brand new product and site: brand kit, product copy, sales decks and the website.",
  },
  {
    title: "Running it",
    line: "Now runs marketing for two AI platforms: campaigns into international markets, ICPs across products and markets, SEO and AI search visibility.",
  },
];

export const whatIDo = [
  {
    title: "Product Marketing",
    body: "ICPs and buyer personas, positioning and messaging, competitor research, and the sales decks, one-pagers and brochures that go with a launch.",
  },
  {
    title: "Demand Generation",
    body: "Cold email, LinkedIn outreach and multi-sequence campaigns for partners, products and investors, into the US, UK, Europe, the Middle East and Southeast Asia.",
  },
  {
    title: "Content",
    body: "I write the blogs, posts and series that bring people to the product, built to rank on Google and show up in AI search.",
  },
  {
    title: "Websites & SEO",
    body: "Builds and ships company websites using AI tools, including the content, the structure and the SEO, without waiting on a developer.",
  },
  {
    title: "AI-Led Execution",
    body: "Uses AI tools every day for research, content, video and campaign work, and tracks how sites show up in AI search as well as Google.",
  },
];

export const about =
  "I came into marketing from operations and vendor work, where getting things finished mattered more than talking about them. I joined an AI company as a marketing intern and was promoted to Marketing Executive. I now run lead generation, email, LinkedIn, content, SEO and social media for two platforms, AIQoD and VentureHub360, and I build and manage both websites myself using AI tools. I like work that goes from an idea to a live thing people can use, and most of my days are some mix of writing, building and figuring out what to ship next.";

/** The AI stack, as a workflow: each step and the tools used for it. */
export const aiWorkflow = [
  { step: "Research", tools: ["ChatGPT", "Claude"] },
  { step: "Build", tools: ["Lovable", "Antigravity", "Claude Code"] },
  { step: "Content & video", tools: ["Canva", "HeyGen", "Google Flow"] },
  { step: "Analyse", tools: ["Search Console", "GA4"] },
];
