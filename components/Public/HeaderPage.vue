<template>
    <header class="d-none d-md-flex">
        <div class="main-container-header pt-5 ">
           <v-row justify="center px-5">
            <v-col cols="5">
                <v-row class="mt-5 ">
                  <div @click="$router.push('/')" :class="$route.name === 'index' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0  header-font">
                    <span class=" Black--text"> خانه</span>
                  </div>

                  <div @click="$router.push('/service')" :class="$route.name === 'service' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0  header-font">
                    <span class=" Black--text"> سرویس‌ها</span>
                  </div>
                  <div  @click="$router.push('/store')" :class="$route.name === 'store' ? 'headr-active' : ''" class="d-flex align-center pb-3 mb-0  header-font">

                    <span class=" Black--text"> فروشگاه</span>
                  </div>

                  <div @click="$router.push('/about-us')" class="d-flex align-center pb-3 mb-0 header-font">
                    <span class=" Black--text"> درباره ما </span>
                  </div>
                  <div  class="d-flex align-center pb-3 mb-0  header-font">
                    <span class=" Black--text"> تماس با ما </span>
                  </div>
                  <div @click="$router.push('/blog')" class="d-flex align-center pb-3 mb-0  header-font">
                    <span class=" Black--text"> مقالات</span>
                  </div>
                </v-row>
            </v-col>
            <v-col cols="3" class="pt-12  pr-10" >
              <v-row justify="start" class="pt-3 header-logo">
                <img src="~/assets/img/headerLogo.png" alt="logo">
              </v-row>

            </v-col>
            <v-col cols="4" class="headerPage">
                <v-row class="pt-3">
                <v-col cols="8">
                    <v-text-field
                    outlined
                    color="black"
                    placeholder="جست‌و‌جو کنید"
                    append-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
                 <v-col cols="4">
                    <img @click="$router.push('/user-profile/order')" src="~/assets/img/ShoppingCart.svg" alt="">
                   <v-menu  >
                     <template v-slot:activator="{ on, attrs }">
                       <img  v-bind="attrs" v-on="on" src="~/assets/img/UserCircle.svg" alt="">
                     </template>
                     <v-list v-if="checkLogin" style=" width: 108px;">
                       <v-list-item
                         to="/user-profile/user-detail"
                       >
                         <v-list-item-title>
                           <div class="text-center">
                             <span class="white--text">پروفایل</span>
                           </div>
                         </v-list-item-title>
                       </v-list-item>
                       <v-list-item
                         :to=" userIsEmployee == 'true' ?`/user-profile` :'/user-profile/user-detail'"

                       >
                         <v-list-item-title  >
                           <div class="text-center">
                             <span class="white--text">داشبورد</span>
                           </div>
                         </v-list-item-title>
                       </v-list-item>
                       <v-list-item

                       >
                         <v-list-item-title  @click="logOut()">
                           <div class="text-center">
                             <span class="white--text">خروج</span>
                           </div>
                         </v-list-item-title>
                       </v-list-item>

                     </v-list>
                     <v-list v-else style=" width: 108px;">
                       <v-list-item
                         to="/login"
                       >
                         <v-list-item-title>
                           <div class="text-center pointer">
                             <span class="white--text">ورود</span>
                           </div>
                         </v-list-item-title>
                       </v-list-item>
                     </v-list>
                   </v-menu>
                 </v-col>

                </v-row>
            </v-col>
           </v-row>
        </div>
    </header>
</template>
<script>
export default {
  computed:{
    userIsEmployee(){
      return this.$cookies.get('employ')
    },

    checkLogin(){
      if (this.$cookies.get('userToken')) return true
    }
  },

  methods:{
    logOut(){
      this.$cookies.remove('userToken' )
      window.location.reload()

    }
  }

}
</script>

<style>
.header-font{
  margin:0 16px 0 16px
}
.header-font span{
  font-size: 18px !important;
  font-weight: 400 !important;
}
.header-logo img{
  width: 196px !important;
  height: 22px;
}
@media only screen and (max-width: 1300px) {
  .header-font{
    margin:0 12px 0 12px
  }
  .header-font span{
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  .header-logo img{
    width: 186px !important;
    height: 22px;
  }
}

@media only screen and (max-width: 1200px) {
  .header-font span{
    font-size: 13px !important;
    font-weight: 400 !important;
  }

  .header-logo img{
    width: 160px !important;
    height: 22px;
  }
}
</style>
