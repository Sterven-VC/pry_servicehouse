import { useState } from 'react'
import { brands } from '../../data/siteData'

function BrandSet({ decorative = false }) {
  return (
    <div className="brand-set" aria-hidden={decorative}>
      {brands.map(({ name, src }) => (
        <div className="brand-logo" key={name}>
          {src ? <img src={src} alt={decorative ? '' : `Marca ${name}`} loading="lazy" /> : <strong className="brand-wordmark">{name}</strong>}
        </div>
      ))}
    </div>
  )
}

export function BrandsSection() {
  const [paused, setPaused] = useState(false)
  return (
    <section className="brands-section" aria-labelledby="brands-title">
      <p id="brands-title">Atendemos equipos de las principales marcas</p>
      <div className="brand-marquee">
        <div className="brand-track" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
          <BrandSet />
          <BrandSet decorative />
        </div>
      </div>
      <button className="brand-pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Reanudar marcas' : 'Pausar marcas'}</button>
      <small>Servicio independiente. Las marcas identifican los equipos que atendemos; no implican autorización ni afiliación.</small>
    </section>
  )
}
