import { ADS_CONTACT_CONVERSION } from '../lib/analytics.js'

export const CONTACT = {
  whatsappDisplay: '929 853 856',
  whatsappNumber: '51929853856',
  whatsappMessage: 'Hola, deseo consultar la disponibilidad para una revisión a domicilio.',
  phoneDisplay: '929 853 856',
  phoneUrl: 'tel:+51929853856',
}

export function formatWhatsAppMessage(message = CONTACT.whatsappMessage) {
  const details = 'Equipo: \nMarca y modelo o referencia: \nDistrito: \nFalla o servicio solicitado: '
  return `${message.trim()}\n\n${details}\n\nGracias. Quedo atento/a para coordinar la visita.`
}

export function createWhatsAppUrl(message = CONTACT.whatsappMessage, { formatted = false } = {}) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(formatted ? message : formatWhatsAppMessage(message))}`
}

// The Google Ads conversion is the one the campaign bids on. The GA4 events stay for
// analytics and as secondary (observation) actions imported into Google Ads.
const CONTACT_EVENTS = { whatsapp: 'whatsapp_contact_click', call: 'call_contact_click' }

// Consent Mode decides whether this is stored with cookies or sent as a cookieless ping.
export function trackContact(method, placement) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const params = { contact_method: method, placement }
  window.gtag('event', 'conversion', { send_to: ADS_CONTACT_CONVERSION, value: 1.0, currency: 'PEN' })
  window.gtag('event', 'contact_click', params)
  if (CONTACT_EVENTS[method]) window.gtag('event', CONTACT_EVENTS[method], params)
}
