import { ServiceArea, ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // =========================================================================
  // ÁREA 01: CONSULTORÍAS EN GESTIÓN DE LA ENERGÍA
  // =========================================================================
  {
    id: 'aee-auditoria-energetica',
    slug: 'auditoria-energetica-aee',
    areaId: 'gestion-energia',
    name: 'AEE - Auditoría Energética y Evaluación de Eficiencia',
    shortDescription: 'Inspección técnica integral para identificar pérdidas energéticas, cuantificar consumos y formular medidas de ahorro con retorno de inversión garantizado.',
    impactPhrase: 'Convertimos el consumo energético descontrolado en ahorros económicos medibles y sostenibles.',
    badge: 'Eficiencia Clave',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Es un examen sistemático, documentado y periódico de las instalaciones consumidoras de energía eléctrica y térmica dentro de plantas industriales, edificios corporativos y complejos mineros.',
      purpose: 'Determinar el balance energético integral, identificar ineficiencias operativas y formular una cartera de proyectos de optimización energética de corto, mediano y largo plazo.',
      problemSolved: 'Resuelve la falta de visibilidad sobre los centros de mayor costo energético, cobros por penalidad de factor de potencia y pérdidas no cuantificadas en sistemas motrices, de climatización e iluminación.',
      clientBenefits: [
        'Reducción de hasta un 15% - 30% en la factura eléctrica mensual.',
        'Priorización de inversiones con cálculo de VAN, TIR y periodo de repago.',
        'Cumplimiento de normativas del Ministerio de Energía y Minas (MINEM).',
        'Disminución directa de la huella de carbono organizacional.'
      ]
    },
    scope: [
      'Levantamiento de campo de cargas eléctricas, hornos, calderas, compresores y climatización.',
      'Instalación de analizadores de redes de alta precisión en alimentadores principales.',
      'Construcción de la línea base energética e indicadores de desempeño (IDEn).',
      'Modelado de balances de masa y energía por subsistema operativo.',
      'Identificación de medidas de mejora sin inversión (buenas prácticas) y con inversión (Capex).'
    ],
    benefits: [
      {
        title: 'Optimización de Costos',
        description: 'Detección inmediata de fugas energéticas y sobreconsumos en horas punta tarifarias.',
        iconName: 'TrendingDown'
      },
      {
        title: 'Cumplimiento Normativo',
        description: 'Alineación rigurosa con la Ley N° 27345 de Promoción del Uso Eficiente de la Energía en Perú.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Retorno de Inversión Claro',
        description: 'Proyecciones financieras robustas para cada propuesta técnica de modernización.',
        iconName: 'BadgePercent'
      }
    ],
    applications: [
      'Plantas Industriales Metalmecánicas y Químicas',
      'Unidades Mineras y Plantas Concentradoras',
      'Agroindustrias y Procesadoras de Alimentos',
      'Centros Comerciales y Edificios Corporativos'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico Preliminar', description: 'Revisión de facturación histórica, diagramas unifilares y régimen de operación.' },
      { step: 2, title: 'Análisis y Mediciones', description: 'Campañas de registro en campo con instrumentación calibrada de clase A.' },
      { step: 3, title: 'Evaluación Técnica', description: 'Procesamiento de datos, balances energéticos y cruce con curvas de producción.' },
      { step: 4, title: 'Propuesta de Mejoras', description: 'Diseño conceptual de soluciones técnicas y viabilidad técnico-económica.' },
      { step: 5, title: 'Implementación Guiada', description: 'Acompañamiento en la adquisición y calibración de equipamiento eficiente.' },
      { step: 6, title: 'Verificación de Ahorros', description: 'Protocolo de medición y verificación (IPMVP) para contrastar resultados reales.' }
    ],
    technicalTags: ['Auditoría Nivel III ASHRAE', 'Línea Base', 'IDEn', 'Balance de Potencia', 'Norma ISO 50002']
  },
  {
    id: 'diagnostico-energetico',
    slug: 'diagnostico-energetico',
    areaId: 'gestion-energia',
    name: 'Diagnóstico Energético',
    shortDescription: 'Evaluación ágil y exhaustiva del comportamiento energético de instalaciones, procesos térmicos y eléctricos para detectar oportunidades inmediatas.',
    impactPhrase: 'Conozca con exactitud matemática el perfil de uso energético de toda su infraestructura productiva.',
    badge: 'Diagnóstico Rápido',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Un servicio especializado de prospección técnica y termografía aplicada que evalúa la madurez energética y el estado operativo de los equipos principales.',
      purpose: 'Establecer un mapa térmico y eléctrico de criticidad para corregir desbalances, caídas de tensión y anomalías térmicas antes de que originen paradas imprevistas.',
      problemSolved: 'Identifica sobrecargas invisibles en tableros de distribución, armónicos perjudiciales y desaprovechamiento de subestaciones transformadoras.',
      clientBenefits: [
        'Detección temprana de puntos calientes mediante termografía infrarroja calibrada.',
        'Determinación precisa del perfil de carga en regímenes de máxima demanda.',
        'Recomendaciones prácticas de rápida ejecución (Quick-Wins).'
      ]
    },
    scope: [
      'Inspección termográfica de tableros generales, centros de control de motores y transformadores.',
      'Monitoreo instantáneo de variables de potencia (kW, kVA, kVAr, cos φ).',
      'Evaluación del estado de aislamiento y condiciones mecánicas de motores eléctricos.',
      'Emisión de informe técnico ejecutivo con matriz de criticidad y planes de acción.'
    ],
    benefits: [
      {
        title: 'Prevención de Fallas',
        description: 'Localización de conexiones flojas, fusibles desbalanceados y devanados recalentados.',
        iconName: 'AlertTriangle'
      },
      {
        title: 'Decisiones Basadas en Datos',
        description: 'Informes con registros continuos y correlación con el ciclo operativo de planta.',
        iconName: 'BarChart3'
      },
      {
        title: 'Optimización de Capacidad',
        description: 'Recuperación de capacidad instalada en transformadores y conductores saturados.',
        iconName: 'Zap'
      }
    ],
    applications: [
      'Centros de Datos y Telecomunicaciones',
      'Plantas Manufactureras y Plásticas',
      'Infraestructura Hospitalaria',
      'Puertos y Almacenes Logísticos'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico Visual y Planos', description: 'Inspección de cuartos eléctricos y diagramas unifilares.' },
      { step: 2, title: 'Análisis Termográfico y Eléctrico', description: 'Barrido térmico y captura de oscilaciones de tensión.' },
      { step: 3, title: 'Evaluación de Rendimiento', description: 'Comparativa frente a estándares de operación nominal del fabricante.' },
      { step: 4, title: 'Propuesta de Ajustes', description: 'Redistribución de fases y reconfiguración de horarios de operación.' },
      { step: 5, title: 'Implementación Inmediata', description: 'Reajuste de bornes y corrección de desbalances menores.' },
      { step: 6, title: 'Verificación Post-Ajuste', description: 'Nuevo escaneo térmico de control y cierre de brechas.' }
    ],
    technicalTags: ['Termografía Infrarroja', 'Desbalance de Fases', 'Factor de Carga', 'Quick Wins']
  },
  {
    id: 'estudio-calidad-energia',
    slug: 'estudio-calidad-de-energia',
    areaId: 'gestion-energia',
    name: 'Estudio de Calidad de Energía',
    shortDescription: 'Monitoreo y análisis de perturbaciones, armónicos, flickers, transitorios y factor de potencia conforme a la NTCSE y estándares IEEE 519.',
    impactPhrase: 'Garantice energía limpia, sin armónicos ni caídas de tensión que dañen su electrónica sensible.',
    badge: 'Norma NTCSE',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Estudio técnico normado que registra las anomalías de la forma de onda de tensión y corriente en instalaciones eléctricas de Media y Baja Tensión.',
      purpose: 'Verificar la conformidad con la Norma Técnica de Calidad de los Servicios Eléctricos (NTCSE) y el Código Nacional de Electricidad, diseñando filtros y bancos de condensadores adecuados.',
      problemSolved: 'Soluciona disparos intempestivos de interruptores, quema de variadores de velocidad (VFD), sobrecalentamiento de cables neutros y penalizaciones por energía reactiva.',
      clientBenefits: [
        'Eliminación total de penalidades por mal factor de potencia (cos φ < 0.96).',
        'Prolongación de la vida útil de motores, transformadores y equipos electrónicos.',
        'Prevención de caídas de servidores y sistemas SCADA industriales.'
      ]
    },
    scope: [
      'Instalación de analizadores de calidad de energía Clase A durante 7 días continuos (ciclo NTCSE).',
      'Medición de Distorsión Armónica Total de Tensión (THDv) y Corriente (THDi) hasta el armónico 50.',
      'Análisis de Sags, Swells, Transitorios, Interrupciones y Desbalances de Tensión.',
      'Diseño y especificación técnica de Filtros de Armónicos Activos (APF) y Pasivos.',
      'Cálculo de Bancos de Condensadores automáticos con reactancias desintonizadas.'
    ],
    benefits: [
      {
        title: 'Conformidad con OSINERGMIN',
        description: 'Informes con validez pericial y cumplimiento estricto del marco regulatorio peruano.',
        iconName: 'FileCheck'
      },
      {
        title: 'Protección de Automatización',
        description: 'Blindaje de PLCs, robótica, servomotores y sistemas informáticos.',
        iconName: 'Cpu'
      },
      {
        title: 'Supresión de Armónicos',
        description: 'Eliminación de resonancias perjudiciales en la red de distribución interna.',
        iconName: 'Activity'
      }
    ],
    applications: [
      'Industria Farmacéutica y Laboratorios',
      'Plantas Siderúrgicas y Fundiciones',
      'Líneas de Envasado Automatizadas',
      'Estaciones de Bombeo y Tratamiento de Agua'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Red', description: 'Revisión del punto de acoplamiento común (PCC) y cargas no lineales.' },
      { step: 2, title: 'Análisis de Espectro Armónico', description: 'Registro continuo de 168 horas con muestreo de alta frecuencia.' },
      { step: 3, title: 'Evaluación vs. IEEE 519', description: 'Cálculo de distorsión de demanda total (TDD) y margen de seguridad.' },
      { step: 4, title: 'Propuesta de Filtrado', description: 'Simulación de flujo de armónicos y dimensionamiento de filtros.' },
      { step: 5, title: 'Implementación de Filtros', description: 'Suministro, montaje e interconexión de equipos de mitigación.' },
      { step: 6, title: 'Verificación y Calidad Final', description: 'Validación de THD < 5% y certificación final de calidad de onda.' }
    ],
    technicalTags: ['NTCSE', 'IEEE 519', 'THDv / THDi', 'Filtros Activos', 'Transitorios', 'Bancos Desintonizados']
  },
  {
    id: 'potencial-energias-renovables',
    slug: 'evaluacion-potencial-energias-renovables',
    areaId: 'gestion-energia',
    name: 'Evaluación del Potencial de Energías Renovables',
    shortDescription: 'Estudio técnico-económico de viabilidad para la integración de sistemas solares fotovoltaicos, solar térmico y eólico en instalaciones corporativas e industriales.',
    impactPhrase: 'Aproveche los recursos naturales inagotables para alcanzar independencia energética y sostenibilidad real.',
    badge: 'Sostenibilidad',
    heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Evaluación de ingeniería para cuantificar el recurso solar o eólico disponible en la ubicación del cliente y dimensionar sistemas de autogeneración.',
      purpose: 'Modelar la curva de generación renovable frente a la curva horaria de demanda de la planta para diseñar la arquitectura óptima On-Grid, Off-Grid o Híbrida con almacenamiento en baterías (BESS).',
      problemSolved: 'Reduce la alta dependencia de la red eléctrica convencional, mitiga riesgos de incremento tarifario y cumple metas corporativas ESG de descarbonización.',
      clientBenefits: [
        'Ahorro de hasta un 60% en la factura energética en horas de mayor radiación.',
        'Certificación de origen 100% renovable y reducción auditada de emisiones de CO2.',
        'Protección ante cortes de red mediante sistemas híbridos con almacenamiento (BESS).'
      ]
    },
    scope: [
      'Análisis de irradiación solar global horizontal (GHI) y directa (DNI) con bases satelitales calibradas.',
      'Inspección estructural de cubiertas, terrenos y capacidades de soporte de peso.',
      'Simulación energética horaria anualizada utilizando software de modelado de última generación.',
      'Estudio de interconexión eléctrica al tablero general o subestación MT existente.',
      'Análisis financiero integral: LCOE (Costo Nivelado de la Energía), Payback y TIR.'
    ],
    benefits: [
      {
        title: 'Energía Limpia y Limpia',
        description: 'Aporte sustancial a la transición energética con impacto ambiental directo y medible.',
        iconName: 'Leaf'
      },
      {
        title: 'Estabilidad de Tarifas',
        description: 'Costo fijo y predecible de generación propia a más de 25 años de vida útil.',
        iconName: 'DollarSign'
      },
      {
        title: 'Autonomía Energética',
        description: 'Respaldo frente a interrupciones del sistema eléctrico interconectado.',
        iconName: 'Sun'
      }
    ],
    applications: [
      'Techos de Almacenes Logísticos e Industriales',
      'Fundos Agrícolas y Campamentos Mineros',
      'Hoteles, Resorts y Universidades',
      'Estaciones de Servicio y Plantas de Procesamiento'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico Geográfico y Espacial', description: 'Levantamiento topográfico y evaluación de sombras 3D.' },
      { step: 2, title: 'Análisis de Recurso Solar/Eólico', description: 'Correlación de bases meteorológicas y mediciones en sitio.' },
      { step: 3, title: 'Evaluación de Generación y Pérdidas', description: 'Simulación de rendimiento considerando degradación y temperatura.' },
      { step: 4, title: 'Propuesta de Configuración Óptima', description: 'Selección de módulos bifaciales, inversores string/central y estructura.' },
      { step: 5, title: 'Implementación del Proyecto EPC', description: 'Supervisión de montaje mecánico, cableado DC/AC y puesta en marcha.' },
      { step: 6, title: 'Verificación y Monitoreo Remoto', description: 'Comisionamiento según IEC 62446 e integración al SCADA/Cloud.' }
    ],
    technicalTags: ['Solar FV', 'BESS Almacenamiento', 'On-Grid / Off-Grid', 'LCOE', 'Generación Distribuida']
  },
  {
    id: 'sistemas-iso-50001',
    slug: 'implementacion-sistemas-iso-50001',
    areaId: 'gestion-energia',
    name: 'Implementación de Sistemas de Gestión de la Energía ISO 50001',
    shortDescription: 'Asesoría y estructuración metodológica integral para el diseño, despliegue y certificación de un Sistema de Gestión de la Energía bajo la norma internacional ISO 50001:2018.',
    impactPhrase: 'Institucionalice la cultura de eficiencia energética con estándares internacionales de clase mundial.',
    badge: 'Certificación Global',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Un proceso estructurado de consultoría técnica y organizacional que alinea los procesos operativos de la empresa con los requisitos de la norma ISO 50001.',
      purpose: 'Lograr una mejora continua y sistemática del desempeño energético, incluyendo la eficiencia energética, el uso y el consumo de la energía en toda la organización.',
      problemSolved: 'Evita que las iniciativas de ahorro energético sean aisladas o temporales, convirtiéndolas en un proceso corporativo permanente y medible.',
      clientBenefits: [
        'Acompañamiento integral hasta la obtención exitosa del certificado ISO 50001.',
        'Mejora continua del desempeño energético con reducciones acumulativas año tras año.',
        'Mayor valor reputacional y acceso a licitaciones internacionales exigentes en sostenibilidad.'
      ]
    },
    scope: [
      'Diagnóstico de brechas (Gap Analysis) frente a los requisitos de ISO 50001:2018.',
      'Definición de la Política Energética y conformación del Comité de Gestión de Energía.',
      'Realización de la Revisión Energética y determinación de los Usos Significativos de la Energía (USE).',
      'Establecimiento de la Línea Base Energética (LBEn) e Indicadores de Desempeño Energético (IDEn).',
      'Formulación de planes de acción y programas de capacitación y sensibilización al personal.',
      'Auditoría interna de precertificación y acompañamiento en la auditoría con la entidad certificadora.'
    ],
    benefits: [
      {
        title: 'Estructura Corporativa',
        description: 'Gobernanza clara sobre los costos energéticos en todos los niveles jerárquicos.',
        iconName: 'Building'
      },
      {
        title: 'Sostenibilidad Demostrable',
        description: 'Acreditación formal ante clientes, accionistas y organismos reguladores.',
        iconName: 'Award'
      },
      {
        title: 'Mejora Continua',
        description: 'Metodología PHVA (Planificar, Hacer, Verificar, Actuar) aplicada a la energía.',
        iconName: 'RefreshCw'
      }
    ],
    applications: [
      'Grandes Consumidores Industriales y Mineros',
      'Empresas de Transporte y Flotas Pesadas',
      'Cadenas de Supermercados y Centros de Distribución',
      'Corporaciones Multinacionales con Metas Net Zero'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Brechas', description: 'Mapeo de la situación actual y alineación de compromisos de la alta dirección.' },
      { step: 2, title: 'Análisis de Usos Significativos (USE)', description: 'Modelado estadístico y normalización de variables relevantes (producción, clima).' },
      { step: 3, title: 'Evaluación de Objetivos y Metas', description: 'Definición de metas cuantitativas de ahorro y asignación de recursos.' },
      { step: 4, title: 'Propuesta de Procedimientos y Controles', description: 'Elaboración de manuales, criterios de compra eficiente y diseño operacional.' },
      { step: 5, title: 'Implementación y Sensibilización', description: 'Despliegue de capacitaciones a operadores y supervisores en planta.' },
      { step: 6, title: 'Verificación y Auditoría Externa', description: 'Auditoría interna cruzada y soporte durante la certificación oficial.' }
    ],
    technicalTags: ['ISO 50001:2018', 'Usos Significativos USE', 'LBEn / IDEn', 'Ciclo PHVA', 'Auditoría Energética']
  },
  {
    id: 'diseno-proyectos-ahorro-energetico',
    slug: 'diseno-proyectos-ahorro-energetico',
    areaId: 'gestion-energia',
    name: 'Diseño de Proyectos de Ahorro Energético',
    shortDescription: 'Ingeniería conceptual, básica y de detalle para proyectos de sustitución tecnológica, recuperación de calor residual, variadores y optimización motriz.',
    impactPhrase: 'Transformamos oportunidades de ahorro en proyectos de ingeniería ejecutables y rentables.',
    badge: 'Ingeniería de Detalle',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Desarrollo de expedientes técnicos de ingeniería para la modernización de sistemas consumidores de energía de alto impacto.',
      purpose: 'Asegurar que cada proyecto cuente con especificaciones de equipamiento precisas, planos eléctricos, memorias de cálculo y planes de montaje sin interrumpir la operación.',
      problemSolved: 'Elimina el riesgo de comprar equipamiento sobredimensionado o incompatible con la red eléctrica existente.',
      clientBenefits: [
        'Expedientes técnicos listos para licitación o ejecución directa.',
        'Garantía de desempeño energético calculada mediante modelos termodinámicos y eléctricos.',
        'Mínimo tiempo de intervención en paradas de planta programadas.'
      ]
    },
    scope: [
      'Ingeniería de detalle para sistemas de recuperación de calor residual en calderas y hornos.',
      'Diseño de sistemas de control inteligente para iluminación industrial (DALI / Zigbee) y HVAC.',
      'Dimensionamiento e interconexión de variadores de frecuencia de media y baja tensión para bombas y ventiladores.',
      'Automatización de la gestión de la demanda eléctrica y recorte de picos (Peak Shaving).'
    ],
    benefits: [
      {
        title: 'Precisión Técnica',
        description: 'Cálculos validados con software especializado de simulación de redes y fluidos.',
        iconName: 'CheckCircle2'
      },
      {
        title: 'Ahorro Operativo Directo',
        description: 'Disminución drástica del consumo en sistemas auxiliares de alta intensidad.',
        iconName: 'PiggyBank'
      },
      {
        title: 'Cero Riesgo Operacional',
        description: 'Planes de contingencia y redundancia integrados en el diseño.',
        iconName: 'Shield'
      }
    ],
    applications: [
      'Sistemas de Aire Comprimido Industrial',
      'Redes de Vapor y Agua Helada',
      'Circuitos de Molienda y Chancado',
      'Sistemas de Ventilación en Minería Subterránea'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de la Necesidad', description: 'Identificación precisa del cuello de botella energético.' },
      { step: 2, title: 'Análisis de Alternativas Tecnológicas', description: 'Comparativa de marcas, eficiencias IE3/IE4/IE5 y arquitectura.' },
      { step: 3, title: 'Evaluación Financiera (Capex/Opex)', description: 'Evaluación del costo del ciclo de vida (LCC) del activo.' },
      { step: 4, title: 'Propuesta de Ingeniería Completa', description: 'Entrega de planos en CAD, diagramas de control y listado de materiales.' },
      { step: 5, title: 'Implementación y Supervisión', description: 'Supervisión en campo durante el montaje electromecánico.' },
      { step: 6, title: 'Verificación de Performance', description: 'Comisionamiento y contraste de curvas de consumo antes y después.' }
    ],
    technicalTags: ['Ingeniería Detalle', 'Variadores VFD', 'Recuperación Calor', 'Peak Shaving', 'Motores IE4/IE5']
  },
  {
    id: 'diseno-proyectos-energias-renovables',
    slug: 'diseno-proyectos-energias-renovables',
    areaId: 'gestion-energia',
    name: 'Diseño de Proyectos de Energías Renovables',
    shortDescription: 'Ingeniería integral para plantas solares sobre suelo o cubierta, parques eólicos y microrredes con almacenamiento electroquímico.',
    impactPhrase: 'Proyectos renovables bancables, diseñados bajo las más exigentes normas internacionales de ingeniería.',
    badge: 'Proyectos Renovables',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Ingeniería multidisciplinaria (civil, estructural, eléctrica y de comunicaciones) para la construcción de centrales de generación con fuentes limpias.',
      purpose: 'Garantizar la máxima generación energética por kilovatio pico instalado, optimizando el CAPEX y asegurando la vida útil superior a 25 años.',
      problemSolved: 'Evita fallas estructurales por viento o sismo, pérdidas por desajuste térmico (mismatch) y problemas de inyección a la red de distribución.',
      clientBenefits: [
        'Proyectos listos para financiamiento bancario (Bankable Quality).',
        'Optimización de la relación DC/AC para maximizar el factor de planta.',
        'Trámites de acceso y conexión gestionados ante las empresas distribuidoras.'
      ]
    },
    scope: [
      'Ingeniería básica y de detalle de campos fotovoltaicos y salas de inversores.',
      'Diseño de subestaciones elevadoras y líneas de evacuación de media tensión.',
      'Cálculo de sistemas de puesta a tierra y protección contra descargas atmosféricas.',
      'Integración con sistemas SCADA y telemetría en tiempo real bajo protocolos DNP3 / Modbus TCP.'
    ],
    benefits: [
      {
        title: 'Bancarabilidad',
        description: 'Documentación técnica con estándares exigidos por fondos de inversión y entidades financieras.',
        iconName: 'BadgeCheck'
      },
      {
        title: 'Máximo Rendimiento',
        description: 'Diseño térmico optimizado para climas de costa, sierra y selva peruana.',
        iconName: 'SunMedium'
      },
      {
        title: 'Conexión Segura',
        description: 'Estudios de operatividad y flujo de potencia para inyección sin disturbios.',
        iconName: 'Network'
      }
    ],
    applications: [
      'Plantas Solares Utility Scale e Industriales',
      'Sistemas Agrovoltaicos y Bombeo Solar',
      'Microrredes Aisladas con BESS',
      'Instalaciones Flotantes en Reservorios'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Sitio y Permisología', description: 'Revisión de títulos de propiedad, zonificación y restricciones ambientales.' },
      { step: 2, title: 'Análisis de Red Eléctrica Receptora', description: 'Capacidad de cortocircuito y estudios de rechazo de carga.' },
      { step: 3, title: 'Evaluación y Optimización 3D', description: 'Diseño en software de simulación con cálculo de albedo y sombreado.' },
      { step: 4, title: 'Propuesta de Especificaciones Técnicas', description: 'Selección de trackers 1P/2P, estructuras fijas y cables fotovoltaicos solares.' },
      { step: 5, title: 'Implementación y Dirección de Obra', description: 'Control de calidad del hincado, torque de pernos y pruebas de aislamiento.' },
      { step: 6, title: 'Verificación y Ensayos PR', description: 'Medición de la Tasa de Rendimiento (Performance Ratio) inicial y entrega final.' }
    ],
    technicalTags: ['Fotovoltaica EPC', 'BESS Almacenamiento', 'Performance Ratio', 'Estudios de Conexión', 'SCADA Solar']
  },

  // =========================================================================
  // ÁREA 02: CONSULTORÍAS EN GESTIÓN DE MANTENIMIENTO
  // =========================================================================
  {
    id: 'consultorias-acr',
    slug: 'consultorias-en-acr-analisis-causa-raiz',
    areaId: 'gestion-mantenimiento',
    name: 'Consultorías en ACR (Análisis de Causa Raíz)',
    shortDescription: 'Metodología científica rigurosa para identificar los factores físicos, humanos y latentes que provocan fallas repetitivas o catastróficas en activos críticos.',
    impactPhrase: 'Prevenir una falla recurrente siempre cuesta mucho menos que detener una línea de producción entera.',
    badge: 'Confiabilidad Crítica',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Un proceso estructurado de investigación técnica para determinar por qué ocurrió un evento no deseado en equipos electromecánicos de alta exigencia.',
      purpose: 'Eliminar de forma definitiva las fallas repetitivas, implementando acciones correctivas de fondo en el diseño, la operación o el mantenimiento.',
      problemSolved: 'Resuelve la dependencia del "mantenimiento bomberil" o correctivo de emergencia, donde se reparan síntomas pero la causa raíz persiste.',
      clientBenefits: [
        'Aumento directo de la disponibilidad operativa (MTBF) de maquinaria crítica.',
        'Eliminación de gastos recurrentes en repuestos costosos y horas hombre de emergencia.',
        'Lecciones aprendidas incorporadas a los estándares de operación de la empresa.'
      ]
    },
    scope: [
      'Facilitación y liderazgo de sesiones de ACR con metodologías árbol de fallas (FTA), 5 Porqués y Diagrama de Ishikawa.',
      'Inspección fractográfica y análisis de modo de falla en componentes mecánicos y eléctricos.',
      'Revisión de datos de telemetría, alarmas SCADA e historiales de lubricación/vibración.',
      'Emisión de informe pericial con plan de acciones correctivas ponderadas por impacto/costo.'
    ],
    benefits: [
      {
        title: 'Solución Definitiva',
        description: 'Erradicación permanente de los modos de falla crónicos que perjudican el OEE de planta.',
        iconName: 'CheckCheck'
      },
      {
        title: 'Ahorro en Repuestos',
        description: 'Reducción drástica en el recambio prematuro de componentes electromecánicos.',
        iconName: 'Layers'
      },
      {
        title: 'Cultura de Confiabilidad',
        description: 'Capacitación al equipo interno en pensamiento analítico basado en evidencias.',
        iconName: 'Users'
      }
    ],
    applications: [
      'Transformadores y Grupos Electrógenos de Respaldo',
      'Motores de Media Tensión y Molinos de Molienda',
      'Compresores de Gran Capacidad y Turbinas',
      'Sistemas de Bombeo Principal de Relaves y Agua'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico y Preservación de Evidencias', description: 'Levantamiento fotográfico, custodia de piezas fracturadas y recopilación de logs.' },
      { step: 2, title: 'Análisis del Modo de Falla', description: 'Construcción de la cronología del evento y determinación de la falla primaria.' },
      { step: 3, title: 'Evaluación Causal en Árbol', description: 'Identificación de causas físicas, de proceso y organizacionales/sistémicas.' },
      { step: 4, title: 'Propuesta de Soluciones de Fondo', description: 'Diseño de contramedidas técnicas a prueba de error (Poka-Yoke).' },
      { step: 5, title: 'Implementación de Estándares', description: 'Actualización de hojas de ruta de mantenimiento y especificación de compras.' },
      { step: 6, title: 'Verificación de Efectividad', description: 'Seguimiento trimestral para confirmar cero recurrencia del evento analizado.' }
    ],
    technicalTags: ['ACR / RCA', 'Árbol de Fallas (FTA)', 'MTBF / MTTR', 'Investigación Pericial', 'Confiabilidad']
  },
  {
    id: 'planes-de-contingencia',
    slug: 'planes-de-contingencia',
    areaId: 'gestion-mantenimiento',
    name: 'Planes de Contingencia Operativa y Energética',
    shortDescription: 'Elaboración y actualización de planes de contingencia para continuidad operativa frente a emergencias eléctricas, incendios o desastres naturales.',
    impactPhrase: 'Resiliencia operativa garantizada: su empresa lista para actuar con precisión en cualquier escenario de emergencia.',
    badge: 'Continuidad de Negocio',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Documento técnico-operativo que define protocolos claros de acción inmediata ante eventos imprevistos que puedan interrumpir el suministro eléctrico o la operación productiva.',
      purpose: 'Minimizar los tiempos de parada no programada, salvaguardar la vida del personal y proteger los activos estratégicos de la organización.',
      problemSolved: 'Evita la improvisación y el pánico durante emergencias, delimitando responsabilidades y secuencias seguras de maniobra eléctrica.',
      clientBenefits: [
        'Reducción al mínimo del tiempo de recuperación (RTO) ante cortes intempestivos.',
        'Cumplimiento con las auditorías de INDECI, OSINERGMIN y compañías aseguradoras.',
        'Roles y cadenas de comando claras para los brigadistas y personal de mantenimiento.'
      ]
    },
    scope: [
      'Evaluación de vulnerabilidad de la infraestructura eléctrica y rutas críticas de alimentación.',
      'Diseño de protocolos de maniobra segura para conmutación de grupos electrógenos y subestaciones.',
      'Estrategias de aprovisionamiento de repuestos de contingencia (motores sustitutos, cables de emergencia).',
      'Elaboración de cartillas de acción rápida para operadores y realización de simulacros guiados.'
    ],
    benefits: [
      {
        title: 'Respuesta Rápida',
        description: 'Tiempos de reposición de energía estandarizados y medidos.',
        iconName: 'Clock'
      },
      {
        title: 'Protección de Activos',
        description: 'Evita maniobras incorrectas que puedan provocar arcos eléctricos o explosiones.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Conformidad Legal',
        description: 'Alineado con las directivas del Sistema Nacional de Gestión del Riesgo de Desastres.',
        iconName: 'FileText'
      }
    ],
    applications: [
      'Plantas con Procesos Continuos No Interrumpibles',
      'Hospitales, Clínicas y Centros de Cirugía',
      'Centros de Cómputo y Bancos',
      'Complejos Comerciales e Inmuebles de Alto Tránsito'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Vulnerabilidad', description: 'Inspección de sistemas de respaldo (UPS, generadores, transferencias automáticas).' },
      { step: 2, title: 'Análisis de Riesgos y Escenarios', description: 'Matriz de criticidad de eventos (sismos, inundaciones, colapso de transformadores).' },
      { step: 3, title: 'Evaluación de Procedimientos Actuales', description: 'Revisión de tiempos de respuesta históricos y disponibilidad de repuestos.' },
      { step: 4, title: 'Propuesta de Procedimientos de Emergencia', description: 'Redacción de procedimientos operativos estandarizados (POE) de contingencia.' },
      { step: 5, title: 'Implementación y Simulacros', description: 'Entrenamiento teórico-práctico a brigadas de mantenimiento eléctrico.' },
      { step: 6, title: 'Verificación y Auditoría Anual', description: 'Actualización periódica de contactos de soporte y pruebas de carga real.' }
    ],
    technicalTags: ['Continuidad de Negocio', 'Planes de Emergencia', 'Maniobras Seguras', 'INDECI', 'Respaldo Eléctrico']
  },
  {
    id: 'gestion-integral-mantenimiento',
    slug: 'gestion-integral-de-mantenimiento',
    areaId: 'gestion-mantenimiento',
    name: 'Gestión Integral de Mantenimiento',
    shortDescription: 'Modernización del área de mantenimiento: inventario de activos, levantamiento de planos eléctricos, procedimientos, estrategias y Mantenimiento Centrado en Confiabilidad (MCC/RCM).',
    impactPhrase: 'Transformamos el mantenimiento de un centro de costos reactivo en un motor de rentabilidad y alta disponibilidad.',
    badge: 'Gestión de Activos',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Un paquete completo de ingeniería de confiabilidad y consultoría organizacional para estructurar y digitalizar la gestión de mantenimiento industrial.',
      purpose: 'Establecer planes de mantenimiento preventivo y predictivo orientados a los modos de falla reales de los equipos, garantizando máxima confiabilidad de los activos.',
      problemSolved: 'Corrige la desorganización documental, la ausencia de planos actualizados, la falta de repuestos estratégicos y las rutinas ineficientes.',
      clientBenefits: [
        'Disponibilidad global de planta superior al 95%.',
        'Planos eléctricos unifilares y de fuerza 100% actualizados conforme a norma.',
        'Catálogo e inventario digital de activos codificado y valorizado para CMMS/ERP.'
      ]
    },
    scope: [
      'Levantamiento "As-Built" de planos eléctricos y diagramas unifilares en AutoCAD/EPLAN.',
      'Inventario y jerarquización de activos bajo norma ISO 14224.',
      'Desarrollo de planes de Mantenimiento Centrado en Confiabilidad (RCM / MCC).',
      'Actualización de Procedimientos Escritos de Trabajo Seguro (PETS) y cartillas de inspección.',
      'Diseño e implementación de tableros de control de KPIs (OEE, MTBF, MTTR, Backlog, PMP).'
    ],
    benefits: [
      {
        title: 'Planificación Eficaz',
        description: 'Transición del 80% reactivo a más del 85% de mantenimiento planificado y predictivo.',
        iconName: 'CalendarCheck'
      },
      {
        title: 'Trazabilidad Total',
        description: 'Toda la infraestructura eléctrica debidamente etiquetada, identificada y planificada.',
        iconName: 'FileSpreadsheet'
      },
      {
        title: 'Reducción de Costos',
        description: 'Eliminación de sobremantenimiento innecesario en equipos no críticos.',
        iconName: 'TrendingDown'
      }
    ],
    applications: [
      'Complejos Metalúrgicos y Fundiciones',
      'Industria Cementera y Cerámica',
      'Infraestructura Portuaria y Aeroportuaria',
      'Plantas Químicas y Petroleras'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Madurez de Mantenimiento', description: 'Evaluación bajo modelo de mejores prácticas mundiales de confiabilidad.' },
      { step: 2, title: 'Análisis de Criticidad de Activos', description: 'Matriz de consecuencias en seguridad, medio ambiente y producción.' },
      { step: 3, title: 'Evaluación y Levantamiento Físico', description: 'Inspección en campo, timbrado de cables y actualización de planos.' },
      { step: 4, title: 'Propuesta de Planes de Mantenimiento RCM', description: 'Definición de frecuencias, hojas de ruta y consumibles requeridos.' },
      { step: 5, title: 'Implementación en Software de Mantenimiento', description: 'Carga de planes y entrenamiento al equipo de planificadores.' },
      { step: 6, title: 'Verificación de Indicadores Clave', description: 'Monitoreo mensual de cumplimiento de programa y evolución de costos.' }
    ],
    technicalTags: ['RCM / MCC', 'ISO 14224', 'Planos As-Built', 'KPIs de Mantenimiento', 'Gestión de Activos']
  },
  {
    id: 'gestion-metrologica',
    slug: 'gestion-metrologica',
    areaId: 'gestion-mantenimiento',
    name: 'Gestión Metrológica y Calibraciones',
    shortDescription: 'Control integral del parque de instrumentos de medición: inventario, programación de calibraciones, estimación de incertidumbre y trazabilidad metrológica.',
    impactPhrase: 'Mediciones confiables y calibradas: la base indiscutible para la calidad y seguridad de sus operaciones.',
    badge: 'Precisión ISO 10012',
    heroImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Consultoría para la administración técnica y documental de todos los instrumentos de medición, inspección y ensayo eléctrico y mecánico.',
      purpose: 'Asegurar que todos los multímetros, telurómetros, analizadores de redes, pinzas amperimétricas y manómetros operen dentro de sus tolerancias permisibles.',
      problemSolved: 'Evita no conformidades en auditorías de calidad (ISO 9001, IATF 16949) y decisiones operativas erróneas basadas en instrumentos descalibrados.',
      clientBenefits: [
        'Trazabilidad asegurada hacia patrones nacionales (INACAL) e internacionales (NIST).',
        'Base de datos centralizada de certificados de calibración con alertas de vencimiento.',
        'Intervalos de calibración optimizados para evitar gastos innecesarios de laboratorio.'
      ]
    },
    scope: [
      'Levantamiento del inventario maestro de equipos e instrumentos de medición (EIM).',
      'Determinación de las tolerancias de proceso y criterios de aceptación metrológica.',
      'Elaboración del Programa Anual de Calibraciones y Verificaciones Intermedias.',
      'Gestión documental de certificados y cálculo de factores de corrección e incertidumbre.',
      'Capacitación en uso, almacenamiento y cuidados de instrumentación de precisión.'
    ],
    benefits: [
      {
        title: 'Cero No Conformidades',
        description: 'Auditorías de calidad y seguridad superadas con expedientes metrológicos intachables.',
        iconName: 'Award'
      },
      {
        title: 'Exactitud en Diagnósticos',
        description: 'Eliminación de falsos positivos en pruebas de aislamiento y rigidez dieléctrica.',
        iconName: 'Crosshair'
      },
      {
        title: 'Optimización de Costos',
        description: 'Programación de calibraciones agrupadas para economías de escala.',
        iconName: 'Coins'
      }
    ],
    applications: [
      'Laboratorios de Ensayo y Control de Calidad',
      'Contratistas de Montaje e Instalaciones Eléctricas',
      'Plantas Industriales con Certificación ISO 9001 / ISO 14001',
      'Empresas Generadoras y Distribuidoras de Energía'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico del Parque de Instrumentos', description: 'Inspección física del estado de conservación y placas de identificación.' },
      { step: 2, title: 'Análisis de Requisitos Metrológicos', description: 'Revisión de normativas aplicables y exactitud requerida en cada proceso.' },
      { step: 3, title: 'Evaluación de Proveedores de Calibración', description: 'Homologación de laboratorios acreditados bajo ISO/IEC 17025.' },
      { step: 4, title: 'Propuesta del Plan Maestro Metrológico', description: 'Cronograma automatizado de envíos a laboratorio y verificaciones.' },
      { step: 5, title: 'Implementación del Software de Control', description: 'Etiquetado metrológico con código QR en cada equipo.' },
      { step: 6, title: 'Verificación de Certificados', description: 'Revisión técnica de los errores máximos permitidos contra certificados emitidos.' }
    ],
    technicalTags: ['ISO 10012', 'ISO/IEC 17025', 'INACAL', 'Trazabilidad', 'Incertidumbre Metrológica']
  },
  {
    id: 'consultorias-sst',
    slug: 'consultorias-en-sst-seguridad-salud-trabajo',
    areaId: 'gestion-mantenimiento',
    name: 'Consultorías en SST y Seguridad en Riesgo Eléctrico',
    shortDescription: 'Especialistas en seguridad industrial: elaboración de IPERC, mapas de riesgo, planes MATPEL y entrenamientos avanzados en NFPA 70E para arco eléctrico.',
    impactPhrase: 'Cero accidentes eléctricos: salvaguardamos la vida de su personal con estándares internacionales de seguridad.',
    badge: 'Seguridad NFPA 70E',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Servicio de ingeniería de seguridad orientado a la prevención de riesgos graves en actividades con energía eléctrica y manejo de sustancias peligrosas.',
      purpose: 'Cumplir con la Ley N° 29783 de Seguridad y Salud en el Trabajo, el Reglamento de Seguridad y Salud en el Trabajo con Electricidad (RESESATE) y el estándar NFPA 70E.',
      problemSolved: 'Erradica prácticas inseguras en maniobras de media y alta tensión, previene electrocuciones, quemaduras por arco eléctrico y derrames de aceite dieléctrico.',
      clientBenefits: [
        'Protección total de la vida y salud del personal operativo y contratistas.',
        'Mitigación de contingencias legales, multas de SUNAFIL y paralizaciones de obra.',
        'Cálculo de energía incidente y especificación precisa de EPP dieléctrico y contra arco eléctrico.'
      ]
    },
    scope: [
      'Elaboración y actualización de matrices IPERC continuo y línea base para labores eléctricas.',
      'Diseño y señalización de Mapas de Riesgos conforme a normas técnicas peruanas.',
      'Planes de contingencia y protocolos para Transporte y Almacenamiento de MATPEL (PCB, aceites, SF6).',
      'Estudio de Arco Eléctrico (Arc Flash) y etiquetado de tableros según NFPA 70E / IEEE 1584.',
      'Capacitaciones teórico-prácticas en las 5 Reglas de Oro de la Electricidad y bloqueo LOTO.'
    ],
    benefits: [
      {
        title: 'Cultura de Cero Accidentes',
        description: 'Personal consciente, entrenado y empoderado para detener trabajos de alto riesgo.',
        iconName: 'HeartHandshake'
      },
      {
        title: 'Blindaje Legal y Normativo',
        description: 'Documentación al 100% auditable ante SUNAFIL, OSINERGMIN y OEFA.',
        iconName: 'Scale'
      },
      {
        title: 'Protección Integral MATPEL',
        description: 'Planes de respuesta rápida ante contingencias químicas y de hidrocarburos.',
        iconName: 'AlertOctagon'
      }
    ],
    applications: [
      'Subestaciones Eléctricas de Distribución y Transmisión',
      'Cuartos de Bombas y Salas de Compresores',
      'Obras de Montaje Electromecánico en Altura',
      'Plantas Industriales con Almacenamiento Químico'
    ],
    methodology: [
      { step: 1, title: 'Diagnóstico de Peligros en Terreno', description: 'Inspección de cuartos eléctricos, tableros y sistemas de bloqueo LOTO.' },
      { step: 2, title: 'Análisis Cuantitativo de Riesgos', description: 'Evaluación de severidad y probabilidad con matrices estandarizadas.' },
      { step: 3, title: 'Evaluación de EPP y Procedimientos', description: 'Verificación de ensayos de rigidez dieléctrica de guantes y banquetas.' },
      { step: 4, title: 'Propuesta de Medidas de Control', description: 'Jerarquía de controles: eliminación, sustitución, ingeniería y EPP.' },
      { step: 5, title: 'Implementación y Entrenamiento', description: 'Dictado de talleres prácticos de rescate en subestaciones y primeros auxilios.' },
      { step: 6, title: 'Verificación de Comportamientos', description: 'Auditorías de campo programadas y observación del trabajo seguro.' }
    ],
    technicalTags: ['NFPA 70E', 'RESESATE', 'IPERC Eléctrico', 'Bloqueo LOTO', 'Arc Flash', 'MATPEL']
  },

  // =========================================================================
  // ÁREA 03: MANTENIMIENTO DE SUBESTACIONES AT / MT / BT
  // =========================================================================
  {
    id: 'mantenimiento-pozos-tierra',
    slug: 'mantenimiento-de-pozos-a-tierra',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Mantenimiento de Sistemas de Puesta a Tierra',
    shortDescription: 'Medición de resistividad de terreno, mantenimiento químico/físico, reactivación de dosis ecológica y certificación de pozos a tierra según CNE y normas IEEE 80 / 81.',
    impactPhrase: 'Un sistema de puesta a tierra óptimo es el escudo definitivo para la vida de las personas y sus equipos sensibles.',
    badge: 'Certificado Válido',
    heroImage: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Servicio técnico especializado de evaluación, mantenimiento preventivo, reacondicionamiento y medición de la resistencia óhmica de pozos a tierra y mallas de subestaciones.',
      purpose: 'Garantizar que la resistencia del sistema cumpla los valores exigidos por el Código Nacional de Electricidad (≤ 25 Ω para BT, ≤ 5 Ω para subestaciones y ≤ 1 Ω para cómputo).',
      problemSolved: 'Evita tensiones de toque y paso peligrosas para el personal, descargas electrostáticas que quemen servidores y daños catastróficos por rayos.',
      clientBenefits: [
        'Certificado de operatividad firmado por Ingeniero Electricista Colegiado para INDECI.',
        'Dispersión segura e instantánea de corrientes de falla a tierra y rayos.',
        'Protección de la electrónica de control y sistemas de telecomunicaciones.'
      ]
    },
    scope: [
      'Medición de resistencia de puesta a tierra mediante telurómetro digital calibrado con método de caída de potencial (Wenner / Schlumberger).',
      'Excavación y retiro de tierra degradada o sulfatada alrededor del electrodo.',
      'Limpieza y lijado químico de la varilla de cobre electrolítico y cambio de conectores tipo AB o soldadura exotérmica (Cadweld).',
      'Aplicación de sales higroscópicas ecológicas (gel conductivo de larga duración) para reducir la resistividad del terreno.',
      'Emisión de protocolo de prueba de resistividad y certificado de operatividad formal.'
    ],
    benefits: [
      {
        title: 'Certificado Colegiado',
        description: 'Protocolo de medición oficial aceptado por municipalidades, INDECI y aseguradoras.',
        iconName: 'FileCheck2'
      },
      {
        title: 'Máxima Seguridad Personal',
        description: 'Eliminación del riesgo de electrocución por tensiones inducidas o fugas de corriente.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Baja Resistencia Estable',
        description: 'Formulaciones de geles conductivos con retención de humedad por más de 12 meses.',
        iconName: 'Gauge'
      }
    ],
    applications: [
      'Subestaciones Eléctricas de Media y Alta Tensión',
      'Data Centers y Salas de Servidores',
      'Ascensores y Sistemas de Bombeo de Edificios',
      'Antenas de Telecomunicación y Estaciones de Radio'
    ],
    methodology: [
      { step: 1, title: 'Inspección Inicial y Medición Test', description: 'Registro de valor óhmico actual antes de cualquier intervención.' },
      { step: 2, title: 'Apertura de Caja de Registro', description: 'Desconexión del puente de prueba y verificación de la varilla.' },
      { step: 3, title: 'Limpieza y Acondicionamiento', description: 'Eliminación de óxido de cobre y tratamiento del suelo perimetral.' },
      { step: 4, title: 'Tratamiento Químico', description: 'Inyección de componentes gelificados de alta conductividad.' },
      { step: 5, title: 'Reconexión Segura', description: 'Ajuste con torquímetro y aplicación de grasa grafitada anticorrosiva.' },
      { step: 6, title: 'Medición Final y Certificación', description: 'Toma de lectura final, registro fotográfico y firma del certificado.' }
    ],
    technicalTags: ['IEEE 81', 'CNE Suministro', 'Telurómetro Calibrado', 'Certificado INDECI', 'Soldadura Exotérmica']
  },
  {
    id: 'analisis-aceite-transformadores',
    slug: 'analisis-de-aceite-de-transformadores',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Análisis de Aceite Dieléctrico de Transformadores',
    shortDescription: 'Laboratorio especializado en análisis físico-químico, cromatografía de gases disueltos (DGA), contenido de humedad y rigidez dieléctrica según ASTM e IEC.',
    impactPhrase: 'El aceite dieléctrico es la sangre de su transformador: diagnosticamos su salud interna sin interrumpir la operación.',
    badge: 'Laboratorio ASTM/IEC',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Conjunto de ensayos de laboratorio normalizados realizados sobre muestras de aceite aislante (mineral, vegetal o silicón) extraídas de transformadores de potencia y distribución.',
      purpose: 'Detectar incipientes arcos eléctricos, sobrecalentamientos térmicos, degradación del papel aislante y presencia de humedad antes de una falla catastrófica.',
      problemSolved: 'Previene la explosión de transformadores, paradas no programadas de plantas completas y reparaciones de rebobinado sumamente costosas.',
      clientBenefits: [
        'Detección predictiva con meses de anticipación de fallas térmicas o eléctricas internas.',
        'Extensión comprobada de la vida útil del transformador por más de 10 a 15 años.',
        'Toma de decisiones fundamentada para procesos de termovacío, desgasificado o cambio de aceite.'
      ]
    },
    scope: [
      'Toma de muestra en campo bajo norma ASTM D923 con jeringas de vidrio herméticas.',
      'Ensayos Físico-Químicos: Rigidez Dieléctrica (ASTM D877/D1816), Tensión Interfacial, Acidez Total (Neutralización), Color y Contenido de Humedad Karl Fischer (ASTM D1533).',
      'Cromatografía de Gases Disueltos (DGA - ASTM D3612): Hidrógeno, Metano, Etano, Etileno, Acetileno, Monóxido y Dióxido de Carbono.',
      'Análisis de Furanos (HPLC - ASTM D5837) para estimar el Grado de Polimerización (GP) del papel aislante.',
      'Determinación de Contenido de PCBs (Bifenilos Policlorados) según normativa ambiental del MINAM.'
    ],
    benefits: [
      {
        title: 'Diagnóstico Sin Parada',
        description: 'Toma de muestras con el transformador energizado y en plena carga.',
        iconName: 'FlaskConical'
      },
      {
        title: 'Interpretación Experta',
        description: 'Informes con métodos de Triángulo de Duval, Razones de Rogers y Doernenburg.',
        iconName: 'Microscope'
      },
      {
        title: 'Plan de Tratamiento',
        description: 'Recomendaciones concretas de regeneración, secado y filtrado por termovacío.',
        iconName: 'Filter'
      }
    ],
    applications: [
      'Transformadores de Potencia en Centrales de Generación',
      'Transformadores de Distribución en Subestaciones Industriales',
      'Transformadores de Hornos de Arco y Tracción',
      'Bancos de Transformadores Monofásicos y Trafomix'
    ],
    methodology: [
      { step: 1, title: 'Inspección Visual del Transformador', description: 'Revisión de nivel de aceite, silicagel, temperatura de cuba y devanados.' },
      { step: 2, title: 'Toma de Muestras Estandarizada', description: 'Purga de válvula y extracción libre de burbujas de aire y contaminación.' },
      { step: 3, title: 'Ensayos en Laboratorio Calibrado', description: 'Ejecución de pruebas fisicoquímicas y cromatográficas.' },
      { step: 4, title: 'Modelado y Diagnóstico Predictivo', description: 'Evaluación del índice de calidad del aceite y generación de gases.' },
      { step: 5, title: 'Propuesta de Intervención', description: 'Planificación de secado de celulosa o reacondicionamiento dieléctrico.' },
      { step: 6, title: 'Seguimiento y Registro de Tendencias', description: 'Actualización de la hoja de vida histórica de cada transformador.' }
    ],
    technicalTags: ['ASTM D3612 (DGA)', 'Triángulo de Duval', 'Karl Fischer', 'Rigidez Dieléctrica', 'Furanos', 'PCBs']
  },
  {
    id: 'mantenimiento-interruptores-at-mt-bt',
    slug: 'mantenimiento-especializado-de-interruptores',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Mantenimiento Especializado de Interruptores (AT / MT / BT)',
    shortDescription: 'Inspección, pruebas de simultaneidad, tiempos de apertura/cierre, resistencia de contactos (microóhmetro) y mantenimiento de mecanismos en interruptores en SF6, vacío y aire.',
    impactPhrase: 'Los interruptores son el corazón de la protección eléctrica: asegure su apertura infalible ante cualquier cortocircuito.',
    badge: 'Protección Crítica',
    heroImage: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Servicio integral de mantenimiento preventivo, predictivo y correctivo para interruptores de potencia en Alta Tensión (AT), Media Tensión (MT) y Baja Tensión (BT).',
      purpose: 'Comprobar que los mecanismos mecánicos de resortes, bobinas de disparo y cámaras de extinción de arco operen en los milisegundos exactos de diseño.',
      problemSolved: 'Evita fallas catastróficas por sobrecorrientes que no sean despejadas a tiempo, impidiendo incendios en celdas y destrucción de transformadores.',
      clientBenefits: [
        'Garantía de despeje instantáneo ante fallas trifásicas o monofásicas.',
        'Pruebas de simultaneidad de polos con equipos de inyección de última generación.',
        'Prolongación de la vida útil de los mecanismos de accionamiento.'
      ]
    },
    scope: [
      'Medición de resistencia estática y dinámica de contactos principales (inyección de 100A/200A DC).',
      'Pruebas de tiempos de apertura, cierre, simultaneidad de polos y discrepancia de polos.',
      'Medición de resistencia de aislamiento en bornes y cámaras de corte.',
      'Mantenimiento de mecanismos motorizados de carga de resortes, microinterruptores y engranajes.',
      'Monitoreo de presión y estanqueidad de gas SF6 o verificación de botellas de vacío.',
      'Pruebas de disparo mediante relés de protección y fuentes secundarias.'
    ],
    benefits: [
      {
        title: 'Tiempos Exactos en ms',
        description: 'Registro de curvas de velocidad y recorrido de contactos con cronómetro digital.',
        iconName: 'Timer'
      },
      {
        title: 'Baja Resistencia de Contacto',
        description: 'Garantía de valores en micro-ohmios (µΩ) para evitar puntos calientes destructivos.',
        iconName: 'ZapOff'
      },
      {
        title: 'Confiabilidad Mecánica',
        description: 'Limpieza, desengrase y lubricación con grasas dieléctricas sintéticas certificadas.',
        iconName: 'Wrench'
      }
    ],
    applications: [
      'Subestaciones de Distribución en 10 kV, 22.9 kV, 60 kV y 220 kV',
      'Celdas de Media Tensión tipo Metal-Clad y Metal-Enclosed',
      'Centros de Control de Motores (CCM) e Interruptores Masterpact en BT',
      'Líneas de Producción Minera e Industrial de Alto Despacho'
    ],
    methodology: [
      { step: 1, title: 'Consignación y Bloqueo LOTO', description: 'Apertura, desconexión física y puesta a tierra temporal.' },
      { step: 2, title: 'Extracción del Interruptor de la Celda', description: 'Inspección de mordazas tulipán, aisladores y contactos de control.' },
      { step: 3, title: 'Pruebas Eléctricas y Mecánicas', description: 'Inyección de corriente, medición de tiempos y aislamiento.' },
      { step: 4, title: 'Mantenimiento General', description: 'Ajuste de pernos con torquímetro, limpieza por aspiración y lubricación.' },
      { step: 5, title: 'Reinserción y Pruebas Funcionales', description: 'Comprobación de enclavamientos mecánicos y disparos de prueba.' },
      { step: 6, title: 'Re-energización y Entrega de Reporte', description: 'Cierre de maniobra segura y entrega de oscilogramas de prueba.' }
    ],
    technicalTags: ['Interruptores SF6 / Vacío', 'Microóhmetro 100A', 'Pruebas de Simultaneidad', 'Megóhmetro 5kV', 'Relés de Protección']
  },
  {
    id: 'mantenimiento-seccionadores-at-mt-bt',
    slug: 'mantenimiento-especializado-de-seccionadores',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Mantenimiento Especializado de Seccionadores (AT / MT / BT)',
    shortDescription: 'Alineación milimétrica de cuchillas, ajuste de presión de contacto, limpieza de columnas aislantes de porcelana/poliméricas y mantenimiento de mandos mecánicos y motorizados.',
    impactPhrase: 'Corte visible y seguro: garantice maniobras de aislamiento confiables en su patio de llaves.',
    badge: 'Maniobra Segura',
    heroImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Servicio de revisión electromecánica, alineamiento, lubricación de contactos plateados y pruebas operativas de seccionadores de apertura vertical, horizontal y pantógrafo.',
      purpose: 'Asegurar la correcta separación dieléctrica visible de los circuitos y la continuidad eléctrica sin calentamiento excesivo durante el paso de corriente nominal.',
      problemSolved: 'Evita trabamientos mecánicos durante maniobras de emergencia, desalineamiento de contactos que generen arcos peligrosos y sobrecalentamientos en mordazas.',
      clientBenefits: [
        'Apertura y cierre suave, sincronizado y sin vibraciones destructivas.',
        'Inspección termográfica previa para detectar desgastes en resortes de presión.',
        'Mando motorizado y manual calibrado al 100% para telecontrol SCADA.'
      ]
    },
    scope: [
      'Inspección y limpieza profunda de aisladores con solventes dieléctricos no abrasivos.',
      'Verificación y calibración de la penetración y alineación de las cuchillas en las mordazas.',
      'Medición de resistencia de contacto por polo con microóhmetro digital.',
      'Revisión y lubricación de cajas de mando, fines de carrera mecánicos y bobinas de bloqueo.',
      'Pruebas de resistencia de aislamiento fase-fase y fase-tierra.'
    ],
    benefits: [
      {
        title: 'Contacto Perfecto',
        description: 'Presión uniforme en las mordazas plateadas para disipar corrientes de cortocircuito.',
        iconName: 'Sparkles'
      },
      {
        title: 'Maniobrabilidad Confiable',
        description: 'Eliminación de holguras en bielas, crucetas y ejes de transmisión mecánica.',
        iconName: 'Cog'
      },
      {
        title: 'Aislamiento Inviolable',
        description: 'Detección de microfisuras en porcelanas mediante pruebas dieléctricas y ultrasonido.',
        iconName: 'ShieldCheck'
      }
    ],
    applications: [
      'Patios de Llaves de Subestaciones de Potencia (60kV a 220kV)',
      'Seccionadores de Línea y de Barra en Celdas de Media Tensión',
      'Seccionadores Bajo Carga (LBS) con fusibles integrados',
      'Seccionadores de Puesta a Tierra Rápidos'
    ],
    methodology: [
      { step: 1, title: 'Inspección Visual y Desenergización', description: 'Revisión del estado de cuchillas y comprobación de ausencia de tensión.' },
      { step: 2, title: 'Limpieza Dieléctrica de Aisladores', description: 'Retiro de polución, polvo industrial y salinidad ambiental.' },
      { step: 3, title: 'Calibración de Penetración y Cierre', description: 'Ajuste de topes mecánicos y verificación del enclavamiento.' },
      { step: 4, title: 'Prueba de Resistencia de Contactos', description: 'Inyección de alta corriente para corroborar resistencia menor a 50 µΩ.' },
      { step: 5, title: 'Lubricación Especializada', description: 'Aplicación de grasa conductora en contactos y lubricante sintético en engranajes.' },
      { step: 6, title: 'Pruebas de Maniobra Manual y Motorizada', description: 'Verificación de la señalización remota hacia el tablero de control.' }
    ],
    technicalTags: ['Seccionadores Pantógrafo', 'Cuchillas de Puesta a Tierra', 'Microóhmetro', 'Aisladores Poliméricos', 'Alineamiento Mecánico']
  },
  {
    id: 'mantenimiento-equipos-medicion',
    slug: 'mantenimiento-de-equipos-de-medicion-tc-pt-trafomix',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Mantenimiento y Pruebas a Equipos de Medición (TC, PT, Trafomix)',
    shortDescription: 'Ensayos eléctricos de relación de transformación, saturación, polaridad, resistencia de devanados y aislamiento en Transformadores de Corriente (TC), Tensión (PT) y unidades compactas Trafomix.',
    impactPhrase: 'Facturación y protección exactas: la precisión de sus transformadores de medida garantiza la confiabilidad de su sistema.',
    badge: 'Metrología Eléctrica',
    heroImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Pruebas eléctricas diagnósticas y mantenimiento preventivo para transformadores de medida utilizados en esquemas de protección y medición comercial de energía.',
      purpose: 'Verificar la clase de precisión (0.2S, 0.5, 5P20), corroborar la relación de transformación real y asegurar que los devanados no presenten espiras en cortocircuito.',
      problemSolved: 'Evita errores de facturación con la empresa distribuidora y garantiza que los relés de protección reciban señales exactas durante eventos de cortocircuito.',
      clientBenefits: [
        'Aseguramiento de la facturación correcta de energía sin mermas ni sobrecostos.',
        'Curvas de saturación y magnetización (Knee Point) levantadas con precisión.',
        'Prevención de explosiones por degradación del aislamiento en equipos sumergidos en aceite o resina.'
      ]
    },
    scope: [
      'Pruebas de Relación de Transformación y Verificación de Polaridad (aditiva/sustractiva).',
      'Levantamiento de la Curva de Excitación / Saturación de TC según normas IEEE C57.13 e IEC 61869.',
      'Medición de Resistencia de Aislamiento (Megóhmetro) de Primario a Secundario y a Tierra.',
      'Medición de Resistencia de Devanados con puente Kelvin / microóhmetro de precisión.',
      'Prueba de Carga Secundaria (Burden) para verificar la no saturación de los circuitos de medida.',
      'En Trafomix: Toma y análisis de muestra de aceite dieléctrico del tanque compacto.'
    ],
    benefits: [
      {
        title: 'Precisión Comercial',
        description: 'Verificación contra patrones para auditorías de medición fiscal y comercial.',
        iconName: 'Scale'
      },
      {
        title: 'Respuesta Inmediata de Relés',
        description: 'Certeza de que los TC alimentan correctamente las funciones 50/51, 50N/51N y 87.',
        iconName: 'Cpu'
      },
      {
        title: 'Diagnóstico Integral Trafomix',
        description: 'Mantenimiento completo a la unidad compacta de medición en un solo servicio programado.',
        iconName: 'Box'
      }
    ],
    applications: [
      'Celdas de Medición Comercial en Media Tensión (10kV, 13.8kV, 22.9kV)',
      'Puntos de Medición de Frontera Comercial (COES)',
      'Subestaciones de Potencia en Plantas Industriales y Mineras',
      'Unidades Trafomix en Postes y Cascos Urbanos'
    ],
    methodology: [
      { step: 1, title: 'Aislamiento del Circuito de Medición', description: 'Cortocircuitado seguro de bornes secundarios de TC y apertura de PT.' },
      { step: 2, title: 'Inspección Visual y Limpieza de Bornes', description: 'Revisión de campanas de porcelana/resina y estanqueidad de empaques.' },
      { step: 3, title: 'Inyección de Tensión y Corriente', description: 'Ejecución de barridos automáticos con maleta de pruebas computarizada.' },
      { step: 4, title: 'Evaluación de Errores de Relación y Fase', description: 'Comparación contra la placa de características nominales.' },
      { step: 5, title: 'Prueba de Carga del Bucle (Burden)', description: 'Medición de la impedancia total de cables hasta el medidor/relé.' },
      { step: 6, title: 'Emisión de Reporte y Curvas', description: 'Generación del expediente metrológico con curvas de excitación trazables.' }
    ],
    technicalTags: ['Transformadores de Corriente (TC)', 'Transformadores de Potencial (PT)', 'Trafomix', 'Curva de Saturación', 'IEC 61869']
  },
  {
    id: 'mantenimiento-preventivo-transformadores',
    slug: 'mantenimiento-preventivo-de-transformadores',
    areaId: 'subestaciones-at-mt-bt',
    name: 'Mantenimiento Preventivo Integral de Transformadores',
    shortDescription: 'Inspección electromecánica, medición de TTR, resistencia de devanados, aislamiento (Megger), factor de potencia (Doble/Tan Delta), termografía y reacondicionamiento de accesorios.',
    impactPhrase: 'El activo más valioso de su sistema eléctrico en manos de especialistas certificados.',
    badge: 'Activo Principal',
    heroImage: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1600&q=80',
    description: {
      whatIs: 'Servicio integral de mantenimiento preventivo, predictivo y pruebas eléctricas de campo para transformadores de potencia, distribución y tipo seco (encapsulados en resina epóxica).',
      purpose: 'Evaluar el estado del aislamiento de devanados, la condición del cambiador de tomas (Tap Changer), la hermeticidad de juntas y la operatividad de los accesorios de protección.',
      problemSolved: 'Previene paradas catastróficas por perforación dieléctrica de devanados, fugas masivas de aceite y sobrecalentamientos por conexiones defectuosas.',
      clientBenefits: [
        'Disponibilidad garantizada del transformador durante los ciclos de máxima demanda.',
        'Protocolo de pruebas completo con cálculo del Índice de Polarización (IP) y Absorción Dieléctrica (DAR).',
        'Cambio de sílica gel, empaquetaduras y ajuste torquimétrico general.'
      ]
    },
    scope: [
      'Medición de Resistencia de Aislamiento (Megóhmetro 5kV/10kV) y cálculo de IP y DAR.',
      'Prueba de Relación de Transformación (TTR) en todos los pasos del Tap Changer.',
      'Medición de Resistencia Óhmica de Devanados en Alta y Baja Tensión con puente de microohmios.',
      'Factor de Potencia del Aislamiento / Tangente Delta (Tan δ) en devanados y bushings.',
      'Inspección y prueba de protecciones: Relé Buchholz, termómetros de aceite y devanado, válvula de sobrepresión.',
      'Mantenimiento al sistema de refrigeración: radiadores, ventiladores y bombas de circulación de aceite.',
      'Tratamiento, desgasificado y secado de aceite dieléctrico mediante equipo de termovacío en sitio.'
    ],
    benefits: [
      {
        title: 'Vida Útil Extendida',
        description: 'Monitoreo de la curva de degradación de celulosa para evitar inversiones prematuras en reposición.',
        iconName: 'ShieldPlus'
      },
      {
        title: 'Pruebas Eléctricas Avanzadas',
        description: 'Instrumentación computarizada Omicron / Megger de última generación.',
        iconName: 'Activity'
      },
      {
        title: 'Atención en Sitio',
        description: 'Unidades móviles equipadas con plantas de termovacío para intervención en planta.',
        iconName: 'Truck'
      }
    ],
    applications: [
      'Transformadores de Potencia (5 MVA a 100 MVA)',
      'Transformadores de Distribución Industrial (100 kVA a 3000 kVA)',
      'Transformadores Tipo Seco en Resina para Edificios y Hospitales',
      'Transformadores de Puesta a Tierra y Zig-Zag'
    ],
    methodology: [
      { step: 1, title: 'Consignación y Desconexión', description: 'Aislamiento seguro de líneas de AT y BT y descarga a tierra.' },
      { step: 2, title: 'Inspección Externa y Accesorios', description: 'Limpieza de cuba, radiadores, bushings y cambio de desecante sílica gel.' },
      { step: 3, title: 'Pruebas Eléctricas de Devanados', description: 'Ejecución de TTR, Megger, resistencia de bobinados y Tan Delta.' },
      { step: 4, title: 'Verificación de Protecciones Propias', description: 'Calibración y prueba de disparo de contactos de alarma y disparo.' },
      { step: 5, title: 'Tratamiento Dieléctrico (Opcional/Según DGA)', description: 'Termovacío y filtrado para elevar la rigidez dieléctrica.' },
      { step: 6, title: 'Conexión, Reapriete y Energización', description: 'Torque de conexiones con torquímetro y acompañamiento en arranque.' }
    ],
    technicalTags: ['TTR (Relación de Espiras)', 'Megóhmetro 10kV', 'Tangente Delta / Tan δ', 'Relé Buchholz', 'Termovacío', 'Tap Changer']
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    id: 'gestion-energia',
    title: 'Consultorías en Gestión de la Energía',
    subtitle: 'Eficiencia energética, auditorías, calidad de energía y diseño de proyectos renovables ISO 50001',
    description: 'Optimizamos el perfil de consumo energético de industrias y corporaciones mediante diagnósticos precisos, auditorías integrales y proyectos de generación limpia con alto retorno de inversión.',
    impactPhrase: 'Transformamos el consumo de energía en oportunidades tangibles de eficiencia y ahorro.',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#E5A919',
    services: servicesData.filter(s => s.areaId === 'gestion-energia')
  },
  {
    id: 'gestion-mantenimiento',
    title: 'Consultorías en Gestión de Mantenimiento',
    subtitle: 'Ingeniería de confiabilidad, análisis causa raíz ACR, metrología y seguridad en riesgo eléctrico',
    description: 'Estructuramos y modernizamos las estrategias de mantenimiento con metodologías RCM/MCC, análisis de fallas, inventario de activos y riguroso cumplimiento de seguridad bajo estándares internacionales.',
    impactPhrase: 'Prevenir una falla siempre cuesta mucho menos que detener una operación productiva.',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#10B981',
    services: servicesData.filter(s => s.areaId === 'gestion-mantenimiento')
  },
  {
    id: 'subestaciones-at-mt-bt',
    title: 'Mantenimiento de Subestaciones AT / MT / BT',
    subtitle: 'Mantenimiento integral de transformadores, interruptores, seccionadores, pozos a tierra y medición',
    description: 'Servicio técnico de campo altamente especializado para patios de llaves y salas eléctricas de Alta, Media y Baja Tensión con equipamiento calibrado y personal de ingeniería homologado.',
    impactPhrase: 'Confiabilidad eléctrica de clase mundial para mantener su operación industrial siempre en marcha.',
    heroImage: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#F59E0B',
    services: servicesData.filter(s => s.areaId === 'subestaciones-at-mt-bt')
  }
];
