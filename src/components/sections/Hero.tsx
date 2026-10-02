"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20"
      style={{ perspective: 1200 }}
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-40"
        style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)" }}
      />
      <ParticleBackground />

      <div className="pointer-events-none absolute left-[-5rem] top-1/4 h-96 w-96 rounded-full bg-accent-flame/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[-5rem] h-96 w-96 rounded-full bg-accent-teal/10 blur-[120px]" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card mb-8 flex items-center gap-2 px-4 py-1 font-mono text-xs uppercase tracking-widest text-accent-flame"
          >
            <Sparkles size={14} />
            Digital Marketing Executive @ AIQoD
          </motion.div>

          <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Marketing Systems, <span className="gradient-text">Built & Shipped</span>
            <br />
            with AI
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            I use AI tools as my execution team — building brands, websites, and
            campaigns end-to-end. From rebuilding company sites on Lovable and
            Antigravity to launching cold-outreach systems that generated 1,000+
            qualified leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotateY: 360, y: [0, -20, 0] }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute right-[10%] top-1/3 hidden h-16 w-16 rounded-lg border border-accent-flame/20 backdrop-blur-sm lg:block"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        animate={{ rotateX: 360, y: [0, 20, 0] }}
        transition={{
          rotateX: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute bottom-1/4 left-[10%] hidden h-12 w-12 rounded-full border border-accent-teal/20 backdrop-blur-sm lg:block"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        animate={{ rotateX: 360, rotateY: 360, y: [0, -14, 0] }}
        transition={{
          rotateX: { duration: 18, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 22, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute right-[20%] top-[15%] hidden h-10 w-10 rotate-45 border border-accent-flame/30 bg-accent-flame/5 backdrop-blur-sm xl:block"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-[18%] top-[18%] hidden h-24 w-24 rounded-full border border-dashed border-accent-teal/15 xl:block"
        style={{ transformStyle: "preserve-3d" }}
      />
    </section>
  );
}
