/**
 * Marketing page assets. Every item without `src` renders as a marked placeholder
 * at the same aspect ratio, so dropping in a real file never moves the layout.
 * Put images in public/work/ and set src to e.g. "work/brochure-01.webp".
 */
export interface Asset {
  id: string;
  title: string;
  kind: string;
  /** width / height, e.g. 3/4 for a portrait brochure page. */
  ratio: number;
  src?: string;
  alt?: string;
}

export interface Video {
  id: string;
  title: string;
  kind: string;
  /** YouTube or Vimeo embed URL. Empty = placeholder. */
  embedUrl?: string;
  poster?: string;
}

export const campaignAssets: Asset[] = [
  { id: "camp-1", title: "Partner recruitment sequence", kind: "Email campaign", ratio: 4 / 3 },
  { id: "camp-2", title: "Product line outreach", kind: "LinkedIn campaign", ratio: 4 / 3 },
  { id: "camp-3", title: "Investor outreach", kind: "Email campaign", ratio: 4 / 3 },
];

export const icpAssets: Asset[] = [
  { id: "icp-1", title: "ICP sample, product A", kind: "ICP document", ratio: 3 / 4 },
  { id: "icp-2", title: "ICP sample, product B", kind: "ICP document", ratio: 3 / 4 },
];

export const collateral: Asset[] = [
  { id: "col-1", title: "Product brochure", kind: "Brochure", ratio: 3 / 4 },
  { id: "col-2", title: "Product one-pager", kind: "One-pager", ratio: 3 / 4 },
  { id: "col-3", title: "Pricing sheet", kind: "Pricing sheet", ratio: 3 / 4 },
  { id: "col-4", title: "Event banner", kind: "Banner", ratio: 16 / 9 },
  { id: "col-5", title: "Launch poster", kind: "Poster", ratio: 2 / 3 },
  { id: "col-6", title: "Social creative", kind: "Social", ratio: 1 },
  { id: "col-7", title: "Social creative", kind: "Social", ratio: 1 },
  { id: "col-8", title: "Web banner", kind: "Banner", ratio: 16 / 9 },
];

export const videos: Video[] = [
  { id: "vid-1", title: "AI avatar video", kind: "AI avatar" },
  { id: "vid-2", title: "Product promo", kind: "Product promo" },
  { id: "vid-3", title: "Venue promo video", kind: "Venue video" },
];
