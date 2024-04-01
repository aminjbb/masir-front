<template>
  <div>
    <div class="contractor-card ma-7 d-none d-md-flex justify-start position__relative">
      <div class="d-flex justify-center align-center pr-5">
        <img width="148" height="148" :src="baseUrl + product?.imageCover?.image" alt="">
      </div>
      <div style="width: 100%;">
        <div class="mt-10 mr-5 d-flex justify-space-between">
        <span class="primary--text t24600">
          {{product.persianName}}
        </span>
          <span class="ml-5" style="    margin-top: -17px;" @click="$router.push(`/user-profile/my-product/${product?.id}`)">
          <img src="~/assets/img/arrow-up-left.svg" alt="">
        </span>
        </div>
        <div class="mt-2 mr-5">
                  <span class="primary--text t18400">
                   {{ product.englishName }}
                  </span>

        </div>
        <div class="d-flex justify-space-between align-center mt-3 px-5">
          <div class="d-flex justify-start  ">
          <span class="success--text t18400">
          فروخته شده
        </span>
            <span class="primary--text t18400 mr-5">
          {{convertDateToJalai(product.CreatedAt , '-' , true)}}
        </span>
          </div>
          <div>
            <div class="contractor-chip d-flex justify-start align-center px-5 ">
              <span class="primary--text t18400 dana-fa ">{{splitChar(product.price) }} تومان</span>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div  class="contractor-card ma-7 py-5 justify-start position__relative d-md-none d-block">
      <div class="text-center">
        <span class="t18400 primary--text">
          {{convertDateToJalai(product.CreatedAt , '-' , true)}}
        </span>
      </div>
      <div class="d-flex justify-center align-center w-100  mt-4">
        <img width="148" height="148" :src="baseUrl + product?.imageCover?.image" alt="">
      </div>
      <div class="text-center mt-4">
        <span class="t24600 primary--text">
          {{product.persianName}}
        </span>
      </div>
      <div class="text-center mt-4">
        <span class="t18400 primary--text">
                   {{ product.englishName }}
        </span>
      </div>
<!--      <div class="text-center mt-5">-->
<!--        <span class="t18400 success&#45;&#45;text">-->
<!--        فروخته شده-->
<!--        </span>-->
<!--      </div>-->
      <div  class="text-center mt-5 px-10">
        <div class="contractor-chip d-flex justify-start align-center px-5 ">
          <span class="primary--text t18600">{{splitChar(product.price) }} تومان</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script >
import {convertDateToJalai, splitChar} from "../../assets/js/public";

export default {
  methods: {splitChar, convertDateToJalai},
  props:{
    product:null
  },
  computed:{
    baseUrl(){
      return process.env.baseUrl
    }
  }
}
</script>
