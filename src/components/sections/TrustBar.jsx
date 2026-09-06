import { MapPin, ShieldCheck, Wrench } from 'lucide-react'

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Beneficios principales">
      <div><MapPin /><span><strong>Atención a domicilio</strong><small>En Lima Metropolitana</small></span></div>
      <div><Wrench /><span><strong>Diagnóstico técnico</strong><small>Explicación clara de la falla</small></span></div>
      <div><ShieldCheck /><span><strong>Servicio independiente</strong><small>Experiencia multimarca</small></span></div>
    </section>
  )
}
