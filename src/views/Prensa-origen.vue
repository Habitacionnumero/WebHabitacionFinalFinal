<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";
</script>
<template>
  <div class="prensa ">
    <div class="prensa_enlaces">
        <div class="prensa_enlaces_tres">
            <a href="https://www.neo2.com/habitacion-numero-34/"><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://www.traveler.es/viajes-urbanos/articulos/habitacion-numero-34-espacio-artistico-talento-joven-espanol-usera-madrid/19098"><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://smoda.elpais.com/placeres/arte-usera-carabanchel-madrid-clara-cebrian-casa-antillon-estudio-240x120-rgb/"><img src="/img/logo_marco.webp" alt=""></a>
        </div>
        <div class="prensa_enlaces_tres">
            <a href="https://www.elledecor.com/es/arte/a34314234/habitacion-numero-34-arte-madrid-usera/"><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://www.elespanol.com/el-cultural/arte/20210326/madera-joven-espacios-madrid/568944916_0.html"><img src="/img/logo_marco.webp" alt=""></a>
        </div>
        <div class="prensa_enlaces_tres">
            <a href=""><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://elpais.com/icon-design/arte/2021-05-14/esto-es-una-marcianada-la-habitacion-de-usera-que-muestra-todo-a-un-publico-voyeur.html"><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://masdecultura.com/arte/habitacion-numero-34/"><img src="/img/logo_marco.webp" alt=""></a>
        </div>
        <div class="prensa_enlaces_tres">
            <a href="https://www.abc.es/cultura/cultural/abci-abrir-galeria-tiempos-pandemicos-202103191831_noticia.html"><img src="/img/logo_marco.webp" alt=""></a>
            <a href="https://metalmagazine.eu/bi/post/interview/habitacion-numero-34"><img src="/img/logo_marco.webp" alt=""></a>
        </div>

    </div>
    <MenuNavegacion linkUrl="home" />
  </div>
</template>
<style lang="scss" scoped>
.prensa{
    padding: 1em;
    background-image: url("/img/fondo_puerta.webp");
}
.prensa_enlaces{
    max-width: 900px;
    margin: 0 auto;
}
.prensa_enlaces_tres{
    display: grid;
    grid-template-columns: 1fr ;
    
    align-items: center;
}
.prensa_enlaces_tres>a{
    max-width: 90%;
    justify-self: center;
}
</style>