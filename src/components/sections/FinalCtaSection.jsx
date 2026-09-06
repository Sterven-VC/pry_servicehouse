import { MessageCircle, Phone } from 'lucide-react'
import { CONTACT } from '../../config/contact'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div><Eyebrow light>Estamos para ayudarte</Eyebrow><h2>¿Tu electrodoméstico dejó de funcionar?</h2><p>Cuéntanos qué pasó y solicita información sin compromiso.</p></div>
      <div className="final-actions">
        <ContactLink type="whatsapp" placement="final_cta" className="btn btn-accent"><MessageCircle /> Escribir al {CONTACT.whatsappDisplay}</ContactLink>
        <ContactLink type="call" placement="final_cta" className="call-inline"><Phone /> Llamar al {CONTACT.phoneDisplay}</ContactLink>
      </div>
    </section>
  )
}
