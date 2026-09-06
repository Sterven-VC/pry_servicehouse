import { CONTACT, createWhatsAppUrl, trackContact } from '../../config/contact'

export function ContactLink({ type = 'whatsapp', placement, className = '', children, ...props }) {
  const isWhatsapp = type === 'whatsapp'

  return (
    <a
      className={className}
      href={isWhatsapp ? createWhatsAppUrl() : CONTACT.phoneUrl}
      target={isWhatsapp ? '_blank' : undefined}
      rel={isWhatsapp ? 'noopener noreferrer' : undefined}
      onClick={() => trackContact(type, placement)}
      data-conversion={type}
      {...props}
    >
      {children}
    </a>
  )
}
