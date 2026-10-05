import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createServer, request } from 'node:http'
import { seo } from '../build/seo.js'
import { createRequestHandler, redirectLocation } from '../server.mjs'
import { PUBLIC_ROUTES } from '../build/site.js'

test('static hosting serves home, legal routes and assets, not source files or fake routes', async () => {
  const server = createServer(createRequestHandler())
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const response = await fetch(origin)
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff')
    assert.equal(response.headers.get('x-frame-options'), 'DENY')
    assert.ok(response.headers.get('strict-transport-security').includes('max-age=31536000'))
    assert.equal(response.headers.get('x-robots-tag'), 'index, follow, max-image-preview:large')
    assert.ok(response.headers.get('content-security-policy').includes("default-src 'self'"))
    assert.ok(response.headers.get('content-security-policy').includes('https://www.googletagmanager.com'))
    for (const origin of ['https://www.googleadservices.com', 'https://analytics.google.com', 'https://*.doubleclick.net']) {
      assert.ok(response.headers.get('content-security-policy').includes(origin), origin)
    }
    assert.match(response.headers.get('content-encoding') || '', /^(?:gzip|br)$/)
    const html = await response.text()
    const image = html.match(/src="(\/assets\/[^\"]+\.webp)"/)[1]
    const asset = await fetch(origin + image)
    assert.equal(asset.status, 200)
    assert.ok(asset.headers.get('cache-control').includes('immutable'))
    for (const path of PUBLIC_ROUTES.filter(route => route !== '/')) {
      const page = await fetch(origin + path)
      assert.equal(page.status, 200, path)
      assert.match(await page.text(), /<h1(?:\s|>)/)
    }
    for (const path of PUBLIC_ROUTES.filter(route => route !== '/').map(route => route.slice(0, -1))) {
      const redirect = await fetch(`${origin}${path}?gclid=abc&utm_source=google`, { redirect: 'manual' })
      assert.equal(redirect.status, 301, path)
      assert.equal(redirect.headers.get('location'), `${path}/?gclid=abc&utm_source=google`, path)
    }
    // fetch() ignores a custom Host header, so the www request goes through node:http.
    const www = await new Promise((resolve, reject) => {
      request(`${origin}/aviso-legal?gclid=abc`, { headers: { host: 'www.sevihouseperu.com' } }, resolve).on('error', reject).end()
    })
    www.resume()
    assert.equal(www.statusCode, 301)
    assert.equal(www.headers.location, 'https://sevihouseperu.com/aviso-legal/?gclid=abc')
    for (const path of ['/ruta-inexistente', '/aviso-legal/ruta-inventada', '/.env', '/src/App.jsx', '/assets/']) {
      assert.equal((await fetch(origin + path)).status, 404, path)
    }
  } finally {
    server.closeAllConnections()
    await new Promise(resolve => server.close(resolve))
  }
})

test('canonical redirects keep ad parameters and only touch www or known routes without a slash', () => {
  const site = 'https://sevihouseperu.com/'
  assert.equal(redirectLocation({ url: '/?gclid=1', headers: { host: 'www.sevihouseperu.com' } }, site), 'https://sevihouseperu.com/?gclid=1')
  assert.equal(redirectLocation({ url: '/servicio-tecnico-lavadoras-lima?utm_source=google', headers: { host: 'www.sevihouseperu.com' } }, site), 'https://sevihouseperu.com/servicio-tecnico-lavadoras-lima/?utm_source=google')
  assert.equal(redirectLocation({ url: '/aviso-legal', headers: { host: 'sevihouseperu.com' } }, site), '/aviso-legal/')
  for (const url of ['/', '/?gclid=1', '/aviso-legal/', '/assets/app.js', '/ruta-inexistente', '/favicon.png']) {
    assert.equal(redirectLocation({ url, headers: { host: 'sevihouseperu.com' } }, site), null, url)
  }
  assert.equal(redirectLocation({ url: '/', headers: { host: 'app.seenode.internal' } }, site), null)
})

test('SEO emits consistent canonical, social image and sitemap when domain is configured', () => {
  const previous = process.env.SITE_URL
  process.env.SITE_URL = 'https://example.com'
  try {
    const plugin = seo()
    plugin.configResolved({ mode: 'production', root: process.cwd() })
    const result = plugin.transformIndexHtml.handler('<img src="/assets/servihouse-technician-hash.webp">')
    assert.equal(result.tags.find(t => t.attrs.rel === 'canonical').attrs.href, 'https://example.com/')
    assert.equal(result.tags.find(t => t.attrs.property === 'og:image').attrs.content, 'https://example.com/assets/servihouse-technician-hash.webp')
    const legal = plugin.transformIndexHtml.handler('<head></head>', { path: '/aviso-legal/index.html' })
    assert.equal(legal.tags.find(t => t.attrs.rel === 'canonical').attrs.href, 'https://example.com/aviso-legal/')
    const replaced = plugin.transformIndexHtml.handler('<head><link rel="canonical" href="/"></head>', { path: '/aviso-legal/index.html' })
    assert.match(replaced.html, /href="https:\/\/example\.com\/aviso-legal\/"/)
    assert.equal(replaced.tags.filter(t => t.attrs.rel === 'canonical').length, 0)
    const files = []
    const bundle = {
      'index.html': { source: '<head><title>Inicio | SERVIHOUSE</title></head>' },
      'aviso-legal/index.html': { source: '<head><title>Aviso legal | SERVIHOUSE</title></head>' },
      'assets/servihouse-technician-built.webp': {},
      'assets/servihouse-logo-built.webp': {},
    }
    plugin.generateBundle.call({ emitFile: file => files.push(file) }, {}, bundle)
    const homeSchema = JSON.parse(bundle['index.html'].source.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph']
    const business = homeSchema.find(item => item['@id'] === 'https://example.com/#business')
    assert.equal(business.logo.url, 'https://example.com/assets/servihouse-logo-built.webp')
    assert.equal(business.image, 'https://example.com/assets/servihouse-technician-built.webp')
    assert.equal(homeSchema.find(item => item['@type'] === 'WebPage').name, 'Inicio | SERVIHOUSE')
    const legalSchema = JSON.parse(bundle['aviso-legal/index.html'].source.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph']
    assert.equal(legalSchema.find(item => item['@type'] === 'BreadcrumbList').itemListElement[1].item, 'https://example.com/aviso-legal/')
    assert.ok(bundle['index.html'].source.includes('https://example.com/assets/servihouse-technician-built.webp'))
    assert.ok(bundle['index.html'].source.includes('name="twitter:image"'))
    assert.ok(bundle['index.html'].source.includes('rel="image_src"'))
    assert.ok(files.find(f => f.fileName === 'sitemap.xml').source.includes('<loc>https://example.com/</loc>'))
    assert.ok(files.find(f => f.fileName === 'sitemap.xml').source.includes('<loc>https://example.com/servicio-tecnico-lavadoras-lima/</loc>'))
    assert.ok(files.find(f => f.fileName === 'sitemap.xml').source.includes('<loc>https://example.com/aviso-legal/</loc>'))
    assert.ok(files.find(f => f.fileName === 'robots.txt').source.includes('Sitemap: https://example.com/sitemap.xml'))
    assert.match(files.find(f => f.fileName === 'sitemap.xml').source, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/)
    const llms = files.find(f => f.fileName === 'llms.txt').source
    assert.ok(llms.startsWith('# SERVIHOUSE'))
    assert.ok(llms.includes('+51 929 853 856'))
    for (const route of PUBLIC_ROUTES.filter(route => route !== '/')) assert.ok(llms.includes(`https://example.com${route}`), route)
    assert.doesNotMatch(llms, /997|912138192/)
  } finally {
    if (previous === undefined) delete process.env.SITE_URL
    else process.env.SITE_URL = previous
  }
})
