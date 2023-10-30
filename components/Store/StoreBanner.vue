<template >
  <div >
    <vueper-slides id="storeBanner" class="no-shadow pa-0 mt-mobile-5  "  height="100"  fade :touchable="false" rtl :slide-ratio="1 / 3.1"
                   :arrows="false">

      <vueper-slide class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">

           <div class="d-flex justify-center">
             <img src="@/assets/img/storebanner.png" class="mx-2">
             <img src="@/assets/img/storebanner.png" class="mx-2">
             <img src="@/assets/img/storebanner.png" class="mx-2">
           </div>

          </v-row>

        </template>
      </vueper-slide>
      <vueper-slide class="mt-mobile-10" >
        <template #content>
          <v-row justify="center" class="mt-5 ">

           <div class="d-flex justify-center">
             <img src="@/assets/img/storebanner.png" class="mx-2">
             <img src="@/assets/img/storebanner.png" class="mx-2">
             <img src="@/assets/img/storebanner.png" class="mx-2">
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
