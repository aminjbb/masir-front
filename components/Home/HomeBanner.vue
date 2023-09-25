<template >
<!--    <div>-->
<!--
  </div>-->

  <div >
    <vueper-slides class="no-shadow pa-0"  height="900" fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="false">
      <vueper-slide  >
        <template #content>
          <v-row justify="center" class="mt-5">-->

                        <div class="text-center position__relative">
                            <img width="874" height="479" src="~/assets/img/HomeBanner.png" alt="" class="d-none d-md-block">
                            <img width="360" height="200" src="~/assets/img/HomeBanner.png" alt="" class="d-block d-sm-none mr-2">
                            <div class="banner-masir-svg-position d-none d-md-flex ">
                              <img src="~/assets/img/bannerSvg.svg" alt="">
                            </div>
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
                            <v-btn color="primary" width="240" height="90" outlined class="mt-md-15 mt-sm-1 br-20 banner-btn">
                                <span class="primary--text t30600">سرویس‌ها</span>
                            </v-btn>

                        </div>

                    </v-row>

        </template>
      </vueper-slide>
      <vueper-slide  >
        <template #content>
          <v-row justify="center" class="mt-5">-->

                        <div class="text-center position__relative">
                            <img width="874" height="479" src="~/assets/img/HomeBanner.png" alt="" class="d-none d-md-block">
                            <img width="360" height="200" src="~/assets/img/HomeBanner.png" alt="" class="d-block d-sm-none mr-2">
                            <div class="banner-masir-svg-position d-none d-md-flex ">
                              <img src="~/assets/img/bannerSvg.svg" alt="">
                            </div>
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
                            <v-btn color="primary" width="240" height="90" outlined class="mt-md-15 mt-sm-1 br-20 banner-btn">
                                <span class="primary--text t30600">سرویس‌ها</span>
                            </v-btn>

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
