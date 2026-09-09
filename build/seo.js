import { loadEnv } from 'vite'

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
      handler(html) {
        if (!siteUrl) return html
        const hero = html.match(/src="([^\"]*servihouse-technician[^\"]*\.webp)"/)?.[1]
        const tags = [
          { tag: 'link', attrs: { rel: 'canonical', href: siteUrl }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: siteUrl }, injectTo: 'head' },
        ]
        if (hero) tags.push({ tag: 'meta', attrs: { property: 'og:image', content: new URL(hero, siteUrl).href }, injectTo: 'head' })
        return { html, tags }
      },
    },
    generateBundle(_options, bundle = {}) {
      // Vite resolves imported image placeholders only after HTML transforms.
      // Use the emitted filename so social previews receive the real hashed URL.
      const page = bundle['index.html']
      const hero = Object.keys(bundle).find(name => /servihouse-technician.*\.webp$/.test(name))
      if (siteUrl && page && hero && !String(page.source).includes('property="og:image"')) {
        page.source = String(page.source).replace('</head>', `<meta property="og:image" content="${new URL(hero, siteUrl).href}">\n</head>`)
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}sitemap.xml\n` : ''}` })
      if (siteUrl) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>\n` })
    },
  }
}
