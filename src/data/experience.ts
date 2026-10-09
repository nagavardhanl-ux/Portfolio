/** Experience page (/experience). Content as supplied; newest first. */
export interface Role {
  title: string;
  dates: string;
  points: string[];
}

export interface Company {
  company: string;
  note?: string;
  roles: Role[];
  /** The main block gets full weight; earlier roles are shown lighter. */
  featured?: boolean;
}

export const experienceIntro =
  "From offline marketing in a family business to running marketing for two AI platforms. The full path.";

export const experience: Company[] = [
  {
    company: "AIQoD",
    note: "Roots Innovation Labs",
    featured: true,
    roles: [
      {
        title: "Marketing Executive",
        dates: "May 2026 to present",
        points: [
          "Run marketing for two AI platforms, AIQoD and VentureHub360: lead generation, email, LinkedIn, content, SEO and social.",
          "Build ICPs and positioning for products across international markets, and the sales material that goes with them.",
          "Build and run the company websites, and track how they show up in Google and AI search.",
        ],
      },
      {
        title: "Marketing Executive, Consultant",
        dates: "Nov 2025 to May 2026",
        points: [
          "Built VentureHub360 as a new brand and site, and rebuilt the AIQoD site off WordPress.",
          "Ran email campaigns for multiple products, and built ICPs and competitor comparison content.",
          "Produced AI avatar videos and marketing creatives.",
        ],
      },
      {
        title: "Marketing Intern",
        dates: "Aug 2025 to Nov 2025",
        points: [
          "Generated 1,000+ targeted B2B leads using Apollo and Seamless.AI.",
          "Researched target companies and partnership opportunities, and created content and short videos for campaigns.",
        ],
      },
    ],
  },
  {
    company: "L V L Enterprises",
    roles: [
      {
        title: "Sourcing & Vendor Relationship Manager",
        dates: "Oct 2023 to Oct 2024",
        points: [
          "Created the product marketing material: a 30-product brochure book, pricing sheets, website content and Canva creatives.",
          "Handled inbound IndiaMART leads and client calls, and cut procurement costs by 15% through vendor negotiation.",
        ],
      },
    ],
  },
  {
    company: "Mettu Anji Reddy Convention Hall",
    roles: [
      {
        title: "Event & Venue Manager",
        dates: "Jun 2021 to Aug 2023",
        points: [
          "Ran the venue's offline marketing: posters, banners, flyers and a promotional video aired on a local channel.",
          "Managed 50+ events and built repeat and referral bookings.",
        ],
      },
    ],
  },
  {
    company: "Sri Venkateswara Stone Crusher",
    note: "Family Business",
    roles: [
      {
        title: "Manager",
        dates: "Jun 2019 to Mar 2021",
        points: [
          "Ran daily operations across orders, suppliers, deliveries and transport, and handled offline marketing and referrals.",
        ],
      },
    ],
  },
];
