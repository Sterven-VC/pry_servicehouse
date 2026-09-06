import { CalendarCheck, MessageCircle, Wrench } from 'lucide-react'
import { Eyebrow } from '../ui/Eyebrow'

export function ProcessSection() {
  return (
    <section className="process-section" id="proceso">
      <div className="section-shell">
        <div className="process-heading">
          <div><Eyebrow light>Simple y directo</Eyebrow><h2>De la falla a la solución en tres pasos.</h2></div>
          <p>Cuéntanos qué sucede. Nosotros te orientamos y coordinamos la atención.</p>
        </div>
        <ol className="process-steps">
          <li><span>01</span><MessageCircle /><h3>Escríbenos</h3><p>Indica equipo, marca, falla y distrito.</p></li>
          <li><span>02</span><CalendarCheck /><h3>Coordinamos</h3><p>Confirmamos disponibilidad para la visita.</p></li>
          <li><span>03</span><Wrench /><h3>Diagnosticamos</h3><p>Revisamos el equipo y explicamos la solución.</p></li>
        </ol>
      </div>
    </section>
  )
}
