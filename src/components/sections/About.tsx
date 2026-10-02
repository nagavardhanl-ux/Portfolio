"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Clock, Globe, Share2, Users } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const stats = [
  { label: "Years Professional Experience", value: 5, suffix: "+", icon: Clock },
  { label: "Company Websites Shipped", value: 2, suffix: "", icon: Globe },
  { label: "B2B Leads Generated", value: 1000, suffix: "+", icon: Users },
  { label: "Social Platforms Managed", value: 4, suffix: "", icon: Share2 },
];

const differentiators = [
  "Ships full products — brand, website, copy — without a dev team, using AI-native tools.",
  "Built ICPs and ran multi-sequence email campaigns that generated 1,000+ B2B leads.",
  "Manages content and campaigns across 4 platforms end-to-end.",
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-accent-flame/5 blur-[120px]" />
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            The <span className="gradient-text">AI-Native</span> <br />
            Marketer
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
            <p>
              I&apos;m a Digital Marketing Executive at AIQoD, where I own marketing
              end-to-end for a multi-product enterprise AI company — from
              rebuilding the company website to launching an entirely new
              product line from scratch.
            </p>
            <p>
              My edge is using AI as leverage across the whole stack. I rebuilt
              AIQoD&apos;s website and built VentureHub360 — a completely new
              brand and site — on Lovable and Antigravity, no traditional dev
              team required. Then I wrote the product copy, built the ICPs, and
              ran the campaigns that took Smart AI Investor and Startup Pitch
              Analyser to market.
            </p>
            <div className="glass-card border-accent-flame/10 bg-accent-flame/5 p-6">
              <p className="italic text-text-primary">
                &quot;At AIQoD, I own the VentureHub360 brand end-to-end — website,
                sales decks, product copy, and outreach — wiring AI tools into
                every stage of the marketing stack.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat) => (
            <TiltCard
              key={stat.label}
              className="glass-card flex flex-col items-center justify-center p-8 text-center"
              maxTilt={6}
            >
              <stat.icon size={22} className="mb-3 text-accent-teal" strokeWidth={1.5} />
              <span className="mb-2 text-5xl font-bold text-accent-flame">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                {stat.label}
              </span>
            </TiltCard>
          ))}

          <div className="relative col-span-2 mt-4 overflow-hidden glass-card p-10">
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-teal/10 blur-[80px]" />
            <h3 className="mb-6 text-xl font-bold gradient-text">
              Core Differentiators
            </h3>
            <ul className="space-y-4">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-flame" />
                  <span className="text-base text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
