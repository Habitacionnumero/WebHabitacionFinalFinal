<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";
</script>
<template>
  <div class="install padding-web">
    <div>
      <div class="install_enlaces separacion">
        <div class="install_bin">
          <router-link :to="{ name: '2023' }" class="install_enlaces_link">
            <div class="install_enlaces_2223_img">
              <img src="/img/papelera.png" alt="" />
            </div>
            <div class="install_enlaces_2223_texto">
              <p>22/23</p>
            </div>
          </router-link>
          <router-link :to="{ name: '2022' }" class="install_enlaces_link">
            <div class="install_enlaces_2122_img">
              <img src="/img/papelera.png" alt="" />
            </div>
            <div class="install_enlaces_2122_texto">
              <p>21/22</p>
            </div>
          </router-link>
          <router-link :to="{ name: '2021' }" class="install_enlaces_link">
            <div class="install_enlaces_2021_img">
              <img src="/img/papelera.png" alt="" />
            </div>
            <div class="install_enlaces_2021_texto">
              <p>20/21</p>
            </div>
          </router-link>
        </div>
      </div>
      <MenuNavegacion linkUrl="home" class="separacion" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.install {
  width: 100%;
  display: flex;
  justify-content: center;
}
.install_enlaces {
  grid-template-columns: 1fr;
  display: grid;
  //flex-direction: column;
  align-items: center;
  gap: 2em;
  @include tablet-grande() {
    flex-direction: row;
  }
}

.install_bin {
  display: flex;
  flex-direction: column;
  margin-left: 220px;
  align-items: center;
    gap: 2em;
  @include tablet-grande(){
    width: 50%;
    height: 100%;
    gap: 5em;
    justify-content: space-between;
    
  }
  
}
.install_enlaces_link {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}




@media screen  and (max-width: 800px) {
    .install_bin {
      width: 65%;
      margin-left: 65px;
    }
  }
  
  


</style>
