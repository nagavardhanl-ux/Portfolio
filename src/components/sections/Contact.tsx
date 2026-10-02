"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { contact } from "@/data/nav";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: wire this up to Web3Forms (https://web3forms.com) once an access
  // key is available — swap the handleSubmit body for a fetch() POST to
  // https://api.web3forms.com/submit with the form data + access_key.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-container">
      <div className="glass-card relative overflow-hidden p-12 md:p-20">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-flame/10 blur-[80px]" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-teal/10 blur-[80px]" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Let&apos;s Build Something <br />
              <span className="gradient-text">Intelligent</span>
            </h2>
            <p className="mb-10 max-w-md text-lg text-text-secondary">
              Have a product to position, a brand to launch, or a website that
              needs to move fast? I turn ideas into shipped marketing systems —
              let&apos;s talk.
            </p>

            <div className="space-y-6">
              <Button
                href={`mailto:${contact.email}`}
                size="lg"
                fullWidth
                className="justify-center sm:w-auto"
              >
                <Mail size={20} />
                Email Me Directly
              </Button>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 text-text-secondary transition-colors hover:text-accent-flame"
                >
                  <Phone size={20} /> {contact.phone}
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary transition-colors hover:text-accent-flame"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card border-border-faint bg-bg-primary/40 p-10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <CheckCircle2 size={48} className="text-accent-flame" />
                <h3 className="text-xl font-bold text-text-primary">
                  Message received!
                </h3>
                <p className="max-w-xs text-sm text-text-secondary">
                  Thanks for reaching out — I&apos;ll get back to you at{" "}
                  {contact.email} as soon as I can.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent-flame">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-border-subtle bg-bg-secondary/40 p-4 text-text-primary transition-all placeholder:text-text-secondary/30 focus:border-accent-flame focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent-flame">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-border-subtle bg-bg-secondary/40 p-4 text-text-primary transition-all placeholder:text-text-secondary/30 focus:border-accent-flame focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent-flame">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-border-subtle bg-bg-secondary/40 p-4 text-text-primary transition-all placeholder:text-text-secondary/30 focus:border-accent-flame focus:outline-none"
                    placeholder="Tell me about your growth goals..."
                  />
                </div>
                <Button type="submit" size="lg" fullWidth className="justify-center">
                  <Send size={20} />
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
