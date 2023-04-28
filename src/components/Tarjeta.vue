<script>
import EnButton from "../components/EnButton.vue"
export default{
    components:{
        EnButton
    },
    props:[
        "seo",
        "subtitulo",
        "cuerpo01",
        "cuerpo02",
        "cuerpo03",
        "cuerpo04",
        "cuerpo05",
        "cuerpo06",
        

    ]

}

</script>

<template>
    <div class="container max-width">
         <EnButton/>
         <div class="texto">
            <h1>{{seo}}</h1>
            <h2>{{ subtitulo }}</h2>
            <p>{{ cuerpo01 }}</p>
            <p>{{ cuerpo02 }}</p>
            <p>{{ cuerpo03 }}</p>
            <p>{{ cuerpo04 }}</p>
            <p>{{ cuerpo05 }}</p>
            <p>{{ cuerpo06 }}</p>
           
         </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    margin-top: 2em;
}
.texto{
    background: var(--gris);
    padding:0 2em;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: white;
    font-weight: 600;
}
</style>