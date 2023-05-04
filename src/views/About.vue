<script setup>
import MenuNavegacion from "../components/MenuNavegacion.vue";

import es from "../lang/es.json";
import en from "../lang/en.json";
</script>
<script type="text/javascript">
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[3] = "ADDRESS";
  ftypes[3] = "address";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[5] = "BIRTHDAY";
  ftypes[5] = "birthday";
})(jQuery);
var $mcj = jQuery.noConflict(true);

export default {
  data() {
    return {
      esp: true,
    };
  },
};
</script>

<template>
  <div class="background">
    <div class="max-width padding">
      <img
        v-if="esp"
        src="/img/about_espanol.png"
        alt="texto about español"
        usemap="#pomo"
      />
      <img
        v-else
        src="/img/about_ingles.png"
        alt="texto about english"
        usemap="#pomo"
      />
      <map name="pomo" id="pomo">
        <area
        class="bg"
          shape="circle"
          coords="235, 80, 40"
          href="/"
          alt=""
          @click.prevent="esp = !esp"
        />
        <area class="bg" shape="rect" coords="930,5038,14,1500" href="https://www.instagram.com/habitacionnumero/" target="_blank" alt="enlace instagram">
      </map>
      <div class="separacion"></div>
      <div id="mc_embed_signup">
        <form
          action="https://habitacionnumero.us5.list-manage.com/subscribe/post?u=5d3023f4a6f9444ef9c5c65dc&amp;id=1b57a8c0e9&amp;v_id=3677&amp;f_id=004665e9f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>
              Quieres estar al tanto de todo lo que pasa en Habitación Número 34?
            </h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> requerido
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL"
                >Direccion de email<span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">Nombre</label>
              <input
                type="text"
                value=""
                name="LNAME"
                class=""
                id="mce-LNAME"
              />
              <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
            </div>

            <div
              id="mergeRow-gdpr"
              class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div class="content__gdpr">
                <p>
                  Puede darse de baja en cualquier momento haciendo clic en el enlace en el
                  pie de página de nuestros correos electrónicos. Para obtener información sobre nuestra privacidad
                  prácticas, visite nuestro sitio web.
                </p>
              </div>
              <div class="content__gdprLegal">
                <p>
                  Usamos Mailchimp como nuestra plataforma de marketing. Al hacer clic a continuación
                  para suscribirse, usted reconoce que su información será
                  transferido a Mailchimp para su procesamiento.
                  <a href="https://mailchimp.com/legal/terms" target="_blank"
                    >Obtén más información sobre las prácticas de privacidad de Mailchimp aquí.</a
                  >
                </p>
              </div>
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display: none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display: none"
              ></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px" aria-hidden="true">
              <input
                type="text"
                name="b_5d3023f4a6f9444ef9c5c65dc_1b57a8c0e9"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="optionalParent">
              <div class="clear foot">
                <input
                  type="submit"
                  value="Subscribete"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
                <!-- <p class="brandingLogo">
                  <a
                    class="position_relative"
                    href="http://eepurl.com/ih7p3z"
                    title="Mailchimp - email marketing made easy and fun"
                    ><img
                      class="opacity"
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                    <div class="white"></div
                  ></a>
                </p> -->
              </div>
            </div>
          </div>
        </form>
      </div>
      <MenuNavegacion linkUrl="home" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg{
  background: blue;
}
.padding {
  padding: 1em;
}
.title {
  font-size: 1.4em;
  font-weight: 600;
}
#mc_embed_signup {
  background: var(--gris);
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  max-width: 600px;
  padding: 3em 1em;
  box-shadow: 2px 2px 2px black;
}
#mc_embed_signup .button {
  background: black;
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */

#mc-embedded-subscribe-form input[type="checkbox"] {
  display: inline;
  width: auto;
  margin-right: 10px;
}
#mergeRow-gdpr {
  margin-top: 20px;
}
#mergeRow-gdpr fieldset label {
  font-weight: normal;
}
#mc-embedded-subscribe-form .mc_fieldset {
  border: none;
  min-height: 0px;
  padding-bottom: 0px;
}
.position_relative {
  position: relative;
}
.white {
  width: 100%;
  height: 50px;
  background: var(--gris);
  position: absolute;
  top: 0;
}
.background{
  background-image: src("fondo_puerta.webp")
}
</style>
