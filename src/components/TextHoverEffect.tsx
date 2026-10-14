"use client";

import { useId, useRef } from "react";

/**
 * High-performance text hover effect without React re-renders on mouse movement:
 * The radial gradient center is updated directly via DOM attributes on pointer moves,
 * keeping motion at 60-120fps off the React reconciliation loop.
 */
export default function TextHoverEffect({ text }: { text: string }) {
  const id = useId().replace(/:/g, "");
  const svg = useRef<SVGSVGElement>(null);
  const gradRef = useRef<SVGRadialGradientElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  // Convert the pointer to SVG user units so the glow sits exactly under the cursor.
  // Direct DOM update eliminates 60-120 React re-renders/sec during pointer moves.
  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const el = svg.current;
    const grad = gradRef.current;
    const ctm = el?.getScreenCTM();
    if (!el || !ctm || !grad) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    grad.setAttribute("cx", pt.x.toFixed(1));
    grad.setAttribute("cy", pt.y.toFixed(1));
  };

  const onEnter = () => {
    if (textRef.current) textRef.current.style.opacity = "1";
  };

  const onLeave = () => {
    if (textRef.current) textRef.current.style.opacity = "0";
  };

  // Exactly matching live website size, width, and alignment
  const textProps = {
    x: 150,
    y: 34,
    textLength: 292,
    lengthAdjust: "spacingAndGlyphs" as const,
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
    className: "text-hover__text",
  };

  return (
    <svg
      ref={svg}
      className="text-hover"
      viewBox="0 0 300 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
    >
      <defs>
        <radialGradient
          ref={gradRef}
          id={`reveal-${id}`}
          gradientUnits="userSpaceOnUse"
          r={60}
          cx={150}
          cy={32}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id={`mask-${id}`}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#reveal-${id})`} />
        </mask>
      </defs>

      {/* Solid base: always visible, the only layer on touch / reduced motion. */}
      <text {...textProps} className="text-hover__text text-hover__base">
        {text}
      </text>

      {/* Accent reveal under the cursor: champagne gold fill with smooth transition. */}
      <text
        ref={textRef}
        {...textProps}
        className="text-hover__text text-hover__reveal"
        fill="#D5B77A"
        mask={`url(#mask-${id})`}
        style={{ opacity: 0, transition: "opacity 180ms ease" }}
      >
        {text}
      </text>
    </svg>
  );
}
