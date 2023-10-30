<template>
  <div style="height: 300px; background: #0C385F">
    <header class="d-none d-md-flex">
      <div class="main-container-header pt-5 ">
        <v-row justify="center">
          <v-col cols="5">
            <v-row class="mt-5">
              <div @click="$router.push('/')" :class="$route.name === 'index' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                <span class="t18400 white--text"> خانه</span>
              </div>

              <div @click="$router.push('/service')" :class="$route.name === 'service' ? 'headr-active' : ''"  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                <span class="t18400 white--text"> سرویس‌ها</span>
              </div>
              <div  @click="$router.push('/store')" :class="$route.name === 'store' ? 'headr-active' : ''" class="d-flex align-center pb-3 mb-0 px-3 mx-3">

                <span class="t18400 white--text"> فروشگاه</span>
              </div>

              <div  class="d-flex align-center pb-3 mb-0px-3 mx-3">
                <span class="t18400 white--text"> درباره ما </span>
              </div>
              <div  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                <span class="t18400 white--text"> تماس با ما </span>
              </div>
              <div  class="d-flex align-center pb-3 mb-0 px-3 mx-3">
                <span class="t18400 white--text"> مقالات</span>
              </div>
            </v-row>
          </v-col>
          <v-col cols="3" class="pt-12">
            <v-row justify="start" class="pt-3 ">
              <img src="~/assets/img/headerLogoDark.png" alt="logo">
            </v-row>

          </v-col>
          <v-col cols="3" class="headerPageUserProfile">
            <v-row class="pt-3">
              <v-col cols="8">
                <v-text-field
                  outlined
                  dark
                  color="white"
                  placeholder="جست‌و‌جو کنید"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <img src="~/assets/img/ShoppingCartDark.svg" alt="">
              </v-col>
              <v-col cols="2">
                <img @click="$router.push('/user-profile')" src="~/assets/img/UserCircleDark.svg" alt="">
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </div>

    </header>
  </div>

</template>
<script>
export default {
  mounted() {
    console.log(this.$route.name)
  }
}
</script>
