/**
 * SCRIPT ULTRA ROBUSTO PARA GENERAR LA PRESENTACIÓN EN GOOGLE SLIDES
 * Proyecto: Consultoría de BI en E-Commerce (Talento Tech - Plan 2026)
 * Autor: Rubén Barrios | Datawise Consulting | Comisión C26228
 */

function generarPresentacionBI() {
  var deck = SlidesApp.getActivePresentation();
  if (!deck) {
    throw new Error("Por favor abre este script desde el menú 'Extensiones > Apps Script' dentro de tu presentación de Google Slides.");
  }
  
  var existingSlides = deck.getSlides();
  
  // Paleta de colores ejecutiva (Dark Mode Looker Studio)
  var COLOR_FONDO = '#0B0F19';      // Fondo negro azulado
  var COLOR_TARJETA = '#151C2C';    // Contenedores oscuros
  var COLOR_BORDE = '#223249';      // Borde sutil
  var COLOR_CIAN = '#00E5FF';       // Acento cian neón
  var COLOR_VERDE = '#00E676';      // Verde métricas positivas
  var COLOR_AMBAR = '#FBBF24';      // Ámbar advertencias/riesgo
  var COLOR_TEXTO = '#FFFFFF';      // Blanco primario
  var COLOR_MUTED = '#94A3B8';      // Gris secundario

  // =========================================================================
  // SLIDE 1: PORTADA EJECUTIVA
  // =========================================================================
  var s1 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s1.getBackground().setSolidFill(COLOR_FONDO);
  
  var c1 = s1.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 60, 65, 600, 275);
  c1.getFill().setSolidFill(COLOR_TARJETA);
  c1.getBorder().getLineFill().setSolidFill(COLOR_CIAN);
  c1.getBorder().setWeight(1.5);
  
  var t1 = c1.getText();
  t1.setText("DATAWISE CONSULTING\nCONSULTORÍA DE BUSINESS INTELLIGENCE\nANÁLISIS DE VENTAS E-COMMERCE 2024\n\nDe los Datos Crudos a la Decisión Estratégica: Tablero y Narrativa de Cierre\n\nConsultor Analista: Rubén Barrios | Comisión: C26228\nTalento Tech · Ministerio de Educación GCBA (Plan 2026)");
  t1.getTextStyle().setForegroundColor(COLOR_TEXTO);
  
  var pars1 = t1.getParagraphs();
  for (var i = 0; i < pars1.length; i++) {
    var txt = pars1[i].getRange().asString().trim();
    if (txt.indexOf("DATAWISE") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_CIAN).setFontSize(11).setBold(true);
    } else if (txt.indexOf("CONSULTORÍA") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_TEXTO).setFontSize(18).setBold(true);
    } else if (txt.indexOf("ANÁLISIS") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_TEXTO).setFontSize(15).setBold(true);
    } else if (txt.indexOf("De los Datos") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_MUTED).setFontSize(12).setItalic(true);
    } else if (txt.indexOf("Rubén") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_VERDE).setFontSize(11).setBold(true);
    } else if (txt.indexOf("Talento Tech") !== -1) {
      pars1[i].getRange().getTextStyle().setForegroundColor(COLOR_MUTED).setFontSize(10);
    }
  }
  
  setNotas(s1,
    "GUION DEL ORADOR (Portada):\n" +
    "Buenas tardes a los evaluadores y colegas. Mi nombre es Rubén Barrios y vengo en representación de Datawise Consulting a presentar el cierre del proyecto integral de Business Intelligence para la empresa de E-Commerce.\n" +
    "A lo largo de esta consultoría transformamos registros transaccionales dispersos en un sistema analítico gobernado, ergonómico y orientado a la toma de decisiones directivas."
  );

  // =========================================================================
  // SLIDE 2: CONTEXTO DEL NEGOCIO Y PROBLEMÁTICA INICIAL
  // =========================================================================
  var s2 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s2.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s2, "1. CONTEXTO Y PROBLEMÁTICA DE BI", "Superar la Ceguera Comercial y el Desorden Operativo Inicial");
  
  crearTarjeta(s2, 40, 95, 305, 275,
    "EL DESAFÍO INICIAL DE NEGOCIO",
    "• Ceguera Transaccional: La dirección no conocía con precisión el ticket promedio real ni la distribución de ventas.\n\n" +
    "• Descontrol de Cobranzas: Alto volumen de pedidos en estado incierto sin conciliación.\n\n" +
    "• Falta de Centralización: Datos crudos dispersos en hojas de cálculo propensas a errores humanos.",
    COLOR_AMBAR, COLOR_BORDE
  );

  crearTarjeta(s2, 375, 95, 305, 275,
    "GOBERNANZA TÉCNICA Y AUDITORÍA",
    "• Base Consolidada de 3.000 Ventas: Verificación de consistencia y unicidad total en Google Sheets (A1:Q3001).\n\n" +
    "• Modelo Dimensional Estrella: Normalización de 14 tablas en dimensiones limpias y tabla de hechos.\n\n" +
    "• Ética y Anonimización: Enmascaramiento estricto de datos sensibles según estándares de privacidad GDPR.",
    COLOR_CIAN, COLOR_CIAN
  );

  setNotas(s2,
    "GUION DEL ORADOR (Contexto y Problema):\n" +
    "Tener miles de registros no sirve de nada si se trabaja a ciegas. La empresa no sabía con exactitud qué clientes sostenían el negocio ni cuánto dinero real ingresaba a las cuentas bancarias.\n" +
    "Como primer paso de consultoría, consolidamos una base estricta de 3.000 ventas únicas bajo un modelo estrella relacional, garantizando datos limpios y gobernados antes de cualquier visualización."
  );

  // =========================================================================
  // SLIDE 3: ARQUITECTURA DEL DASHBOARD EN LOOKER STUDIO
  // =========================================================================
  var s3 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s3.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s3, "2. TABLERO DE CONTROL DIRECTIVO", "Dashboard Interactivo en Looker Studio (Regla de los 3 Segundos)");
  
  var s3_holder = s3.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 95, 410, 275);
  s3_holder.getFill().setSolidFill(COLOR_TARJETA);
  s3_holder.getBorder().getLineFill().setSolidFill(COLOR_CIAN);
  s3_holder.getBorder().setWeight(1.5);
  var s3_ht = s3_holder.getText();
  s3_ht.setText("[ PEGA AQUÍ LA CAPTURA COMPLETA DE TU DASHBOARD ]\n\n(Captura general que muestra el banner, los 6 KPIs superiores y los 4 gráficos del cuerpo central)");
  s3_ht.getTextStyle().setForegroundColor(COLOR_CIAN).setFontSize(11).setBold(true);
  
  crearTarjeta(s3, 470, 95, 210, 275,
    "ENLACE ACTIVO Y PRINCIPIOS",
    "🔗 [Abrir Tablero en Looker Studio]\n\n" +
    "PRINCIPIOS GESTALT:\n" +
    "• Fondo oscuro para reducir fatiga visual y resaltar contrastes.\n\n" +
    "• Eliminación de líneas de cuadrícula y etiquetas redundantes.\n\n" +
    "• KPIs de Cierre en banda superior con lectura en 3 segundos.",
    COLOR_VERDE, COLOR_BORDE
  );

  setNotas(s3,
    "GUION DEL ORADOR (Arquitectura Dashboard):\n" +
    "Para la dirección diseñamos este tablero interactivo en Looker Studio. Aplicamos la regla de los 3 segundos: un directivo debe comprender el pulso de la compañía sin buscar números en planillas.\n" +
    "Arriba sintetizamos el mes de cierre con comparativas de período y sparklines de tendencia, y abajo disponemos de la historia anual completa con filtrado cruzado dinámico."
  );

  // =========================================================================
  // SLIDE 4: PREGUNTAS DEL DIRECTORIO Y KPIs DE CIERRE
  // =========================================================================
  var s4 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s4.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s4, "3. KPIS DE CIERRE: RESPUESTA AL DIRECTORIO", "¿Por qué diseñamos los indicadores de esta manera y con estos datos?");
  
  var s4_holder = s4.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 95, 640, 85);
  s4_holder.getFill().setSolidFill(COLOR_TARJETA);
  s4_holder.getBorder().getLineFill().setSolidFill(COLOR_CIAN);
  var s4_ht = s4_holder.getText();
  s4_ht.setText("[ PEGA AQUÍ LA CAPTURA DE LAS 6 TARJETAS DE KPIS SUPERIORES ]\n(Venta Neta $8.868, Pedidos 228, Ticket $38.9, Unidades 819, Clientes 189, Riesgo $981.58)");
  s4_ht.getTextStyle().setForegroundColor(COLOR_CIAN).setFontSize(10).setBold(true);
  
  crearTarjeta(s4, 40, 195, 640, 175,
    "LAS PREGUNTAS DE NEGOCIO DETRÁS DE LOS KPIs",
    "1. Velocidad de Cierre: Venta Neta creció +23.6% en diciembre ($8.868,51) confirmando fuerte reactivación.\n" +
    "2. El Motor Real (Insight de Oro): El Ticket Medio saltó a $38.90 (+19.2%), demostrando que el crecimiento provino del mayor valor de compra por cliente y no de saturar la logística.\n" +
    "3. Gestión del Riesgo: El dinero retenido en órdenes pendientes cayó un 48% ($981.58), liberando caja para el cierre.",
    COLOR_VERDE, COLOR_BORDE
  );

  setNotas(s4,
    "GUION DEL ORADOR (Preguntas de Negocio y KPIs):\n" +
    "Al revisar la pre-entrega, el Directorio nos planteó una nueva pregunta: 'Ya vimos que juntamos $103k en el año, pero ¿cómo cerramos el último mes? ¿Estamos acelerando o desacelerando?'. Por eso diseñamos esta fila de KPIs.\n" +
    "La respuesta fue contundente: en diciembre facturamos $8.868 netos, creciendo un 23.6% respecto a noviembre. Y lo más valioso: crecimos porque cada cliente gastó casi 20% más por pedido gracias a los combos de fin de año."
  );

  // =========================================================================
  // SLIDE 5: HALLAZGOS COMERCIALES: CATEGORÍAS Y REGIONES
  // =========================================================================
  var s5 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s5.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s5, "4. ANÁLISIS DE CATEGORÍAS Y GEOGRAFÍA", "Carnicería y Lácteos traccionan el 42%; Buenos Aires y Centro dominan el 55%");
  
  var s5_holder = s5.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 95, 380, 275);
  s5_holder.getFill().setSolidFill(COLOR_TARJETA);
  s5_holder.getBorder().getLineFill().setSolidFill(COLOR_CIAN);
  var s5_ht = s5_holder.getText();
  s5_ht.setText("[ PEGA AQUÍ LA CAPTURA DEL GRÁFICO DE BARRAS DE CATEGORÍAS Y LA TABLA REGIONAL ]");
  s5_ht.getTextStyle().setForegroundColor(COLOR_CIAN).setFontSize(10).setBold(true);
  
  crearTarjeta(s5, 440, 95, 240, 275,
    "HALLAZGOS CLAVE",
    "• Categorías Locomotoras:\n" +
    "  - Carnicería: $27.924 (27% del total).\n" +
    "  - Lácteos: $16.093 (16% del total).\n" +
    "  Generan la atracción principal del cliente.\n\n" +
    "• Polarización Territorial:\n" +
    "  - Buenos Aires ($36.9k) y Centro ($20k) concentran más del 55%.\n\n" +
    "• Oportunidad en el NOA:\n" +
    "  Poco volumen pero el ticket medio más alto del país ($38.99).",
    COLOR_CIAN, COLOR_BORDE
  );

  setNotas(s5,
    "GUION DEL ORADOR (Categorías y Regiones):\n" +
    "Al analizar los gráficos del cuerpo central, los datos revelan una alta concentración: Carnicería y Lácteos son los productos de atracción que llenan el carrito digital.\n" +
    "A nivel territorial, Buenos Aires y la región Centro explican más del 55% del dinero. Sin embargo, observamos un patrón interesante: el NOA, aunque tiene poco volumen, registra el ticket medio más alto ($38.99). Hay un mercado desatendido con alto poder de compra esperando ofertas específicas."
  );

  // =========================================================================
  // SLIDE 6: EL CLÍMAX ANALÍTICO: LA FUGA DE COBRANZAS
  // =========================================================================
  var s6 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s6.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s6, "5. EL CUELLO DE BOTELLA OPERATIVO", "El 14,5% del Dinero Anual ($14.985) Quedó Retenido en Pedidos Pendientes");
  
  var s6_holder = s6.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 95, 330, 275);
  s6_holder.getFill().setSolidFill(COLOR_TARJETA);
  s6_holder.getBorder().getLineFill().setSolidFill(COLOR_AMBAR);
  var s6_ht = s6_holder.getText();
  s6_ht.setText("[ PEGA AQUÍ LA CAPTURA DEL GRÁFICO DE ANILLO (MEDIOS DE PAGO) ]");
  s6_ht.getTextStyle().setForegroundColor(COLOR_AMBAR).setFontSize(10).setBold(true);
  
  crearTarjeta(s6, 390, 95, 290, 275,
    "DIAGNÓSTICO DEL CONFLICTO",
    "• Eficacia de Cobranza:\n" +
    "  El 84.1% ($87.729) se cobró exitosamente.\n" +
    "  La cancelación es mínima (0.3% / $387).\n\n" +
    "• El Foco del Riesgo:\n" +
    "  467 pedidos pendientes acumulan $14.985,96.\n\n" +
    "• Causa Raíz Detectada:\n" +
    "  Las transferencias (26.6% de los pagos) dependen de validación manual de comprobantes.\n\n" +
    "• Evidencia Positiva:\n" +
    "  En diciembre la cobranza activa redujo el dinero en riesgo un 48% ($981 vs $1.887).",
    COLOR_AMBAR, COLOR_BORDE
  );

  setNotas(s6,
    "GUION DEL ORADOR (Fuga de Cobranzas):\n" +
    "Llegamos al hallazgo de mayor impacto para el Director Financiero: la tasa de cancelación es bajísima (solo 0,3%), pero el 14,5% de las ventas anuales quedó retenido en estado 'Pendiente'. Casi $15.000 inmovilizados porque las transferencias bancarias se concilian a mano.\n" +
    "En diciembre logramos que este riesgo caiga un 48%, lo que demuestra que con automatización podemos rescatar este flujo de caja de inmediato."
  );

  // =========================================================================
  // SLIDE 7: RECOMENDACIONES ESTRATÉGICAS Y ACCIONES
  // =========================================================================
  var s7 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s7.getBackground().setSolidFill(COLOR_FONDO);
  crearEncabezado(s7, "6. PLAN DE ACCIÓN Y RECOMENDACIONES", "Decisiones orientadas por datos para maximizar la rentabilidad");
  
  crearTarjeta(s7, 40, 95, 200, 275,
    "1. AUTOMATIZACIÓN",
    "• Implementar webhooks inmediatos para transferencias bancarias.\n\n" +
    "• Priorizar billeteras virtuales (Mercado Pago 29.6%).\n\n" +
    "• Impacto: Liberar hasta $15.000 de capital de trabajo atrapado.",
    COLOR_AMBAR, COLOR_AMBAR
  );

  crearTarjeta(s7, 260, 95, 200, 275,
    "2. CROSS-SELLING",
    "• Asociar categorías tractoras (Carnicería y Lácteos) con productos de alto margen (Panadería y Conservas).\n\n" +
    "• Lanzar combos familiares.\n\n" +
    "• Impacto: Sostener el récord del ticket promedio en $38.",
    COLOR_CIAN, COLOR_CIAN
  );

  crearTarjeta(s7, 480, 95, 200, 275,
    "3. GOBERNANZA",
    "• Campañas específicas para la región NOA aprovechando su alto ticket medio ($38.99).\n\n" +
    "• Institucionalizar este Dashboard en Looker Studio para comités semanales.\n\n" +
    "• Impacto: Evitar quiebres de stock.",
    COLOR_VERDE, COLOR_VERDE
  );

  setNotas(s7,
    "GUION DEL ORADOR (Recomendaciones Finales):\n" +
    "Como consultores de BI, nuestra labor culmina diciendo qué decisiones tomar. Proponemos tres medidas concretas: primero, automatizar la conciliación de transferencias para liberar el capital atrapado en pedidos pendientes; segundo, impulsar combos entre carnes y panadería para sostener el ticket promedio récord; y tercero, institucionalizar este tablero de Looker Studio como el timón de gestión semanal del negocio. Muchas gracias."
  );

  // (Opcional: Si te queda una primera diapositiva blanca al principio, solo selecciónala y bórrala con Supr)
}

/**
 * Función auxiliar para crear encabezados uniformes
 */
function crearEncabezado(slide, subtitulo, titulo) {
  var header = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 20, 640, 60);
  header.getFill().setSolidFill('#151C2C');
  header.getBorder().getLineFill().setSolidFill('#00E5FF');
  header.getBorder().setWeight(1);
  
  var ht = header.getText();
  ht.setText(subtitulo.toUpperCase() + "\n" + titulo);
  ht.getTextStyle().setForegroundColor('#FFFFFF');
  
  var pars = ht.getParagraphs();
  if (pars.length > 0) {
    pars[0].getRange().getTextStyle().setForegroundColor('#00E5FF').setFontSize(10).setBold(true);
  }
  if (pars.length > 1) {
    pars[1].getRange().getTextStyle().setForegroundColor('#FFFFFF').setFontSize(14).setBold(true);
  }
}

/**
 * Función auxiliar para crear tarjetas con formato seguro
 */
function crearTarjeta(slide, x, y, w, h, titulo, cuerpo, colorTitulo, bordeColor) {
  var shape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  shape.getFill().setSolidFill('#151C2C');
  shape.getBorder().getLineFill().setSolidFill(bordeColor || '#223249');
  
  var tr = shape.getText();
  tr.setText(titulo + "\n\n" + cuerpo);
  tr.getTextStyle().setForegroundColor('#FFFFFF').setFontSize(10);
  
  var pars = tr.getParagraphs();
  if (pars.length > 0) {
    pars[0].getRange().getTextStyle().setForegroundColor(colorTitulo || '#00E5FF').setFontSize(11).setBold(true);
  }
  return shape;
}

/**
 * Función auxiliar segura para notas del orador
 */
function setNotas(slide, texto) {
  try {
    var notesPage = slide.getNotesPage();
    if (notesPage) {
      var shape = notesPage.getSpeakerNotesShape();
      if (shape) {
        shape.getText().setText(texto);
      }
    }
  } catch (e) {
    Logger.log("Notas no disponibles: " + e);
  }
  Utilities.sleep(100);
}
