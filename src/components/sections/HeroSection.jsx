import { BadgeCheck, MessageCircle, Phone } from 'lucide-react'
import heroImage from '../../assets/images/servihouse-technician.webp'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <Eyebrow>Servicio técnico independiente · Lima</Eyebrow>
        <h1>Tu electrodoméstico, <em>funcionando otra vez.</em></h1>
        <p className="hero-lead">Diagnóstico, mantenimiento y reparación a domicilio con atención clara, técnicos con experiencia y coordinación rápida.</p>
        <div className="hero-actions">
          <ContactLink type="whatsapp" placement="hero" className="btn btn-primary"><MessageCircle size={21} /> Pedir información</ContactLink>
          <ContactLink type="call" placement="hero" className="btn btn-secondary"><Phone size={20} /> Llamar ahora</ContactLink>
        </div>
        <div className="micro-proof"><BadgeCheck size={20} /><span><strong>Más de 5 años</strong> atendiendo hogares peruanos</span></div>
      </div>
      <div className="hero-visual">
        <img src={heroImage} alt="Técnico independiente revisando una lavadora a domicilio" width="1774" height="887" fetchpriority="high" />
        <div className="availability"><span className="status-dot" /><div><strong>Agenda disponible</strong><small>Consulta horarios por WhatsApp</small></div></div>
      </div>
    </section>
  )
}
