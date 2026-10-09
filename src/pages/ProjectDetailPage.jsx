import { Link, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { getProjectDetails } from '../content/projectDetails.js'
import { getProjectBySlug, getProjectNeighbors, getProjectsByCategory, getProjectsInMenuOrder } from '../content/projects.js'
import { getProjectCategory, projectCategories } from '../content/projectCategories.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import { paths } from '../routes/paths.js'
import WhoIsPayingApp from '../components/WhoIsPayingApp.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import './MuranaProjectDetail.scss'
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

function ProjectFacts({ facts }) {
  return (
    <dl className="project-detail-facts">
      {facts.map(({ label, value }, factIndex) => (
        <div key={label}>
          <ProjectFactIcon factIndex={factIndex} />
          <dt className="project-detail-fact-label">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function ProjectExternalLinks({ links, localizedLinks }) {
  return (
    <div className="project-detail-external-links" aria-label={localizedLinks.label}>
      {links.map(({ id, href }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={localizedLinks.items[id].ariaLabel}
          key={id}
        >
          {localizedLinks.items[id].label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

function ProjectDetailPlaceholder({ content, navigation, neighbors, text }) {
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
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
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

function ColorPalette({ headingId, headingLevel = 'h3', title, colors }) {
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

function WhoIsPayingProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article className="project-detail project-detail--who-is-paying" aria-labelledby="project-detail-title">
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="project-detail-summary">
          <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
          <ProjectExternalLinks links={assets.links} localizedLinks={detail.links} />
        </header>

        <WhoIsPayingApp copy={detail.interactive} />

        <section className="who-is-paying-project-palette" aria-labelledby="who-is-paying-palette-title">
          <ColorPalette
            headingId="who-is-paying-palette-title"
            headingLevel="h2"
            title={detail.paletteTitle}
            colors={assets.palette}
          />
        </section>
      </div>
    </article>
  )
}

function GalleryProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article
      className="project-detail project-detail--snapchat-frames"
      aria-labelledby="project-detail-title"
      style={{
        '--project-accent-color': assets.accentColor,
        '--project-title-secondary-color': assets.secondaryAccentColor,
      }}
    >
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="project-detail-frames-summary">
          <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>
            {detail.titleParts.map((part, index) => (
              <span className={index === 1 ? 'project-detail-title-secondary' : undefined} key={`${index}-${part}`}>
                {index > 0 ? ' ' : ''}{part}
              </span>
            ))}
          </h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <div className="project-detail-frames-section">
          <div className="project-detail-frames-grid">
            {assets.frames.map((frame, index) => (
              <figure className="project-detail-frame" key={frame.id}>
                <figcaption>{detail.frames[frame.id].name}</figcaption>
                <img
                  src={frame.image}
                  alt={detail.frames[frame.id].alt}
                  width={frame.width}
                  height={frame.height}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <section className="project-detail-isolated-assets" aria-labelledby="snapchat-assets-title">
            <SectionIntroduction
              id="snapchat-assets-title"
              number="02"
              title={detail.isolatedAssetsTitle}
              description={detail.isolatedAssetsDescription}
            />
            <ul>
              {assets.isolatedAssets.map((asset, index) => (
                <li key={asset.image}>
                  <img
                    src={asset.image}
                    alt={formatTemplate(detail.isolatedAssetsAlt, { number: index + 1 })}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>

      </div>
    </article>
  )
}

function NationalitiesProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article className="project-detail project-detail--muchokids-nationalities" aria-labelledby="project-detail-title">
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <div className="project-detail-nationalities-hero">
          <header className="project-detail-nationalities-summary">
            <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
            <p className="project-detail-introduction">{detail.introduction}</p>
            <ProjectFacts facts={detail.facts} />
          </header>

          <figure className="project-detail-nationalities-feature">
            <div className="project-detail-nationalities-artwork">
              <img
                className="project-detail-nationalities-background"
                src={assets.backgroundImage}
                alt=""
                width={assets.backgroundDimensions.width}
                height={assets.backgroundDimensions.height}
                aria-hidden="true"
              />
              <img
                className="project-detail-nationalities-face"
                src={assets.heroImage}
                alt={detail.heroAlt}
                width={assets.heroDimensions.width}
                height={assets.heroDimensions.height}
                fetchPriority="high"
              />
              <div className="project-detail-nationalities-flags" aria-hidden="true">
                {Array.from({ length: 3 }, (_, index) => (
                  <img src={assets.flagImage} alt="" width="260" height="254" key={index} />
                ))}
              </div>
            </div>
          </figure>
        </div>

        <section className="project-detail-nationalities-gallery" aria-labelledby="nationalities-gallery-title">
          <header className="project-detail-section-intro project-detail-nationalities-gallery-intro">
            <h2 id="nationalities-gallery-title">
              <span aria-hidden="true">01</span>
              {detail.galleryTitle}
            </h2>
          </header>

          <div className="project-detail-nationalities-grid">
            {assets.characters.map((character) => (
              <figure className="project-detail-nationalities-character" key={character.id}>
                <img
                  src={character.image}
                  alt={detail.characters[character.id].alt}
                  width="582"
                  height="788"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{detail.characters[character.id].name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

function MuranaProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article className="project-detail project-detail--murana" aria-labelledby="project-detail-title">
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="murana-project-summary">
          <p className="murana-project-kicker">{content.type}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <section className="murana-project-archive" aria-labelledby="murana-archive-title">
          <p>{detail.archiveEyebrow}</p>
          <div>
            <h2 id="murana-archive-title">{detail.archiveTitle}</h2>
            <p>{detail.archiveDescription}</p>
          </div>
        </section>

        <section className="murana-replica-section" aria-labelledby="murana-replica-title">
          <header className="murana-replica-intro">
            <h2 id="murana-replica-title">{detail.replicaTitle}</h2>
            <p>{detail.replicaDescription}</p>
          </header>

          <div className="murana-replica">
            <img
              className="murana-replica-hero"
              src={assets.heroImage}
              alt={detail.heroAlt}
              width={assets.heroDimensions.width}
              height={assets.heroDimensions.height}
              fetchPriority="high"
            />

            <section className="murana-replica-categories" aria-labelledby="murana-categories-title">
              <h3 id="murana-categories-title">{detail.categoriesTitle}</h3>
              <ul>
                {assets.categories.map((category) => (
                  <li key={category.id}>
                    <img
                      src={category.image}
                      alt={detail.categories[category.id].alt}
                      width="300"
                      height="300"
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{detail.categories[category.id].name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="murana-replica-care" aria-labelledby="murana-care-title">
              <h3 id="murana-care-title">{detail.carePillarsTitle}</h3>
              <div className="murana-replica-care-grid">
                {assets.carePillars.map((pillar) => (
                  <article key={pillar.id}>
                    <img
                      src={pillar.image}
                      alt={detail.carePillars[pillar.id].alt}
                      width="945"
                      height="529"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h4>{detail.carePillars[pillar.id].title}</h4>
                      <p>{detail.carePillars[pillar.id].description}</p>
                      <span>{detail.lineLabel}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="murana-replica-lookbook" aria-labelledby="murana-lookbook-title">
              <header>
                <h3 id="murana-lookbook-title">{detail.lookbookTitle}</h3>
                <p>{detail.lookbookDescription}</p>
              </header>
              <div className="murana-replica-lookbook-grid">
                {assets.lookbook.map((image) => (
                  <img
                    className={`murana-lookbook-${image.id}`}
                    src={image.image}
                    alt={detail.lookbook[image.id]}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    key={image.id}
                  />
                ))}
              </div>
            </section>

            <section className="murana-replica-products" aria-labelledby="murana-products-title">
              <h3 id="murana-products-title">{detail.productsTitle}</h3>
              <ul>
                {assets.products.map((product) => (
                  <li key={product.id}>
                    <img
                      src={product.image}
                      alt={detail.products[product.id].alt}
                      width="550"
                      height="550"
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{detail.products[product.id].name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <footer className="murana-replica-closing">
              <div>
                <h3>{detail.closingTitle}</h3>
                <p>{detail.closingDescription}</p>
              </div>
              <span aria-hidden="true">MU<br />RA<br />NA</span>
            </footer>
          </div>

          <p className="murana-project-note">{detail.portfolioNote}</p>
        </section>
      </div>
    </article>
  )
}

function GameProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article
      className="project-detail project-detail--muchomix-game"
      aria-labelledby="project-detail-title"
      style={{
        '--project-accent-color': assets.accentColor,
        '--project-title-secondary-color': assets.secondaryAccentColor,
      }}
    >
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="project-detail-game-summary">
          <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <figure className="project-detail-game-hero">
          <img
            src={assets.heroImage}
            alt={detail.heroAlt}
            width={assets.heroDimensions.width}
            height={assets.heroDimensions.height}
            fetchPriority="high"
          />
        </figure>

        <div className="project-detail-game-sections">
          {assets.sections.map((section, sectionIndex) => {
            const sectionContent = detail.sections[section.id]

            return (
              <section className="project-detail-game-section" aria-labelledby={`muchomix-${section.id}-title`} key={section.id}>
                <SectionIntroduction
                  id={`muchomix-${section.id}-title`}
                  number={String(sectionIndex + 2).padStart(2, '0')}
                  title={sectionContent.title}
                  description={sectionContent.description}
                />
                <div className="project-detail-game-grid">
                  {section.screens.map((screen) => {
                    const screenContent = sectionContent.screens[screen.id]

                    return (
                      <figure className="project-detail-game-screen" key={screen.id}>
                        <img
                          src={screen.image}
                          alt={screenContent.alt}
                          width={screen.width}
                          height={screen.height}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption>{screenContent.label}</figcaption>
                      </figure>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </article>
  )
}

function BiomesProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article
      className="project-detail project-detail--muchomix-biomas"
      aria-labelledby="project-detail-title"
      style={{
        '--project-accent-color': assets.accentColor,
        '--project-title-secondary-color': assets.secondaryAccentColor,
      }}
    >
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="project-detail-biomes-summary">
          <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <section className="project-detail-biomes-section" aria-labelledby="muchomix-biomes-gallery-title">
          <SectionIntroduction
            id="muchomix-biomes-gallery-title"
            number="02"
            title={detail.galleryTitle}
            description={detail.galleryDescription}
          />
          <ol className="project-detail-biomes-grid">
            {assets.biomes.map((biome, index) => (
              <li key={biome.id}>
                <figure className="project-detail-biome">
                  <img
                    src={biome.image}
                    alt={detail.biomes[biome.id].alt}
                    width={biome.width}
                    height={biome.height}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : undefined}
                    decoding="async"
                  />
                  <figcaption>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    {detail.biomes[biome.id].name}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  )
}

function CandlesProjectDetail({ assets, content, navigation, neighbors, text }) {
  const headingRef = usePageMetadata(content.title)
  const detail = content.detail
  const categoryName = text.categories[getProjectCategory(navigation.categoryId).id]

  return (
    <article
      className="project-detail project-detail--angels-sighs"
      aria-labelledby="project-detail-title"
      style={{
        '--project-accent-color': assets.accentColor,
        '--project-title-secondary-color': assets.secondaryAccentColor,
      }}
    >
      <div className="project-detail-inner">
        <ProjectNavigation
          categoryName={categoryName}
          navigation={navigation}
          neighbors={neighbors}
          text={text}
        />

        <header className="project-detail-candles-summary">
          <p className="project-detail-number" aria-hidden="true">{detail.number}</p>
          <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
          <p className="project-detail-introduction">{detail.introduction}</p>
          <ProjectFacts facts={detail.facts} />
        </header>

        <figure className="project-detail-candles-hero">
          <img
            src={assets.heroImage}
            alt={detail.heroAlt}
            width={assets.heroDimensions.width}
            height={assets.heroDimensions.height}
            fetchPriority="high"
          />
        </figure>

        <section className="project-detail-candles-section project-detail-candles-identity" aria-labelledby="angels-identity-title">
          <SectionIntroduction
            id="angels-identity-title"
            number="02"
            title={detail.identity.title}
            description={detail.identity.description}
          />
          <div className="project-detail-candles-brand-grid">
            <figure className="project-detail-candles-brand-guidelines">
              <img
                src={assets.brand.guidelinesImage}
                alt={detail.identity.guidelinesAlt}
                width={assets.brand.guidelinesDimensions.width}
                height={assets.brand.guidelinesDimensions.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{detail.identity.guidelinesLabel}</figcaption>
            </figure>
            <figure>
              <img
                src={assets.brand.logoImage}
                alt={detail.identity.logoAlt}
                width={assets.brand.logoDimensions.width}
                height={assets.brand.logoDimensions.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{detail.identity.logoLabel}</figcaption>
            </figure>
            <figure className="project-detail-candles-label">
              <img
                src={assets.brand.labelImage}
                alt={detail.identity.labelAlt}
                width={assets.brand.labelDimensions.width}
                height={assets.brand.labelDimensions.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{detail.identity.labelLabel}</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-detail-candles-section" aria-labelledby="angels-applications-title">
          <SectionIntroduction
            id="angels-applications-title"
            number="03"
            title={detail.applications.title}
            description={detail.applications.description}
          />
          <div className="project-detail-candles-applications">
            {assets.applications.map((application) => (
              <figure key={application.id}>
                <img
                  src={application.image}
                  alt={detail.applications.items[application.id].alt}
                  width={application.width}
                  height={application.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{detail.applications.items[application.id].name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="project-detail-candles-section" aria-labelledby="angels-collection-title">
          <SectionIntroduction
            id="angels-collection-title"
            number="04"
            title={detail.collection.title}
            description={detail.collection.description}
          />
          <div className="project-detail-candles-collection">
            {assets.illustrations.map((illustration) => (
              <figure key={illustration.id}>
                <div className="project-detail-candles-illustration">
                  <img
                    src={illustration.image}
                    alt={detail.collection.items[illustration.id].alt}
                    width="1800"
                    height="1800"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>{detail.collection.items[illustration.id].name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="project-detail-candles-section project-detail-candles-process" aria-labelledby="angels-process-title">
          <SectionIntroduction
            id="angels-process-title"
            number="05"
            title={detail.process.title}
            description={detail.process.description}
          />
          <div className="project-detail-candles-videos">
            {assets.processVideos.map((video) => (
              <figure key={video.id}>
                <video
                  aria-label={detail.process.videos[video.id].label}
                  controls
                  playsInline
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  {detail.process.videoFallback}
                </video>
                <figcaption>{detail.process.videos[video.id].name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </article>
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
        '--project-detail-count': assets.detailImages?.length ?? 0,
        '--project-process-step-count': assets.processImages?.length ?? 0,
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
            <h1 className="project-detail-title" id="project-detail-title" ref={headingRef} tabIndex={-1}>{content.title}</h1>
            <p className="project-detail-introduction">{detail.introduction}</p>
            <ProjectFacts facts={detail.facts} />
            {assets.links && (
              <ProjectExternalLinks links={assets.links} localizedLinks={detail.links} />
            )}
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
              {assets.heroDecorations?.map((decoration, index) => (
                <img
                  className={`project-detail-hero-ornament project-detail-hero-ornament--${index + 1}`}
                  src={decoration}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  key={decoration}
                />
              ))}
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
              colors={assets.palette}
            />
          </section>
        )}

        {assets.palette && !assets.referenceImages && !['hero', 'process'].includes(assets.palettePlacement) && (
          <section className="project-detail-section project-detail-palette-section" aria-labelledby="project-palette-title">
            <ColorPalette
              headingId="project-palette-title"
              headingLevel="h2"
              title={detail.paletteTitle}
              colors={assets.palette}
            />
          </section>
        )}

        {assets.processImages && (
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
            {assets.palettePlacement === 'process' && (
            <aside className="project-detail-process-palette" aria-labelledby="project-process-palette-title">
              <ColorPalette
                headingId="project-process-palette-title"
                title={detail.paletteTitle}
                colors={assets.palette}
              />
            </aside>
            )}
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
        )}

        {assets.detailImages && (
          <section className="project-detail-section project-detail-gallery project-detail-details-section" aria-labelledby="project-details-title">
          <SectionIntroduction
            id="project-details-title"
            number={assets.referenceImages ? (assets.processImages ? '04' : '03') : (assets.processImages ? '03' : '02')}
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
        )}

        {assets.closeupImages && (
          <section className="project-detail-section project-detail-gallery project-detail-closeups-section" aria-labelledby="project-closeups-title">
            <SectionIntroduction
              id="project-closeups-title"
              number={assets.referenceImages ? '05' : '04'}
              title={detail.closeupsTitle}
              description={detail.closeupsDescription}
            />
            {assets.closeupImages.map((image, index) => (
              <img
                className="project-detail-closeup-image"
                src={image}
                alt={detail.imageAlt.closeups[index]}
                width="725"
                height="569"
                loading="lazy"
                decoding="async"
                key={image}
              />
            ))}
          </section>
        )}

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
        text={text}
      />
    )
  }

  if (assets.layout === 'who-is-paying') {
    return (
      <WhoIsPayingProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'gallery') {
    return (
      <GalleryProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'nationalities') {
    return (
      <NationalitiesProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'murana') {
    return (
      <MuranaProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'game') {
    return (
      <GameProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'biomes') {
    return (
      <BiomesProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
        text={text}
      />
    )
  }

  if (assets.layout === 'candles') {
    return (
      <CandlesProjectDetail
        assets={assets}
        content={content}
        navigation={navigation}
        neighbors={neighbors}
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
