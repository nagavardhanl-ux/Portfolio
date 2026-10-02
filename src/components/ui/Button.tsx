"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-flame text-black hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,92,53,0.5)]",
  outline:
    "border-2 border-accent-flame text-accent-flame bg-transparent hover:bg-accent-flame/10 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-6 py-2 text-sm",
  md: "px-8 py-4 text-sm md:text-base",
  lg: "px-10 py-5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href"> & { href: string };

export default function Button(props: AsButton | AsLink) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [base, variants[variant], sizes[size], fullWidth ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
