"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import TiltCard from "@/components/ui/TiltCard";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  icon: Icon,
  gradient,
  tags,
  role,
  timeline,
}: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TiltCard className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-sm transition-colors duration-300 hover:border-accent-flame/50">
        <div className="relative h-64 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`}
            >
              <Icon size={56} className="text-text-primary/70" strokeWidth={1.25} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />

          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/80 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div>
              <h4 className="mb-2 text-xl font-bold text-text-primary">{title}</h4>
              <p className="mb-6 text-sm text-text-secondary">{description}</p>
              <Link
                href={`/projects/${id}`}
                className="mx-auto flex w-fit items-center gap-2 rounded-xl bg-accent-flame px-6 py-2 font-bold text-black transition-all hover:bg-white"
              >
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-1 text-lg font-bold text-text-primary">{title}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-flame">{role}</p>
            </div>
            <span className="whitespace-nowrap rounded border border-border-subtle bg-bg-primary/50 px-2 py-1 text-xs text-text-secondary">
              {timeline}
            </span>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-subtle bg-bg-primary px-2 py-1 text-[10px] text-text-secondary transition-colors group-hover:border-accent-flame/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
