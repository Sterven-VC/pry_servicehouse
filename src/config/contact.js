import { getAnalyticsConsent } from '../lib/analytics.js'

export const CONTACT = {
  whatsappDisplay: '929 853 856',
  whatsappNumber: '51929853856',
  whatsappMessage: 'Hola, deseo consultar la disponibilidad para una revisión a domicilio.',
  phoneDisplay: '997 628 986',
  phoneUrl: 'tel:+51997628986',
}

export function formatWhatsAppMessage(message = CONTACT.whatsappMessage) {
  const details = 'Equipo: [tipo de equipo]\nMarca y modelo o referencia: [marca / modelo]\nDistrito: [distrito]\nFalla o servicio solicitado: [describe la falla o el mantenimiento]'
  return `${message.trim()}\n\n${details}\n\nGracias. Quedo atento/a para coordinar la visita.`
}

export function createWhatsAppUrl(message = CONTACT.whatsappMessage, { formatted = false } = {}) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(formatted ? message : formatWhatsAppMessage(message))}`
}

export function trackContact(method, placement) {
  if (getAnalyticsConsent() !== 'granted') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'contact_click', {
    contact_method: method,
    placement,
  })
}
