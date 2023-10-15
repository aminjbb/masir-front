<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <ServicebannerPlp/>
    </v-col>
    <v-col cols="12" class="my-10">
      <div class="main-container">
        <v-row justify="center">
          <div class="service__plp-filter-box">
            <v-row justify="center" align="center" class="pt-7">
              <v-btn-toggle
                v-model="text"
                tile
                color="primaryYellow"
                group
              >
                <v-btn class="br-10">
                  <span class="t18400 primary--text ">وسیله</span>
                </v-btn>
                <v-btn  class="br-10">
                  <span class="t18400 primary--text ">راننده</span>
                </v-btn>
                <v-btn  class="br-10">
                  <span class="t18400 primary--text ">محدوده فعالیت</span>
                </v-btn>
                <v-btn  class="br-10">
                  <span class="t18400 primary--text ">زمینه فعالیت</span>
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </div>

        </v-row>

        <v-row justify="center" class="mt-15  d-none d-md-flex">
          <v-col cols="4" class="mt-15 pt-10">
            <ProductCard class="d-none d-md-block"/>
          </v-col><v-col cols="4" class="mt-15 pt-10">
            <ProductCard class="d-none d-md-block"/>
          </v-col><v-col cols="4" class="mt-15 pt-10">
            <ProductCard class="d-none d-md-block"/>
          </v-col>

        </v-row>

        <v-row justify="center" class="mt-15 mb-5 d-flex d-md-none px-5" >
          <DriverCardMobile/>
          <DriverCardMobile/>
        </v-row>
      </div>

    </v-col>
  </v-row>


</template>

<script>
import ServicebannerPlp from '~/components/Service/ServicebannerPlp'
import ProductCard from '~/components/Store/ProductCard.vue'
import DriverCardMobile from '~/components/Service/DriverCardMobile.vue'

export default {
  layout:'WithOutContact',
  data(){
    return{
      text:''
    }
  },
  components:{
    ServicebannerPlp,
    ProductCard,DriverCardMobile,
  }
}
</script>
