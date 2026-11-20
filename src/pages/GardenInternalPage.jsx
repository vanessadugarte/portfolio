import { Link, useOutletContext, useParams } from 'react-router-dom'
import GardenProductGrid from '../components/GardenProductGrid.jsx'
import GardenSiteHeader from '../components/GardenSiteHeader.jsx'
import { getProjectDetails } from '../content/projectDetails.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import { paths } from '../routes/paths.js'
import { formatGardenPrice } from '../utils/formatGardenPrice.js'
import NotFoundPage from './NotFoundPage.jsx'
import './GardenProjectDetail.scss'

const assets = getProjectDetails('jardin-web')

function GardenFrame({ children, detail }) {
  return (
    <article className="project-detail project-detail--garden garden-internal-page">
      <div className="project-detail-inner">
        <Link className="garden-back-to-portfolio" to={paths.gardenHome}>{detail.backToPortfolio}</Link>
        <div className="garden-replica">
          <GardenSiteHeader detail={detail} logo={assets.logo} />
          {children}
          <div className="garden-replica-footer" aria-hidden="true">{detail.brandTitle}</div>
        </div>
        <p className="garden-project-note">{detail.portfolioNote}</p>
      </div>
    </article>
  )
}

export function GardenCatalogPage({ kind }) {
  const { text, language } = useOutletContext()
  const detail = text.projects.items['jardin-web'].detail
  const isPlants = kind === 'plants'
  const title = isPlants ? detail.plantsTitle : detail.potsTitle
  const headingRef = usePageMetadata(title)
  const products = isPlants ? assets.plants : assets.pots
  const localizedProducts = isPlants ? detail.plants : detail.pots

  return (
    <GardenFrame detail={detail}>
      <div className="garden-internal-content garden-internal-catalog">
        <h1 ref={headingRef} tabIndex={-1}>{title}</h1>
        <p>{isPlants ? detail.plantsDescription : detail.potsDescription}</p>
        <p className="garden-archive-price-note">{detail.priceNotice}</p>
        <GardenProductGrid
          kind={kind}
          products={products}
          localizedProducts={localizedProducts}
          language={language}
          priceLabel={detail.priceLabel}
        />
      </div>
    </GardenFrame>
  )
}

function GardenProductContent({ kind, product, detail, language }) {
  const localizedProduct = (kind === 'plants' ? detail.plants : detail.pots)[product.id]
  const title = localizedProduct.name
  const headingRef = usePageMetadata(title)
  const catalogPath = kind === 'plants' ? paths.gardenPlants : paths.gardenPots
  const category = kind === 'plants' ? detail.plantType : detail.potType
  const productCategory = product.category === 'interior' ? detail.indoorCategory : detail.smallCategory

  return (
    <GardenFrame detail={detail}>
      <div className="garden-internal-content garden-internal-product">
        <Link className="garden-back-to-catalog" to={catalogPath}>{detail.backToCatalog}</Link>
        <div className="garden-internal-product-layout">
          <img src={product.image} alt={localizedProduct.alt} width="255" height="226" />
          <div>
            <h1 ref={headingRef} tabIndex={-1}>{title}</h1>
            <p className="garden-internal-product-price">
              <span>{detail.priceLabel}</span>
              <strong>{formatGardenPrice(product.priceCLP, language)}</strong>
            </p>
            <p className="garden-archive-price-note">{detail.priceNotice}</p>
            <h2>{detail.productDescriptionTitle}</h2>
            <p>{localizedProduct.description}</p>
            <h2>{detail.technicalDetailsTitle}</h2>
            <dl className="garden-internal-product-facts">
              <div><dt>{detail.productTypeLabel}</dt><dd>{category}</dd></div>
              <div><dt>{detail.productCategoryLabel}</dt><dd>{productCategory}</dd></div>
            </dl>
            {kind === 'plants' && (
              <section aria-labelledby="garden-product-care-title">
                <h2 id="garden-product-care-title">{detail.careTitle}</h2>
                <p>{localizedProduct.care}</p>
              </section>
            )}
          </div>
        </div>
      </div>
    </GardenFrame>
  )
}

export function GardenProductPage({ kind }) {
  const { text, language } = useOutletContext()
  const { productSlug } = useParams()
  const detail = text.projects.items['jardin-web'].detail
  const products = kind === 'plants' ? assets.plants : assets.pots
  const product = products.find(({ slug }) => slug === productSlug)

  if (!product) return <NotFoundPage />

  return <GardenProductContent kind={kind} product={product} detail={detail} language={language} />
}

export function GardenContactPage() {
  const { text } = useOutletContext()
  const detail = text.projects.items['jardin-web'].detail
  const headingRef = usePageMetadata(detail.contactTitle)

  return (
    <GardenFrame detail={detail}>
      <div className="garden-internal-content garden-internal-contact">
        <h1 ref={headingRef} tabIndex={-1}>{detail.contactTitle}</h1>
        <p>{detail.contactDescription}</p>
        <img
          src={assets.contactMap.image}
          alt={detail.contactMapAlt}
          width={assets.contactMap.width}
          height={assets.contactMap.height}
          loading="lazy"
          decoding="async"
        />
        <p className="garden-archive-price-note">{detail.contactArchiveNote}</p>
      </div>
    </GardenFrame>
  )
}
