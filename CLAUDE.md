# SERVIHOUSE

Landing de servicio técnico independiente de electrodomésticos a domicilio en Lima.
Objetivo: informar y facilitar contactos por WhatsApp y teléfono, principalmente desde móviles.

## Stack y comandos

- React 18 + Vite 6, JavaScript y CSS; HTML prerenderizado, hosting estático.
- `npm ci`: instalar las versiones del lockfile.
- `npm run dev`: desarrollo con HTML inicial completo.
- `npm test`: build y pruebas de contenido inicial/recursos.
- `npm run preview`: revisar el build localmente; no es un servidor de producción.
- `npm audit`: revisar vulnerabilidades conocidas de dependencias.

## Reglas del proyecto

- Conservar el HTML completo antes de JavaScript; hidratar las interacciones.
- Contenido en `src/data/siteData.js`; teléfonos y eventos en `src/config/contact.js`.
- Logo original: `src/assets/brand/logo_servihose.png`; servir `servihouse-logo.webp` y favicon de 48 px. Conservar proporciones.
- Aviso legal en el pie, con `details` nativo; nunca abrirlo como overlay automático.
- Verificar móvil a 390 × 844 y 375 px, teclado y navegación sin JavaScript.
- No inventar precios, distritos, autorizaciones de fabricantes ni testimonios.
- Nunca versionar secretos; las variables `VITE_*` son públicas en el bundle.
- Publicar únicamente `dist/`. No editar sus archivos manualmente.

## Referencias bajo demanda

- Arquitectura: @docs/arquitectura.md
- Auditoría y pendientes de despliegue: @docs/auditoria-pre-despliegue.md
- Contrato de medición y preparación SEM: @docs/medicion-y-sem.md
- Identidad visual: @.impeccable.md
- Imágenes: @docs/imagenes.md
- Auditoría vigente: @docs/auditoria-2026-09-09.md
- Commit y Seenode: @docs/despliegue-seenode.md
- Guía original: `Arquitectura para proyectos con Claude Code.md`
