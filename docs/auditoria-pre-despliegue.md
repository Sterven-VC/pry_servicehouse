# Auditoría previa al despliegue — 6 de septiembre de 2026

> Informe histórico. Para el estado vigente tras imágenes, SEO y auditoría de subagentes, consultar [auditoría del 9 de septiembre](auditoria-2026-09-09.md). Los pesos, referencias a cinco años y fallo de skill descritos debajo reflejan el estado anterior, no el actual.

## Dictamen

La landing compila y entrega el contenido en HTML antes de ejecutar JavaScript. El bloqueo de contactos por el aviso legal está corregido. La publicación comercial y las campañas todavía requieren dominio definitivo, información de privacidad y configuración/verificación de conversiones.

Alcance: revisión del código local, dependencias, build, renderizado, navegación, recursos y preparación SEO/SEM. No se dispuso de dominio de producción ni acceso a Google Ads, Search Console o Analytics. Los controles externos se indican como **no verificados**, no como fallos. No es una certificación de seguridad ni una auditoría de rendimiento de usuarios reales.

## Hallazgos pendientes, por prioridad

| Prioridad | Hallazgo y evidencia | Impacto y acción |
| --- | --- | --- |
| Alta, antes de campañas | `contact.js` solo encola `contact_click`; `index.html` y el arranque no instalan Google tag/GTM | No hay medición de Ads confirmada. Configurar IDs reales y validar los eventos según `medicion-y-sem.md`. |
| Alta, antes de publicación comercial | No existe página de privacidad ni información del responsable/tratamiento | Completar esos datos con el negocio y publicar una política acorde con la medición y los canales utilizados. No sustituirla por el aviso de independencia de fabricantes. |
| Media, antes de publicación SEO | Falta dominio: no hay canonical, `og:url` ni sitemap; `robots.txt` tiene un comentario pendiente | Elegir la URL HTTPS definitiva y generar referencias absolutas coherentes. La ausencia de sitemap/canonical no impide por sí sola indexar, pero deja incompleta la configuración. |
| Media | Schema `HomeAndConstructionBusiness` básico en `index.html`, sin URL, dirección ni imagen absoluta | Revisar tipo y elegibilidad del negocio a domicilio, añadir solo datos reales, validar con Schema Validator y Rich Results Test. No inventar dirección para obtener resultados enriquecidos. Se retiró `priceRange: $$`, que no estaba sustentado por tarifas visibles. |
| Media | Logo PNG nuevo: 679,68 kB; Whirlpool PNG: 189,52 kB | Servir derivados optimizados y un favicon pequeño manteniendo el diseño. El original del nuevo logo se conserva íntegro. No se midió el impacto sobre LCP en una red móvil real. |
| Media | No queda imagen Open Graph configurada tras retirar el logo antiguo | Preparar imagen social del nuevo logo y URL absoluta al confirmar el dominio; mantener coherencia con `logo`/`image` de schema. |
| Media | H1 comercial «Tu electrodoméstico, funcionando otra vez.»; lead no explicita Lima; servicios breves | Reforzar naturalmente reparación de electrodomésticos a domicilio en Lima en el primer bloque y ampliar servicios con información real. No requiere repetir palabras clave ni crear páginas por distrito sin contenido propio. |
| Media | «Más de 5 años» y «Agenda disponible» no tienen evidencia operativa verificable en el repositorio | Confirmar experiencia y disponibilidad; sustituir la afirmación de agenda si no se actualiza. Añadir evidencias propias con autorización, nunca testimonios ficticios. |
| Baja | Fuentes remotas de Google y carrusel automático | Evaluar alojamiento local de fuentes. El CSS respeta movimiento reducido; ofrecer pausa o presentación estática del carrusel para accesibilidad. No se realizó certificación WCAG. |
| Baja, herramientas | `.agents/skills/ui-ux-pro-max/scripts` contiene una ruta de enlace como texto, sin `search.py` ejecutable | El buscador de la skill no funciona en esta copia Windows. Se aplicaron sus reglas documentadas; reparar la instalación de la skill por separado. |

## Correcciones realizadas

- Aviso legal cambiado de overlay controlado por React a `details` nativo en el pie. Cerrado inicialmente; su texto está en el HTML. Al abrirlo ocupa espacio normal y no cubre acciones de contacto.
- Eliminado el estado `legalOpen` y los estilos del overlay anterior.
- Nuevo logo integrado en cabecera, pie y favicon con proporciones preservadas. Borrados `public/logo-servihouse.webp` y `src/assets/brand/logo-reference-original.jpg`; recuperables desde Git.
- Menos espacio inicial en móvil para mostrar los contactos antes; botones principales de 54 px, enlaces de cabecera/pie de al menos 48 px en móvil y descripciones de servicios/FAQ de 16 px.
- Menú alineado con la altura real de la cabecera, `aria-controls`, cierre con Escape y enlace para saltar al contenido.
- Panel de WhatsApp con altura limitada al viewport móvil y márgenes de área segura.
- `.gitignore` ampliado: dependencias, build, entornos, claves, logs, cachés y resultados de pruebas. `build/prerender.js` y el lockfile siguen versionables.
- `CLAUDE.md`, `.claudeignore` y documentación en capas conforme a la guía de arquitectura entregada.

## Pruebas y controles

- `npm test`: build y 3 pruebas de HTML inicial, recursos y desarrollo aprobados. Incluyen contenido legal presente y desplegable inicialmente cerrado.
- `npm audit --json`: 0 vulnerabilidades conocidas reportadas por npm para las dependencias instaladas. No equivale a ausencia absoluta de vulnerabilidades.
- `git diff --check`: sin errores de whitespace; avisos locales de normalización LF/CRLF.
- `git check-ignore`: `node_modules/`, `dist/` y `.env.production` excluidos; `.env.example`, script de prerender y lockfile no excluidos.
- No se encontraron archivos `.env`, claves `.key`/`.pem`, `node_modules` o `dist` versionados. No se auditó todo el historial Git buscando secretos.
- Código de contacto: mensaje codificado con `encodeURIComponent`, WhatsApp con `noopener noreferrer` en pestaña nueva; sin `dangerouslySetInnerHTML` ni `eval` en la fuente revisada.
- Navegador: 390 × 844 sin overflow horizontal. Los centros de «Pedir información» y «Llamar ahora» reciben el clic sin superposiciones; ambos botones quedan dentro de la primera pantalla.
- 375 × 812 y 844 × 390: sin overflow horizontal. Menú abre y cierra con Escape; aviso legal abre en el flujo normal. Revisión visual de escritorio a 1280 × 900.
- Sin errores ni advertencias en la consola capturada durante la verificación. Estas pruebas no sustituyen una matriz completa de navegadores/dispositivos físicos.

## SEO y visibilidad en IA

Aspectos verificados: HTML inicial con servicios y FAQ, idioma `es-PE`, viewport, title/description, un H1, jerarquía de secciones, enlaces de contacto rastreables y robots permitiendo rastreo. JSON-LD existe y se puede parsear; eso no certifica elegibilidad para rich results.

La prioridad para IA es describir con claridad la entidad, servicio, cobertura y condiciones reales, con contenido accesible y fuentes verificables. No hay garantía de recomendación por una IA. No se midieron menciones ni citas actuales. Google indica que no se requieren archivos o marcado especiales para sus funciones generativas: [guía oficial](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Comprobar también los controles de inclusión en Search Console al tener dominio.

Los bots de búsqueda y los de entrenamiento cumplen funciones distintas; no se añadieron excepciones a robots basadas en que permitir entrenamiento garantice aparecer en respuestas. No es necesario añadir `llms.txt` para cerrar los pendientes técnicos de esta landing.

## Contenido recomendado

Aplicando `content-strategy`, priorizar estas piezas como hipótesis a validar con consultas reales y preguntas de clientes, sin inventar volúmenes de búsqueda:

| Prioridad | Tema | Información necesaria |
| --- | --- | --- |
| 1 | Reparación de lavadoras/secadoras a domicilio en Lima | Fallas atendidas, alcance de diagnóstico y condiciones verificadas |
| 2 | Reparación de refrigeradoras en Lima | Síntomas frecuentes, proceso de visita y cobertura real |
| 3 | Servicio para cocinas y hornos | Tipos de equipo atendidos y límites del servicio |
| 4 | Antes de solicitar una visita | Distritos, horarios, costo de diagnóstico, garantías y datos necesarios para coordinar |

Enlazar estas piezas desde la landing cuando exista suficiente contenido propio. No generar páginas casi idénticas por marca o distrito. Los anuncios deben coincidir con el servicio y condiciones descritos en su destino.

## Controles del hosting no verificados

HTTPS/certificado y redirecciones; respuesta 404 real en rutas inexistentes; compresión y caché; cabeceras de seguridad; Search Console e indexación; Core Web Vitals de campo y PageSpeed en producción; recepción real de conversiones. Publicar solo `dist/` y no usar `vite`/`vite preview` como servidor público de producción.

## Criterio de salida

1. Confirmar dominio y completar canonical, sitemap, URLs sociales y schema con datos reales.
2. Publicar información de privacidad y validar las afirmaciones del negocio.
3. Revisar el build en el hosting, HTTPS, 404 y recursos; ejecutar PageSpeed y validadores de datos estructurados.
4. Configurar y probar conversiones antes de activar inversión publicitaria.

Skills utilizadas: `seo-audit`, `ai-seo`, `schema`, `content-strategy`, `ads` y `ui-ux-pro-max`. Las primeras orientaron el informe técnico/comercial; la última guio legibilidad, tamaños táctiles, flujo del aviso legal y pruebas móviles. El buscador de UI/UX no pudo ejecutarse por la instalación incompleta descrita arriba. Al finalizar aparecieron cambios paralelos en las carpetas de skills y configuración local; no fueron realizados ni revertidos por esta tarea. El hallazgo de instalación refleja su estado durante la lectura inicial.
