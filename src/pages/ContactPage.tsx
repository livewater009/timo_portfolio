import { Link } from 'react-router-dom'
import { site } from '../data/projects'
import '../styles/pages.css'

export function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/contact-bg.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <p className="eyebrow">Contact</p>
          <h1>Let’s build something useful.</h1>
          <p>
            Available for full stack engagements—mobile apps, web platforms, and AI-powered
            products. Reach out by phone or LinkedIn from {site.location}.
          </p>
        </div>
      </section>

      <section className="section section--contact-main">
        <div className="container contact-stage">
          <aside className="contact-stage__intro">
            <p className="eyebrow">Reach out</p>
            <h2>Start with a clear conversation.</h2>
            <p>
              Share the product, timeline, and constraints. I’ll respond with a practical path—scope,
              milestones, and the right engagement model.
            </p>
            <dl className="contact-facts">
              <div>
                <dt>Role</dt>
                <dd>{site.title}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Engagements</dt>
                <dd>Hourly · Fixed-price</dd>
              </div>
            </dl>
          </aside>

          <div className="contact-stage__channels">
            <a className="contact-channel" href={site.phoneHref}>
              <span className="contact-channel__label">Phone</span>
              <span className="contact-channel__value">{site.phone}</span>
              <span className="contact-channel__hint">Call or text to discuss scope</span>
            </a>
            <a
              className="contact-channel"
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-channel__label">LinkedIn</span>
              <span className="contact-channel__value">Timothy Griggs</span>
              <span className="contact-channel__hint">Message for project inquiries</span>
            </a>
            <div className="contact-channel contact-channel--static">
              <span className="contact-channel__label">Location</span>
              <span className="contact-channel__value">{site.location}</span>
              <span className="contact-channel__hint">{site.address}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--contact-expect section-band">
        <div className="container">
          <div className="contact-expect">
            <aside className="contact-expect__intro">
              <p className="eyebrow">What to expect</p>
              <h2>How we start working together.</h2>
              <p>
                The same delivery principles whether you need a mobile app, a SaaS platform, or an
                AI-assisted workflow.
              </p>
            </aside>

            <ol className="contact-expect__list">
              {site.engagementPoints.map((point, index) => (
                <li key={point.label}>
                  <span className="contact-expect__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{point.label}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--contact-cta">
        <div className="container">
          <div className="contact-cta">
            <div>
              <p className="eyebrow">Also explore</p>
              <h2>See recent work before we talk.</h2>
              <p>
                Selected products across mobile, web, SaaS, and AI—useful context for scoping the
                next engagement.
              </p>
            </div>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/work">
                View work
              </Link>
              <Link className="btn btn-secondary" to="/about">
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
