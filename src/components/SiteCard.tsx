import type { ReactNode } from "react";
import type { Site } from "@/data/sites";
import { ArrowUpRight } from "./icons";
import SiteTags from "./SiteTags";

/**
 * A site as a large visual with its name in the display face beneath and the two
 * mono tags. No box: the media frame carries the only hairline, which brightens
 * to the accent on hover while the card lifts slightly.
 *
 * `media` is the visual (a Clip on the home page, a SiteEmbed on /websites).
 */
export default function SiteCard({
  site,
  index,
  media,
  size = "regular",
  detailed = false,
  headingLevel = 3,
}: {
  site: Site;
  index: number;
  media: ReactNode;
  size?: "lead" | "regular";
  detailed?: boolean;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className={`site-card site-card--${size} reveal`} aria-labelledby={`card-${site.id}`}>
      <div className="site-card__media">{media}</div>
      <div className="site-card__text">
        <div className="site-card__meta">
          <span className="label num">{String(index).padStart(2, "0")}</span>
          <SiteTags site={site} detailed={detailed} />
        </div>
        <H id={`card-${site.id}`} className={size === "lead" ? "h2" : "h3"}>
          {site.name}
        </H>
        <p className="body">{site.line}</p>
        <p className="site-card__links">
          <a className="arrow-link" data-external="" data-cursor="VISIT" href={site.embedUrl} target="_blank" rel="noopener noreferrer">
            Open live site <ArrowUpRight />
            <span className="sr-only">(opens {site.name} in a new tab)</span>
          </a>
          {site.extraLinks?.map((l) => (
            <a key={l.href} className="arrow-link" data-external="" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </p>
      </div>
    </article>
  );
}
