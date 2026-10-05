import type { Metadata } from "next";
import { abs, site } from "./config";
import { metaFor } from "./routes";

/** Per-route title, description, canonical, OpenGraph and Twitter card from routes.ts. */
export function pageMetadata(path: string): Metadata {
  const m = metaFor(path);
  const url = abs(m.path);
  const image = { url: abs(site.ogImage), width: 1200, height: 630, alt: `${site.name}, B2B marketer` };
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: m.title,
      description: m.description,
      images: [image],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [image.url],
    },
  };
}
