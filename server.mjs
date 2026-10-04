import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import compression from 'compression'
import serveHandler from 'serve-handler'
import { DEFAULT_SITE_URL, PUBLIC_ROUTES } from './build/site.js'

const serveConfig = JSON.parse(readFileSync(new URL('./serve.json', import.meta.url), 'utf8'))

// serve-handler redirects drop the query string, which would lose gclid/UTM
// parameters from ads. Canonical redirects are therefore resolved here.
export function redirectLocation({ url = '/', headers = {} }, siteUrl = DEFAULT_SITE_URL) {
  const canonical = new URL(siteUrl)
  const host = String(headers.host || '').toLowerCase()
  const { pathname, search } = new URL(url, 'http://localhost')
  const route = PUBLIC_ROUTES.find(item => item !== '/' && item === `${pathname}/`)
  if (host === `www.${canonical.host}`) return `${canonical.origin}${route || pathname}${search}`
  if (route) return `${route}${search}`
  return null
}

export function createRequestHandler({ siteUrl = DEFAULT_SITE_URL, publicDir = fileURLToPath(new URL('./dist', import.meta.url)), compress = true } = {}) {
  const compressResponse = promisify(compression())
  return async (request, response) => {
    try {
      const location = redirectLocation(request, siteUrl)
      if (location) {
        response.writeHead(301, { Location: location, 'Cache-Control': 'public, max-age=3600' })
        response.end()
        return
      }
      if (compress) await compressResponse(request, response)
      await serveHandler(request, response, { ...serveConfig, public: publicDir })
    } catch (error) {
      console.error(error)
      if (!response.headersSent) response.writeHead(500)
      response.end()
    }
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = 8080
  createServer(createRequestHandler({ siteUrl: process.env.SITE_URL || DEFAULT_SITE_URL }))
    .listen(port, '0.0.0.0', () => console.log(`Serving dist on http://0.0.0.0:${port}`))
}
