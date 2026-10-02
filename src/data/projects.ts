import {
  Globe,
  KanbanSquare,
  Layout,
  LineChart,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  gradient: string;
  image?: string;
  tags: string[];
  role: string;
  timeline: string;
  challenges: string[];
  solutions: string[];
  results: {
    label: string;
    value: string;
  }[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "venturehub360",
    title: "VentureHub360",
    description:
      "Built a brand-new company brand and website from scratch — brand kit, sales decks, and product copy for two AI products — using Lovable and Antigravity.",
    fullDescription:
      "VentureHub360 is AIQoD's product brand for its AI tools. I built it from zero — brand identity, website, sales decks, and all product copy for Smart AI Investor and Startup Pitch Analyser — using Lovable and Antigravity instead of a traditional dev team.",
    icon: Rocket,
    gradient: "from-accent-cyan/20 to-accent-purple/20",
    tags: ["Brand Building", "No-Code Website", "Product Copy"],
    role: "Brand & Marketing Owner",
    timeline: "Nov 2025 - Present",
    challenges: [
      "Launching a brand-new product brand with no existing identity, website, or sales collateral.",
      "Positioning two distinct AI products under one coherent brand story.",
      "Doing it all without a dedicated engineering or design team.",
    ],
    solutions: [
      "Designed the full brand kit — name, visual identity, and messaging pillars — from scratch.",
      "Built the website end-to-end on Lovable and Antigravity, iterating in days instead of sprints.",
      "Wrote every page of product copy and built multiple sales deck versions for outbound and demos.",
    ],
    results: [
      { label: "Brand", value: "Built from 0" },
      { label: "Website", value: "Shipped Solo" },
      { label: "Products Launched", value: "2" },
    ],
    technologies: ["Lovable AI", "Antigravity", "Canva", "Brand Strategy"],
  },
  {
    id: "smart-ai-investor",
    title: "Smart AI Investor",
    description:
      "Product positioning, ICP development, and cold email sequencing for an AI-powered investor-insights platform.",
    fullDescription:
      "Smart AI Investor is one of VentureHub360's flagship products. My role was entirely on the go-to-market side: writing the product copy, defining the ideal customer profile, and building the multi-sequence cold email campaigns that introduced it to the market.",
    icon: LineChart,
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
    tags: ["Product Copy", "ICP", "Cold Email"],
    role: "Product Marketing",
    timeline: "Ongoing",
    challenges: [
      "Explaining a technical AI product in language investors actually respond to.",
      "Identifying and reaching the right ICP without an existing outbound engine.",
      "Keeping outreach personal at volume across a multi-sequence campaign.",
    ],
    solutions: [
      "Wrote positioning and product copy focused on investor outcomes, not features.",
      "Built ICPs and prospect lists using Apollo and Seamless.AI.",
      "Designed and ran multi-sequence email campaigns, tracking open rates and reworking underperforming steps.",
    ],
    results: [
      { label: "Campaign Type", value: "Multi-Sequence" },
      { label: "Sourcing Tools", value: "Apollo + Seamless.AI" },
      { label: "Iteration", value: "Open-Rate Driven" },
    ],
    technologies: ["Apollo", "Seamless.AI", "Email Copywriting", "ICP Development"],
  },
  {
    id: "startup-pitch-analyser",
    title: "Startup Pitch Analyser",
    description:
      "Launch messaging and product copy for an AI pitch-deck evaluation tool, under the VentureHub360 brand.",
    fullDescription:
      "Startup Pitch Analyser evaluates and scores startup pitch decks. I owned the product marketing side — messaging, launch copy, and positioning — to bring it to market alongside Smart AI Investor under the VentureHub360 brand.",
    icon: Layout,
    gradient: "from-accent-purple/20 to-accent-purple/5",
    tags: ["Product Copy", "Launch Messaging", "Positioning"],
    role: "Product Marketing",
    timeline: "Ongoing",
    challenges: [
      "Communicating a fairly technical scoring product to non-technical founders.",
      "Differentiating from generic 'AI pitch deck' tools already in the market.",
      "Launching with limited design/dev resources, on a compressed timeline.",
    ],
    solutions: [
      "Wrote founder-facing copy that leads with outcomes — faster feedback, sharper decks — over mechanics.",
      "Ran competitor research to find and claim a clear positioning gap.",
      "Shipped launch messaging and page copy through the same Lovable/Antigravity workflow as VentureHub360.",
    ],
    results: [
      { label: "Positioning", value: "Competitor-Mapped" },
      { label: "Copy", value: "Fully Owned" },
      { label: "Brand", value: "VentureHub360" },
    ],
    technologies: ["Competitor Research", "Copywriting", "Lovable AI"],
  },
  {
    id: "aiqod-website-rebuild",
    title: "AIQoD Website Rebuild",
    description:
      "Migrated AIQoD's main company website from WordPress to a modern build on Lovable and Antigravity.",
    fullDescription:
      "AIQoD's original website was on WordPress. I rebuilt it from the ground up on Lovable and Antigravity — faster to iterate, easier to keep on-brand, and no plugin overhead — while the company's marketing kept shipping in parallel.",
    icon: Globe,
    gradient: "from-accent-amber/20 to-accent-amber/5",
    tags: ["Website Rebuild", "No-Code", "Migration"],
    role: "Website Owner",
    timeline: "Nov 2025 - Present",
    challenges: [
      "Migrating off WordPress without stalling ongoing marketing campaigns.",
      "Keeping the new site on-brand while the company's positioning was still evolving.",
      "Managing the rebuild solo, without dedicated engineering support.",
    ],
    solutions: [
      "Rebuilt the site page-by-page on Lovable and Antigravity, shipping incrementally instead of a big-bang relaunch.",
      "Reused and refined brand assets across both the AIQoD and VentureHub360 sites for consistency.",
      "Kept content and copy updates flowing throughout the migration, not after it.",
    ],
    results: [
      { label: "Platform", value: "WordPress → No-Code" },
      { label: "Owner", value: "Solo" },
      { label: "Downtime", value: "None" },
    ],
    technologies: ["Lovable AI", "Antigravity", "Content Migration"],
  },
  {
    id: "sales-tracker-crm",
    title: "Sales Tracker CRM",
    description:
      "A self-initiated Kanban-style CRM to track leads across the pipeline — built independently, outside of client work.",
    fullDescription:
      "After generating 1,000+ leads by hand across spreadsheets, I built my own lightweight CRM to track them properly — a Kanban board with stages from New Lead through Won/Lost, built with Next.js and AI-assisted development.",
    icon: KanbanSquare,
    gradient: "from-accent-purple/20 to-accent-cyan/10",
    tags: ["Independent Project", "Next.js", "Lead Management"],
    role: "Independent Build",
    timeline: "Personal Project",
    challenges: [
      "Tracking hundreds of leads across spreadsheets was slow and error-prone.",
      "Needed a pipeline view — New, Proposal, Deposit, Follow-Up, Won, Lost — that matched how outreach actually works.",
      "Wanted something fast to build and iterate on without waiting on a dev team.",
    ],
    solutions: [
      "Built a Kanban board in Next.js with lead cards across pipeline stages.",
      "Used AI-assisted development to move from idea to working tool in days, not weeks.",
      "Kept the data model simple enough to extend as the pipeline structure evolves.",
    ],
    results: [
      { label: "Pipeline Stages", value: "7" },
      { label: "Built", value: "Solo" },
      { label: "Stack", value: "Next.js" },
    ],
    technologies: ["Next.js", "React", "TypeScript"],
  },
];
