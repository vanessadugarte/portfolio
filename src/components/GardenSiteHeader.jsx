import { Link, NavLink } from 'react-router-dom'
import { paths } from '../routes/paths.js'

const links = [paths.gardenHome, paths.gardenPlants, paths.gardenPots, paths.gardenContact]

export default function GardenSiteHeader({ detail, logo }) {
  return (
    <div className="garden-replica-bar">
      <Link className="garden-replica-logo" to={paths.gardenHome} aria-label={detail.brandTitle}>
        <img src={logo} alt="" width="112" height="64" />
      </Link>
      <nav className="garden-replica-nav" aria-label={detail.siteNavLabel}>
        {links.map((href, index) => (
          <NavLink key={href} to={href} end={href === paths.gardenHome}>
            {detail.menu[index]}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
