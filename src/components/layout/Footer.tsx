import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { navLinks, contact } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold gradient-text">NAGAVARDHAN</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Digital Marketing Executive & AI-powered Marketing Technologist —
              building brands, websites, and campaigns with AI as the execution
              layer.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-text-secondary">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-flame"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-text-secondary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-flame"
                >
                  <Mail size={16} /> {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-flame"
                >
                  <Phone size={16} /> {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-flame"
                >
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-faint pt-8 text-xs text-text-secondary font-mono sm:flex-row">
          <span>
            © {new Date().getFullYear()} {contact.name.toUpperCase()}
          </span>
          <span className="uppercase tracking-widest">Built with Next.js & AI</span>
        </div>
      </div>
    </footer>
  );
}
