<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";

import es from "../lang/es.json";
import en from "../lang/en.json";
</script>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<template>
  <!-- representacion provisional -->
  <!-- <div class="main_provisional">
        <router-link :to="{name: 'home'}"><img src="/img/puerta_retro.png" width="100%" height="auto" alt=""></router-link>
        
        
    </div>  -->

  <!-- fin representacion provisional -->

  <!-- meta definitivo -->

  <div class="intro" :class="{ hide: show }">
    <div class="intro_video">
      <video
        @click="show = !show"
        @ended="show = !show"
        autoplay
        playsinline
        muted
        preload
        src="/img/door_animation.mp4"
      ></video>
    </div>
  </div>
  <div class="background">
    <div class="meta max-width">
      <div class="meta_responsive">
        <div
          class="titulo"
          style="text-align: center; font-size: 1.5em; padding-top: 1em"
        >
          <P>WELCOME</P>
          <p>HN3.0</p>
          <P>META</P>
        </div>
        <div class="meta_video separacion">
          <video
            playsinline
            controls
            autoplay
            muted
            loop
            src="/img/pasillo_unity.mp4"
          ></video>
        </div>
        <div class="meta_puertas">
          <div class="meta_puertas_img">
            <router-link :to="{ name: 'talentos' }"
              ><img src="/img/puerta_talentos.png" alt=""
            /></router-link>
          </div>
          <div class="meta_puertas_img">
            <router-link :to="{ name: 'masInfo' }"
              ><img src="/img/puerta_info.png" alt=""
            /></router-link>
          </div>
        </div>
      </div>

      <MenuNavegacion linkUrl="home" class="separacion" />
    </div>
  </div>
  <!-- fin meta definitivo -->
</template>
<style lang="scss" scoped>
.main_provisional {
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
  color: grey;
  padding: 3em;
}
.intro {
  width: 100%;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/img/fondo_puerta.webp");
}
.intro_video {
  width: 100%;
  @include tablet() {
    width: 30%;
    padding: 1em;
  }
}
.hide {
  display: none;
}
@media (min-width: 600px) {
  .main_provisional img {
    max-width: 400px;
  }
}
.meta {
  padding: 1em;
}
.meta_puertas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
}
.meta_puertas_img {
  filter: drop-shadow(1px 1px 0px black);
}

.meta_colgante {
  @include tablet() {
    max-width: $mx-tablet;
    margin: 0 auto;
  }
}
</style>
