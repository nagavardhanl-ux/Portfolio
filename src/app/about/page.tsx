import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/config";
import { pageMetadata } from "@/lib/meta";
import AboutAvatar from "@/components/AboutAvatar";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  ...pageMetadata("/about/"),
  robots: {
    index: false,
    follow: false,
  },
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
              {/* PLACEHOLDER: replace avatar-still.png and add avatar-loop.webm with the real avatar. */}
              <AboutAvatar pngSrc={asset("about/avatar-still.png")} />
              <p className="about-avatar-caption">My AI avatar, made with Google Flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE PATH (timeline) ── */}
      <section className="about-section about-path reveal" aria-labelledby="path-title">
        <div className="container">
          <div className="about-sec-heading">
            <h2 id="path-title" className="about-sec-title">The path</h2>
            <p className="about-path__subline">
              Before all this: B.Tech in Computer Science and Engineering, SRM Institute of Science and Technology, 2015 to 2019.
            </p>
          </div>

          <div className="about-timeline">
            <div className="about-timeline__phases">
              {/* Phase 1: Operations */}
              <div className="about-phase about-phase--ops">
                <span className="about-phase__header">Operations</span>
                <div className="about-phase__steps">
                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">2019 to 2021</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Manager, family business</h3>
                      <p className="about-path-card__desc">
                        Ran daily operations: customer orders, deliveries, suppliers and transport.
                      </p>
                    </div>
                  </div>

                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">2021 to 2023</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Event and Venue Manager, convention hall</h3>
                      <p className="about-path-card__desc">
                        Ran weddings, corporate functions and school events, working with clients and vendors on each one. Made the venue&apos;s promotions in Canva.
                      </p>
                    </div>
                  </div>

                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">2023 to 2024</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Sourcing and Vendor Relationship Manager, trading company</h3>
                      <p className="about-path-card__desc">
                        Managed vendors and sourcing and cut procurement costs by 15%. Made the product brochures and wrote the website content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: The switch */}
              <div className="about-phase about-phase--switch">
                <span className="about-phase__header">The switch</span>
                <div className="about-phase__steps">
                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">2025</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Digital Marketing and Analytics, Boston Institute of Analytics</h3>
                      <p className="about-path-card__desc">
                        Moved into marketing on purpose, starting with the fundamentals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Marketing */}
              <div className="about-phase about-phase--mkt">
                <span className="about-phase__header">Marketing</span>
                <div className="about-phase__steps">
                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">Aug 2025</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Marketing Intern, Roots Innovation Labs</h3>
                      <p className="about-path-card__desc">
                        Started on lead sourcing and content for AIQoD and VentureHub360.
                      </p>
                    </div>
                  </div>

                  <div className="about-step">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">Nov 2025</span>
                    <div className="about-path-card">
                      <h3 className="about-path-card__title">Marketing Executive, Consultant</h3>
                      <p className="about-path-card__desc">
                        Took on more of the work, from campaigns to the websites.
                      </p>
                    </div>
                  </div>

                  <div className="about-step about-step--current">
                    <div className="about-step__node" aria-hidden="true">
                      <span className="about-step__dot" />
                    </div>
                    <span className="about-step__year">
                      May 2026
                      <span className="about-step__badge">Now</span>
                    </span>
                    <div className="about-path-card about-path-card--current">
                      <h3 className="about-path-card__title">Marketing Executive</h3>
                      <p className="about-path-card__desc">
                        Run marketing for both platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <span className="about-chip">Product marketing and positioning</span>
              <span className="about-chip">Demand generation</span>
              <span className="about-chip">SEO and AI search</span>
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
