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
    "I run product marketing, demand generation, content, websites and AI-led execution for two AI platforms. Here is what each one involves and the work behind it.",
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
      "Built ICPs for AIQoD's products including M&A, Contract Digitization, ATS, Ticket Management, Pharma Analytics and E-KYC.",
      "Wrote an 80-plus segment B2B ICP playbook for Smart AI Investor, with decision makers, pain points, triggers and messaging per segment.",
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
      "Write the cold emails and LinkedIn messages, and run the sequences.",
      "Verify every list before sending so campaigns don't burn on bad data.",
      "Read what comes back and rewrite what underperforms.",
    ],
    work: [
      "Ran cold email sequences for partners, investors, and products like M&A and fleet compliance, into markets outside India.",
      "Built investor lead databases: 1,221 angels, 835 family offices, 263 VC firms.",
      "Wrote a B2B lead generation playbook with per-industry Apollo filters and a scoring formula.",
      "Set up an email verification workflow with ZeroBounce and MillionVerifier.",
      "Built a WhatsApp Business API outreach strategy.",
    ],
  },
  {
    id: "content",
    index: "03",
    title: "Content",
    intro:
      "I write the blogs, posts and series that bring people to the product, built to rank on Google and show up in AI search.",
    points: [
      "Plan and write blog clusters around SEO, AEO and GEO together.",
      "Run social posting across LinkedIn, Instagram, Facebook and X.",
      "Build infographics and carousels for LinkedIn.",
      "Keep content grounded in real, checked facts, not assumptions.",
    ],
    work: [
      "Wrote an 11-blog Agentic AI content cluster for AIQoD, with FAQ schema and comparison tables.",
      "Wrote a 10-blog cluster for Startup Pitch Analyser and a 10-part “Dealflow Problem” series for Smart AI Investor.",
      "Rebuilt the AIQoD blog after a WordPress migration wiped it.",
      "Run social posting of 5 posts a week for AIQoD and 3 for VentureHub360.",
      "Built a daily AI intelligence brief that goes to the leadership team each morning.",
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
      "Run AIQoD360 in Wix: content, new pages and ongoing updates.",
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
      "Built a Custom GPT for AIQoD's social content.",
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
