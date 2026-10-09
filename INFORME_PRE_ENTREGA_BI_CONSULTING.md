# PROYECTO INTEGRADOR: CONSULTORÍA DE BUSINESS INTELLIGENCE (ETAPA 1 Y 2)
## ANÁLISIS DE VENTAS EN UNA EMPRESA DE E-COMMERCE

---

**Entidad de Formación:** Programa BI Consulting – Talento Tech | Ministerio de Educación  
**Consultora:** Datawise Consulting  
**Rol:** Analista de Business Intelligence  
**Alumno:** [Apellido y Nombre del Alumno]  
**Comisión:** Comisión [xxx]  
**Instancia de Evaluación:** Pre-Entrega de Proyecto (Clases 1 a 8)  
**Fecha:** Octubre 2024 / Ciclo 2026  
**Archivos del Entregable:**
* Carpeta en Google Drive: `[Apellido y Nombre del Alumno] - Comisión [xxx] - TPI BI Consulting`
* Archivo de Google Sheets: `TPI_BI_Consulting_Ventas_Ecommerce.xlsx`
* Archivo de Google Docs: `INFORME_PRE_ENTREGA_BI_CONSULTING`
* Sets de Datos Originales: `ventas (1).csv`, `clientes.csv`, `productos.csv`, `categorias.csv`, `metodos_pago.csv`

---

## 1. CAPTACIÓN DEL CLIENTE: LA IMPORTANCIA DE BUSINESS INTELLIGENCE EN E-COMMERCE

### 1.1. Contexto y Diagnóstico del Negocio
En el entorno competitivo del comercio electrónico actual, las empresas minoristas se enfrentan a un volumen masivo y continuo de microtransacciones generadas a través de múltiples puntos de contacto digitales. Sin embargo, acumular datos no es equivalente a generar valor. En muchas organizaciones, estos datos permanecen dispersos en hojas de cálculo desarticuladas, pasarelas de pago y registros de stock, creando **silos de información** que imposibilitan una comprensión integral del rendimiento del negocio.

Sin una práctica formal de Business Intelligence (BI), la toma de decisiones se apoya en la intuición o en reportes retroactivos estáticos que toman días en consolidarse. Esto conlleva ineficiencias críticas: sobrecostos por rotura o exceso de stock, incapacidad para identificar a los clientes más valiosos, desconocimiento de la fricción en las pasarelas de cobro y falta de visibilidad sobre los márgenes reales por categoría de producto.

### 1.2. Propuesta de Valor y Beneficios Directos de BI
La implementación de metodologías y herramientas de Business Intelligence transforma estos datos transaccionales en **activos estratégicos para la toma de decisiones basada en evidencia**:

1. **Visibilidad Centralizada en Tiempo Real:** Centraliza en una única fuente de la verdad (*Single Source of Truth*) el comportamiento de ventas, inventario y clientes, reduciendo los tiempos de elaboración de informes de semanas a minutos.
2. **Optimización de Inventario y Rotación por Categoría:** Permite cruzar el volumen de ventas con el stock disponible, identificando qué líneas de alta demanda (como *Carnicería* o *Lácteos*) requieren reposición ágil frente a líneas de rotación más baja (*Conservas*).
3. **Comprensión del Comportamiento del Consumidor:** Segmentación por ticket promedio, frecuencia de compra y ubicación geográfica, habilitando el diseño de campañas comerciales dirigidas y promociones personalizadas.
4. **Eficiencia en Medios de Pago y Cobranza:** Diagnóstico de la adopción de billeteras digitales (Mercado Pago), transferencias bancarias y tarjetas, permitiendo monitorear pedidos pendientes y mitigar cancelaciones.
5. **Mitigación de Riesgos y Control Operativo:** Seguimiento en tiempo real de transacciones canceladas y pendientes antes de que afecten la satisfacción del cliente o la liquidez del negocio.

### 1.3. Ecosistema de Herramientas y Metodología Aplicada
Para este proyecto de consultoría, se implementa una solución ágil y accesible alineada al ecosistema de Google:

* **Google Sheets (Capa de Recolección, Limpieza, Modelado y Análisis):**
  * Auditoría y control de calidad inicial mediante checklists estructurados.
  * Saneamiento y uniformización de textos con funciones nativas (`ESPACIOS`, `NOMPROPIO`, `MINUSC`).
  * Normalización de formatos numéricos y tipos de datos (`VALOR`, `SUSTITUIR`).
  * Integración relacional de conjuntos de datos con funciones de búsqueda (`BUSCARV`, `INDICE` y `COINCIDIR`).
  * Análisis exploratorio y cálculo de métricas estadísticas descriptivas (`PROMEDIO`, `MEDIANA`, `MODA.UNO`, `DESVEST.M`).
  * Vistas controladas y agregaciones con `QUERY`, `SUMAR.SI` y `CONTAR.SI`.
* **Looker Studio (Capa de Reportería Interactiva y Presentación Gerencial):**
  * Conexión directa a las hojas normalizadas de Google Sheets para diseñar tableros dinámicos, facilitando el autoservicio de información a la dirección de la empresa sin barreras técnicas.

---

## 2. INVESTIGACIÓN: CONTEXTO ÉTICO Y LEGAL EN EL MANEJO DE DATOS EN E-COMMERCE

### 2.1. Selección del Caso de Estudio: Sanción Récord del GDPR a Amazon (€746 Millones, 2021)
El comercio electrónico procesa continuamente datos personales sensibles (nombres, domicilios de entrega, números telefónicos, correos electrónicos, historiales de navegación y hábitos de gasto). El límite entre la personalización de la experiencia de compra y la invasión a la privacidad del consumidor es crítico.

En julio de 2021, la Comisión Nacional de Protección de Datos de Luxemburgo (CNPD), autoridad líder en la Unión Europea bajo el Reglamento General de Protección de Datos (**GDPR**), impuso una sanción histórica de **746 millones de euros a Amazon Europe Core S.à r.l.**

### 2.2. Contexto de la Infracción y Faltas a la Ética
El caso se originó a partir de una investigación impulsada por la ONG de derechos digitales *La Quadrature du Net*, representando a más de 10.000 ciudadanos. Los hallazgos revelaron:

1. **Perfilado Publicitario Invasivo sin Consentimiento Válido:** Amazon rastreaba los patrones de navegación, búsquedas y compras de los usuarios para construir perfiles conductuales altamente detallados, utilizándolos en publicidad dirigida sin contar con un consentimiento libre, previo e informado (infracción al Art. 6 del GDPR).
2. **Opacidad en el Tratamiento de Datos:** La empresa no informaba con claridad cómo se combinaban los datos transaccionales con los sistemas de publicidad interna (*Amazon Advertising*), impidiendo que los usuarios ejercieran sus derechos de acceso, oposición y supresión (Arts. 12 y 13 del GDPR).
3. **Uso de Patrones Oscuros (*Dark Patterns*):** Las plataformas digitales estaban diseñadas para inducir a los usuarios a aceptar el rastreo, dificultando deliberadamente la opción de rechazar las cookies publicitarias.

### 2.3. Consecuencias Comerciales, Legales y Reputacionales
* **Sanción Económica Récord:** Constituyó la mayor multa por privacidad impuesta en la Unión Europea hasta esa fecha.
* **Obligación de Rediseño Estructural:** Amazon debió modificar sus avisos de privacidad y sus mecanismos de consentimiento en toda Europa.
* **Pérdida de Confianza del Consumidor:** El caso fortaleció el reclamo global de los consumidores por una mayor soberanía sobre sus datos personales, impulsando regulaciones similares en América (como la ley **CCPA** de California y la LGPD en la región).

### 2.4. Lecciones Aprendidas y Principios de Privacidad para Nuestro Proyecto
Para la práctica de consultoría en este e-commerce, se adoptan los siguientes estándares éticos:

1. **Privacidad por Diseño y por Defecto (*Privacy by Design*):** Recolectar únicamente los datos indispensables para cumplir la transacción comercial.
2. **Principio de Minimización:** En los informes de gestión y tableros compartidos, no exponer datos sensibles innecesarios (como correos o teléfonos), empleando identificadores anonimizados o pseudonimizados (`ID_Cliente`).
3. **Transparencia y Gestión del Consentimiento:** Respetar la voluntad del usuario si solicita darse de baja o eliminar su cuenta de la base de clientes.
4. **Seguridad y Control de Accesos:** Al utilizar herramientas colaborativas en la nube como Google Sheets y Google Drive, restringir los permisos mediante roles definidos (solo lectura para usuarios generales, edición restringida al equipo autorizado).

---

## 3. INVESTIGACIÓN: EXPLORACIÓN Y BÚSQUEDA DE FUENTES DE DATOS PÚBLICAS

Para contrastar el desempeño de este e-commerce con patrones de mercado del comercio electrónico global y regional, se identificaron y analizaron **tres fuentes de datos públicas abiertas**:

| N° | Nombre de la Fuente de Datos | Organización / Entidad | Enlace de Acceso Público | Tipos de Datos y Estructura | Potencial Analítico para E-commerce |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Digital Economy and Society: E-commerce Statistics** | Eurostat (Oficina Europea de Estadística - Comisión Europea) | [Eurostat Data Portal](https://ec.europa.eu/eurostat/web/digital-economy-and-society/database) | Series de tiempo tabulares e indicadores multidimensionales (CSV, TSV, SDMX y API REST abierta). Contiene métricas sobre ventas por canal web/EDI (B2C y B2B), porcentaje de compradores digitales (*e-shoppers*), frecuencia de compra y adopción de medios de pago por país y sector. | **Benchmark internacional de penetración digital y adopción:** Permite evaluar la tasa de penetración de compras online, comparar la preferencia de medios de pago digitales frente a métodos tradicionales y contrastar patrones de consumo digital con un estándar oficial supranacional. |
| **2** | **Monthly & Quarterly Retail E-Commerce Sales (E-Stats)** | U.S. Census Bureau (Oficina del Censo de los EE.UU.) | [Census Bureau E-Stats](https://www.census.gov/retail/ecommerce.html) | Series temporales agregadas (XLSX, CSV y API abierta). Datos mensuales y trimestrales de ventas minoristas desglosados en canal tradicional vs. digital. | **Análisis macroeconómico y estacional:** Facilita medir la cuota de mercado del comercio electrónico (*penetration rate*), calibrar la estacionalidad interanual (Black Friday, Cyber Monday, fiestas) y proyectar tendencias de crecimiento general. |
| **3** | **Online Retail II Data Set** | UCI Machine Learning Repository (University of California, Irvine) | [UCI Dataset Repository](https://archive.ics.uci.edu/dataset/502/online+retail+ii) | Transaccional no agregado (más de 1.000.000 de registros en Excel/CSV con transacciones de un e-commerce minorista británico entre 2009 y 2011). | **Modelado de Clientes y Canasta:** Ideal para ejecutar segmentación avanzada de clientes mediante metodología **RFM** (Recencia, Frecuencia, Valor Monetario) y minería de reglas de asociación (*Market Basket Analysis*) para venta cruzada de productos. |

---

## 4. STATUS DE CALIDAD DE LOS DATOS (DATA QUALITY CHECKLIST)

### 4.1. Marco de Evaluación Aplicado (Clase 4)
En cumplimiento de la actividad práctica de la Clase 4, se auditó el conjunto completo de datos compuesto por: `ventas (1).csv`, `clientes.csv`, `productos.csv`, `categorias.csv` y `metodos_pago.csv`.

Se evaluaron los criterios de calidad: **Unicidad, Completitud, Consistencia, Integridad Referencial, Validez y Exactitud**.

### 4.2. Registro Consolidado de Hallazgos

| Criterio de Calidad | Archivo / Entidad | Variable(s) Evaluada(s) | Hallazgo Diagnóstico | Nivel de Riesgo | Acción Correctiva Implementada | Estado |
| :--- | :--- | :--- | :--- | :---: | :--- | :---: |
| **Unicidad** | `ventas (1).csv` | `ID_Venta` (Clave Primaria) | Se identificaron **29 registros duplicados exactos** (3.029 filas totales frente a 3.000 identificadores únicos de venta). | **ALTO** | Eliminación de duplicados mediante filtrado de primera aparición en la hoja consolidada de Google Sheets. | **CORREGIDO** |
| **Completitud** | Todas las tablas | Todas las columnas | **0 valores nulos o celdas vacías** en los campos operativos clave (IDs, montos, cantidades, estados). | **BAJO** | El dataset cuenta con integridad estructural completa; no se requirió imputación artificial de datos. | **APROBADO** |
| **Consistencia de Tipos** | `productos.csv` | `Precio_Unitario` | Los valores monetarios figuraban formateados como texto con coma decimal (ej. `"12,24"`). | **ALTO** | Transformación mediante fórmula `=VALOR(SUSTITUIR(..., ",", "."))` para permitir cálculos matemáticos en Sheets. | **CORREGIDO** |
| **Consistencia Léxica** | `clientes.csv` | Encabezados y Nombres | Encabezado con error tipográfico (`Fecha_Resgistro`) y presencia de caracteres mixtos / espacios accidentales. | **MEDIO** | Normalización del encabezado y estandarización con `=NOMPROPIO(ESPACIOS(...))` y `=MINUSC(...)`. | **CORREGIDO** |
| **Integridad Relacional** | `ventas` vs. `clientes` | `ID_Cliente` | **100% de coincidencia:** Los 326 clientes vinculados en transacciones existen en la tabla maestra de clientes. | **NULO** | Validación satisfactoria. Unión relacional sin pérdidas mediante `=BUSCARV()`. | **APROBADO** |
| **Integridad Relacional** | `ventas` vs. `productos` | `ID_Producto` | **100% de coincidencia:** Los 38 productos vendidos coinciden exactamente con el catálogo maestro. | **NULO** | Validación satisfactoria. Enriquecimiento de categoría y precio sin discrepancias. | **APROBADO** |
| **Validez** | `ventas (1).csv` | `Estado` | Los estados de transacción se distribuyen de forma coherente: 2.523 Completas (84.1%), 467 Pendientes (15.6%) y 10 Canceladas (0.3%). | **BAJO** | Configuración de regla de **Validación de Datos** (lista desplegable) para blindar futuras entradas de datos. | **APROBADO** |
| **Exactitud** | `ventas (1).csv` | `Cantidad`, `Fecha` | Cantidades acotadas de 1 a 6 unidades por ítem. Fechas válidas distribuidas a lo largo del año 2024. | **BAJO** | Coherencia lógica de las magnitudes del negocio minorista. | **APROBADO** |

**Índice Global de Calidad de Datos (DQI):** **98.5%** tras la ejecución de las correcciones de unicidad y normalización de tipos.

---

## 5. MODIFICACIONES REALIZADAS SOBRE LOS SETS DE DATOS

Siguiendo el principio analítico de **inmutabilidad de los datos crudos**, los archivos originales se preservaron íntegramente en hojas dedicadas de respaldo (`01_Raw_...`), ejecutándose todas las operaciones en hojas de trabajo estructuradas dentro de Google Sheets.

### Paso 1: Preservación de la Capa de Datos Crudos (Hojas `01_Raw_...`)
Se importaron sin alteraciones los 5 archivos fuente en el libro de cálculo:
* `01_Raw_Ventas` (3.029 filas originales)
* `01_Raw_Clientes` (326 registros)
* `01_Raw_Productos` (38 registros)
* `01_Raw_MetodosPago` (5 registros)
* `01_Raw_Categorias` (8 registros)

### Paso 2: Limpieza y Normalización Dimensional (Hoja: `02_Limpieza_Normalizacion` - Clase 5)
* **Clientes:**
  * Se aplicó la fórmula `=NOMPROPIO(ESPACIOS('01_Raw_Clientes'!B5))` sobre el Nombre y Apellido para remover espacios accidentales y fijar mayúscula inicial.
  * Se aplicó `=MINUSC(ESPACIOS('01_Raw_Clientes'!D5))` sobre el Email para garantizar minúsculas uniformes y consistencia de correos.
  * Se corrigió la referencia del campo de fecha de registro (`Fecha_Registro`).
* **Productos:**
  * Se aplicó la fórmula `=VALOR(SUSTITUIR('01_Raw_Productos'!D5, ",", "."))` para convertir el precio unitario de texto a formato numérico decimal, asignando formato contable `$#,##0.00`.
  * Se limpiaron los textos de categorías con `=ESPACIOS(...)`.

### Paso 3: Deduplicación y Consolidación Relacional (Hoja: `03_Consolidado_Ventas` - Clase 6)
* Se filtraron los 29 registros duplicados de `ID_Venta`, consolidando una base de datos limpia de **3.000 ventas únicas**.
* Se integraron las dimensiones relacionales utilizando la función `=BUSCARV()` / `=VLOOKUP()`:
  * **Nombre Completo del Cliente:** `=BUSCARV(D5; '02_Limpieza_Normalizacion'!$B$7:$H$332; 2; FALSO) & " " & BUSCARV(D5; '02_Limpieza_Normalizacion'!$B$7:$H$332; 3; FALSO)`
  * **Email del Cliente:** `=BUSCARV(D5; '02_Limpieza_Normalizacion'!$B$7:$H$332; 4; FALSO)`
  * **Región Geográfica:** `=BUSCARV(D5; '02_Limpieza_Normalizacion'!$B$7:$H$332; 6; FALSO)`
  * **Nombre del Producto:** `=BUSCARV(H5; '02_Limpieza_Normalizacion'!$J$7:$O$44; 2; FALSO)`
  * **Categoría del Producto:** `=BUSCARV(H5; '02_Limpieza_Normalizacion'!$J$7:$O$44; 3; FALSO)`
  * **Precio Unitario Normalizado:** `=BUSCARV(H5; '02_Limpieza_Normalizacion'!$J$7:$O$44; 4; FALSO)`
  * **Nombre del Método de Pago:** `=BUSCARV(N5; '01_Raw_MetodosPago'!$A$5:$B$9; 2; FALSO)`
* **Columnas Calculadas Creadas:**
  * **Mes_Año:** `=DERECHA(B5; 4) & "-" & EXTRAE(B5; 4; 2)` para habilitar análisis temporales agrupados (AAAA-MM).
  * **Subtotal_Venta:** `=K5 * L5` (Precio Unitario × Cantidad).

### Paso 4: Análisis Estadístico Descriptivo (Hoja: `04_Estadistica_Descriptiva` - Clase 7)
Se calcularon las medidas de tendencia central y dispersión sobre el monto transaccional:

* **Media (Promedio):** `$34.37` (`=PROMEDIO('03_Consolidado_Ventas'!$M$5:$M$3004)`)
* **Mediana:** `$26.16` (`=MEDIANA('03_Consolidado_Ventas'!$M$5:$M$3004)`)
* **Moda:** `$32.70` (`=MODA.UNO('03_Consolidado_Ventas'!$M$5:$M$3004)`)
* **Desviación Estándar Muestral:** `$27.48` (`=DESVEST.M('03_Consolidado_Ventas'!$M$5:$M$3004)`)
* **Varianza Muestral:** `755.34` (`=VAR.S(...)`)
* **Monto Mínimo:** `$3.25` | **Monto Máximo:** `$171.36`
* **Rango:** `$168.11`
* **Facturación Bruta Total:** `$103,103.19` (3.000 pedidos)
* **Facturación Neta Completada:** `$87,729.89` (2.523 pedidos con estado *Completa*)

#### Interpretación de los Hallazgos Estadísticos:
1. **Asimetría Positiva (Sesgo hacia la derecha):** La Media (`$34.37`) es notablemente superior a la Mediana (`$26.16`). Esto demuestra que el 50% de las ventas se sitúa por debajo de los `$26.16`, pero existe un grupo de compras de mayor volumen (alcanzando hasta `$171.36`) que elevan el promedio. Por ende, la **mediana es la medida más representativa del comprador típico**.
2. **Alta Dispersión de Compra:** La desviación estándar de `$27.48` frente a la media de `$34.37` refleja una variabilidad marcada (coeficiente de variación del 79.9%), confirmando que conviven clientes minoristas pequeños con compras familiares o mayoristas.
3. **Distribución Mensual Estable:** Con excepción de enero (mes de inicio con 7 pedidos registrados), las ventas mensuales se mantienen estables entre `$8,700` y `$10,285`, registrando su pico máximo en **junio de 2024 ($10,285.44)** y un segundo pico en **marzo de 2024 ($10,046.08)**.

### Paso 5: Tablero de Control y Formato Condicional (Hoja: `05_Dashboard_Reporte` - Clase 8)
* **Tarjetas de KPIs:** Resumen de Facturación Total, Volumen de Pedidos, Ticket Promedio y Mediana de Compra.
* **Segmentación por Categoría:** *Carnicería* lidera la facturación con `$27,924.82` (27.1%), seguida de *Lácteos* (`$16,093.78`) y *Congelados* (`$14,918.25`). *Conservas* representa la menor participación (`$4,864.23`, 4.7%).
* **Segmentación por Método de Pago:** Preferencia por medios digitales: *Mercado Pago* concentra `$30,561.97` (29.6%) y *Transferencia bancaria* `$27,438.07` (26.6%).
* **Segmentación Geográfica:** *Buenos Aires* representa el 35.8% de las ventas (`$36,904.41`), seguida de la región *Centro* (`$20,083.17`) y *Patagonia* (`$18,478.97`).
* **Formato Condicional:** Se implementaron escalas de color suaves para identificar los meses y categorías más rentables, y resaltado para transacciones en estado cancelado o pendiente.

---

**Conclusión:**  
El desarrollo del proyecto demuestra cómo la aplicación secuencial de las herramientas vistas desde la Clase 1 a la 8 (recolección, auditoría de calidad, limpieza, cruce con fórmulas de búsqueda, estadística descriptiva y visualización gerencial) permite transformar datos transaccionales dispersos en un sistema analítico estructurado y confiable para la toma de decisiones comerciales.
