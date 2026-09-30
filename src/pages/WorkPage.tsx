import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import '../styles/pages.css'

export function WorkPage() {
  return (
    <>
      <section className="page-hero page-hero--work">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/intro-products.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <p className="eyebrow">Work</p>
          <h1>Work that ships to production.</h1>
          <p>
            Mobile apps, websites, SaaS platforms, and AI products—built for real users and released
            with clear ownership from scope through launch.
          </p>
        </div>
      </section>

      <section className="section section--work-grid">
        <div className="container">
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
