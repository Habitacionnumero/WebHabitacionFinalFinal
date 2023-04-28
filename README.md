# Habitación Número 

Este proyecto está desarrollado en Vue 3 con vue-routing

## Instalación de proyecto

Descargar repositorio con git clone “”Link de repositorio””

Abrir carpeta descargada con terminal y escribir –   npm install   –

## Compilación de desarrollo

En terminal escribir –  npm run dev  –

Con este comando se abre una vista previa de la web que recarga automáticamente y  permite desarrollar el proyecto rápidamente.

## Compilación para producción

En terminal escribir – npm run build   –

Con este comando se minifica y compila el código para subir a producción. Se genera automáticamente una carpeta “dist”, esta carpeta es el resultado de la web y es la que se copia en public_html en el servidor. 

Este proyecto está conectado con netlify, cada vez que se haga npm run build y se suba el repositorio a github se actualizará este enlace.  https://jocular-baklava-88aebd.netlify.app

## Devdependencias

Este proyecto usa Scss como preprocesador css, en la carpeta /styles se puede encontrar las hojas de estilo dedicadas a variables Scss.Para agregar más hojas de estilo scss al uso general de la web hay que añadirlas en el archivo vite.config.js dentro de preprocesadores.

## Integraciones con otras plataformas

Cómo formulario en la sección about hay un trozo de código facilitado por  mailchimp que vuelca en la cuenta de mailchimp que tiene la empresa. Hay algunos ajustes css para cambiar la apariencia. También hay un div superpuesto para tapar la marca de agua aunque hay veces que lo sobreescribe el propio css de mailchimp

## Internacionalización

A petición de la empresa los textos son resultado de fotografías editadas en Photoshop e illustrator, no hay texto escrito en la web. Los archivos base para estos están en el google Drive de Habitación Número. En las imágenes web hay un mapeado para que cuando se haga click cambie de src de la imagen. 

En una primera fase del desarrollo se creó una carpeta /lang con dos archivos json cada uno para un idioma. Se abandonó esta idea pero el código se ha mantenido por si en un futuro se necesita implementar.

## Estructura web


### Desarrollo
La web está desarrollada con vue, por tanto todo se representa en un div con id #app en el index html que hay fuera de la carpeta /src.

### Enrutamiento
Con vue-router se han creado las distintas páginas de la web que están alojadas en la carpeta /src/views.

### Componentes
De los componentes solo se usa, MenuNavegacion.vue, en él se recoge una prop que comunica con el padre la dirección del botón back.

### Imágenes
Las imágenes y videos están en la carpeta /public/img. Estas deben estar aqui ubicadas para que vue las reconozca y pueda hacer bucles con ellas además de no cambiarles el nombre por un hash.

### Estilos css
Los estilos css generales así como las fuentes se encuentran en /assets. En el archivo base.css se encuentra el reset css de la página y en main.css se encuentran clases generales de recursos.

### Archivos de servidor 
En la carpeta /public encontramos dos archivos de servidor:  1) _redirects: Sirve para que la web se pueda recargar bien en netlify. 2) .htacces: este hace lo mismo pero para servidores apache. 
