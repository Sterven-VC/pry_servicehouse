import { useEffect } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { BrandsSection } from './components/sections/BrandsSection'
import { FaqSection } from './components/sections/FaqSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { PartsSection } from './components/sections/PartsSection'
import { PromiseSection } from './components/sections/PromiseSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TrustBar } from './components/sections/TrustBar'
import { AreasSection } from './components/sections/AreasSection'
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'
import { LegalPage } from './components/legal/LegalPage'

function App({ year, page = 'home' }) {
  useEffect(() => {
    // Keep the no-JS layout until the interactive controls are actually ready.
    document.documentElement.classList.remove('no-js')
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header isHome={page === 'home'} />
      <main id="contenido" tabIndex="-1">
        {page === 'home' ? <>
          <HeroSection /><TrustBar /><BrandsSection /><ServicesSection />
          <PartsSection /><ProcessSection /><AreasSection /><PromiseSection />
          <FaqSection /><FinalCtaSection />
        </> : <LegalPage page={page} />}
      </main>
      <Footer year={year} isHome={page === 'home'} />
      <FloatingWhatsApp />
    </>
  )
}

export default App
