import { brands } from '../../data/siteData'

function BrandSet({ decorative = false }) {
  return (
    <div className="brand-set" aria-hidden={decorative}>
      {brands.map(({ name, src }) => (
        <div className="brand-logo" key={name}>
          {src ? <img src={src} alt={decorative ? '' : `Logotipo de ${name}, marca de electrodomésticos atendida`} title={`Equipos ${name}`} loading="lazy" /> : <strong className="brand-wordmark">{name}</strong>}
        </div>
      ))}
    </div>
  )
}

export function BrandsSection() {
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <p id="brands-title">Atendemos equipos de las principales marcas</p>
      <div className="brand-marquee">
        <div className="brand-track">
          <BrandSet />
          <BrandSet decorative />
        </div>
      </div>
      <small>Servicio independiente. Las marcas identifican los equipos que atendemos; no implican autorización ni afiliación.</small>
    </section>
  )
}
