import ContactForm from "@/components/ContactForm";
import { ArrowUpRight } from "@/components/icons";
import SectionHead from "@/components/SectionHead";
import Workflow from "@/components/Workflow";
import { about } from "@/data/content";
import { contact } from "@/lib/config";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/about/");


export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="container about-grid">
          <div>
            <p className="marker">
              <b>About</b>
            </p>
          </div>
          <div className="stack" style={{ ["--stack" as string]: "36px" }}>
            <h1 className="h1">From operations to two AI platforms.</h1>
            <p className="about-text">{about}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn--ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="stack-title">
        <div className="container">
          <SectionHead
            index="01"
            label="AI stack"
            id="stack-title"
            title="The workflow, step by step."
            intro="The tools are chosen for the job each step needs, not the other way round."
          />
          <Workflow label="AI stack" />
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title" id="contact" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead index="02" label="Contact" id="contact-title" title="Get in touch." />
          <div className="contact-grid">
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
        </div>
      </section>
    </>
  );
}
