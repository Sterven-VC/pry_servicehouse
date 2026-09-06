export function Footer({ year, onOpenLegal }) {
  return (
    <footer>
      <div className="footer-main">
        <img src="/logo-servihouse.webp" alt="SERVIHOUSE Línea Blanca" width="190" height="134" />
        <p>Diagnóstico, mantenimiento y reparación de electrodomésticos a domicilio en Lima.</p>
        <div><a href="#servicios">Servicios</a><a href="#proceso">Cómo funciona</a><a href="#preguntas">Preguntas frecuentes</a></div>
      </div>
      <div className="footer-bottom">
        <span>© {year} SERVIHOUSE. Empresa independiente.</span>
        <button onClick={onOpenLegal}>Ver aviso legal</button>
      </div>
    </footer>
  )
}
