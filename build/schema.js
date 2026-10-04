import { BUSINESS } from '../src/config/business.js'
import { CONTACT } from '../src/config/contact.js'
import { serviceAreas, services } from '../src/data/siteData.js'

const WASHING_MACHINES_ROUTE = '/servicio-tecnico-lavadoras-lima/'

// Breadcrumb labels and, for service landings, the Service the page describes.
const PAGES = {
  '/': {},
  [WASHING_MACHINES_ROUTE]: {
    crumb: 'Servicio técnico de lavadoras',
    service: {
      name: 'Servicio técnico de lavadoras a domicilio en Lima',
      serviceType: 'Reparación y mantenimiento de lavadoras, secadoras y lavasecas',
    },
  },
  '/aviso-legal/': { crumb: 'Aviso legal' },
  '/politica-de-privacidad/': { crumb: 'Política de privacidad' },
  '/politica-de-cookies/': { crumb: 'Política de cookies' },
  '/terminos-y-condiciones/': { crumb: 'Términos y condiciones' },
}

const SERVICE_ROUTES = { 'washing-machine': WASHING_MACHINES_ROUTE }

const decode = value => value
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')

function pageMeta(html) {
  return {
    title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1] || BUSINESS.brand),
    description: decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] || ''),
  }
}

function businessNode(siteUrl, { logoUrl, imageUrl }) {
  const id = `${siteUrl}#business`
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': id,
    name: BUSINESS.brand,
    alternateName: BUSINESS.domainName,
    url: siteUrl,
    description: 'Servicio técnico independiente de lavadoras, lavasecas, refrigeradoras, hornos, campanas extractoras y aire acondicionado a domicilio en Lima.',
    ...(logoUrl && { logo: { '@type': 'ImageObject', '@id': `${siteUrl}#logo`, url: logoUrl, contentUrl: logoUrl, width: 384, height: 384, caption: BUSINESS.brand } }),
    ...(imageUrl && { image: imageUrl }),
    telephone: CONTACT.phoneUrl.replace('tel:', ''),
    email: BUSINESS.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressRegion: 'Lima', addressCountry: 'PE' },
    areaServed: [
      { '@type': 'City', name: BUSINESS.serviceArea },
      ...serviceAreas.map(name => ({ '@type': 'AdministrativeArea', name })),
    ],
    // One number serves both calls and WhatsApp.
    contactPoint: { '@type': 'ContactPoint', telephone: CONTACT.phoneUrl.replace('tel:', ''), url: `https://wa.me/${CONTACT.whatsappNumber}`, contactType: 'customer service', areaServed: 'PE', availableLanguage: 'Spanish' },
    knowsAbout: ['Reparación de lavadoras', 'Reparación de lavasecas', 'Reparación de refrigeradoras', 'Reparación de hornos', 'Reparación de campanas extractoras', 'Instalación de aire acondicionado', 'Reparación de aire acondicionado', 'Instalación de electrodomésticos', 'Repuestos de electrodomésticos'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicio técnico de electrodomésticos a domicilio',
      itemListElement: services.map(({ icon, title, text }) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: title,
          description: text,
          ...(SERVICE_ROUTES[icon] && { url: new URL(SERVICE_ROUTES[icon].slice(1), siteUrl).href }),
          provider: { '@id': id },
          areaServed: { '@type': 'City', name: BUSINESS.serviceArea },
        },
      })),
    },
  }
}

export function buildSchema({ siteUrl, route, html = '', logoUrl, imageUrl }) {
  const page = PAGES[route] || {}
  const pageUrl = new URL(route.slice(1), siteUrl).href
  const { title, description } = pageMeta(html)
  const businessId = { '@id': `${siteUrl}#business` }
  const showsImage = route === '/' || page.service

  const webPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    ...(description && { description }),
    inLanguage: 'es-PE',
    isPartOf: { '@id': `${siteUrl}#website` },
    ...(route === '/' ? { about: businessId } : { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } }),
    ...(page.service && { mainEntity: { '@id': `${pageUrl}#service` } }),
    ...(showsImage && imageUrl && { primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl, width: 1280, height: 640 } }),
  }

  const graph = [
    businessNode(siteUrl, { logoUrl, imageUrl }),
    { '@type': 'WebSite', '@id': `${siteUrl}#website`, url: siteUrl, name: BUSINESS.brand, alternateName: BUSINESS.domainName, inLanguage: 'es-PE', publisher: businessId },
    webPage,
  ]

  if (route !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.crumb || title, item: pageUrl },
      ],
    })
  }

  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      ...page.service,
      url: pageUrl,
      ...(description && { description }),
      ...(imageUrl && { image: imageUrl }),
      provider: businessId,
      areaServed: { '@type': 'City', name: BUSINESS.serviceArea },
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export function schemaScript(schema) {
  // Escape "<" so content can never close the script element early.
  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`
}
