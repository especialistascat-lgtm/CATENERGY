export interface ClientProject {
  id: string;
  projectNumber: number;
  title: string;
  client: string;
  date: string;
  scope: string[];
  voltageLevel?: string;
  category: 'subestaciones' | 'contingencia' | 'eficiencia' | 'seguridad' | 'control-ssaa' | 'proyectos';
  equipmentDetails?: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  experience?: string;
  isLeader?: boolean;
}

export const companyData = {
  name: 'CAT ENERGY S.A.C.',
  legalName: 'CONSULTORIAS EN ALTA TENSION Y ENERGIA SOCIEDAD ANONIMA CERRADA',
  shortName: 'CATENERGY SAC',
  tagline: 'Auditoría, Consultoría y Servicios en Energía | Consultorías en Alta Tensión y Energía',
  slogan: 'Tu aliado estratégico para la excelencia en el sector eléctrico',
  safetyMotto: 'Identifica, Evalúa, Controla: Tu Seguridad Comienza Con Un Riesgo Identificado',
  safetyCommitment: 'En CAT ENERGY, la conciencia situacional y el IPERC son nuestras líneas de vida: CERO ACCIDENTES es nuestro compromiso.',
  
  // Official SUNAT & Contact Registry from Document
  ruc: '20609382105',
  taxpayerType: 'SOCIEDAD ANONIMA CERRADA',
  registrationDate: '21/04/2022',
  activitiesStartDate: '03/05/2022',
  taxpayerStatus: 'ACTIVO',
  taxpayerCondition: 'HABIDO',
  fiscalAddress: 'AV. HUSARES DE JUNIN MZA. D LOTE. 15 ICA – ICA - PARCONA',
  city: 'Ica, Perú',
  
  phone: '994 782 124',
  phoneFormatted: '+51 994 782 124',
  email: 'especialistascat@gmail.com',
  whatsappNumber: '51994782124',
  linktreeUrl: 'https://bit.ly/CATENERGYPERU',
  instagramHandle: '@Asesoriaymentoriacat',
  facebookHandle: '@Asesoriaymentoriacat',

  strategicPartner: {
    name: 'KHALERGY',
    role: 'Partner Tecnológico en Analizadores de Redes de Clase A homologados por OSINERGMIN'
  },

  about: {
    whoWeAre: 'En CATENERGYSAC, somos su socio estratégico para la excelencia en el sector eléctrico. Nos especializamos en brindar soluciones integrales de consultoría en eficiencia energética y mantenimiento de subestaciones, cubriendo todo el espectro, desde instalaciones de baja y media tensión hasta proyectos de alta potencia en los ámbitos de generación, transmisión, distribución e industria.',
    whatWeDo: 'Nuestra filosofía de trabajo se basa en el ciclo de mejora continua PHVA (Planificar, Hacer, Verificar, Actuar) para garantizar que cada servicio, desde la ejecución de proyectos eléctricos hasta la supervisión especializada de subestaciones, cumpla con los más altos estándares de calidad, seguridad y eficiencia.',
    specialization: 'Nos distinguimos por nuestra capacidad de ofrecer soluciones innovadoras y personalizadas que abordan los desafíos más complejos de nuestros clientes. Ya sea a través de un análisis de causa raíz para optimizar el rendimiento, la creación de planos de contingencia robustos o la implementación de estrategias de eficiencia energética, nuestro compromiso es superar las expectativas.',
    valueProposition: 'En CATENERGYSAC, no solo ejecutamos proyectos; construimos relaciones de confianza y aseguramos un futuro energético más eficiente y sostenible para nuestros aliados.',
    
    // Official Corporate Mission & Vision
    mission: 'Ser el aliado estratégico de nuestros clientes en el sector eléctrico, brindando soluciones integrales de consultoría en eficiencia energética y mantenimiento de subestaciones, a través de la aplicación del ciclo de mejora continua PHVA. Nos comprometemos a entregar servicios de la más alta calidad y a la vanguardia tecnológica, asegurando la optimización de los recursos y la excelencia operativa para el crecimiento sostenible de sus negocios.',
    vision: 'Ser la empresa líder y referente en el sector eléctrico, reconocida por impulsar la excelencia operativa y la sostenibilidad a través de soluciones innovadoras en eficiencia energética y mantenimiento de subestaciones, convirtiéndonos en el socio de confianza para nuestros clientes y en un agente de cambio hacia un futuro energético más eficiente.',
    
    // Official 5 Corporate Values from Slide 5
    values: [
      {
        number: 1,
        title: 'Integridad',
        description: 'Trabajar con ética, honestidad, disciplina y responsabilidad en nuestra labor generando confianza y seguridad.'
      },
      {
        number: 2,
        title: 'Innovación',
        description: 'Búsqueda constante de mejora tecnológica para nuestras actividades, asegurando la excelencia a la calidad del servicio al cliente.'
      },
      {
        number: 3,
        title: 'Compromiso',
        description: 'Involucrar a nuestros colaboradores como propia la misión, visión y valores para el logro de los objetivos.'
      },
      {
        number: 4,
        title: 'Respeto',
        description: 'Reconocimiento, apreciación y valoración a las normas y grupos de interés, generando un ambiente de armonía entre los colaboradores.'
      },
      {
        number: 5,
        title: 'Eficiencia',
        description: 'Añadiendo valor agregando a las funciones, para incrementar nuestro conocimiento y gestionar nuestros recursos óptimamente.'
      }
    ],

    // Technical Director & Leadership Profile (Slide 42 & 43)
    leader: {
      name: 'ING. RICHTER GÓMEZ',
      title: 'Gerente de Proyectos y Mantenimiento',
      profession: 'Ingeniero Mecánico Electricista',
      experienceYears: '17 años de destacada trayectoria',
      description: 'Ingeniero Mecánico Electricista con 17 años de destacada trayectoria en el sector eléctrico, especializado en la gestión y optimización de sistemas de alta, media y baja tensión. Su experiencia se centra en la consultoría y el mantenimiento de equipos de subestaciones, incluyendo transformadores de potencia, interruptores, seccionadores, pararrayos y grupos electrógenos. A lo largo de su carrera en empresas líderes como Red de Energía del Perú (ISA REP) y SENATI, ha perfeccionado sus habilidades para garantizar la excelencia operativa y la confiabilidad de las infraestructuras críticas.',
      quote: 'Mi enfoque profesional se alinea con la visión de CATENERGYSAC de ser un socio estratégico para nuestros clientes, aplicando tecnología de vanguardia y un riguroso enfoque de mejora continua para solucionar desafíos complejos.',
      companies: ['Red de Energía del Perú (ISA REP)', 'SENATI', 'Sector Minero & Energético Nacional']
    },

    // Organization Chart / Team Structure (Slide 43)
    team: [
      {
        name: 'Ing. Richter Gómez',
        role: 'Gerente de Proyectos y Mantenimiento',
        credentials: 'Ingeniero Mecánico Electricista (17 años exp.)',
        isLeader: true
      },
      {
        name: 'Ingeniería Especializada',
        role: 'Ing. Analista en Energía',
        credentials: 'Especialista en Eficiencia, Calidad de Redes y Normativas'
      },
      {
        name: 'Ingeniería de Transmisión',
        role: 'Ingeniero de Líneas',
        credentials: 'Líneas de Alta Tensión, Conductoras y Protección'
      },
      {
        name: 'Supervisión de Potencia',
        role: 'Ingeniero de Subestaciones',
        credentials: 'Patios de Llaves AT/MT, Celdas, Transformadores y SF6'
      },
      {
        name: 'Operaciones y Mantenimiento',
        role: 'Técnico Mecánico / Electricista',
        credentials: 'Maniobras de Campo, Ensayos Eléctricos, DGA y Puesta en Servicio'
      }
    ]
  },

  // 10 Real Executed Projects with Exact Historical Data (Pages 30-40)
  executedProjects: [
    {
      id: 'proj-01-huasahuasi-avr',
      projectNumber: 1,
      title: 'Reemplazo de Transformadores de Tensión AVR en Celdas de 6kV',
      client: 'EGEJUNIN S.A.',
      date: '08 Octubre 2022',
      voltageLevel: '6 kV',
      category: 'subestaciones',
      scope: [
        '03 Transformadores de Tensión para Medición y Protección Tipo TJC 4 ABB: Relación 6000/√3//120/√3V, a-n, cl 0.5 20 VA',
        '01 Transformador de Tensión de Sincronismo tipo TDC 4 ABB: Relación 6000//120V, a-b, cl 0.5 20 VA',
        '01 Transformador de Tensión AVR tipo TD3A EPLI SAC: Relación 6000//220V, Yyn0, Relación 6300//220V peso 90 kg'
      ],
      equipmentDetails: 'Centrales Hidroeléctricas Huasahuasi 1 y 2 - Celdas de Media Tensión 6kV',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-02-huasahuasi-ventilacion',
      projectNumber: 2,
      title: 'Instalación de Sistema de Ventilación para Celdas de 6kV',
      client: 'EGEJUNIN S.A.',
      date: '08 Octubre 2022',
      voltageLevel: '6 kV MT',
      category: 'control-ssaa',
      scope: [
        'Instalación de un sistema de refrigeración automática con mando automático por termostato.',
        'Implementación para los cuatro tableros de MT con un sistema de ventilador/extractor.',
        'Aminoramiento de la alta temperatura existente en las celdas de 6kV por el incremento de carga operativa.'
      ],
      equipmentDetails: 'Central Hidroeléctrica Huasahuasi 1 y 2',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-03-chilca-sf6',
      projectNumber: 3,
      title: 'Identificación y Reparación de Fuga de Gas SF6 en Interruptor INT-5261 500kV (Fase S)',
      client: 'ATLANTICA',
      date: '17 de Abril 2022',
      voltageLevel: '500 kV Extra Alta Tensión',
      category: 'subestaciones',
      scope: [
        'Verificación de fugas en bridas del Interruptor fase S con equipo detector de fugas de gas DILO SF6.',
        'Verificación de la presión actual del IN 5261 fase S (7.25 bar abs).',
        'Reemplazo de tapas romboidales en el IN 5261 fase S.',
        'Medición de la calidad y pureza del gas SF6 en el interruptor de la Fase S.'
      ],
      equipmentDetails: 'Subestación Eléctrica Chilca 500 kV - Interruptor de Potencia INT-5261',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-04-calibracion-ion7650',
      projectNumber: 4,
      title: 'Servicio de Configuración y Calibración de Medidores ION 7650',
      client: 'ATLANTICA',
      date: '12 de Febrero 2022',
      voltageLevel: 'Medición & Calidad de Potencia',
      category: 'control-ssaa',
      scope: [
        'Configuración paramétrica integral y calibración metrológica de 4 medidores multifunción ION 7650.',
        'Pruebas de precisión en laboratorio con banco de calibración PWS 3.3.',
        'Verificación de registros de armónicos, transitorios y factor de potencia.'
      ],
      equipmentDetails: 'Analizadores de Calidad de Energía y Medición ION 7650 Schneider Electric',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-05-medidores-poroma-ocona-moquegua',
      projectNumber: 5,
      title: 'Desmontaje de Medidores NEXUS 1500 y Montaje de Medidores ION 7650',
      client: 'ATLANTICA',
      date: '16 al 22 de Febrero 2022',
      voltageLevel: 'Alta Tensión 220kV / 500kV',
      category: 'subestaciones',
      scope: [
        'Desmontaje de 4 medidores NEXUS 1500 en operación.',
        'Montaje mecánico y conexionado de cableado de control para 4 medidores ION 7650.',
        'Pruebas de inyección secundaria y puesta en servicio en tiempo récord.'
      ],
      equipmentDetails: 'Subestaciones Poroma, Ocoña y Moquegua',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-06-canchayllo-avr-generador',
      projectNumber: 6,
      title: 'Montaje de AVR y Puesta en Servicio de Generador Eléctrico (G-2)',
      client: 'CANCHAYLLO',
      date: '14 de Diciembre 2021',
      voltageLevel: 'Generación Hidroeléctrica',
      category: 'proyectos',
      scope: [
        'Seguimiento del cableado para elaborar esquemas funcionales de los bornes del amperímetro inteligente (P2) hasta las regletas D1 y D2.',
        'Seguimiento del cableado desde el tablero +1UE2 hasta el tablero +2UE2.',
        'Elaboración del esquema funcional del Amperímetro inteligente (P2).',
        'Puesta en servicio y sincronismo del Generador G-2.'
      ],
      equipmentDetails: 'Minicentral Hidroeléctrica Canchayllo - Generador G-2',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-07-conococha-cvt',
      projectNumber: 7,
      title: 'Montaje y Puesta en Servicio de Transformador de Tensión Capacitivo (CVT)',
      client: 'ATLANTICA',
      date: '19 de Diciembre 2021',
      voltageLevel: '220 kV Alta Tensión',
      category: 'subestaciones',
      scope: [
        'Desembalaje del repuesto y verificación de aislamiento.',
        'Pruebas eléctricas preliminares de capacitancia y factor de potencia.',
        'Desconexión y desmontaje del CVT anterior.',
        'Montaje electromecánico y conexión del nuevo CVT.',
        'Verificación de tensiones secundarias y acoplamiento a sistemas de protección.'
      ],
      equipmentDetails: 'Subestación Conococha de 220 kV',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-08-rep-grupos-electrogenos',
      projectNumber: 8,
      title: 'Supervisión, Montaje y Puesta en Servicio de Grupos Electrógenos y Sistema TTA',
      client: 'RED DE ENERGÍA DEL PERÚ (ISA REP)',
      date: '12 de Marzo 2022',
      voltageLevel: 'Servicios Auxiliares de Potencia',
      category: 'control-ssaa',
      scope: [
        'Anclado del tanque de combustible y tuberías de alimentación.',
        'Fijado de rejilla en canaleta de los tubos de combustible e instalación de lona térmica para salida de aire caliente.',
        'Conexionado de cables de fuerza en los tableros Preferentes y NO Preferentes.',
        'Traslado hacia el lugar de anclaje e instalación de resilentes antivibratorios tipo resorte sobre loza de cimentación con pernos de expansión HILTI.',
        'Pruebas de funcionamiento y conmutación automática de transferencia.'
      ],
      equipmentDetails: 'Sistemas de Respaldo Crítico - Red de Energía del Perú',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-09-bancos-bateria-atn',
      projectNumber: 9,
      title: 'Mantenimiento de Bancos de Batería en Subestaciones de Potencia',
      client: 'ATLANTICA - ATN',
      date: '17 al 21 de Diciembre 2023',
      voltageLevel: '110V / 220V DC Servicios Auxiliares',
      category: 'subestaciones',
      scope: [
        'Limpieza y reajustes de torques en bornes y componentes de interconexión.',
        'Medición pericial de tensión de flotación celda por celda.',
        'Medición de impedancia interna con equipo especializado.',
        'Prueba de descarga controlada de bancos de 300 Ah con carga resistiva.',
        'Termografía infrarroja a celdas y conexiones bajo régimen de descarga.'
      ],
      equipmentDetails: 'Subestaciones de Transmisión ATN - Bancos de 300 Ah',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-10-huasahuasi-cables-36kv',
      projectNumber: 10,
      title: 'Mantenimiento de Cables de Potencia hasta 36 kV',
      client: 'EGEJUNIN S.A.',
      date: '17 al 21 de Diciembre 2024',
      voltageLevel: 'Hasta 36 kV MT',
      category: 'subestaciones',
      scope: [
        'Desconexión segura de cables de potencia en tableros MT bajo protocolo 5 Reglas de Oro.',
        'Retiro de terminaciones envejecidas y preparación del aislamiento XLPE.',
        'Reemplazo y conificado de nuevas terminaciones termocontraíbles / contráctiles en frío.',
        'Ejecución de pruebas eléctricas de aislamiento (Megado e Hi-Pot VLF).',
        'Conexión definitiva y verificación de torques mecánicos.'
      ],
      equipmentDetails: 'Centrales Hidroeléctricas Huasahuasi 1 y 2 - Línea 36 kV',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-11-senamhi-iperc',
      projectNumber: 11,
      title: 'Consultoría en Seguridad y Salud en el Trabajo - Matrices IPERC y Mapas de Riesgo',
      client: 'SERVICIO NACIONAL DE METEOROLOGÍA E HIDROLOGÍA DEL PERÚ (SENAMHI)',
      date: '06 Junio hasta 08 Agosto 2025',
      voltageLevel: '14 Sedes Nacionales',
      category: 'seguridad',
      scope: [
        'Visita de evaluación técnica y peritaje a las 14 sedes de SENAMHI a nivel nacional.',
        'Elaboración y actualización exhaustiva de Matrices IPERC continuas y de línea base.',
        'Elaboración y diseño de Mapas de Riesgo por cada infraestructura y laboratorio.',
        'Establecimiento de medidas de control técnico según la jerarquía de controles de la Ley N° 29783.'
      ],
      equipmentDetails: '14 Sedes Institucionales del SENAMHI a Nivel Nacional',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-12-beta-eficiencia',
      projectNumber: 12,
      title: 'Consultoría en Eficiencia Energética en Plantas y Fundos Agroindustriales',
      client: 'COMPLEJO AGROINDUSTRIAL BETA S.A.',
      date: '06 Febrero hasta 15 Agosto 2024',
      voltageLevel: 'Agroindustria & Media Tensión',
      category: 'eficiencia',
      scope: [
        'Auditoría integral en eficiencia energética en Planta y Fundos ICA.',
        'Auditoría en eficiencia energética en Planta y Fundos Chincha.',
        'Auditoría en eficiencia energética en Planta y Fundos Piura.',
        'Auditoría en eficiencia energética en Planta y Fundos Lambayeque.',
        'Modelado de balances energéticos en sistemas de bombeo, refrigeración y packing exportador.'
      ],
      equipmentDetails: 'Complejo Agroindustrial Beta S.A. - Sedes Ica, Chincha, Piura y Lambayeque',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-13-ipen-contingencia-nuclear',
      projectNumber: 13,
      title: 'Elaboración del Plan de Contingencia - Centro Nuclear Racso (CUI N° 2252487)',
      client: 'INSTITUTO PERUANO DE ENERGÍA NUCLEAR (IPEN)',
      date: 'Noviembre 2024',
      voltageLevel: 'Infraestructura Nuclear Crítica',
      category: 'contingencia',
      scope: [
        'Contratación del servicio de elaboración del plan de contingencia del expediente técnico del saldo de obra del proyecto "Mejoramiento del servicio de energía eléctrica en el centro nuclear Racso, distrito de Carabayllo, provincia y departamento de Lima", CUI N° 2252487.',
        'Análisis de escenarios de falla eléctrica y rutas de respaldo de potencia.',
        'Protocolos de contingencia operativa y respuesta inmediata ante emergencias.'
      ],
      equipmentDetails: 'Centro Nuclear Óscar Miró Quesada de la Guerra (RACSO) - Carabayllo, Lima',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'proj-14-ipen-matpel',
      projectNumber: 14,
      title: 'Plan de Contingencia para Transporte Terrestre de Materiales y Residuos Peligrosos (MATPEL)',
      client: 'INSTITUTO PERUANO DE ENERGÍA NUCLEAR (IPEN)',
      date: 'Diciembre 2024',
      voltageLevel: 'MATPEL Nacional',
      category: 'contingencia',
      scope: [
        'Contratación del servicio para la elaboración del plan de contingencia para el transporte terrestre de materiales y/o residuos peligrosos a nivel nacional.',
        'Rutas críticas, protocolos de contención de derrames y gestión de contingencias de transporte.',
        'Alineación con el MTC, OEFA y normativas de seguridad radiológica y química.'
      ],
      equipmentDetails: 'Transporte Terrestre Nacional de Materiales Peligrosos',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85'
    }
  ],

  // Featured Client Logos & Entities
  featuredClients: [
    { name: 'SENAMHI', description: 'Servicio Nacional de Meteorología e Hidrología del Perú' },
    { name: 'IPEN', description: 'Instituto Peruano de Energía Nuclear - Centro Nuclear Racso' },
    { name: 'COMPLEJO AGROINDUSTRIAL BETA', description: 'Sedes Ica, Chincha, Piura y Lambayeque' },
    { name: 'EGEJUNIN S.A.', description: 'Centrales Hidroeléctricas Huasahuasi 1 y 2' },
    { name: 'ATLANTICA / ATN', description: 'Subestaciones Chilca 500kV, Conococha 220kV, Poroma, Ocoña y Moquegua' },
    { name: 'RED DE ENERGÍA DEL PERÚ (ISA REP)', description: 'Sistemas de Respaldo y Transferencia Automática' },
    { name: 'MINICENTRAL CANCHAYLLO', description: 'Generación Hidroeléctrica y Control AVR' }
  ],

  socialLinks: {
    whatsapp: 'https://wa.me/51994782124?text=Hola%20CATENERGY%2C%20estoy%20interesado%20en%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20consultor%C3%ADa%20y%20mantenimiento%20en%20energ%C3%ADa.',
    instagram: 'https://instagram.com/Asesoriaymentoriacat',
    facebook: 'https://facebook.com/Asesoriaymentoriacat',
    linktree: 'https://bit.ly/CATENERGYPERU'
  },

  footerQuote: '© TODOS LOS DERECHOS RESERVADOS POR CATENER S.A.C. / CAT ENERGY S.A.C. — AUDITORÍA, CONSULTORÍA Y SERVICIOS EN ENERGÍA'
};
