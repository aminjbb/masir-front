<template>
  <div>
   <div class="d-block d-md-none burger-menu-profile">
     <v-icon color="white" @click="show =!show">
       mdi-menu
     </v-icon>
   </div>
    <div class="d-block d-md-none" v-if="!show">
      <div class="d-flex justify-center">
        <div>
          <v-img style="margin-top: -63px;" width="204"  height="100" :src="require('~/assets/img/Untitled.png')" alt="">
            <div class="d-flex justify-center">
              <img src="~/assets/img/untitled-design-98-2.png" width="80" height="80" alt="">
            </div>
          </v-img>
        </div>
      </div>

      <div class="d-flex justify-center">
        <div class="mobile-box-sm d-flex justify-center align-center">
                  <span class="primaryYellow--text t18400">
                    ۰۹۳۰۰۱۷۹۶۴۸
                  </span>
        </div>
      </div>

    </div>
    <div class="user-profile-navigation  pt-15 mb-15 pt-15 px-2" v-if="show">
      <v-row justify="center">
        <div class="d-none d-md-flex justify-center">
          <v-img style="margin-top: -235px;" width="204" height="100" :src="require('~/assets/img/Untitled.png')" alt="">
            <div class="d-flex justify-center">
              <img src="~/assets/img/untitled-design-98-2.png" width="80" height="80" alt="">
            </div>
          </v-img>

        </div>
        <div>
          <div class="primary--text t30600" style="  margin-top: -139px">
            عباس قادری
          </div>
        </div>
        <v-col cols="8" class="d-block d-md-none">
          <v-img style="margin-top: -246px;" width="204" height="100" :src="require('~/assets/img/Untitled.png')" alt="">
            <div class="d-flex justify-center">
              <img src="~/assets/img/untitled-design-98-2.png" width="80" height="80" alt="">
            </div>
          </v-img>
        </v-col>

        <div class="mobile-box d-flex justify-center align-center">
                  <span class="primaryYellow--text t18400">
                    ۰۹۳۰۰۱۷۹۶۴۸
                  </span>
        </div>
      </v-row>
      <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/user-detail" router exact
                   style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
        <v-list-item-action class="z-index-10">
          <img width="24" height="24" src="~/assets/img/info.svg" :class="$route.fullPath == '/user-profile/user-detail' ? 'filter-green' :''" >
        </v-list-item-action>
        <v-list-item-content class="z-index-10">
          <v-list-item-title>
            <span class="t18400 primary--text">اطلاعات شخصی </span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        :value="$route.name === 'user-profile-contractor-list' ||$route.name === 'user-profile-histort-contractor' ? true : false"
        no-action
        router
        sub-group
        class="px-2"
      >
        <template v-slot:activator >
          <div  class="py-2 px-2 d-flex"
                :class="$route.name === 'user-profile-contractor-list' ||$route.name === 'user-profile-histort-contractor' ? 'active-navigation' : 'none-active-navigation'" >
            <v-list-item-action class="z-index-10">
              <img width="24" height="24" src="~/assets/img/Barricade.svg"  :class="$route.name === 'user-profile-contractor-list' ||$route.name === 'user-profile-histort-contractor' ? 'filter-green' :''" >
            </v-list-item-action>
            <v-list-item-content class="z-index-10">
              <v-list-item-title class="mr-8">
                <span class="t18400 primary--text">پروژه‌ها </span></v-list-item-title>
            </v-list-item-content>
          </div>

        </template>


        <v-list-item router to="/user-profile/contractor-list">
          <v-list-item-title > <span class="primary--text mr-15" :class="$route.name === 'user-profile-contractor-list' ?'t14800' : ''">پروژه‌های شما</span></v-list-item-title>
        </v-list-item>
        <v-list-item router to="/user-profile/histort-contractor">
          <v-list-item-title > <span class="primary--text mr-15"  :class="$route.name === 'user-profile-histort-contractor' ?'t14800' : ''">تاریخچه پروژه‌ها</span></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-group
        :value="$route.name === 'user-profile-order' ||$route.name === 'user-profile-my-product' ||$route.name === 'user-profile-message' || $route.name === 'user-profile-order-history'? true : false"
        no-action
        sub-group
        class="px-2 mt-4"
      >
        <template v-slot:activator>
          <div  class=" pa-2  d-flex "
          :class="$route.name === 'user-profile-order' ||$route.name === 'user-profile-my-product' ||$route.name === 'user-profile-message' || $route.name === 'user-profile-order-history' ? 'active-navigation' : 'none-active-navigation'">
            <v-list-item-action class="z-index-10">

              <img width="24" height="24" src="~/assets/img/package.svg" :class="$route.name === 'user-profile-order' ||$route.name === 'user-profile-my-product' ||$route.name === 'user-profile-message' || $route.name === 'user-profile-order-history' ? 'filter-green' :''"  >
            </v-list-item-action>
            <v-list-item-content class="z-index-10">
              <v-list-item-title class="mr-8">
                <span class="t18400 primary--text">فروشگاه </span></v-list-item-title>
            </v-list-item-content>
          </div>

        </template>


        <v-list-item router to="/user-profile/order">
          <v-list-item-title > <span class="primary--text mr-15" :class="$route.name === 'user-profile-order' ?'t14800' : ''">سفارش‌های شما</span></v-list-item-title>
        </v-list-item>
        <v-list-item router to="/user-profile/order-history">
          <v-list-item-title > <span class="primary--text mr-15" :class="$route.name === 'user-profile-order-history' ?'t14800' : ''">تاریخچه سفارش‌ها</span></v-list-item-title>
        </v-list-item>
        <v-list-item router to="/user-profile/my-product">
          <v-list-item-title > <span class="primary--text mr-15" :class="$route.name === 'user-profile-my-product' ?'t14800' : ''">محصولات شما</span></v-list-item-title>
        </v-list-item>
        <v-list-item router to="/user-profile/message">
          <v-list-item-title > <span class="primary--text mr-15" :class="$route.name === 'user-profile-message' ?'t14800' : ''">پیام های شما</span></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/address" router exact
                   style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
        <v-list-item-action class="z-index-10">
          <img width="24" height="24" src="~/assets/img/map-pin-y.svg" :class="$route.fullPath == '/user-profile/address' ? 'filter-green' :''">
        </v-list-item-action>
        <v-list-item-content class="z-index-10">
          <v-list-item-title>
            <span class="t18400 primary--text">آدرس‌ها </span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/message" router exact
                   style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
        <v-list-item-action class="z-index-10">

          <img width="24" height="24" src="~/assets/img/ChatCircleDots.svg" :class="$route.fullPath == '/user-profile/message' ? 'filter-green' :''">
        </v-list-item-action>
        <v-list-item-content class="z-index-10">
          <v-list-item-title>
            <span class="t18400 primary--text">پشتیبانی </span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <div class="d-flex mt-10 mb-5 px-4 align-center">
        <span class="mt-2">
          <img src="~/assets/img/log-out.svg">
        </span>
        <span class="error--text t18400 mr-10">
          خروج
        </span>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data(){
    return{
      show:false
    }
  },
  beforeMount() {
    this.getWindowSize()
    console.log(this.$route)
  },
  methods:{
    getWindowSize(){
      try {
        if ( screen.width>955) this.show = true
      }
      catch (e) {
        return e
      }
    }
  }
}
</script>

<style scoped>
.none-active-navigation{
  border-radius: 10px; background: #fff;width: 100%
}
.active-navigation{
  border-radius: 10px; background: #FFC51E;width: 100%
}
.burger-menu-profile{
  position: absolute;
  top: -58px;
  left: 36px;
  z-index: 1;
}

.mobile-box-sm{
  border-radius: 30px;
  background: #0C385F;
  width: 157px;
  height: 60px;
}
</style>
