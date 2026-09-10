import { Mail, MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '../../config/business'
import { CONTACT, createWhatsAppUrl } from '../../config/contact'

const updated = '9 de septiembre de 2026'

function Section({ id, title, children }) {
  return <section className="legal-section" id={id}><h2>{title}</h2>{children}</section>
}

function Identity() {
  return <dl className="identity-list">
    <div><dt>Titular</dt><dd>{BUSINESS.owner}</dd></div>
    <div><dt>Nombre comercial</dt><dd>{BUSINESS.brand}</dd></div>
    <div><dt>RUC</dt><dd>{BUSINESS.ruc}</dd></div>
    <div><dt>Ámbito de atención</dt><dd>{BUSINESS.serviceArea}, {BUSINESS.country}</dd></div>
    <div><dt>Correo</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
  </dl>
}

const documents = {
  notice: {
    eyebrow: 'Información institucional', title: 'Aviso legal', intro: 'Identificación del responsable del sitio, alcance de la información publicada y condiciones generales de uso.',
    content: <>
      <Section id="titular" title="1. Titular del sitio"><Identity /></Section>
      <Section id="finalidad" title="2. Finalidad del sitio"><p>Este sitio informa sobre los servicios independientes de diagnóstico, mantenimiento, reparación e instalación de electrodomésticos y aire acondicionado, además de la disponibilidad de repuestos. La atención se coordina previamente y está sujeta al distrito, equipo y agenda.</p></Section>
      <Section id="independencia" title="3. Servicio técnico independiente"><p>SERVIHOUSE no es un servicio técnico autorizado, representante, sucursal ni empresa afiliada a los fabricantes mencionados. Las marcas y nombres comerciales se muestran solo para identificar los equipos que podemos atender; su uso no implica patrocinio, autorización o vínculo oficial.</p></Section>
      <Section id="informacion" title="4. Información, presupuestos y responsabilidad"><p>Procuramos mantener información clara y actualizada, pero el contenido web es orientativo y no reemplaza la revisión física del equipo. Un diagnóstico, precio, plazo, disponibilidad de repuesto o cobertura solo queda confirmado mediante comunicación directa. SERVIHOUSE responde conforme a la legislación peruana aplicable; ninguna cláusula limita los derechos irrenunciables del consumidor.</p></Section>
      <Section id="propiedad" title="5. Propiedad intelectual y marcas"><p>Los textos, composición visual y elementos propios del sitio no deben reproducirse con fines comerciales sin autorización. Las marcas, logotipos y nombres de terceros pertenecen a sus respectivos titulares. Si consideras que algún contenido vulnera derechos, escríbenos para revisarlo.</p></Section>
      <Section id="enlaces" title="6. Enlaces externos"><p>El sitio puede enlazar a WhatsApp u otros servicios administrados por terceros. Sus condiciones, disponibilidad y prácticas de privacidad son responsabilidad de esos proveedores.</p></Section>
      <Section id="ley" title="7. Protección de datos y legislación"><p>El tratamiento de datos se explica en nuestra <a href="/politica-de-privacidad/">Política de privacidad</a>. Este aviso se interpreta de acuerdo con las normas vigentes en el Perú.</p></Section>
    </>,
  },
  privacy: {
    eyebrow: 'Tus datos y contacto', title: 'Política de privacidad', intro: 'Te explicamos qué información puede recibirse al contactarnos, por qué se utiliza y cómo ejercer tus derechos.',
    content: <>
      <Section id="responsable" title="1. Responsable del tratamiento"><Identity /></Section>
      <Section id="datos" title="2. Datos que podemos recibir"><p>Este sitio no tiene formularios de registro. Si decides escribir por WhatsApp, llamar o enviar un correo, podrías proporcionar nombre, teléfono, distrito, dirección de visita, información del equipo, fotografías y detalles necesarios para atender tu solicitud. Evita compartir datos sensibles que no sean necesarios.</p></Section>
      <Section id="finalidades" title="3. Finalidades"><p>Usamos la información para responder consultas, verificar cobertura, coordinar visitas, realizar diagnósticos, preparar presupuestos, prestar el servicio, gestionar repuestos y atender reclamos o consultas posteriores.</p></Section>
      <Section id="base" title="4. Base y conservación"><p>El tratamiento se basa en tu solicitud, consentimiento y, cuando corresponda, en la relación contractual o el cumplimiento de obligaciones legales. Conservamos los datos únicamente durante el tiempo necesario para esas finalidades y los plazos exigidos por ley.</p></Section>
      <Section id="terceros" title="5. Canales y terceros"><p>WhatsApp, la telefonía y Google Fonts son servicios de terceros. Al usarlos o cargar las tipografías del sitio, sus proveedores pueden recibir datos técnicos como la dirección IP, conforme a sus propias políticas. No vendemos datos personales. Solo podrán compartirse con proveedores indispensables para la operación o autoridades cuando exista obligación legal.</p></Section>
      <Section id="publicidad" title="6. Analítica y publicidad"><p>Actualmente el sitio no activa herramientas propias de analítica publicitaria, remarketing ni píxeles de Google Ads o Meta Ads. Antes de incorporar tecnologías que requieran consentimiento, actualizaremos estas políticas e implementaremos los controles correspondientes.</p></Section>
      <Section id="derechos" title="7. Derechos sobre tus datos"><p>Puedes solicitar acceso, rectificación, cancelación u oposición, así como revocar tu consentimiento cuando corresponda, escribiendo a <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. Incluye información suficiente para identificar tu solicitud; podremos pedir una validación razonable de identidad.</p></Section>
      <Section id="seguridad" title="8. Seguridad y actualizaciones"><p>Aplicamos medidas razonables para proteger la información, aunque ningún canal digital elimina totalmente los riesgos. Esta política podrá actualizarse por cambios operativos o normativos; la versión vigente se publicará en esta ruta.</p></Section>
    </>,
  },
  cookies: {
    eyebrow: 'Transparencia digital', title: 'Política de cookies', intro: 'Información sobre el almacenamiento en el navegador y los servicios externos vinculados desde esta web.',
    content: <>
      <Section id="que-son" title="1. Qué son las cookies"><p>Las cookies y tecnologías similares son pequeños datos que un sitio o un proveedor puede guardar en el navegador para recordar preferencias, medir uso o personalizar contenidos.</p></Section>
      <Section id="uso-actual" title="2. Uso actual en SERVIHOUSE"><p>En su versión actual, este sitio no instala cookies propias de analítica, personalización ni publicidad. La página funciona como contenido informativo y utiliza enlaces de contacto directo.</p></Section>
      <Section id="terceros" title="3. Servicios de terceros"><p>El sitio solicita las tipografías a Google Fonts, por lo que Google puede recibir datos técnicos como la dirección IP, aunque SERVIHOUSE no utiliza esa conexión para identificarte. Al abrir WhatsApp u otro enlace externo, el proveedor de destino puede usar cookies o tecnologías equivalentes según su propia política.</p></Section>
      <Section id="futuro" title="4. Analítica y campañas futuras"><p>Si en el futuro se integran Google Analytics, Google Ads, Meta Pixel u otras herramientas no esenciales, esta política se actualizará y se implementará un mecanismo de información y consentimiento cuando sea exigible. No se presentarán como activas antes de su instalación real.</p></Section>
      <Section id="gestion" title="5. Cómo gestionarlas"><p>Puedes revisar, bloquear o borrar cookies desde la configuración de tu navegador. Bloquear tecnologías necesarias de servicios externos podría afectar su funcionamiento, pero no impide consultar el contenido básico de esta web.</p></Section>
      <Section id="contacto" title="6. Contacto"><p>Para preguntas sobre esta política, escribe a <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p></Section>
    </>,
  },
  terms: {
    eyebrow: 'Condiciones del servicio', title: 'Términos y condiciones', intro: 'Reglas aplicables al uso del sitio y a la coordinación de los servicios técnicos independientes de SERVIHOUSE.',
    content: <>
      <Section id="identificacion" title="1. Identificación"><Identity /></Section>
      <Section id="alcance" title="2. Servicios y alcance"><p>Ofrecemos evaluación, mantenimiento, reparación e instalación de línea blanca y aire acondicionado, así como venta o gestión de repuestos seleccionados. El servicio exacto depende del tipo, estado y ubicación del equipo, la disponibilidad técnica y la zona de atención.</p></Section>
      <Section id="solicitud" title="3. Solicitud y disponibilidad"><p>Una conversación por teléfono o WhatsApp inicia una consulta y no constituye por sí sola una reserva definitiva. La visita se confirma al acordar fecha, rango horario, dirección y condiciones aplicables. El usuario debe brindar información correcta y facilitar acceso seguro al equipo.</p></Section>
      <Section id="diagnostico" title="4. Diagnóstico y presupuesto"><p>Las causas, piezas, precio y tiempo de trabajo pueden confirmarse después de revisar el equipo. Antes de ejecutar trabajos adicionales se comunicará el alcance y se solicitará conformidad. Cualquier costo de visita o diagnóstico debe informarse al coordinar.</p></Section>
      <Section id="repuestos" title="5. Repuestos"><p>La disponibilidad y compatibilidad dependen del modelo y del mercado. Se informará cuando una pieza sea original, compatible, reacondicionada o proporcionada por el cliente. Las condiciones de garantía aplicables deben constar en el comprobante o comunicación del servicio.</p></Section>
      <Section id="responsabilidades" title="6. Responsabilidades"><p>El cliente debe informar fallas conocidas, intervenciones previas y condiciones de acceso. SERVIHOUSE ejecutará únicamente el trabajo acordado y responderá dentro de los límites previstos por la ley. Los derechos reconocidos por el Código de Protección y Defensa del Consumidor no se ven reducidos por estos términos.</p></Section>
      <Section id="sitio" title="7. Uso del sitio y marcas"><p>No se permite utilizar el sitio para fines ilícitos o afectar su disponibilidad. SERVIHOUSE es independiente de los fabricantes; las marcas citadas se usan solo con fines descriptivos.</p></Section>
      <Section id="datos" title="8. Datos y comunicaciones"><p>La información proporcionada se trata según la <a href="/politica-de-privacidad/">Política de privacidad</a>. Las coordinaciones se realizan mediante los canales oficiales publicados en el sitio.</p></Section>
      <Section id="cambios" title="9. Cambios y ley aplicable"><p>Podemos actualizar estas condiciones por cambios operativos o legales. Se aplica la legislación peruana y se mantienen intactos los mecanismos de protección al consumidor que correspondan.</p></Section>
    </>,
  },
}

export function LegalPage({ page }) {
  const document = documents[page] || documents.notice
  return <article className="legal-page">
    <header className="legal-hero">
      <nav aria-label="Migas de pan"><a href="/">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">{document.title}</span></nav>
      <p className="eyebrow">{document.eyebrow}</p><h1>{document.title}</h1><p>{document.intro}</p>
      <small>Última actualización: {updated}</small>
    </header>
    <div className="legal-layout">
      <aside aria-label="Contacto de SERVIHOUSE"><strong>¿Necesitas aclarar algo?</strong><a href={createWhatsAppUrl('Hola, quisiera hacer una consulta sobre la información legal de SERVIHOUSE.')} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a><a href={CONTACT.phoneUrl}><Phone /> {CONTACT.phoneDisplay}</a><a href={`mailto:${BUSINESS.email}`}><Mail /> Correo electrónico</a></aside>
      <div className="legal-content">{document.content}</div>
    </div>
  </article>
}
