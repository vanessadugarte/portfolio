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

function ProjectFactIcon({ factIndex }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'project-detail-fact-icon',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  if (factIndex === 0) {
    return <svg {...commonProps}><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /></svg>
  }

  if (factIndex === 1) {
    return <svg {...commonProps}><path d="m14.7 6.3 3 3M4 20l4.6-1.1L18.2 9.3a2.1 2.1 0 0 0-3-3l-9.6 9.6L4 20Z" /><path d="m12.8 8.2 3 3" /></svg>
  }

  return <svg {...commonProps}><path d="M21 7.5a6 6 0 0 1-8.7 5.3L6.1 19A2.1 2.1 0 1 1 3 16l6.2-6.2A6 6 0 0 1 16.5 3l-3.1 3.1 4.5 4.5L21 7.5Z" /></svg>
}

function ProjectDetailPlaceholder({ content, navigation, neighbors, project, text }) {
  const headingRef = usePageMetadata(content.title)
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <section className="project-detail-placeholder" aria-labelledby="project-detail-title">
      <div className="project-detail-placeholder-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />
        <div className="project-detail-placeholder-content">
          <p className="project-detail-categories">
            {project.categoryIds.map((categoryId) => text.categories[getProjectCategory(categoryId).id]).join(' · ')}
          </p>
          <h1 id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
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
          <span aria-hidden="true">←</span>
          <span>{text.projectDetail.previousProject}</span>
        </Link>
      )}
      {neighbors.next && (
        <Link
          className="project-detail-pager-next"
          to={paths.projectDetail(neighbors.next.id, categoryId)}
          aria-label={formatTemplate(text.projectDetail.nextProjectLabel, { title: nextContent.title })}
        >
          <span>{text.projectDetail.nextProject}</span>
          <span aria-hidden="true">→</span>
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

function ProjectNavigation({ categoryName, navigation, neighbors, text }) {
  return (
    <div className="project-detail-navigation">
      <ProjectBackLink categoryName={categoryName} navigation={navigation} text={text} />
      <ProjectPager categoryId={navigation.contextId} neighbors={neighbors} text={text} />
    </div>
  )
}

function CompleteProjectDetail({ assets, content, navigation, neighbors, project, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const category = getProjectCategory(navigation.categoryId)
  const categoryName = text.categories[category.id]
  const illustrationStyle = assets.illustrationTreatment
    ? {
        '--project-accent-color': assets.accentColor,
        '--project-detail-count': assets.detailImages.length,
        '--project-process-step-count': assets.processImages.length,
      }
    : undefined

  return (
    <article
      className={`project-detail project-detail--${project.id}${assets.illustrationTreatment ? ' project-detail--illustration-treatment' : ''}`}
      aria-labelledby="project-detail-title"
      style={illustrationStyle}
    >
      {project.id === 'donas-3d' && (
        <div className="project-detail-sprinkles" aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => <span key={index} />)}
        </div>
      )}
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

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
            <p className="project-detail-introduction">{detail.introduction}</p>
            <dl className="project-detail-facts">
              {detail.facts.map(({ label, value }, factIndex) => (
                <div key={label}>
                  {assets.illustrationTreatment && <ProjectFactIcon factIndex={factIndex} />}
                  <dt className={assets.illustrationTreatment ? 'project-detail-fact-label' : undefined}>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          {assets.heroSecondaryImage ? (
            <div className="project-detail-final-artworks">
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
              </figure>
              <figure className="project-detail-final-artwork">
                <img
                  className={assets.organicMasks?.heroSecondary ? 'project-detail-organic-image' : undefined}
                  src={assets.heroSecondaryImage}
                  alt={detail.imageAlt.heroSecondary}
                  width={assets.heroSecondaryDimensions?.width ?? 1300}
                  height={assets.heroSecondaryDimensions?.height ?? 759}
                  fetchPriority="high"
                  style={getOrganicMaskStyle(assets.organicMasks?.heroSecondary)}
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
                        src={arrow.src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        style={{
                          '--project-process-arrow-mobile-rotation': `${arrow.mobileRotation}deg`,
                          '--project-process-arrow-desktop-rotation': `${arrow.desktopRotation}deg`,
                        }}
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
            const detailImage = (
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

            return assets.illustrationTreatment && mask
              ? (
                  <div
                    className="project-detail-detail-frame"
                    key={image}
                    style={getOrganicMaskStyle(mask)}
                  >
                    {detailImage}
                  </div>
                )
              : detailImage
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
