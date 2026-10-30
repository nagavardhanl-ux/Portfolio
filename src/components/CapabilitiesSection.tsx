"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";
import { whatIDo } from "@/data/content";
import { capabilityAnchors } from "@/data/whatIDo";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="cap-editorial">
      {/* LEFT: sticky intro */}
      <aside className="cap-sticky" aria-label="Capabilities overview">
        <div className="cap-sticky__inner">
          <h2 id="do-title" className="cap-sticky__heading">
            One person, end to end
          </h2>
          <p className="cap-sticky__intro">
            Product marketing, demand generation, content, websites and
            AI-led execution, from the brief to the thing that ships.
          </p>
        </div>
      </aside>

      {/* RIGHT: accordion */}
      <div className="cap-accordion" role="list" aria-label="Capability details">
        {whatIDo.map((cap, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={cap.title}
              className={`cap-acc-item ${isOpen ? "cap-acc-item--open" : ""}`}
              role="listitem"
            >
              <button
                type="button"
                className="cap-acc-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`cap-panel-${idx}`}
              >
                <span className="cap-acc-trigger__num">{pad(idx + 1)}</span>
                <span className="cap-acc-trigger__title">{cap.title}</span>
                <span className="cap-acc-trigger__icon" aria-hidden="true">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </button>

              <div
                id={`cap-panel-${idx}`}
                className="cap-acc-panel"
                role="region"
                aria-labelledby={`cap-trigger-${idx}`}
                hidden={!isOpen}
              >
                <p className="cap-acc-panel__body">{cap.body}</p>
                <Link
                  href={`/what-i-do/#${capabilityAnchors[idx]}`}
                  className="cap-acc-panel__link"
                >
                  <span>See full process</span>
                  <ArrowRight className="cap-acc-panel__arrow" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
