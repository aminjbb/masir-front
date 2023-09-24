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
            <img src="~/assets/img/ShoppingCart.svg" alt="">
          </v-col>
          <v-col cols="3">
            <img src="~/assets/img/UserCircle.svg" alt="">
          </v-col>
        </v-row>
      </v-col>
    </div>

    <v-divider></v-divider>
    <v-list class="px-8 mt-5">

      <v-list-item class="my-2" v-for="(item, i) in items" :key="i" :to="item.to" router exact
        style="height: 26px; border-radius: 13px;" v-model="page">
        <v-list-item-action>
          <v-img width="16" :src="item.icon"></v-img>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> <span class="t12400">{{ item.title }}</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <div class="mobile-menu-back">
      <img src="~/assets/img/ArrowCircleRight.svg" alt="" @click="drawer =false">
    </div>
    </v-navigation-drawer>

    <v-navigation-drawer class="d-block d-sm-none" v-model="drawerSearch" :clipped="clipped"  left app
    style="height:100% ; z-index: 99;">
      <div class="pa-2 searchBox">
        <v-col cols="11">
          <v-text-field
          placeholder="جست‌و‌جو کنید"
          clearable
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
      </div>
    </v-navigation-drawer>
    <v-app-bar class="d-block d-sm-none pr-10 pl-5" :clipped-left="clipped" app color="white" height="75" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <img src="~/assets/img/search.svg" alt="" @click.stop="drawerSearch = !drawerSearch"  >
    </v-app-bar>
      <HeaderPage/>
    <v-main>
      <div class="main-container">
        <Nuxt />
      </div>

    </v-main>
   <footerPage/>

  </v-app>
</template>

<script>
import footerPage from '~/components/Public/footerPage.vue'
import HeaderPage from '~/components/Public/HeaderPage.vue'
export default {
  name: 'DefaultLayout',
  components:{
    footerPage,
    HeaderPage
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
