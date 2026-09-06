import { brands } from '../../data/siteData'

export function BrandsSection() {
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <p id="brands-title">Atendemos equipos de las principales marcas</p>
      <div className="brand-marquee">
        <div className="brand-track">
          {[...brands, ...brands].map(({ name, src }, index) => (
            <div className="brand-logo" key={`${name}-${index}`} aria-hidden={index >= brands.length}>
              <img src={src} alt={index < brands.length ? `Marca ${name}` : ''} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <small>Las marcas se muestran únicamente para identificar los equipos que atendemos.</small>
    </section>
  )
}
