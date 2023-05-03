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
        <video  @ended="show = !show" muted playsinline autoplay src="/img/papel2021.mp4"></video>
    </div>
    <div class="year_position" :class="{active: show}"> 
        <a  href="https://www.instagram.com/p/CS334RHj5nb/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_1"></a>
        <a  href="https://www.instagram.com/p/CRjjd-1Do9I/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_2"></a>
        <a  href="https://www.instagram.com/p/CPxdPyrDWV3/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_3"></a>
        <a  href="https://www.instagram.com/p/COdPct0DUkJ/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_4"></a>
        <a  href="https://www.instagram.com/p/CL1Qt4CD7Qm/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_5"></a>
        <a  href="https://www.instagram.com/p/CKzMq4hjF3t/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_6"></a>
        <a  href="https://www.instagram.com/p/CJa1YuZDobh/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_7"></a>
        <a  href="https://www.instagram.com/p/CIWDiYmj-VU/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_8"></a>
        <a  href="https://www.instagram.com/p/CG2qrosDW2J/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_9"></a>
        <a  href="https://www.instagram.com/p/CFWw0lfq5lH/?utm_source=ig_web_copy_link" target= "_blank" class="year_position_10"></a>
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
    gap: 2.5em;
    position: absolute;
    padding-right: 20px;
    top: 11em;
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
    margin-right: 35px;
    width: 105px;
    height: 20px;
    //background-color: blue;
}
.year_position_2{
    margin-top: -10px;
    margin-right: 20px;
    width: 128px;
    height: 20px;
    //background-color: blue;
}
.year_position_3{
    margin-top: -5px;
    margin-right: 38px;
    width: 112px;
    height: 20px;
    //background-color: blue;
}
.year_position_4{
    margin-top: -7px;
    margin-right: 47px;
    width: 117px;
    height: 20px;
    //background-color: blue;
}
.year_position_5{
    margin-top: -9px;
    margin-right: 30px;
    width: 140px;
    height: 20px;
    //background-color: blue;
}
.year_position_6{
    margin-top: -10px;
    margin-right: 50px;
    width: 117px;
    height: 20px;
    //background-color: blue;
}
.year_position_7{
    margin-top: -7px;
    margin-right: 48px;
    width: 141px;
    height: 20px;
    //background-color: blue;
}
.year_position_8{
    margin-top: -9px;
    margin-right: 44px;
    width: 150px;
    height: 20px;
    //background-color: blue;
}
.year_position_9{
    margin-top: -9px;
    margin-right: 95px;
    width: 120px;
    height: 20px;
    //background-color: blue;
}
.year_position_10{
    margin-right: 70px;
    width: 130px;
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