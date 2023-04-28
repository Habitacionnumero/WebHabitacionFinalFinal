<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";

import es from "../lang/es.json";
import en from "../lang/en.json";
</script>
<script>
export default {
  data() {
    return {
      
      lang: true,
    };
  },
};
</script>
<template>
  <div class="background">
    <div class="meta max-width">
      <div class="meta_responsive">
        <div
          class="titulo"
          
        >
          <P>WELCOME</P>
          <p>HN3.0</p>
          <P>META</P>
        </div>

        <div class="meta_colgante separacion">
          <img v-if="lang" src="/img/meta_eng.png" alt="" usemap="#pomo"/>
          <img v-else src="/img/meta_esp.png" alt="" usemap="#pomo">
          <map name="pomo" id="pomo">
        <area
        class="bg"
          shape="circle"
          coords="250, 150, 100"
          href="/"
          alt=""
          @click.prevent="lang = !lang"
        />
        <area class="bg" shape="rect" coords="930,5038,14,1500" href="https://www.instagram.com/habitacionnumero/" target="_blank" alt="enlace instagram">
      </map>
        </div>
      </div>

      <MenuNavegacion linkUrl="meta" class="separacion" />
    </div>
  </div>
  <!-- fin meta definitivo -->
</template>
<style lang="scss" scoped>
.meta {
  padding: 1em;
}
.titulo {
  text-align: center;
  font-size: 1.5em;
  padding-top: 1em;
}
.meta_colgante {
  @include tablet() {
    max-width: $mx-tablet;
    margin: 0 auto;
  }
}
</style>
