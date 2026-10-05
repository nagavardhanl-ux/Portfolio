/**
 * ICP builder data. Everything is composed client-side from these tables:
 * industry decides the buyer, pains and openers; size decides seniority and
 * which pains apply; region adds the compliance and outreach context.
 * Written for someone selling B2B software or services. No statistics anywhere.
 */

export type SizeId = "1-50" | "51-200" | "201-1000" | "1000+";
export type Band = "smaller" | "larger";

export interface Industry {
  id: string;
  label: string;
  /** Who owns the problem, finished by the size profile. */
  buyer: string;
  pains: Record<Band, [string, string, string]>;
  titles: Record<SizeId, [string, string, string]>;
  /** Opening line. {region} is replaced with the region's phrase. */
  opener: Record<Band, string>;
}

export interface Size {
  id: SizeId;
  label: string;
  band: Band;
  profile: string;
}

export interface Region {
  id: string;
  label: string;
  /** Place name as used mid-sentence, e.g. "the United Kingdom". */
  place: string;
  /** Location phrase used inside opening lines, e.g. "in the US". */
  phrase: string;
  note: string;
}

export const sizes: Size[] = [
  {
    id: "1-50",
    label: "1–50",
    band: "smaller",
    profile: "the founder or first functional lead, who buys quickly and signs off alone",
  },
  {
    id: "51-200",
    label: "51–200",
    band: "smaller",
    profile: "the head of the function, who owns budget but checks with the founder on anything new",
  },
  {
    id: "201-1000",
    label: "201–1,000",
    band: "larger",
    profile: "a director who runs a team and needs a business case before procurement gets involved",
  },
  {
    id: "1000+",
    label: "1,000+",
    band: "larger",
    profile: "a VP or senior director, with IT, security and procurement all part of the decision",
  },
];

export const regions: Region[] = [
  {
    id: "us",
    label: "United States",
    place: "the United States",
    phrase: "in the US",
    note: "Expect security questionnaires and SOC 2 questions early on larger deals. Keep outreach short and lead with the outcome. US email rules (CAN-SPAM) need a working opt-out and a postal address.",
  },
  {
    id: "uk",
    label: "United Kingdom",
    place: "the United Kingdom",
    phrase: "in the UK",
    note: "UK GDPR and PECR apply to outreach: target business roles, explain why you are contacting them, and make opting out easy. A plain, understated tone tends to land better than hard selling.",
  },
  {
    id: "eu",
    label: "Europe (EU)",
    place: "the EU",
    phrase: "in Europe",
    note: "GDPR applies, and data residency often comes up in the first serious call. Check whether to write in the local language; country rules on cold email differ, so confirm before sending.",
  },
  {
    id: "me",
    label: "Middle East (GCC)",
    place: "the GCC",
    phrase: "across the GCC",
    note: "Relationships and referrals carry a lot of weight; LinkedIn and warm introductions often beat cold email. Saudi Arabia and the UAE both have personal data protection laws (PDPL). Plan around the Sunday–Thursday or Monday–Friday week, depending on the country.",
  },
  {
    id: "sea",
    label: "Southeast Asia",
    place: "Southeast Asia",
    phrase: "in Southeast Asia",
    note: "Each country is its own market with its own rules, such as Singapore's PDPA and Indonesia's PDP Law. English works for most B2B outreach in Singapore, Malaysia and the Philippines; elsewhere, local-language follow-up helps.",
  },
  {
    id: "in",
    label: "India",
    place: "India",
    phrase: "in India",
    note: "Phone and WhatsApp follow-ups are normal once there is a conversation. Pricing scrutiny is high, so show cost clearly. The DPDP Act sets the rules for handling personal data.",
  },
];

export const industries: Industry[] = [
  {
    id: "saas",
    label: "B2B SaaS",
    buyer: "Revenue or product leadership at a software company",
    pains: {
      smaller: [
        "Pipeline depends on the founder's network and stalls when they are busy.",
        "A tool stack bought ad hoc, with data spread across apps nobody fully owns.",
        "No clear ICP yet, so marketing, sales and product chase different customers.",
      ],
      larger: [
        "Long sales cycles with more stakeholders on every deal.",
        "Churn and expansion are hard to forecast across segments.",
        "Teams stuck maintaining internal tools instead of shipping product.",
      ],
    },
    titles: {
      "1-50": ["Founder / CEO", "Head of Growth", "Head of Sales"],
      "51-200": ["VP Sales", "Head of Marketing", "Head of Revenue Operations"],
      "201-1000": ["VP Marketing", "Director of Revenue Operations", "Director of Demand Generation"],
      "1000+": ["CRO", "SVP Marketing", "VP Sales Operations"],
    },
    opener: {
      smaller:
        "Most SaaS teams {region} at your stage I speak to have pipeline that still runs through the founder. Is that true for you, or have you already moved past it?",
      larger:
        "Software companies {region} at your size tend to pick up more stakeholders on every deal. How are you keeping cycle times from stretching?",
    },
  },
  {
    id: "fintech",
    label: "Financial services & fintech",
    buyer: "Operations, compliance or product leadership at a financial firm",
    pains: {
      smaller: [
        "Compliance work eating into time meant for product and growth.",
        "Customer onboarding and KYC steps that lose applicants halfway.",
        "Partner and banking integrations that take months to go live.",
      ],
      larger: [
        "Legacy core systems that slow every change down.",
        "Regulatory reporting assembled by hand from several sources.",
        "Vendor risk reviews that make any new tool slow to adopt.",
      ],
    },
    titles: {
      "1-50": ["Founder / CEO", "Head of Operations", "Head of Compliance"],
      "51-200": ["COO", "Head of Product", "Head of Risk & Compliance"],
      "201-1000": ["Director of Operations", "Chief Compliance Officer", "Director of Digital Transformation"],
      "1000+": ["Chief Operating Officer", "Chief Risk Officer", "Head of Innovation"],
    },
    opener: {
      smaller:
        "For fintech teams {region} at your size, onboarding drop-off and compliance load usually fight for the same hours. Which one is costing you more right now?",
      larger:
        "Most financial firms I talk to {region} are still pulling regulatory reports together by hand from several systems. Is that something you've already solved?",
    },
  },
  {
    id: "healthcare",
    label: "Healthcare & life sciences",
    buyer: "Operations or digital leadership at a provider, clinic group or life-sciences company",
    pains: {
      smaller: [
        "Front-desk and admin work that takes time away from patients.",
        "Patient enquiries and bookings spread across phone, email and forms.",
        "Little time or budget to evaluate new tools properly.",
      ],
      larger: [
        "Data locked in systems that do not talk to each other.",
        "Strict privacy and validation rules on any new software.",
        "Staffing pressure that makes manual processes hard to sustain.",
      ],
    },
    titles: {
      "1-50": ["Clinic Owner / Director", "Practice Manager", "Operations Manager"],
      "51-200": ["Head of Operations", "Head of Patient Experience", "IT Manager"],
      "201-1000": ["Director of Operations", "Director of Digital Health", "Head of IT"],
      "1000+": ["Chief Operating Officer", "Chief Digital Officer", "Chief Information Officer"],
    },
    opener: {
      smaller:
        "Clinics and practices {region} keep telling me admin work is the first thing that crowds out patient time. Is that the same for your team?",
      larger:
        "Most healthcare organisations I talk to {region} have patient data split across systems that don't talk to each other. How much of a blocker is that for you?",
    },
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    buyer: "Plant, operations or supply-chain leadership at a manufacturer",
    pains: {
      smaller: [
        "Production planning that still lives in spreadsheets.",
        "Quotes and orders handled over email and calls, with no single record.",
        "Dependence on a few people who hold all the process knowledge.",
      ],
      larger: [
        "Visibility gaps between plants, suppliers and the ERP.",
        "Unplanned downtime and maintenance handled reactively.",
        "Quality and compliance documentation that slows audits.",
      ],
    },
    titles: {
      "1-50": ["Owner / Managing Director", "Production Manager", "Operations Manager"],
      "51-200": ["Plant Manager", "Head of Operations", "Supply Chain Manager"],
      "201-1000": ["Director of Operations", "Director of Supply Chain", "Head of Quality"],
      "1000+": ["VP Manufacturing", "VP Supply Chain", "Chief Operating Officer"],
    },
    opener: {
      smaller:
        "A lot of manufacturers {region} at your size still plan production in spreadsheets and confirm orders over email. Is that roughly where you are?",
      larger:
        "With several plants and suppliers, most operations leaders I speak to {region} say visibility is the hard part, not the data itself. Does that match what you see?",
    },
  },
  {
    id: "logistics",
    label: "Logistics & supply chain",
    buyer: "Operations leadership at a logistics, freight or 3PL business",
    pains: {
      smaller: [
        "Shipment updates chased manually over phone and WhatsApp.",
        "Rate quotes built by hand, so responses go out slowly.",
        "Thin margins that leave little room for new software spend.",
      ],
      larger: [
        "Tracking data split across carriers, partners and internal systems.",
        "Customer service teams overloaded with where-is-my-shipment requests.",
        "Billing disputes and invoice reconciliation that drag on.",
      ],
    },
    titles: {
      "1-50": ["Founder / Managing Director", "Operations Manager", "Business Development Manager"],
      "51-200": ["Head of Operations", "Head of Sales", "Customer Service Manager"],
      "201-1000": ["Director of Operations", "Director of Customer Experience", "Head of IT"],
      "1000+": ["VP Operations", "Chief Commercial Officer", "Chief Information Officer"],
    },
    opener: {
      smaller:
        "Most logistics teams {region} at your size tell me their team spends half the day chasing shipment updates. How are you handling that today?",
      larger:
        "For logistics teams {region} at your scale, tracking data usually sits across carriers and partners. How much of your service team's time goes on status questions?",
    },
  },
  {
    id: "retail",
    label: "Retail & e-commerce",
    buyer: "E-commerce, marketing or operations leadership at a retailer or brand",
    pains: {
      smaller: [
        "Rising ad costs with no clear view of which channel actually sells.",
        "Stock, orders and customer data spread across several apps.",
        "Too few people to run campaigns, content and customer service at once.",
      ],
      larger: [
        "Online and store data that never quite reconcile.",
        "Personalisation plans held back by messy customer data.",
        "Returns and fulfilment costs that eat into margin.",
      ],
    },
    titles: {
      "1-50": ["Founder", "E-commerce Manager", "Marketing Manager"],
      "51-200": ["Head of E-commerce", "Head of Marketing", "Head of Operations"],
      "201-1000": ["Director of E-commerce", "Director of CRM", "Director of Digital Marketing"],
      "1000+": ["Chief Digital Officer", "VP E-commerce", "Chief Marketing Officer"],
    },
    opener: {
      smaller:
        "Most brands {region} at your size are paying more for ads and seeing less clearly which channel sells. Is attribution a headache for you too?",
      larger:
        "Retailers {region} I talk to say their online and store data still don't line up. Is that on your list this year?",
    },
  },
  {
    id: "services",
    label: "Professional services",
    buyer: "Partners or operations leadership at a consultancy, agency or firm",
    pains: {
      smaller: [
        "New business depends on referrals and the partners' time.",
        "Proposals and reporting rebuilt from scratch for every client.",
        "Utilisation hard to track, so pricing is partly guesswork.",
      ],
      larger: [
        "Knowledge locked in individual teams and inboxes.",
        "Inconsistent delivery quality across offices and practices.",
        "Slow onboarding for new hires and new clients.",
      ],
    },
    titles: {
      "1-50": ["Founder / Managing Partner", "Head of Business Development", "Operations Manager"],
      "51-200": ["Managing Director", "Head of Growth", "Head of Operations"],
      "201-1000": ["Practice Lead", "Director of Business Development", "COO"],
      "1000+": ["Managing Partner", "Chief Operating Officer", "Head of Knowledge Management"],
    },
    opener: {
      smaller:
        "Most firms {region} at your size still win work mainly through referrals and partner time. Are you trying to build a second channel alongside that?",
      larger:
        "At your size, firms {region} tell me the hardest part is keeping delivery consistent across practices. How are you handling that now?",
    },
  },
  {
    id: "education",
    label: "Education & edtech",
    buyer: "Admissions, marketing or academic operations leadership at an institution or edtech company",
    pains: {
      smaller: [
        "Enquiries arriving from many channels with slow follow-up.",
        "Enrolment depending on a few seasonal peaks.",
        "Limited budget and staff for marketing and admissions.",
      ],
      larger: [
        "Student data spread across admissions, learning and finance systems.",
        "Long, committee-led buying decisions.",
        "Pressure to show outcomes to students, parents and regulators.",
      ],
    },
    titles: {
      "1-50": ["Founder / Director", "Admissions Manager", "Marketing Manager"],
      "51-200": ["Head of Admissions", "Head of Marketing", "Head of Academic Operations"],
      "201-1000": ["Director of Admissions", "Director of Marketing", "Head of IT"],
      "1000+": ["Registrar", "Chief Marketing Officer", "Chief Information Officer"],
    },
    opener: {
      smaller:
        "Most institutions of your size {region} tell me enquiries come in from everywhere and follow-up is the bottleneck. Is that where you'd start too?",
      larger:
        "For larger institutions {region}, student data usually sits across admissions, learning and finance systems. How joined up is it on your side?",
    },
  },
];

export interface IcpResult {
  who: string;
  regionNote: string;
  pains: string[];
  titles: string[];
  opener: string;
}

export function buildIcp(industryId: string, sizeId: string, regionId: string): IcpResult | null {
  const industry = industries.find((i) => i.id === industryId);
  const size = sizes.find((s) => s.id === sizeId);
  const region = regions.find((r) => r.id === regionId);
  if (!industry || !size || !region) return null;

  return {
    who: `${industry.buyer} with ${size.label} employees in ${region.place}. At this size the decision usually sits with ${size.profile}.`,
    regionNote: region.note,
    pains: industry.pains[size.band],
    titles: industry.titles[size.id],
    opener: industry.opener[size.band].replace("{region}", region.phrase),
  };
}
