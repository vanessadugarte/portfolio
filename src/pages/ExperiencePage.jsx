import { useOutletContext } from 'react-router-dom'

function ExperiencePage() {
  const { text } = useOutletContext()
  const { experience } = text

  return (
    <section className="experience-landing" aria-labelledby="experience-title">
      <header className="experience-intro">
        <p>{experience.eyebrow}</p>
        <h2 id="experience-title">{experience.fullTitle}</h2>
        <p>{experience.intro}</p>
      </header>

      <section className="experience-block" aria-labelledby="employment-title">
        <h2 id="employment-title">{experience.employmentLabel}</h2>
        <div className="experience-timeline">
          {experience.jobs.map((job) => (
            <article className="experience-job" key={`${job.company}-${job.role}`}>
              <p>{job.meta}</p>
              <h3>{job.role}</h3>
              <strong>{job.company}</strong>
              <ul>
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-block education" aria-labelledby="education-title">
        <h2 id="education-title">{experience.educationLabel}</h2>
        <p>{experience.education.meta}</p>
        <h3>{experience.education.degree}</h3>
        <strong>{experience.education.school}</strong>
      </section>

      <section className="experience-block" aria-labelledby="skills-title">
        <h2 id="skills-title">{experience.skillsLabel}</h2>
        <div className="skills-grid">
          {experience.skills.map((skill) => (
            <article key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ExperiencePage
