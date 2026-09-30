import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'
import '../styles/pages.css'

type Props = {
  project: Project
  index?: number
}

export function ProjectCard({ project, index }: Props) {
  const order = typeof index === 'number' ? String(index + 1).padStart(2, '0') : null
  const skillPreview = project.skills.slice(0, 4)
  const moreSkills = Math.max(project.skills.length - skillPreview.length, 0)
  const style =
    typeof index === 'number'
      ? ({ '--card-delay': `${Math.min(index, 7) * 70}ms` } as CSSProperties)
      : undefined

  return (
    <Link to={`/work/${project.slug}`} className="project-card" style={style}>
      <div className="project-card__media">
        <img src={project.cover} alt={`${project.shortTitle} preview`} loading="lazy" />
        <div className="project-card__media-shade" aria-hidden="true" />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          {order ? <span className="project-card__index">{order}</span> : null}
          <span className="chip">{project.category}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p className="project-card__role">{project.role}</p>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="project-card__skills">
          {skillPreview.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
          {moreSkills > 0 ? <li className="project-card__skills-more">+{moreSkills} more</li> : null}
        </ul>
        <span className="project-card__cta">
          View project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}
