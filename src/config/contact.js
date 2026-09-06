export const CONTACT = {
  whatsappDisplay: '912 138 192',
  whatsappNumber: '51912138192',
  whatsappMessage: 'Hola, quisiera información sobre el servicio técnico a domicilio.',
  phoneDisplay: '997 628 986',
  phoneUrl: 'tel:+51997628986',
}

export function createWhatsAppUrl(message = CONTACT.whatsappMessage) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function trackContact(method, placement) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'contact_click',
    contact_method: method,
    placement,
  })
}
