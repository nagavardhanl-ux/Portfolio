import type { ReactNode } from "react";

export default function SectionHead({
  index,
  label,
  title,
  intro,
  id,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <header className="section-head reveal">
      <p className="marker">
        <span className="num">{index}</span>
        <b>{label}</b>
      </p>
      <div className="section-head__text">
        <h2 className="h2" id={id}>
          {title}
        </h2>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </header>
  );
}
