<template>
  <div class="main">
    <div class="main_top">
      
      <div class="main_top_menu ">
        <div class="main_top_doors max-width">
          <router-link :to="{ name: 'residenciaSonora' }"
            ><img src="/img/puerta_residencias_sonoras.webp" alt=""
          /></router-link>
          <router-link :to="{ name: 'residenciaInstalativa' }"
            ><img src="/img/puerta_residencias_instalativas.webp" alt=""
          /></router-link>
          
        </div>
      </div>
    </div>
    <div class="main_bottom_content">
      <div class="main_bottom">
        <router-link :to="{ name: 'home' }"
        ><div class="tarjeta">
          <img src="/img/tarjeta_back_tierra.webp" alt="" class="aplica" /></div
      ></router-link>
      <router-link :to="{ name: 'home' }"
        ><div class="tarjeta">
          <img src="/img/tarjetas_inicio-tierra.webp" alt="" class="contacto" /></div
      ></router-link>
      
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: url("/img/suelo.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include tablet-grande(){
    position: relative;
    top: inherit;
    min-height: 100vh;
  }
}
.main_top {
  background: url("/img/fondo_junto.webp");
  background-position: right 65% bottom 65%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  padding: 1em;
  padding-top: 1em;
  width: 100%;
  background-size: cover;
  @include tablet(){
    min-height: 70vh;
  }
  
}

.main_top_menu{
  padding-top: 5em;
}
.main_top_doors {
  display: flex;
  justify-content: center;
  
  
}
.main_bottom_content{
  position: relative;
}
.main_bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  padding: 2em;
  @include tablet(){
    max-width: 500px;
    
  }
  
}
.aplica {
  transform: rotate(-15deg);
  
  
}
.contacto {
  transform: rotate(15deg);
  
}
.prensa {
  transform: rotate(10deg);
}
</style>
