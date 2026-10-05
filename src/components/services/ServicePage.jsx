import { ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import technicianImage from '../../assets/images/servihouse-technician.webp'
import { servicePages } from '../../data/servicePages'
import { ContactLink } from '../ui/ContactLink'

export function ServicePage({ page }) {
  const id = page.placement.replace(/_/g, '-')
  const related = servicePages.filter(item => item.key !== page.key)

  return (
    <article className="service-detail">
      <div className="service-detail-hero section-shell">
        <nav aria-label="Ruta de navegación"><a href="/"><ArrowLeft aria-hidden="true" size={17} /> Inicio</a><span>/</span><span>{page.crumb}</span></nav>
        {/* The only photo shows a washing machine, so other services go without one. */}
        <div className={page.showPhoto ? 'service-detail-intro' : 'service-detail-intro no-photo'}>
          <div>
            <p className="eyebrow">Servicio técnico independiente · Lima</p>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <ContactLink type="whatsapp" placement={page.placement} message={page.whatsappMessage} className="btn btn-primary"><MessageCircle aria-hidden="true" size={20} /> Consultar por WhatsApp</ContactLink>
              <ContactLink type="call" placement={page.placement} className="btn btn-secondary"><Phone aria-hidden="true" size={20} /> Llamar ahora</ContactLink>
            </div>
          </div>
          {page.showPhoto && <img src={technicianImage} alt={page.imageAlt} title={page.imageTitle} width="1280" height="640" decoding="async" fetchpriority="high" />}
        </div>
      </div>
      <div className="service-detail-body section-shell">
        <section aria-labelledby={`fallas-${id}`}>
          <h2 id={`fallas-${id}`}>¿Qué problemas podemos revisar?</h2>
          <p>{page.problemsLead}</p>
          <ul>{page.problems.map(problem => <li key={problem}>{problem}</li>)}</ul>
          <p>{page.problemsNote}</p>
        </section>
        <section aria-labelledby={`visita-${id}`}>
          <h2 id={`visita-${id}`}>Cómo solicitar una visita</h2>
          <p>Escríbenos por WhatsApp o llámanos e indica el tipo de equipo, la marca, la falla que observas y tu distrito. Con esa información confirmamos si podemos atenderlo y coordinamos una visita. SERVIHOUSE es un servicio técnico independiente; no somos un centro autorizado de las marcas mencionadas en este sitio.</p>
          <p>Atendemos de forma referencial en distintos distritos de Lima Metropolitana, entre ellos Miraflores, San Isidro, Surco, San Borja, La Molina y otros. <a href="/#zonas">Consulta la lista de zonas de atención</a>; la disponibilidad depende de la ubicación y la agenda.</p>
        </section>
        <section aria-labelledby={`preguntas-${id}`}>
          <h2 id={`preguntas-${id}`}>Preguntas antes de coordinar</h2>
          {page.faqs.map(({ question, answer }) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
        </section>
        <section aria-labelledby={`otros-${id}`}>
          <h2 id={`otros-${id}`}>Otros servicios a domicilio</h2>
          <ul>{related.map(item => <li key={item.key}><a href={item.route}>{item.navLabel}</a></li>)}</ul>
        </section>
        <div className="service-detail-contact">
          <p>Cuéntanos qué le pasa a tu equipo y en qué distrito te encuentras.</p>
          <ContactLink type="whatsapp" placement={`${page.placement}_final`} message={page.whatsappMessage} className="btn btn-primary"><MessageCircle aria-hidden="true" size={20} /> Consultar disponibilidad</ContactLink>
        </div>
      </div>
    </article>
  )
}
