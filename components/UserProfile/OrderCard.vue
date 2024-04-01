<template>
<div>
  <div class="contractor-card ma-7 d-none d-md-flex justify-start position__relative">
    <div class="d-flex justify-center align-center pr-5">
      <img width="148" height="148" :src="orderProductImageCover" alt="">
    </div>
    <div style="width: 100%;">
      <div class="mt-10 mr-5 d-flex justify-space-between">
        <span class="primary--text t24600">
          {{orderDetail?.product.persianName}}
        </span>
        <span class="ml-5" style="    margin-top: -17px;" @click="$router.push('/user-profile/order/1')">
          <img src="~/assets/img/arrow-up-left.svg" alt="">
        </span>
      </div>
      <div class="mt-2 mr-5">
                  <span class="primary--text t18400">
                   {{orderDetail?.product.englishName}}
                  </span>

      </div>
      <div class="d-flex justify-space-between align-center mt-3 px-5">
        <div class="d-flex justify-start  ">
          <span class="primary--text t18400">
          فروشگاه مسیر
        </span>
          <span class="primary--text t18400 mr-5">
         ۱ بهمن ماه ۱۴۰۲
        </span>
        </div>
        <div>
          <div class="contractor-chip d-flex justify-start align-center px-5 ">
            <span class="primary--text t18400 dana-fa "> {{ splitChar(order?.totalPrice) }} تومان</span>
          </div>
        </div>
      </div>
    </div>


  </div>

  <div  class="contractor-card ma-7 py-5 justify-start position__relative d-md-none d-block">
    <div class="text-center">
        <span class="t18400 primary--text">
          ۱ بهمن ماه ۱۴۰۲
        </span>
    </div>
    <div class="d-flex justify-center align-center w-100  mt-4">
      <img width="148" height="148" :src="orderProductImageCover" alt="">
    </div>
    <div class="text-center mt-4">
        <span class="t24600 primary--text">
          {{orderDetail?.product.persianName}}
        </span>
    </div>
    <div class="text-center mt-4">
        <span class="t18400 primary--text">
                   {{orderDetail?.product.englishName}}
        </span>
    </div>
    <div class="text-center mt-5">
        <span class="t18400 primary--text">
         فروشگاه مسیر
        </span>
    </div>
    <div  class="text-center mt-5 px-8">
      <div class="contractor-chip d-flex justify-center align-center  ">
        <span class="primary--text t18600">{{ splitChar(order?.totalPrice) }}  تومان</span>
      </div>
    </div>

  </div>
</div>
</template>
<script>
import {splitChar} from "../../assets/js/public";

export default {
  methods: {splitChar},
  props:{
    order:null
  },

  computed:{
    orderDetail(){
      try {
        return this.order.details[0]
      }
      catch (e) {
        return  ''
      }
    },
    orderProductImageCover(){
      try {
        return process.env.baseUrl + this.orderDetail?.imageCover.image
      }
      catch (e) {
        return  ''
      }
    }
  }
}
</script>
