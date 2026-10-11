# PRE-ENTREGA DE PROYECTO
## PROYECTO INTEGRADOR: CONSULTORÍA DE BUSINESS INTELLIGENCE
### Análisis de Ventas en una Empresa de E-Commerce · Fundamentos y Calidad de los Datos

---

**Entidad de Formación:** Programa BI Consulting – Talento Tech | Ministerio de Educación / GCBA  
**Consultora:** Datawise Consulting  
**Rol:** Analista de Business Intelligence  
**Alumno:** Rubén Barrios  
**Comisión:** C26228  
**Fecha:** Octubre 2024 / Ciclo 2026  

**Accesos y Entregables del Proyecto:**
* **Planilla Central en Google Sheets:** [Barrios Rubén - Comisión C26228 - TPI BI Consulting](https://docs.google.com/spreadsheets/d/1aJiWEctzwMJkoDOK-tq6lUpjJVtE84jb_jdPk0QKgiQ/edit?gid=1833343714#gid=1833343714)
  * *(Auditoría disponible en la hoja: `formulario calidad de datos`)*
* **Carpeta del Proyecto en Google Drive:** [Ruben Barrios - TPI BI Consulting](https://drive.google.com/drive/folders/1PpibruN527CVEbGAh5XUH-n_kMcCEQCt)
* **Documento Editable para Google Docs:** [Fundamentos y Calidad de los Datos.docx](./Fundamentos%20y%20Calidad%20de%20los%20Datos.docx)
* **Informe en PDF:** [Fundamentos y Calidad de los Datos.pdf](./Fundamentos%20y%20Calidad%20de%20los%20Datos.pdf)
* **Datasets Fuente (CSV):** `ventas.csv`, `clientes.csv`, `productos.csv`, `categorias.csv`, `metodos_pago.csv`

---

## 1. CAPTACIÓN DEL CLIENTE: LA IMPORTANCIA DE BUSINESS INTELLIGENCE EN E-COMMERCE

### 1.1. Contexto y Diagnóstico del Negocio
En el comercio electrónico actual, las tiendas digitales generan miles de registros todos los días: pedidos, datos de clientes, productos visitados y cobros por distintos medios de pago. Sin embargo, tener muchos datos acumulados no sirve de nada si se encuentran desordenados.

En muchas pequeñas y medianas empresas de e-commerce, esta información suele estar repartida en archivos sueltos, planillas sin conexión entre sí o dentro de la propia plataforma de cobro. Esta desorganización hace que la empresa trabaje "a ciegas" o basándose únicamente en la intuición, lo que genera problemas comunes como:
* Quedarse sin stock de los artículos más vendidos o acumular productos con escasa salida comercial.
* Desconocer quiénes son los clientes que compran seguido ni cuánto gastan habitualmente.
* Demorar días o semanas para armar un balance de ventas mensual y conocer la facturación real.

### 1.2. Beneficios Directos de Aplicar Business Intelligence (BI)
La implementación de Business Intelligence (Inteligencia de Negocios) permite ordenar, limpiar y transformar esos datos diarios en información clara y útil para tomar mejores decisiones comerciales:

1. **Visión Centralizada de las Ventas:** Reúne en un solo lugar la información de ventas, productos y clientes, permitiendo saber en minutos cómo está funcionando el negocio sin tener que cruzar archivos a mano.
2. **Control Inteligente de Inventario:** Permite ver con claridad qué productos se compran con mayor frecuencia (como alimentos frescos o lácteos) para reponerlos a tiempo, y cuáles rotan más lento para evitar compras innecesarias de stock.
3. **Conocimiento del Perfil de los Clientes:** Ayuda a identificar cuánto gasta en promedio un comprador, de qué zonas geográficas provienen los pedidos y con qué frecuencia regresan a la tienda, facilitando promociones más efectivas.
4. **Seguimiento de Medios de Pago:** Permite monitorear la preferencia de pago de los usuarios (billeteras virtuales, transferencias o tarjetas) y controlar rápidamente los pedidos que quedan pendientes de pago para evitar cancelaciones.
5. **Ahorro de Tiempo y Reducción de Errores:** Al tener procesos de datos claros y fórmulas organizadas, se evitan errores humanos de cálculo y se reducen horas de trabajo administrativo.

### 1.3. Ecosistema de Herramientas y Metodología Aplicada
Para este proyecto de consultoría se definió una solución accesible, ágil y colaborativa basada en el ecosistema de Google:

* **Google Sheets (Herramienta Principal de Trabajo Actual):**
  * Es la plataforma utilizada para importar los datos crudos, realizar la auditoría de calidad mediante listas de verificación, limpiar y estandarizar la información, cruzar tablas mediante fórmulas (`BUSCARV`) y consolidar las tablas maestras.
* **Looker Studio (Próximo Paso del Proyecto):**
  * Constituye la **siguiente etapa planificada** del proyecto. Una vez consolidados y verificados los datos limpios en Google Sheets, se avanzará en la conexión con Looker Studio para diseñar tableros dinámicos e interactivos que faciliten la visualización gráfica de los resultados a los responsables del negocio.

---

## 2. INVESTIGACIÓN: CONTEXTO ÉTICO Y LEGAL EN EL MANEJO DE DATOS EN E-COMMERCE

### 2.1. Selección del Caso de Estudio: Sanción del GDPR a Amazon (€746 Millones)
En el comercio electrónico es indispensable manejar datos personales para concretar las compras: nombres de clientes, direcciones de envío, números de teléfono, correos electrónicos e historiales de productos comprados. El límite entre brindar un buen servicio y vulnerar la privacidad de los usuarios es muy delicado.

Como caso de estudio para este proyecto, se analizó la sanción impuesta en julio de 2021 por la Comisión Nacional de Protección de Datos de Luxemburgo (CNPD) a **Amazon**, bajo el Reglamento General de Protección de Datos de Europa (**GDPR**), con una multa de **746 millones de euros**.

### 2.2. Contexto de la Infracción y Faltas a la Ética
La investigación comenzó a partir de reclamos de miles de usuarios que notaron que la plataforma rastreaba y utilizaba sus datos sin su consentimiento explícito:

1. **Seguimiento y Perfilado sin Consentimiento:** Amazon recolectaba información detallada de la navegación y las búsquedas de los compradores para mostrarles publicidad personalizada, sin pedirles una autorización clara y voluntaria antes de hacerlo.
2. **Falta de Transparencia:** Los términos de uso no explicaban de forma sencilla a las personas cómo se combinaban sus compras con los sistemas de publicidad de la empresa, lo que impedía que los usuarios supieran qué datos suyos se estaban compartiendo.
3. **Dificultad para Rechazar Cookies:** El diseño del sitio web inducía al usuario a aceptar el seguimiento publicitario, haciendo difícil encontrar la opción para desactivarlo.

### 2.3. Consecuencias del Caso
* **Sanción Económica Histórica:** Fue la mayor multa por privacidad aplicada en la Unión Europea hasta ese momento, marcando un precedente fundamental en la industria tecnológica.
* **Obligación de Cambiar Políticas:** La empresa debió rediseñar sus avisos de privacidad y facilitar que las personas elijan qué datos desean compartir con un solo clic.
* **Impacto en la Reputación:** Creció la exigencia global de los consumidores por un trato más respetuoso y transparente de sus datos personales.

### 2.4. Lecciones Aprendidas y Principios Éticos para Nuestro Proyecto
Para el trabajo con los datos de este e-commerce, se adoptaron pautas éticas claras y responsables:

1. **Principio de Minimización de Datos:** Recolectar únicamente los datos necesarios para procesar los pedidos y despachos.
2. **Cuidado de la Privacidad:** En los informes y paneles compartidos no es necesario exponer datos sensibles como correos o teléfonos personales; se utilizan identificadores seguros (`ID_Cliente`) para analizar las ventas de forma agregada.
3. **Respeto a las Decisiones del Cliente:** Respetar de inmediato las solicitudes de clientes que pidan no recibir publicidad o darse de baja de la base de datos.
4. **Control de Accesos en la Nube:** Al trabajar en Google Sheets y Google Drive, compartir los archivos únicamente con permisos adecuados (modo lectura para visualizadores y edición protegida para el equipo de análisis).

---

## 3. INVESTIGACIÓN: EXPLORACIÓN Y BÚSQUEDA DE FUENTES DE DATOS PÚBLICAS

Para contrastar y enriquecer la información interna de este e-commerce con los patrones y tendencias generales del comercio minorista, se relevaron **tres fuentes públicas de datos abiertas** con alto potencial de análisis:

| N° | Nombre de la Fuente | Organización / Enlace de Acceso | Tipos de Datos | Potencial de Análisis para E-commerce |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **Digital Economy and Society: E-commerce Statistics** | **Eurostat** (Comisión Europea)<br/>[https://ec.europa.eu/eurostat/web/digital-economy-and-society/database](https://ec.europa.eu/eurostat/web/digital-economy-and-society/database) | Series temporales de ventas online, porcentaje de compradores digitales y medios de pago utilizados. | **Benchmark y Comparación:** Permite conocer cómo crece el comercio electrónico en general, qué porcentaje de la población compra online y qué medios de pago eligen los consumidores. |
| **2** | **Monthly & Quarterly Retail E-Commerce Sales (E-Stats)** | **U.S. Census Bureau** (Oficina del Censo EE.UU.)<br/>[https://www.census.gov/retail/ecommerce.html](https://www.census.gov/retail/ecommerce.html) | Series mensuales y trimestrales de ventas minoristas, comparando tiendas físicas vs. canal digital. | **Análisis de Estacionalidad:** Permite identificar los meses del año con mayor volumen de compras y evaluar si las ventas de nuestra tienda acompañan las tendencias del mercado. |
| **3** | **Online Retail II Data Set** | **UCI Machine Learning Repository**<br/>[https://archive.ics.uci.edu/dataset/502/online+retail+ii](https://archive.ics.uci.edu/dataset/502/online+retail+ii) | Transacciones reales de un e-commerce minorista con código de compra, artículo, fecha, cantidad y precio. | **Hábitos del Consumidor:** Proporciona una base práctica para estudiar qué productos suelen comprarse juntos en un mismo pedido y analizar la frecuencia de compra de los usuarios. |

### Síntesis de Aplicación Práctica al Negocio
La combinación de estas tres fuentes externas complementa el análisis transaccional interno de la compañía:
* **Nivel Macro (Eurostat y Census Bureau):** Permite situar el crecimiento del negocio en el contexto macroeconómico, verificando si las variaciones en las ventas mensuales responden a tendencias comunes de todo el mercado minorista.
* **Nivel Micro (UCI Online Retail II):** Ofrece un caso real de compras minoristas para entender el comportamiento de los clientes, cómo combinan productos en el carrito y con qué frecuencia regresan a comprar.

---

## 4. OBTENCIÓN DE DATOS Y CHECKLIST DE CALIDAD EN GOOGLE SHEETS

Para iniciar el proyecto, se importó el conjunto de datos de ventas junto con los catálogos auxiliares (clientes, productos, categorías y medios de pago) a Google Sheets. Siguiendo las buenas prácticas analíticas, los archivos originales se preservaron intactos en hojas de respaldo independientes (`01_Raw_...`).

Tal como lo establece la consigna del proyecto, el formulario con el checklist de criterios de calidad de datos y el informe con los hallazgos de la auditoría se encuentran diseñados, aplicados y registrados directamente dentro de la planilla compartida de Google Sheets:

* **Planilla Central en Google Sheets:** [Barrios Rubén - Comisión C26228 - TPI BI Consulting](https://docs.google.com/spreadsheets/d/1aJiWEctzwMJkoDOK-tq6lUpjJVtE84jb_jdPk0QKgiQ/edit?gid=1833343714#gid=1833343714)
* **Pestaña Específica del Formulario:** `formulario calidad de datos`

> **Ubicación de la Auditoría:** El checklist aplicado en la hoja `formulario calidad de datos` audita las dimensiones de Completitud, Unicidad, Consistencia, Validez y Precisión sobre las 3.000 ventas únicas y sus catálogos vinculados, arrojando un cumplimiento global del 100% Conforme y dictamen Aprobado. Toda la preparación de datos, fórmulas relacionales (`BUSCARV`) y análisis estadístico se encuentran documentados e implementados directamente en el libro de Google Sheets.
