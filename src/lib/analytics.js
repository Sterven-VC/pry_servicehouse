export const ANALYTICS_MEASUREMENT_ID = 'G-20WZ969Z48'
export const ANALYTICS_CONSENT_KEY = 'servihouse-analytics-consent'

export function getAnalyticsConsent() {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
  } catch {
    return null
  }
}

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined' || getAnalyticsConsent() !== 'granted') return
  if (document.querySelector(`script[data-google-analytics="${ANALYTICS_MEASUREMENT_ID}"]`)) return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', ANALYTICS_MEASUREMENT_ID, { anonymize_ip: true })

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
  if (value === 'granted') loadGoogleAnalytics()
}

export function clearAnalyticsCookies() {
  const domainParts = window.location.hostname.split('.')
  const domains = ['', window.location.hostname, `.${window.location.hostname}`]
  if (domainParts.length > 2) domains.push(`.${domainParts.slice(-2).join('.')}`)

  document.cookie.split(';').forEach((entry) => {
    const name = entry.split('=')[0].trim()
    if (!name.startsWith('_ga')) return
    domains.forEach((domain) => {
      const domainAttribute = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttribute}; SameSite=Lax`
    })
  })
}
