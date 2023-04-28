<script setup>
import { ref } from "@vue/reactivity";

import MenuNavegacionVue from "../components/MenuNavegacion.vue";
import es from "../lang/es.json"
import en from "../lang/en.json"
const idioma = ref(true)
</script>

<template>
  <div class="background">
    <div class="container_install max-width ">
    <div class="separacion contacto_colgante">
      
      <img src="/img/texto_contact.webp" alt="">
    </div>

    <iframe
      class="iframe separacion"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.370457957916!2d-3.7147763847118314!3d40.378481379369575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227321570f2cb%3A0x1009035a86a772a3!2sHabitaci%C3%B3n%20N%C3%BAmero%2034!5e0!3m2!1ses!2ses!4v1673522817868!5m2!1ses!2ses"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    
    <MenuNavegacionVue linkUrl="home" />
  </div>
  </div>
  
</template>
<style lang="scss" scoped>
.container_install {
  padding: 1em ;
  
}
.contacto_colgante{
  @include tablet(){
    max-width: $mx-tablet;
    margin: 0 auto;
  }
}
.iframe{
  min-height: 500px;
  @include tablet(){
    margin: 0 auto;
    max-width: $mx-tablet;
  }
}





</style>
