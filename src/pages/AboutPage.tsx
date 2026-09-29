import { Link } from 'react-router-dom'
import { site } from '../data/projects'
import '../styles/pages.css'

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Building software people can use.</h1>
          <p>{site.intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container about-grid">
          <img
            className="about-photo"
            src="/timothy-griggs.jpg"
            alt="Timothy Griggs"
            width={480}
            height={600}
          />
          <div className="about-copy">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{site.aboutLead}</h2>
            {site.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="btn-group" style={{ marginTop: '1.5rem' }}>
              <Link className="btn btn-primary" to="/contact">
                Contact me
              </Link>
              <Link className="btn btn-secondary" to="/work">
                View work
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-head" style={{ marginTop: '3rem' }}>
            <p className="eyebrow">Experience</p>
            <h2>Where I lead and ship.</h2>
          </div>
          <div className="experience">
            {site.experience.map((job) => (
              <article className="experience-item" key={job.title}>
                <h3>{job.title}</h3>
                <p className="meta">
                  {job.org} · {job.dates}
                </p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
