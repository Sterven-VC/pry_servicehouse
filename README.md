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

`npm start` sirve únicamente `dist/` en `0.0.0.0:8080`. `serve.json` configura 404 reales, desactiva el listado de directorios, añade cabeceras básicas y aplica caché prolongada a los recursos con hash. No se necesita base de datos ni almacenamiento persistente.

Rutas públicas: `/`, `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/` y `/terminos-y-condiciones/`.

## Dominio y SEO

Cuando se adquiera el dominio, configurar en Seenode la variable:

```text
SITE_URL=https://sevihouseperu.com
```

Debe ser un origen HTTPS sin ruta, query ni fragmento. El dominio de producción ya está definido como respaldo en el build, y esta variable lo deja explícito en Seenode. El build generará canonical, `og:url`, `og:image`, `robots.txt` y `sitemap.xml`. Cambiar el dominio requiere un nuevo despliegue.

Después de conectar el dominio: validar DNS y HTTPS, registrar la propiedad en Google Search Console, enviar `/sitemap.xml` y ejecutar PageSpeed Insights y Rich Results Test sobre la URL pública.

## Google Ads y Meta

Con consentimiento de analítica, los enlaces de contacto envían a GA4 el evento `contact_click`, con `contact_method` (`whatsapp` o `call`) y `placement`. La etiqueta GA4 se carga solo tras aceptar el consentimiento. No hay GTM, etiqueta directa de Google Ads ni Meta Pixel instalados.

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
