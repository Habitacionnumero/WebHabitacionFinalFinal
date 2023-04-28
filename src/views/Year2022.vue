<script setup>
import MenuNavegacion from '../components/MenuNavegacion.vue';
</script>
<script>
export default{
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
        <video  @ended="show = !show" muted playsinline autoplay src="/img/papel3.mp4"></video>
    </div>
    <div class="year_position" :class="{active: show}"> 
        <a  href="https://www.instagram.com/p/Cg6fCzTjaxy/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_1"></a>
        <a  href="https://www.instagram.com/p/CfrFeOvjPje/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_2"></a>
        <a  href="https://www.instagram.com/p/CegIRYEDygr/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_3"></a>
        <a  href="https://www.instagram.com/p/CdQSDZaDHHm/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_4"></a>
        <a  href="https://www.instagram.com/p/CbxCsojjGbD/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_5"></a>
        <a  href="https://www.instagram.com/p/Ca17RrBqlFx/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_6"></a>
        <a  href="https://www.instagram.com/p/CZMyQ6iu9PH/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_7"></a>
        <a  href="https://www.instagram.com/p/CX0weGGqS6H/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_8"></a>
        <a  href="https://www.instagram.com/p/CWs8hbqqkVU/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_9"></a>        
        <a  href="https://www.instagram.com/p/CVhunaLjymi/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_10"></a>
        <a  href="https://www.instagram.com/p/CUe25b9Dkvj/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_11"></a>
        <a  href="https://www.instagram.com/p/CT6xzDCj-OF/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_12"></a>
    </div>
    <div class="year_position2" :class="{active: show}">
        

    </div>

        



        <MenuNavegacion linkUrl="instalaciones"/>
    </div>
</template>
<style lang="scss" scoped>
.year_img{
    width: 100%;
    height: 100vh;
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
    gap: 1em;
    position: absolute;
    padding-right: 70px;
    top: 13em;
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
    margin-right: 105px;
    width: 60px;
    height: 20px;
    //background-color: blue;
}
.year_position_2{
    margin-right: 55px;
    width: 110px;
    height: 20px;
    //background-color: blue;
}
.year_position_3{
    margin-right: 7px;
    width: 160px;
    height: 20px;
    //background-color: blue;
}
.year_position_4{
    margin-right: 47px;
    width: 110px;
    height: 20px;
    //background-color: blue;
}
.year_position_5{
    margin-right: 57px;
    width: 100px;
    height: 20px;
    //background-color: blue;
}
.year_position_6{
    margin-right: 47px;
    width: 105px;
    height: 20px;
    //background-color: blue;
}
.year_position_7{
    margin-right: 32px;
    width: 125px;
    height: 20px;
    //background-color: blue;
}
.year_position_8{
    margin-right: 52px;
    width: 100px;
    height: 20px;
    //background-color: blue;
}
.year_position_9{
    margin-right: 65px;
    width: 90px;
    height: 20px;
    //background-color: blue;
}
.year_position_10{
    margin-right: 27px;
    width: 120px;
    height: 20px;
    //background-color: blue;
}
.year_position_11{
    margin-right: 42px;
    width: 107px;
    height: 20px;
    //background-color: blue;
}
.year_position_12{
    margin-top: 10px;
    margin-right: 37px;
    width: 110px;
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