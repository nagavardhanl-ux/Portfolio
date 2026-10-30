/** Site-wide settings. Everything a non-developer might need to change lives here. */

/** "/Portfolio" in production builds, "" in dev. Set in next.config.ts. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Nagavardhan Lella",
  shortName: "Nagavardhan Lella",
  /** Absolute URL of the site root (with trailing slash). Used for canonical, OpenGraph and sitemap. */
  url: "https://nagavardhanl-ux.github.io/Portfolio/",
  ogImage: "og/og-default.png",
};

export const contact = {
  email: "nagavardhan1437@gmail.com",
  linkedin: "https://www.linkedin.com/in/nagavardhan-reddy-lella/",
};

/**
 * Contact form with Web3Forms.
 * Get a free Access Key at https://web3forms.com (delivered to your email instantly).
 * You can also set NEXT_PUBLIC_WEB3FORMS_KEY in your environment or .env.local file.
 */
export const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4bf2a59d-46b5-4a66-99ec-8fd9b9e2b592";

/** Prefix a public/ file path with the base path, for plain <img>, <a href> and fetch. */
export const asset = (path: string) => `${BASE_PATH}/${path.replace(/^\//, "")}`;

/** Absolute URL for a site path, e.g. abs("/websites/"). */
export const abs = (path: string) => `${site.url}${path.replace(/^\//, "")}`;
