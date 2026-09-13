import { ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import technicianImage from '../../assets/images/servihouse-technician.webp'
import { ContactLink } from '../ui/ContactLink'

export function WashingMachinePage() {
  return (
    <article className="service-detail">
      <div className="service-detail-hero section-shell">
        <nav aria-label="Ruta de navegación"><a href="/"><ArrowLeft aria-hidden="true" size={17} /> Inicio</a><span>/</span><span>Servicio técnico de lavadoras</span></nav>
        <div className="service-detail-intro">
          <div>
            <p className="eyebrow">Servicio técnico independiente · Lima</p>
            <h1>Servicio técnico de lavadoras a domicilio en Lima</h1>
            <p>Revisamos lavadoras, secadoras y lavasecas en casa para identificar la falla y explicarte las opciones de atención antes de proceder. Coordinamos la visita según tu distrito y disponibilidad.</p>
            <div className="hero-actions">
              <ContactLink type="whatsapp" placement="lavadoras" message="Hola, quisiera consultar por el servicio técnico de mi lavadora en Lima." className="btn btn-primary"><MessageCircle aria-hidden="true" size={20} /> Consultar por WhatsApp</ContactLink>
              <ContactLink type="call" placement="lavadoras" className="btn btn-secondary"><Phone aria-hidden="true" size={20} /> Llamar ahora</ContactLink>
            </div>
          </div>
          <img src={technicianImage} alt="Técnico revisando una lavadora en un domicilio" title="Revisión de lavadoras a domicilio en Lima" width="1280" height="640" decoding="async" fetchpriority="high" />
        </div>
      </div>
      <div className="service-detail-body section-shell">
        <section aria-labelledby="fallas-lavadoras">
          <h2 id="fallas-lavadoras">¿Qué problemas podemos revisar?</h2>
          <p>Una lavadora que no enciende, no drena, hace ruido, vibra demasiado o no centrifuga puede tener causas distintas. La revisión técnica permite identificar el origen antes de decidir si corresponde ajustar, reparar o sustituir algún componente.</p>
          <ul>
            <li>Fallas de encendido o interrupciones durante el ciclo.</li>
            <li>Agua que no ingresa o no desagua correctamente.</li>
            <li>Ruidos, vibraciones o problemas de centrifugado.</li>
            <li>Problemas de secado en secadoras y lavasecas.</li>
          </ul>
          <p>La atención también puede incluir mantenimiento preventivo, según el estado del equipo. No realizamos un diagnóstico definitivo por mensaje: primero necesitamos conocer el modelo y la falla, y en muchos casos revisar el equipo.</p>
        </section>
        <section aria-labelledby="visita-lavadoras">
          <h2 id="visita-lavadoras">Cómo solicitar una visita</h2>
          <p>Escríbenos por WhatsApp o llámanos e indica el tipo de equipo, la marca, la falla que observas y tu distrito. Con esa información confirmamos si podemos atenderlo y coordinamos una visita. SERVIHOUSE es un servicio técnico independiente; no somos un centro autorizado de las marcas mencionadas en este sitio.</p>
          <p>Atendemos de forma referencial en distintos distritos de Lima Metropolitana, entre ellos Miraflores, San Isidro, Surco, San Borja, La Molina y otros. <a href="/#zonas">Consulta la lista de zonas de atención</a>; la disponibilidad depende de la ubicación y la agenda.</p>
        </section>
        <section aria-labelledby="preguntas-lavadoras">
          <h2 id="preguntas-lavadoras">Preguntas antes de coordinar</h2>
          <h3>¿Atienden lavasecas y secadoras?</h3>
          <p>Sí, puedes consultarnos por lavadoras, lavasecas y secadoras. Indícanos la marca y el modelo para confirmar la atención.</p>
          <h3>¿Tengo que llevar el equipo?</h3>
          <p>El servicio se coordina a domicilio en Lima. Confirma previamente tu distrito y el tipo de equipo para saber si hay disponibilidad.</p>
          <h3>¿Pueden confirmar la reparación sin revisar la lavadora?</h3>
          <p>No siempre. Un mismo síntoma puede tener varias causas; la revisión permite explicar las opciones adecuadas para el caso.</p>
        </section>
        <div className="service-detail-contact">
          <p>Cuéntanos qué le pasa a tu equipo y en qué distrito te encuentras.</p>
          <ContactLink type="whatsapp" placement="lavadoras_final" message="Hola, quisiera consultar por el servicio técnico de mi lavadora en Lima." className="btn btn-primary"><MessageCircle aria-hidden="true" size={20} /> Consultar disponibilidad</ContactLink>
        </div>
      </div>
    </article>
  )
}
