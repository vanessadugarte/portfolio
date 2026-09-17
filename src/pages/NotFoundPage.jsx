import { Link, useOutletContext } from 'react-router-dom'
import { paths } from '../routes/paths.js'

function NotFoundPage() {
  const { text } = useOutletContext()

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p>{text.notFound.eyebrow}</p>
      <h1 id="not-found-title">{text.notFound.title}</h1>
      <p>{text.notFound.description}</p>
      <Link to={paths.home}>{text.notFound.backHome} <span aria-hidden="true">-&gt;</span></Link>
    </section>
  )
}

export default NotFoundPage
