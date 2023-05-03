<script setup>
import MenuNavegacion from '../components/MenuNavegacion.vue';
</script>
<script>
export default {
    data(){
        return{
            show: false,
        }
    }
}
</script>
<template>
    <div class="max-width padding-web">
    <div class="year_img">
        <video  @ended="show = !show" muted playsinline autoplay src="/img/papel2023.mp4"></video>
    </div>
    <div class="year_position" :class="{active: show}"> 
        <a  href="https://www.instagram.com/luciarojo__/" target= "_blank" class="year_position_1"></a>
        <a  href="https://www.instagram.com/lorenzogalgo/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_2"></a>
        <a  href="https://www.instagram.com/alejandria.cinque/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_3"></a>
        <a  href="https://www.instagram.com/isabelfcg/" target= "_blank" class="year_position_4"></a>
        <a  href="https://www.instagram.com/hell0javi/" target= "_blank" class="year_position_5"></a>
        <a  href="https://www.instagram.com/mash_kb/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_6"></a>
        <a  href="https://www.instagram.com/elegi4/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_7"></a>
        <a  href="https://www.instagram.com/alvsmonster/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_8"></a>
        <a  href="https://www.instagram.com/i0o0.0o0.i/" target= "_blank" class="year_position_9"></a>
        <a  href="https://www.instagram.com/enriqueyanezsalgado/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_10"></a>
        <a  href="https://www.instagram.com/cristinamariarumin/?igshid=YmMyMTA2M2Y%3D" target= "_blank" class="year_position_11"></a>
    </div>
    <div class="year_position2" :class="{active: show}">
    </div>

        <MenuNavegacion linkUrl="instalaciones"/>
    </div>
</template>
<style lang="scss" scoped>
.year_img{
    width: 100%;
    height: 81vh;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    position: relative;
    opacity: .8;
}
.year_position{
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    gap: 1.5em;
    position: absolute;
    padding-right: 75px;
    top: 16em;
    left: 0;
    width: 100%;
    height: 100vh;
    font-weight: 900;
    font-size: .5em;
    color: #405e9d ;
    opacity: 0;
    transition: opacity .1s ease-in;
    margin-top: -60px;
    @include mobile-xl(){
        font-size: .8em;
    }
    @include tablet(){
        font-size: .9em;
    }
}
.year_position_1{
    margin-right: 70px;
    width: 76px;
    height: 20px;
    //background-color: blue;
}
.year_position_2{
    margin-top: -10px;
    margin-right: 68px;
    width: 77px;
    height: 20px;
    //background-color: blue;
}
.year_position_3{
    margin-top: -11px;
    margin-right: 39px;
    width: 108px;
    height: 20px;
    //background-color: blue;
}
.year_position_4{
    margin-top: -11px;
    margin-right: 72px;
    width: 70px;
    height: 20px;
    //background-color: blue;
}
.year_position_5{
    margin-top: -11px;
    margin-right: 74px;
    width: 71px;
    height: 20px;
    //background-color: blue;
}
.year_position_6{
    margin-top: -11px;
    margin-right: 71px;
    width: 73px;
    height: 20px;
    //background-color: blue;
}
.year_position_7{
    margin-top: -14px;
    margin-right: 94px;
    width: 53px;
    height: 20px;
    //background-color: blue;
}
.year_position_8{
    margin-top: -12px;
    margin-right: 67px;
    width: 81px;
    height: 20px;
    //background-color: blue;
}
.year_position_9{
    margin-top: -10px;
    margin-right: 88px;
    width: 68px;
    height: 20px;
    //background-color: blue;
}
.year_position_10{
    margin-top: -15px;
    margin-right: 20px;
    width: 143px;
    height: 20px;
    //background-color: blue;
}
.year_position_11{
    margin-top: -8px;
    margin-right: 19px;
    width: 144px;
    height: 20px;
   //background-color: blue;
}
.active{
    opacity: 1;
}
p{
    width: 50%;
}
</style>