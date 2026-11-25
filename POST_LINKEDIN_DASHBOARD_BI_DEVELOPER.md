📊 **¿Los dashboards de tu empresa responden preguntas estratégicas o son solo "cementerios de gráficos"?**

Creo firmemente que un reporte no debe limitarse a mostrar **"qué pasó"**, sino explicar **"por qué ocurrió"** y **"qué decisiones orienta"**.

Les comparto este **Tablero Ejecutivo de E-Commerce (2024)** desarrollado en **Google Data Studio (Looker Studio)** sobre Google Sheets, estructurado bajo este tríptico analítico:

---

### 1️⃣ ¿QUÉ PASÓ? (Métricas Clave del Dashboard)
📈 **Venta Neta de Cierre:** $8,868.51 (▲ 23.6% vs Nov).  
🎫 **Ticket Promedio Ponderado:** $38.90 (▲ 19.2% vs Nov).  
🛡️ **Ingresos en Riesgo:** $981.58 (▼ -48.0% vs Nov).  
🛒 **Categorías Líderes:** Carnicería ($27.9k) y Lácteos ($16.1k) concentran el **42%** de las ventas.  
🗺️ **Geografía & Pagos:** Buenos Aires y Centro explican el **55%**, mientras Mercado Pago (**29.6%**) y Transferencias (**26.6%**) dominan las transacciones.

---

### 2️⃣ ¿POR QUÉ OCURRIÓ? (Diagnóstico y Causa Raíz)
💡 **El Motor Real:** El salto de facturación no se debió a saturar la logística con más pedidos (+3.6%), sino a la **calidad del carrito**: compras de mayor valor por combos de fin de año.  
🥩 **Tracción de Canasta:** Carnes y lácteos funcionan como productos "locomotora" de consumo diario que aseguran la recurrencia.  
📍 **El Fenómeno del NOA:** Registra poco volumen pero el **ticket más alto del país ($38.99)** debido a compras de abastecimiento familiar por lejanía logística.  
⚡ **Eficiencia de Cobro:** La gestión activa de cobranza a fin de mes logró destrabar pedidos pendientes de transferencias bancarias.

---

### 3️⃣ ¿QUÉ DECISIONES ORIENTA? (Acciones de Negocio)
🎯 **Estrategia Comercial (Cross-Selling):** Empaquetar categorías tractoras (carnes y lácteos) con ítems de alto margen (panadería y conservas) para sostener el ticket récord de $38 en el Q1.  
🚀 **Expansión Territorial:** Lanzar promociones con envío bonificado exclusivas para el NOA para capitalizar su alto poder de compra.  
⚙️ **Optimización Operativa:** Integrar webhooks automáticos para transferencias, eliminando la validación manual de comprobantes.  
💰 **Finanzas:** Validar el presupuesto operativo del primer trimestre con respaldo de liquidez asegurada.

---

🛠️ **Arquitectura Técnica en Data Studio:**  
Para sostener esta narrativa sin distorsiones, implementé campos calculados ponderados como `SUM(Precio_Total) / COUNT_DISTINCT(ID_Venta)` (evitando promediar promedios) y scorecards con comparativa de período previo y sparklines diarias.

💬 *¿Cómo conectan en sus equipos los datos visuales con decisiones reales de negocio? ¡Los leo!*

#BusinessIntelligence #DataStudio #LookerStudio #Analytics #DataStorytelling #DashboardDesign #SQL
