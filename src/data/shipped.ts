/**
 * "What I've shipped" project data for the hybrid editorial showcase.
 * All project details, links, and deliverables reflect genuine portfolio work.
 */

export interface ShippedLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface ShippedProject {
  id: string;
  number: string;
  label: string;
  category: string;
  detail: string;
  image: string;
  overview: string;
  contribution: string;
  deliverables: string[];
  links?: ShippedLink[];
  featured?: boolean;
}

export const shippedProjects: ShippedProject[] = [
  {
    id: "agentic-ai-cluster",
    number: "01",
    category: "Content Strategy",
    label: "Blogs for both platforms",
    detail: "AIQoD's blog rebuilt from scratch after a WordPress migration wiped it, starting with an agentic AI cluster, plus VentureHub360's blog for founders and investors. All built for SEO, AEO and GEO.",
    image: "shipped/01-cluster.webp",
    overview: "Two blogs for two very different readers. AIQoD writes for enterprise teams looking at agentic AI, and its blog had to be rebuilt from scratch after a WordPress migration wiped it. VentureHub360 writes for founders getting ready to pitch and for investors screening deals.",
    contribution: "For AIQoD, planned and produced the first topic cluster on agentic AI: a pillar guide with 11 posts around it, linked to each other and to the right product pages. For VentureHub360, a 10-post cluster for Startup Pitch Analyser and The Dealflow Problem series for Smart AI Investor. Every post opens with a direct answer and uses question-style headings, FAQ schema and HTML tables, so it can rank on Google and get picked up in ChatGPT, Perplexity and Google's AI answers.",
    deliverables: [
      "AIQoD blog rebuilt after the WordPress migration",
      "Agentic AI cluster: pillar guide plus supporting posts",
      "Startup Pitch Analyser cluster for founders",
      "The Dealflow Problem series for investors",
      "FAQ schema, HTML tables and year-free URLs on every post",
    ],
    links: [
      { label: "What Is Agentic AI? The Complete Enterprise Guide", url: "https://aiqod.com/blog/what-is-agentic-ai", external: true },
      { label: "AI Agent Governance: Ownership, Policies and Lifecycle", url: "https://aiqod.com/blog/ai-agent-governance", external: true },
      { label: "The Evaluation Gap: Pitch Decks", url: "https://www.venturehub360.com/blog/evaluation-gap-pitch-decks", external: true },
      { label: "What Investors Ask in a Pitch", url: "https://www.venturehub360.com/blog/what-investors-ask-in-a-pitch-meeting", external: true },
      { label: "AIQoD blog", url: "https://aiqod.com/blog", external: true },
      { label: "VentureHub360 blog", url: "https://www.venturehub360.com/blog", external: true },
    ],
    featured: true,
  },
  {
    id: "ai-intelligence-brief",
    number: "02",
    category: "Market Intelligence",
    label: "Daily AI intelligence brief",
    detail: "A daily brief with one shared top story and a section for each leader, plus a weekly social content pack.",
    image: "shipped/02-brief.webp",
    overview: "A daily email for AIQoD's leadership on what moved in enterprise AI in the last 24 hours. One shared top story, then a section each for the founder, sales head, co-founder, delivery head and marketing, with a source link for every item.",
    contribution: "Set it up as a scheduled task that sends every morning at 7:30 IST, weekends included. When the same story started showing up in more than one section, I fixed it so each story appears once. Added a running archive so past briefs stay searchable for content work.",
    deliverables: [
      "Daily brief to the leadership team",
      "LinkedIn post drafts for the founder and sales head on Mondays and Wednesdays",
      "Monday social pack: one post per platform plus a blog topic",
      "Archive of every past brief",
    ],
    featured: true,
  },
  {
    id: "linkedin-both-brands",
    number: "03",
    category: "Campaigns & Social Content",
    label: "LinkedIn for both brands",
    detail: "Run AIQoD's company page with posts and carousels every week, and write LinkedIn drafts for the founder and sales head. Built VentureHub360's page and a posting system across founder and investor groups.",
    image: "shipped/03-linkedin.webp",
    overview: "AIQoD posts five times a week: two educational posts, two on the product (one of them a carousel) and one customer or team post. The image posts are reposted to Instagram, Facebook and X. VentureHub360 started from an empty page.",
    contribution: "I plan the week, write the posts, build them in Canva and reply to comments on company posts. I rotate the core message each week so the feed doesn't say the same thing under different headlines. For VentureHub360 I set up the page and the group posting rules: the insight goes in the post and the product link goes in the first comment.",
    deliverables: [
      "Five AIQoD posts a week, with at least one carousel",
      "Reposts to Instagram, Facebook and X",
      "Founder and sales head drafts twice a week",
      "VentureHub360 company page set up from zero",
      "Posting system for founder and investor groups",
    ],
    links: [
      { label: "AIQoD on LinkedIn", url: "https://www.linkedin.com/company/aiqod/", external: true },
      { label: "VentureHub360 on LinkedIn", url: "https://www.linkedin.com/company/venturehub360/", external: true },
    ],
    featured: true,
  },
  {
    id: "outbound-campaigns",
    number: "04",
    category: "Demand Generation",
    label: "Outbound campaigns",
    detail: "Cold email and LinkedIn campaigns for channel partners, investors and AIQoD's products, on lists I build and check myself.",
    image: "shipped/04-outbound.webp",
    overview: "Outreach to three groups: channel partners for AIQoD, investors for Smart AI Investor and the seed round, and buyers for AIQoD products like the M&A solution, ATS, fleet compliance and project planning.",
    contribution: "I build the lead lists in Apollo and Instantly, verify every email before it goes out, research each company to write its opening line, and write the sequences. Emails go out Tuesday to Thursday. LinkedIn outreach runs from my own profile.",
    deliverables: [
      "Channel partner campaigns",
      "Smart AI Investor sequences for angels, networks, accelerators and VCs",
      "Seed round outreach to angels and seed funds",
      "Product campaigns with a researched opening line per company",
      "Email verification before every send",
    ],
    featured: false,
  },
  {
    id: "segment-icp-playbook",
    number: "05",
    category: "Go-to-Market",
    label: "Segment ICP playbook",
    detail: "A full B2B playbook for Smart AI Investor with messaging per segment.",
    image: "playbook-bg.webp",
    overview: "A playbook for selling Smart AI Investor. For each investor segment it covers who decides, what slows them down, what makes them buy, where to reach them and what to say.",
    contribution: "Built the segment matrix and screened out anyone who could be investing in VentureHub360 itself, so sales and fundraising never overlap. Turned it into a cold calling workbook with two script versions per segment, one for researched calls and one for cold calls.",
    deliverables: [
      "Five segments: VC partners, angel networks, accelerators, solo angels, family offices",
      "Conflict-of-interest screen",
      "Cold calling workbook with researched and cold versions",
      "Messaging angle per segment",
    ],
    featured: false,
  },
  {
    id: "competitive-research",
    number: "06",
    category: "Positioning",
    label: "Competitive research across products",
    detail: "Pricing, features and positioning studied product by product, then turned into comparison pages, messaging and pricing decisions.",
    image: "competitor-bg.webp",
    overview: "Before writing positioning or setting a price, I look at what the alternatives actually offer and charge. Done for Smart AI Investor, the AIQoD platform and Sales X.",
    contribution: "For Smart AI Investor, studied PitchBook, Affinity, Harmonic, Hatcher and Caena and wrote the comparison page content. For AIQoD, compared approaches instead of naming companies, which fed into the new website messaging. For Sales X, benchmarked lead gen tools on credits, price and validation cost to set the pricing.",
    deliverables: [
      "Smart AI Investor comparison page content",
      "AIQoD approach comparison for the website",
      "Sales X pricing benchmark across lead gen tools",
      "Competitor teardown for a product in development",
    ],
    featured: false,
  },
  {
    id: "product-icps",
    number: "07",
    category: "Product Marketing",
    label: "Product ICPs across the portfolio",
    detail: "Who buys, what they struggle with and what makes them act, written for each product across AIQoD, VentureHub360 and new launches.",
    image: "products-bg.webp",
    overview: "One ICP per product: who buys it, the root problem it solves, the day-to-day pain that problem causes, and what makes them act.",
    contribution: "Went through each product's demo and wrote down only what the running product actually does, then built the ICP from that. Kept the core problem and the pain points as separate fields so the messaging doesn't repeat itself.",
    deliverables: [
      "M&A deal sourcing",
      "ATS and ticket management",
      "Contract digitization, pharma pricing and e-KYC",
      "Fleet compliance and project planning",
      "Smart AI Investor and Startup Pitch Analyser",
    ],
    featured: false,
  },
  {
    id: "ai-avatar-videos",
    number: "08",
    category: "Creative & Media",
    label: "AI avatar and product videos",
    detail: "AI avatar videos, product demo cuts, voiceover and editing.",
    image: "videos-bg.webp",
    overview: "AI avatar videos of myself, and product videos cut from AIQoD screen recordings with voiceover.",
    contribution: "Made my avatar in Google Flow from my own photos. Cut the M&A product recording into a marketing video under three minutes, and made demo videos with voiceover and matching slides for the ATS and project planning products.",
    deliverables: [
      "AI avatar videos (in the gallery)",
      "M&A product video",
      "ATS demo video with slides",
      "Project planning demo video with voiceover and slides",
    ],
    links: [
      { label: "Watch the videos in the gallery", url: "/gallery/", external: false },
    ],
    featured: false,
  },
  {
    id: "international-partners",
    number: "09",
    category: "Channel Partnerships",
    label: "International partner research",
    detail: "Channel partners researched country by country: resellers, implementation partners and referral partners.",
    image: "partners-bg.webp",
    overview: "AIQoD's existing partner list was mostly US companies. This work goes country by country outside the US to find firms that could resell, implement or refer the platform.",
    contribution: "Shortlisted the countries, then researched companies one country at a time across all three partner types. No minimum size, but anyone over 1,000 employees is left out, so the list stays on tier 2 and 3 firms that will actually push the product.",
    deliverables: [
      "Country shortlist",
      "Company list per country with tier, category and headcount",
      "Resell, implementation and referral partners",
    ],
    featured: false,
  },
];

/** Backwards-compatible export mapping for any legacy imports. */
export const shipped: { label: string; detail: string }[] = shippedProjects.map((p) => ({
  label: p.label,
  detail: p.detail,
}));
