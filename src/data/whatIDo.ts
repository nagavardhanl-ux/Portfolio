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
    "Four jobs, one person. I run product marketing, demand generation, websites and AI-led execution for two AI platforms, and I do the hands-on work in each.",
};

export const capabilitySections: Capability[] = [
  {
    id: "product-marketing",
    index: "01",
    title: "Product Marketing",
    intro:
      "I turn products into something a buyer and a sales team can understand. Who it's for, what it does, and the material that sells it.",
    points: [
      "Build ICPs and buyer personas for AI products across the US, UK, Canada, Singapore, the Middle East and India.",
      "Research competitors across pricing, features, capabilities and positioning, and turn it into comparison content.",
      "Write positioning and messaging, then the product pages, one-pagers, brochures and sales decks that carry it.",
      "Support product launches end to end, including a new brand launched from nothing.",
    ],
    work: [
      "Launched VentureHub360 as a new brand: positioning, product copy for two products, and the website.",
      "Built ICPs for multiple AIQoD products across six markets.",
      "Created one-pagers, brochures and comparison content for enterprise AI products.",
    ],
  },
  {
    id: "demand-generation",
    index: "02",
    title: "Demand Generation",
    intro:
      "I run outbound that reaches the right people. List building, writing, sending and tracking, across email and LinkedIn, into international markets.",
    points: [
      "Plan and run cold email campaigns for partner recruitment, product lines and investor outreach.",
      "Build and clean prospect lists, verify them before sending, and segment by ICP.",
      "Run LinkedIn outreach to book product demos.",
      "Track opens, clicks, replies and bounce, and rework what underperforms.",
    ],
    work: [
      "Ran investor and partner campaigns into the US, UK, Europe, the Middle East and Southeast Asia.",
      "Consolidated legacy lead sources into one clean, deduplicated database.",
      "Researched channel partner companies across 19 countries.",
    ],
  },
  {
    id: "websites-seo",
    index: "03",
    title: "Websites & SEO",
    intro:
      "I build and ship company websites using AI tools, including the content, the structure and the SEO, without waiting on a developer.",
    points: [
      "Build and rebuild company websites, from brand and copy to live pages.",
      "Write website content and product messaging.",
      "Set up on-page SEO, structure and meta, and track performance in Search Console and GA4.",
      "Track how sites show up in AI search tools like ChatGPT, Gemini and Perplexity.",
    ],
    work: [
      "Rebuilt the AIQoD website and built VentureHub360 from scratch.",
      "Manage and update AIQoD360 in Wix.",
      "Built concept sites to practise, including a full study-abroad site with working calculators.",
    ],
  },
  {
    id: "ai-execution",
    index: "04",
    title: "AI-Led Execution",
    intro:
      "AI is how I get the range I have. I use it every day across research, content, video, websites and campaigns, as part of the workflow, not a novelty.",
    points: [
      "Research with ChatGPT and Claude.",
      "Build sites with Lovable, Antigravity and Claude Code.",
      "Create content and video with Canva, HeyGen and Google Flow.",
      "Analyse with Search Console, GA4 and Frase.",
    ],
    work: [
      "Built an AI-generated daily intelligence brief for the company leadership team.",
      "Produced AI avatar and product videos for campaigns.",
      "Set up AI search visibility tracking across ChatGPT, Gemini and Claude.",
    ],
  },
];

/** Anchor for each home-page capability label, in the same order as content.ts `capabilities`. */
export const capabilityAnchors = capabilitySections.map((c) => c.id);
