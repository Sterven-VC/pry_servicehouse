# Auditoría Google Ads: SERVI HOUSE LIMA

- **Cuenta:** SERVI HOUSE LIMA (ocid 8328068357)
- **Campaña auditada:** `SEARCH | Leads | Reparación linea blanca| Lima` (ID 23959998659)
- **Fecha de la auditoría:** 4 de octubre de 2026
- **Periodo analizado:** "Todo el período", del 17 de junio al 4 de octubre de 2026
- **Moneda:** PEN (S/)
- **Método:** revisión en modo solo lectura desde el navegador integrado de Claude. No se guardó ningún cambio en la cuenta (ver la sección 14).

---

## 1. Resumen ejecutivo

La campaña **sí genera contactos a un coste bajo**: 315 conversiones a **S/16.58 por conversión**, con una tasa de conversión del 12 %. Esto confirma lo que observa el negocio: cuando la campaña está activa, la gente escribe.

Hay problemas que hoy limitan el rendimiento y la fiabilidad de los datos:

| # | Problema | Impacto | Prioridad |
|---|---|---|---|
| 1 | La campaña y su único anuncio están **detenidos** y los fondos prepagados están bajos (S/69.76). | No se publica nada. | Crítica |
| 2 | La extensión de llamada de la cuenta usa **997 628 986**, un número que ya no debe utilizarse. | Llamadas a un número equivocado. | Crítica |
| 3 | La campaña se **pausa y se reactiva casi a diario**, y el anuncio se editó unas **13 veces en dos semanas**. | La puja automática (Maximizar conversiones) no puede aprender. | Alta |
| 4 | Desde el 3 de septiembre solo puja por **WHATSAPP** (82 conversiones en total). La conversión "Llamada" pasó a secundaria. Ambas cuentan "Todas" y tienen valor 0. | Hay muy pocos datos para optimizar y las conversiones están infladas. | Alta |
| 5 | Casi todas las palabras clave están en **concordancia amplia**. | Aparecen búsquedas de soporte oficial (LG, Electrolux, Sole, Mabe…), de televisores y de cocinas. | Alta |
| 6 | La red de **socios de búsqueda** se lleva el 50 % de los clics, pero solo el 10 % de las conversiones (tasa del 2.4 % frente al 21.9 % en Google). | Tráfico de baja calidad. | Media |
| 7 | Hay **ajustes de puja por ubicación** (-40 % a +20 %) que Maximizar conversiones ignora. | Configuración engañosa. | Media |
| 8 | Hay incoherencias: palabras negativas que bloquean búsquedas relevantes, un fragmento estructurado que anuncia "Cocinas y hornos" mientras se excluyen las cocinas, y un encabezado "Modelos" incorrecto. | Calidad y relevancia. | Media |
| 9 | La campaña lleva a **servihouselima.com**. Si también se anuncia **sevihouseperu.com** para el mismo negocio, puede infringir la política de "ventaja injusta" de Google Ads. | Riesgo de política. | Alta (antes de lanzar otra campaña) |

---

## 2. Métricas globales (17 jun – 4 oct 2026)

| Métrica | Valor |
|---|---|
| Impresiones | 57,755 |
| Clics | 2,612 |
| CTR | 4.52 % |
| CPC medio | S/2.00 |
| Coste | S/5,223.40 |
| Conversiones (columna "Conversiones") | 315.00 |
| Tasa de conversión | 12.06 % |
| Coste por conversión | S/16.58 |
| Valor de conversión | 0.00 (no se asigna valor) |
| Nivel de optimización | "—" (no se muestra) |

**Rutas de conversión** (gráfico del resumen): 54 conversiones con 1 interacción, 7 con 2 y 2 con 3. Casi todos convierten en el primer clic.

**Facturación (coste neto mensual):**

| Mes | Coste neto | Pagos |
|---|---|---|
| Junio | S/526.78 | S/780.00 |
| Julio | S/1,419.41 | S/1,290.00 |
| Agosto | S/72.36 | S/200.00 |
| Septiembre | S/2,502.79 | S/2,317.11 |
| Octubre (hasta el día 4) | S/231.01 | S/235.00 |

- **Modo de pago:** prepago con pagos manuales (Visa •••• 7141). El último pago fue de S/60 el 3 de octubre.
- **Fondos disponibles:** S/69.76. Google avisa de que "los fondos se están agotando".
- Con un presupuesto de S/135/día, esos fondos no cubren ni un día completo.

---

## 3. Configuración de la campaña

| Parámetro | Valor actual | Comentario |
|---|---|---|
| Estado | **Detenida** | El anuncio también está detenido. |
| Tipo | Búsqueda | Correcto. |
| Redes | Búsqueda de Google **+ socios de búsqueda** | Ver la sección 6. |
| Objetivo | Clics salientes (objetivo de cuenta) | Incluye solo la acción "WHATSAPP" como principal. |
| Estrategia de puja | Maximizar conversiones, **sin CPA objetivo** | El historial indica que el 20 de agosto se "aumentó 1 CPA objetivo del grupo de anuncios", pero hoy la columna aparece vacía ("—"). |
| Presupuesto | S/135.00/día | El gasto real fue menor por las pausas (septiembre ≈ S/83/día). |
| Adquisición de clientes | Ofertas iguales para clientes nuevos y existentes | Correcto (no hay listas). |
| Reglas sobre el valor | No hay | — |
| Ubicaciones | 26 distritos de Lima y Callao (lista en la sección 9) | — |
| Opción de ubicación | **Presencia** (personas que están o suelen estar en la zona) | Correcto para un servicio a domicilio. |
| Idioma | Español | Correcto. |
| Concordancia amplia a nivel de campaña | Desactivada, pero **las palabras clave son de tipo amplio** | Ver la sección 7. |
| Recursos creados automáticamente | Desactivados | Correcto. |
| Optimización de recursos | Personalización de texto y expansión de URL final desactivadas | Correcto (controla el mensaje). |
| IA Max | No activado (Google lo recomienda) | No activarlo con la medición actual. |
| Anuncios dinámicos de búsqueda | No configurados | — |
| Rotación de anuncios | Optimizar | Correcto. |
| Sufijo de URL final | `utm_source=google&utm_medium=cpc&utm_campaign=search_reparacion_electrodomesticos_lima&utm_content={creative}&utm_term={keyword}` | Correcto. Hay histórico con `utm_campaign=servihouselima_search`, así que en Analytics la campaña aparece con dos nombres. |
| Plantilla de seguimiento | Vacía | — |
| Exclusiones de IP | Ninguna | — |
| Listas de marcas | 0 | — |
| Fecha de inicio | 20 de junio de 2026, sin fecha de fin | — |
| Públicos | **Ninguno** (ni siquiera en modo observación) | Ver la sección 12. |

---

## 4. Programación de anuncios

Hay 3 franjas al día, los 7 días: **6:00–11:00**, **14:00–17:00** y **19:00–22:00**. Fuera de ellas no se publica (de 11:00 a 14:00, de 17:00 a 19:00 y de 22:00 a 6:00). No hay ajustes de puja por horario.

| Franja | Clics | Coste | Conv. | Coste/conv. |
|---|---|---|---|---|
| Domingo 14–17 | 146 | S/170.17 | 20.00 | **S/8.51** |
| Lunes 19–22 | 48 | S/73.23 | 6.98 | **S/10.49** |
| Domingo 6–11 | 175 | S/221.68 | 20.00 | **S/11.08** |
| Jueves 14–17 | 131 | S/221.66 | 18.50 | **S/11.98** |
| Miércoles 14–17 | 117 | S/183.84 | 15.02 | S/12.24 |
| Sábado 14–17 | 115 | S/222.49 | 17.00 | S/13.09 |
| Martes 19–22 | 63 | S/105.78 | 8.00 | S/13.22 |
| Jueves 19–22 | 134 | S/280.18 | 21.00 | S/13.34 |
| Domingo 19–22 | 85 | S/110.70 | 7.00 | S/15.81 |
| Lunes 6–11 | 131 | S/264.97 | 16.00 | S/16.56 |
| Martes 14–17 | 88 | S/186.77 | 11.00 | S/16.98 |
| Viernes 14–17 | 116 | S/261.30 | 15.00 | S/17.42 |
| Jueves 6–11 | 144 | S/279.06 | 15.00 | S/18.60 |
| Miércoles 6–11 | 97 | S/163.56 | 8.00 | S/20.44 |
| Sábado 19–22 | 138 | S/215.27 | 10.00 | S/21.53 |
| Martes 6–11 | 118 | S/300.20 | 13.00 | S/23.09 |
| Sábado 6–11 | 170 | S/346.65 | 15.00 | S/23.11 |
| Miércoles 19–22 | 74 | S/143.25 | 6.00 | S/23.88 |
| Viernes 6–11 | 161 | S/373.89 | 15.50 | S/24.12 |
| Viernes 19–22 | 110 | S/187.90 | 6.00 | **S/31.32** |
| Lunes 14–17 | 91 | S/251.26 | 6.00 | **S/41.88** |
| **Programaciones quitadas (anteriores)** | 160 | S/659.59 | 45.00 | S/14.66 (tasa de conversión del **28 %**) |

**Lectura:**
- Las tardes (14–17) y los domingos rinden mejor. Las mañanas del viernes y el sábado, el lunes por la tarde y el viernes por la noche son las franjas más caras.
- Las franjas quitadas convertían al 28 %. Antes de descartar horarios, conviene comprobar qué cubrían. El hueco de 11:00 a 14:00 podría estar perdiendo contactos.
- **Recomendación:** usar la programación en lugar de pausar a mano. Antes de recortar más franjas, confirmar en qué horas el negocio puede responder por WhatsApp.

---

## 5. Dispositivos y datos demográficos

| Dispositivo | Clics | Coste | Conv. | Tasa conv. | Coste/conv. |
|---|---|---|---|---|---|
| Móviles | 2,333 | S/4,366.36 | 275.00 | 11.79 % | S/15.88 |
| Computadoras | 265 | S/823.89 | 40.00 | 15.09 % | S/20.60 |
| Tablets | 14 | S/33.16 | 0.00 | 0 % | — |

No hay ajustes por dispositivo. El 89 % de los clics viene del móvil, coherente con un contacto por WhatsApp.

| Edad | Clics | Coste | Conv. | Coste/conv. |
|---|---|---|---|---|
| 18–24 | 98 | S/246.57 | 24 | **S/10.27** |
| 25–34 | 379 | S/1,000.60 | 62 | S/16.14 |
| 35–44 | 432 | S/851.59 | 60 | S/14.19 |
| 45–54 | 475 | S/978.50 | 51 | S/19.19 |
| 55–64 | 476 | S/764.88 | 40 | S/19.12 |
| 65 o más | 336 | S/604.64 | 30 | S/20.15 |
| Desconocido | 414 | S/776.40 | 48 | S/16.17 |

No conviene excluir edades: todas convierten. Las de 45 años o más tienen más CTR y menos conversión. Es probable que llamen o escriban sin usar el enlace que mide la conversión.

---

## 6. Redes: Google frente a socios de búsqueda

| Red | Impr. | Clics | CTR | Coste | Conv. | Tasa conv. | Coste/conv. |
|---|---|---|---|---|---|---|---|
| Búsqueda de Google | 15,432 | 1,296 | 8.40 % | S/4,814.41 | 284 | **21.91 %** | S/16.95 |
| Socios de búsqueda | 42,323 | 1,316 | 3.11 % | S/408.99 | 31 | **2.36 %** | S/13.19 |

- Los socios generan el 73 % de las impresiones y el 50 % de los clics, pero solo el 10 % de las conversiones.
- Su CPA parece bajo (S/13) porque el clic cuesta S/0.31, pero convierten 9 veces menos.
- Además, la conversión medida es un *clic* en WhatsApp o en llamar, no un cliente confirmado. Es probable que estos clics baratos aporten menos clientes reales.
- **Recomendación:** desactivar los socios de búsqueda durante 2–4 semanas y comparar los contactos reales recibidos. Como mínimo, revisar si los contactos de esos días eran de calidad.

---

## 7. Palabras clave

**Estado:** hay 39 palabras clave activas o pausadas en un solo grupo ("Reparación General"). Leí 35 con métricas; las 4 restantes no se cargaron en la tabla y, por lo que se ve en el resumen, son de bajo volumen. Casi todas son de **concordancia amplia**; solo unas pocas son de frase.

### 7.1 Palabras clave activas con datos

| Palabra clave | Concordancia | Clics | Coste | Conv. | Coste/conv. | Tasa conv. | Comentario |
|---|---|---|---|---|---|---|---|
| reparación de lavadoras | Amplia | 324 | S/437.50 | 5.00 | **S/87.50** | 1.54 % | ❌ La amplia gasta mucho y convierte poco. |
| "reparación de lavadoras" | Frase | 55 | S/227.70 | 10.00 | S/22.77 | 18.18 % | ✅ La misma idea en frase rinde 4 veces mejor. |
| mantenimiento de aire acondicionado lima | Amplia | 61 | S/237.77 | 8.00 | S/29.72 | 13.11 % | CTR del 12.8 %. Confirmar que se ofrece el servicio. |
| reparación de refrigeradoras | Amplia | 84 | S/220.00 | 13.00 | S/16.92 | 15.48 % | ✅ |
| tecnico lg | Amplia | 60 | S/207.64 | 5.00 | S/41.53 | 8.33 % | ⚠️ "No suele publicarse (nivel de calidad bajo)". Atrae búsquedas del soporte oficial de LG. |
| refrigerador tecnico | Amplia | 51 | S/145.08 | 6.00 | S/24.18 | 11.76 % | — |
| lavadora mantenimiento | Amplia | 80 | S/124.84 | 7.67 | S/16.28 | 9.58 % | — |
| técnico de lavadoras | Amplia | 41 | S/91.18 | 8.00 | **S/11.40** | 19.51 % | ✅ |
| servicio lavadora | Amplia | 93 | S/86.24 | 6.00 | S/14.37 | 6.45 % | — |
| reparación de lavadoras a domicilio | Amplia | 92 | S/78.53 | 2.00 | S/39.26 | 2.17 % | ⚠️ |
| técnico de refrigeradoras | Amplia | 47 | S/74.13 | 7.00 | **S/10.59** | 14.89 % | ✅ |
| tecnico de refrigerador | Amplia | 12 | S/64.20 | 3.00 | S/21.40 | 25 % | — |
| reparación de lavadoras samsung | Amplia | 34 | S/36.55 | 5.00 | **S/7.31** | 14.71 % | ✅ |
| técnico de lavadoras a domicilio | Amplia | 10 | S/27.68 | 1.00 | S/27.68 | 10 % | — |
| reparación de secadoras | Amplia | 9 | S/26.35 | 1.00 | S/26.35 | 11.11 % | — |
| servicio reparacion refrigeradores | Amplia | 69 | S/26.09 | 3.00 | S/8.70 | 4.35 % | CPC de S/0.38: probablemente socios de búsqueda. |
| reparación de refrigeradoras lima | Amplia | 4 | S/24.14 | 0 | — | 0 % | — |
| reparación de televisores lima | Amplia | 9 | S/21.63 | 3.00 | S/7.21 | 33 % | ⚠️ Los televisores no están en la lista de servicios. Confirmar si se atienden. |
| reparaciones lg | Amplia | 16 | S/15.91 | 0 | — | 0 % | ❌ |
| reparación de refrigeradoras cerca de mi | Amplia | 12 | S/15.09 | 3.00 | S/5.03 | 25 % | ✅ |
| arreglo de refrigeradoras | Amplia | 29 | S/14.69 | 1.00 | S/14.69 | 3.45 % | — |
| reparacion de lavadoras daewoo | Amplia | 3 | S/13.91 | 2.50 | S/5.56 | 83 % | — |
| "técnico de secadoras a domicilio" | Frase | 1 | S/6.69 | 0.33 | — | — | — |
| reparación de lavadoras lg | Amplia | 17 | S/3.60 | 0 | — | 0 % | Probablemente socios de búsqueda. |
| reparación de refrigeradoras a domicilio | Amplia | 1 | S/3.49 | 1.00 | S/3.49 | 100 % | — |
| reparación de lavadoras a domicilio cerca de mi ubicación | Amplia | 8 | S/2.04 | 0 | — | 0 % | — |
| tecnico de lavadoras y secadoras / reparación de lavadoras y secadoras a domicilio / técnico de secadoras a domicilio / "técnico de lavadoras cerca de mi" / "reparacion de lavadoras y secadoras cerca de mi" / "reparador de refrigerador" | Amplia o frase | 0 | S/0 | 0 | — | — | Sin tráfico. |
| mantenimiento de refrigeradoras lima | Amplia | 0 | — | — | — | — | "Volumen de búsquedas bajo". |
| "reparación de lavaseca lg" | Frase | 0 | — | — | — | — | "Volumen de búsquedas bajo". |

**Total de las 10 de mayor gasto:** 1,334 clics, S/2,270.50, 105.5 conversiones, S/21.52 por conversión. Es peor que la media de la campaña (S/16.58), porque las de mayor gasto son las amplias genéricas.

### 7.2 Palabras clave quitadas que concentraban el gasto (datos del resumen)

| Palabra clave (quitada) | Coste | Clics | CTR |
|---|---|---|---|
| "servicio de reparación de electrodomésticos" | S/1,175.17 | 376 | 8.01 % |
| reparación de electrodomésticos | S/862.30 | 361 | 5.52 % |
| mantenimiento de electrodomésticos | S/251.12 | 120 | 4.10 % |

El 3 de septiembre se aplicó la recomendación de Google "Palabra clave redundante", que quitó **13 palabras amplias y 2 de frase**. Además, el 20 de agosto se quitaron los grupos por marca (LG, Samsung, Bosch y Daewoo). Las palabras de "electrodomésticos" que más gastaban ya no existen. Si el negocio quiere ese tráfico, habría que recuperarlas en concordancia de frase.

### 7.3 Recomendaciones sobre palabras clave

1. Pasar las genéricas de alto gasto a **frase** o **exacta**: "reparación de lavadoras", "reparación de lavadoras a domicilio" y "servicio lavadora". La prueba es interna: la versión en frase de "reparación de lavadoras" cuesta S/22.77 por conversión, frente a S/87.50 de la amplia.
2. Pausar o restringir **"tecnico lg"** y **"reparaciones lg"**. Tienen nivel de calidad bajo y atraen a quien busca el soporte oficial de LG.
3. Separar en **grupos temáticos**: Lavadoras/Lavasecas/Secadoras, Refrigeradoras, Aire acondicionado y, si se ofrece, Hornos/Campanas. Cada grupo debería tener su propio anuncio y su página de destino. Hoy todo va a un solo grupo y a la portada.
4. Confirmar con el negocio si se reparan **televisores** y **cocinas**. Si no, añadirlos como negativas. Si sí, crear grupos propios y retirar las negativas que los bloquean.

---

## 8. Términos de búsqueda y palabras negativas

### 8.1 Términos de búsqueda (las 100 principales según el resumen)

⚠️ **Limitación:** el informe completo de términos tiene guardado un filtro de vista ("Término de búsqueda es igual a *mantenimiento de campana extractora de cocina*") que solo muestra 2 filas. No pude quitarlo de forma fiable, así que lo dejé como estaba. Este análisis usa la tarjeta "Búsquedas" del resumen (las 100 principales por impresiones).

Problemas detectados en los términos:

| Tipo | Ejemplos reales | Acción |
|---|---|---|
| Soporte o contacto oficial de una marca | lg soporte, lg soporte tecnico peru, pagina web lg, www lg com pe servicio tecnico, www lg com español, lg electronics perú, numero de mabe peru, electrolux servicio técnico teléfono, sole teléfono servicio técnico, whirlpool peru, general electric peru, daewoo perú servicio técnico | Negativas: **soporte, página web, pagina web, www, .com, electronics, teléfono, telefono, número, numero, atención al cliente, oficial, autorizado**. Quien busca a la marca no busca a un técnico independiente, y puede sentirse engañado. |
| Televisores | técnico de televisores, técnico de televisores a domicilio, reparacion de televisores, tecnico de televisores cerca de mi, servicio técnico samsung tv lima, servicio tecnico tv lg lima peru, reparo de tv lg, técnico de televisores lg, lg tv assistencia tecnica | Si no se reparan televisores: negativas **televisor, televisores, tv, smart tv, pantalla**. Quitar también la palabra clave "reparación de televisores lima". |
| Cocinas | mantenimiento de cocinas a gas, tecnico de cocina a gas, mantenimiento rapiducha sole | Decidir si se ofrece. Hoy hay negativas de cocina, pero el fragmento estructurado anuncia "Cocinas y hornos". |
| Marcas no listadas en la web | servicio técnico miray, klimatic servicio tecnico, imaco servicio tecnico, hisense servicio tecnico, servicio técnico hisense lima, indurama servicio técnico | Confirmar si se atienden. "servicio tecnico hisense" está como negativa de frase, pero "hisense servicio tecnico" y "servicio técnico hisense lima" pasan. Usar la negativa amplia **hisense** si no se atiende. |
| Búsquedas informativas | mi refrigeradora no congela, limpieza de lavadora, dc68 02590t 07 (un código de repuesto) | Negativas: **cómo, como, por qué, porque, tutorial, video, youtube, manual, pdf**, y códigos de pieza si no se venden repuestos. |
| Relevantes (mantener) | reparación de lavadoras, técnico de lavadoras a domicilio, técnicos de refrigeradoras, reparación de refrigeradores a domicilio, mantenimiento de aire acondicionado lima, instalación de aire acondicionado | ✅ |

### 8.2 Palabras negativas actuales (32; no hay listas compartidas)

**Nivel campaña:**
- *Frase:* "aghaso servicio técnico", "arreglo de microondas", "arreglo microondas", "cómo arreglar una lavadora", "cuánto cuesta reparar un aire acondicionado", "cuánto se cobra por arreglar una lavadora", "dr electro", "fdv servicio técnico", "hiraoka san miguel servicio tecnico", "hiraoka servicio tecnico", "hiraoka servicio técnico", "mantenimiento de cocina a gas", "pkc san miguel", "por qué no prende una lavadora", "reparacion de horno electrico servicio tecnico", "reparación de olla arrocera", "servicio tecnico de cocina", "servicio tecnico hiraoka", "servicio técnico hiraoka", "servicio tecnico hisense", "servicio tecnico lavavajillas", "servicio técnico oster los olivos", "tecnico de cocinas", **"tecnico en electrodomesticos"**, "tecnicos de cocinas a gas".
- *Exacta:* [como], [indurama atencion al cliente], [microwave oven repair near me], [reparacion de microondas].

**Nivel grupo "Reparación General" (exacta):** [arreglos de horno electrico], [donde arreglan licuadoras], [servicio técnico oster a domicilio].

**Problemas:**
- ❌ **"tecnico en electrodomesticos"** es una búsqueda muy relevante para el negocio y está **bloqueada**. Revisar si fue intencional.
- ⚠️ Las negativas son demasiado específicas: frases largas o exactas que no cubren variantes. Por ejemplo, [como] en exacta solo bloquea la búsqueda "como" sola, no "cómo arreglar mi lavadora".
- ⚠️ Faltan negativas de una sola palabra para soporte de marca, televisores, empleo y contenido informativo.

**Lista base sugerida para crear en la biblioteca compartida (no se aplicó nada):**
`soporte`, `pagina web`, `página web`, `www`, `.com`, `electronics`, `oficial`, `autorizado`, `telefono`, `teléfono`, `numero`, `número`, `atencion al cliente`, `atención al cliente`, `televisor`, `televisores`, `tv`, `smart tv`, `trabajo`, `empleo`, `curso`, `capacitacion`, `gratis`, `manual`, `pdf`, `tutorial`, `youtube`, `video`, `segunda mano`, `usado`, `microondas`, `licuadora`, `olla`, `plancha`, `celular`. Añadir también `cocina`/`cocinas` y `hisense`, `imaco`, `miray`, `klimatic` según lo que confirme el negocio.

---

## 9. Ubicaciones

**Segmentación:** 26 ubicaciones, en modo "Presencia". Son Ate, Barranco, Breña, Callao (provincia), Chorrillos, San Luis, El Agustino, Independencia, Jesús María, La Molina, La Victoria, Lima (Cercado), Lince, Magdalena del Mar, Miraflores, Pueblo Libre, Rímac, San Borja, San Isidro, San Juan de Lurigancho, San Juan de Miraflores, San Martín de Porres, San Miguel, Santa Anita, Santiago de Surco y Surquillo.

| Ubicación | Ajuste | Clics | Coste | Conv. | Coste/conv. |
|---|---|---|---|---|---|
| Lima (Cercado) | -20 % | 539 | S/986.87 | 56.00 | S/17.62 |
| Callao | -30 % | 258 | S/436.78 | 24.00 | S/18.20 |
| San Martín de Porres | -40 % | 241 | S/420.02 | 22.00 | S/19.09 |
| San Juan de Lurigancho | — | 237 | S/366.20 | 27.00 | S/13.56 |
| Santiago de Surco | +20 % | 208 | S/529.30 | 36.50 | S/14.50 |
| Ate | -30 % | 162 | S/315.82 | 18.00 | S/17.55 |
| Miraflores | +20 % | 151 | S/423.20 | 27.50 | S/15.39 |
| San Isidro | +20 % | 129 | S/436.69 | 22.00 | S/19.85 |
| San Juan de Miraflores | -5 % | 88 | S/96.01 | 7.00 | S/13.72 |
| Chorrillos | +10 % | 55 | S/133.84 | 8.00 | S/16.73 |
| El Agustino | -10 % | 54 | S/95.39 | 10.00 | **S/9.54** |
| Rímac | — | 54 | S/67.60 | 4.00 | S/16.90 |
| La Molina | +10 % | 51 | S/108.01 | 4.00 | S/27.00 |
| San Miguel | +10 % | 50 | S/93.62 | 7.00 | S/13.37 |
| Independencia | -30 % | 50 | S/68.55 | 1.00 | **S/68.55** |
| Pueblo Libre | +10 % | 48 | S/110.43 | 7.00 | S/15.78 |
| La Victoria | — | 46 | S/67.33 | 4.00 | S/16.83 |
| Jesús María | +10 % | 40 | S/109.11 | 4.00 | S/27.28 |
| Magdalena del Mar | +10 % | 40 | S/94.19 | 6.00 | S/15.70 |
| San Borja | +20 % | 40 | S/111.85 | 5.00 | S/22.37 |
| San Luis | — | 25 | S/51.28 | 5.00 | S/10.26 |
| Surquillo | +10 % | 21 | S/54.31 | 4.00 | S/13.58 |
| Barranco | — | 13 | S/35.87 | 4.00 | S/8.97 |
| Santa Anita | — | 7 | S/5.35 | 1.00 | S/5.35 |
| Breña | — | 5 | S/5.79 | 1.00 | S/5.79 |
| **Lince** | — | **0** | S/0 | 0 | — |

**Hallazgos:**
- ⚠️ **Los ajustes de puja por ubicación no tienen efecto** con Maximizar conversiones: Smart Bidding los ignora en la Red de Búsqueda. Conviene quitarlos para no confundir, o excluir las zonas que de verdad no se quieran atender.
- ⚠️ **Lince no tiene ninguna impresión** pese a estar segmentado (alcance de 284,000). Revisar que la ubicación elegida sea la correcta.
- Las zonas caras con pocas conversiones (Independencia, Jesús María, La Molina) no requieren acción todavía, porque tienen muy poco volumen. Hay que vigilarlas.
- La cobertura de los anuncios (26 zonas, incluidas SJL, SMP, Ate, Callao, Independencia, Rímac y El Agustino) **no coincide** con la lista publicada en sevihouseperu.com (15 distritos). Hay que unificar la cobertura real en ambos sitios y en los anuncios.

---

## 10. Anuncios y recursos

### 10.1 Anuncio

- **Un único anuncio de búsqueda responsivo** en "Reparación General". Su estado es **Detenido**, y la calidad del anuncio es **"Buena"**.
- **URL visible:** servihouselima.com/reparacion/equipos
- **URL final:** `https://servihouselima.com/{ignore}` + sufijo con UTMs.
- No tiene ningún título ni descripción fijados.
- La recomendación "1 grupo de anuncios no tiene ningún anuncio" se debe a que el único anuncio está pausado.

| Título | Impr. | Clics | Coste | Conv. |
|---|---|---|---|---|
| Reparación a Domicilio | 31,384 | 1,331 | S/2,916.24 | 166.00 |
| Servicio Técnico A Domicilio | 20,971 | 1,216 | S/2,584.10 | 104.02 |
| Reparación de Lavadoras | 14,694 | 493 | S/643.96 | 33.00 |
| Agenda por WhatsApp | 14,419 | 839 | S/1,820.21 | 118.85 |
| Servicio Técnico en Lima | 10,867 | 498 | S/1,027.23 | 61.00 |
| Reparación Refrigeradoras | 7,617 | 332 | S/643.04 | 32.00 |
| Técnicos a Domicilio | 4,729 | 472 | S/1,854.10 | 83.02 |
| Reparación Y Mantenimiento | 4,164 | 301 | S/929.32 | 46.98 |
| Revisión a domicilio | 2,606 | 211 | S/661.60 | 26.00 |
| Reparación de Secadoras | 2,222 | 78 | S/86.78 | 9.00 |
| Revisión Refrigeradoras | 2,015 | 111 | S/194.19 | 11.00 |
| Revisión de Lavasecas | 1,142 | 68 | S/236.12 | 4.00 |
| Aire Acondicionado Lima | 636 | 80 | S/298.84 | 17.00 |
| Reparación de Lavasecas | 495 | 32 | S/93.90 | 6.00 |
| Servicio para tu Hogar | 478 | 48 | S/155.79 | 5.00 |

| Descripción | Impr. | Clics | Coste | Conv. |
|---|---|---|---|---|
| Atención a domicilio para equipos del hogar. Coordina revisión según disponibilidad. | 44,378 | 1,979 | S/3,112.50 | 168.50 |
| Lavadoras que no centrifugan, lavasecas que no secan y refrigeradoras que no enfrían. | 9,863 | 454 | S/692.31 | 20.33 |
| Coordina por WhatsApp o llamada. Atención en Lima según zona y horario disponible. | 7,610 | 697 | S/2,519.93 | 149.52 |
| Reparación de lavadoras, lavasecas y refrigeradoras en Lima. Agenda por WhatsApp. | 1,280 | 140 | S/531.52 | 19.49 |

**Hallazgos:**
- Los mensajes que mencionan **WhatsApp** y **a domicilio** concentran las conversiones. Hay que conservarlos.
- No hay títulos con prueba social o diferenciación: años de experiencia, "técnico independiente multimarca", garantía (si existe) o "atención el mismo día" (si es real).
- "Aire Acondicionado Lima" aparece en un anuncio genérico. Si el aire acondicionado es un servicio importante, merece su propio grupo y su propia página.
- ⚠️ **El anuncio se editó unas 13 veces entre el 20 de agosto y el 3 de octubre**, varias de ellas el mismo día. Cada edición manda el anuncio a revisión y afecta al aprendizaje. Es mejor probar variantes con un segundo anuncio o con experimentos.

### 10.2 Recursos (extensiones)

| Tipo | Nivel | Contenido | Observación |
|---|---|---|---|
| **Llamada** | Cuenta | **997 628 986** | ❌ **Cambiar a 929 853 856**, el único número del negocio. Se mostró en 8,724 impresiones. Además, no hay una acción de conversión de "llamadas desde anuncios", así que esas llamadas no se miden. |
| Vínculos a sitio (campaña) | Campaña | Servicios técnicos (#servicios), Cómo funciona (#como-funciona), Preguntas frecuentes (#preguntas), Zonas de atención (#zonas) | Llevan a anclas de la portada, no a páginas distintas. CTR de 0.2 %–1.3 %. Google prefiere vínculos a páginas diferentes. |
| Vínculos a sitio (cuenta) | Cuenta | Lavadoras, Refrigeradoras, Distritos de Lima, Nuestros Servicios (este último creado por IA de Google) | — |
| Textos destacados | Campaña | Atención a domicilio, Agenda por WhatsApp, Revisión en Lima, Según disponibilidad | "Según disponibilidad" resta fuerza. Mejor algo como "Técnicos multimarca" o "Diagnóstico claro". |
| Fragmento estructurado | Campaña | **Encabezado "Modelos"**: Secadoras, Lavadoras, Lavasecas, Cocinas y hornos | ❌ El encabezado correcto es "Servicios" o "Tipos". Incluye "Cocinas y hornos" mientras hay negativas para cocina. |
| Imágenes | Campaña | 9 imágenes (1024×1024, 1024×536, 928×928). **Una rechazada por "Collage"** | Reemplazar la rechazada. |
| Logotipo | Campaña | 720×720 | — |
| Nombre de la empresa | — | No aparece | Añadirlo ("SERVIHOUSE"). |
| Ubicación o Perfil de Empresa | — | No vinculado | Vincular Google Business Profile cuando exista. |
| Precio o promoción | — | No hay | Opcional (por ejemplo, "Diagnóstico desde S/…" si se publica un precio). |

---

## 11. Medición de conversiones

| Acción | Origen | Estado | Uso | Recuento | Ventana | En objetivos de cuenta | Todas las conv. | Valor |
|---|---|---|---|---|---|---|---|---|
| **WHATSAPP** | Sitio web | Activa | **Principal** | **Todas** | 30 días | Sí | 82 | 0 |
| **Llamada** | Sitio web | Activa | Secundaria (desde el 3 de septiembre de 2026) | **Todas** | 30 días | No | 367 | 0 |
| Solicitud de presupuesto | Sitio web | Quitada | Principal | Todas | 30 días | Sí | 0 | 0 |

**Hallazgos:**
1. **Las 315 conversiones históricas son sobre todo clics en "Llamada"**: 367 en total, que contaban como principales hasta el 3 de septiembre. Desde entonces la campaña optimiza **solo con WHATSAPP**, que suma 82 en toda su historia. Con tan poco volumen, Maximizar conversiones tiene pocos datos, y además se reinicia con cada pausa y cada edición.
2. **Recuento "Todas"**: si alguien pulsa WhatsApp 3 veces, cuenta 3 conversiones. Para contactos, Google recomienda el recuento **"Una"**. Esto infla el número de conversiones y abarata el CPA aparente.
3. **Valor 0**: no se distingue un contacto de un cliente. Lo mínimo sería asignar un valor fijo por contacto.
4. **Ambas conversiones son clics, no contactos efectivos.** Un clic en WhatsApp no garantiza un mensaje enviado, ni un clic en llamar una llamada atendida.
5. **Las llamadas desde la extensión de llamada no se miden**: no existe la acción "Llamadas desde anuncios" (y además va al número 997).
6. Google recomienda la "puerta de enlace de etiquetas de Google" porque las etiquetas no se sirven desde el dominio propio. Es opcional.

**Recomendaciones:**
- Cambiar WHATSAPP y Llamada a recuento **"Una"**.
- Volver a hacer principal "Llamada" solo si las llamadas son clientes reales, o crear una acción de "Llamadas desde anuncios" con el número correcto.
- Registrar en una hoja los contactos reales de cada día (fecha, origen e hicieron servicio sí o no). Así se podrá comparar la campaña activa con la pausada y, más adelante, importar conversiones offline.
- Si se usa sevihouseperu.com como destino, su evento `contact_click` (GA4 G-20WZ969Z48, ya con Consent Mode v2) puede importarse como conversión. Conviene separarlo en eventos para WhatsApp y para llamada.

---

## 12. Públicos y estadísticas de subasta

- **Públicos:** no hay ninguno asignado. Se recomienda añadir en modo **observación** (sin restringir) segmentos como "Servicios para el hogar" o "Reparación de electrodomésticos". Sirven para obtener datos sin limitar el alcance.
- **Estadísticas de subasta** (todo el período):

| Dominio | Cuota de impr. | Superposición | Por encima de nosotros | Parte superior | Primera posición |
|---|---|---|---|---|---|
| **Nosotros** | **29.72 %** | — | — | 64.45 % | 21.62 % |
| servicioenlima.online | 16.89 % | 18.46 % | 74.75 % | 91.98 % | 41.81 % |
| servitecprofesional.com | < 10 % | 9.16 % | 71.21 % | 82.55 % | 22.01 % |
| serviciotecnicoadomicilio.pe | < 10 % | 9.64 % | 46.61 % | 72.99 % | 11.57 % |
| servitecjj.com | < 10 % | 6.63 % | 59.47 % | 76.26 % | 14.68 % |
| servielectrofundemos.com | < 10 % | 6.28 % | 75.77 % | 88.82 % | 25.58 % |
| serviplusperu.com | < 10 % | 5.68 % | 68.22 % | 84.84 % | 23.56 % |
| tecnicosenlineablanca.com | < 10 % | 3.90 % | 73.92 % | 82.71 % | 21.41 % |
| multiservitek.com | < 10 % | 3.67 % | 87.47 % | 91.88 % | 41.84 % |
| serviciotecnicoelectro.com | < 10 % | 3.44 % | 80.21 % | 88.30 % | 31.23 % |

Solo se aparece en el **30 % de las búsquedas posibles**, y cuando coincidimos los competidores quedan por encima con frecuencia. Hay margen para crecer, pero antes conviene corregir la medición y la concordancia; si no, el aumento de inversión se iría a tráfico de baja calidad.

---

## 13. Historial de cambios (últimos 50 eventos)

- **Usuarios:** servihouselimaweb@gmail.com (desde finales de septiembre) y yukiodigitalweb@gmail.com (agosto y septiembre, también desde la app móvil).
- **20 de agosto:** se quitaron los grupos LG, Samsung, Bosch y Daewoo y sus anuncios. Se "aumentó 1 CPA objetivo del grupo de anuncios" en Reparación General y se crearon recursos (vínculos a sitio e imágenes). Hubo 4 ediciones del anuncio.
- **20–21 de agosto:** se creó o modificó el "administrador de clientes" (vinculación a una cuenta de administrador) y **se redujo el presupuesto**.
- **24–26 de agosto:** la campaña se pausó y luego se reactivó aplicando una recomendación.
- **3 de septiembre:** pausa y reactivación. Se aplicó la recomendación "palabra clave redundante" (se quitaron 13 amplias y 2 de frase). **"Llamada" pasó a acción secundaria.**
- **21 de septiembre – 3 de octubre:** **pausa y reactivación casi a diario** (21, 22, 24, 25 y 2 de octubre, y la pausa final el 3 de octubre a las 20:14). Hubo unas 9 ediciones del anuncio, 3 de ellas el 3 de octubre.

**Conclusión:** el patrón de pausar y reactivar a mano, junto con las ediciones frecuentes, es el principal freno técnico. Si el objetivo es no gastar cuando no se puede atender, la **programación de anuncios** lo resuelve sin perder el aprendizaje. Si el motivo es el saldo prepagado, conviene activar los **pagos automáticos** o dejar un límite de presupuesto estable.

---

## 14. Relación con el proyecto sevihouseperu.com

- **Esta campaña lleva tráfico a servihouselima.com**, no a sevihouseperu.com (el proyecto de este repositorio).
- **Número:** sevihouseperu.com usa solo **929 853 856**. La cuenta de Ads sigue mostrando **997 628 986** en la extensión de llamada.
- ⚠️ **Política de "ventaja injusta" (Unfair advantage):** Google no permite que un mismo negocio muestre varios anuncios en la misma subasta con dominios distintos. Si se crea otra campaña para sevihouseperu.com con las mismas palabras clave mientras esta sigue activa, puede haber rechazos. Opciones:
  1. Elegir **un solo dominio** como destino de Ads.
  2. Separar los dos sitios por servicio o zona, sin solaparse.
  3. Cambiar la URL final de esta campaña a sevihouseperu.com.
- Si se cambia el destino a sevihouseperu.com, la medición actual (etiquetas WHATSAPP y Llamada en servihouselima.com) dejaría de registrar. Hay que configurar antes la conversión con GA4 o con la etiqueta de Ads en el nuevo sitio. Su CSP ya permite los dominios de Google Ads.

---

## 15. Plan de acción recomendado (por orden)

**Inmediato (antes de reactivar):**
1. Cambiar la extensión de llamada de la cuenta a **929 853 856**.
2. Recargar saldo o activar **pagos automáticos**.
3. Reactivar la campaña **y el anuncio** (ambos están pausados), y dejar de pausar a diario. Usar la programación de anuncios.
4. Cambiar el recuento de las conversiones a **"Una"**.

**Semana 1:**
5. Añadir la lista de **negativas** de la sección 8 y revisar si "tecnico en electrodomesticos" debe seguir bloqueada.
6. Pasar "reparación de lavadoras", "reparación de lavadoras a domicilio" y "servicio lavadora" a **frase o exacta**. Pausar "tecnico lg" y "reparaciones lg".
7. **Desactivar los socios de búsqueda** como prueba de 2–4 semanas.
8. Corregir el fragmento estructurado (encabezado y servicios), sustituir la imagen rechazada y añadir el nombre de la empresa.
9. Quitar los ajustes de puja por ubicación (no tienen efecto) y revisar por qué Lince no tiene impresiones.

**Semanas 2–4:**
10. Dividir en grupos por servicio (lavadoras, refrigeradoras, aire acondicionado), cada uno con su anuncio y su página de destino.
11. No editar el anuncio más de una vez por semana. Probar variantes con un segundo anuncio.
12. Llevar el registro diario de contactos reales para validar el CPA.
13. Definir con qué dominio se anuncia el negocio (sección 14) antes de crear campañas nuevas.

**No recomendado por ahora:** activar IA Max o crear una campaña de Máximo rendimiento. Con una medición basada en clics y con poco volumen de conversiones principales, ampliarían el tráfico de baja calidad.

---

## 16. Alcance, limitaciones y acciones realizadas en la cuenta

**Revisado:** resumen, campañas, configuración (redes, puja, presupuesto, ubicaciones, opciones de ubicación, idioma, URL), programación, grupos de anuncios, anuncios y recursos, palabras clave, negativas, dispositivos, edad, ubicaciones, redes, subasta, páginas de destino, conversiones, recomendaciones, historial de cambios, facturación y políticas (sin problemas de cuenta ni de anuncios).

**No se pudo verificar por completo:**
- **Informe completo de términos de búsqueda:** tiene un filtro de vista guardado que no pude quitar. Se usaron las 100 principales del resumen.
- **Detalle de cada acción de conversión** (tipo de etiqueta, modelo de atribución): la ficha no se abrió desde el navegador. Se usó la tabla de acciones.
- **Reparto de conversiones por acción** (WhatsApp frente a Llamada) por periodo: el submenú de segmentación no se abrió.
- **Nivel de calidad por palabra clave:** no se añadieron columnas para no cambiar la vista guardada. Solo consta "tecnico lg" con nivel de calidad bajo.
- **4 de las 39 palabras clave** no aparecieron en la lectura de la tabla.
- **Datos demográficos por género:** no se leyeron.

**Cambios en la cuenta: ninguno.** Solo se hicieron acciones de vista, que no modifican la campaña:
- Se cambió el periodo de fechas a "Todo el período" (queda guardado como preferencia de vista).
- Se abrieron los paneles "Ubicaciones" y "Opciones de URL" de la configuración solo para leerlos, y se salió sin guardar.
- Se segmentó la tabla de campañas por red y se volvió a "Ninguno".
- Se intentó quitar el filtro de vista de términos de búsqueda, sin efecto: el filtro sigue igual.
- Google Ads escribió en el portapapeles del sistema durante algunos clics. Revisa el portapapeles antes de pegar algo.

---

# Anexo: campaña "ServiHouse #1" (cuenta SERVIHOUSE Perú, sevihouseperu.com)

**Revisión:** 4 de octubre de 2026. La campaña empezó el 19 de septiembre de 2026.

**Síntoma reportado:** la campaña se activa pero a veces no aparece en Google, los créditos se gastan y nadie escribe ni llama.

## Diagnóstico

| # | Causa | Evidencia |
|---|---|---|
| 1 | **La campaña de Búsqueda incluía la Red de Display y los socios de búsqueda.** | Últimos 7 días: Display = 88.6 % de los clics y 94.3 % del coste; socios = 11.4 %; Búsqueda de Google ≈ 0. De 1,160 impresiones, solo unas 192 fueron búsquedas reales (4 clics). CPC de Display: S/0.57. |
| 2 | **"Maximizar conversiones" sin ninguna conversión registrada.** | Las 4 acciones (Calls from ads, "Clic en teléfono o WhatsApp (sitio web)" [GA4, principal], "Clic a WhatsApp (sitio web)" [GA4, secundaria] y "Contacto (carga de página lavadoras)" [GA4, secundaria]) están en "Esperando conversiones" con 0. Sin señal, la puja busca el tráfico más barato (Display). |
| 3 | **La web no enviaba los clics a GA4.** | GA4 solo cargaba tras aceptar cookies, y la CSP bloqueaba `analytics.google.com`. Se corrigió en el código del repositorio (Consent Mode v2 y CSP), **pendiente de desplegar**. |
| 4 | **Las 38 palabras clave están en concordancia amplia** y la aplicación automática de recomendaciones está activa ("Agrega palabras clave nuevas"). | Los términos reales son informativos: "por qué no bota el agua la lavadora", "como limpiar el tanque de la lavadora", "lavadora winia error e9", "servicio técnico tv a domicilio", "grupofamel". |
| 5 | **Compite con la campaña del cliente (servihouselima.com) por las mismas búsquedas.** | Es el mismo negocio con otro dominio. Google muestra un solo anuncio por subasta del mismo anunciante (política de "ventaja injusta"), y gana la campaña con historial (315 conversiones frente a 0). Por eso a veces no aparece. |
| 6 | Buscarse a uno mismo sin hacer clic reduce las impresiones propias. | Para comprobarlo, usar "Vista previa y diagnóstico de anuncios". |

**Datos acumulados (10 de septiembre – 4 de octubre de 2026):** 1,783 impresiones, 65 clics, S/70.43 de coste y 1 conversión. Fondos disponibles: S/116.06. Hay una promoción de crédito pendiente (invertir S/1,180 antes del 9 de noviembre de 2026).

**Configuración correcta:**
- Ubicaciones: 21 distritos de Lima, en modo "Presencia".
- Idioma español.
- Extensión de llamada con **929 853 856**.
- URL final `https://sevihouseperu.com/{ignore}` + UTMs.
- 33 palabras negativas (empleo, cursos, gratis, tutoriales, etc.).

**Detalles a corregir:**
- El texto destacado "Eletrodomesticos repuesto" tiene una errata.
- Hay títulos en minúsculas ("reparación de electrodoméstico", "reparacion de neveras").
- Una imagen está rechazada por "Superposiciones de texto o gráfico".
- La campaña de Máximo rendimiento "Campaign #1" (S/0.10/día, detenida) está sin uso.

## Cambio aplicado (4 de octubre de 2026, aprobado por el usuario)

- **Redes:** de "Búsqueda de Google + socios de búsqueda + Red de Display" a **solo "Red de Búsqueda de Google"**.
- La campaña sigue **detenida** y el presupuesto se mantiene en **S/100.00/día**. No se tocó nada más.

## Pendiente (no aplicado: requiere decisión)

1. **Desplegar la web** con la corrección de Consent Mode y la CSP. Después, comprobar en GA4 (en tiempo real) que llega `contact_click` y que está marcado como evento clave.
2. **Puja:** mientras no haya conversiones, usar "Maximizar clics" con un CPC máximo de unos S/3.50, o bien un CPC manual.
3. **Palabras clave:** crear versiones en frase o exacta de las principales y pausar las amplias.
4. **Negativas:** añadir como, cómo, por qué, porque, error, soporte, página web, www, tv, televisor, microondas y grupofamel.
5. **Desactivar la aplicación automática de recomendaciones.**
6. **Decidir qué dominio se anuncia.** No activar las dos campañas a la vez con las mismas palabras clave, o separarlas por servicio o zona.

## Actualización (4 de octubre de 2026): medición y negativas

**Medición verificada en GA4** (propiedad "Sitio web SERVIHOUSE Perú", 553652401, flujo G-20WZ969Z48 en https://sevihouseperu.com, recibiendo datos):
- La conversión principal de Ads, "Clic en teléfono o WhatsApp (sitio web)", importa el evento **`contact_click`** con recuento "Una" y ventana de 90 días. Su última conversión fue el 22 de septiembre de 2026.
- La conversión secundaria "Clic a WhatsApp (sitio web)" importa **`whatsapp_contact_click`**. En GA4 ese evento era una regla creada sobre `click` con `link_url` que contiene **`wa.me/51912138192`**, un número antiguo, así que nunca coincidía con la web actual (929 853 856).
- "Contacto (carga de página lavadoras)" es un `page_view` de /servicio-tecnico-lavadoras-lima/: cuenta visitas, no contactos. Está en secundaria y no afecta a la puja.

**Cambios en el proyecto (sin subir):**
- `trackContact` envía `contact_click` y además `whatsapp_contact_click` o `call_contact_click`.
- Se activa `url_passthrough` en Consent Mode, para que el gclid se mantenga entre páginas sin cookies.
- El botón "Enviar por WhatsApp" del widget flotante abre en una pestaña nueva, para que el evento no se pierda al salir de la página.
- Se suman las correcciones anteriores: Consent Mode v2 (GA4 carga siempre) y la CSP que bloqueaba `analytics.google.com`.

**Cambio en Ads:** se añadieron **24 negativas** a nivel de campaña (de 33 a 57):
- *Amplia:* como, cómo, porque, error, codigo, código, soporte, www, oficial, autorizado, tv, televisor, televisores, microondas, licuadora, olla, plancha, grupofamel.
- *Frase:* "por qué", "por que", "que es", "qué es", "pagina web", "página web".

**Pendiente en GA4 (opcional):** eliminar o corregir la regla antigua de `whatsapp_contact_click` basada en `wa.me/51912138192`. Mientras exista no hace daño, porque ya no coincide con ningún enlace.

## Actualización (5 de octubre de 2026): estrategia de puja

- Se comprobó el despliegue de sevihouseperu.com en producción: páginas de servicio nuevas, `llms.txt`, la CSP con `analytics.google.com`, los eventos `whatsapp_contact_click`, `url_passthrough` y la redirección 301 de www.
- **"ServiHouse #1": la puja pasa de "Maximizar conversiones" a "Maximizar clics", con un límite de CPC de S/3.50.** El presupuesto se mantiene en S/100.00/día y la campaña sigue detenida.
- **Volver a "Maximizar conversiones"** cuando la campaña acumule entre 15 y 30 conversiones de "Clic en teléfono o WhatsApp (sitio web)" en 30 días.

## Actualización (5 de octubre de 2026, tarde): objetivos y negativas

- **Estado de la campaña:** habilitada, en aprendizaje, con "Maximizar conversiones", **objetivo específico de campaña "Contactos"** y S/75/día. Estos cambios los hizo el usuario.
- **Acciones del objetivo "Contactos":**
  - **Principal:** "Clic a WhatsApp (sitio web)" (`whatsapp_contact_click`, GA4, recuento "Una", 90 días).
  - **Secundarias:** "Clic en teléfono o WhatsApp" (`contact_click`) y "Contacto (carga de página)".
  - Equivale a la cuenta del cliente: un solo objetivo de campaña, con WhatsApp como principal y la llamada como secundaria.
- **Las acciones GA4 pasaron de "Esperando conversiones" a "Activa"** tras el despliegue: los eventos ya llegan.
- **Hoy hasta media tarde:** 54 impresiones, 2 clics y S/3.12, solo en Búsqueda. Las palabras clave están aptas.
- **Se añadieron 8 negativas** (de 57 a 65): hiraoka, plustec, oster, cocina, cocinas, licuadoras, ollas, planchas.
- **Diferencia restante con el cliente:** el cliente mide con la etiqueta de Google Ads directamente en su web ("Sitio web"); tu cuenta importa desde GA4. Esto tiene más retraso (hasta 24–48 h) y atribuye peor con consentimiento denegado.

## Actualización (5 de octubre de 2026): etiqueta directa de Google Ads

- **Acción nueva en "ServiHouse #1":** "Clic WhatsApp o llamada (etiqueta Ads)". Es la única acción **principal** del objetivo "Contactos", con fuente "Sitio web" (etiqueta de Google), recuento "Una", ventana de 90 días y atribución basada en datos.
- **Etiqueta:** `AW-18443438027/L70gCJPN5pIdEMuPwtpE`.
- **Las acciones de GA4 pasan a secundarias** ("Clic a WhatsApp", "Clic en teléfono o WhatsApp" y "Carga de página") para no contar doble.
- **Conversiones avanzadas:** no se activaron, porque la web no tiene formularios y activarlas implicaba aceptar las condiciones de tratamiento de datos.
- **En el código** (pendiente de commit y despliegue): `gtag('config', 'AW-18443438027')` y, en cada clic de WhatsApp o de llamada, `gtag('event', 'conversion', { send_to, value: 1, currency: 'PEN' })`, junto a los eventos GA4 que ya existían.
- Hasta desplegar, la acción aparecerá como "Esperando conversiones" o "Sin verificar".
