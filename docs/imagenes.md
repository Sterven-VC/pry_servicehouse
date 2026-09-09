# Inventario de imágenes — 9 de septiembre de 2026

Se inspeccionaron visualmente las 12 imágenes entregadas por el propietario. Son repuestos/filtros; no son fotos de técnicos trabajando ni de climatización. Las identificaciones son descriptivas, no certifican modelo, autenticidad o compatibilidad.

## Organización

- `src/assets/images/repuestos/`: ocho WebP usados por `PartsSection.jsx`.
- `src/assets/images/source/repuestos/`: los 12 JPG originales, conservados localmente e ignorados por Git.
- `src/assets/images/source/repuestos/optimized-reference/`: cuatro WebP de referencia que no se importan ni despliegan.
- `scripts/optimize-images.py`: conversión reproducible con Python + Pillow, sin metadatos EXIF, máximo 640 px y calidad WebP 80. No necesita ejecutarse en el hosting; los derivados se versionan.

| Original | Identificación / destino |
| --- | --- |
| img1 | Manguera de desagüe → `manguera-desague-lavadora.webp` |
| img2 | Manguera negra con conectores → `manguera-flexible-conectores.webp`; no se afirma uso para gas |
| img3 | Manguito corrugado → `manguito-flexible-lavadora.webp` |
| img4 | Entrada de agua → `manguera-entrada-agua-lavadora.webp` |
| img5 | Gráfico publicitario de filtro/refrigeradora; reservado por afirmación de compatibilidad universal |
| img6 | Filtro externo con empaque → `filtro-externo-agua-refrigeradora.webp` |
| img7 | Filtro de cartucho → `filtro-cartucho-agua-refrigeradora.webp` |
| img8 | Publicidad con persona y afirmaciones de filtración/salud; reservado |
| img9 | Publicidad con plazo de seis meses; reservado hasta verificar indicaciones del modelo |
| img10 | Filtro lineal → `filtro-lineal-agua-refrigeradora.webp` |
| img11 | Componentes electromecánicos → `componentes-electromecanicos-electrodomesticos.webp`; identificación exacta pendiente |
| img12 | Aparente bomba de desagüe con marca de agua; reservada, marca de agua intacta |

## Rendimiento y presentación

12 originales: 412 289 bytes. 12 derivados: 162 544 bytes (−60,6 %). Los ocho publicados suman 91 728 bytes; no se entregan las cuatro referencias. Cuatro visibles inicialmente y cuatro bajo `details` nativo, sin necesitar JavaScript. Todas usan lazy loading, dimensiones reservadas, `object-fit: contain` y alt descriptivo. No se amplían los archivos pequeños durante la conversión ni se añaden ubicaciones no acreditadas a sus alt.

Logo: original conservado `src/assets/brand/logo_servihose.png`; derivado `servihouse-logo.webp` de 640 px, 40 266 bytes frente a 679 678 bytes del PNG. Favicon separado de 48 px. La imagen hero ya era WebP. Los originales existentes que ya estaban versionados no desaparecen del historial por añadir `.gitignore`.

No se eliminaron originales. Copiar la carpeta source a un respaldo externo si se desea reducir también el espacio local; no es necesaria en Git ni producción. Confirmar derechos de todas las fotografías antes de la publicación comercial. Recibir archivos no demuestra licencia ni autenticidad de productos.

Los nombres descriptivos, alt y texto próximo ayudan a interpretar el contenido; no garantizan posicionamiento. [Guía de imágenes de Google](https://developers.google.com/search/docs/appearance/google-images).
