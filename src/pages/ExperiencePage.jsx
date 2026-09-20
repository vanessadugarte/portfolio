import { useOutletContext } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './ExperiencePage.scss'

function ExperiencePage() {
  const { text } = useOutletContext()
  const { experience } = text
  const headingRef = usePageMetadata(experience.fullTitle)

  return (
    <section className="experience-landing" aria-labelledby="experience-title">
      <header className="experience-intro">
        <h1 id="experience-title" ref={headingRef} tabIndex={-1}>{experience.fullTitle}</h1>
        <p>{experience.intro}</p>
      </header>

      <section className="experience-block" aria-labelledby="employment-title">
        <h2 id="employment-title">{experience.employmentLabel}</h2>
        <ol className="experience-timeline">
          {experience.jobs.map((job) => (
            <li className="experience-timeline-item" key={`${job.company}-${job.role}-${job.meta}`}>
              <article className="experience-job">
                <p className="experience-job-meta">{job.meta}</p>
                <h3>{job.role}</h3>
                <p className="experience-job-company">{job.company}</p>
                <ul className="experience-job-highlights">
                  {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="experience-block education" aria-labelledby="education-title">
        <h2 id="education-title">{experience.educationLabel}</h2>
        <p className="experience-education-degree">{experience.education.degree}</p>
        <p className="experience-education-school">{experience.education.school}</p>
        <p className="experience-education-meta">{experience.education.meta}</p>
      </section>

      <section className="experience-block experience-details" aria-labelledby="skills-title">
        <h2 id="skills-title">{experience.skillsLabel}</h2>
        <ul className="skills-list">
          {experience.skills.map((skill) => (
            <li key={skill.title}>
              <strong>{skill.title}:</strong>{' '}
              <span>{skill.items}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default ExperiencePage
