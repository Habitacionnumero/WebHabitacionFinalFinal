<template>
  <div class="puerta">
    <img :src="imagen" alt="" class="puerta_a" />
  </div>
</template>
<script>
export default {
  props: ["imagen"],
};
</script>
<style lang="scss" scoped>
.puerta {
  min-width: 1.5vw;
  display: flex;
  justify-content: center;
}
.puerta_a {
  cursor: url("/img/llave_raton.webp"), auto;
  
}
</style>
