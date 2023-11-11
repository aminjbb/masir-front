<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <StoreBanner/>
    </v-col>
    <v-col cols="12" class="my-10">
      <div class="main-container">
        <v-row justify="center" align="start" class="px-5 d-none d-md-flex">
          <v-col md="3" cols="3" >
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

          <v-col md="9" cols="9" class="pr-md-15">
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
        <div class="d-block d-md-none justify-center align-start ">
          <div class="mb-15">
            <div class="pr-2">
              <span class="t24600 primary--text">
                بابکت چرخی مینی لودر
              </span>
            </div>
            <div class="mt-5 pr-2">
              <span class="t18400 primary--text">
                bobcat S76 skid-steer loader
              </span>
            </div>
          </div>
          <div class="px-2">
            <div class="store__pdp-filter-box">
              <div>
                <div class="d-flex d-md-none justify-space-between pt-5 px-10">
                  <span class="t16400 primary--text">وسیله: <span class="t16400 primary--text mr-2" >لودر</span></span>
                  <span class="t16400 primary--text">فروشگاه مسیر </span>
                </div>
                <v-divider class="my-4"></v-divider>
                <div class="text-center">
                  <span class="t24600 primary--text">
                    ۱.۹۳۰.۰۰۰.۰۰۰ تومان
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div class="text-center mt-8">
            <span class="primary--text t18400">
              ۲ روز پیش، تهران، تهران، آذربایجان
            </span>
          </div>
          <v-divider class="mt-5"></v-divider>
          <div class="mt-8 pt-2 px-2">
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
        </div>
        <v-row justify="space-between" class="mt-1 pt-15 px-5">
            <ModalReport/>
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

        <div class="pdp__order-card pa-5 d-none d-md-flex">
          <div class="d-flex align-center ">
              <div class="avatar-box">
                <img src="~/assets/img/UserCircleProfile.svg" alt="">
              </div>
              <span class="mr-8 t18400 primary--text" > فروشنده:</span>
              <span class="mr-5 t24600 primary--text" >عباس قادری</span>
            <span v-if="showNumber" class="mr-15 mt-2 t24600 primary--text dana-fa" >09223732465</span>
          </div>
          <div class="d-flex align-center">
            <v-btn color="primaryYellow" width="241" height="101" class="br-20 ml-5">
              <span class="t30600 primary--text">
                 ارسال پیام
              </span>
            </v-btn>
            <v-btn @click="showNumber =!showNumber" color="primary" width="241" height="101" class="br-20">
              <span class="t30600 white--text">
                 تماس با فروشنده
              </span>
            </v-btn>
          </div>
        </div>

        <div class="pdp__order-card py-5  d-block d-md-none mx-3">
          <div class="d-flex align-center px-5">
            <div class="avatar-box">
              <img width="41" height="41" src="~/assets/img/UserCircleProfile.svg" alt="">
            </div>
            <span class="mr-8 t18400 primary--text" > فروشنده:</span>
            <span class="mr-5 t18600 primary--text" >عباس قادری</span>
          </div>
          <div class="d-flex align-center px-5">
            <span v-if="showNumber" class="mr-15 mt-2 t24600 primary--text dana-fa" >09223732465</span>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="d-flex justify-center align-center">
            <v-btn color="primaryYellow" width="129" height="50" class="br-10 ml-5">
              <span class="t16400 primary--text">
                 ارسال پیام
              </span>
            </v-btn>
            <v-btn @click="showNumber =!showNumber" color="primary" width="129" height="50" class="br-10">
              <span class="t16400 white--text">
                 تماس با فروشنده
              </span>
            </v-btn>
          </div>
        </div>
        <v-row justify="center" class="mt-1  ">
          <v-col cols="12" md="4" class="mt-5 pt-10">
            <ProductCard />
          </v-col><v-col cols="12" md="4" class="mt-5 pt-10">
          <ProductCard />
        </v-col><v-col cols="12" md="4" class="mt-5 pt-10">
          <ProductCard />
        </v-col>

        </v-row>

      </div>

    </v-col>
  </v-row>


</template>

<script>
import StoreBanner from '~/components/Store/StoreBanner'
import ProductCard from '~/components/Store/ProductCard.vue'
import DriverCardMobile from '~/components/Service/DriverCardMobile.vue'
import ModalReport from "~/components/Store/ModalReport.vue";

export default {
  layout:'WithOutContact',
  data(){
    return{
      text:'',
      showNumber:false
    }
  },
  components:{
    StoreBanner,
    ProductCard,DriverCardMobile,ModalReport
  }
}
</script>
