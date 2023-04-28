<script>
export default {
  props: ["imagen"],
};
</script>
<template>
  <div class="talent">
    <div class="talent_carrousel_container">
      <div class="talent_carrousel_content">
        <div
          v-for="imagen in imagen"
          :key="imagen"
          class="talent_carrousel_item"
        >
          <video ><source :src="imagen"><img :src="imagen" alt=""></video>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.talent_carrousel_container {
  overflow: hidden;
}
.talent_carrousel_content {
  overflow: auto;
  display: flex;
  align-items: center;
}
.talent_carrousel_item>embed {
  max-width: 20em;
  padding: 1em;
  
  object-fit: cover;
}
</style>
