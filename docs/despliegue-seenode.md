# Commit manual y despliegue posterior en Seenode

## Antes del commit

1. Ejecutar `npm ci`, `npm test` y `npm audit`.
2. Revisar `git status --short`, `git diff --stat` y el diff de los archivos seleccionados. Ya existían cambios y eliminaciones del propietario: no restaurarlos automáticamente ni incluirlos sin revisión.
3. Versionar fuente, `build/`, `tests/`, `scripts/`, WebP finales, `serve.json`, `.env.example`, `package.json` y lockfile. No subir `.env`, claves, `node_modules`, `dist`, fuentes fotográficas locales ni artefactos temporales. `.gitignore` actualizado.
4. Hacer commit y push manualmente. No se ejecutaron aquí. No poner secretos en variables `VITE_*`: son públicas.

## Configuración preparada

| Campo | Valor |
| --- | --- |
| Tipo | Web service desde GitHub |
| Runtime | Node compatible con Vite 6; confirmar runtime disponible en Seenode al desplegar |
| Raíz | Raíz del repositorio |
| Build | `npm ci && npm run build` |
| Start | `npm start` |
| Puerto | `8080` (servidor escucha en `0.0.0.0`) |
| Archivos publicados | Exclusivamente `dist/` |
| Variable de build | `SITE_URL`, origen HTTPS definitivo, sin ruta, query ni fragmento |

`npm start` utiliza `serve`, no Vite ni `vite preview`. `serve.json` impide listar directorios, entrega 404 en rutas inexistentes, configura cabeceras básicas y caché prolongada solo en recursos con hash. No se necesita base de datos ni almacenamiento persistente. El puerto 5173 sigue siendo solo desarrollo; no se dejó ningún servidor de prueba activo.

El plugin `build/seo.js` genera canonical, `og:url`, `og:image` y sitemap únicamente cuando hay `SITE_URL`. `robots.txt` se genera en build, reemplazando el antiguo archivo manual. Sin dominio no inventa enlaces. Cambiar `SITE_URL` requiere nuevo build. No usar el dominio de prueba de los tests como dominio real.

## Después del push, con el MCP de Seenode

Confirmar repositorio/rama/commit, servicio existente o nuevo, dominio y plan/coste aprobado. Revisar conexión Git y runtime; no crear servicios duplicados. Crear una aplicación puede iniciar un despliegue y generar costes: hacerlo en el siguiente paso autorizado, no durante esta preparación. El MCP está disponible; no se creó ninguna aplicación ni se cambió facturación.

Tras desplegar: validar HTTPS, dominio y redirección HTTP; resolver DNS con los valores que Seenode proporcione; comprobar home 200, ruta inexistente 404, assets 200, headers/caché y compresión; revisar móvil y contactos. Probar canonical/sitemap en el dominio real, Search Console y PageSpeed. Las cabeceras del proxy, certificados, indexación y Core Web Vitals reales no pueden certificarse desde localhost.

Antes de activar campañas: datos reales del responsable y política de privacidad, cobertura/horarios, derechos de imágenes, IDs de medición y consentimiento configurado. Ver `medicion-y-sem.md`.

Fuentes oficiales: [configuración de Seenode](https://seenode.com/docs/how-to/configure), [servicios web y puerto/TLS](https://seenode.com/docs/concepts/web-services), [servidor estático serve](https://github.com/vercel/serve).
