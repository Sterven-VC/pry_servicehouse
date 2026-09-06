import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { BrandsSection } from './components/sections/BrandsSection'
import { FaqSection } from './components/sections/FaqSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { PromiseSection } from './components/sections/PromiseSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TrustBar } from './components/sections/TrustBar'
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'
import { LegalAlert } from './components/ui/LegalAlert'

function App({ year }) {
  const [legalOpen, setLegalOpen] = useState(true)

  useEffect(() => {
    // Keep the no-JS layout until the interactive controls are actually ready.
    document.documentElement.classList.remove('no-js')
  }, [])

  return (
    <>
      <Header />
      <main id="contenido">
        <HeroSection />
        <TrustBar />
        <BrandsSection />
        <ServicesSection />
        <ProcessSection />
        <PromiseSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer year={year} onOpenLegal={() => setLegalOpen(true)} />
      <FloatingWhatsApp />
      <LegalAlert open={legalOpen} onOpenChange={setLegalOpen} />
    </>
  )
}

export default App
