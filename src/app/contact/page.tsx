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
          <h1 className="h1">Get in touch.</h1>
          <p className="lead">Questions about the work, a role or a website build. Email, call or message on LinkedIn.</p>
        </div>
      </header>

      <section className="section" aria-label="Contact details and form">
        <div className="container contact-grid">
          <ul className="contact-list reveal" role="list">
            <li>
              <a href={`mailto:${contact.email}`}>
                <span className="label">Email</span>
                <strong>{contact.email}</strong>
              </a>
            </li>
            <li>
              <a href={contact.phoneHref}>
                <span className="label">Phone</span>
                <strong>{contact.phone}</strong>
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
          <div className="reveal" style={{ ["--delay" as string]: "50ms" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
