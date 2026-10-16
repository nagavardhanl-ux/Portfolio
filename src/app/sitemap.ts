import type { MetadataRoute } from "next";
import { abs } from "@/lib/config";
import { routeMeta } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routeMeta
    .filter((r) => !r.hidden)
    .map((r) => ({
      url: abs(r.path),
      lastModified,
      changeFrequency: "monthly",
      priority: r.path === "/" ? 1 : 0.7,
    }));
}
