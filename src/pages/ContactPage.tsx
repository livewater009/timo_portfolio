import { site } from '../data/projects'
import '../styles/pages.css'

export function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let’s build something useful.</h1>
          <p>
            Available for full stack development engagements—mobile, web, and AI. Call, message on
            LinkedIn, or reach out from Beaumont, CA.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0.5rem' }}>
        <div className="container contact-panel">
          <div className="contact-card">
            <h2>How I can help</h2>
            <p>
              I take projects from requirements through release—React Native apps, web platforms,
              SaaS features, and AI-powered product experiences—with clear milestones and
              stakeholder communication.
            </p>
            <div className="skills">
              {site.skills.slice(0, 2).map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <h3>{skill.label}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <h2>Get in touch</h2>
            <p>
              {site.title}
              <br />
              {site.address}
            </p>
            <div className="contact-list">
              <a href={site.phoneHref}>
                <strong>Phone</strong>
                <span>{site.phone}</span>
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                <strong>LinkedIn</strong>
                <span>Connect with Timothy Griggs</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
