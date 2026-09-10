import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

// Render the same component tree before Vite processes HTML assets. In production
// this runs only at build time: the hosting still serves ordinary static files.
export function prerender() {
  let config
  let devServer
  let buildRenderer
  let buildRendererPromise

  return {
    name: 'servihouse-static-html',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    configureServer(server) {
      devServer = server
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(template) {
        if (!template.includes('<!--app-html-->')) {
          throw new Error('Missing <!--app-html-->: refusing to serve an empty app shell.')
        }

        if (!devServer && !buildRendererPromise) {
          buildRendererPromise = createServer({
            configFile: false,
            root: config.root,
            mode: config.mode,
            plugins: [react()],
            appType: 'custom',
            server: { middlewareMode: true, hmr: false, watch: null },
            optimizeDeps: { noDiscovery: true, include: [] },
          }).then(server => (buildRenderer = server))
        }

        const renderer = devServer || buildRenderer || await buildRendererPromise
        const page = template.match(/data-page="([^"]+)"/)?.[1] || 'home'
        const { render } = await renderer.ssrLoadModule('/src/entry-server.jsx')
        const { html, year } = render(page)
        return template.replace('<!--app-html-->', () => html).replace('__RENDER_YEAR__', String(year))
      },
    },
    async closeBundle() {
      // Never close the dev server from its own hook.
      await buildRenderer?.close()
      buildRenderer = undefined
      buildRendererPromise = undefined
    },
  }
}
