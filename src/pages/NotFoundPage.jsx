import { Link, useOutletContext } from 'react-router-dom'
import { paths } from '../routes/paths.js'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import './NotFoundPage.scss'

function NotFoundPage() {
  const { text } = useOutletContext()
  const headingRef = usePageMetadata(text.notFound.title)

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p>{text.notFound.eyebrow}</p>
      <h1 id="not-found-title" ref={headingRef} tabIndex={-1}>{text.notFound.title}</h1>
      <p>{text.notFound.description}</p>
      <Link to={paths.home}>{text.notFound.backHome} <span aria-hidden="true">-&gt;</span></Link>
    </section>
  )
}

export default NotFoundPage
