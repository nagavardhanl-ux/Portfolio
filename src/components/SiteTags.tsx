import type { Site } from "@/data/sites";

/**
 * The two labels every site carries: what I did (Built / Managed) and what it
 * is (Live company site / Concept build). `detailed` swaps in the longer role
 * label, e.g. "Built from scratch", where there's room for it.
 */
export default function SiteTags({ site, detailed = false }: { site: Site; detailed?: boolean }) {
  return (
    <span className="tags">
      <span className="tag">{detailed ? (site.roleDetail ?? site.role) : site.role}</span>
      <span className="tag" data-live={site.status === "Live company site" ? "" : undefined}>
        {site.status}
      </span>
    </span>
  );
}
