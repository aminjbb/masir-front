<template>
  <div  class=" contractor-card ma-7 d-flex justify-start position__relative">
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
</template>
<script setup>
</script>
