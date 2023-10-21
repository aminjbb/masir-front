<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <ServicebannerPlp/>
    </v-col>
    <v-col cols="12" class="my-10">
      <div class="main-container">
        <v-row justify="center" align="start" class="px-5">
          <v-col cols="3" >
           <div class="mb-15">
             <div>
              <span class="t24600 primary--text">
                بابکت چرخی مینی لودر
              </span>
             </div>
             <div class="mt-5">
              <span class="t18400 primary--text">
                bobcat S76 skid-steer loader
              </span>
             </div>
           </div>

            <div class="mt-15 pt-2">
              <div class="mt-5">
              <span class="t18400 primary--text">
                بیل بکهو 130 موتور تازه تعمیر مدل85
              </span>
              </div>
              <div class="mt-5">
              <span class="t18400 primary--text">
                بیل بکهو 130 موتور تازه تعمیر مدل85
              </span>
              </div>
              <div class="mt-5">
              <span class="t18400 primary--text">
                بیل بکهو 130 موتور تازه تعمیر مدل85
              </span>
              </div>
            </div>
          </v-col>

          <v-col cols="9" class="pr-15">
            <div class="store__pdp-filter-box">
              <v-row justify="space-between" class="pa-11 px-13">
                <div class="d-flex">
                  <div class="d-flex">
                    <span class="t18400 primary--text">
                      وسیله:
                    </span>
                    <span class="mr-10 t18400 primary--text">
                      لودر
                    </span>
                  </div>
                  <div class="d-flex mr-15">
                    <span class="t18400 primary--text">
                      فروشگاه مسیر
                    </span>

                  </div>
                </div>
                <div>
                  <span class="t24600 primary--text">
                    ۱.۹۳۰.۰۰۰.۰۰۰ تومان
                  </span>
                </div>
              </v-row>
            </div>

            <div class="text-left mt-15">
                <span class="t18400 primary--text">
                  ۲ روز پیش، تهران، تهران، آذربایجان
                </span>
            </div>
          </v-col>
        </v-row>

        <v-row justify="space-between" class="mt-15 pt-15 px-5">
            <v-btn color="error" width="125" height="43">
              <span class="t14400 white--text">گزارش مشکل</span>
            </v-btn>
          <div>
            <div >
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

        <div class="pdp__order-card px-15">
          <div class="d-flex align-center">
              <div class="avatar-box"></div>
              <span class="mr-8 t18400 primary--text" > فروشنده:</span>
              <span class="mr-5 t24600 primary--text" >عباس قادری</span>
          </div>
          <div class="d-flex align-center">
            <v-btn color="primaryYellow" width="251" height="101" class="br-20 ml-5">
              <span class="t30600 primary--text">
                 ارسال پیام
              </span>
            </v-btn>
            <v-btn color="primary" width="251" height="101" class="br-20">
              <span class="t30600 white--text">
                 ثبت پروژه
              </span>
            </v-btn>
          </div>
        </div>
        <v-row justify="center" class="mt-15  d-none d-md-flex">
          <v-col cols="4" class="mt-15 pt-10">
            <ProductCard class="d-none d-md-block"/>
          </v-col><v-col cols="4" class="mt-15 pt-10">
          <ProductCard class="d-none d-md-block"/>
        </v-col><v-col cols="4" class="mt-15 pt-10">
          <ProductCard class="d-none d-md-block"/>
        </v-col>

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
