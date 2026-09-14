import { getAnalyticsConsent } from '../lib/analytics.js'

export const CONTACT = {
  whatsappDisplay: '912 138 192',
  whatsappNumber: '51912138192',
  whatsappMessage: 'Hola, quisiera información sobre el servicio técnico a domicilio.',
  phoneDisplay: '997 628 986',
  phoneUrl: 'tel:+51997628986',
}

const WHATSAPP_SOURCE = 'Enviado desde https://sevihouseperu.com'

export function createWhatsAppUrl(message = CONTACT.whatsappMessage) {
  const text = `${message.trimEnd()}\n\n${WHATSAPP_SOURCE}`
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function trackContact(method, placement) {
  if (getAnalyticsConsent() !== 'granted') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'contact_click', {
    contact_method: method,
    placement,
  })
}
