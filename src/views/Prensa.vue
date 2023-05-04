<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";
</script>
<template>
  <div class="prensa_main">
    <div class="prensa_content">
      <div class="prensa_enlaces">
        <a target="_blank" href="https://www.neo2.com/habitacion-numero-34/"><img src="/img/logo1.png" alt="" /></a>
        <a target="_blank" href="https://www.traveler.es/viajes-urbanos/articulos/habitacion-numero-34-espacio-artistico-talento-joven-espanol-usera-madrid/19098"><img src="/img/logo2.png" alt="" /></a>
        <a target="_blank" href="https://smoda.elpais.com/placeres/arte-usera-carabanchel-madrid-clara-cebrian-casa-antillon-estudio-240x120-rgb/"><img src="/img/logo3.png" alt="" /></a>
      </div>
      <div class="prensa_enlaces">
        <a target="_blank" href="https://www.elledecor.com/es/arte/a34314234/habitacion-numero-34-arte-madrid-usera/"><img src="/img/logo4.png" alt="" /></a>
        <a target="_blank" href="https://www.elespanol.com/el-cultural/arte/20210326/madera-joven-espacios-madrid/568944916_0.html"><img src="/img/logo5.png" alt="" /></a>
        <a target="_blank" href="/"><img src="/img/logo6.png" alt="" /></a>
      </div>
      <div class="prensa_enlaces">
        <a target="_blank" href="https://elpais.com/icon-design/arte/2021-05-14/esto-es-una-marcianada-la-habitacion-de-usera-que-muestra-todo-a-un-publico-voyeur.html"><img src="/img/logo7.png" alt="" /></a>
        <a target="_blank" href="https://masdecultura.com/arte/habitacion-numero-34/"><img src="/img/logo8.png" alt="" /></a>
        <a target="_blank" href="https://www.abc.es/cultura/cultural/abci-abrir-galeria-tiempos-pandemicos-202103191831_noticia.html"><img src="/img/logo9.png" alt="" /></a>
      </div>
      <div class="prensa_enlaces">
        <a target="_blank" href="https://metalmagazine.eu/bi/post/interview/habitacion-numero-34"><img src="/img/logo10.png" alt="" /></a>
        <a target="_blank" href="https://exit-express.com/habitacion-numero-34/"><img src="/img/logo11.png" alt="" /></a>
        <a target="_blank" href="https://madridsecreto.co/usera-madrid/"><img src="/img/logo12.png" alt="" /></a>
      </div>
      <div class="prensa_enlaces">
        <a target="_blank" href="https://www.elconfidencial.com/el-grito/2022-09-29/mapa-arte-barrios-madrid_3496643/"><img src="/img/logo13.png" alt="" /></a>
        <a target="_blank" href="https://exit-express.com/fake-is-the-new-real/"><img src="/img/logo11.png" alt="" /></a>
        <a target="_blank" href="https://kluidmagazine.com/habitacionnumero-una-galeria-al-alma-humana/"><img src="/img/logo14.png" alt="" /></a>
      </div>
     
    </div>
    <div class="prensa_navigation">
      <MenuNavegacion linkUrl="home" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.prensa_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/img/fondo_puerta.png");
  background-size: cover;
  padding: 1em;
  @include tablet-grande() {
    height: 100vh;
    
  }
}
.prensa_content {
  @include tablet-grande() {
    
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 2em;
    margin-top: 3em;
    padding: 0 1em;
    max-width: 1100px;
    margin: 0 auto;
  }
}
.prensa_enlaces {
  
  display: grid;
  grid-template-columns: 1fr;
  @include tablet-grande() {
    
    grid-template-rows: 1fr 1fr 1fr;
    padding: 2em;
  }
}
.prensa_navigation {
  @include tablet-grande() {
    
    margin-top: 3em;
  }
}
</style>
