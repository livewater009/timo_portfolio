import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import '../styles/pages.css'

export function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Work</p>
          <h1>Selected projects</h1>
          <p>
            Mobile apps, websites, SaaS platforms, and AI products—built for real users and shipped
            to production.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
