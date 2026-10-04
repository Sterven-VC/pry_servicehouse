import { useEffect, useState } from 'react'
import {
  clearAnalyticsCookies,
  getAnalyticsConsent,
  loadGoogleTag,
  saveAnalyticsConsent,
} from '../../lib/analytics'

export function CookieConsent() {
  const [choice, setChoice] = useState('loading')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setChoice(getAnalyticsConsent())
    loadGoogleTag()

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
    saveAnalyticsConsent('denied')
    clearAnalyticsCookies()
    setChoice('denied')
    setIsOpen(false)
  }

  if (choice === 'loading' || (choice !== null && !isOpen)) return null

  return (
    <section className="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div>
        <strong id="cookie-title">Tu privacidad importa</strong>
        <p id="cookie-description">Con tu permiso usamos cookies de Google Analytics y Google Ads para medir visitas y la eficacia de nuestros anuncios. Si las rechazas, no guardamos cookies de medición y Google solo recibe señales básicas sin cookies. No enviamos a Google los mensajes que escribes por WhatsApp.</p>
        <a href="/politica-de-cookies/">Ver política de cookies</a>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={reject}>Rechazar cookies</button>
        <button type="button" className="cookie-accept" onClick={accept}>Aceptar cookies</button>
      </div>
    </section>
  )
}
