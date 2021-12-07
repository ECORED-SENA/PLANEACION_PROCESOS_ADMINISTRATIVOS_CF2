<template lang="pug">
.curso-main-container.pb-3
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Elaboración de informes
    p(data-aos="fade-down-right") El informe es el documento que termina de validar las acciones realizadas para una efectiva planeación estratégica, ya que es una herramienta necesaria para demostrar el procedimiento técnico aplicado, los resultados, la metodología y el plan de acción definido. 

    p(data-aos="fade-down-right") Según Gestionpro (2021), los aspectos que se deben tener en cuenta para la elaboración de un informe son los siguientes: 

    .row.justify-content-center.align-items-strecth.mt-5      
      .col-lg-4.bg-card-img.px-4.py-5.br-rad.text-white(data-aos="flip-down")
        h5.pt-5.text-center Describe qué quiere obtener de la investigación 
        p.mt-4.pb-5 Antes de iniciar la redacción de un informe es de vital importancia identificar los propósitos por lo cuales se realiza el proyecto y cuáles son los objetivos que se desean lograr con ello. Asimismo, determinar los temas que se deben analizar con total profundidad y plantear una hipótesis.

      .col-lg-4.bg-card-img-1.px-4.py-5.br-rad.text-white(data-aos="flip-down")
        h5.pt-5.text-center Hallar antecedentes
        p.mt-4.pb-5 En este proceso se indaga sobre qué tipo de información existe y los estudios que han realizado previamente sobre el tema. Esto permite definir un rumbo, ya que facilita orientarse con el trabajo de otros autores, ejemplos de ellos son: información en artículos de revistas indexadas, tesis en repositorios de universidades y trabajos de investigación relacionados con el tema del informe. 


      .col-lg-4.bg-card-img-2.px-4.py-5.br-rad.text-white(data-aos="flip-down")
        h5.pt-5.text-center Sigue una metodología 
        p.mt-4.pb-5 Consiste en describir cuál es el tipo de investigación que está realizando, cuáles son los medios por los que está obteniendo información, el método de recolección que utilizará, el tamaño de la muestra y la ubicación geográfica.     

    .row.justify-content-center.align-items-strecth   
      .col-lg-4.bg-card-img-3.px-4.py-5.br-rad.text-white(data-aos="flip-down")
        h5.pt-5.text-center Redactar la información
        p.mt-4.pb-5 Al presentar el informe es necesario que lo divida por temas y establezca un orden. De esta forma se puede presentar sin confusiones. Complemente el reporte utilizando gráficos o diagramas que permitan visualizarlo y entenderlo correctamente.


      .col-lg-4.bg-card-img-4.px-4.py-5.br-rad.text-white(data-aos="flip-down")
        h5.pt-5.text-center Redactar la conclusión
        p.mt-4.pb-5 Una vez analizado el estudio y la información obtenida es primordial realizar un registro para informar acerca de los resultados hallados en la investigación y redactar las recomendaciones que considere pertinentes para resolverlos.
                    
    p(data-aos="fade-down-right").mt-5 Con base en estas características es posible distinguir los tipos de informes a estudiar:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12.bg-img-1.py-5(data-aos="zoom-in")
        .row.justify-content-center.align-items-center.my-5
          .col-lg-5
            p.text-center.bg-title.px-5.py-3 #[b Tipos de Informes]

        ImagenInfografica.color-primario.my-5.py-5.d-none.d-lg-block
          template(v-slot:imagen)
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img36.svg', alt=' ')


          .tarjeta.color-acento-contenido.p-3(x="25.5%" y="71.6%" numero="")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6 
                .h5.mb-2 Informe infográfico en tiempo real
                p.mb-0 Es un informe básico que contiene los resultados, por ejemplo, de una encuesta, actualizados en tiempo real. El informe consta de las estadísticas y gráficos básicos de los datos recolectados hasta el momento, mediante una herramienta de recolección de datos. 
                        
              .col-lg-6          
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img37.svg', alt='')
    

          .tarjeta.color-acento-contenido.p-3(x="48.0%" y="10.5%" numero="")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6 
                .h5.mb-2 Informe análisis de tendencia
                p.mb-0 Hacer un análisis de tendencias para un informe de investigación ofrece la posibilidad de ver datos a lo largo del tiempo. Esto puede ser útil para comparar las puntuaciones de pruebas o exámenes, o para identificar tendencias para una encuesta de satisfacción que se distribuye regularmente.
                        
              .col-lg-6          
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img38.svg', alt='')

          .tarjeta.color-acento-contenido.p-3(x="70.9%" y="71.2%" numero="")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6 
                .h5.mb-2 Informe comparativo
                p.mb-0 Este es uno de los ejemplos de informes que  ayudan a comparar los resultados de una encuesta entre los diferentes grupos de encuestados o realizar un seguimiento de una situación en diferentes momentos o condiciones, por ejemplo, ¿cómo responden los hombres frente a las mujeres en una determinada pregunta?
                        
              .col-lg-6          
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img39.svg', alt='') 

          .tarjeta.color-acento-contenido.p-3(x="94.0%" y="10.5%" numero="")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6 
                .h5.mb-2 Informe de texto abierto
                p.mb-0 Cada proyecto de investigación implica normalmente la recolección de datos de respuestas en múltiples formatos, por ejemplo, las que se generan a través de preguntas abiertas. El informe de texto abierto permite ver las respuestas abiertas, así como los comentarios que generan los participantes de una investigación.

                        
              .col-lg-6          
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img40.svg', alt='')

        .row.justify-content-center.align-items-center.p-4.d-block.d-lg-none
          .col-lg-6 
            .h5.mb-2 Informe infográfico en tiempo real
            p.mb-0 Es un informe básico que contiene los resultados, por ejemplo, de una encuesta, actualizados en tiempo real. El informe consta de las estadísticas y gráficos básicos de los datos recolectados hasta el momento, mediante una herramienta de recolección de datos. 
                    
          .col-lg-6          
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img37.svg', alt='')

        .row.justify-content-center.align-items-center.p-4.d-block.d-lg-none
          .col-lg-6 
            .h5.mb-2 Informe análisis de tendencia
            p.mb-0 Hacer un análisis de tendencias para un informe de investigación ofrece la posibilidad de ver datos a lo largo del tiempo. Esto puede ser útil para comparar las puntuaciones de pruebas o exámenes, o para identificar tendencias para una encuesta de satisfacción que se distribuye regularmente.
                    
          .col-lg-6          
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img38.svg', alt='')

        .row.justify-content-center.align-items-center.p-4.d-block.d-lg-none
          .col-lg-6 
            .h5.mb-2 Informe comparativo
            p.mb-0 Este es uno de los ejemplos de informes que  ayudan a comparar los resultados de una encuesta entre los diferentes grupos de encuestados o realizar un seguimiento de una situación en diferentes momentos o condiciones, por ejemplo, ¿cómo responden los hombres frente a las mujeres en una determinada pregunta?
                    
          .col-lg-6          
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img39.svg', alt='')

        .row.justify-content-center.align-items-center.p-4.d-block.d-lg-none
          .col-lg-6 
            .h5.mb-2 Informe de texto abierto
            p.mb-0 Cada proyecto de investigación implica normalmente la recolección de datos de respuestas en múltiples formatos, por ejemplo, las que se generan a través de preguntas abiertas. El informe de texto abierto permite ver las respuestas abiertas, así como los comentarios que generan los participantes de una investigación.
                    
          .col-lg-6          
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img40.svg', alt='')                        
                  

    separador(data-aos="slide-left")

    #t_3_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.1  Normas técnicas para la elaboración de un informe 
    p(data-aos="fade-down-right") Según la Guía técnica colombiana GTC 185 del ICONTEC (2009) las características de redacción y presentación de un informe son: 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.cajon.color-primario.p-4.mb-4.br-primario(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-lg-8     
            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Tratar un solo tema por informe.

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Redactar de forma clara, precisa, concreta y concisa.

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Usar tratamiento respetuoso y cortés.

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Redactar en forma impersonal.

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Usar los formatos normalizados, de acuerdo con los manuales de la cada organización.

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Disponer el orden en que se van a describir y contar las actividades realizadas. 

            .list.mt-3(data-aos="fade-down-left")
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Elegir un lenguaje técnico adecuado, así como el tono para presentar los hechos (ICONTEC, 2009).          
          .col-lg-4   
            img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img44.svg', alt='')  

    separador(data-aos="slide-left")

    #t_3_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.2  Estructura de un informe             
    .row.justify-content-start.align-items-center
      .col-lg-6
        p(data-aos="fade-down-right") Para realizar un informe no solo es importante saber las normas de redacción, sino también conocer cómo es su estructura, la cual debe tener el propósito de brindar información útil a la organización. La finalidad de un informe es básicamente transmitir la información a las personas que trabajan en la misma empresa y que puedan tomar decisiones sobre las actividades que se realizan a diario. 

        p(data-aos="fade-down-right") Sea cual sea el tipo de informe empresarial que redacte, se debe incluir todas las partes detalladas en la tabla que está a continuación:      
      .col-lg-5
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img45.svg', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-down-left")
        .titulo-sexto.color-acento-botones.mt-5
          h5 Tabla 1. 
          span Informe de planeación 
        .tabla-a.color-acento-botones.table-br-top.mt-3
          table
            caption Nota. Este informe debe cumplir con la séptima edición de las Normas APA.
            tbody
              tr
                td.w #[b Portada]
                td Nombre de la empresa, nombre de los autores, ciudad y año de elaboración.        
              tr
                td.w #[b Tabla de contenido ]
                td Se relacionan los títulos que contiene el informe.
              tr
                td.w #[b Introducción]
                td Se hace una descripción breve del tema desarrollado en el informe.
              tr
                td.w #[b Reseña de la empresa]
                td Reseña histórica de la empresa que incluye la trayectoria.
              tr
                td.w #[b Objetivos ]
                td Se define cuál es el propósito que se persigue con el informe. 
              tr
                td.w #[b Diagnóstico y análisis organizacional]
                td En este espacio se realiza la descripción de la metodología a aplicar para realizar el diagnóstico y análisis empresarial.<br>-	Resultados de la información recolectada con instrumentos aplicados.    <br>-	Matrices o diagramas de diagnóstico.<br>-	Matrices de análisis.

              tr
                td.w #[b Propuesta de mejora ]
                td En este espacio se describe la propuesta de mejora según los resultados del diagnóstico y análisis empresarial.<br>-	Justificación de la propuesta.<br>-	Formulación de las estrategias.

              tr
                td.w #[b Plan de acción]
                td En este espacio se formula el plan de acción.<br>-	Definir los objetivos del plan.<br>-	Detallar las estrategias.<br>-	Plantear las tareas.<br>-	Elaborar el cronograma.<br>-	Designar responsables.
              tr
                td.w #[b Seguimiento]
                td Este espacio debe contener el modelo gestión empresarial, que integrará las diferentes áreas funcionales de la empresa y su relación con el entorno. Asimismo, las herramientas de medición.<br>-	<i>Balanced scorecard</i> o Cuadro de mando integral.<br>-	Indicadores KPI.

              tr
                td.w #[b Conclusiones]
                td En este espacio se describe de manera general ¿qué se hizo?, ¿cómo se hizo?, ¿para qué se hizo?, el resultado como tal y las recomendaciones que se consideren pertinentes.  
              tr
                td.w #[b Anexos]
                td Toda la información que se considere pertinente y que se referenció en el proceso.
              tr
                td.w #[b Bibliografía ]
                td Textos, revistas, páginas <i>web</i>, entidades y demás documentos consultados.      

    p(data-aos="fade-down-right").mt-5 Dentro de la estructura se debe tener muy claro a la hora de escribir un informe que la información esté organizada y permita una fácil comprensión. A continuación, puede ver un video del informe de gestión empresarial: 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cQePqBGsnCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador(data-aos="slide-left")

    #t_3_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.3 Herramientas para la socialización de un informe

    p(data-aos="fade-down-right") Para la socialización de un informe existen diversas herramientas digitales que facilitan la presentación de la información, entre las más utilizadas se puede encontrar las siguientes:

    TabsA.color-primario.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Vizia")
        h5 Vizia
        p Permite crear informes en vivo. Además, puede visualizar los datos en tiempo real desde la oficina, escritorio o dispositivo móvil, desde donde quiera.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tableau")
        h5 Tableau
        p Es una herramienta de visualización de datos que permite crear gráficos interactivos, puede ser desde un gráfico de barras hasta mapas globales. Es utilizado en la configuración de un informe para inteligencia del negocio o localización de clientes.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Power BI")
        h5 Power BI
        p Es una herramienta de inteligencia empresarial que permite trabajar con datos, importar datos ya sea a través de plataformas con distintas aplicaciones. Es una herramienta muy flexible que permite adaptarse a cualquier tipo de organización o negocio.   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Agency analytics")
        h5 Agency analytics
        p es considerada para realizar tráfico de redes sociales, <i>email marketing</i>, configurar métricas y fuentes de datos, creando una para cada cliente en caso de ser necesario. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
