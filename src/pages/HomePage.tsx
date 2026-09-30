import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { getFeaturedProjects, site } from '../data/projects'
import '../styles/pages.css'

const heroSkills = [
  {
    label: 'Full stack delivery',
    text: 'React, Angular, Vue, Node.js, and Spring—UI through APIs and data models.',
  },
  {
    label: 'Mobile products',
    text: 'React Native and Expo apps for iOS and Android, from store listing to release.',
  },
  {
    label: 'AI & platforms',
    text: 'Practical AI features, SaaS dashboards, CRM workflows, and FinTech tools.',
  },
]

const focusAreas = [
  { label: 'Mobile apps', text: 'iOS, Android, and cross-platform products ready for the store.' },
  { label: 'Web platforms', text: 'SaaS dashboards, CRMs, and customer-facing experiences.' },
  { label: 'AI products', text: 'Practical AI features woven into real workflows.' },
  { label: 'FinTech tools', text: 'Money, habits, and community program technology.' },
]

export function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <img src="/hero-bg.jpg" alt="" />
        </div>
        <div className="container hero__grid">
          <div className="hero__identity rise">
            <p className="eyebrow">Application Developer</p>
            <h1 className="rise-delay-1">{site.name}</h1>
            <p className="hero__role rise-delay-1">{site.title}</p>
          </div>
          <div className="hero__body rise rise-delay-2">
            <p className="hero__tagline">{site.tagline}</p>
            <p className="hero__support">
              Based in {site.location}. Shipping mobile apps, websites, and AI products people can
              use.
            </p>
            <div className="hero__skills rise-delay-3">
              {heroSkills.map((skill) => (
                <div className="hero__skill" key={skill.label}>
                  <strong>{skill.label}</strong>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
            <div className="btn-group rise-delay-3">
              <Link className="btn btn-primary" to="/work">
                View work
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="hero__portrait-wrap rise rise-delay-2">
            <img
              className="hero__portrait"
              src="/timothy-griggs.jpg"
              alt="Portrait of Timothy Griggs"
              width={380}
              height={380}
            />
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="intro__bg" aria-hidden="true">
          <img src="/intro-bg.jpg" alt="" />
        </div>

        <div className="intro__stage">
          <div className="intro__copy">
            <p className="eyebrow">Introduction</p>
            <h2>A partner who ships software your clients and teams can actually use.</h2>
            {site.introPitch.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="btn-group">
              <Link className="btn btn-primary" to="/contact">
                Start a project
              </Link>
              <Link className="btn btn-secondary" to="/about">
                Learn more about me
              </Link>
            </div>
          </div>

          <figure className="intro__visual">
            <img
              src="/intro-workspace.jpg?v=4"
              alt="Developer workspace showing code, product dashboard, and mobile app screens"
              width={960}
              height={720}
              loading="lazy"
            />
            <figcaption className="intro__caption">
              Full-stack craft in action — code, product UI, and mobile delivery together.
            </figcaption>
          </figure>
        </div>

        <div className="container intro__lower">
          <ol className="intro__runway">
            {site.engagementPoints.map((point, index) => (
              <li key={point.label}>
                <span className="intro__runway-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{point.label}</strong>
                <span>{point.text}</span>
              </li>
            ))}
          </ol>

          <div className="intro__offers">
            <p className="intro__offers-label">What I ship</p>
            <ul className="intro__offer-list">
              {focusAreas.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="container">
          <div className="work__head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Shipped products that prove the craft.</h2>
              <p>
                A focused sample of production work—mobile apps, SaaS platforms, and AI
                experiences—built with clear UX, reliable delivery, and outcomes clients can use.
              </p>
            </div>
            <Link className="btn btn-secondary work__head-cta" to="/work">
              See all projects
            </Link>
          </div>

          <div className="project-grid">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--skills section-band">
        <div className="container">
          <div className="skills-stage">
            <aside className="skills-stage__intro">
              <p className="eyebrow">Skills</p>
              <h2>Depth across the stacks that ship.</h2>
              <p>
                Not a buzzword list—practical capability built through delivery on mobile, web,
                commerce, CMS, and AI systems.
              </p>
            </aside>

            <ol className="skills-index">
              {site.skills.map((skill, index) => (
                <li className="skills-index__row" key={skill.id}>
                  <span className="skills-index__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="skills-index__body">
                    <h3>{skill.label}</h3>
                    <p>{skill.summary}</p>
                    <p className="skills-index__focus">{skill.focus.join(' · ')}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="cta-close">
            <div className="cta-close__intro">
              <p className="eyebrow">Next step</p>
              <h2>Ready to build something practical?</h2>
              <p>
                Mobile apps, web platforms, and AI-powered products—taken from clear requirements
                through a release people can use.
              </p>
            </div>

            <div className="cta-close__panel">
              <ul className="cta-close__points">
                {site.engagementPoints.map((point) => (
                  <li key={point.label}>
                    <strong>{point.label}</strong>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>

              <div className="cta-close__actions">
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
                <p className="cta-close__meta">
                  Based in {site.location}
                  <span aria-hidden="true"> · </span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
