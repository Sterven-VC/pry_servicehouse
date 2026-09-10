import { ChevronDown, Info } from 'lucide-react'

export function LegalAlert() {
  return (
    <details className="legal-notice" id="aviso-legal">
      <summary><Info aria-hidden="true" /><span>Aviso legal · Servicio independiente</span><ChevronDown aria-hidden="true" /></summary>
          <p>No somos un servicio técnico autorizado por los fabricantes. Las marcas y nombres comerciales se utilizan únicamente con fines descriptivos para identificar los equipos que atendemos y no implican afiliación, representación, patrocinio ni autorización oficial. SERVIHOUSE es una empresa independiente con más de 10 años de experiencia en el mercado peruano. <a href="/aviso-legal/">Leer aviso legal completo</a>.</p>
    </details>
  )
}
