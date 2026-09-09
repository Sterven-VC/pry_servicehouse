import { LegalAlert } from '../ui/LegalAlert'
import brandLogo from '../../assets/brand/servihouse-logo.webp'

export function Footer({ year }) {
  return (
    <footer>
      <div className="footer-main">
        <img src={brandLogo} alt="SERVIHOUSE Línea Blanca" width="1280" height="1280" loading="lazy" />
        <p>Servicio técnico, instalación y repuestos para línea blanca y aire acondicionado a domicilio en Lima.</p>
        <div><a href="#servicios">Servicios</a><a href="#proceso">Cómo funciona</a><a href="#preguntas">Preguntas frecuentes</a></div>
      </div>
      <LegalAlert />
      <div className="footer-bottom">
        <span>© {year} SERVIHOUSE. Empresa independiente.</span>
      </div>
    </footer>
  )
}
