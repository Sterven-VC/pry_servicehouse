import { useEffect, useState } from 'react'
import { Send, X } from 'lucide-react'
import { CONTACT, createWhatsAppUrl, trackContact } from '../../config/contact'
import whatsappIcon from '../../assets/brand/whatsapp-logo.png'

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState(CONTACT.whatsappMessage)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className={isOpen ? 'whatsapp-widget is-open' : 'whatsapp-widget'}>
      {isOpen && (
        <section className="whatsapp-panel" aria-label="Enviar mensaje por WhatsApp">
          <header className="whatsapp-panel-head">
            <span className="whatsapp-avatar"><img src={whatsappIcon} alt="" /></span>
            <div><strong>SERVIHOUSE</strong><small>Normalmente respondemos por WhatsApp</small></div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar chat de WhatsApp"><X /></button>
          </header>
          <div className="whatsapp-panel-body">
            <p className="whatsapp-greeting">Hola, ¿en qué equipo necesitas ayuda?</p>
            <label htmlFor="whatsapp-message">Tu mensaje</label>
            <textarea id="whatsapp-message" value={message} onChange={(event) => setMessage(event.target.value)} rows="3" />
            <a className="whatsapp-send" href={createWhatsAppUrl(message)} onClick={() => trackContact('whatsapp', 'floating_widget')}>
              <Send /> Enviar por WhatsApp
            </a>
          </div>
        </section>
      )}
      <button type="button" className="whatsapp-float" aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'} aria-expanded={isOpen} aria-controls="whatsapp-message" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <img src={whatsappIcon} alt="" className="whatsapp-icon" />}
      </button>
    </div>
  )
}
