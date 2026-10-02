"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar, type LucideIcon, Sparkles } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  icon: LucideIcon;
  highlights: string[];
  isCurrent: boolean;
}

const experiences: ExperienceEntry[] = [
  {
    company: "AIQoD (Roots Innovation Labs)",
    title: "Marketing Executive",
    period: "May 2026 - Present",
    icon: Sparkles,
    highlights: [
      "Promoted to full-time Marketing Executive after six months as a marketing consultant.",
      "Owns social media across Instagram, Facebook, LinkedIn and Twitter/X, producing AI avatar videos with HeyGen and promo edits in Canva.",
      "Owns ICPs and multi-sequence email campaigns, tracking open rates and reworking underperforming sequences.",
    ],
    isCurrent: true,
  },
  {
    company: "AIQoD (Roots Innovation Labs)",
    title: "Marketing Executive, Consultant",
    period: "Nov 2025 - May 2026",
    icon: Sparkles,
    highlights: [
      "Rebuilt AIQoD's main website (WordPress → Lovable + Antigravity) and built VentureHub360 as a completely new brand and website from scratch.",
      "Owned the VentureHub360 brand — brand kit, sales decks, and all product copy for Smart AI Investor and Startup Pitch Analyser.",
    ],
    isCurrent: false,
  },
  {
    company: "AIQoD (Roots Innovation Labs)",
    title: "Marketing Intern",
    period: "Aug 2025 - Nov 2025",
    icon: Sparkles,
    highlights: [
      "Generated 1,000+ targeted B2B leads using Apollo and Seamless.AI to support sales outreach.",
      "Created content for emails, blogs, brochures and presentations; designed Canva creatives and AI-generated short videos.",
      "Researched and shortlisted partnership opportunities for the business development team.",
    ],
    isCurrent: false,
  },
  {
    company: "L V L Enterprises",
    title: "Sourcing & Vendor Relationship Manager",
    period: "Oct 2023 - Oct 2024",
    icon: Briefcase,
    highlights: [
      "Negotiated vendor rates and strengthened partnerships, reducing procurement costs by 15% without compromising quality.",
      "Conducted market and pricing research to improve brand positioning and sourcing decisions.",
      "Designed product catalogues and client-facing marketing materials in Canva.",
    ],
    isCurrent: false,
  },
  {
    company: "Mettu Anji Reddy Convention Hall",
    title: "Event & Venue Manager",
    period: "Jun 2021 - Aug 2023",
    icon: Calendar,
    highlights: [
      "Coordinated 50+ events — weddings, corporate functions, school events — with a focus on client satisfaction.",
      "Created digital posters and flyers for social media promotions using Canva.",
      "Improved referral bookings through vendor coordination and word-of-mouth marketing.",
    ],
    isCurrent: false,
  },
];

function TimelineCard({
  exp,
  index,
  total,
  scrollYProgress,
}: {
  exp: ExperienceEntry;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = Math.max(0, segment * (index - 0.6));
  const mid = segment * (index + 0.4);
  const end = Math.min(1, segment * (index + 1.4));

  const scale = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.45, 1, 0.45]);

  return (
    <motion.div style={{ scale, opacity }} className="w-[82vw] shrink-0 sm:w-[380px]">
      <TiltCard
        className={`glass-card group flex h-full flex-col p-8 transition-colors duration-300 hover:border-accent-flame/50 ${
          exp.isCurrent ? "border-accent-flame/40 bg-accent-flame/10" : ""
        }`}
        maxTilt={6}
      >
        <div className="mb-6 flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-flame/40 text-accent-flame">
            <exp.icon size={16} />
          </div>
          <div>
            <h3 className="mb-1 text-lg font-bold leading-tight text-text-primary transition-colors group-hover:text-accent-flame">
              {exp.company}
            </h3>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-teal">
              {exp.title}
            </p>
          </div>
        </div>

        <span className="mb-6 w-fit whitespace-nowrap rounded-full border border-border-faint bg-bg-primary/50 px-3 py-1 font-mono text-xs text-text-secondary">
          {exp.period}
        </span>

        <ul className="space-y-3">
          {exp.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
              <ArrowUpRight size={14} className="mt-1 shrink-0 text-accent-flame/70" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </TiltCard>
    </motion.div>
  );
}

export default function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current && wrapperRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = wrapperRef.current.offsetWidth;
        // Guarantee real scroll travel even on very wide screens where the
        // cards alone might not overflow the viewport by much (or at all) —
        // without this, the row just sits static with nothing to scroll.
        const minTravel = viewportWidth * 0.6;
        setScrollDistance(Math.max(minTravel, trackWidth - viewportWidth));
      }
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent-teal/5 blur-[120px]" />

      <div className="section-container pb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          The <span className="gradient-text">Journey</span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-text-secondary">
          A professional timeline from event management to AI-native marketing.
        </p>
      </div>

      <div ref={wrapperRef} className="relative" style={{ height: `${100 + experiences.length * 45}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-8 pl-[6vw] pr-[6vw]">
            {experiences.map((exp, index) => (
              <TimelineCard
                key={`${exp.company}-${exp.period}`}
                exp={exp}
                index={index}
                total={experiences.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>

          <div className="absolute bottom-10 h-1 w-48 overflow-hidden rounded-full bg-border-subtle">
            <motion.div style={{ width: progressWidth }} className="h-full bg-accent-flame" />
          </div>
        </div>
      </div>
    </section>
  );
}
