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

/** BreadcrumbList helper for Schema.org hierarchy */
function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function aboutStructuredData() {
  const meta = metaFor("/about/");
  const personId = `${site.url}#person`;
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${abs("/about/")}#webpage`,
        url: abs("/about/"),
        name: meta.title,
        description: meta.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
        mainEntity: { "@id": personId },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "About", path: "/about/" },
      ]),
    ],
  };
}

export function websitesStructuredData() {
  const meta = metaFor("/websites/");
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${abs("/websites/")}#webpage`,
        url: abs("/websites/"),
        name: meta.title,
        description: meta.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
        hasPart: [
          {
            "@type": "WebSite",
            name: "AIQoD",
            url: "https://aiqod.com/",
            description: "Enterprise Intelligence Platform that gets AI agents into production.",
          },
          {
            "@type": "WebSite",
            name: "VentureHub360",
            url: "https://www.venturehub360.com/",
            description: "Unified startup ecosystem & investor scoring platform.",
          },
        ],
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Websites", path: "/websites/" },
      ]),
    ],
  };
}

export function whatIDoStructuredData() {
  const meta = metaFor("/what-i-do/");
  const personId = `${site.url}#person`;
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${abs("/what-i-do/")}#webpage`,
        url: abs("/what-i-do/"),
        name: meta.title,
        description: meta.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
        hasPart: [
          {
            "@type": "Service",
            name: "Product Marketing",
            description: "Positioning, messaging frameworks, competitive intelligence, and GTM strategy.",
            provider: { "@id": personId },
          },
          {
            "@type": "Service",
            name: "Demand Generation",
            description: "Inbound funnel design, targeted outbound sequences, and account-based qualification.",
            provider: { "@id": personId },
          },
          {
            "@type": "Service",
            name: "Content and LinkedIn",
            description: "Topic clusters, thought leadership, founder carousels, and organic social growth.",
            provider: { "@id": personId },
          },
          {
            "@type": "Service",
            name: "Websites and SEO",
            description: "High-performance company websites, programmatic technical SEO, and conversion optimization.",
            provider: { "@id": personId },
          },
          {
            "@type": "Service",
            name: "AI-Led Execution",
            description: "AI-accelerated production, script automation, avatar generation, and rapid iterations.",
            provider: { "@id": personId },
          },
        ],
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "What I Do", path: "/what-i-do/" },
      ]),
    ],
  };
}

export function galleryStructuredData() {
  const meta = metaFor("/gallery/");
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${abs("/gallery/")}#webpage`,
        url: abs("/gallery/"),
        name: meta.title,
        description: meta.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery/" },
      ]),
    ],
  };
}

export function contactStructuredData() {
  const meta = metaFor("/contact/");
  const personId = `${site.url}#person`;
  const siteId = `${site.url}#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${abs("/contact/")}#webpage`,
        url: abs("/contact/"),
        name: meta.title,
        description: meta.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId },
        mainEntity: {
          "@id": personId,
          "@type": "Person",
          name: site.name,
          email: contact.email,
          sameAs: [contact.linkedin],
        },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact/" },
      ]),
    ],
  };
}
