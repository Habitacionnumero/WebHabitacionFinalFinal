<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";

import es from "../lang/es.json";
import en from "../lang/en.json";
</script>
<template>
  <div class="max-width padding-web">
    <div class="sonoras_plano separacion">
      <img src="/img/plano_vertical.webp" alt="" />
    </div>
    <div class="membrete separacion">
      <EnButton />
      <div class="texto-colgante">
        <h1>{{ es.sonoraH1 }}</h1>
        <p>{{ es.sonoraP1 }}</p>
        <p>{{ es.sonoraP2 }}</p>
        <a href="https://www.instagram.com/habitacionnumero/">IG: habitacionnumero</a>
        <h2>{{ es.sonoraH2 }}</h2>
        <ul>
          <li>{{ es.sonoraLi1 }}</li>
          <li>{{ es.sonoraLi2 }}</li>
          <li>{{ es.sonoraLi3 }}</li>
          <li>{{ es.sonoraLi4 }}</li>
          <li>{{ es.sonoraLi5 }}</li>
          <li>{{ es.sonoraLi6 }}</li>
          <li>{{ es.sonoraLi7 }}</li>
          
        </ul>
        <h3>{{ es.sonoraH3 }}</h3>
        <ul>
          <li>{{ es.sonoraLi8 }}</li>
          <li>{{ es.sonoraLi9 }}</li>
          <li>{{ es.sonoraLi10 }}</li>
          <li>{{ es.sonoraLi11 }}</li>
          <li>{{ es.sonoraLi12 }}</li>
          <li>{{ es.sonoraLi13 }}</li>
          <li>{{ es.sonoraLi14 }}</li>
          <li>{{ es.sonoraLi15 }}</li>
          <li>{{ es.sonoraLi16 }}</li>
          <li>{{ es.sonoraLi17 }}</li>
          <li>{{ es.sonoraLi18 }}</li>
          <li>{{ es.sonoraLi19 }}</li>
          <li>{{ es.sonoraLi20 }}</li>
        </ul>
        <p>{{ es.sonoraP3 }}</p>
        <ul>
          <li>{{ es.sonoraLi28 }}</li>
          <li>{{ es.sonoraLi21 }}</li>
          <li>{{ es.sonoraLi22 }}</li>
          <li>{{ es.sonoraLi23 }}</li>
          <li>{{ es.sonoraLi24 }}</li>
        </ul>
        <a href="mailto:aplica@habitacionnumero.org">aplica@habitacionnumero.org</a>
        <a href="mailto:habitacionnumero@gmail.com">habitacionnumero@gmail.com</a>
        <h4>{{ es.sonoraH4 }}</h4>
        <ul>
          <li>{{ es.sonoraLi25 }}</li>
          <li>{{ es.sonoraLi26 }}</li>
          <li>{{ es.sonoraLi27 }}</li>
        </ul>

      </div>

     
    </div>
    <div class="sonoras_puerta">
        <div></div>
        <div><router-link :to="{name: 'examples'}"><img src="/img/puerta_examples.webp" alt=""></router-link></div>
        <div></div>
    </div>

    <MenuNavegacion linkUrl="residencias" />
  </div>
</template>
<style lang="scss" scoped>
.sonoras_puerta{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>