import { Link, NavLink } from 'react-router-dom'
import { projectCategories } from '../content/projectCategories.js'
import { paths } from '../routes/paths.js'

function ProjectMenu({ text }) {
  return (
    <details className="project-menu">
      <summary>{text.nav.projects}</summary>
      <div className="project-menu-list">
        {projectCategories.map(({ slug }) => (
          <Link to={paths.projectCategory(slug)} key={slug}>{text.categories[slug]}</Link>
        ))}
        <Link to={paths.projects} className="view-all-projects">{text.viewAllProjects}</Link>
      </div>
    </details>
  )
}

function Navigation({ onLanguageChange, text }) {
  return (
    <nav className="navigation" aria-label={text.navigationLabel}>
      <NavLink to={paths.home} end>{text.nav.home}</NavLink>
      <ProjectMenu text={text} />
      <NavLink to={paths.experience}>{text.nav.experience}</NavLink>
      <button className="language-switch" type="button" onClick={onLanguageChange} aria-label={text.languageLabel}>
        {text.language}
      </button>
    </nav>
  )
}

export default Navigation
