import type { MetadataRoute } from "next";
import { abs } from "@/lib/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
      },
    ],
    sitemap: abs("sitemap.xml"),
  };
}
