<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";

</script>
<template>
  <div class="talentos">
    <div class="talentos_content max-width">
      <div
      class="titulo"
      style="text-align: center; font-size: 1.5em; padding-top: 1em"
    >
      <P>WELCOME</P>
      <p>HN3.0</p>
      <P>META</P>
    </div>
    
    <div class="talentos_img separacion">
      <video loop autoplay muted controls playsinline  src="/img/recursos_extendidos.mp4"></video>
    </div>
    
    <MenuNavegacion linkUrl="meta"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.talentos {
  min-height: 100vh;
  padding: 1em;
  background-image: url("/img/fondo_puerta.webp");
}




</style>
