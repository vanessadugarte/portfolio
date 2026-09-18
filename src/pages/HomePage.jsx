import { Link, useOutletContext } from 'react-router-dom'
import vectorOne from '../assets/hero/abstract-vector-01.svg'
import vectorTwo from '../assets/hero/abstract-vector-02.svg'
import vectorThree from '../assets/hero/abstract-vector-03.svg'
import { paths } from '../routes/paths.js'
import './HomePage.scss'

const shapes = {
  one: vectorOne,
  two: vectorTwo,
  three: vectorThree,
}

const figures = [
  { id: 'frontend', slug: 'animaciones', shape: 'one', x: 48, y: 27, size: 17, rotation: -8, mobileX: 25, mobileY: 32, mobileSize: 28 },
  { id: 'illustration', slug: 'ilustracion', shape: 'two', x: 70, y: 26, size: 18, rotation: 12, mobileX: 72, mobileY: 31, mobileSize: 29 },
  { id: 'uxui', slug: 'frontend-uxui', shape: 'three', x: 29, y: 57, size: 19, rotation: -22, mobileX: 25, mobileY: 69, mobileSize: 31 },
  { id: 'three-d', slug: '3d', shape: 'one', x: 87, y: 57, size: 16, rotation: 28, mobileX: 48, mobileY: 54, mobileSize: 26 },
  { id: 'graphic-design', slug: 'diseno-grafico', shape: 'three', x: 60, y: 66, size: 16, rotation: -14, mobileX: 73, mobileY: 65, mobileSize: 26 },
]

const decorativeFigures = [
  { shape: 'two', x: 34, y: 18, size: 8, rotation: 16, opacity: 0.42, mobileX: 15, mobileY: 48, mobileSize: 15 },
  { shape: 'three', x: 83, y: 19, size: 10, rotation: -24, opacity: 0.36, mobileX: 84, mobileY: 49, mobileSize: 15 },
  { shape: 'one', x: 47, y: 66, size: 12, rotation: 31, opacity: 0.3, mobileX: 50, mobileY: 70, mobileSize: 17 },
  { shape: 'two', x: 75, y: 67, size: 12, rotation: -12, opacity: 0.3, mobileX: 82, mobileY: 83, mobileSize: 13 },
]

const selectedWorks = [
  { number: '01', preview: 'playful' },
  { number: '02', preview: 'material' },
  { number: '03', preview: 'editorial' },
  { number: '04', preview: 'poster' },
]

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
      <div className="experience-preview-heading">
        <p>{experience.eyebrow}</p>
        <h2 id="experience-preview-title">{experience.title}</h2>
      </div>
      <div className="recent-jobs">
        {experience.jobs.slice(0, 2).map((job) => (
          <article className="recent-job" key={`${job.company}-${job.role}`}>
            <p>{job.meta}</p>
            <h3>{job.role}</h3>
            <strong>{job.company}</strong>
          </article>
        ))}
      </div>
      <Link className="experience-link" to={paths.experience}>{experience.link} <span aria-hidden="true">-&gt;</span></Link>
    </section>
  )
}

function HomePage() {
  const { text } = useOutletContext()

  return (
    <>
      <section className="hero" id="inicio" aria-label={text.heroLabel}>
        <h1 className="hero-name"><span>Vanessa</span><span>Dugarte</span></h1>

        <div className="figure-field">
          {decorativeFigures.map((figure, index) => (
            <span className="figure figure-decoration" style={position(figure)} aria-hidden="true" key={index}>
              <Shape shape={figure.shape} />
            </span>
          ))}

          {figures.map((figure) => (
            <Link className={`figure figure-category figure-${figure.id}`} style={position(figure)} to={paths.projectCategory(figure.slug)} key={figure.id}>
              <Shape shape={figure.shape} />
              <span className="figure-label">{text.categories[figure.slug]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="selected-work" id="trabajos">
        <div className="section-heading">
          <p>{text.selected.eyebrow}</p>
          <h2>{text.selected.title}</h2>
        </div>

        <div className="project-grid">
          {selectedWorks.map((project, index) => {
            const projectText = text.selected.items[index]

            return (
              <article className="project-card" key={project.number}>
                <div className={`project-preview preview-${project.preview}`} aria-hidden="true">
                  <span>{project.number}</span>
                </div>
                <p className="project-type">{projectText.type}</p>
                <h3>{projectText.title}</h3>
                <p className="project-description">{projectText.description}</p>
                <Link className="project-link" to={paths.experience}>{text.selected.link} <span aria-hidden="true">-&gt;</span></Link>
              </article>
            )
          })}
        </div>
      </section>

      <ExperiencePreview experience={text.experience} />
    </>
  )
}

export default HomePage
