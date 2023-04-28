<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";
</script>
<template>
  <div class="residencias_tierra">
    <div class="residencias_background">
      <div class="residencias_puerta separacion">
        <router-link
          class="residencia_puertas_img"
          :to="{ name: 'residenciaSonora' }"
          ><img src="/img/puerta_residencias_sonoras.webp" alt=""
        /></router-link>
        <router-link
          class="residencia_puertas_img"
          :to="{ name: 'residenciaInstalativa' }"
          ><img src="/img/puerta_residencias_instalativas.webp" alt=""
        /></router-link>
      </div>
    </div>
    <div class="residencias_tierra--centrado max-width">
       <div class="residencias_tarjetas">
        <router-link class="residencias_back"  :to="{name: 'home'}"><img src="/img/tarjeta_back_tierra.webp" alt=""></router-link>
        <router-link class="residencias_home"  :to="{name: 'home'}"><img src="/img/tarjetas_inicio-tierra.webp" alt=""></router-link>
       </div>
    </div>
   
  </div>
</template>
<style lang="scss" scoped>
.residencias_background {
  background-image: url("/img/fondo_junto.webp");
  background-size: cover;
  background-position: center;
  padding: 3em 0;
  min-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.residencias_puerta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  
  padding: 2em;
 
}
.residencia_puertas_img {
  max-width: 300px;
}
.residencias_tierra{
  background-image: url("/img/suelo.webp");
  min-height: 100vh;
}
.residencias_tierra--centrado{
  
  padding: 1em;
  margin-top: 3em;
}
.residencias_tarjetas{
display: flex;
justify-content: space-between;

}
.residencias_back{
  transform: rotate(-15deg);
  @include tablet(){
    padding: 1em;
  }
  
}
.residencias_home{
  transform: rotate(15deg);
  @include tablet(){
    padding: 1em;
  }
}
</style>
