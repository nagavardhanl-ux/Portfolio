import type { MetadataRoute } from "next";
import { abs } from "@/lib/config";
import { routeMeta } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routeMeta.map((r) => ({
    url: abs(r.path),
    changeFrequency: "monthly",
    priority: r.path === "/" ? 1 : 0.7,
  }));
}
