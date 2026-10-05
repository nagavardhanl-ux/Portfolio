/** Site-wide settings. Everything a non-developer might need to change lives here. */

/** "/Portfolio" in production builds, "" in dev. Set in next.config.ts. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Nagavardhan Reddy Lella",
  shortName: "Nagavardhan",
  /** Absolute URL of the site root (with trailing slash). Used for canonical, OpenGraph and sitemap. */
  url: "https://nagavardhanl-ux.github.io/Portfolio/",
  ogImage: "og/og-default.png",
};

export const contact = {
  email: "nagavardhan1437@gmail.com",
  phone: "+91 90870 14237",
  phoneHref: "tel:+919087014237",
  linkedin: "https://www.linkedin.com/in/nagavardhan-reddy-lella/",
};

/**
 * CV download. The PDF lives at public/cv/Nagavardhan-Reddy-Lella-CV.pdf.
 * Replace that file to update the CV. Set `available: false` to disable every
 * "Download CV" button without touching layout.
 */
export const cv = {
  available: true,
  path: "cv/Nagavardhan-Reddy-Lella-CV.pdf",
  fileName: "Nagavardhan-Reddy-Lella-CV.pdf",
};

/**
 * Contact form.
 * PLACEHOLDER: create a form at formspree.io and paste its ID (the part after /f/).
 * While empty, the form says it is not connected yet and offers email instead.
 */
export const formspreeId = "";

/** Prefix a public/ file path with the base path, for plain <img>, <a href> and fetch. */
export const asset = (path: string) => `${BASE_PATH}/${path.replace(/^\//, "")}`;

/** Absolute URL for a site path, e.g. abs("/websites/"). */
export const abs = (path: string) => `${site.url}${path.replace(/^\//, "")}`;
