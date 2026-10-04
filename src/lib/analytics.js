export const ANALYTICS_MEASUREMENT_ID = 'G-20WZ969Z48'
// v2 covers analytics and advertising measurement; earlier answers only covered analytics,
// so every visitor is asked again.
export const ANALYTICS_CONSENT_KEY = 'servihouse-consent-v2'

const CONSENT_TYPES = ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']

export function consentState(granted) {
  return Object.fromEntries(CONSENT_TYPES.map(type => [type, granted ? 'granted' : 'denied']))
}

export function getAnalyticsConsent() {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
  } catch {
    return null
  }
}

// Consent Mode v2 (advanced): the tag always loads with every storage type denied.
// Without consent Google receives cookieless pings only; cookies are written after acceptance.
export function loadGoogleTag() {
  if (typeof window === 'undefined') return
  if (document.querySelector(`script[data-google-analytics="${ANALYTICS_MEASUREMENT_ID}"]`)) return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('consent', 'default', consentState(false))
  window.gtag('set', 'ads_data_redaction', true)
  if (getAnalyticsConsent() === 'granted') window.gtag('consent', 'update', consentState(true))
  window.gtag('js', new Date())
  window.gtag('config', ANALYTICS_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`
  script.dataset.googleAnalytics = ANALYTICS_MEASUREMENT_ID
  document.head.appendChild(script)
}

export function saveAnalyticsConsent(value) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value)
  } catch {
    // The choice still applies for the current page when storage is unavailable.
  }
  if (typeof window.gtag === 'function') window.gtag('consent', 'update', consentState(value === 'granted'))
}

export function clearAnalyticsCookies() {
  const domainParts = window.location.hostname.split('.')
  const domains = ['', window.location.hostname, `.${window.location.hostname}`]
  if (domainParts.length > 2) domains.push(`.${domainParts.slice(-2).join('.')}`)

  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0].trim()
    if (!name.startsWith('_ga') && !name.startsWith('_gcl')) return
    domains.forEach((domain) => {
      const domainAttribute = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttribute}; SameSite=Lax`
    })
  })
}
