<script setup>
import { ref } from "vue";

import MenuNavegacion from "../components/MenuNavegacion.vue";
import TalentView from "../components/TalentView.vue";
</script>
<script>
export default {
  data() {
    return {
      nombres: ref("1"),
    };
  },
  methods: {
    casa() {
      console.log(this.nombres);
    },
  },
};
</script>

<template>
  <div class="talentos">
    <div class="talentos_avatar_container">
      <div class="talentos_avatar_content">
        <label
          ><input v-model="nombres" type="radio" value="1" /><img
            src="/img/emoji_rgb.png"
            alt=""
        /></label>

        <label
          ><input v-model="nombres" type="radio" value="2" /><img
            src="/img/emoji_virgen.png"
            alt=""
        /></label>

        <label
          ><input v-model="nombres" type="radio" value="3" /><img
            src="/img/emoji_user.png"
            alt=""
        /></label>
        <label
          ><input v-model="nombres" type="radio" value="4" /><img
            src="/img/emoji_user.png"
            alt=""
        /></label>
        <label
          ><input v-model="nombres" type="radio" value="5" /><img
            src="/img/emoji_user.png"
            alt=""
        /></label>
        <label
          ><input v-model="nombres" type="radio" value="6" /><img
            src="/img/emoji_user.png"
            alt=""
        /></label>
      </div>
    </div>

    <div class="talentos_content separacion">
      <div v-if="nombres == 1" class="talentos_content_item">
        <div class="talent">
          <div class="talent_carrousel_container">
            <div class="talent_carrousel_content">
              <div class="talent_carrousel_item">
                <img src="/img/imagen1.png" alt="" />
              </div>
              <div class="talent_carrousel_item">
                <img src="/img/imagen2.png" alt="" />
              </div>
              <div class="talent_carrousel_item">
                <video controls src="/img/video1.mp4" alt=""></video>
              </div>
              <div class="talent_carrousel_item">
                <img src="/img/imagen3.png" alt="" />
              </div>
              <div class="talent_carrousel_item">
                <video controls src="/img/video2.mp4" alt=""></video>
              </div>
            </div>
            <div class="talent_info">
              <img src="/img/about_eng.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div v-if="nombres == 2" class="talentos_content_item">
        <div class="talent">
          <div class="talent_carrousel_container">
            <div class="talent_carrousel_content">
              <div class="talent_carrousel_item">
                <img src="/img/imagen1.png" alt="" />
              </div>
              <div class="talent_carrousel_item">
                <img src="/img/imagen1.png" alt="" />
              </div>
              <div class="talent_carrousel_item">
                <img src="/img/imagen1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="nombres == 3" class="talentos_content_item">
        <TalentView :imagen="imagen.rgb" />
      </div>
      <div v-if="nombres == 4" class="talentos_content_item">
        <TalentView :imagen="imagen.rgb" />
      </div>
      <div v-if="nombres == 5" class="talentos_content_item">
        <TalentView :imagen="imagen.rgb" />
      </div>
      <div v-if="nombres == 6" class="talentos_content_item">
        <TalentView :imagen="imagen.rgb" />
      </div>
    </div>
    <MenuNavegacion :linkUrl="'meta'" />
  </div>
</template>
<style lang="scss" scoped>
.talentos {
  padding: 1em;
  background-image: url("/img/fondo_puerta.webp");
  min-height: 100vh;
}
.talentos_avatar_container {
  overflow: hidden;
  width: 100%;
}
.talentos_avatar_content {
  display: flex;
  overflow: auto;
}
.talentos_avatar_content label {
  min-width: 8em;
  padding: 0.5em;
}
.talent_carrousel_container {
  overflow: hidden;
}
.talent_carrousel_content {
  overflow: auto;
  display: flex;
  align-items: center;
}
.talent_carrousel_item {
  min-width: 20em;
  padding: 0 0.5em;
}
</style>
