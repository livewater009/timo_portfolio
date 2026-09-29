import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import '../styles/pages.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card__media">
        <img src={project.cover} alt={`${project.shortTitle} preview`} loading="lazy" />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="chip">{project.category}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.summary}</p>
      </div>
    </Link>
  )
}
