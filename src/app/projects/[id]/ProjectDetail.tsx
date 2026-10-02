"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Clock, User, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectDetail({ id }: { id: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
            <Button href="/">Back to Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="group mb-12 flex items-center gap-2 text-text-secondary transition-colors hover:text-accent-flame"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-mono text-sm uppercase tracking-widest">Back to Projects</span>
        </motion.button>

        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent-flame/20 bg-accent-flame/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent-flame"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
              {project.title.split(" ").map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "gradient-text" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-text-secondary">
              {project.fullDescription}
            </p>

            <div className="glass-card grid grid-cols-2 gap-8 border-border-faint p-8 sm:grid-cols-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent-teal">
                  <User size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Role</span>
                </div>
                <p className="text-sm font-bold">{project.role}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent-flame">
                  <Clock size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Timeline</span>
                </div>
                <p className="text-sm font-bold">{project.timeline}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-accent-amber">
                  <Zap size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Type</span>
                </div>
                <p className="text-sm font-bold">Case Study</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative h-[400px] overflow-hidden rounded-3xl border border-border-subtle lg:h-full"
          >
            {project.image ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <Icon size={96} className="text-text-primary/70" strokeWidth={1} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-16 lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 flex items-center gap-4 text-2xl font-bold">
                <span className="h-px w-8 bg-accent-flame" />
                The Challenge
              </h2>
              <ul className="space-y-6">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="glass-card flex gap-4 border-border-faint bg-surface-subtle p-6 transition-colors hover:bg-surface-strong"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-teal/20 text-accent-teal">
                      <Zap size={14} />
                    </div>
                    <p className="leading-relaxed text-text-secondary">{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 flex items-center gap-4 text-2xl font-bold">
                <span className="h-px w-8 bg-accent-teal" />
                The Approach
              </h2>
              <ul className="space-y-6">
                {project.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="glass-card flex gap-4 border-accent-flame/10 bg-accent-flame/5 p-6"
                  >
                    <CheckCircle2 size={24} className="mt-1 shrink-0 text-accent-flame" />
                    <p className="leading-relaxed text-text-secondary">{solution}</p>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <aside className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card border-accent-flame/20 bg-accent-flame/5 p-8"
            >
              <h3 className="mb-8 text-xl font-bold gradient-text">What Shipped</h3>
              <div className="space-y-8">
                {project.results.map((result) => (
                  <div key={result.label} className="space-y-1">
                    <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                      {result.label}
                    </p>
                    <p className="text-3xl font-bold text-accent-flame">{result.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card border-border-faint p-8"
            >
              <h3 className="mb-6 text-xl font-bold">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border-subtle bg-bg-primary px-3 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-border-subtle bg-gradient-to-br from-accent-flame/10 to-accent-teal/10 p-16 text-center glass-card"
        >
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-flame/20 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold">Inspired by this project?</h2>
            <p className="mx-auto mb-10 max-w-xl text-text-secondary">
              Let&apos;s talk about how the same AI-native approach can move your
              marketing forward.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/#contact" size="lg">
                Start a Collaboration
              </Button>
              <Link
                href="/#projects"
                className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-colors hover:text-accent-flame"
              >
                All Case Studies <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
