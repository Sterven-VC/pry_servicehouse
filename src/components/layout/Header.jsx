import { useState } from 'react'
import { Clock3, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { CONTACT } from '../../config/contact'
import { ContactLink } from '../ui/ContactLink'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="topline">
        <span><Clock3 size={15} /> Atención coordinada a domicilio</span>
        <ContactLink type="call" placement="topbar"><Phone size={15} /> {CONTACT.phoneDisplay}</ContactLink>
      </div>
      <div className="nav-shell">
        <a href="#inicio" className="brand" aria-label="SERVIHOUSE, inicio">
          <img src="/logo-servihouse.webp" alt="SERVIHOUSE Línea Blanca" width="170" height="78" />
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proceso" onClick={closeMenu}>Cómo funciona</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <ContactLink type="whatsapp" placement="header" className="nav-cta"><MessageCircle size={19} /> Solicitar atención</ContactLink>
        </nav>
      </div>
    </header>
  )
}
