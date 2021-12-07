<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="slide-down") La planificación es una herramienta útil para orientar la toma de decisiones cotidianas, para evaluar el progreso y cambiar los enfoques al avanzar. Es por ello, que es de suma importancia para una organización, ya que proporciona un sentido de dirección y describe objetivos medibles mediante la aplicación de los indicadores KPI que, junto con la metodología del <b>Cuadro de mando integral</b>, permiten hacer seguimiento al progreso, evaluar los resultados y ajustar el plan de acción, según las necesidades de la organización. 

    p(data-aos="slide-down") Por último, y no menos importante, es la consolidación del informe, el cual permite validar las acciones realizadas para una efectiva planeación estratégica. El informe es una herramienta necesaria para demostrar el procedimiento técnico aplicado, la metodología, los resultados y el plan de acción definido, que se socializarán a directivos y grupos de interés mediante las diversas herramientas de presentación digitales que existen.
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/T3XRxAdKioI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
