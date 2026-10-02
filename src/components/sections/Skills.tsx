"use client";

import { motion } from "framer-motion";
import { Cpu, Mail, PenLine, Share2, Target, Video } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const skillCategories = [
  {
    title: "Marketing Execution",
    icon: Target,
    skills: ["Social Media Management", "B2B Lead Generation", "ICP Development", "Competitor Research"],
  },
  {
    title: "AI Build Tools",
    icon: Cpu,
    skills: ["Lovable AI", "Antigravity", "ChatGPT", "Perplexity"],
  },
  {
    title: "Content & Brand",
    icon: PenLine,
    skills: ["Content & Blog Writing", "SEO Content Writing", "Marketing Collateral", "Brand Kit Development"],
  },
  {
    title: "Outreach & Sales Tools",
    icon: Mail,
    skills: ["Apollo", "Seamless.AI", "Cold Email Sequencing", "Open-Rate Optimization"],
  },
  {
    title: "Video & Design",
    icon: Video,
    skills: ["Canva", "Canva Video Editor", "HeyGen (AI Avatars)"],
  },
  {
    title: "Platforms",
    icon: Share2,
    skills: ["Instagram", "Facebook", "LinkedIn", "Twitter / X"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-teal/5 blur-[100px]" />
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          Expertise & <span className="gradient-text">Capabilities</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-text-secondary"
        >
          The tools and skills I actually use, day to day, to take a product
          from idea to market.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard className="glass-card flex h-full flex-col p-8" maxTilt={6}>
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-accent-flame/10 p-3 text-accent-flame">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold gradient-text">{category.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border-subtle bg-bg-primary px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
