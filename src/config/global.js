export default {
  global: {
    componenteFormativo: 'Planificación estratégica y elaboración de informe',
    descripcionCurso:
      'La planificación facilita la toma de decisiones, realizar el seguimiento al progreso de la ejecución del plan de acción y llevar a cabo los ajustes requeridos. Mediante el uso de herramientas de gestión e indicadores KPI la empresa puede mantener el rumbo de sus objetos, con el fin de validar las acciones realizadas se elabora el informe que permite demostrar el procedimiento técnico aplicado, la metodología, los resultados y el plan de acción definido.  ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación administrativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de planeación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cuadro de mando integral (<i>Balanced scorecard</i>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Perspectivas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elaboración de informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Normas técnicas para la elaboración de un informe',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura de un informe',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas para la socialización de un informe',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cajal, A. (2020). 9 Principios de la Planeación Administrativa. ',
      link: 'https://www.lifeder.com/principios-planeacion-administrativa/',
    },
    {
      referencia: 'Contreras, S. (2021). Planeación normativa. ',
      link: 'https://www.lifeder.com/planeacion-normativa/',
    },
    {
      referencia:
        'Corvo, H. (2020). Planeación administrativa: principios, tipos, elementos, etapas. ',
      link: 'https://www.lifeder.com/planeacion-administrativa-empresa',
    },
    {
      referencia:
        'Escobar, I. (2021). Planificación estratégica: ¿Qué es y para qué sirve? ',
      link: 'https://www.questionpro.com/blog/es/planificacion-estrategica/',
    },
    {
      referencia:
        'Estévez, A. (2019). Significado de Desempeño. Definición, Laboral, Escolar, Factores e Influencias.  ',
      link: 'https://significado.com/desempeno/',
    },
    {
      referencia: 'GCF global. (2021). ¿Qué son las aplicaciones?  ',
      link:
        'https://edu.gcfglobal.org/es/cultura-tecnologica/que-son-las-aplicaciones-o-programas/1/',
    },
    {
      referencia: 'Gestionpro. (2021). Ejemplos de informes de investigación. ',
      link: 'https://www.questionpro.com/es/tour/ejemplos-de-informes.html',
    },
    {
      referencia:
        'Roncancio, G. (2018). ¿Qué es el Balanced Scorecard o Cuadro de Mando Integral? Un resumen. ',
      link:
        'https://gestion.pensemos.com/que-es-el-balanced-scorecard-o-cuadro-de-mando-integral-un-resumen',
    },
    {
      referencia:
        'Roncancio, G. (2018). ¿Qué tipos de indicadores de gestión del Balanced Scorecard existen? ',
      link:
        'https://gestion.pensemos.com/que-tipos-de-indicadores-de-gestion-del-balanced-scorecard-existen',
    },
  ],
  glosario: [
    {
      termino: 'Antecedente de un informe',
      significado:
        'Es un proceso en el que se indaga sobre qué tipo de información existe y los estudios que han realizado previamente sobre el tema. ',
    },
    {
      termino: 'Diagnóstico y análisis organizacional',
      significado:
        'Son los resultados de la información recolectada con instrumentos como diagramas de diagnóstico y matrices de análisis.',
    },
    {
      termino: 'Informe',
      significado:
        'Es el documento que termina de validar las acciones realizadas para una efectiva planeación estratégica, ya que es una herramienta necesaria para demostrar el procedimiento técnico aplicado, los resultados la metodología y el plan de acción definido.',
    },
    {
      termino: 'KPI',
      significado:
        '<i>Key Performance Indicator</i>, también llamado indicador clave de actuación, permite medir si una organización está alcanzando sus objetivos estratégicos y metas.',
    },
    {
      termino: 'Planificación normativa',
      significado:
        'Es un conjunto de reglas que se planifican para regular el funcionamiento interno de la organización; se formula a medio y largo plazo.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (2015). Técnicas de gestión <i>Balanced scorecard</i> (Nivel 1). SENA.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO_1 _BALANCED_SCORECARD.pdf',
    },
    {
      texto:
        'Virtual Training Lteam. (2016). Informes de gestión [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-3fWhB6MPU8',
    },
    {
      texto:
        'BCarrión, D. (2016). Cómo hacer una presentación en Prezi | tutorial básico [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tpSgub81Skg',
    },
    {
      texto:
        'Generación aprende. (2020). Cómo usar Canva:  Canva tutorial - aprende a diseñar fácil y de manera profesional [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kdE6ZmT_5MI',
    },
    {
      texto:
        'Soluciones tecnológicas. (2020). Presentación profesional en Power Point modo avanzado menú desplegable 2020 detalle a detalle [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mTbbQfdhycg',
    },
    {
      texto:
        'Méndez, J. (2018). KPI (<i>Key Performance Indicator</i>). Cómo hacer uno - (Indicadores clave de desempeño) [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Vf_z2e1tY48',
    },
    {
      texto:
        'Facultad de Estudios a Distancia UMNG. (2014).  Cuadro de mando integral [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eyau1IvNuXA',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Pacheco Llanes',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria, el Empleo y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora pedagógica y metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
