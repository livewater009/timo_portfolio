import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import '../styles/pages.css'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link to="/work" style={{ color: 'inherit' }}>
              Work
            </Link>{' '}
            / {project.shortTitle}
          </p>
          <h1>{project.title}</h1>
          <p className="project-detail__role">{project.role}</p>
          <div className="project-detail__meta">
            <span className="chip">{project.category}</span>
            {project.skills.slice(0, 5).map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="project-detail__cover">
            <img src={project.cover} alt={`${project.shortTitle} cover`} />
          </div>

          <p className="project-detail__desc">{project.description}</p>

          {project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className="btn btn-primary"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.85rem' }}>Skills & deliverables</h2>
          <div className="skill-list">
            {project.skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.85rem' }}>Gallery</h2>
          <div className="gallery">
            {project.images.map((src) => (
              <figure key={src}>
                <img src={src} alt={`${project.shortTitle} screenshot`} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="btn-group" style={{ marginTop: '2.5rem' }}>
            <Link className="btn btn-secondary" to="/work">
              Back to work
            </Link>
            <Link className="btn btn-primary" to="/contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
