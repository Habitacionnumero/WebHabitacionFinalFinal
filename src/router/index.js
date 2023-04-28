import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/inicio.vue";
import meta from "../views/meta.vue";
import residencias from "../views/residencias.vue";
import instalaciones from "../views/instalaciones.vue";
import about from "../views/About.vue";
import prensa from "../views/Prensa.vue";
import contacto from "../views/Contacto.vue";
import Year2023 from "../views/Year2023.vue";
import Year2022 from "../views/Year2022.vue";
import Year2021 from "../views/Year2021.vue";
import ResidenciaSonora from "../views/ResidenciaSonora.vue";
import ResidenciaInstalativa from "../views/ResidenciaInstalativa.vue";
import Examples from "../views/Examples.vue";
import masInfo from "../views/masInfo.vue";
import talentos from "../views/talentos.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: inicio,
    },
    {
      path: "/meta",
      name: "meta",
      component: meta,
    },
    {
      path: "/residencias",
      name: "residencias",
      component: residencias,
    },
    {
      path: "/instalaciones",
      name: "instalaciones",
      component: instalaciones,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: contacto,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/prensa",
      name: "prensa",
      component: prensa,
    },
    {
      path: "/2023",
      name: "2023",
      component: Year2023,
    },
    {
      path: "/2022",
      name: "2022",
      component: Year2022,
    },
    {
      path: "/2021",
      name: "2021",
      component: Year2021,
    },
    {
      path: "/residenciaSonora",
      name: "residenciaSonora",
      component: ResidenciaSonora,
    },
    {
      path: "/residenciaInstalativa",
      name: "residenciaInstalativa",
      component: ResidenciaInstalativa,
    },
    {
      path: "/examples",
      name: "examples",
      component: Examples,
    },
    {
      path: "/masInfo",
      name: "masInfo",
      component: masInfo,
    },
    {
      path: "/talentos",
      name: "talentos",
      component: talentos,
    },
    
   
    
    
  ],
  //hacer que vuelva al principio de la pagina al cambiar de ruta
  scrollBehavior (to, from, savedPosition) {
    return{
      top: 0,
      behavior: "auto"
      
    }
}
});

export default router;
