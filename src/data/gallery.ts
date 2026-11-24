export interface VideoItem {
  id: string;
  title: string;
  role: string;
  type?: "video" | "reel" | "short";
  platform?: "youtube";
  aspectRatio?: "16/9" | "9/16";
}

export const videos: VideoItem[] = [
  {
    id: "gsYJwu_CHGM",
    title: "AIQoD: The Enterprise Intelligence Platform That Gets AI Agents Into Production",
    role: "Product video, created using Claude",
  },
  {
    id: "aRwER0h7pvI",
    title: "Great Opportunities Rarely Wait for Slow Decisions",
    role: "Smart AI Investor promo, AI avatar video (HeyGen)",
  },
  {
    id: "r6Pd00z7t7c",
    title: "Lemon Buddy",
    role: "Product feature on the Lemon Ideas podcast",
  },
  {
    id: "EQAWHkdcptM",
    title: "The One Question That Decides Your Investor Meeting | Startup Pitch Analyser",
    role: "Startup Pitch Analyser promo, VentureHub360",
  },
  {
    id: "FXYyd3wzR54",
    title: "Smart AI Investor | AI That Interviews Founders and Scores Every Pitch",
    role: "Smart AI Investor product overview, VentureHub360",
  },
  {
    id: "fNqPLrtcYTA",
    title: "VentureHub360: AI Agents for Every Business | Sales, Hiring, Finance and More",
    role: "Platform overview & promo, VentureHub360",
  },
];

export const productReels: VideoItem[] = [
  {
    id: "3BV_RFMATaE",
    title: "Why the second AI agent should not start from zero",
    role: "Product concept reel, AIQoD",
    type: "reel",
    aspectRatio: "9/16",
  },
];

export const podcastMarketingReels: VideoItem[] = [
  {
    id: "IhJ1hZ_QbsQ",
    title: "How a Family Vacation Moved AIQoD from RPA to AI | Anil Nair",
    role: "Podcast marketing reel, created using Claude",
    type: "reel",
    aspectRatio: "9/16",
  },
  {
    id: "heZTNeVwEdE",
    title: "We Run On It Before We Sell It | Anil Nair, AIQoD",
    role: "Podcast marketing reel, created using Claude",
    type: "reel",
    aspectRatio: "9/16",
  },
  {
    id: "grutg13BOmQ",
    title: "When AI Fails, Someone Asks Why",
    role: "Podcast marketing reel, created using Claude",
    type: "reel",
    aspectRatio: "9/16",
  },
  {
    id: "nhncQTMh1os",
    title: "Who Maintains 40,000 Lines of AI-Generated Code?",
    role: "Podcast marketing reel, created using Claude",
    type: "reel",
    aspectRatio: "9/16",
  },
  {
    id: "ZhJPmobmj-g",
    title: "4 Weeks, Not 6 Months: How a Government E-Visa System Went Live",
    role: "Podcast marketing reel, created using Claude",
    type: "reel",
    aspectRatio: "9/16",
  },
];

export const cataloguePages: string[] = [
  "catalogue-01.webp",
  "catalogue-02.webp",
  "catalogue-03.webp",
  "catalogue-04.webp",
  "catalogue-05.webp",
  "catalogue-06.webp",
  "catalogue-07.webp",
  "catalogue-08.webp",
  "catalogue-09.webp",
  "catalogue-10.webp",
  "catalogue-11.webp",
  "catalogue-12.webp",
  "catalogue-13.webp",
];
