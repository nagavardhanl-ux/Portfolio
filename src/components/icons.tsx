import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  ...props,
});

export const ArrowRight = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)} data-arrow="">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const ArrowLeft = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M13 8H3M7 4 3 8l4 4" />
  </svg>
);

export const ArrowUpRight = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)} data-external="">
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

export const ArrowDown = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M8 3v10M4 9l4 4 4-4" />
  </svg>
);

export const Chevron = ({ size = 12, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

export const Close = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

export const MenuIcon = ({ size = 18, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M2.5 5.5h11M2.5 10.5h11" />
  </svg>
);

export const Sun = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <circle cx="8" cy="8" r="2.75" />
    <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" />
  </svg>
);

export const Moon = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" />
  </svg>
);

export const Play = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M5 3.5v9l7-4.5-7-4.5Z" fill="currentColor" />
  </svg>
);

export const Download = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
  </svg>
);

export const Copy = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
    <path d="M10.5 5.5V3.5A1 1 0 0 0 9.5 2.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
  </svg>
);

export const Check = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="m3 8.5 3 3 7-7" />
  </svg>
);

export const Alert = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.5M8 11h.01" />
  </svg>
);

export const Expand = ({ size = 16, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M9.5 2.5h4v4M6.5 13.5h-4v-4M13.5 2.5 9 7M2.5 13.5 7 9" />
  </svg>
);
