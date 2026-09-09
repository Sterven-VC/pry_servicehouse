# SERVIHOUSE — landing page

Landing page React + Vite con HTML prerenderizado para servicio técnico independiente de electrodomésticos a domicilio en Lima.

## HTML primero

El contenido completo se entrega en la primera respuesta HTML: encabezados, servicios, preguntas frecuentes, imágenes y enlaces de contacto. No se descarga un contenedor vacío para rellenarlo desde el navegador.

- En producción, `build/prerender.js` genera el HTML desde `src/entry-server.jsx` durante `npm run build`. No se necesita un servidor React/Node en el hosting.
- En desarrollo, el mismo árbol se renderiza antes de responder cada petición de la página.
- `src/main.jsx` utiliza `hydrateRoot` para activar menú, widget y medición sobre el HTML existente. No vuelve a crear la página.
- El CSS se enlaza directamente desde el HTML. Sin JavaScript (o si el bundle falla), la navegación y los contactos directos siguen disponibles. Las FAQ y el aviso legal usan `<details>` nativos. El aviso está siempre dentro del pie, sin superponerse al contenido.
- El año del pie se comparte entre HTML e hidratación para evitar diferencias si un build sigue publicado después de cambiar de año.

Para editar contenido, modifica los componentes o `src/data/siteData.js` y vuelve a ejecutar el build; no edites `dist/index.html` manualmente.

### Comprobación automática

`npm test` compila y comprueba que producción y desarrollo entreguen el H1, todos los servicios y respuestas FAQ, contactos y JSON-LD sin ejecutar JavaScript en el navegador. También valida las URLs de imágenes/CSS/JS generadas y los estilos de respaldo sin JavaScript.

## Estructura

```text
src/
├── assets/
│   ├── brand/            # Logo vigente y recurso de WhatsApp
│   └── images/           # Imágenes optimizadas y archivos fuente
├── components/
│   ├── layout/           # Cabecera y pie de página
│   ├── sections/         # Secciones de la landing
│   └── ui/               # Componentes reutilizables
├── config/               # Contactos y medición
├── data/                 # Servicios, marcas y preguntas frecuentes
├── styles/               # Estilos globales y tokens visuales
├── App.jsx               # Composición de la página
├── entry-server.jsx      # Generación del HTML inicial
└── main.jsx              # Hidratación de las interacciones

public/
├── brands/               # Logos servidos sin transformación por Vite
└── robots.txt
```

El logo original vigente es `src/assets/brand/logo_servihose.png`. Cabecera y pie usan su derivado `servihouse-logo.webp` y el favicon es un PNG separado de 48 px. Las fotos de repuestos finales están en `src/assets/images/repuestos/`; sus originales se conservan localmente bajo `source/`, ignorados por Git. Ver `docs/imagenes.md`.

## Documentación del proyecto

La organización sigue `Arquitectura para proyectos con Claude Code.md`: `CLAUDE.md` es el índice breve y `docs/` contiene los detalles.

- [Arquitectura](docs/arquitectura.md)
- [Auditoría previa al despliegue](docs/auditoria-pre-despliegue.md)
- [Medición y SEM](docs/medicion-y-sem.md)
- [Imágenes e inventario](docs/imagenes.md)
- [Auditoría vigente](docs/auditoria-2026-09-09.md)
- [Commit y despliegue Seenode](docs/despliegue-seenode.md)

## Desarrollo

```bash
npm ci
npm run dev
```

## Build y despliegue

```bash
npm run build
```

La carpeta `dist/` puede desplegarse directamente en Vercel, Netlify o cualquier hosting estático. Antes de publicar, confirma el dominio y completa canonical, URL absoluta de Open Graph, sitemap, horarios, distritos atendidos y política de privacidad para campañas de Google Ads.

Para Seenode: build `npm ci && npm run build`, start `npm start`, puerto `8080`. El servidor publica solo dist. Configurar `SITE_URL` en build genera canonical, URLs sociales y sitemap automáticamente. No usar Vite como servidor público. Python/Pillow solo sirven para regenerar imágenes localmente, no son dependencias del despliegue.

## Medición

Los enlaces de contacto emiten un evento `contact_click` a `window.dataLayer`, con `contact_method` y `placement`, listo para conectarse con Google Tag Manager y conversiones de Google Ads.
