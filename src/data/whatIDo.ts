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
      "Build ICPs for AI products by market, working out who buys, what they struggle with, and which roles to target.",
      "Study competitors across pricing, features and positioning, and turn it into comparison pages that show where a product wins.",
      "Write the positioning and the words that follow from it: product pages, one-pagers, brochures and sales decks.",
      "Take a product to market from scratch, including a full brand launch.",
    ],
    work: [
      "Built VentureHub360 as a new brand: named the positioning, wrote the copy for both products, and shipped the site.",
      "Wrote ICPs for AIQoD's products across several markets, which the sales team used for targeting.",
      "Made the one-pagers and comparison content sales used in live outreach.",
    ],
  },
  {
    id: "demand-generation",
    index: "02",
    title: "Demand Generation",
    intro:
      "I run outbound that reaches the right people. List building, writing, sending and tracking, across email and LinkedIn, into international markets.",
    points: [
      "Build the target lists myself, sourcing and cleaning them before anything goes out.",
      "Write the cold emails and the LinkedIn messages, and run the sequences.",
      "Verify every list before sending so campaigns don't burn on bad data.",
      "Read what comes back, opens, clicks, replies, and rewrite the sequences that underperform.",
    ],
    work: [
      "Ran partner and investor outreach into the US, UK, Europe, the Middle East and Southeast Asia.",
      "Built one clean master database out of years of scattered, duplicated lead files.",
      "Researched channel partners across 19 countries to open new markets.",
    ],
  },
  {
    id: "websites-seo",
    index: "03",
    title: "Websites & SEO",
    intro:
      "I build and ship company websites using AI tools, including the content, the structure and the SEO, without waiting on a developer.",
    points: [
      "Build company websites end to end, from the copy and structure to the live pages.",
      "Write the website content and the product messaging on it.",
      "Set up on-page SEO and track what's working in Search Console and GA4.",
      "Check how the sites show up in AI search, not just Google.",
    ],
    work: [
      "Rebuilt the AIQoD site and built VentureHub360 from scratch.",
      "Run AIQoD360 in Wix: content, new pages and ongoing updates.",
      "Built concept sites to push myself, including a full study-abroad site with working cost and loan calculators.",
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
      "Analyse with Search Console and GA4.",
    ],
    work: [
      "Built a daily AI intelligence brief that goes to the company's leadership team every morning.",
      "Produced AI avatar videos and product videos for campaigns.",
      "Set up AI search visibility tracking across ChatGPT, Gemini and Claude.",
    ],
  },
];

/** Anchor for each home-page capability label, in the same order as content.ts `capabilities`. */
export const capabilityAnchors = capabilitySections.map((c) => c.id);
