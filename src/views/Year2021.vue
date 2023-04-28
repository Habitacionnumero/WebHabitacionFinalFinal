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
        <video  @ended="show = !show" muted playsinline autoplay src="/img/papel.mp4"></video>
    </div>
    <div class="year_position" :class="{active: show}">
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CS334RHj5nb/?utm_source=ig_web_copy_link" target= "_blank">
                @3819etc
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CRjjd-1Do9I/?utm_source=ig_web_copy_link" target= "_blank">
                @tatianapoggi
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CPxdPyrDWV3/?utm_source=ig_web_copy_link" target= "_blank">
                @ampparito
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/COdPct0DUkJ/?utm_source=ig_web_copy_link" target= "_blank">
                @le.moratiel
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CL1Qt4CD7Qm/?utm_source=ig_web_copy_link" target= "_blank">
                @andreslozanom
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CKzMq4hjF3t/?utm_source=ig_web_copy_link" target= "_blank">
                @jaume.clotet
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CJa1YuZDobh/?utm_source=ig_web_copy_link" target= "_blank">
                @andreamuniain
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CIWDiYmj-VU/?utm_source=ig_web_copy_link" target= "_blank">
                @andresizquierdo
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CG2qrosDW2J/?utm_source=ig_web_copy_link" target= "_blank">
                @elezetate
            </a>
        </div>
        <div class="year_position_a">
            <a href="https://www.instagram.com/p/CFWw0lfq5lH/?utm_source=ig_web_copy_link" target= "_blank">
                @yosinegrin
            </a>
        </div>
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
    top: 12em;
    left: 0;
    width: 100%;
    height: 100vh;
    font-weight: 900;
    font-size: .6em;
    color: #405e9d ;
    opacity: 0;
    transition: opacity .1s ease-in;
    @include mobile-xl(){
        font-size: 1em;
    }
    @include tablet(){
        font-size: 1.1em;
    }
}
.active{
    opacity: 1;
}
</style>