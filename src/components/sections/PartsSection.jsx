import { ArrowRight } from 'lucide-react'
import { ContactLink } from '../ui/ContactLink'
import { Eyebrow } from '../ui/Eyebrow'
import drainHose from '../../assets/images/repuestos/manguera-desague-lavadora.webp'
import flexibleHose from '../../assets/images/repuestos/manguera-flexible-conectores.webp'
import sleeve from '../../assets/images/repuestos/manguito-flexible-lavadora.webp'
import inletHose from '../../assets/images/repuestos/manguera-entrada-agua-lavadora.webp'
import externalFilter from '../../assets/images/repuestos/filtro-externo-agua-refrigeradora.webp'
import cartridge from '../../assets/images/repuestos/filtro-cartucho-agua-refrigeradora.webp'
import inlineFilter from '../../assets/images/repuestos/filtro-lineal-agua-refrigeradora.webp'
import components from '../../assets/images/repuestos/componentes-electromecanicos-electrodomesticos.webp'

const parts = [
  { image: drainHose, title: 'Mangueras de desagüe', alt: 'Manguera gris corrugada con abrazadera para desagüe de lavadora', category: 'Lavado' },
  { image: inletHose, title: 'Mangueras de entrada de agua', alt: 'Manguera blanca de entrada de agua con conectores azules', category: 'Conexiones' },
  { image: externalFilter, title: 'Filtros externos de agua', alt: 'Filtro externo de agua para refrigeradora junto a su empaque y accesorios', category: 'Refrigeración' },
  { image: cartridge, title: 'Filtros de cartucho', alt: 'Cartucho de filtro de agua para refrigeradora junto a su empaque', category: 'Refrigeración' },
  { image: flexibleHose, title: 'Mangueras flexibles', alt: 'Manguera negra enrollada con conectores metálicos', category: 'Conexiones' },
  { image: sleeve, title: 'Manguitos y conexiones', alt: 'Manguito negro corrugado con abrazaderas en ambos extremos', category: 'Lavado' },
  { image: inlineFilter, title: 'Filtros en línea', alt: 'Filtro cilíndrico de agua para refrigeradora', category: 'Refrigeración' },
  { image: components, title: 'Componentes electromecánicos', alt: 'Dos componentes negros para electrodomésticos con terminales eléctricos', category: 'Repuestos' },
]

function PartsGrid({ items }) {
  return <div className="parts-grid">{items.map(({ image, title, alt, category }) => (
    <figure className="part-item" key={title}>
      <div className="part-image"><img src={image} alt={alt} title={title} width="640" height="640" loading="lazy" decoding="async" /></div>
      <figcaption><span>{category}</span><h3>{title}</h3></figcaption>
    </figure>
  ))}</div>
}

export function PartsSection() {
  return <section className="parts-section" id="repuestos" aria-labelledby="parts-heading">
    <div className="section-shell">
      <div className="parts-heading">
        <div><Eyebrow>Repuestos y accesorios</Eyebrow><h2 id="parts-heading">La pieza adecuada<br />para tu equipo.</h2></div>
        <p>Consulta por mangueras, filtros de agua y componentes para electrodomésticos en Lima. Envíanos la marca, el modelo y una foto de la pieza para revisar compatibilidad y disponibilidad.</p>
      </div>
      <PartsGrid items={parts.slice(0, 4)} />
      <details className="parts-more"><summary>Ver más tipos de repuestos</summary><PartsGrid items={parts.slice(4)} /></details>
      <div className="parts-contact">
        <p>Imágenes referenciales. El modelo, la compatibilidad, el precio y la disponibilidad se confirman antes de la compra. Servicio independiente de los fabricantes.</p>
        <ContactLink placement="parts" message="Hola, quisiera información sobre un repuesto para mi electrodoméstico. Mi equipo y modelo son: " className="text-link">Consultar un repuesto <ArrowRight size={18} aria-hidden="true" /></ContactLink>
      </div>
    </div>
  </section>
}
