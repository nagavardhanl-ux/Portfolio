/**
 * "What I do" page content (/what-i-do). One page, four sections.
 * Each section's `id` is its anchor; the home page capability strip and
 * What I do blocks link to these.
 */
export interface Capability {
  id: string;
  index: string;
  title: string;
  intro: string;
  points: string[];
  work: string[];
}

export const whatIDoPage = {
  heading: "What I do",
  intro:
    "One person, end to end. I run product marketing, demand generation, content and LinkedIn, websites and AI-led execution for two AI platforms, and I do the hands-on work in each.",
}

export const capabilitySections: Capability[] = [
  {
    id: "product-marketing",
    index: "01",
    title: "Product Marketing",
    intro:
      "I work out who a product is for, what to say about it, and the material that sells it.",
    points: [
      "Build ICPs and buyer personas for AI products, covering the core problem, the day-to-day pain points, decision makers and buying triggers.",
      "Study competitors across pricing, features and positioning, and turn it into comparison content.",
      "Write positioning and messaging, then the product pages, one-pagers and sales decks that carry it.",
      "Launch products and brands, from the name and positioning to the material that takes them to market.",
    ],
    work: [
      "Built ICPs for products across AIQoD, VentureHub360 and new launches, from M&A and contract digitization to hiring, pharma pricing and fleet compliance.",
      "Wrote a B2B ICP playbook for Smart AI Investor, with decision makers, pain points, triggers and messaging per segment.",
      "Named and wrote the positioning and product copy for VentureHub360's two products.",
      "Built competitor comparison content against Affinity, PitchBook, Harmonic and others.",
      "Rebuilt audience-specific one-pagers and a product guide used in sales.",
    ],
  },
  {
    id: "demand-generation",
    index: "02",
    title: "Demand Generation",
    intro:
      "I run outbound that reaches the right people. Lists, copy, sending and tracking, across email and LinkedIn, into international markets.",
    points: [
      "Source and clean the target lists myself before anything goes out.",
      "Run multi-step cold email campaigns across investor, partner, ATS and M&A lists, with personalised, per-company mailers, and use open-rate and list-quality data to decide what to send next.",
      "Write the cold emails and LinkedIn messages, and run the sequences.",
      "Read what comes back and rewrite what underperforms.",
    ],
    work: [
      "Ran cold email campaigns for channel partners, investors and AIQoD products like M&A, hiring and fleet compliance, in international markets.",
      "Ran investor outreach for Smart AI Investor and for the company's fundraise.",
      "Wrote a lead generation playbook with targeting rules and a scoring formula for each industry.",
    ],
  },
  {
    id: "content",
    index: "03",
    title: "Content and LinkedIn",
    intro:
      "I write the content that brings people to the product and run the LinkedIn that puts it in front of them.",
    points: [
      "Plan and write blog clusters built to rank on Google and show up in AI answers.",
      "Track how AIQoD shows up across ChatGPT, Gemini, Claude and Perplexity, and shape content to improve how the sites get picked up.",
      "Run AIQoD's social: LinkedIn company page, plus Instagram, Facebook and X.",
      "Write LinkedIn drafts for the founder and the sales head.",
      "Cut podcast appearances into short clips for social.",
    ],
    work: [
      "Built the Agentic AI content cluster for AIQoD and the blog for VentureHub360.",
      "Built VentureHub360's LinkedIn from zero: company page, carousels and a posting system across founder and investor groups.",
      "Built a daily AI intelligence brief that goes to the leadership team each morning.",
      "Run AIQoD's weekly posting: company-page posts and carousels, plus LinkedIn drafts for the founder and sales head.",
    ],
  },
  {
    id: "websites-seo",
    index: "04",
    title: "Websites & SEO",
    intro:
      "I build and ship company websites using AI tools, including the content, the structure and the SEO.",
    points: [
      "Build company websites end to end, from structure and pages to a live site.",
      "Write the website content that goes on them.",
      "Set up on-page and technical SEO, and track it in Search Console and GA4.",
      "Check how the sites show up in AI search, not just Google.",
    ],
    work: [
      "Built VentureHub360 from scratch and rebuilt AIQoD off WordPress.",
      "Fixed crawler visibility on a React site with a prerender setup, and rewrote llms.txt and robots.txt.",
      "Ran AEO and GEO audits to find gaps in how the sites are read.",
      "Built concept sites to push myself, including a study-abroad site with working cost and loan calculators.",
    ],
  },
  {
    id: "ai-execution",
    index: "05",
    title: "AI-Led Execution",
    intro:
      "AI is how I get the range I have. I use it every day across research, content, video and analysis.",
    points: [
      "Research: ChatGPT, Claude, Perplexity",
      "Content and images: Canva, ChatGPT",
      "Video: HeyGen, Google Flow",
      "Analyse: Search Console, GA4",
    ],
    work: [
      "Produced AI avatar videos with HeyGen and product videos cut from demo recordings.",
      "Set up AI search visibility tracking across ChatGPT, Gemini and Claude, plus the AI traffic channel in GA4.",
      "Built the daily AI intelligence brief that runs automatically for the leadership team.",
    ],
  },
];

/** Anchor for each home-page capability label, in the same order as content.ts `capabilities`. */
/** Section 04's tools, by stage. Website-building tools live under Websites, not here. */
export const aiExecutionTools = [
  { step: "Research", tools: ["ChatGPT", "Claude", "Perplexity"] },
  { step: "Content and images", tools: ["Canva", "ChatGPT"] },
  { step: "Video", tools: ["HeyGen", "Google Flow"] },
  { step: "Analyse", tools: ["Search Console", "GA4"] },
]

export const capabilityAnchors = capabilitySections.map((c) => c.id);
