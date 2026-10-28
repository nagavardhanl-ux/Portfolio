export interface VideoItem {
  id: string;
  title: string;
  role: string;
  type?: "video";
  platform?: "youtube";
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
