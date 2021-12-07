<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La planificación orienta las decisiones, evaluar el progreso y cambiar los enfoques al avanzar.  Los indicadores <b>KPI</b> y la metodología del <b>Cuadro de mando integral</b> permiten hacer seguimiento al progreso, evaluar los resultados y ajustar el plan de acción. Por último, es la consolidación del informe, la cual permite validar las acciones realizadas para una efectiva planeación estratégica. El informe demuestra la gestión, el procedimiento técnico aplicado, la metodología, los resultados y el plan de acción definido, que se socializarán a los directivos y grupos de interés mediante las diversas herramientas de presentación digitales que existen. 

    .row.justify-content-center
      .col-lg-10.mt-5
        figure
          img(src="@/assets/ilustraciones/img46.svg", alt="alt")
      //- .col-auto
      //-   a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
      //-     .anexo__icono
      //-       img(src="@/assets/template/icono-pdf.svg")
      //-     .anexo__texto
      //-       p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
