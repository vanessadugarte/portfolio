import { Link, useOutletContext, useParams } from 'react-router-dom'
import { getProjectDetails } from '../content/projectDetails.js'
import { getProjectBySlug, getProjectNeighbors } from '../content/projects.js'
import { getProjectCategory } from '../content/projectCategories.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import { paths } from '../routes/paths.js'
import NotFoundPage from './NotFoundPage.jsx'
import './ProjectDetailPage.scss'

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    template,
  )
}

function ProjectDetailPlaceholder({ content, project, text }) {
  const headingRef = usePageMetadata(content.title)

  return (
    <section className="project-detail-placeholder" aria-labelledby="project-detail-title">
      <p className="project-detail-categories">
        {project.categoryIds.map((categoryId) => text.categories[getProjectCategory(categoryId).id]).join(' · ')}
      </p>
      <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
      <p className="project-detail-pending">{text.comingSoon}</p>
    </section>
  )
}

function SectionIntroduction({ description, id, number, title }) {
  return (
    <header className="project-detail-section-intro">
      <h2 id={id}>
        <span aria-hidden="true">{number}</span>
        {title}
      </h2>
      <p>{description}</p>
    </header>
  )
}

function ProjectPager({ neighbors, text }) {
  const previousContent = neighbors.previous && text.projects.items[neighbors.previous.id]
  const nextContent = neighbors.next && text.projects.items[neighbors.next.id]

  return (
    <nav className="project-detail-pager" aria-label={text.nav.projects}>
      {neighbors.previous && (
        <Link
          className="project-detail-pager-previous"
          to={paths.projectDetail(neighbors.previous.id)}
          aria-label={formatTemplate(text.projectDetail.previousProjectLabel, { title: previousContent.title })}
        >
          <span aria-hidden="true">←</span> {text.projectDetail.previousProject}
        </Link>
      )}
      {neighbors.next && (
        <Link
          className="project-detail-pager-next"
          to={paths.projectDetail(neighbors.next.id)}
          aria-label={formatTemplate(text.projectDetail.nextProjectLabel, { title: nextContent.title })}
        >
          {text.projectDetail.nextProject} <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  )
}

function CompleteProjectDetail({ assets, content, project, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const category = getProjectCategory(project.categoryIds[0])
  const neighbors = getProjectNeighbors(project.id)
  const categoryName = text.categories[category.id]

  return (
    <article className="project-detail" aria-labelledby="project-detail-title">
      <div className="project-detail-inner">
        <Link className="project-detail-back" to={paths.projectCategory(category.slug)}>
          <span aria-hidden="true">←</span>{' '}
          {formatTemplate(text.projectDetail.backToCategory, { category: categoryName.toLocaleLowerCase() })}
        </Link>

        <div className="project-detail-hero">
          <img className="project-detail-decoration project-detail-decoration-left" src={assets.decorationImage} alt="" aria-hidden="true" />
          <img className="project-detail-decoration project-detail-decoration-right" src={assets.decorationImage} alt="" aria-hidden="true" />

          <header className="project-detail-summary">
            <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
            <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
            <p className="project-detail-eyebrow">{detail.eyebrow}</p>
            <p className="project-detail-introduction">{detail.introduction}</p>
            <dl className="project-detail-facts">
              {detail.facts.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <figure className="project-detail-final-artwork">
            <img
              src={assets.heroImage}
              alt={detail.imageAlt.hero}
              width="1300"
              height="759"
              fetchPriority="high"
            />
          </figure>
        </div>

        <section className="project-detail-section project-detail-references" aria-labelledby="project-references-title">
          <SectionIntroduction
            id="project-references-title"
            number="02"
            title={detail.referencesTitle}
            description={detail.referencesDescription}
          />
          {assets.referenceImages.map((image, index) => (
            <img
              className="project-detail-reference-image"
              src={image}
              alt={detail.imageAlt.references[index]}
              width="760"
              height="500"
              loading="lazy"
              decoding="async"
              key={image}
            />
          ))}
          <div className="project-detail-palette">
            <h3>{detail.paletteTitle}</h3>
            <ul aria-label={detail.paletteTitle}>
              {assets.palette.map((color) => (
                <li key={color} aria-label={color}>
                  <span aria-hidden="true" style={{ '--swatch-color': color }} />
                </li>
              ))}
            </ul>
            <p>{detail.paletteDescription}</p>
          </div>
        </section>

        <section className="project-detail-section project-detail-gallery" aria-labelledby="project-process-title">
          <SectionIntroduction
            id="project-process-title"
            number="03"
            title={detail.processTitle}
            description={detail.processDescription}
          />
          {assets.processImages.map((image, index) => (
            <img
              src={image}
              alt={detail.imageAlt.process[index]}
              width="655"
              height="500"
              loading="lazy"
              decoding="async"
              key={image}
            />
          ))}
        </section>

        <section className="project-detail-section project-detail-gallery" aria-labelledby="project-details-title">
          <SectionIntroduction
            id="project-details-title"
            number="04"
            title={detail.detailsTitle}
            description={detail.detailsDescription}
          />
          {assets.detailImages.map((image, index) => (
            <img
              src={image}
              alt={detail.imageAlt.details[index]}
              width="615"
              height="500"
              loading="lazy"
              decoding="async"
              key={image}
            />
          ))}
        </section>

        <figure className="project-detail-expanded-artwork">
          <img
            src={assets.heroImage}
            alt={detail.imageAlt.hero}
            width="1300"
            height="759"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <ProjectPager neighbors={neighbors} text={text} />
      </div>
    </article>
  )
}

function ProjectDetailPage() {
  const { text } = useOutletContext()
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage />
  }

  const content = text.projects.items[project.id]
  const assets = getProjectDetails(project.id)

  if (!assets || !content.detail) {
    return <ProjectDetailPlaceholder content={content} project={project} text={text} />
  }

  return <CompleteProjectDetail assets={assets} content={content} project={project} text={text} />
}

export default ProjectDetailPage
