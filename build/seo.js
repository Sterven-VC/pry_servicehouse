import { loadEnv } from 'vite'

export const PUBLIC_ROUTES = ['/', '/aviso-legal/', '/politica-de-privacidad/', '/politica-de-cookies/', '/terminos-y-condiciones/']

function routeFromPath(path = '/') {
  const normalized = path.replace(/\\/g, '/').replace(/index\.html$/, '')
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
  return {
    name: 'servihouse-seo',
    enforce: 'post',
    configResolved(config) {
      siteUrl = normalizeSiteUrl(loadEnv(config.mode, config.root, 'SITE_').SITE_URL)
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
        return { html: pageHtml, tags }
      },
    },
    generateBundle(_options, bundle = {}) {
      // Vite resolves imported image placeholders only after HTML transforms.
      // Use the emitted filename so social previews receive the real hashed URL.
      const pages = Object.entries(bundle).filter(([name]) => name.endsWith('.html')).map(([, item]) => item)
      const hero = Object.keys(bundle).find(name => /servihouse-technician.*\.webp$/.test(name))
      if (siteUrl && hero) {
        for (const page of pages) if (!String(page.source).includes('property="og:image"')) page.source = String(page.source).replace('</head>', `<meta property="og:image" content="${new URL(hero, siteUrl).href}">\n</head>`)
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}sitemap.xml\n` : ''}` })
      if (siteUrl) {
        const urls = PUBLIC_ROUTES.map(route => `<url><loc>${new URL(route.slice(1), siteUrl).href}</loc></url>`).join('')
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n` })
      }
    },
  }
}
