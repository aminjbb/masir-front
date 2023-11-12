<template>
  <v-col cols="12" @click="$router.push('/peymankar/1')"npm run>
    <div class="service__top-diver-box mx-0 pb-10 px-5 mt-15 mb-15 position__relative">

      <div class="d-flex justify-center">
        <img class="avatar-img" src="~/assets/img/untitled-design-98-2.png" alt="">
      </div>
      <div class="text-right pr-5 mt-5">
         <span class="t24600 primary--text">
           عباس قادری
         </span>
      </div>
      <div>
        <div class="driver-detail-box-mobile mt-5">
          <v-row justify="space-between" class="px-10 my-4">
               <span class="18400 primary--text">
                 وسیله:
               </span>
            <span class="18400 primary--text">
               لودر
               </span>
          </v-row>
          <v-row justify="space-between" class="px-10  my-4">
               <span class="18400 primary--text">
                 پروژه‌های انجام شده:
               </span>
            <span class="18400 primary--text">
               ۱۷
               </span>
          </v-row>
          <v-row justify="space-between" class="px-10  my-4" >
               <span class="18400 primary--text">
                 وضعیت فعلی:
               </span>
            <span class="18400 primary--text">
               آزاد
               </span>
          </v-row>
        </div>
        <v-row justify="end">

          <v-row class="rating-box-mobile pr-5">
            <div class="mx-1"><img src="~/assets/img/heart.png" alt=""></div>
            <div class="mx-1"><img src="~/assets/img/heartY.png" alt=""></div>
            <div class="mx-1"><img src="~/assets/img/heartY.png" alt=""></div>
            <div class="mx-1"><img src="~/assets/img/heartY.png" alt=""></div>
            <div class="mx-1"><img src="~/assets/img/heartY.png" alt=""></div>

          </v-row>
          <div class="ml-2">
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
        </v-row>
      </div>
    </div>
  </v-col>
</template>
<script>
export default {

}
</script>
