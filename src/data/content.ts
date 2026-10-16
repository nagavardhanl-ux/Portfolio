import { sites } from "./sites";

export const hero = {
  eyebrow: "Nagavardhan Reddy Lella",
  headline: "B2B marketing and the websites it runs on",
  sub: "I run marketing for two AI platforms, and I build the sites, the content and the campaigns that go with them.",
};

export const capabilities = [
  "Product Marketing",
  "Demand Generation",
  "Content and LinkedIn",
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
    body: "Cold email, LinkedIn outreach and multi-step campaigns for partners, products and investors, in international markets.",
  },
  {
    title: "Content and LinkedIn",
    body: "I write the blogs, posts and series that bring people to the product, built to rank on Google and show up in AI search.",
  },
  {
    title: "Websites & SEO",
    body: "Builds and ships company websites with AI tools, including the content, the structure and the SEO.",
  },
  {
    title: "AI-Led Execution",
    body: "Uses AI tools every day for research, content, video and campaign work, and tracks how sites show up in AI search as well as Google.",
  },
];

/** The AI stack, as a workflow: each step and the tools used for it. */
export const aiWorkflow = [
  { step: "Research", tools: ["ChatGPT", "Claude"] },
  { step: "Build", tools: ["Lovable", "Antigravity", "Claude Code"] },
  { step: "Content & video", tools: ["Canva", "HeyGen", "Google Flow"] },
  { step: "Analyse", tools: ["Search Console", "GA4"] },
];
