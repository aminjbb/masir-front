<template>
  <div>
    <div class="d-none d-md-block address-card ma-5 ma-8">
      <div class="d-flex justify-space-between">
        <div class="d-flex justify-start align-center  pa-6">
          <img src="~/assets/img/map-pin.svg">
          <div class="mr-5">
            <p class="primary--text t18400 mb-0 text-justify dana-fa">{{ address?.addressDetail }}، پلاک {{ address?.no }}، واحد
              {{ address?.unit }}</p>
          </div>
        </div>
        <div class="pa-6">
          <img @click="openAddress()" src="~/assets/img/edit.svg" alt="">
        </div>
      </div>
    </div>

    <div class="d-block d-md-none address-card ma-5 ma-8">
      <div class="d-flex justify-space-between">
        <div class="d-flex justify-start align-center  pa-6">
          <img src="~/assets/img/map-pin.svg">
          <div class="mr-5">
            <p class="primary--text t18400 mb-0 text-right">{{ address?.addressDetail }}، پلاک {{ address?.no }}، واحد
              {{ address?.unit }}</p>
          </div>
        </div>

      </div>
      <div class="d-flex justify-end px-6 pb-5">
        <img @click="openAddress()" src="~/assets/img/edit.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script >
export default {
  props:{
    address: null,
  },
  methods:{
    openAddress(){
      this.$store.commit('set_addressModal' , true)
      this.$store.commit('set_addressForEdit' , this.address)
    }
  }
}
</script>
