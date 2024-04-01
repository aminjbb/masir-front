<template>
  <div>
    <v-card height="544" class="br-40 mx-3 m-br-15" @click="$router.push(`/store/${product.id}`)">
      <div class="d-none d-md-block">
        <img style="width: 100%" height="288" :src="`${baseUrl}${product?.images[0]?.image}`" alt=""
             class="plp-image-radius">
        <div class="text-right mt-8 pr-8">
            <span class="t24600 primary--text">
               {{ product?.persianName }}
            </span>
        </div>
        <div class="text-right mt-4 pr-8">
            <span class="t18400 primary--text">
                {{ product?.englishName }}
            </span>
        </div>
        <div class="d-flex justify-space-between px-8 mt-4">
          <div class="d-flex align-center">
            <span class="d-none d-md-block"><img src="~/assets/img/Storefrontplp.svg" alt=""></span>
            <span class="primary--text t14400 mr-1">

         فروشگاه مسیر
       </span>
          </div>

        </div>
        <div class="d-flex justify-end px-8 mt-4">
          <span class="primary--text  t24600 dana-fa">    {{ splitChar(product?.price) }}تومان</span>
        </div>
      </div>

      <div class="d-block d-md-none">
        <img style="width: 100%" height="288" src="@/assets/img/storePlpImage.png" alt="" class="br-unset">
        <div class="text-right mt-8 pr-7">
            <span class="t24600 primary--text">
                بابکت چرخی مینی لودر
            </span>
        </div>
        <div class="text-right mt-4 pr-7">
            <span class="t18400 primary--text">
                bobcat S76 skid-steer loader
            </span>
        </div>
        <div class="d-flex justify-space-between px-7 mt-4">
          <div class="d-flex justify-space-between align-center">
            <span class="d-none d-md-block"><img src="~/assets/img/Storefrontplp.svg" alt=""></span>
            <span class="primary--text t14400 mr-1">
             فروشگاه مسیر
           </span>
          </div>

          <div class="d-flex align-center">
           <span class="gray--text text-decoration-line-through t18400">
           ۲.۰۰۰٬۰۰۰٬۰۰۰
         </span>
            <div class="discount-box d-flex justify-center align-center mr-2">
           <span class="white--text t14400">
             10%
           </span>
            </div>
            <div>
            </div>

          </div>
        </div>
        <div class="d-flex justify-end px-7 mt-4">
          <span class="primary--text  t24600">۱.۹۳۰.۰۰۰.۰۰۰ تومان</span>
        </div>
      </div>
    </v-card>

  </div>
</template>
<script>
export default {
  props: {
    product: ''
  },
  computed: {
    baseUrl() {
      return process.env.baseUrl
    }
  },
  methods: {
    splitChar(text) {
      if (text) {
        return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return text;
      }
    },
  }
}
</script>
<style lang="">

</style>
