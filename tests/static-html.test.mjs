import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { test } from 'node:test'
import { createServer } from 'vite'
import { services, faqs } from '../src/data/siteData.js'
import { CONTACT } from '../src/config/contact.js'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const dist = path.join(projectRoot, 'dist')

function assertInitialContent(html) {
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, 'Exactly one H1 must be in the response')
  assert.match(html, /<main id="contenido">/)
  for (const { title, text } of services) {
    assert.ok(html.includes(title), `Missing service: ${title}`)
    assert.ok(html.includes(text), `Missing service description: ${title}`)
  }
  for (const { question, answer } of faqs) {
    assert.ok(html.includes(question), `Missing FAQ: ${question}`)
    assert.ok(html.includes(answer), `Missing answer: ${question}`)
  }
  assert.ok(html.includes(`href="${CONTACT.phoneUrl}"`))
  assert.ok(html.includes(`https://wa.me/${CONTACT.whatsappNumber}?text=`))
  assert.match(html, /<nav[^>]+aria-label="Navegación principal"/)
  assert.match(html, /<details[\s>]/)
  assert.match(html, /<footer>/)
  assert.match(html, /data-render-year="\d{4}"/)
  assert.match(html, /<html[^>]+class="no-js"/)
  assert.doesNotMatch(html, /<!--app-html-->|__RENDER_YEAR__|<div id="root"[^>]*>\s*<\/div>/)
  const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  assert.equal(JSON.parse(schema[1]).name, 'SERVIHOUSE')
}

test('production HTML contains all content without executing any JavaScript', async () => {
  const html = await readFile(path.join(dist, 'index.html'), 'utf8')
  assertInitialContent(html)
  assert.match(html, /<link[^>]+rel="stylesheet"[^>]+href="\/assets\/[^\"]+\.css"/)
  assert.doesNotMatch(html, /(?:src|href)="\/src\//)
  const year = html.match(/data-render-year="(\d{4})"/)[1]
  assert.ok(html.replace(/<!--[\s\S]*?-->/g, '').includes(`© ${year}`), 'The footer must use the year serialized for hydration')
})

test('prerendered image, stylesheet and script URLs exist in the output', async () => {
  const html = await readFile(path.join(dist, 'index.html'), 'utf8')
  const urls = [...html.matchAll(/(?:src|href)="(\/[^\"]+)"/g)].map(match => match[1])
  assert.ok(urls.some(url => /servihouse-technician.*\.webp$/.test(url)))
  for (const url of new Set(urls)) await access(path.join(dist, url.slice(1)))
  const cssUrl = urls.find(url => url.endsWith('.css'))
  const css = await readFile(path.join(dist, cssUrl.slice(1)), 'utf8')
  assert.ok(css.includes('.no-js .nav-links'))
  assert.ok(css.includes('.no-js .legal-alert'))
})

test('development also returns complete HTML and CSS before the browser runs JS', async () => {
  const server = await createServer({
    root: projectRoot,
    server: { host: '127.0.0.1', port: 0, open: false, hmr: false },
  })
  try {
    await server.listen()
    const { port } = server.httpServer.address()
    const response = await fetch(`http://127.0.0.1:${port}/`)
    assert.equal(response.status, 200)
    const html = await response.text()
    assertInitialContent(html)
    assert.match(html, /<link rel="stylesheet" href="\/src\/styles\/global.css"/)
  } finally {
    await server.close()
  }
})
