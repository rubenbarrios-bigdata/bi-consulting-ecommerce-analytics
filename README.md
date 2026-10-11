# 📊 Business Intelligence Consulting — Análisis de Ventas E-commerce

Repositorio del Proyecto Integrador de **Business Intelligence (BI)** aplicado al análisis de transacciones comerciales, auditoría y control de calidad de datos, normalización y reportería gerencial en hojas de cálculo.

* **Consultora:** Datawise Consulting  
* **Rol:** Analista de Business Intelligence  
* **Alumno:** Rubén Barrios  
* **Comisión:** C26228  

---

## 🔗 Accesos Directos del Proyecto

* 📊 [**Planilla Oficial en Google Sheets**](https://docs.google.com/spreadsheets/d/1aJiWEctzwMJkoDOK-tq6lUpjJVtE84jb_jdPk0QKgiQ/edit?gid=1833343714#gid=1833343714) *(Libro de trabajo en vivo con fórmulas, datos consolidados y pestaña `formulario calidad de datos`)*
* 📁 [**Carpeta del Proyecto en Google Drive**](https://drive.google.com/drive/folders/1PpibruN527CVEbGAh5XUH-n_kMcCEQCt)
* 📝 [**Documento Word para Google Docs (`.docx`)**](./Fundamentos%20y%20Calidad%20de%20los%20Datos.docx) *(Formato editable para subir o abrir directamente en Google Docs)*
* 📑 [**Informe en PDF (Fundamentos y Calidad de los Datos.pdf)**](./Fundamentos%20y%20Calidad%20de%20los%20Datos.pdf)
* 📄 [**Informe Ejecutivo (Markdown)**](./INFORME_PRE_ENTREGA_BI_CONSULTING.md) *(Documentado para visualización en GitHub)*
* 🌐 [**Informe en Formato Web (HTML)**](./INFORME_PRE_ENTREGA_BI_CONSULTING.html)

---

## 🚀 Contenido del Informe de Pre-Entrega

El informe formal presentado para Google Docs y documentado en este repositorio se estructura en los 4 ejes requeridos por la consigna:

1. **Captación de Clientes y Fundamentos de BI:** Justificación del valor estratégico del dato para un e-commerce, uso de herramientas del ecosistema de Google (Google Sheets en la fase actual y Looker Studio como próximo paso planificado) y beneficios concretos para el negocio.
2. **Investigación (Contexto Ético y Legal):** Análisis exhaustivo de un caso real de violación a la privacidad de datos (Sanción del GDPR a Amazon por €746M), evaluando contexto, faltas, consecuencias y lecciones aprendidas aplicadas al proyecto.
3. **Investigación (Exploración de Fuentes Públicas de Datos):** Tabla comparativa con tres fuentes abiertas de datos de e-commerce (Eurostat, U.S. Census Bureau, UCI Machine Learning Repository), incluyendo enlaces de acceso público, tipología de datos y su potencial analítico a nivel macro y micro.
4. **Obtención de Datos y Checklist de Calidad en Google Sheets:** Auditoría diagnóstica sobre 3.000 transacciones, registrando completitud (100%), unicidad (filtrado de 29 duplicados), consistencia referencial y validez, vinculada a la hoja `formulario calidad de datos`.

> *Nota:* La preparación operativa de datos, transformaciones con fórmulas (`BUSCARV`, `ESPACIOS`, `VALOR`), análisis estadístico descriptivo y tableros de control se encuentran documentados e implementados directamente en la planilla de Google Sheets.

---

## 📁 Estructura del Repositorio

```text
├── categorias.csv                          # Dataset fuente: familias de productos
├── clientes.csv                            # Dataset fuente: padrón de clientes
├── metodos_pago.csv                        # Dataset fuente: catálogo de medios de pago
├── productos.csv                           # Dataset fuente: catálogo de artículos y precios
├── ventas.csv                              # Dataset fuente: transacciones brutas (3.029 filas)
├── Fundamentos y Calidad de los Datos.docx # Documento Word (.docx) listo para Google Docs
├── Fundamentos y Calidad de los Datos.pdf  # Informe en PDF maquetado para presentación
├── INFORME_PRE_ENTREGA_BI_CONSULTING.md    # Informe técnico detallado (Markdown para GitHub)
├── INFORME_PRE_ENTREGA_BI_CONSULTING.html  # Versión web del informe ejecutivo
└── .gitignore                              # Exclusiones de archivos del sistema y temporales
```

---

## 📑 Estructura de la Planilla en Google Sheets

El libro de trabajo en **Google Sheets** se encuentra accesible en [**Barrios Rubén - Comisión C26228 - TPI BI Consulting**](https://docs.google.com/spreadsheets/d/1aJiWEctzwMJkoDOK-tq6lUpjJVtE84jb_jdPk0QKgiQ/edit?gid=1833343714#gid=1833343714) y está estructurado en las siguientes hojas:

| N° | Nombre de Hoja | Propósito y Contenido Principal |
| :---: | :--- | :--- |
| `00` | `formulario calidad de datos` | Matriz de gobernanza y control de calidad (auditoría diagnóstica de dimensiones de calidad). |
| `01` | `01_Raw_Ventas` | Transacciones brutas originales sin modificaciones (3.029 filas). |
| `01` | `01_Raw_Clientes` | Datos crudos originales de clientes (326 registros). |
| `01` | `01_Raw_Productos` | Catálogo original de productos y precios unitarios. |
| `01` | `01_Raw_MetodosPago` | Catálogo de formas de pago aceptadas. |
| `01` | `01_Raw_Categorias` | Catálogo de categorías comerciales. |
| `02` | `02_Limpieza_Normalizacion` | Transformación y estandarización de nombres, correos y conversión de precios con coma decimal a número. |
| `03` | `03_Consolidado_Ventas` | Tabla maestra unificada con 3.000 ventas únicas y cruces relacionales con `=BUSCARV()`. |
| `04` | `04_Estadistica_Descriptiva` | Métricas estadísticas de venta: media ($34.37), mediana ($26.16), moda, dispersión y totales facturados. |
| `05` | `05_Dashboard_Reporte` | Tablero de control con KPIs clave, segmentaciones comerciales y formatos condicionales. |

---

## 🔍 Resumen del Control de Calidad de Datos

* **Unicidad:** Se identificaron y descartaron **29 registros duplicados** en ventas (de 3.029 filas a 3.000 transacciones únicas).
* **Completitud:** 100,0% de completitud; 0 celdas vacías en identificadores, fechas y montos clave.
* **Integridad Referencial:** 100% de coincidencia entre las transacciones y las listas maestras de clientes y productos (0 registros huérfanos).
* **Validez:** Estados normalizados (Completas, Pendientes y Canceladas), cantidades de 1 a 6 unidades por ítem y fechas acotadas al año 2024.
* **Dictamen de Auditoría:** Conforme / Aprobado.

---

## 📈 Métricas Comerciales Destacadas

* **Facturación Bruta Total:** `$103,103.19` en 3.000 pedidos procesados.
* **Facturación Neta Completada:** `$87,729.89` en 2.523 pedidos entregados (*Completa*).
* **Ticket Promedio:** `$34.37` por compra.
* **Ticket Típico (Mediana):** `$26.16` (el 50% de las operaciones se sitúa por debajo de este valor).
* **Categoría Líder:** *Carnicería* con `$27,924.82` (27.1% del total), seguida por *Lácteos* (`$16,093.78`).
* **Canales de Cobro Principales:** *Mercado Pago* (29.6%) y *Transferencia bancaria* (26.6%).
* **Polo Geográfico Clave:** *Buenos Aires* concentra el 35.8% de los pedidos totales.

---

## 🧭 Próximos Pasos del Proyecto

* **Looker Studio:** Conexión directa con la base consolidada en Google Sheets para crear un tablero de control gerencial interactivo y dinámico, completando el ciclo de visualización de Business Intelligence.
