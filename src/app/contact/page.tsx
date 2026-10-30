import ContactForm from "@/components/ContactForm";
import { ArrowUpRight } from "@/components/icons";
import { contact } from "@/lib/config";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/contact/");

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>Contact</b>
          </p>
          <h1 className="h1">Get in touch</h1>
          <p className="lead">Questions about the work, a role or a website build. Send a message, email or connect on LinkedIn.</p>
        </div>
      </header>

      <section className="section" aria-label="Contact details and message form">
        <div className="container contact-grid">
          <div className="contact-aside reveal">
            <p className="contact-aside__note">
              I work with startups and AI companies on product marketing, demand generation, content and websites. If you have a project or a role, I&apos;d like to hear about it.
            </p>

            <ul className="contact-list" role="list">
              <li>
                <a href={`mailto:${contact.email}`}>
                  <span className="label">Email</span>
                  <strong>{contact.email}</strong>
                </a>
              </li>
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="label">LinkedIn</span>
                  <strong>
                    nagavardhan-reddy-lella <ArrowUpRight size={18} style={{ display: "inline", verticalAlign: "middle" }} />
                  </strong>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>

            <p className="contact-aside__meta">Based in India, working remotely. Usually responds within a day.</p>
          </div>

          <div className="reveal" style={{ ["--delay" as string]: "50ms" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
