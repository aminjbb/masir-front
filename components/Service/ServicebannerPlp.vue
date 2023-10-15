<template >
  <div >
    <vueper-slides class="no-shadow pa-0 mt-mobile-5  "  height="900" fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="true">
      <template #arrow-left>
        <div class=" d-none d-md-block" style="    margin-left: 195px; margin-bottom: 228px;">
          <img src="~/assets/img/arrow-left-circle.svg" alt="">
        </div>

      </template>

      <template #arrow-right>
       <div class=" d-none d-md-block" style="  margin-right: 195px; margin-bottom: 228px;">
         <img   src="~/assets/img/arrow-right-circle-banner.svg" alt="">
       </div>
      </template>
      <vueper-slide class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">

            <div class="text-center position__relative">
              <div class="service__plp-verified d-none d-md-block">
                <div class="mt-15">
                  <v-row  align="center" class="pr-15">
                  <span class="t14400 success--text mx-3">
                  verified
                </span>
                    <span >
                  <img width="28" height="28" src="~/assets/img/verified.png" alt="">
                </span>
                  </v-row>
                </div>
                <div class="mt-3">
               <span class="t14400 secondary--text mx-3">
                  دارای تایید پلتفرم مسیر
                </span>

                </div>
              </div>
              <div class="service__plp-verified d-block d-md-none">
                <div class="mt-15">
                  <v-row  align="center" class="pr-15">
                  <span class="t14400 success--text mx-3">
                  verified
                </span>
                    <span >
                  <img width="28" height="28" src="~/assets/img/verified.png" alt="">
                </span>
                  </v-row>
                </div>

              </div>

              <img width="874" height="479" src="~/assets/img/serviceBannerBack.png" alt="" class="d-none d-md-block">
              <img width="345"  src="~/assets/img/serviceBannerBack.png" alt="" class="d-block d-md-none">
              <div class=" service__plp-banner-image-box ">
                <div class="d-flex justify-center">
                  <div class="service__plp-banner-image-box-background">
                    <img width="248" class="avatar-img" src="~/assets/img/untitled-design-98-2.png" alt="">
                  </div>
                </div>
                <div class="text-center mt-10">
                  <span class="primary--text t30600 d-none d-md-block">
                    عباس قادری
                  </span>
                  <span class="primary--text t20600 d-block d-md-none">
                    عباس قادری
                  </span>
                </div>

                <v-row justify="center" class="mt-15">
                  <div class="service__plp-banner-card">
                    <v-row justify="space-between" class="pa-11 px-15 d-none d-md-flex">
                      <div>
                        <span class="primary--text t18400">وسیله :</span> <span  class="primary--text t18400 mr-5">لودر</span>
                      </div> <div>
                        <span  class="primary--text t18400">پروژه‌های انجام شده :</span> <span  class="primary--text t18400 mr-5 dana-fa">17</span>
                      </div> <div>
                        <span  class="primary--text t18400">وضعیت فعلی :</span> <span  class="primary--text t18400 mr-5">آزاد</span>
                      </div>
                    </v-row>
                    <v-row justify="center" class=" px-5 d-flex d-md-none">
                      <v-col cols="4">
                        <span class="primary--text t16400">وسیله:</span> <span  class="primary--text t16400 ">لودر</span>
                      </v-col> <v-col cols="4">
                        <span  class="primary--text t16400">پروژه‌ها:</span> <span  class="primary--text t16400  dana-fa">17</span>
                      </v-col> <v-col cols="4">
                        <span  class="primary--text t16400">وضعیت:</span> <span  class="primary--text t16400 ">آزاد</span>
                      </v-col>
                    </v-row>
                  </div>
                </v-row>
              </div>


            </div>

          </v-row>

        </template>
      </vueper-slide>
      <vueper-slide class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">

            <div class="text-center position__relative">
              <div class="service__plp-verified d-none d-md-block">
                <div class="mt-15">
                  <v-row  align="center" class="pr-15">
                  <span class="t14400 success--text mx-3">
                  verified
                </span>
                    <span >
                  <img width="28" height="28" src="~/assets/img/verified.png" alt="">
                </span>
                  </v-row>
                </div>
                <div class="mt-3">
               <span class="t14400 secondary--text mx-3">
                  دارای تایید پلتفرم مسیر
                </span>

                </div>
              </div>

              <img width="874" height="479" src="~/assets/img/serviceBannerBack.png" alt="" class="d-none d-md-block">
              <img width="345"  src="~/assets/img/serviceBannerBack.png" alt="" class="d-block d-md-none">
              <div class=" service__plp-banner-image-box ">
                <div class="d-flex justify-center">
                  <div class="service__plp-banner-image-box-background">
                    <img width="248" class="avatar-img" src="~/assets/img/untitled-design-98-2.png" alt="">
                  </div>
                </div>
                <div class="text-center mt-10">
                  <span class="primary--text t30600 d-none d-md-block">
                    عباس قادری
                  </span>
                  <span class="primary--text t20600 d-block d-md-none">
                    عباس قادری
                  </span>
                </div>

                <v-row justify="center" class="mt-15">
                  <div class="service__plp-banner-card">
                    <v-row justify="space-between" class="pa-11 px-15 d-none d-md-flex">
                      <div>
                        <span class="primary--text t18400">وسیله :</span> <span  class="primary--text t18400 mr-5">لودر</span>
                      </div> <div>
                      <span  class="primary--text t18400">پروژه‌های انجام شده :</span> <span  class="primary--text t18400 mr-5 dana-fa">17</span>
                    </div> <div>
                      <span  class="primary--text t18400">وضعیت فعلی :</span> <span  class="primary--text t18400 mr-5">آزاد</span>
                    </div>
                    </v-row>
                    <v-row justify="center" class=" px-5 d-flex d-md-none">
                      <v-col cols="4">
                        <span class="primary--text t16400">وسیله:</span> <span  class="primary--text t16400 ">لودر</span>
                      </v-col> <v-col cols="4">
                      <span  class="primary--text t16400">پروژه‌ها:</span> <span  class="primary--text t16400  dana-fa">17</span>
                    </v-col> <v-col cols="4">
                      <span  class="primary--text t16400">وضعیت:</span> <span  class="primary--text t16400 ">آزاد</span>
                    </v-col>
                    </v-row>
                  </div>
                </v-row>
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
