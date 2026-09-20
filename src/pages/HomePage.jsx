import { Link, useOutletContext } from 'react-router-dom'
import vectorOne from '../assets/hero/abstract-vector-01.svg'
import vectorTwo from '../assets/hero/abstract-vector-02.svg'
import vectorThree from '../assets/hero/abstract-vector-03.svg'
import { decorativeHeroFigures, heroCategoryFigures } from '../content/heroFigures.js'
import { getProjectCategory } from '../content/projectCategories.js'
import { getSelectedProjects, localizeProjects } from '../content/projects.js'
import { paths } from '../routes/paths.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import ProjectPreviewCard from '../components/ProjectPreviewCard.jsx'
import './HomePage.scss'

const shapes = {
  one: vectorOne,
  two: vectorTwo,
  three: vectorThree,
}

function position({ x, y, size, rotation, mobileX, mobileY, mobileSize, opacity = 1 }) {
  return {
    '--x': `${x}%`,
    '--y': `${y}%`,
    '--size': `${size}%`,
    '--rotation': `${rotation}deg`,
    '--label-rotation': `${-rotation}deg`,
    '--mobile-x': `${mobileX}%`,
    '--mobile-y': `${mobileY}%`,
    '--mobile-size': `${mobileSize}%`,
    '--opacity': opacity,
  }
}

function Shape({ shape }) {
  return <span className="shape-visual" style={{ '--shape-image': `url(${shapes[shape]})` }} />
}

function ExperiencePreview({ experience }) {
  return (
    <section className="experience-preview" aria-labelledby="experience-preview-title">
      <div className="experience-preview-content">
        <div className="experience-preview-heading">
          <h2 id="experience-preview-title">{experience.title}</h2>
        </div>

        <div className="recent-jobs">
          {experience.previewJobs.map((job) => (
            <article className={`recent-job${job.showDashes ? ' recent-job-dashed' : ''}`} key={`${job.company}-${job.role}`}>
              <p className="recent-job-meta">{job.meta}</p>
              <h3>{job.company}</h3>
              <p className="recent-job-role">{job.role}</p>
              <ul className="recent-job-highlights">
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <Link className="experience-link" to={paths.experience}>{experience.link}</Link>
      </div>

      <div className="experience-figures" aria-hidden="true">
        <span className="experience-figure experience-figure-large"><Shape shape="two" /></span>
        <span className="experience-figure experience-figure-small"><Shape shape="two" /></span>
      </div>
    </section>
  )
}

function HomePage() {
  const { text } = useOutletContext()
  const headingRef = usePageMetadata(text.documentTitle)
  const localizedSelectedWorks = localizeProjects(getSelectedProjects(), text.projects.items)

  return (
    <>
      <section className="hero" id="inicio" aria-label={text.heroLabel}>
        <h1 className="hero-name" ref={headingRef} tabIndex={-1}><span>Vanessa</span><span>Dugarte</span></h1>

        <div className="figure-field">
          {decorativeHeroFigures.map((figure, index) => (
            <span className="figure figure-decoration" style={position(figure)} aria-hidden="true" key={index}>
              <Shape shape={figure.shape} />
            </span>
          ))}

          {heroCategoryFigures.map((figure) => {
            const category = getProjectCategory(figure.categoryId)

            return (
              <Link className={`figure figure-category figure-${category.id}`} style={position(figure)} to={paths.projectCategory(category.slug)} key={category.id}>
                <Shape shape={figure.shape} />
                <span className="figure-label">{text.categories[category.id]}</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="selected-work" id="trabajos">
        <div className="section-heading">
          <h2>{text.selected.title}</h2>
        </div>

          <div className="project-grid">
            {localizedSelectedWorks.map((project, index) => (
              <ProjectPreviewCard actionLabel={text.selected.link} index={index} key={project.id} project={project} />
            ))}
        </div>
      </section>

      <ExperiencePreview experience={text.experience} />
    </>
  )
}

export default HomePage
