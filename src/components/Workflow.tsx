import { aiWorkflow } from "@/data/content";

/**
 * The AI stack as one process: stages on a thin connecting line, tools under each.
 * Horizontal from 768px, a vertical line on phones.
 */
export default function Workflow({ label = "AI workflow" }: { label?: string }) {
  return (
    <ul className="workflow reveal" role="list" aria-label={label}>
      {aiWorkflow.map((s, i) => (
        <li key={s.step} className="workflow__stage">
          <span className="workflow__node" aria-hidden="true" />
          <span className="label num">{String(i + 1).padStart(2, "0")}</span>
          <p className="workflow__name">{s.step}</p>
          <ul className="workflow__tools" role="list">
            {s.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
