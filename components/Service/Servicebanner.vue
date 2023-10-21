<template >
  <div >
    <vueper-slides id="serviceBanner" class="no-shadow pa-0 mt-mobile-10"  height="100" fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="false">
      <vueper-slide  >
        <template #content>
          <v-row justify="center" class="mt-5">

            <div class="text-center position__relative">
              <img width="874" height="479" src="~/assets/img/HomeBanner.png" alt="" class="d-none d-md-block">
              <img width="360" height="200" src="~/assets/img/HomeBanner.png" alt="" class="d-block d-sm-none mr-2">

              <div class="mt--124 mb-15 d-none d-sm-block">
                                <span class="t30600 primary--text">
                                    با ایجاد پروژه در مسیر می‌توانید افراد متخصص پیدا کنید.
                                </span>
              </div>

              <div class="px-10 mb-15 d-flex d-sm-none">
                                <span class="t18600 primary--text">
                                    با ایجاد پروژه در مسیر می‌توانید افراد متخصص پیدا کنید.
                                </span>
              </div>
            </div>

          </v-row>

        </template>
      </vueper-slide>
      <vueper-slide  >
        <template #content>
          <v-row justify="center" class="mt-5">

            <div class="text-center position__relative ">
              <img width="874" height="479" src="~/assets/img/HomeBanner.png" alt="" class="d-none d-md-block">
              <img width="360" height="200" src="~/assets/img/HomeBanner.png" alt="" class="d-block d-sm-none mr-2">

              <div class="mt--124 mb-15 d-none d-sm-block">
                                <span class="t30600 primary--text">
                                    با ایجاد سرویس در مسیر می‌توانید افراد متخصص پیدا کنید.
                                </span>
              </div>

              <div class="px-10 mb-15 d-flex d-sm-none">
                                <span class="t18600 primary--text">
                                    با ایجاد سرویس در مسیر می‌توانید افراد متخصص پیدا کنید.
                                </span>
              </div>


            </div>

          </v-row>

        </template>
      </vueper-slide>
    </vueper-slides>

  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components:{
    VueperSlides,
    VueperSlide,
  }
}
</script>
<style lang="">

</style>
