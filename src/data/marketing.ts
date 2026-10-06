/**
 * Marketing work page assets (/marketing). This page shows artefacts, not
 * descriptions: one-line captions only.
 *
 * Images: every item without `src` renders as a marked placeholder at the same
 * aspect ratio, so dropping in a real file never moves the layout. Put images in
 * public/work/ and set src to e.g. "work/brochure-01.webp".
 *
 * Videos: set `youtube` to a YouTube link or video ID. Nothing loads until the
 * visitor presses play.
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
  /** YouTube URL (watch, youtu.be or shorts) or bare video ID. Empty = placeholder. */
  youtube?: string;
}

export const collateral: Asset[] = [
  { id: "col-1", title: "Product brochure", kind: "Brochure", ratio: 3 / 4 },
  { id: "col-2", title: "Product one-pager", kind: "One-pager", ratio: 3 / 4 },
  { id: "col-3", title: "Pricing sheet", kind: "Pricing sheet", ratio: 3 / 4 },
  { id: "col-4", title: "Event banner", kind: "Banner", ratio: 16 / 9 },
  { id: "col-5", title: "Launch poster", kind: "Poster", ratio: 2 / 3 },
  { id: "col-6", title: "Web banner", kind: "Banner", ratio: 16 / 9 },
];

export const icpWork: Asset[] = [
  { id: "icp-1", title: "ICP, product A", kind: "ICP", ratio: 3 / 4 },
  { id: "icp-2", title: "ICP, product B", kind: "ICP", ratio: 3 / 4 },
  { id: "cmp-1", title: "Competitor comparison", kind: "Comparison", ratio: 3 / 4 },
  { id: "cmp-2", title: "Positioning one-pager", kind: "Positioning", ratio: 3 / 4 },
];

export const videos: Video[] = [
  { id: "vid-1", title: "AI avatar video", kind: "AI avatar" },
  { id: "vid-2", title: "AI avatar video", kind: "AI avatar" },
  { id: "vid-3", title: "Product video", kind: "Product" },
];

/** youtube-nocookie embed URL from a YouTube link or ID, or null if unrecognised. */
export function youtubeEmbed(input?: string): string | null {
  if (!input) return null;
  const id =
    input.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)?.[1] ??
    (/^[\w-]{11}$/.test(input) ? input : null);
  return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : null;
}
