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
    label: "Agentic AI content cluster",
    detail: "Agentic AI cluster for AIQoD, built for SEO, AEO and GEO, on a blog rebuilt from scratch after a WordPress migration wiped it.",
    image: "shipped/01-cluster.webp",
    overview: "Core pillar-and-spoke content architecture engineered to rank on Google and capture visibility across generative AI answer engines (ChatGPT, Claude, Perplexity).",
    contribution: "Structured the topic hierarchy, authored the 4,000+ word enterprise pillar guide, configured schema markup, and produced high-intent spoke articles.",
    deliverables: [
      "Enterprise Pillar Guide",
      "AI Agent Governance Spec",
      "Agent Orchestration Deep Dive",
      "Adoption & ROI Market Data",
      "AEO / GEO Schema Integration",
    ],
    links: [
      { label: "What Is Agentic AI?", url: "https://aiqod.com/blog/what-is-agentic-ai", external: true },
      { label: "AI Agent Governance", url: "https://aiqod.com/blog/ai-agent-governance", external: true },
      { label: "Visit Full Blog", url: "https://aiqod.com/blog", external: true },
    ],
    featured: true,
  },
  {
    id: "ai-intelligence-brief",
    number: "02",
    category: "Investor & Market Intelligence",
    label: "Daily AI intelligence brief",
    detail: "A daily brief with one shared top story and a section for each leader, plus a weekly social content pack.",
    image: "shipped/02-brief.webp",
    overview: "Automated executive morning intelligence workflow scanning global AI and market developments to deliver role-tailored briefings directly to leadership.",
    contribution: "Built automated aggregation filters, customized daily signal digests for founder, sales, delivery, and R&D leaders, and created weekly content packs.",
    deliverables: [
      "Daily Executive Top Story",
      "Founder Strategy Signals",
      "Sales & Competitor Radar",
      "R&D Tech Teardowns",
      "Weekly Social Pack (Mondays)",
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
    overview: "Multi-brand organic social growth, thought leadership carousels, and executive ghostwriting spanning enterprise AI and venture funding.",
    contribution: "Managed weekly content calendars, authored educational carousels, ghostwrote executive posts for the founder and sales head, and set up founder/investor community distribution.",
    deliverables: [
      "AIQoD Company Page Management",
      "Weekly Educational Carousels",
      "Founder & Sales Head Ghostwriting",
      "VentureHub360 Zero-to-One Launch",
      "Investor Group Distribution System",
    ],
    links: [
      { label: "AIQoD LinkedIn", url: "https://www.linkedin.com/company/aiqod/", external: true },
      { label: "VentureHub360 LinkedIn", url: "https://www.linkedin.com/company/venturehub360/", external: true },
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
    overview: "Targeted outbound pipeline engines connecting with resellers, enterprise buyers, and private equity / angel investors across international markets.",
    contribution: "Sourced and verified prospect databases, built personalized sequence templates, established domain reputation protocols, and analyzed response signals.",
    deliverables: [
      "Channel Partner Outreach",
      "Smart AI Investor Sequences",
      "Product Cold Email Campaigns",
      "Lead Scoring & Verification",
      "Deliverability & Open Optimization",
    ],
    featured: false,
  },
  {
    id: "platform-blogs",
    number: "05",
    category: "Editorial Strategy",
    label: "Blogs for both platforms",
    detail: "Written for AIQoD's enterprise buyers and VentureHub360's founders and investors, built to rank on Google and show up in AI answers.",
    image: "shipped/05-blogs.webp",
    overview: "Two tailored B2B editorial properties: enterprise AI architecture for corporate tech buyers, and tactical startup fundraising playbooks for early-stage founders.",
    contribution: "Conducted technical research, wrote comprehensive long-form articles, implemented search and citation optimization, and integrated conversion hooks.",
    deliverables: [
      "AIQoD Enterprise Series",
      "VentureHub360 Founder Guides",
      "Pitch Deck Evaluation Framework",
      "What Investors Ask Breakdown",
      "Funding Rounds Explained",
    ],
    links: [
      { label: "AIQoD Blog", url: "https://aiqod.com/blog", external: true },
      { label: "VentureHub360 Blog", url: "https://www.venturehub360.com/blog", external: true },
    ],
    featured: false,
  },
  {
    id: "segment-icp-playbook",
    number: "06",
    category: "Go-to-Market",
    label: "Segment ICP playbook",
    detail: "A full B2B playbook for Smart AI Investor with messaging per segment.",
    image: "playbook-bg.webp",
    overview: "Comprehensive ideal customer profile framework mapping decision-makers, core workflow friction, buying triggers, and messaging angles across 5 investor types.",
    contribution: "Analyzed investment firm operating structures, developed tailored value propositions, and codified sales battlecards for outbound and pitch conversations.",
    deliverables: [
      "VC Fund Partner Profile",
      "Angel Network Playbook",
      "Accelerator Persona Specs",
      "Solo Angel Messaging Angle",
      "Family Office Buying Triggers",
    ],
    featured: false,
  },
  {
    id: "competitive-research",
    number: "07",
    category: "Market Intelligence",
    label: "Competitive research across products",
    detail: "Pricing, features and positioning studied product by product, then turned into comparison pages, messaging and pricing decisions.",
    image: "competitor-bg.webp",
    overview: "Systematic competitor teardowns across intelligence platforms, agent ecosystems, and lead generation tools to guide pricing and objection handling.",
    contribution: "Researched feature matrices and tiering models, authored side-by-side comparison pages, and shaped product positioning against market incumbents.",
    deliverables: [
      "Smart AI Investor vs. PitchBook/Affinity",
      "AIQoD vs. Point Solutions & AI Suites",
      "Sales X Packaging & Tiering Study",
      "Competitor Comparison Matrix",
      "Sales Objection Playbook",
    ],
    featured: false,
  },
  {
    id: "product-icps",
    number: "08",
    category: "Product Marketing",
    label: "Product ICPs across the portfolio",
    detail: "Who buys, what they struggle with and what makes them act, written for each product across AIQoD, VentureHub360 and new launches.",
    image: "products-bg.webp",
    overview: "Modular ICP definitions across multi-product portfolios, identifying operational bottlenecks and purchasing authority for specific vertical solutions.",
    contribution: "Structured persona guides covering trigger events, workflow pain points, and product-specific value drivers across enterprise and startup tools.",
    deliverables: [
      "M&A Deal Sourcing Persona",
      "Agentic AI Buying Team Spec",
      "ATS & Ticket Management ICP",
      "Fleet Compliance Criteria",
      "Startup Pitch Analyser Profile",
    ],
    featured: false,
  },
  {
    id: "ai-avatar-videos",
    number: "09",
    category: "Creative & Media",
    label: "AI avatar and product videos",
    detail: "AI avatar videos, product demo cuts, voiceover and editing.",
    image: "videos-bg.webp",
    overview: "Modern multimedia production pipeline combining synthetic AI presenters, crisp software demo screencasts, and audio engineering.",
    contribution: "Authored video scripts, generated and rendered AI avatars in HeyGen, edited high-resolution demo walkthroughs, and optimized video assets for web and social.",
    deliverables: [
      "AI Avatar Presenter Videos",
      "Product Walkthrough Screencasts",
      "Voiceover Editing & Pacing",
      "Social Video Micro-Cuts",
      "Portfolio Video Gallery Showcase",
    ],
    links: [
      { label: "Watch Videos in Gallery", url: "/gallery/", external: false },
    ],
    featured: false,
  },
  {
    id: "international-partners",
    number: "10",
    category: "Channel Partnerships",
    label: "International partner research",
    detail: "Channel partners researched country by country: resellers, implementation partners and referral partners.",
    image: "partners-bg.webp",
    overview: "Country-by-country ecosystem research evaluating potential reseller networks, systems integrators, and software implementation partners across target markets.",
    contribution: "Built market intelligence criteria, evaluated Tier 2 and Tier 3 consulting firms, mapped partner capabilities, and structured introductory outreach briefs.",
    deliverables: [
      "Resell & White-label Criteria",
      "Implementation Partner Shortlists",
      "Referral Partner Directory",
      "Tier 2 & 3 Regional Mapping",
      "Country-by-Country Market Dossier",
    ],
    featured: false,
  },
];

/** Backwards-compatible export mapping for any legacy imports. */
export const shipped: { label: string; detail: string }[] = shippedProjects.map((p) => ({
  label: p.label,
  detail: p.detail,
}));
