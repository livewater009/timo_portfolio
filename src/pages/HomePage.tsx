import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { getFeaturedProjects, site } from '../data/projects'
import '../styles/pages.css'

export function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow rise">Application Developer</p>
            <h1 className="rise rise-delay-1">{site.name}</h1>
            <p className="hero__role rise rise-delay-1">{site.title}</p>
            <p className="hero__tagline rise rise-delay-2">{site.tagline}</p>
            <p className="hero__support rise rise-delay-2">
              Based in {site.location}. Shipping mobile apps, websites, and AI products people can
              use.
            </p>
            <div className="btn-group rise rise-delay-3">
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
        <div className="container">
          <div className="intro__panel">
            <div>
              <p className="eyebrow">Introduction</p>
              <h2>{site.aboutLead}</h2>
              <p>{site.intro}</p>
              <Link className="btn btn-secondary" to="/about">
                Learn more about me
              </Link>
            </div>
            <aside className="intro__aside">
              <strong>What I ship</strong>
              <span>Mobile apps · Web platforms · AI products · FinTech tools</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that show how I build.</h2>
            <p>
              Mobile apps, SaaS platforms, and AI experiences—each shipped with clear UX and
              production delivery.
            </p>
          </div>
          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <Link className="btn btn-secondary" to="/work">
              See all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Practical stacks for real delivery.</h2>
          </div>
          <div className="skills">
            {site.skills.map((skill) => (
              <div className="skill-item" key={skill.label}>
                <h3>{skill.label}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Ready to build something practical?</h2>
            <p>
              Whether you need a mobile app, a web product, or an AI-powered experience, I can help
              take it from requirements to release.
            </p>
          </div>
          <div className="btn-group">
            <Link className="btn btn-primary" to="/contact">
              Get in touch
            </Link>
            <a className="btn btn-secondary" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
