import type { ReactNode } from "react";

/**
 * Section heading: title and optional intro. The numbered labels ("01 Selected
 * work" etc.) were removed; `index` and `label` are kept for callers but unused.
 */
export default function SectionHead({
  title,
  intro,
  id,
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <header className="section-head section-head--plain reveal">
      <div className="section-head__text">
        <h2 className="h2" id={id}>
          {title}
        </h2>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </header>
  );
}
