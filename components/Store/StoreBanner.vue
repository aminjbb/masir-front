<template >
  <div >
    <vueper-slides id="storeBanner" class="no-shadow pa-0 mt-mobile-5  d-none d-md-block"  height="100"  fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="false">

      <vueper-slide class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">
           <div class="d-flex justify-center">
             <img :src="`${baseUrl}${image?.image}`" class="mx-2" v-for="image in images?.slice(0,3)" :key="image.image">

           </div>

          </v-row>

        </template>
      </vueper-slide>


    </vueper-slides>
    <vueper-slides id="storeBanner" class="no-shadow pa-0 mt-mobile-5  d-block d-md-none"  height="100"  fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="false">

      <vueper-slide v-for="image in images" :key="image.image" class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">
           <div class="d-flex justify-center">
             <img :src="`${baseUrl}${image?.image}`" width="279" height="279" class="mx-2">

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
  },
  props:{
    images:[]
  },
  computed:{
    baseUrl() {
      return process.env.baseUrl
    }
  }
}
</script>
<style lang="">

</style>
