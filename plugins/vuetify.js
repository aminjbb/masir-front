import Vue from "vue";
import Vuetify from "vuetify";
// import '@mdi/font/css/materialdesignicons.css'
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default (ctx) => {
  const vuetify = new Vuetify({
    rtl: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#0C385F",
          primaryYellow: "#FFC51E",
          
          
        },
        dark: {},
      },
    },
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
