import { BUSINESS } from '../src/config/business.js'
import { CONTACT } from '../src/config/contact.js'
import { brands, faqs, serviceAreas } from '../src/data/siteData.js'
import { servicePages } from '../src/data/servicePages.js'

const LEGAL_PAGES = [
  ['Aviso legal', '/aviso-legal/'],
  ['Política de privacidad', '/politica-de-privacidad/'],
  ['Política de cookies', '/politica-de-cookies/'],
  ['Términos y condiciones', '/terminos-y-condiciones/'],
]

// llms.txt (https://llmstxt.org): a plain summary that AI assistants and AI search can quote.
// It only restates what the public pages already say.
export function buildLlmsTxt(siteUrl) {
  const url = route => new URL(route.slice(1), siteUrl).href
  const phone = `+51 ${CONTACT.whatsappDisplay}`
  return [
    `# ${BUSINESS.brand}`,
    '',
    `> Servicio técnico independiente de electrodomésticos a domicilio en ${BUSINESS.serviceArea}, ${BUSINESS.country}: lavadoras, secadoras, lavasecas, refrigeradoras, hornos, campanas extractoras y aire acondicionado. Contacto por WhatsApp o llamada al ${phone}.`,
    '',
    `- Sitio web: ${siteUrl}`,
    `- WhatsApp y teléfono: ${phone} (https://wa.me/${CONTACT.whatsappNumber})`,
    `- Zona de atención: ${BUSINESS.serviceArea}, entre otros distritos: ${serviceAreas.join(', ')}. La disponibilidad se confirma según el distrito y la agenda.`,
    `- Marcas que atiende: ${brands.map(brand => brand.name).join(', ')} y otras.`,
    `- ${BUSINESS.brand} es un servicio técnico independiente; no es un centro autorizado ni representa a los fabricantes.`,
    '- Cómo solicitar una visita: escribir por WhatsApp indicando el equipo, la marca y el modelo, el distrito y la falla.',
    '',
    '## Servicios',
    '',
    ...servicePages.map(page => `- [${page.h1}](${url(page.route)}): ${page.intro}`),
    '',
    '## Preguntas frecuentes',
    '',
    ...faqs.map(({ question, answer }) => `- ${question} ${answer}`),
    '',
    '## Información legal',
    '',
    ...LEGAL_PAGES.map(([name, route]) => `- [${name}](${url(route)})`),
    '',
  ].join('\n')
}
