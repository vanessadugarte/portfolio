import { Navigate, useLocation } from 'react-router-dom'
import { paths } from './paths.js'

export default function LegacyProjectRedirect({ slug }) {
  const { search } = useLocation()

  return <Navigate to={`${paths.projectDetail(slug)}${search}`} replace />
}
