import { Link, useOutletContext, useParams } from 'react-router-dom'
import { getProjectDetails } from '../content/projectDetails.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import { paths } from '../routes/paths.js'
import NotFoundPage from './NotFoundPage.jsx'
import './NavalInfographicsProjectDetail.scss'
import './ProjectDetailPage.scss'

function NavalSeriesContent({ content, series }) {
  const seriesText = content.detail.series[series.id]
  const headingRef = usePageMetadata(seriesText.title)
  const pageText = seriesText.pages ?? content.detail.pages

  return (
    <article className="project-detail project-detail--naval-infographics" aria-labelledby="naval-series-title">
      <div className="project-detail-inner">
        <Link className="naval-infographics-back" to={paths.projectDetail('naval-infographics')}>
          <span aria-hidden="true">←</span> {content.detail.backToCollection}
        </Link>

        <header className="naval-infographics-summary naval-infographics-summary--series">
          <p className="naval-infographics-type">{content.title}</p>
          <h1 className="project-detail-title" id="naval-series-title" ref={headingRef} tabIndex={-1}>{seriesText.title}</h1>
        </header>

        <ol className="naval-infographics-pages">
          {series.pages.map((page, index) => (
            <li className="naval-infographics-page" key={page.id}>
              <img
                src={page.image}
                alt={pageText[page.id].alt}
                width={page.width}
                height={page.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : undefined}
                decoding="async"
              />
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}

function NavalSeriesPage() {
  const { text } = useOutletContext()
  const { series: seriesId } = useParams()
  const series = getProjectDetails('naval-infographics').series.find(({ id }) => id === seriesId)

  if (!series) return <NotFoundPage />

  return <NavalSeriesContent content={text.projects.items['naval-infographics']} series={series} />
}

export default NavalSeriesPage
