"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-container relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-accent-flame/5 blur-[120px]" />
      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="max-w-xl text-text-secondary">
            Brands, websites, and campaigns I&apos;ve shipped end-to-end — real
            work, real tools, no fluff.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
