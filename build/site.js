// Shared by the build and the production server. Keep it free of build-only dependencies.
import { servicePages } from '../src/data/servicePages.js'

export const DEFAULT_SITE_URL = 'https://sevihouseperu.com/'
export const SERVICE_ROUTES = servicePages.map(page => page.route)
export const PUBLIC_ROUTES = ['/', ...SERVICE_ROUTES, '/aviso-legal/', '/politica-de-privacidad/', '/politica-de-cookies/', '/terminos-y-condiciones/']
