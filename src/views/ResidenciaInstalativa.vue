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
        <h1>{{ es.installH1 }}</h1>
        <p>{{ es.installP1 }}</p>
        <p>{{ es.installP2 }}</p>
        <h2>{{ es.installH2 }}</h2>
        <ul>
          <li>{{ es.installLi1 }}</li>
          <li>{{ es.installLi2 }}</li>
          <li>{{ es.installLi3 }}</li>
          <li>{{ es.installLi4 }}</li>
          <li>{{ es.installLi5 }}</li>
          <li>{{ es.installLi6 }}</li>
          <li>{{ es.installLi7 }}</li>
          
        </ul>
        <h3>{{ es.installH3 }}</h3>
        <ul>
          <li>{{ es.installLi8 }}</li>
          <li>{{ es.installLi9 }}</li>
          <li>{{ es.installLi10 }}</li>
          <li>{{ es.installLi11 }}</li>
          <li>{{ es.installLi12 }}</li>
          <li>{{ es.installLi13 }}</li>
          <li>{{ es.installLi14 }}</li>
          <li>{{ es.installLi15 }}</li>
          <li>{{ es.installLi16 }}</li>
          <li>{{ es.installLi17 }}</li>
          <li>{{ es.installLi18 }}</li>
          <li>{{ es.installLi19 }}</li>
          <li>{{ es.installLi20 }}</li>
        </ul>
        <p>{{ es.installP3 }}</p>
        <ul>
          <li>{{ es.installLi21 }}</li>
          <li>{{ es.installLi22 }}</li>
          <li>{{ es.installLi23 }}</li>
          <li>{{ es.installLi24 }}</li>
        </ul>
        <a href="mailto:aplica@habitacionnumero.org">aplica@habitacionnumero.org</a>
        <a href="mailto:habitacionnumero@gmail.com">habitacionnumero@gmail.com</a>
        <h4>{{ es.installH4 }}</h4>
        <ul>
          <li>{{ es.installLi25 }}</li>
          <li>{{ es.installLi26 }}</li>
          <li>{{ es.installLi27 }}</li>
        </ul>
        
      </div>

     
    </div>
    

    <MenuNavegacion linkUrl="residencias" />
  </div>
</template>
<style lang="scss" scoped>

</style>