import { MapPin, MessageCircle } from 'lucide-react'
import { serviceAreas } from '../../data/siteData'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'

export function AreasSection() {
  return (
    <section className="areas-section" id="zonas" aria-labelledby="areas-title">
      <div className="section-shell areas-shell">
        <Eyebrow>Zonas de atención</Eyebrow>
        <h2 id="areas-title">Atención a domicilio en distintos distritos de Lima.</h2>
        <p className="areas-lead">Coordinamos revisiones, instalación y reparación de electrodomésticos en diferentes zonas de Lima Metropolitana. La disponibilidad se confirma según la ubicación, el tipo de equipo y la agenda del servicio.</p>
        <ul className="area-list" aria-label="Distritos con atención referencial">
          {serviceAreas.map(area => <li key={area}><MapPin aria-hidden="true" />{area}</li>)}
          <li className="area-conditional"><MapPin aria-hidden="true" />Otros distritos sujetos a disponibilidad</li>
        </ul>
        <div className="areas-note">
          <p>Consulta previamente la atención disponible para tu distrito. Esta lista es referencial y no garantiza atención inmediata ni cobertura para todos los tipos de equipos.</p>
          <ContactLink placement="areas" message="Hola, quisiera consultar la disponibilidad de atención a domicilio en mi distrito: " className="btn btn-primary"><MessageCircle size={20} aria-hidden="true" /> Consultar mi distrito</ContactLink>
        </div>
      </div>
    </section>
  )
}
