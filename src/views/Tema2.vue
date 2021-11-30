<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Cuadro de mando integral (<i>Balanced scorecard</i>)
    p(data-aos="fade-down-right") Existen diversos modelos de planificación estratégica que facilitan la toma de decisiones; sin embargo, para el proceso de implementar, evaluar el progreso y cambiar el enfoque del plan de acción, se utiliza el modelo <i>Balanced scorecard</i> o cuadro de mando integral. 
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-left")  
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img22.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El <i>Balanced scorecard</i> o Cuadro de mando integral es una metodología de gestión estratégica utilizada para definir y hacer seguimiento a la estrategia de una organización. Esta metodología creada por Robert Kaplan y David Norton permite estructurar los objetivos estratégicos de forma dinámica e integral para ponerlos a prueba, según una serie de indicadores que evalúan el desempeño de todas las iniciativas y los proyectos necesarios para lograr su cumplimiento satisfactorio. Le puede resultar útil el resumen sobre el Cuadro de mando integral. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.bloque-texto-c.color-primario.p-4.br-white(data-aos="zoom-in-right")
        i.fas.fa-quote-right
        h2.mb-2 “El BSC se basa en un correcto equilibrio y alineación entre los elementos de la estrategia global y los elementos operativos de la misma. Los elementos globales son: la misión (nuestro propósito), la visión (a qué aspiramos), los valores centrales (en qué creemos), las perspectivas y los objetivos”
        span (Roncancio, 2018).

    separador(data-aos="slide-left")

    #t_2_1.titulo-segundo.color-primario.mb-5.pb-4(data-aos="zoom-in-left")
      h2 2.1  Perspectivas 

    .row.justify-content-end.align-items-center
      .col-lg-9.card-color-1.p-5.d-none.d-lg-block  
        p.ps-5.mb-0.ms-2 Según el método estratégico del <i>Balanced scorecard</i> el concepto de estrategia de una organización debe realizarse de acuerdo con cuatro perspectivas, cada una permite adicionar los objetivos estratégicos asociados. 
    .row.justify-content-start.align-items-center
      .col-lg-4.me-5.d-none.d-lg-block  
        img.img-t.img-a.row-top-1(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.svg', alt='') 

    .row.justify-content-center.align-items-center
      .col-lg-10.d-block.d-lg-none
        p Según el método estratégico del <i>Balanced scorecard</i> el concepto de estrategia de una organización debe realizarse de acuerdo con cuatro perspectivas, cada una permite adicionar los objetivos estratégicos asociados.        

    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center(titulo="Perspectiva financiera. ")
        .col-lg-8
          p Para la mayoría de las organizaciones con fines de lucro el dinero es una prioridad. Por lo tanto, para estas organizaciones la perspectiva más importante tiene que ver con los objetivos financieros. Esencialmente, cualquier objetivo clave relacionado con la salud financiera y la rentabilidad de la organización puede incluirse en esta perspectiva. Los ingresos y las ganancias son objetivos obvios que la mayoría de las organizaciones enumeran en esta perspectiva. Otros objetivos financieros podrían incluir el generar ahorro de costos y eficiencia, mejorar el margen de rentabilidad o aumentar las fuentes de ingresos. 
        .col-lg-4
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.svg', alt='') 

      .row.justify-content-center.align-items-center(titulo="Perspectiva del cliente. ")
        .col-lg-12
          p Esta perspectiva se centra en los objetivos estratégicos que están relacionados con los clientes y el mercado. En otras palabras, para lograr sus objetivos financieros ¿exactamente qué necesita lograr en términos de sus clientes y mercado(s)?

          p Incluidos en esta perspectiva puede encontrar objetivos estratégicos para el servicio al cliente y satisfacción, participación en el mercado y reconocimiento de marca.

      .row.justify-content-center.align-items-center(titulo="Perspectiva de los procesos internos. ")
        .col-lg-8
          p ¿Qué procesos necesita implementar para cumplir sus objetivos estratégicos financieros y relacionados con los clientes? Esa es la pregunta que esta perspectiva pretende responder, aquí debe establecer metas y objetivos operativos internos o en otras palabras, definir qué procesos que requiere actualmente la organización y qué debe hacer para mejorar su desempeño (Roncancio, 2018).
        .col-lg-4
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.svg', alt='') 

      .row.justify-content-center.align-items-center(titulo="Perspectiva de aprendizaje y crecimiento. ")
        .col-lg-12
          p Está compuesta por el capital organizacional (liderazgo, cultura, trabajo en equipo, alineación de empleados y gestión del conocimiento), capital humano (talento, habilidades y conocimiento) y el capital de información (sistemas de información, bases de datos e infraestructura y redes tecnológicas).
            
    separador(data-aos="slide-left")

    #t_2_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.2  Indicadores

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.svg', alt='')     
      .col-lg-6.card-color-2.p-4.my-3
        p(data-aos="fade-down-right") El indicador de desempeño o indicador de gestión KPI (Key Performance Indicator), también llamado indicador clave de actuación, permite medir si una organización está alcanzando sus objetivos estratégicos y metas.
        p(data-aos="fade-down-right") Las empresas emplean indicadores de gestión o desempeño en varios niveles para evaluar su éxito al alcanzar las metas propuestas. Los indicadores de gestión de nivel alto permiten a la empresa enfocarse en el desempeño general, por otro lado, los KPI de nivel bajo permiten enfocar los procesos o los empleados en cada área o departamento. 
        p.mb-0(data-aos="fade-down-right") A continuación, se presentan los tipos de indicadores de gestión del Balanced scorecard que existen:

    .row.justify-content-center.align-items-center.my-5
      .col-lg-5
        p.text-center.bg-title.px-5.py-3 #[b Indicadores de gestión] 

    ImagenInfografica.color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img.img-t.img-a(src='@/assets/ilustraciones/img27.jpg', alt=' ')


      .tarjeta.color-secundario.p-3(x="7.5%" y="4%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6 
            .h5.mb-2 Indicadores cualitativos vs. cuantitativos       
            p.mb-0 Este es uno de los métodos más utilizados para determinar indicadores de gestión. La mayoría de las veces los KPI que miden percepciones y las opiniones son de naturaleza cualitativas, entretanto, el resto son de enfoque cuantitativos; sin embargo, en la práctica los dos se manejan de forma numérica cuando se mide un KPI.                    
          .col-lg-6          
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img28.svg', alt='')

      .tarjeta.color-secundario.p-3(x="47.9%" y="3%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6 
            .h5.mb-2 Indicadores inductores vs históricos
            p.mb-0 Esta clasificación interpreta las interrelaciones entre los KPI, “inductor o predictivo" hace referencia a los indicadores de gestión que influyen en los resultados futuros. Por otra parte, “histórico o rezagado" se refiere a indicadores de desempeño que se basan en el desempeño que ocurrió en el pasado.                    
          .col-lg-6          
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img29.svg', alt='')

      .tarjeta.color-secundario.p-3(x="3%" y="41%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6 
            .h5.mb-2 Indicadores  de eficacia vs de eficiencia
            p.mb-0 Este tipo de indicadores mide cada proceso desde dos dimensiones. Mientras la eficacia evalúa si los resultados deseados se cumplieron, la eficiencia muestra la medida en que el tiempo, el costo o el esfuerzo que se aplican pertinentemente alcanza los resultados deseados.                  
          .col-lg-6          
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img30.svg', alt='')    

      .tarjeta.color-secundario.p-3(x="41.5%" y="35.5%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-12
            .h5.mb-2 Indicadores de desempeño  <i>Balanced socrecard</i>
            p Estos KPI permiten evaluar a la organización desde las 4 perspectivas que componen el modelo de gestión del Balanced scorecard:
            p Indicadores de la perspectiva financiera: esta clase de indicadores muestran el contexto económico de la empresa, específicamente sus estados financieros. Entre ellos se puede encontrar indicadores de endeudamiento, liquidez, rentabilidad.
            p Indicadores de la perspectiva del cliente: Los indicadores de esta perspectiva tienen que ver con el capital relacional de la organización. Pueden estar incluidos indicadores de satisfacción de los clientes, de fidelización, de rentabilidad por cliente o de optimización de plazos de entrega.
            p Indicadores de la perspectiva de procesos: los indicadores de esta perspectiva analizan el rendimiento de los procesos internos relacionados con la organización y la satisfacción de los clientes.
            p Indicadores de la perspectiva de aprendizaje y crecimiento: este tipo de indicadores se relacionan con la capacidad de innovación en varios procesos de la organización, con la habilidad para mejorar y aprender.                  
            img.img-t.img-a.mt-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img41.svg', alt='') 

      .tarjeta.color-secundario.p-3(x="5%" y="61.5%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6 
            .h5.mb-2 Indicadores de entrada/proceso/salida
            p Este tipo de KPI permite medir cada etapa de la cadena de valor en relación con los objetivos estratégicos.
            p Los KPI de entrada: miden los recursos vinculados en el logro de los objetivos. Ejemplos: cantidad empleados de un departamento, presupuesto para implementar un plan de mejora.
            p Los KPI de proceso: muestran las actividades necesarias para conseguir los resultados esperados. Ejemplos: tiempo para procesar pedidos, tasa de utilización de la maquinaria.
            p Los KPI de salida: hacen referencia a la cantidad o la calidad de los productos o servicios creados. Ejemplos: cantidad de productos vendidos, cantidad de megabyte generada.
          .col-lg-6          
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img42.svg', alt='')            

      .tarjeta.color-secundario.p-3(x="35%" y="73.5%" numero="")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6 
            .h5.mb-2 Indicadores  estratégicos vs. operativos
            p ESe refiere a los KPI teniendo en cuenta el nivel organizacional. Los estratégicos pueden ser el índice de satisfacción del cliente, la cuota de mercado, el margen de los ingresos y la rentabilidad. Dentro de los KPI operativos se puede encontrar la tasa de productos defectuosos, la cantidad de tiempo en gestionar un pedido.
          .col-lg-6          
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img43.svg', alt='')                                   
</template>

<script>
export default {
  name: 'Tema2',
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
