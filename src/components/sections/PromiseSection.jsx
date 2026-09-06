import { BadgeCheck, Wrench } from 'lucide-react'
import { Eyebrow } from '../ui/Eyebrow'

export function PromiseSection() {
  return (
    <section className="promise-section section-shell">
      <div className="promise-art"><div className="tool-ring"><Wrench /></div><span>5+</span><p>años de experiencia<br />en el mercado peruano</p></div>
      <div className="promise-copy">
        <Eyebrow>Nuestra forma de trabajar</Eyebrow>
        <h2>Servicio técnico con conversación honesta.</h2>
        <p>No prometemos soluciones antes de revisar. Primero entendemos la falla, luego te explicamos el diagnóstico y las alternativas disponibles.</p>
        <ul><li><BadgeCheck /> Atención multimarca</li><li><BadgeCheck /> Coordinación directa</li><li><BadgeCheck /> Servicio en tu domicilio</li><li><BadgeCheck /> Experiencia en línea blanca</li></ul>
      </div>
    </section>
  )
}
