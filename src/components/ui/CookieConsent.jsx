import { useEffect, useState } from 'react'
import {
  clearAnalyticsCookies,
  getAnalyticsConsent,
  loadGoogleAnalytics,
  saveAnalyticsConsent,
} from '../../lib/analytics'

export function CookieConsent() {
  const [choice, setChoice] = useState('loading')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedChoice = getAnalyticsConsent()
    setChoice(savedChoice)
    if (savedChoice === 'granted') loadGoogleAnalytics()

    const openSettings = () => setIsOpen(true)
    window.addEventListener('open-cookie-settings', openSettings)
    return () => window.removeEventListener('open-cookie-settings', openSettings)
  }, [])

  const accept = () => {
    saveAnalyticsConsent('granted')
    setChoice('granted')
    setIsOpen(false)
  }

  const reject = () => {
    const analyticsWasActive = choice === 'granted'
    saveAnalyticsConsent('denied')
    clearAnalyticsCookies()
    setChoice('denied')
    setIsOpen(false)
    if (analyticsWasActive) window.location.reload()
  }

  if (choice === 'loading' || (choice !== null && !isOpen)) return null

  return (
    <section className="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div>
        <strong id="cookie-title">Tu privacidad importa</strong>
        <p id="cookie-description">Usamos Google Analytics únicamente con tu permiso para conocer qué páginas se visitan y mejorar el sitio. No enviamos a Analytics los mensajes que escribes por WhatsApp.</p>
        <a href="/politica-de-cookies/">Ver política de cookies</a>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={reject}>Rechazar analítica</button>
        <button type="button" className="cookie-accept" onClick={accept}>Aceptar analítica</button>
      </div>
    </section>
  )
}
