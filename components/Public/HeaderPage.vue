<template>
    <header class="d-none d-md-flex">
        <div class="main-container-header pt-5 ">
           <v-row justify="center">
            <v-col cols="5">
                <v-row class="mt-5">
                  <div @click="$router.push('/')" :class="$route.name === 'index' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                    <span class="t18400 Black--text"> خانه</span>
                  </div>

                  <div @click="$router.push('/service')" :class="$route.name === 'service' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                    <span class="t18400 Black--text"> سرویس‌ها</span>
                  </div>
                  <div  @click="$router.push('/store')" :class="$route.name === 'store' ? 'headr-active' : ''" class="d-flex align-center pb-3 mb-0 px-3 mx-3">

                    <span class="t18400 Black--text"> فروشگاه</span>
                  </div>

                  <div @click="$router.push('/about-us')" class="d-flex align-center pb-3 mb-0px-3 mx-3">
                    <span class="t18400 Black--text"> درباره ما </span>
                  </div>
                  <div  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                    <span class="t18400 Black--text"> تماس با ما </span>
                  </div>
                  <div @click="$router.push('/blog')" class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                    <span class="t18400 Black--text"> مقالات</span>
                  </div>
                </v-row>
            </v-col>
            <v-col cols="3" class="pt-12">
              <v-row justify="start" class="pt-3 ">
                <img src="~/assets/img/headerLogo.png" alt="logo">
              </v-row>

            </v-col>
            <v-col cols="3" class="headerPage">
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
                   <v-menu >
                     <template v-slot:activator="{ on, attrs }">
                       <img  v-bind="attrs" v-on="on" src="~/assets/img/UserCircle.svg" alt="">
                     </template>
                     <v-list style=" width: 108px;">
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
                         to="/user-profile"

                       >
                         <v-list-item-title  >
                           <div class="text-center">
                             <span class="white--text">داشبورد</span>
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
  mounted() {
    console.log(this.$route.name)
  }
}
</script>
