import { Link } from 'react-router-dom'
import { site } from '../data/projects'
import '../styles/pages.css'

export function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/intro-workspace.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <p className="eyebrow">About</p>
          <h1>Building software people can use.</h1>
          <p>{site.intro}</p>
        </div>
      </section>

      <section className="section section--about-profile">
        <div className="container about-profile">
          <div className="about-profile__media">
            <img
              className="about-photo"
              src="/timothy-griggs.jpg"
              alt="Timothy Griggs"
              width={480}
              height={600}
            />
            <dl className="about-facts">
              <div>
                <dt>Role</dt>
                <dd>{site.title}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Mobile · Web · AI</dd>
              </div>
            </dl>
          </div>

          <div className="about-profile__copy">
            <h2>{site.aboutLead}</h2>
            {site.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Contact me
              </Link>
              <Link className="btn btn-secondary" to="/work">
                View work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--about-approach section-band">
        <div className="container">
          <div className="about-approach">
            <aside className="about-approach__intro">
              <p className="eyebrow">Approach</p>
              <h2>How engagements stay clear.</h2>
              <p>
                The same principles whether the work is a mobile app, a SaaS platform, or an
                AI-assisted workflow.
              </p>
            </aside>

            <ol className="about-approach__list">
              {site.engagementPoints.map((point, index) => (
                <li key={point.label}>
                  <span className="about-approach__num" aria-hidden="true">
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

      <section className="section section--about-experience">
        <div className="container">
          <div className="about-experience-head">
            <p className="eyebrow">Experience</p>
            <h2>Where I lead and ship.</h2>
            <p>
              Product ownership across FinTech, community programs, and delivery organizations—from
              scope through release.
            </p>
          </div>

          <ol className="experience-index">
            {site.experience.map((job, index) => (
              <li className="experience-index__row" key={job.title}>
                <span className="experience-index__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <article className="experience-index__body">
                  <div className="experience-index__title-row">
                    <h3>{job.title}</h3>
                    <span className="experience-index__dates">{job.dates}</span>
                  </div>
                  <p className="experience-index__org">{job.org}</p>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--about-cta">
        <div className="container">
          <div className="about-cta">
            <div>
              <p className="eyebrow">Next step</p>
              <h2>Let’s talk about what you need to ship.</h2>
              <p>
                Available for full stack engagements—hourly collaboration or fixed-price milestones.
              </p>
            </div>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Get in touch
              </Link>
              <a
                className="btn btn-secondary"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
