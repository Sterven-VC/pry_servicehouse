import { BadgeCheck, MessageCircle, Phone } from 'lucide-react'
import heroImage from '../../assets/images/servihouse-technician.webp'
import heroImageMobile from '../../assets/images/servihouse-technician-768.webp'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <Eyebrow>Servicio técnico independiente · Lima</Eyebrow>
        <h1>Tu electrodoméstico, <em>funcionando otra vez.</em></h1>
        <p className="hero-lead">Servicio técnico de electrodomésticos a domicilio en Lima: lavadoras, lavasecas, refrigeradoras, hornos, campanas extractoras y aire acondicionado.</p>
        <div className="hero-actions">
          <ContactLink type="whatsapp" placement="hero" className="btn btn-primary"><MessageCircle size={21} /> Pedir información</ContactLink>
          <ContactLink type="call" placement="hero" className="btn btn-secondary"><Phone size={20} /> Llamar ahora</ContactLink>
        </div>
        <div className="micro-proof"><BadgeCheck size={20} /><span><strong>10 años de experiencia</strong> atendiendo hogares peruanos</span></div>
      </div>
      <div className="hero-visual">
        <img src={heroImage} srcSet={`${heroImageMobile} 768w, ${heroImage} 1280w`} sizes="(max-width: 980px) 100vw, 55vw" alt="Técnico independiente revisando una lavadora a domicilio en Lima" title="Servicio técnico de electrodomésticos a domicilio en Lima" width="1280" height="640" fetchpriority="high" decoding="async" />
        <div className="availability"><span className="status-dot" /><div><strong>Coordina tu visita</strong><small>Consulta horarios por WhatsApp</small></div></div>
      </div>
    </section>
  )
}
