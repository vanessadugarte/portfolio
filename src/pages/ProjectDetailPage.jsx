import { Link, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { getProjectDetails } from '../content/projectDetails.js'
import { getProjectBySlug, getProjectNeighbors, getProjectsByCategory, getProjectsInMenuOrder } from '../content/projects.js'
import { getProjectCategory, projectCategories } from '../content/projectCategories.js'
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

function getOrganicMaskStyle(mask) {
  return mask ? { '--organic-mask': `url("${mask}")` } : undefined
}

function ProjectDetailPlaceholder({ content, navigation, neighbors, project, text }) {
  const headingRef = usePageMetadata(content.title)
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <section className="project-detail-placeholder" aria-labelledby="project-detail-title">
      <div className="project-detail-placeholder-inner">
        <ProjectBackLink categoryName={categoryName} navigation={navigation} text={text} />
        <div className="project-detail-placeholder-content">
          <p className="project-detail-categories">
            {project.categoryIds.map((categoryId) => text.categories[getProjectCategory(categoryId).id]).join(' · ')}
          </p>
          <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <ProjectPager categoryId={navigation.contextId} neighbors={neighbors} text={text} />
          <p className="project-detail-pending">{text.comingSoon}</p>
        </div>
      </div>
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

function ColorPalette({ description, headingId, headingLevel = 'h3', title, colors }) {
  const Heading = headingLevel

  return (
    <div className="project-detail-palette">
      <Heading id={headingId}>{title}</Heading>
      <ul aria-label={title}>
        {colors.map((color) => (
          <li key={color}>
            <span aria-hidden="true" style={{ '--swatch-color': color }} />
            <code>{color}</code>
          </li>
        ))}
      </ul>
      {description && <p>{description}</p>}
    </div>
  )
}

function ProjectPager({ categoryId, neighbors, text }) {
  const previousContent = neighbors.previous && text.projects.items[neighbors.previous.id]
  const nextContent = neighbors.next && text.projects.items[neighbors.next.id]

  return (
    <nav className="project-detail-pager" aria-label={text.nav.projects}>
      {neighbors.previous && (
        <Link
          className="project-detail-pager-previous"
          to={paths.projectDetail(neighbors.previous.id, categoryId)}
          aria-label={formatTemplate(text.projectDetail.previousProjectLabel, { title: previousContent.title })}
        >
          <span aria-hidden="true">←</span> {text.projectDetail.previousProject}
        </Link>
      )}
      {neighbors.next && (
        <Link
          className="project-detail-pager-next"
          to={paths.projectDetail(neighbors.next.id, categoryId)}
          aria-label={formatTemplate(text.projectDetail.nextProjectLabel, { title: nextContent.title })}
        >
          {text.projectDetail.nextProject} <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  )
}

function ProjectBackLink({ categoryName, navigation, text }) {
  return (
    <Link className="project-detail-back" to={navigation.backPath}>
      <span aria-hidden="true">←</span>{' '}
      {formatTemplate(text.projectDetail.backToCategory, { category: categoryName.toLocaleLowerCase() })}
    </Link>
  )
}

function CompleteProjectDetail({ assets, content, navigation, neighbors, project, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const category = getProjectCategory(navigation.categoryId)
  const categoryName = text.categories[category.id]

  return (
    <article className={`project-detail project-detail--${project.id}`} aria-labelledby="project-detail-title">
      {project.id === 'donas-3d' && (
        <div className="project-detail-sprinkles" aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => <span key={index} />)}
        </div>
      )}
      <div className="project-detail-inner">
        <ProjectBackLink categoryName={categoryName} navigation={navigation} text={text} />

        <div className="project-detail-hero">
          {assets.decorationImage && (
            <>
              <img className="project-detail-decoration project-detail-decoration-left" src={assets.decorationImage} alt="" aria-hidden="true" />
              <img className="project-detail-decoration project-detail-decoration-right" src={assets.decorationImage} alt="" aria-hidden="true" />
            </>
          )}

          <header className="project-detail-summary">
            <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
            <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
            <ProjectPager categoryId={navigation.contextId} neighbors={neighbors} text={text} />
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

          {assets.heroSecondaryImage ? (
            <div className="project-detail-final-artworks">
              <figure className="project-detail-final-artwork">
                <img
                  src={assets.heroImage}
                  alt={detail.imageAlt.hero}
                  width={assets.heroDimensions?.width ?? 1300}
                  height={assets.heroDimensions?.height ?? 759}
                  fetchPriority="high"
                />
              </figure>
              <figure className="project-detail-final-artwork">
                <img
                  src={assets.heroSecondaryImage}
                  alt={detail.imageAlt.heroSecondary}
                  width={assets.heroSecondaryDimensions?.width ?? 1300}
                  height={assets.heroSecondaryDimensions?.height ?? 759}
                  fetchPriority="high"
                />
              </figure>
            </div>
          ) : (
            <figure className="project-detail-final-artwork">
              <img
                className={assets.organicMasks?.hero ? 'project-detail-organic-image' : undefined}
                src={assets.heroImage}
                alt={detail.imageAlt.hero}
                width={assets.heroDimensions?.width ?? 1300}
                height={assets.heroDimensions?.height ?? 759}
                fetchPriority="high"
                style={getOrganicMaskStyle(assets.organicMasks?.hero)}
              />
              {assets.heroDecorations?.map((decoration, index) => (
                <img
                  className={`project-detail-hero-ornament project-detail-hero-ornament--${index + 1}`}
                  src={decoration}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  key={decoration}
                />
              ))}
            </figure>
          )}

          {assets.palettePlacement === 'hero' && (
            <aside className="project-detail-hero-palette" aria-labelledby="project-palette-title">
              <ColorPalette
                headingId="project-palette-title"
                headingLevel="h2"
                title={detail.paletteTitle}
                description={project.id === 'jungle' ? undefined : detail.paletteDescription}
                colors={assets.palette}
              />
              {assets.heroReferenceImages && (
                <div className="project-detail-hero-references" aria-labelledby="project-hero-references-title">
                  <h3 id="project-hero-references-title">{detail.referencesTitle}</h3>
                  {assets.heroReferenceImages.map((image, index) => (
                    <img
                      src={image}
                      alt={detail.imageAlt.heroReferences[index]}
                      width={assets.heroReferenceImageDimensions?.[index]?.width ?? 576}
                      height={assets.heroReferenceImageDimensions?.[index]?.height ?? 842}
                      loading="lazy"
                      decoding="async"
                      key={image}
                    />
                  ))}
                </div>
              )}
            </aside>
          )}
        </div>

        {assets.referenceImages && (
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
            <ColorPalette
              title={detail.paletteTitle}
              description={detail.paletteDescription}
              colors={assets.palette}
            />
          </section>
        )}

        {assets.palette && !assets.referenceImages && assets.palettePlacement !== 'hero' && (
          <section className="project-detail-section project-detail-palette-section" aria-labelledby="project-palette-title">
            <ColorPalette
              headingId="project-palette-title"
              headingLevel="h2"
              title={detail.paletteTitle}
              description={detail.paletteDescription}
              colors={assets.palette}
            />
          </section>
        )}

        <section className="project-detail-section project-detail-gallery project-detail-process-section" aria-labelledby="project-process-title">
          <SectionIntroduction
            id="project-process-title"
            number={assets.referenceImages ? '03' : '02'}
            title={detail.processTitle}
            description={detail.processDescription}
          />
          {assets.processArrows ? (
            <div className="project-detail-process-flow">
              {assets.processImages.map((image, index) => {
                const mask = assets.organicMasks?.process?.[index]
                const arrow = assets.processArrows[index]

                return (
                  <figure className="project-detail-process-step" key={image}>
                    <img
                      className={`project-detail-process-image${mask ? ' project-detail-organic-image' : ''}`}
                      src={image}
                      alt={detail.imageAlt.process[index]}
                      width={assets.processImageDimensions?.[index]?.width ?? 655}
                      height={assets.processImageDimensions?.[index]?.height ?? 500}
                      loading="lazy"
                      decoding="async"
                      style={getOrganicMaskStyle(mask)}
                    />
                    {arrow && (
                      <img
                        className="project-detail-process-arrow"
                        src={arrow}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </figure>
                )
              })}
            </div>
          ) : assets.processImages.map((image, index) => (
              <img
                className="project-detail-process-image"
                src={image}
                alt={detail.imageAlt.process[index]}
                width={assets.processImageDimensions?.[index]?.width ?? 655}
                height={assets.processImageDimensions?.[index]?.height ?? 500}
                loading="lazy"
                decoding="async"
                key={image}
              />
            ))}
          {assets.processWideImages?.map((image, index) => (
            <img
              className="project-detail-process-wide-image"
              src={image}
              alt={detail.imageAlt.processWide[index]}
              width="1508"
              height="713"
              loading="lazy"
              decoding="async"
              key={image}
            />
          ))}
        </section>

        <section className="project-detail-section project-detail-gallery project-detail-details-section" aria-labelledby="project-details-title">
          <SectionIntroduction
            id="project-details-title"
            number={assets.referenceImages ? '04' : '03'}
            title={detail.detailsTitle}
            description={detail.detailsDescription}
          />
          {assets.detailImages.map((image, index) => {
            const mask = assets.organicMasks?.details?.[index]

            return (
              <img
                className={`project-detail-detail-image${mask ? ' project-detail-organic-image' : ''}`}
                src={image}
                alt={detail.imageAlt.details[index]}
                width={assets.detailImageDimensions?.[index]?.width ?? 615}
                height={assets.detailImageDimensions?.[index]?.height ?? 500}
                loading="lazy"
                decoding="async"
                key={image}
                style={getOrganicMaskStyle(mask)}
              />
            )
          })}
        </section>

      </div>
    </article>
  )
}

function ProjectDetailPage() {
  const { text } = useOutletContext()
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage />
  }

  const content = text.projects.items[project.id]
  const assets = getProjectDetails(project.id)
  const requestedContextId = searchParams.get('categoria')
  const requestedCategory = projectCategories.find(({ id }) => id === requestedContextId)
  const category = requestedCategory && project.categoryIds.includes(requestedCategory.id)
    ? requestedCategory
    : getProjectCategory(project.categoryIds[0])
  const navigation = requestedContextId === 'all'
    ? {
        backPath: paths.projectCategory(getProjectCategory(project.categoryIds[0]).slug),
        categoryId: project.categoryIds[0],
        contextId: 'all',
        projects: getProjectsInMenuOrder(undefined, projectCategories),
      }
    : {
        backPath: paths.projectCategory(category.slug),
        categoryId: category.id,
        contextId: category.id,
        projects: getProjectsByCategory(category.id),
      }
  const neighbors = getProjectNeighbors(project.id, navigation.projects)

  if (!assets || !content.detail) {
    return (
      <ProjectDetailPlaceholder
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        project={project}
        text={text}
      />
    )
  }

  return (
    <CompleteProjectDetail
      assets={assets}
      content={content}
      navigation={navigation}
      neighbors={neighbors}
      project={project}
      text={text}
    />
  )
}

export default ProjectDetailPage
