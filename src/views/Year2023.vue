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
    margin-top: 75px;
}
.year_position{
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    gap: 1em;
    position: absolute;
    top: 13em;
    left: 0;
    width: 100%;
    height: 100vh;
    font-weight: 900;
    font-size: .5em;
    color: #405e9d ;
    opacity: 0;
    transition: opacity .1s ease-in;
    @include mobile-xl(){
        font-size: .8em;
    }
    @include tablet(){
        font-size: .9em;
    }
}
.active{
    opacity: 1;
}
</style>