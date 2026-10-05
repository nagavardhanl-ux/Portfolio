"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Site } from "@/data/sites";
import { Alert, ArrowUpRight, Close, Play } from "./icons";
import Shot from "./Shot";

type State = "idle" | "loading" | "ready" | "blocked";

const EVENT = "embed:open";
const TIMEOUT_MS = 15000;

const stateLabel: Record<State, string> = {
  idle: "Screenshot",
  loading: "Loading",
  ready: "Live",
  blocked: "Screenshot",
};

/**
 * Live site preview. Rests as a screenshot; the iframe mounts only on click,
 * and opening one embed closes any other. If the frame never loads (refused or
 * too slow) it falls back to the screenshot plus a link. Below 900px the load
 * control is hidden by CSS, so phones only ever get the screenshot + link.
 */
export default function SiteEmbed({ site, priority = false }: { site: Site; priority?: boolean }) {
  const id = useId();
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number | undefined>(undefined);

  const reset = useCallback(() => {
    window.clearTimeout(timer.current);
    setState("idle");
  }, []);

  // Only one live embed on the page at a time.
  useEffect(() => {
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) reset();
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, [id, reset]);

  // Drop the iframe if the viewport shrinks below the embed breakpoint.
  useEffect(() => {
    if (state === "idle" || state === "blocked") return;
    const mq = window.matchMedia("(max-width: 899px)");
    const onChange = () => mq.matches && reset();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [state, reset]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const load = () => {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: id }));
    setState("loading");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState((s) => (s === "loading" ? "blocked" : s));
    }, TIMEOUT_MS);
  };

  const onFrameLoad = () => {
    window.clearTimeout(timer.current);
    setState((s) => (s === "loading" ? "ready" : s));
  };

  const live = state === "loading" || state === "ready";
  const display = site.embedUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <figure className="embed" aria-label={`${site.name} preview`}>
      <div className="embed__bar">
        <span className="embed__lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="embed__url" title={site.embedUrl}>
          {display}
        </span>
        <span className="embed__state" data-state={state} aria-live="polite">
          {stateLabel[state]}
        </span>
      </div>

      <div className="embed__stage">
        {!live || state === "loading" ? (
          <div className="shot" aria-hidden={live}>
            <Shot
              name={site.shot}
              alt={`Screenshot of the ${site.name} website${site.embedLabel ? `, ${site.embedLabel.toLowerCase()}` : ""}`}
              priority={priority}
            />
          </div>
        ) : null}

        {live && (
          <iframe
            src={site.embedUrl}
            title={`${site.name}, live site`}
            onLoad={onFrameLoad}
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            style={{ visibility: state === "ready" ? "visible" : "hidden" }}
          />
        )}

        {state === "idle" && (
          <div className="embed__overlay embed__load">
            <button type="button" className="btn btn--primary" onClick={load}>
              <Play size={14} /> Load live site{site.embedLabel ? `: ${site.embedLabel}` : ""}
            </button>
          </div>
        )}

        {state === "loading" && (
          <div className="embed__overlay embed__loading" role="status">
            <span className="progress" aria-hidden="true" />
            <span className="label">Loading {site.name}</span>
          </div>
        )}

        {state === "blocked" && (
          <div className="embed__overlay embed__blocked" role="status">
            <Alert size={20} />
            <p>This site didn&apos;t load in a frame here. It works fine in its own tab.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <a className="btn btn--primary btn--sm" href={site.embedUrl} target="_blank" rel="noopener noreferrer">
                Open live site <ArrowUpRight />
              </a>
              <button type="button" className="btn btn--ghost btn--sm" onClick={load}>
                Try again
              </button>
            </div>
          </div>
        )}
      </div>

      <figcaption className="embed__foot">
        <a className="btn btn--ghost btn--sm" href={site.embedUrl} target="_blank" rel="noopener noreferrer">
          Open live site <ArrowUpRight />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        {site.extraLinks?.map((l) => (
          <a key={l.href} className="arrow-link" data-external="" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} <ArrowUpRight />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
        <span className="spacer" />
        {live && (
          <button type="button" className="btn btn--quiet btn--sm" onClick={reset} data-desktop-only="">
            <Close size={14} /> Close live site
          </button>
        )}
      </figcaption>
    </figure>
  );
}
