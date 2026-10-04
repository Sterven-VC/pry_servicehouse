import { loadEnv } from 'vite'
import { DEFAULT_SITE_URL, PUBLIC_ROUTES } from './site.js'
import { buildSchema, schemaScript } from './schema.js'

export { DEFAULT_SITE_URL, PUBLIC_ROUTES }

function routeFromPath(path = '/') {
  // Bundle file names have no leading slash ("aviso-legal/index.html").
  const normalized = `/${path.replace(/\\/g, '/').replace(/index\.html$/, '')}`
  const match = PUBLIC_ROUTES.find(route => route !== '/' && normalized.endsWith(route))
  return match || '/'
}

export function normalizeSiteUrl(value = '') {
  if (!value.trim()) return ''
  const url = new URL(value)
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('SITE_URL must be an HTTPS origin without credentials, path, query or fragment.')
  }
  return url.origin + '/'
}

export function seo() {
  let siteUrl = ''
  let isDevServer = false
  return {
    name: 'servihouse-seo',
    enforce: 'post',
    configResolved(config) {
      siteUrl = normalizeSiteUrl(loadEnv(config.mode, config.root, 'SITE_').SITE_URL || DEFAULT_SITE_URL)
      isDevServer = config.command === 'serve'
    },
    transformIndexHtml: {
      order: 'post',
      handler(html, context) {
        const route = routeFromPath(context?.path)
        const pageUrl = siteUrl ? new URL(route.slice(1), siteUrl).href : route
        const canonicalPattern = /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i
        const pageHtml = canonicalPattern.test(html)
          ? html.replace(canonicalPattern, `<link rel="canonical" href="${pageUrl}">`)
          : html
        if (!siteUrl) return pageHtml
        const hero = html.match(/src="([^\"]*servihouse-technician[^\"]*\.webp)"/)?.[1]
        const tags = [
          { tag: 'meta', attrs: { property: 'og:url', content: pageUrl }, injectTo: 'head' },
        ]
        if (!canonicalPattern.test(html)) tags.unshift({ tag: 'link', attrs: { rel: 'canonical', href: pageUrl }, injectTo: 'head' })
        if (hero) tags.push({ tag: 'meta', attrs: { property: 'og:image', content: new URL(hero, siteUrl).href }, injectTo: 'head' })
        // Builds add the schema in generateBundle, once hashed image URLs are known.
        if (isDevServer) tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(buildSchema({ siteUrl, route, html })), injectTo: 'head' })
        return { html: pageHtml, tags }
      },
    },
    generateBundle(_options, bundle = {}) {
      // Vite resolves imported image placeholders only after HTML transforms.
      // Use the emitted filename so social previews receive the real hashed URL.
      const pages = Object.entries(bundle).filter(([name]) => name.endsWith('.html'))
      const hero = Object.keys(bundle).find(name => /servihouse-technician.*\.webp$/.test(name) && !name.includes('technician-768'))
      const logo = Object.keys(bundle).find(name => /servihouse-logo.*\.webp$/.test(name))
      const imageUrl = siteUrl && hero ? new URL(hero, siteUrl).href : ''
      const logoUrl = siteUrl && logo ? new URL(logo, siteUrl).href : ''
      if (siteUrl) {
        for (const [fileName, page] of pages) {
          const source = String(page.source)
          if (source.includes('application/ld+json')) continue
          const schema = buildSchema({ siteUrl, route: routeFromPath(fileName), html: source, logoUrl, imageUrl })
          page.source = source.replace('</head>', `${schemaScript(schema)}\n</head>`)
        }
      }
      if (imageUrl) {
        for (const [, page] of pages) {
          let source = String(page.source)
          const tags = []
          if (!source.includes('property="og:image"')) tags.push(`<meta property="og:image" content="${imageUrl}">`)
          if (!source.includes('property="og:image:alt"')) tags.push('<meta property="og:image:alt" content="Técnico de SERVIHOUSE atendiendo un electrodoméstico a domicilio">')
          if (!source.includes('name="twitter:image"')) tags.push(`<meta name="twitter:image" content="${imageUrl}">`)
          if (!source.includes('name="twitter:image:alt"')) tags.push('<meta name="twitter:image:alt" content="Técnico de SERVIHOUSE atendiendo un electrodoméstico a domicilio">')
          if (!source.includes('rel="image_src"')) tags.push(`<link rel="image_src" href="${imageUrl}">`)
          if (tags.length) source = source.replace('</head>', `${tags.join('\n')}\n</head>`)
          page.source = source
        }
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}sitemap.xml\n` : ''}` })
      if (siteUrl) {
        const urls = PUBLIC_ROUTES.map(route => `<url><loc>${new URL(route.slice(1), siteUrl).href}</loc></url>`).join('')
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n` })
      }
    },
  }
}
