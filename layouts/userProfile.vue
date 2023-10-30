<template>
  <v-app dark>
    <HeaderUserProfile/>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import footerPage from '~/components/Public/footerPage.vue'
import HeaderUserProfile from '~/components/Public/HeaderUserProfile.vue'
export default {
  name: 'DefaultLayout',
  components:{
    footerPage,
    HeaderUserProfile
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      drawerSearch: false,
      fixed: false,
      items: [
        // {
        //   icon: require('~/assets/img/shopMenu.svg'),
        //   title: 'فروشگاه',
        //   to: '/products'
        // },
        {
          icon: require('~/assets/img/House.svg'),
          title: 'خانه',
          to: '/'
        },
        {
          icon: require('~/assets/img/TrafficCone.svg'),
          title: 'سرویس‌ها',
          to: '/lavean-mag'
        },
        {
          icon: require('~/assets/img/Storefront.svg'),
          // icon: require('~/assets/img/laveanMenu.svg'),
          title: 'فروشگاه',
          to: '/about-us'
        },
        {
          icon: require('~/assets/img/UsersFour.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'درباره ما',
          to: '/contact-us'
        },
        {
          icon: require('~/assets/img/Chats.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'تماس با ما',
          to: '/contact-us'
        },
        {
          icon: require('~/assets/img/Books.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'مقالات',
          to: '/contact-us'
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
