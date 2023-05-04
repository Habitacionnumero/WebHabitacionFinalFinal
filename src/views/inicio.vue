<template>
  <div class="main">
    <div class="main_top">
      <div class="main_top_title">
        <router-link :to="{ name: 'home' }"
          ><img src="/img/titulo3.png" alt=""
        /></router-link>
      </div>
      <marquee class="fly">
          <a href="https://rgbshop38191613162016135.com/" target = "_blank"> <img class="avion_img" src="/img/avioneta.gif" alt=""></a>
        </marquee>
      <div class="main_top_menu">
        <div class="main_top_doors max-width">
          <router-link :to="{ name: 'instalaciones' }" 
            ><img class="install_door" src="/img/originNeon.png"  alt=""
          /></router-link>
          
          <a href="https://rgbshop38191613162016135.com" target = "_blank">
              <img class="rgb_door" src="/img/rgbNeon.png" alt="">
          </a>

          <router-link :to="{ name: 'meta' }" 
            ><img class="meta_door" src="/img/futureNeon.png" alt=""
          /></router-link>
          <router-link :to="{ name: 'instalaciones' }" class="pc"
            ><img class="install_door" src="/img/originNeon.png"  alt=""
          /></router-link>

          <a href="https://rgbshop38191613162016135.com/" target = "_blank" class="pc">
              <img class="rgb_door" src="/img/rgbNeon.png" alt="">
          </a>

          <router-link :to="{ name: 'meta' }" class="pc"
            ><img class="meta_door" src="/img/futureNeon.png" alt=""
          /></router-link>
        </div>
      </div>
    </div>
    <div class="main_bottom_content">
      <div class="main_bottom">
        <router-link :to="{ name: 'about' }"
          ><div class="tarjeta">
            <img src="/img/tarjeta_aplica.png" alt="" class="aplica" /></div
        ></router-link>
        <router-link :to="{ name: 'contacto' }"
          ><div class="tarjeta">
            <img src="/img/tarjeta_contacto.png" alt="" class="contacto" /></div
        ></router-link>

        <router-link :to="{ name: 'prensa' }"
          ><div class="tarjeta">
            <img src="/img/tarjeta_prensa.png" alt="" class="prensa" /></div
        ></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.fly {
  width: 100%;
}
.main_top {
  min-height: 85vh;
  background: url("/img/fondo_junto_noche3.png");
  background-size: cover;
  background-position: right 65% bottom 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0em;
  padding-top: 0em;
  
}
.main_top_title{
  margin-top: -12.5em;
  max-width: $mx-tablet-grande;
}
.avion_img{
  padding-top: 0px;
  height: 110px;
  width: 750px;
  min-width: 100px;
  margin-left: 0px;
}
.main_top_menu {
  height: 524px;
  margin-top: -94px;
}
.main_top_doors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2em;
  margin-top: 145px;
  width: 2000px;
  margin-right: 480px;
}
.meta_door, .install_door, .rgb_door{
  //padding: 10px;
  width: 300px;
  padding-left: 40px;
}
.main_bottom_content {
  background: url("/img/suelo.png");
  background-size: cover;
  display: flex;
  justify-content: center;
}
.main_bottom{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2em;
    max-width: $mx-tablet;
}
.aplica {
  transform: rotate(-15deg);
 position: absolute;
 top: -3em;
  
}
.contacto {
  transform: rotate(15deg);
  
}
.prensa {
  transform: rotate(10deg);
  
}
.pc{
  display: none;
}

@media screen  and (max-width: 1500px) and (min-width: 800px) {

.main_top_title{
  margin-top: 30px;
  width: 45%;



}
.avion_img{
  width: 450px;
  margin-top: 0px;
}

.main_top_doors {
  margin-top: 70px;
  margin-left: 280px;



}



.meta_door, .install_door, .rgb_door{
//padding: 10px;
width: 200px;
margin-top: -10px;

}

}

@media screen  and (max-width: 844px) {
  .main_top_title{
    margin-top: 30px;
  }

  .main_top{
    //min-height: 65vh;
    padding-bottom: 0px;
  }
  .main_top_menu{
    overflow: hidden;
    width: 380px;
    width: 100%;

  }
  .avion_img{
    width: 500px;
  }

.main_top_doors {
   animation: scroll 10s linear infinite;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr  ;
  }
  .meta_door, .install_door, .rgb_door{
  //padding: 10px;
  width: 200px;
  margin-top: -60px;
}

  //Animación de las puertas
  @keyframes scroll {
    0%{
    transform: translateX(0);
    }
    100%{
      transform: translateX(calc(-200px * 3));
    }
  }
  .pc{
   display: inline;
  }

}


</style>
