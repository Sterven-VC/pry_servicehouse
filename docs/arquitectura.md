# Arquitectura de SERVIHOUSE

Esta documentación aplica la guía «Arquitectura para proyectos con Claude Code.md»: contexto corto en `CLAUDE.md` y detalles en `docs/`. No se agregan capas de backend innecesarias para una landing estática.

## Responsabilidades

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | Idioma, metadatos, fuentes, CSS inicial y punto de prerender |
| `build/prerender.js` | Plugin Vite: renderiza componentes antes de procesar recursos del HTML |
| `src/entry-server.jsx` | Produce HTML y año compartido con el navegador |
| `src/main.jsx` | Hidrata con `hydrateRoot`; no crea el contenido inicial |
| `src/App.jsx` | Compone secciones, accesibilidad inicial y pie |
| `src/components/layout/` | Cabecera, navegación y pie |
| `src/components/sections/` | Contenido comercial y FAQ |
| `src/components/ui/` | Contactos, WhatsApp y aviso legal nativo |
| `src/data/siteData.js` | Servicios, marcas y preguntas frecuentes |
| `src/config/contact.js` | Destinos de contacto y contrato `contact_click` |
| `src/styles/global.css` | Tokens, composición, breakpoints y respaldo sin JS |
| `src/assets/` | Recursos importados y procesados por Vite |
| `public/` | Archivos servidos sin transformación |
| `tests/static-html.test.mjs` | Contenido inicial, enlaces a recursos y desarrollo |

## Flujo de renderizado

En desarrollo el servidor Vite carga `entry-server.jsx` y devuelve el árbol completo. En build el plugin crea un cargador SSR temporal, genera el HTML y lo cierra. Vite resuelve las imágenes importadas y genera archivos con hash. El hosting entrega `dist/index.html` y sus recursos; no ejecuta React ni requiere Node.

El navegador puede leer la página antes de descargar JavaScript. React conecta menú y widget al HTML existente. Las FAQ y el aviso legal son elementos `details` que funcionan por sí mismos. El año se serializa en `data-render-year` para evitar discrepancias al hidratar.

## Datos y límites

No hay API propia, base de datos, autenticación ni formularios que almacenen datos en este proyecto. El texto del widget se codifica en una URL `wa.me`; solo se envía a WhatsApp al seguir el enlace. La cola `dataLayer` no equivale a tener Google Ads conectado.

Logo fuente vigente: `src/assets/brand/logo_servihose.png`, PNG cuadrado con transparencia suministrado por el usuario. Cabecera, pie y favicon reutilizan el mismo recurso. Los logos anteriores fueron retirados del árbol de trabajo; Git conserva sus versiones previas.

## Despliegue y mantenimiento

Instalar con `npm ci`, ejecutar `npm test` y publicar solo `dist/`. Configurar HTTPS, dominio canónico, caché y respuestas 404 en el proveedor elegido. No subir el repositorio completo, archivos `.env`, skills ni fuentes de imágenes al directorio público.

Los ignores evitan archivos nuevos no deseados; no eliminan archivos ya versionados ni son controles de acceso. No se modificaron permisos locales de herramientas. La guía original se conserva como referencia.
