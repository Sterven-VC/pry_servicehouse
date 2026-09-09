# Medición y preparación SEM

## Estado verificado

`src/config/contact.js` coloca `contact_click` en `window.dataLayer`, con `contact_method` y `placement`. No hay contenedor GTM ni Google tag instalado. Por tanto, no se verificaron conversiones recibidas por Google Ads. El proyecto no tiene acceso a cuentas Ads, Analytics o Search Console.

## Contrato de eventos existente

| Campo | Significado |
| --- | --- |
| `event` | `contact_click` |
| `contact_method` | `call` o `whatsapp` |
| `placement` | Ubicación del enlace; p. ej. `hero`, `header`, `topbar`, `floating_widget` |

Abrir el widget no es una conversión. Seguir `tel:` no confirma que se atendió una llamada; seguir `wa.me` no confirma un mensaje enviado ni un servicio contratado. No enviar el contenido libre del mensaje a Analytics. El evento actual no incluye ese texto.

## Pasos antes de invertir en anuncios

1. Confirmar dominio, horario real de atención, distritos atendidos y presupuesto.
2. Completar y publicar información de privacidad acorde con las herramientas y tratamiento reales del negocio.
3. Elegir una implementación de medición: GTM o Google tag, con IDs reales. Evitar duplicar la misma conversión entre importaciones de GA4 y etiquetas directas.
4. En GTM, crear variables de capa de datos `contact_method` y `placement`, y triggers personalizados `contact_click` filtrados por método. Asociar etiquetas de conversión a las acciones creadas en Ads.
5. Verificar primero en Tag Assistant y después en el diagnóstico de Ads: un clic genera un solo evento, navegación conserva funcionalidad y no se registran datos personales en parámetros.
6. Tratar clics de contacto como señales iniciales. Medir contactos calificados y servicios efectivamente contratados con un proceso comercial separado; definir la conversión principal según ese objetivo.
7. Comprobar etiquetado automático, parámetros de campañas y redirecciones en el dominio publicado. No hay prueba de atribución real disponible en localhost.

## Alineación del contenido con campañas

La landing agrupa aire acondicionado (instalación, mantenimiento y reparación), lavadoras/secadoras, refrigeradoras, cocinas/hornos, instalación de equipos y repuestos. La nueva sección `#repuestos` incluye fotos y consulta de compatibilidad; su CTA emite `contact_click` con `placement: parts`, sin transmitir el mensaje a Analytics. Usar destinos y anuncios coherentes con el servicio ofrecido; no anunciar autorización de fabricantes, stock, precios o resultados no confirmados.

No se proponen importes, pujas, CPA objetivo ni listas de negativas sin datos de presupuesto, márgenes o términos de búsqueda. Tampoco se lanzaron ni modificaron campañas.

Referencias oficiales: [Google tag y conversiones](https://support.google.com/google-ads/answer/7548399), [Configurar conversiones web](https://support.google.com/google-ads/answer/16560108).

## Conectar Google Ads después del despliegue

1. Confirmar propiedad del dominio en Search Console y enviar el sitemap generado. Crear o usar cuentas Google Ads, GA4 y GTM del negocio; revisar accesos, moneda, zona horaria y facturación con el propietario.
2. Definir privacidad y consentimiento según el tratamiento real. Instalar un único contenedor GTM o Google tag con identificadores reales, sin duplicarlo. Con GTM, implementar estados iniciales y actualizaciones de consentimiento antes de disparar etiquetas. Consent Mode no es una política ni un gestor de consentimiento por sí mismo. [Documentación oficial](https://developers.google.com/tag-platform/security/guides/consent).
3. Crear variables de capa de datos `contact_method` y `placement`. Activador personalizado `contact_click`; separar `whatsapp` y `call`. Enviar a GA4 para observar intención de contacto; conectar las acciones de Ads elegidas. No etiquetar automáticamente estos clics como `purchase` ni como lead confirmado. No duplicar la misma acción mediante importación GA4 y etiqueta Ads directa.
4. Comprobar con Tag Assistant/DebugView y diagnóstico de Ads. Una acción, un evento. El cierre o apertura del widget no dispara contacto. No enviar mensajes libres, nombres, teléfonos ni fotos de clientes como parámetros. Probar en móvil y con las elecciones de consentimiento.
5. Definir objetivo comercial y presupuesto con el propietario antes de crear campañas. Para búsqueda, organizar por intención de servicio y cobertura real: reparación, climatización o repuestos. No activar inversión ni fijar pujas/CPA sin datos. Revisar términos reales para futuras exclusiones, sin listas genéricas inventadas.
6. Activar etiquetado automático de Ads y revisar que redirecciones conserven identificadores y parámetros. Registrar aparte cuáles consultas se convierten en trabajos contratados; un clic al teléfono no confirma llamada atendida. La atribución de WhatsApp no se demuestra solo con el frontend.

## Meta Ads: dos recorridos diferentes

- **Anuncios que abren WhatsApp:** vincular WhatsApp Business y activos comerciales correspondientes, configurar cuenta publicitaria/facturación y verificar el número. No atraviesan la web, por lo que no disparan su `contact_click`. No requieren instalar Pixel en esta landing para abrir la conversación. [Guía oficial de WhatsApp Business](https://whatsappbusiness.com/products/create-ads-that-click-to-whatsapp/).
- **Anuncios dirigidos a la página:** incluir UTM sin datos personales; configurar Pixel solo con privacidad y consentimiento resueltos. Validar eventos en Events Manager y no confundir clic con venta. CAPI requeriría un componente seguro de servidor o proveedor; nunca poner tokens en React o `VITE_*`.

Ejemplo de convención, sustituyendo dominio y campaña por valores reales: `?utm_source=facebook&utm_medium=paid_social&utm_campaign=repuestos_lima&utm_content=filtros#repuestos`. Para Instagram usar su fuente correspondiente. No añadir datos del cliente a la URL.

Antes de invertir: confirmar dominio, cobertura, horarios, presupuesto/margen, identidad y contacto de privacidad, derechos de imágenes y accesos. No se han instalado píxeles, comprado anuncios ni creado campañas. No hay datos de rendimiento para recomendar escalar, pausar o repartir presupuesto entre plataformas.
