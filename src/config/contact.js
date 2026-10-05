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

// GA4 events imported into Google Ads: `contact_click` is the primary conversion;
// the per-channel events feed the secondary "Clic a WhatsApp" action and call reports.
const CONTACT_EVENTS = { whatsapp: 'whatsapp_contact_click', call: 'call_contact_click' }

// Consent Mode decides whether this is stored with cookies or sent as a cookieless ping.
export function trackContact(method, placement) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const params = { contact_method: method, placement }
  window.gtag('event', 'contact_click', params)
  if (CONTACT_EVENTS[method]) window.gtag('event', CONTACT_EVENTS[method], params)
}
