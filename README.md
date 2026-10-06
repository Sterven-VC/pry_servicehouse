# SERVIHOUSE

Landing page React + Vite para servicio técnico independiente de electrodomésticos a domicilio en Lima. El HTML se prerenderiza durante el build y las interacciones se hidratan en el navegador.

## Desarrollo

Requiere Node.js y npm.

```bash
npm ci
npm run dev
```

Vite usa `http://localhost:5173` en desarrollo. Para validar antes de subir cambios:

```bash
npm test
npm audit
```

## Despliegue en Seenode

Después de hacer commit y push manual a GitHub, crear un servicio web desde Git con:

| Campo | Valor |
| --- | --- |
| Directorio raíz | raíz del repositorio |
| Build command | `npm ci && npm run build` |
| Start command | `npm start` |
| Puerto | `8080` |

`npm start` ejecuta `server.mjs`, que sirve únicamente `dist/` en `0.0.0.0:8080` con compresión. Antes de servir archivos redirige con 301 `www.` al dominio canónico y las rutas públicas sin barra final a su versión con barra, conservando la query (`gclid`, UTM). `serve.json` configura 404 reales, desactiva el listado de directorios, añade cabeceras básicas y aplica caché prolongada a los recursos con hash. No se necesita base de datos ni almacenamiento persistente.

Para que la redirección de `www` funcione, `www.sevihouseperu.com` debe apuntar a este mismo servicio en Seenode (dominio adicional con HTTPS).

Rutas públicas: `/`, las páginas de servicio definidas en `src/data/servicePages.js` (`/servicio-tecnico-lavadoras-lima/`, `/servicio-tecnico-refrigeradoras-lima/`, `/servicio-tecnico-aire-acondicionado-lima/` y `/reparacion-hornos-campanas-extractoras-lima/`), `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/` y `/terminos-y-condiciones/`. Para añadir un servicio: agregar su entrada en `servicePages.js`, crear su `index.html` (copiando uno existente con sus metadatos y `data-page`) y su reescritura en `serve.json`; el build, el sitemap, el schema y `llms.txt` lo recogen solos.

## Dominio y SEO

Cuando se adquiera el dominio, configurar en Seenode la variable:

```text
SITE_URL=https://sevihouseperu.com
```

Debe ser un origen HTTPS sin ruta, query ni fragmento. El dominio de producción ya está definido como respaldo en el build, y esta variable lo deja explícito en Seenode. El build generará canonical, `og:url`, `og:image`, datos estructurados JSON-LD por página (`build/schema.js`, a partir de `src/config` y `src/data`), `robots.txt`, `sitemap.xml` (con `lastmod`) y `llms.txt`, un resumen del negocio para asistentes y buscadores con IA. Cambiar el dominio requiere un nuevo despliegue.

Después de conectar el dominio: validar DNS y HTTPS, registrar la propiedad en Google Search Console, enviar `/sitemap.xml` y ejecutar PageSpeed Insights y Rich Results Test sobre la URL pública.

## Google Ads y Meta

La etiqueta de Google (GA4) se carga en todas las visitas con Consent Mode v2 avanzado: `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization` empiezan en `denied` y solo pasan a `granted` al aceptar el banner. Sin consentimiento no se guardan cookies y Google recibe pings sin cookies que usa para modelar conversiones. Los enlaces de contacto envían `contact_click` (importado en Google Ads como acción secundaria "Clic en teléfono o WhatsApp") y además `whatsapp_contact_click` o `call_contact_click`, todos con `contact_method` y `placement`. `whatsapp_contact_click` alimenta la acción secundaria "Clic a WhatsApp"; en GA4 existe una regla antigua con ese mismo nombre basada en `wa.me/51912138192`, que ya no coincide con ningún enlace y conviene eliminar para evitar confusiones. `url_passthrough` conserva `gclid` y UTM entre páginas sin cookies. La misma etiqueta configura Google Ads (`AW-18443438027`) y cada clic de contacto envía la conversión "Clic WhatsApp o llamada (etiqueta Ads)", que es la acción principal de la campaña; las acciones importadas de GA4 quedan como secundarias para no contar doble. No hay GTM ni Meta Pixel. La CSP de `serve.json` permite los dominios de Google Ads.

Antes de invertir en anuncios se necesitan el dominio, política de privacidad y consentimiento acordes al tratamiento real, cobertura y horarios confirmados, presupuesto, cuentas del negocio y derechos de uso de imágenes. Un clic a WhatsApp o teléfono es una intención de contacto, no un mensaje enviado, una llamada atendida ni una venta. No enviar mensajes, teléfonos ni fotografías de clientes a Analytics.

Al importar este evento en Ads, identificarlo como clic o intención de contacto y evitar duplicarlo con una etiqueta directa de Ads. Los anuncios que abren WhatsApp directamente no atraviesan esta landing y no disparan su evento.

## Archivos versionados

- `src/`: aplicación y recursos optimizados utilizados.
- `public/brands/`: marcas mostradas con fin descriptivo.
- `build/`: prerender y generación SEO.
- `tests/`: comprobaciones de HTML, recursos, seguridad básica del hosting y SEO.
- `serve.json`, `package.json` y `package-lock.json`: ejecución reproducible en Seenode.
- `.env.example`: referencia de la variable pública del dominio.
- `THIRD_PARTY_ASSETS.md`: trazabilidad pendiente de recursos gráficos.

Los originales pesados se conservan solo en `.local-assets/`, ignorado por Git. No editar `dist/` manualmente ni versionar `.env`, dependencias, builds o herramientas locales de agentes.
