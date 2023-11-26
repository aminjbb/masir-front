<template>
  <v-app dark>
    <v-navigation-drawer class="d-block d-sm-none position__relative" v-model="drawer" :clipped="clipped"  right app
                         style="height:100% ; z-index: 99;">
      <div class="pa-2">
        <v-col>
          <v-row class="ma-0" justify="end" align="center">
            <v-col cols="4">
            <span class="t14600 Black--text">
              منو
            </span>
            </v-col>


            <v-col cols="3">
              <img  @click="$router.push('/user-profile/order')" src="~/assets/img/ShoppingCart.svg" alt="">
            </v-col>
            <v-col cols="3">
              <img  @click="$router.push('/user-profile/user-detail')" src="~/assets/img/UserCircle.svg" alt="">
            </v-col>
          </v-row>
        </v-col>
      </div>

      <v-divider></v-divider>
      <v-list class="px-8 mt-5" id="mobileHeader">

        <v-list-item class="my-2 pa-2" v-for="(item, i) in items" :key="i" :to="item.to" router exact
                     style="height: 26px; border-radius: 13px;" v-model="page">
          <v-list-item-action>
            <v-img width="16" :src="item.icon"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> <span class="t18400">{{ item.title }}</span></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="mobile-menu-back">
        <img src="~/assets/img/ArrowCircleRight.svg" alt="" @click="drawer =false">
      </div>
    </v-navigation-drawer>


    <v-app-bar class="d-block d-sm-none pr-5 pl-5" :clipped-left="clipped" app color="white" height="75" >
      <v-btn
        dark
        @click.stop="drawer = !drawer"
        icon
      >
        <img src="~/assets/img/menu.svg" alt=""  >
      </v-btn>

      <v-spacer />
      <img class="mt-2 mr-2" src="~/assets/img/mobileHeaderLogo.png" alt="">
      <v-spacer />
      <ModalSearch/>
    </v-app-bar>
    <HeaderPeymankar/>
    <v-main>
      <Nuxt />
    </v-main>
    <FooterWithOutContact/>
  </v-app>
</template>

<script>
import footerPage from '~/components/Public/footerPage.vue'
import HeaderPeymankar from '~/components/Public/HeaderPeymankar.vue'
import ModalSearch from "~/components/Public/ModalSearch.vue";
import FooterWithOutContact from "~/components/Public/FooterWithOutContact.vue";
export default {
  name: 'DefaultLayout',
  components:{
    FooterWithOutContact,
    ModalSearch,
    footerPage,
    HeaderPeymankar
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
          to: '/service'
        },
        {
          icon: require('~/assets/img/Storefront.svg'),
          // icon: require('~/assets/img/laveanMenu.svg'),
          title: 'فروشگاه',
          to: '/store'
        },
        {
          icon: require('~/assets/img/UsersFour.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'درباره ما',
          to: '/about-us'
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
          to: '/blog'
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
