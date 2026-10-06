"use client";

import { useEffect, useMemo, useState } from "react";
import { buildIcp, industries, regions, sizes, type IcpResult } from "@/data/icp";
import { Check, Copy } from "./icons";

type Picks = { industry: string; size: string; region: string };

function Choice({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: keyof Picks;
  legend: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="choice">
      <legend>
        <span className="h4">{legend}</span>
        <span className="label">{value ? options.find((o) => o.id === value)?.label : "Pick one"}</span>
      </legend>
      <div className="choice__opts">
        {options.map((o) => (
          <label key={o.id} className="chip">
            <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");
  useEffect(() => {
    if (state === "idle") return;
    const t = window.setTimeout(() => setState("idle"), 1800);
    return () => window.clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("failed");
    }
  };

  return (
    <button type="button" className="btn btn--quiet btn--sm" onClick={copy} aria-live="polite">
      {state === "done" ? <Check size={14} /> : <Copy size={14} />}
      {state === "done" ? "Copied" : state === "failed" ? "Copy blocked" : label}
    </button>
  );
}

const asText = (r: IcpResult) =>
  [
    `Who to sell to\n${r.who}\n${r.regionNote}`,
    `Pain points\n${r.pains.map((p, i) => `${i + 1}. ${p}`).join("\n")}`,
    `Job titles to target\n${r.titles.join(", ")}`,
    `Opening line\n${r.opener}`,
  ].join("\n\n");

export default function IcpBuilder() {
  const [picks, setPicks] = useState<Picks>({ industry: "", size: "", region: "" });
  const set = (k: keyof Picks) => (v: string) => setPicks((p) => ({ ...p, [k]: v }));
  const result = useMemo(() => buildIcp(picks.industry, picks.size, picks.region), [picks]);
  const done = [picks.industry, picks.size, picks.region].filter(Boolean).length;

  return (
    <div className="icp">
      <form className="icp__form" onSubmit={(e) => e.preventDefault()} aria-label="ICP inputs">
        <Choice name="industry" legend="Industry" options={industries} value={picks.industry} onChange={set("industry")} />
        <Choice name="size" legend="Company size" options={sizes} value={picks.size} onChange={set("size")} />
        <Choice name="region" legend="Region" options={regions} value={picks.region} onChange={set("region")} />
        <div>
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={() => setPicks({ industry: "", size: "", region: "" })}
            disabled={done === 0}
          >
            Reset
          </button>
        </div>
      </form>

      <section className="icp__result" aria-labelledby="icp-result-title" aria-live="polite">
        <div className="icp__head">
          <h2 id="icp-result-title" className="label">
            {result ? "Your ICP" : "Result"}
          </h2>
          {result ? (
            <CopyButton text={asText(result)} label="Copy all" />
          ) : (
            <span className="steps" aria-label={`${done} of 3 chosen`}>
              {[0, 1, 2].map((i) => (
                <i key={i} data-done={i < done} />
              ))}
            </span>
          )}
        </div>

        {result ? (
          <div className="icp__body">
            <div className="icp__block">
              <h3 className="label">Who to sell to</h3>
              <p>{result.who}</p>
              <p className="icp__note">{result.regionNote}</p>
            </div>
            <div className="icp__block">
              <h3 className="label">Three pain points</h3>
              <ul className="icp__list" role="list">
                {result.pains.map((p) => (
                  <li key={p}>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="icp__block">
              <h3 className="label">Three job titles to target</h3>
              <ul className="titles" role="list">
                {result.titles.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="icp__block">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <h3 className="label">Sample opening line</h3>
                <CopyButton text={result.opener} label="Copy line" />
              </div>
              <p className="opener">{result.opener}</p>
            </div>
          </div>
        ) : (
          <div className="icp__empty">
            <p className="h3">
              {done === 0 ? "Pick an industry, a size and a region." : `${3 - done} more to go.`}
            </p>
            <div className="icp__skeleton" aria-hidden="true">
              {["Who to sell to", "Three pain points", "Three job titles", "Opening line"].map((l) => (
                <div key={l}>
                  <span className="label">{l}</span>
                  <div className="ph-lines">
                    <i />
                    <i />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
