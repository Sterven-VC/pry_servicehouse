import { AirVent, ArrowRight, Microwave, PackageCheck, PlugZap, Refrigerator, WashingMachine } from 'lucide-react'
import { services } from '../../data/siteData'
import { servicePageByIcon } from '../../data/servicePages'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

const icons = { 'air-vent': AirVent, 'washing-machine': WashingMachine, refrigerator: Refrigerator, microwave: Microwave, 'plug-zap': PlugZap, 'package-check': PackageCheck }

// Services with their own landing link the whole card to it; the rest point to the closest action.
function CardAction({ icon, title }) {
  if (servicePageByIcon[icon]) return <span className="service-card-more" aria-hidden="true">Ver servicio <ArrowRight size={17} /></span>
  if (icon === 'package-check') return <a className="service-card-more" href="#repuestos">Ver repuestos <ArrowRight size={17} aria-hidden="true" /></a>
  return <ContactLink placement="services_card" message={`Hola, quisiera consultar por ${title.toLowerCase()} en Lima.`} className="service-card-more">Consultar por WhatsApp <ArrowRight size={17} aria-hidden="true" /></ContactLink>
}

export function ServicesSection() {
  return (
    <section className="services-section section-shell" id="servicios">
      <div className="services-heading">
        <div><Eyebrow>Soluciones para tu hogar</Eyebrow><h2>Reparamos lo que mueve tu día.</h2></div>
        <div className="section-intro">
          <p>Cuando un equipo falla, tu rutina no debería detenerse. Revisamos el problema en casa y te explicamos las opciones antes de proceder.</p>
          <ContactLink type="whatsapp" placement="services" className="text-link">Consultar por mi equipo <ArrowRight size={18} /></ContactLink>
        </div>
      </div>
      <div className="service-grid">
        {services.map(({ icon, title, text }, index) => {
          const Icon = icons[icon]
          const page = servicePageByIcon[icon]
          return (
            <article className={page ? 'service-card has-page' : 'service-card'} key={title}>
              <div className="service-card-top"><span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-number">0{index + 1}</span></div>
              <h3>{page ? <a href={page.route}>{title}</a> : title}</h3>
              <p>{text}</p>
              <CardAction icon={icon} title={title} />
            </article>
          )
        })}
      </div>
    </section>
  )
}
