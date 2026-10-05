import type { Asset } from "@/data/marketing";
import { asset as assetUrl } from "@/lib/config";

/**
 * Marked placeholder that occupies exactly the box the real asset will.
 * Swap by setting `src` on the asset in src/data/marketing.ts.
 */
export function Placeholder({
  title,
  kind,
  ratio,
  hint,
}: {
  title: string;
  kind: string;
  ratio?: number;
  hint?: string;
}) {
  return (
    <div
      className="ph"
      style={ratio ? { aspectRatio: String(ratio) } : undefined}
      role="img"
      aria-label={`Placeholder for ${kind.toLowerCase()}: ${title}`}
    >
      <span className="ph__flag">Placeholder</span>
      <span className="ph__body">
        <span className="ph__title">{title}</span>
        <span className="label">{kind}</span>
        {hint && <span className="ph__path">{hint}</span>}
      </span>
    </div>
  );
}

/** Real image when `src` is set, otherwise a placeholder at the same ratio. */
export function Media({ item, showHint = true }: { item: Asset; showHint?: boolean }) {
  if (item.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export
      <img
        className="media-img"
        src={assetUrl(item.src)}
        alt={item.alt ?? item.title}
        style={{ aspectRatio: String(item.ratio) }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <Placeholder
      title={item.title}
      kind={item.kind}
      ratio={item.ratio}
      hint={showHint ? `Add image → src/data/marketing.ts · ${item.id}` : undefined}
    />
  );
}

/** Placeholder block for copy that has not been written yet. */
export function PlaceholderText({ what }: { what: string }) {
  return (
    <div className="ph-text" role="note" aria-label={`Placeholder: ${what}`}>
      <span className="ph__flag">Placeholder</span>
      <p className="muted">{what}</p>
      <div className="ph-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
