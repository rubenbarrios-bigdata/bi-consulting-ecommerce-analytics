# 📊 Business Intelligence Consulting — Análisis de Ventas E-commerce

Trabajo Práctico Integrador (TPI) de **Business Intelligence (BI)** aplicado al análisis de transacciones comerciales, auditoría de calidad de datos, normalización y reportería gerencial en hojas de cálculo.

> 📁 **Carpeta Oficial del Proyecto en Google Drive (Google Sheets & Entregables en Vivo):**  
> 🔗 [**Abrir Carpeta en Google Drive**](https://drive.google.com/drive/folders/1PpibruN527CVEbGAh5XUH-n_kMcCEQCt)

---

## 🚀 Resumen del Proyecto

Este repositorio documenta el ciclo completo de Business Intelligence para una empresa de comercio electrónico minorista:

1. **Captación de Clientes y Fundamentos de BI:** Justificación de ROI y valor del dato para e-commerce.
2. **Auditoría Ética y Legal:** Caso de estudio internacional sobre privacidad de datos (normativas GDPR / CCPA) y lecciones aprendidas.
3. **Benchmarking de Fuentes Públicas:** Identificación de fuentes oficiales internacionales (Eurostat, U.S. Census Bureau, UCI ML Repository).
4. **Data Quality Checklist (Auditoría de Calidad):** Evaluación de unicidad, completitud, consistencia, integridad referencial, validez y exactitud.
5. **Normalización y Limpieza de Datos:** Eliminación de duplicados y homogeneización de texto (`ESPACIOS`, `NOMPROPIO`, `MAYUSC`).
6. **Integración Transaccional:** Cruce relacional mediante fórmulas de búsqueda (`BUSCARV`, `INDICE` y `COINCIDIR`).
7. **Estadística Descriptiva y KPIs:** Métricas de tendencia central y dispersión (media, mediana, moda, desviación estándar).
8. **Reportería y Visualización:** Dashboard interactivo en Google Sheets con segmentación por categoría, método de pago y provincia.

---

## 📁 Estructura del Repositorio

```text
├── categorias.csv                          # Dataset crudo: categorías de productos
├── clientes.csv                            # Dataset crudo: directorio de clientes
├── metodos_pago.csv                        # Dataset crudo: catálogo de medios de pago
├── productos.csv                           # Dataset crudo: catálogo de artículos y precios
├── ventas.csv                              # Dataset crudo: transacciones históricas (3.029 filas)
├── TPI_BI_Consulting_Ventas_Ecommerce.xlsx # Libro de Google Sheets estructurado con 10 pestañas y fórmulas aplicadas
├── INFORME_PRE_ENTREGA_BI_CONSULTING.md    # Informe formal completo listo para entrega (Markdown)
├── INFORME_PRE_ENTREGA_BI_CONSULTING.html  # Versión web del informe ejecutivo
├── INFORME_PRE_ENTREGA_BI_CONSULTING.pdf   # Versión PDF ejecutiva para presentación y evaluación
├── Consulting_BI_Talento_Tech.pdf          # Consigna oficial de cátedra
└── .gitignore                              # Exclusiones de archivos del sistema y temporales
```

---

## 📑 Estructura del Libro de Trabajo en Google Sheets

El libro de trabajo en **Google Sheets** se encuentra disponible en vivo en la [**Carpeta Oficial de Google Drive**](https://drive.google.com/drive/folders/1PpibruN527CVEbGAh5XUH-n_kMcCEQCt) con todas las fórmulas nativas aplicadas y organizado en las siguientes hojas:

| N° | Hoja | Propósito y Fórmulas Clave |
| :---: | :--- | :--- |
| `00` | `00_Checklist_Calidad` | Matriz de auditoría diagnóstica y criterios evaluados. |
| `01` | `01_Raw_Ventas` | Datos crudos transaccionales originales intactos. |
| `01` | `01_Raw_Clientes` | Datos crudos originales de clientes. |
| `01` | `01_Raw_Productos` | Catálogo original de productos y precios unitarios. |
| `01` | `01_Raw_MetodosPago` | Catálogo original de formas de pago. |
| `01` | `01_Raw_Categorias` | Catálogo original de familias de productos. |
| `02` | `02_Limpieza_Normalizacion` | Transformaciones de texto (`TRIM`/`ESPACIOS`, `PROPER`/`NOMPROPIO`). |
| `03` | `03_Consolidado_Ventas` | Tabla maestra unificada con cruces (`VLOOKUP`/`BUSCARV`, `INDEX`/`MATCH`). |
| `04` | `04_Estadistica_Descriptiva` | Métricas estadísticas mensuales (`AVERAGE`, `MEDIAN`, `MODE`, `STDEV.S`). |
| `05` | `05_Dashboard_Reporte` | Tablas dinámicas, KPIs de negocio y gráficos ejecutivos. |

---

## 🔍 Hallazgos Principales de Calidad de Datos

* **Unicidad:** Se detectaron y subsanaron **29 registros duplicados exactos** en la tabla de ventas (3.029 filas iniciales $\rightarrow$ 3.000 transacciones netas).
* **Consistencia e Integridad:** 100% de coherencia referencial entre las tablas operativas; sin registros huérfanos.
* **Formato de Cadenas:** Se normalizaron espacios redundantes y discrepancias de mayúsculas/minúsculas en nombres de clientes y descripciones.

---

## 📈 Métricas de Negocio Destacadas

* **Volumen Total Facturado:** `$103,025.29` en 3.000 pedidos completados y validados.
* **Ticket Promedio (Media):** `$34.34` por transacción.
* **Ticket Mediano:** `$27.60` (dispersión moderada con Desviación Estándar de `$24.97`).
* **Categoría Líder en Facturación:** *Electrónica* (`$38,819.34` — 37.7% del total).
* **Medio de Pago Principal:** *Tarjeta de Crédito* (48.4% del volumen transaccionado).
* **Polo Geográfico Clave:** *Buenos Aires* representa el 35.8% de las operaciones comerciales.

---

## 📄 Informe Formal & Entregables
 
Para consultar el informe académico detallado con el desarrollo de las 5 secciones requeridas (Captación, Marco Ético/Legal, Fuentes Públicas, Checklist de Calidad y Registro de Modificaciones), ver:
* 📂 [**Carpeta Oficial del Proyecto en Google Drive**](https://drive.google.com/drive/folders/1PpibruN527CVEbGAh5XUH-n_kMcCEQCt) *(Google Sheets interactivo y entregables)*
* 📄 [**Informe Ejecutivo en PDF**](./INFORME_PRE_ENTREGA_BI_CONSULTING.pdf) *(Documento maquetado a 6 páginas)*
* 📝 [**Informe de Pre-Entrega (Markdown)**](./INFORME_PRE_ENTREGA_BI_CONSULTING.md)
* 🌐 [**Versión Web (HTML)**](./INFORME_PRE_ENTREGA_BI_CONSULTING.html)
