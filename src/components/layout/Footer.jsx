import { LegalAlert } from '../ui/LegalAlert'
import brandLogo from '../../assets/brand/servihouse-logo.webp'

export function Footer({ year, isHome = true }) {
  const section = id => isHome ? `#${id}` : `/#${id}`
  return (
    <footer>
      <div className="footer-main">
        <img src={brandLogo} alt="Logo de SERVIHOUSE Línea Blanca" title="SERVIHOUSE Línea Blanca" width="384" height="384" loading="lazy" decoding="async" />
        <p>Servicio técnico para lavadoras, lavasecas, refrigeradoras, hornos, campanas extractoras y aire acondicionado a domicilio en Lima.</p>
        <div className="footer-links">
          <div><a href={section('servicios')}>Servicios</a><a href={section('zonas')}>Zonas de atención</a><a href={section('preguntas')}>Preguntas frecuentes</a></div>
          <div><a href="/aviso-legal/">Aviso legal</a><a href="/politica-de-privacidad/">Privacidad</a><a href="/politica-de-cookies/">Cookies</a><a href="/terminos-y-condiciones/">Términos y condiciones</a></div>
        </div>
      </div>
      {isHome && <LegalAlert />}
      <div className="footer-bottom">
        <span>© {year} SERVIHOUSE. Empresa independiente.</span>
      </div>
    </footer>
  )
}
