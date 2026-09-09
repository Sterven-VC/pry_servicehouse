import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import handler from 'serve-handler'
import { seo } from '../build/seo.js'

test('static hosting serves home and assets, not source files or fake routes', async () => {
  const config = JSON.parse(await readFile(new URL('../serve.json', import.meta.url)))
  const server = createServer((req, res) => handler(req, res, { ...config, public: 'dist' }))
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  const origin = `http://127.0.0.1:${server.address().port}`
  try {
    const response = await fetch(origin)
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff')
    assert.equal(response.headers.get('x-frame-options'), 'DENY')
    const html = await response.text()
    const image = html.match(/src="(\/assets\/[^\"]+\.webp)"/)[1]
    const asset = await fetch(origin + image)
    assert.equal(asset.status, 200)
    assert.ok(asset.headers.get('cache-control').includes('immutable'))
    for (const path of ['/ruta-inexistente', '/.env', '/src/App.jsx', '/assets/']) {
      assert.equal((await fetch(origin + path)).status, 404, path)
    }
  } finally {
    server.closeAllConnections()
    await new Promise(resolve => server.close(resolve))
  }
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
    const files = []
    const bundle = { 'index.html': { source: '<head></head>' }, 'assets/servihouse-technician-built.webp': {} }
    plugin.generateBundle.call({ emitFile: file => files.push(file) }, {}, bundle)
    assert.ok(bundle['index.html'].source.includes('https://example.com/assets/servihouse-technician-built.webp'))
    assert.ok(files.find(f => f.fileName === 'sitemap.xml').source.includes('<loc>https://example.com/</loc>'))
    assert.ok(files.find(f => f.fileName === 'robots.txt').source.includes('Sitemap: https://example.com/sitemap.xml'))
  } finally {
    if (previous === undefined) delete process.env.SITE_URL
    else process.env.SITE_URL = previous
  }
})
