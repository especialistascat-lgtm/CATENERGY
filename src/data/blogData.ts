import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'optimizacion-iso-50001-industria-peruana',
    slug: 'como-reducir-costos-electricos-iso-50001-peru',
    title: 'Cómo Reducir hasta un 25% el Costo Eléctrico Industrial con la Implementación de ISO 50001',
    category: 'ENERGÍA',
    date: '28 de Febrero, 2026',
    author: {
      name: 'Ing. Especialista en Gestión Energética',
      role: 'Consultor Senior de Eficiencia Energética'
    },
    readTime: '6 min de lectura',
    summary: 'Guía práctica para identificar Usos Significativos de la Energía (USE), establecer una Línea Base confiable y sistematizar los ahorros operativos en plantas productivas.',
    featuredImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'En el actual entorno competitivo, el costo de la energía eléctrica representa uno de los factores más determinantes en el costo unitario de producción. Implementar un Sistema de Gestión de la Energía (SGEn) bajo la norma ISO 50001:2018 no solo permite un control estricto de consumos, sino que transforma la cultura organizacional.',
      sections: [
        {
          heading: '1. Diagnóstico de Usos Significativos de la Energía (USE)',
          body: 'El primer paso fundamental consiste en realizar un balance de masa y energía exhaustivo para mapear qué sistemas consumen más del 80% de la energía de la planta (usualmente motores de accionamiento continuo, compresores de aire y calderos).',
          keyPoints: [
            'Medición directa con analizadores de redes de clase A durante semanas representativas.',
            'Cálculo de la energía específica por tonelada producida o unidad manufacturada.',
            'Identificación de fugas térmicas y consumos en modo standby.'
          ]
        },
        {
          heading: '2. Establecimiento de Líneas Base (LBEn) y Metas Claras',
          body: 'Sin una línea base normalizada estadísticamente frente a variables externas como el volumen de producción y la temperatura ambiente, es imposible verificar si un ahorro es fruto de la eficiencia o de una menor actividad fabril.',
          keyPoints: [
            'Modelos de regresión multivariable con coeficientes R² > 0.85.',
            'Indicadores de Desempeño Energético (IDEn) en tiempo real para jefes de turno.',
            'Planificación de revisiones periódicas ante cambios en la tecnología instalada.'
          ]
        },
        {
          heading: '3. Medidas de Rápido Retorno (Quick-Wins)',
          body: 'Muchas de las medidas de mayor impacto requieren inversiones mínimas: optimización de presiones de aire comprimido, corrección del factor de potencia en bornes y reubicación de cargas fuera de la hora punta del sistema interconectado.'
        }
      ],
      conclusion: 'La eficiencia energética no es un evento aislado, sino una disciplina continua. En CATENERGY SAC asesoramos a la industria peruana en cada etapa del camino hacia la certificación ISO 50001 con retorno garantizado.'
    },
    tags: ['ISO 50001', 'Eficiencia Energética', 'Ahorro Eléctrico', 'Línea Base', 'Auditoría Energética'],
    relatedPostIds: ['analisis-cromatografia-aceite-transformador', 'guia-seguridad-arco-electrico-nfpa-70e']
  },
  {
    id: 'analisis-cromatografia-aceite-transformador',
    slug: 'analisis-cromatografia-gases-aceite-transformadores-dga',
    title: 'Cromatografía de Gases Disueltos (DGA): La Prueba Definitiva para Salvar su Transformador',
    category: 'SUBESTACIONES',
    date: '15 de Febrero, 2026',
    author: {
      name: 'Ingeniero Especialista en Alta Tensión',
      role: 'Jefe de Diagnóstico y Ensayos Dieléctricos'
    },
    readTime: '8 min de lectura',
    summary: 'Aprenda a interpretar la presencia de Hidrógeno, Acetileno y Etileno en el aceite mineral según las normas ASTM D3612 e IEC 60599 para evitar fallas catastróficas.',
    featuredImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'Un transformador de potencia es el activo más costoso y crítico de una subestación eléctrica. Su falla intempestiva puede paralizar una planta por semanas o meses. Afortunadamente, el aceite aislante disuelve gases generados por microdescargas y sobrecalentamientos internos, permitiendo un diagnóstico predictivo no destructivo.',
      sections: [
        {
          heading: 'Los Gases Clave y su Significado Físico',
          body: 'Cada tipo de esfuerzo interno produce una huella gaseosa característica que nuestro laboratorio cuantifica en partes por millón (ppm):',
          keyPoints: [
            'Hidrógeno (H2): Descargas parciales o efecto corona de baja energía.',
            'Acetileno (C2H2): Arco eléctrico franco a alta temperatura (> 700°C) entre espiras o conmutador de tomas.',
            'Etileno (C2H4) y Etano (C2H6): Sobrecalentamiento severo del aceite por puntos calientes en bornes.',
            'Monóxido y Dióxido de Carbono (CO / CO2): Degradación térmica acelerada del papel aislante (celulosa).'
          ]
        },
        {
          heading: 'Metodologías de Diagnóstico: Triángulo de Duval y Razones de Rogers',
          body: 'No basta con mirar los valores absolutos de ppm. Es imprescindible evaluar la velocidad de generación de gas y emplear herramientas gráficas como el Triángulo de Duval para discriminar si se trata de fallas térmicas o dieléctricas.'
        }
      ],
      conclusion: 'Realizar un muestreo semestral o anual de aceite aislante con jeringas herméticas calibradas es la mejor póliza de seguro para la continuidad operativa de su empresa.'
    },
    tags: ['Transformadores', 'DGA', 'Aceite Dieléctrico', 'ASTM D3612', 'Subestaciones AT'],
    relatedPostIds: ['optimizacion-iso-50001-industria-peruana', 'mantenimiento-pozos-tierra-cne-norma']
  },
  {
    id: 'mantenimiento-pozos-tierra-cne-norma',
    slug: 'mantenimiento-pozos-a-tierra-normas-cne-ieee',
    title: 'Sistemas de Puesta a Tierra: Claves para Mantener la Resistencia Óhmica Menor a 5 Ohmios',
    category: 'ELECTRICIDAD',
    date: '2 de Febrero, 2026',
    author: {
      name: 'Especialista en Mantenimiento de Subestaciones',
      role: 'Ingeniero de Operaciones y Pruebas Eléctricas'
    },
    readTime: '5 min de lectura',
    summary: 'Procedimiento técnico paso a paso para la reactivación química y medición de pozos a tierra con telurómetro calibrado según el Código Nacional de Electricidad.',
    featuredImage: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'Un sistema de puesta a tierra deficiente es el causante de la mayoría de daños en electrónica sensible y representa un riesgo inaceptable de choque eléctrico para el personal técnico.',
      sections: [
        {
          heading: '¿Por qué se degrada un Pozo a Tierra?',
          body: 'Con el transcurso de los meses, la lixiviación de sales minerales por riego excesivo o la sequedad extrema del terreno aumentan la resistividad del suelo. Además, el óxido de cobre en las uniones genera falsos contactos.',
          keyPoints: [
            'Pérdida de humedad natural en temporadas secas.',
            'Corrosión galvánica en conectores mecánicos tipo grapa.',
            'Compactación inadecuada de la tierra de chacra o compuesto de relleno.'
          ]
        },
        {
          heading: 'El Procedimiento de Mantenimiento Correcto',
          body: 'Consiste en la excavación de la primera capa, retiro de impurezas, lijado de la varilla de cobre electrolítico, aplicación de compuesto gel ecológico de alta conductividad y reposición de tapas de registro.'
        }
      ],
      conclusion: 'En CATENERGY SAC entregamos protocolos de prueba con telurómetros certificados por laboratorios acreditados ante INACAL, garantizando validez para auditorías de INDECI y aseguradoras.'
    },
    tags: ['Pozos a Tierra', 'Telurómetro', 'CNE', 'IEEE 81', 'Seguridad Eléctrica'],
    relatedPostIds: ['guia-seguridad-arco-electrico-nfpa-70e', 'caso-exito-subestacion-minera']
  },
  {
    id: 'guia-seguridad-arco-electrico-nfpa-70e',
    slug: 'seguridad-electrica-arco-electrico-nfpa-70e',
    title: 'Seguridad en Riesgo Eléctrico y Arc Flash: Cumplimiento de la Norma NFPA 70E en Planta',
    category: 'SEGURIDAD',
    date: '20 de Enero, 2026',
    author: {
      name: 'Consultor en Seguridad y Salud en el Trabajo',
      role: 'Auditor Líder en Seguridad Eléctrica'
    },
    readTime: '7 min de lectura',
    summary: 'Cómo calcular la energía incidente (cal/cm²), definir las fronteras de aproximación y seleccionar el equipo de protección personal (EPP) adecuado para maniobras eléctricas.',
    featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'El arco eléctrico (Arc Flash) puede generar temperaturas superiores a los 19,000 °C en una fracción de segundo, vaporizando metales y generando una onda de presión devastadora. La protección convencional contra sobrecorrientes muchas veces no es suficiente para evitar quemaduras graves sin un estudio de arco específico.',
      sections: [
        {
          heading: 'Las 5 Reglas de Oro en Maniobras Eléctricas',
          body: 'Toda intervención en celdas de media y alta tensión debe regirse por la secuencia inquebrantable de seguridad:',
          keyPoints: [
            '1. Desconexión y apertura con corte visible de todas las fuentes de alimentación.',
            '2. Bloqueo y enclavamiento físico de los aparatos de corte (LOTO).',
            '3. Verificación de ausencia de tensión con detector calibrado en todas las fases.',
            '4. Puesta a tierra y en cortocircuito de los conductores.',
            '5. Delimitación y señalización perimetral de la zona de trabajo segura.'
          ]
        },
        {
          heading: 'Estudio de Arco Eléctrico según IEEE 1584',
          body: 'Permite colocar etiquetas en cada tablero indicando la energía incidente en calorías por centímetro cuadrado, la distancia límite de aproximación restringida y la categoría de traje ignífugo requerida.'
        }
      ],
      conclusion: 'La seguridad no es negociable. En CATENERGY SAC capacitamos a brigadas industriales y realizamos estudios integrales de coordinación de protecciones para minimizar tiempos de despeje de falla.'
    },
    tags: ['NFPA 70E', 'Arc Flash', 'LOTO', 'Seguridad Industrial', 'RESESATE'],
    relatedPostIds: ['caso-exito-subestacion-minera', 'rcm-mantenimiento-centrado-confiabilidad']
  },
  {
    id: 'rcm-mantenimiento-centrado-confiabilidad',
    slug: 'metodologia-rcm-mantenimiento-centrado-confiabilidad',
    title: 'Mantenimiento Centrado en Confiabilidad (RCM/MCC): Del Mantenimiento Bombero a la Excelencia Operacional',
    category: 'MANTENIMIENTO',
    date: '10 de Enero, 2026',
    author: {
      name: 'Ingeniero de Confiabilidad y Gestión de Activos',
      role: 'Especialista RCM / ACR'
    },
    readTime: '6 min de lectura',
    summary: 'Paso a paso para jerarquizar activos críticos, mapear modos y efectos de falla (FMEA) y rediseñar rutinas predictivas con impacto directo en el OEE.',
    featuredImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'Muchas plantas industriales continúan invirtiendo miles de horas-hombre en rutinas de mantenimiento preventivo calendarizadas que no guardan relación con los modos reales de falla de los equipos. El RCM permite focalizar los recursos donde realmente importa.',
      sections: [
        {
          heading: 'Las 7 Preguntas Clave del RCM',
          body: 'El proceso metodológico responde a preguntas fundamentales sobre cada activo del sistema productivo:',
          keyPoints: [
            '¿Cuáles son las funciones y los estándares de desempeño asociados?',
            '¿De qué manera puede fallar en satisfacer sus funciones?',
            '¿Cuál es la causa de cada falla funcional (modo de falla)?',
            '¿Qué ocurre cuando ocurre cada falla (efecto de falla)?',
            '¿De qué manera importa cada falla (consecuencias en seguridad, ambiente y finanzas)?'
          ]
        }
      ],
      conclusion: 'Al implementar RCM con CATENERGY SAC, las empresas logran reducir hasta un 40% las actividades de mantenimiento innecesarias, canalizando el esfuerzo a técnicas predictivas avanzadas.'
    },
    tags: ['RCM / MCC', 'Gestión de Activos', 'FMEA', 'Confiabilidad Operacional', 'OEE'],
    relatedPostIds: ['caso-exito-subestacion-minera', 'optimizacion-iso-50001-industria-peruana']
  },
  {
    id: 'caso-exito-subestacion-minera',
    slug: 'caso-estudio-mantenimiento-mayor-subestacion-60kv',
    title: 'Caso de Estudio: Mantenimiento Mayor y Puesta en Servicio de Subestación 60/10 kV en Parada de Planta',
    category: 'CASOS DE ESTUDIO',
    date: '5 de Diciembre, 2025',
    author: {
      name: 'Equipo de Ingeniería de Proyectos CATENERGY SAC',
      role: 'División de Mantenimiento de Subestaciones'
    },
    readTime: '9 min de lectura',
    summary: 'Relato técnico de una intervención integral en 36 horas continuas: pruebas a transformador de 20 MVA, calibración de relés numéricos y reacondicionamiento de interruptores SF6.',
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'Durante la parada programada de una importante unidad productiva, CATENERGY SAC asumió el reto de ejecutar el mantenimiento integral y comisionamiento de su subestación principal de potencia de 60 kV / 10 kV.',
      sections: [
        {
          heading: 'Desafío Técnico y Logístico',
          body: 'La ventana operativa disponible era de apenas 36 horas reloj. Cualquier retraso implicaba penalidades severas por lucro cesante.',
          keyPoints: [
            'Movilización de cuadrilla especializada multidisciplinaria 24/7.',
            'Planta móvil de termovacío para desgasificación de 12,000 litros de aceite dieléctrico.',
            'Maletas de inyección secundaria de corriente para prueba de relés de distancia y sobrecorriente.'
          ]
        },
        {
          heading: 'Resultados Obtenidos',
          body: 'Se detectó y corrigió a tiempo un sobrecalentamiento crítico en el borne de alta tensión de la fase S (gracias a termografía y medición de microohmios), evitando una inminente desconexión durante la producción récord.'
        }
      ],
      conclusion: 'La capacidad técnica, la puntualidad y el equipamiento calibrado de CATENERGY SAC permitieron reenergizar la subestación 2 horas antes del plazo límite fijado.'
    },
    tags: ['Caso de Estudio', 'Subestación 60kV', 'Transformador 20MVA', 'Interruptor SF6', 'Termovacío'],
    relatedPostIds: ['analisis-cromatografia-aceite-transformador', 'mantenimiento-pozos-tierra-cne-norma']
  },
  {
    id: 'integracion-bess-generacion-distribuida',
    slug: 'sistemas-almacenamiento-energia-bess-industria',
    title: 'Sistemas de Almacenamiento con Baterías (BESS) y su Integración en Microrredes Industriales',
    category: 'ENERGÍAS RENOVABLES',
    date: '18 de Noviembre, 2025',
    author: {
      name: 'Especialista en Energías Renovables',
      role: 'Ingeniero de Proyectos Solares y BESS'
    },
    readTime: '7 min de lectura',
    summary: 'Cómo los sistemas BESS permiten recortar picos de potencia en hora punta (Peak Shaving) y maximizar el aprovechamiento de la energía solar fotovoltaica.',
    featuredImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    content: {
      intro: 'La combinación de energía solar fotovoltaica con sistemas de almacenamiento electroquímico en baterías de ion-litio (BESS) está revolucionando la autogeneración en el sector industrial.',
      sections: [
        {
          heading: 'Beneficios del Arbitraje Energético y Peak Shaving',
          body: 'Almacenar energía en horas de bajo costo o alta radiación solar para consumirla durante las horas punta del sistema eléctrico interconectado genera ahorros directos en el cargo por potencia coincidente.',
          keyPoints: [
            'Respuesta en microsegundos ante caídas de tensión en la red.',
            'Reducción de la potencia contratada con la empresa distribuidora.',
            'Suministro de energía limpia y respaldo ininterrumpido (UPS a escala de megavatios).'
          ]
        }
      ],
      conclusion: 'En CATENERGY SAC desarrollamos modelos financieros y de ingeniería para implementar proyectos BESS llave en mano con máxima rentabilidad.'
    },
    tags: ['BESS', 'Solar Fotovoltaica', 'Peak Shaving', 'Microrredes', 'Energías Renovables'],
    relatedPostIds: ['optimizacion-iso-50001-industria-peruana', 'caso-exito-subestacion-minera']
  }
];
