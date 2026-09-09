import { BadgeCheck, Wrench } from 'lucide-react'
import { Eyebrow } from '../ui/Eyebrow'

export function PromiseSection() {
  return (
    <section className="promise-section section-shell">
      <div className="promise-art">
        <div className="tool-ring"><Wrench /></div>
        <div className="experience-mark" aria-label="Más de 10 años de experiencia"><span className="experience-number">10</span><span className="experience-plus">+</span></div>
        <p>años de experiencia<br />en el mercado peruano</p>
      </div>
      <div className="promise-copy">
        <Eyebrow>Nuestra forma de trabajar</Eyebrow>
        <h2>Servicio técnico con conversación honesta.</h2>
        <p>No prometemos soluciones antes de revisar. Primero entendemos la falla, luego te explicamos el diagnóstico y las alternativas disponibles.</p>
        <ul><li><BadgeCheck /> Atención multimarca</li><li><BadgeCheck /> Instalación de equipos</li><li><BadgeCheck /> Repuestos seleccionados</li><li><BadgeCheck /> Línea blanca y climatización</li></ul>
      </div>
    </section>
  )
}
