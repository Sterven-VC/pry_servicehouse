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
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'

function App({ year }) {
  useEffect(() => {
    // Keep the no-JS layout until the interactive controls are actually ready.
    document.documentElement.classList.remove('no-js')
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex="-1">
        <HeroSection />
        <TrustBar />
        <BrandsSection />
        <ServicesSection />
        <PartsSection />
        <ProcessSection />
        <PromiseSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer year={year} />
      <FloatingWhatsApp />
    </>
  )
}

export default App
