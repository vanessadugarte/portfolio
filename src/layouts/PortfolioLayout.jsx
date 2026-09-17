import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'
import { translations } from '../content/translations.js'

function PortfolioLayout() {
  const location = useLocation()
  const [language, setLanguage] = useState(() => (
    window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'
  ))
  const text = translations[language]

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'))
  }

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <main className="page">
      <Navigation onLanguageChange={toggleLanguage} text={text} />
      <Outlet context={{ text }} />
    </main>
  )
}

export default PortfolioLayout
