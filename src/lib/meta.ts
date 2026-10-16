import type { Metadata } from "next";
import { abs, contact, site } from "./config";
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

/**
 * schema.org structured data for the site's home page: a Person (the entity
 * this portfolio is about), the WebSite, and the ProfilePage that ties them
 * together. Helps search engines recognise the person and link out to their
 * professional profiles. Rendered as JSON-LD by the <JsonLd> component.
 */
export function homeStructuredData() {
  const home = metaFor("/");
  const personId = `${site.url}#person`;
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        image: abs(site.ogImage),
        jobTitle: "B2B Marketer",
        description: home.description,
        sameAs: [contact.linkedin],
        knowsAbout: [
          "B2B marketing",
          "Product marketing",
          "Demand generation",
          "Content marketing",
          "Search engine optimization",
          "LinkedIn marketing",
          "Web development",
        ],
        worksFor: [
          { "@type": "Organization", name: "AIQoD", url: "https://aiqod.com/" },
          { "@type": "Organization", name: "VentureHub360", url: "https://www.venturehub360.com/" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site.url,
        name: site.name,
        description: home.description,
        inLanguage: "en-GB",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}#webpage`,
        url: site.url,
        name: home.title,
        description: home.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}
