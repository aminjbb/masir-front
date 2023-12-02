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
          primary2: "#008CE0",
          primaryYellow: "#FFC51E",
          success: "#1BA94C",
          secondary: "#9BA5B7",
          secondary2: "#9E9E9E",
          cultured: "#F5F5F5",
          gray: "#616161",
          gray02: "#E0E0E0",
          error:"#EE4343",
          green:"#1BA94C",
          dimGray:"#636D77",
          Azure:"#0082FD",
        },
        dark: {},
      },
    },
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
