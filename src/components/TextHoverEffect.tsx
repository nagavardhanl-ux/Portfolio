"use client";

import { useId, useRef, useState } from "react";

/**
 * Text hover effect (after Aceternity UI's TextHoverEffect), without framer-motion:
 * the name is solid (filled, so overlapping font contours never show); under the
 * cursor it lights up in a blue-to-violet gradient. On touch devices and under
 * reduced motion only the solid base shows (CSS in globals.css).
 */
export default function TextHoverEffect({ text }: { text: string }) {
  const id = useId().replace(/:/g, "");
  const svg = useRef<SVGSVGElement>(null);
  const [pos, setPos] = useState({ cx: 150, cy: 32 });
  const [hovered, setHovered] = useState(false);

  // Convert the pointer to SVG user units so the glow sits exactly under the cursor.
  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const el = svg.current;
    const ctm = el?.getScreenCTM();
    if (!el || !ctm) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    setPos({ cx: pt.x, cy: pt.y });
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
    >
      <defs>
        <radialGradient id={`reveal-${id}`} gradientUnits="userSpaceOnUse" r={60} cx={pos.cx} cy={pos.cy}>
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

      {/* Accent reveal under the cursor: solid green, no gradient. */}
      <text
        {...textProps}
        className="text-hover__text text-hover__reveal"
        fill="#D5B77A"
        mask={`url(#mask-${id})`}
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {text}
      </text>
    </svg>
  );
}
