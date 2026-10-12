import type { ReactNode } from "react";
import type { Site } from "@/data/sites";
import { ArrowUpRight } from "./icons";
import BentoDevice from "./BentoDevice";

/**
 * A site card in the bento grid: displays the website directly inside a realistic
 * MacBook Pro or Google Pixel 10 hardware frame, with its company name and description beneath.
 */
export default function SiteCard({
  site,
  media,
  size = "regular",
  headingLevel = 3,
}: {
  site: Site;
  index?: number;
  media?: ReactNode;
  size?: "lead" | "regular";
  detailed?: boolean;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className={`site-card site-card--${size} reveal`} aria-labelledby={`card-${site.id}`}>
      <div className="site-card__media">
        {media ? media : <BentoDevice site={site} size={size} />}
      </div>
      <div className="site-card__text">
        <H id={`card-${site.id}`} className={size === "lead" ? "h2" : "h3"}>
          <a
            className="site-card__name-link"
            data-cursor="VISIT"
            href={site.embedUrl || site.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.name}
            <ArrowUpRight className="site-card__name-icon" />
            <span className="sr-only">(opens {site.name} in a new tab)</span>
          </a>
        </H>
        <p className="body">{site.line}</p>
      </div>
    </article>
  );
}
