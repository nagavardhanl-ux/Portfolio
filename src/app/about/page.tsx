import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/config";
import { pageMetadata } from "@/lib/meta";
import AboutAvatar from "@/components/AboutAvatar";
import RoadTimeline from "@/components/RoadTimeline";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  ...pageMetadata("/about/"),
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ── SECTION 1: HERO (split layout) ── */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__text reveal">
              <span className="about-eyebrow">About</span>
              <h1 id="about-hero-title" className="about-hero__title">
                From operations to marketing for AI companies
              </h1>
              <p className="about-hero__intro">
                I spent five years running a family business, a convention hall and the vendor side of a trading company. In 2025 I moved into marketing, and nine months later I was running it for two AI platforms.
              </p>
              <p className="about-hero__sub">
                Operations taught me to get things finished. Marketing is where I put that to use.
              </p>
            </div>

            <div className="about-hero__avatar-col reveal">
              <div className="about-avatar-glow" aria-hidden="true" />
              <AboutAvatar pngSrc={asset("about/avatar.webp")} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The path (scroll-driven road) */}
      <RoadTimeline />

      {/* ── SECTION 3: WHAT OPERATIONS TAUGHT ME (three cards) ── */}
      <section className="about-section about-taught reveal" aria-labelledby="taught-title">
        <div className="container">
          <div className="about-sec-heading">
            <h2 id="taught-title" className="about-sec-title">What operations taught me</h2>
          </div>
          <div className="about-taught__grid">
            <div className="about-taught-card">
              <h3 className="about-taught-card__title">Vendors to partners</h3>
              <p className="about-taught-card__desc">
                Years of negotiating with vendors is why partner outreach comes naturally. It is the same conversation: what do you need, and what can we do together.
              </p>
            </div>

            <div className="about-taught-card">
              <h3 className="about-taught-card__title">Events run on a date</h3>
              <p className="about-taught-card__desc">
                A wedding does not move because the decorator is late. I plan back from the deadline and deliver on it.
              </p>
            </div>

            <div className="about-taught-card">
              <h3 className="about-taught-card__title">Owning the outcome</h3>
              <p className="about-taught-card__desc">
                In a family business there is no one to pass the problem to. I still work that way: if it is mine, I finish it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW I WORK (2 x 2 grid) ── */}
      <section className="about-section about-how reveal" aria-labelledby="how-title">
        <div className="container">
          <div className="about-sec-heading">
            <h2 id="how-title" className="about-sec-title">How I work</h2>
          </div>
          <div className="about-how__grid">
            <div className="about-how-item">
              <span className="about-how-num" aria-hidden="true">01</span>
              <div className="about-how-content">
                <h3 className="about-how-principle">Check the claim before it goes out.</h3>
                <p className="about-how-exp">
                  Every number and every premise gets checked before it is published. A wrong claim costs more than a late post.
                </p>
              </div>
            </div>

            <div className="about-how-item">
              <span className="about-how-num" aria-hidden="true">02</span>
              <div className="about-how-content">
                <h3 className="about-how-principle">Say it plainly.</h3>
                <p className="about-how-exp">
                  If a line sounds like marketing, I rewrite it until it sounds like a person.
                </p>
              </div>
            </div>

            <div className="about-how-item">
              <span className="about-how-num" aria-hidden="true">03</span>
              <div className="about-how-content">
                <h3 className="about-how-principle">Ship it, then improve it.</h3>
                <p className="about-how-exp">
                  A live page teaches more than a perfect draft.
                </p>
              </div>
            </div>

            <div className="about-how-item">
              <span className="about-how-num" aria-hidden="true">04</span>
              <div className="about-how-content">
                <h3 className="about-how-principle">Results over activity.</h3>
                <p className="about-how-exp">
                  Posts and emails are the work. Replies, traffic and meetings are the point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT'S NEXT (wide band) ── */}
      <section className="about-next-band reveal" aria-labelledby="next-title">
        <div className="container">
          <div className="about-next-grid">
            <div className="about-next__left">
              <h2 id="next-title" className="about-next__title">What&apos;s next</h2>
              <p className="about-next__desc">
                Right now I work across a bit of everything. Next, I want to go deeper in a few areas, working alongside people who have done this at scale.
              </p>
            </div>
            <div className="about-chips-wrap">
              <span className="about-chip">AI visibility</span>
              <span className="about-chip">LinkedIn marketing</span>
              <span className="about-chip">Google and Meta ads</span>
              <span className="about-chip">Marketing analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CLOSE (three link cards) ── */}
      <section className="about-close-section reveal" aria-labelledby="close-title">
        <div className="container">
          <h2 id="close-title" className="about-close__heading">The work is on the rest of this site.</h2>
          <div className="about-close__grid">
            <Link href="/#shipped" className="about-link-card">
              <div className="about-link-card__body">
                <h3 className="about-link-card__title">What I&apos;ve shipped</h3>
                <p className="about-link-card__line">Real work across both platforms.</p>
              </div>
              <ArrowUpRight className="about-link-card__arrow" size={20} />
            </Link>

            <Link href="/what-i-do/" className="about-link-card">
              <div className="about-link-card__body">
                <h3 className="about-link-card__title">What I do</h3>
                <p className="about-link-card__line">Product marketing, outbound, content, websites and AI.</p>
              </div>
              <ArrowUpRight className="about-link-card__arrow" size={20} />
            </Link>

            <Link href="/contact/" className="about-link-card">
              <div className="about-link-card__body">
                <h3 className="about-link-card__title">Get in touch</h3>
                <p className="about-link-card__line">Email or LinkedIn.</p>
              </div>
              <ArrowUpRight className="about-link-card__arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
