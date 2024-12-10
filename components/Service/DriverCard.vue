<template>
  <v-col md="5" lg="6" @click="$router.push('/peymankar/'+employee.id)">
    <div class="service__top-diver-box  pb-8 px-10 position__relative">
    <div class="rating-box">
      <div>
        <span class="primary--text t14400">
          امتیاز راننده
        </span>
      </div>
      <div class="dir-ltr mt-2">
        <span class=" t18600 dana-fa" :class="rateColor">
         {{ rate }} / ۵
        </span>
      </div>
    </div>
    <div class="d-flex justify-center">
      <img class="avatar-img" :src="baseUrl + employee?.user?.thumbnail " alt="" width="199" height="199" style="border-radius: 50%">
    </div>
    <div class="text-right mt-5">
         <span class="t24600 primary--text" v-if="employee?.user?.firstName">
          {{employee?.user?.firstName }}
         </span>
      <span class="t24600 primary--text" v-else>
          بدون نام
         </span>
    </div>
    <div>
      <v-row justify="space-between" class="mt-5">
        <div class="driver-detail-box">
          <v-row justify="space-between" class="px-10 my-4">
               <span class="18400 primary--text">
                 وسیله:
               </span>
            <span class="18400 primary--text">
               {{employee?.vehicles[0].vehicle.name}}
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

        <div class="mt-5">
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
 props:{
   rate:0,
   employee: null
 },

  computed:{
    baseUrl(){
      return process.env.baseUrl
    },
   rateColor(){
     if (this.rate >= 4) return 'green--text'
     else if (this.rate <= 4 && this.rate > 2) return 'primaryYellow--text'
     else  return 'error--text'
   }
  }
}
</script>
