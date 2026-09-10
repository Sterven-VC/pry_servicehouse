import { AirVent, ArrowRight, Microwave, PackageCheck, PlugZap, Refrigerator, WashingMachine } from 'lucide-react'
import { services } from '../../data/siteData'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

const icons = { 'air-vent': AirVent, 'washing-machine': WashingMachine, refrigerator: Refrigerator, microwave: Microwave, 'plug-zap': PlugZap, 'package-check': PackageCheck }

export function ServicesSection() {
  return (
    <section className="services-section section-shell" id="servicios">
      <div className="section-intro">
        <Eyebrow>Soluciones para tu hogar</Eyebrow>
        <h2>Reparamos lo que mueve tu día.</h2>
        <p>Cuando un equipo falla, tu rutina no debería detenerse. Revisamos el problema en casa y te explicamos las opciones antes de proceder.</p>
        <ContactLink type="whatsapp" placement="services" className="text-link">Consultar por mi equipo <ArrowRight size={18} /></ContactLink>
      </div>
      <div className="service-list">
        {services.map(({ icon, title, text }, index) => {
          const Icon = icons[icon]
          return <article className="service-row" key={title}><span className="service-number">0{index + 1}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>
        })}
      </div>
    </section>
  )
}
