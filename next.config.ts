import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://nagavardhanl-ux.github.io/Portfolio/,
// so production builds need the repo name as a path prefix. Dev stays at "/".
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  // Static HTML export, written to ./dist instead of ./out
  output: "export",
  distDir: "dist",
  basePath,
  // Emit /websites/index.html so GitHub Pages resolves folder URLs
  trailingSlash: true,
  // The image optimizer needs a server; screenshots are pre-optimised by scripts/screenshots.mjs
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
