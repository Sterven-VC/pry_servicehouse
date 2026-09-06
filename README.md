# SERVIHOUSE — landing page

Landing page React + Vite con HTML prerenderizado para servicio técnico independiente de electrodomésticos a domicilio en Lima.

## HTML primero

El contenido completo se entrega en la primera respuesta HTML: encabezados, servicios, preguntas frecuentes, imágenes y enlaces de contacto. No se descarga un contenedor vacío para rellenarlo desde el navegador.

- En producción, `build/prerender.js` genera el HTML desde `src/entry-server.jsx` durante `npm run build`. No se necesita un servidor React/Node en el hosting.
- En desarrollo, el mismo árbol se renderiza antes de responder cada petición de la página.
- `src/main.jsx` utiliza `hydrateRoot` para activar menú, aviso legal, widget y medición sobre el HTML existente. No vuelve a crear la página.
- El CSS se enlaza directamente desde el HTML. Sin JavaScript (o si el bundle falla), la navegación y los contactos directos siguen disponibles, las FAQ usan `<details>` nativos y el aviso legal queda al final sin tapar el contenido.
- El año del pie se comparte entre HTML e hidratación para evitar diferencias si un build sigue publicado después de cambiar de año.

Para editar contenido, modifica los componentes o `src/data/siteData.js` y vuelve a ejecutar el build; no edites `dist/index.html` manualmente.

### Comprobación automática

`npm test` compila y comprueba que producción y desarrollo entreguen el H1, todos los servicios y respuestas FAQ, contactos y JSON-LD sin ejecutar JavaScript en el navegador. También valida las URLs de imágenes/CSS/JS generadas y los estilos de respaldo sin JavaScript.

## Estructura

```text
src/
├── assets/
│   ├── brand/            # Logo original entregado como referencia
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
├── logo-servihouse.webp  # Logo optimizado utilizado en la web
└── robots.txt
```

La referencia original entregada se conserva en `src/assets/brand/logo-reference-original.jpg`. La aplicación utiliza una copia recortada y optimizada en `public/logo-servihouse.webp`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build y despliegue

```bash
npm run build
```

La carpeta `dist/` puede desplegarse directamente en Vercel, Netlify o cualquier hosting estático. Antes de publicar, confirma el dominio y completa canonical, URL absoluta de Open Graph, sitemap, horarios, distritos atendidos y política de privacidad para campañas de Google Ads.

## Medición

Los enlaces de contacto emiten un evento `contact_click` a `window.dataLayer`, con `contact_method` y `placement`, listo para conectarse con Google Tag Manager y conversiones de Google Ads.
