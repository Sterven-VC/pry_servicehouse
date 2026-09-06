import { CircleAlert, X } from 'lucide-react'

export function LegalAlert({ open, onOpenChange }) {
  return (
    <aside className={open ? 'legal-alert is-open' : 'legal-alert'} aria-live="polite" aria-label="Aviso legal">
      {open ? (
        <>
          <div className="legal-head">
            <CircleAlert />
            <strong>¡Aviso legal!</strong>
            <button aria-label="Minimizar aviso legal" onClick={() => onOpenChange(false)}><X /></button>
          </div>
          <p>No somos un servicio técnico autorizado por los fabricantes. Las marcas y nombres comerciales se utilizan únicamente con fines descriptivos para identificar los equipos que atendemos y no implican afiliación, representación, patrocinio ni autorización oficial. SERVIHOUSE es una empresa independiente con más de 5 años de experiencia en el mercado peruano.</p>
        </>
      ) : (
        <button className="legal-chip" onClick={() => onOpenChange(true)}><CircleAlert /> Aviso legal</button>
      )}
    </aside>
  )
}
