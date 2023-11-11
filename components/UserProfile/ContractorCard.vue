<template>
  <div>
    <div  class="contractor-card ma-7  justify-start position__relative d-md-flex d-none">
      <div class="d-flex justify-center align-center pr-5">
        <img width="148" height="148" src="~/assets/img/addService.png" alt="">
      </div>
      <div>
        <div class="d-flex align-start justify-start mt-10 mr-5">
                  <span class="primary--text t24600">
                    پروژه حدادیان
                  </span>
          <span class="primary--text t18400 mr-8 mt-1">
                    کارفرما: گلزار حیدری
                  </span>


        </div>
        <div class="d-flex justify-start align-start mt-5 mr-5">
          <div class="contractor-chip d-flex justify-start align-center px-5 ">
            <span class="primary--text t18400">تهران، سعادت آباد</span>
          </div>
          <div class="contractor-chip d-flex justify-start align-center px-5 mr-3">
            <span class="primary--text t18400">خاک برداری</span>
          </div>
          <div class="contractor-chip d-flex justify-start align-center px-5 mr-3">
            <span class="primary--text t18400">خاک برداری</span>
          </div>

        </div>
      </div>
      <div>
        <div class="d-flex justify-start align-start mr-15 pr-3 mt-5">
          <span class="primary--text t18400">۱ بهمن ماه ۱۴۰۲</span>
        </div>

      </div>
      <div @click="$router.push('/user-profile/contractor-list/1')" class="pointer" style="position: absolute; bottom: 30px ;left: 40px">
        <img src="~/assets/img/arrow-down-left.svg" alt="">
      </div>
    </div>
    <div  class="contractor-card ma-7 py-5 justify-start position__relative d-md-none d-block">
      <div class="text-center mt-3 mb-5">
        <span class="t18400 primary--text">
          ۱ بهمن ماه ۱۴۰۲
        </span>
      </div>
      <div class="d-flex justify-center align-center w-100  mt-3">
        <img width="148" height="148" src="~/assets/img/addService.png" alt="">
      </div>
      <div class="text-center mt-3">
        <span class="t24600 primary--text">
          پروژه حدادیان
        </span>
      </div>
      <div class="text-center mt-3">
        <span class="t18400 primary--text">
          کارفرما: گلزار حیدری
        </span>
      </div>
      <v-row justify="center" class="mt-3 ">
        <v-col cols="8" class="px-0">
          <div class="contractor-chip d-flex justify-center align-center ">
            <span class="primary--text t18400">تهران، سعادت آباد</span>
          </div>
        </v-col>
        <v-col cols="5" class="px-0">
          <div class="contractor-chip text-center pt-3  ml-1">
            <span class="primary--text t18400">خاک برداری</span>
          </div>
        </v-col>
        <v-col cols="5" class="px-0">
          <div class="contractor-chip text-center pt-3  mr-1">
            <span class="primary--text t18400">خاک برداری</span>
          </div>
        </v-col>


      </v-row>
    </div>
  </div>
</template>
<script setup>
</script>
