import { useState } from 'react'
import { Clock3, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { CONTACT } from '../../config/contact'
import { ContactLink } from '../ui/ContactLink'
import brandLogo from '../../assets/brand/servihouse-logo.webp'

export function Header({ isHome = true }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const section = id => isHome ? `#${id}` : `/#${id}`

  return (
    <header className="site-header">
      <div className="topline">
        <span><Clock3 size={15} /> Atención coordinada a domicilio</span>
        <ContactLink type="call" placement="topbar"><Phone size={15} /> {CONTACT.phoneDisplay}</ContactLink>
      </div>
      <div className="nav-shell">
        <a href={isHome ? '#inicio' : '/'} className="brand" aria-label="SERVIHOUSE, inicio">
          <img src={brandLogo} alt="Logo de SERVIHOUSE Línea Blanca" title="SERVIHOUSE Línea Blanca" width="384" height="384" />
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-controls="navegacion-principal" aria-expanded={menuOpen} onKeyDown={(event) => { if (event.key === 'Escape') closeMenu() }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="navegacion-principal" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal" onKeyDown={(event) => { if (event.key === 'Escape') { closeMenu(); event.currentTarget.previousElementSibling.focus() } }}>
          <a href={section('servicios')} onClick={closeMenu}>Servicios</a>
          <a href={section('repuestos')} onClick={closeMenu}>Repuestos</a>
          <a href={section('zonas')} onClick={closeMenu}>Zonas</a>
          <a href={section('preguntas')} onClick={closeMenu}>Preguntas</a>
          <ContactLink type="whatsapp" placement="header" className="nav-cta"><MessageCircle size={19} /> Solicitar atención</ContactLink>
        </nav>
      </div>
    </header>
  )
}
