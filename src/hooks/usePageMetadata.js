import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'Vanessa Dugarte'
let hasNavigated = false

export function formatDocumentTitle(pageTitle) {
  return `${pageTitle} | ${siteName}`
}

export function usePageMetadata(pageTitle) {
  const headingRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.title = formatDocumentTitle(pageTitle)
  }, [pageTitle])

  useEffect(() => {
    if (location.key === 'default' && !hasNavigated) return undefined

    hasNavigated = true

    const animationFrame = window.requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [location.key])

  return headingRef
}
