import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteData'
import { Eyebrow } from '../ui/Eyebrow'

export function FaqSection() {
  return (
    <section className="faq-section section-shell" id="preguntas">
      <div className="faq-heading"><Eyebrow>Información útil</Eyebrow><h2>Preguntas frecuentes</h2><p>Lo esencial antes de solicitar una visita técnica.</p></div>
      <div className="faq-list">
        {faqs.map(({ question, answer }, index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}
      </div>
    </section>
  )
}
