import { useEffect, useRef, useState } from 'react'
import { Send, X } from 'lucide-react'
import { CONTACT, createWhatsAppUrl, trackContact } from '../../config/contact'
import whatsappIcon from '../../assets/brand/whatsapp-logo.png'

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState(CONTACT.whatsappMessage)
  const triggerRef = useRef(null)
  const messageRef = useRef(null)
  const panelRef = useRef(null)
  const closePanel = () => { setIsOpen(false); triggerRef.current?.focus() }
  useEffect(() => { if (isOpen) messageRef.current?.focus() }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) closePanel()
      if (event.key === 'Tab' && isOpen) {
        const focusable = panelRef.current?.querySelectorAll('button, textarea, a[href]')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <div className={isOpen ? 'whatsapp-widget is-open' : 'whatsapp-widget'}>
      {isOpen && (
        <section ref={panelRef} id="whatsapp-panel" className="whatsapp-panel" role="dialog" aria-modal="true" aria-label="Enviar mensaje por WhatsApp">
          <header className="whatsapp-panel-head">
            <span className="whatsapp-avatar"><img src={whatsappIcon} alt="" title="WhatsApp de SERVIHOUSE" /></span>
            <div><strong>SERVIHOUSE</strong><small>Normalmente respondemos por WhatsApp</small></div>
            <button type="button" onClick={closePanel} aria-label="Cerrar chat de WhatsApp"><X /></button>
          </header>
          <div className="whatsapp-panel-body">
            <p className="whatsapp-greeting">Hola, ¿en qué equipo necesitas ayuda?</p>
            <label htmlFor="whatsapp-message">Tu mensaje</label>
            <textarea ref={messageRef} id="whatsapp-message" value={message} onChange={(event) => setMessage(event.target.value)} rows="3" />
            <a className="whatsapp-send" href={createWhatsAppUrl(message)} onClick={() => trackContact('whatsapp', 'floating_widget')}>
              <Send /> Enviar por WhatsApp
            </a>
          </div>
        </section>
      )}
      <button ref={triggerRef} type="button" className="whatsapp-float" aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'} aria-expanded={isOpen} aria-controls={isOpen ? 'whatsapp-panel' : undefined} onClick={() => isOpen ? closePanel() : setIsOpen(true)}>
        {isOpen ? <X /> : <img src={whatsappIcon} alt="" title="Abrir WhatsApp de SERVIHOUSE" className="whatsapp-icon" />}
      </button>
    </div>
  )
}
