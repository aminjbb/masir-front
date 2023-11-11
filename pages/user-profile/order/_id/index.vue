<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="3" class="d-none d-md-block">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-15 mb-15 d-none d-md-block" id="create-form">
              <div class="contractor-card-detail ma-7 pt-3 pb-5">
                <div class="d-flex justify-center position__relative mt-5 mr-3">
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div style="position: absolute; top: 20px ;left: 20px" @click="$router.go(-1)">
                    <img src="~/assets/img/arrow-up-left.svg" alt="">
                  </div>
                </div>
                <div class="d-flex justify-center mr-7 mt-10">
                   <span class="primary--text t24600">
                  بابکت چرخی مینی لودر
                  </span>

                </div>
                <div class="d-flex justify-center mr-7 mt-2">
                   <span class="primary--text t18400">
                      bobcat S76 skid-steer loader
                  </span>

                </div>
                <div>
                  <v-card class="br-20 mt-10 mx-15">
                    <v-row justify="space-between" class="pa-11 px-13 ">
                      <div class="d-flex">
                        <div class="d-flex">
                    <span class="t18400 primary--text">
                      وسیله:
                    </span>
                          <span class="mr-8 t18400 primary--text">
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
                  </v-card>
                </div>
                <v-divider class="my-8"/>
                <v-row justify="center" align="center" class="pr-10 pl-3">
                  <v-col cols="5">
                    <div class="">
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
                  <v-col cols="7">
                    <v-card height="129" class="br-25 ">
                      <div class="d-flex align-center justify-center" style="height: 100%">
                        <div class="avatar-box">
                          <img src="~/assets/img/UserCircleProfile.svg" alt="">
                        </div>
                        <span class="mr-8 t18400 primary--text" > فروشنده:</span>
                        <span class="mr-5 t24600 primary--text" >عباس قادری</span>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
                <div class="d-flex align-center justify-center my-10">
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

            </div>
            <div class="user-profile__detail-card mt-15 mb-15 d-block d-md-none" id="create-form">
              <div class="contractor-card-detail ma-7 pt-3 pb-5">
                <div class="d-flex justify-start position__relative scroller mr-3">
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
<!--                  <div style="position: absolute; top: 20px ;left: 20px">-->
<!--                    <img src="~/assets/img/arrow-up-left.svg" alt="">-->
<!--                  </div>-->
                </div>
                <div class="text-center mt-10">
                   <span class="primary--text t24600">
                  بابکت چرخی مینی لودر
                  </span>

                </div>
                <div class="text-center mt-2">
                   <span class="primary--text t18400">
                      bobcat S76 skid-steer loader
                  </span>

                </div>
                <div>
                  <v-row justify="center">
                    <v-card width="185" height="55" class="br-15 mt-10 mx-15 d-flex justify-center align-center">
                      <span class="t18400 primary--text">
                              وسیله:
                            </span>
                      <span class="mr-8 t18400 primary--text">
                              لودر
                            </span>
                    </v-card>
                    <v-card width="242" height="55" class="br-15 mt-5 mx-15 d-flex justify-center align-center">
                      <span class="t18400 primary--text">

                            </span>
                      <span class=" t18400 primary--text">
                              فروشگاه مسیر
                            </span>
                    </v-card>
                    <v-card width="242" height="55" class="br-15 mt-5 mx-15 d-flex justify-center align-center">

                      <span class=" t18600 primary--text">
                              ۱.۹۳۰.۰۰۰.۰۰۰ تومان
                            </span>
                    </v-card>
                  </v-row>

                </div>
                <v-divider class="my-8"/>
                <v-row justify="center" align="center" class="pr-md-10 pr-5 pl-3">
                  <v-col cols="12" md="5">
                    <div class="">
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
                  <v-col cols="12" md="7">
                    <v-card height="129" class="br-25 d-none d-md-block">
                      <div class="d-flex align-center justify-center" style="height: 100%">
                        <div class="avatar-box">
                          <img src="~/assets/img/UserCircleProfile.svg" alt="">
                        </div>
                        <span class="mr-8 t18400 primary--text" > فروشنده:</span>
                        <span class="mr-5 t24600 primary--text" >عباس قادری</span>
                      </div>
                    </v-card>
                    <div class="d-flex d-md-none  align-center justify-center">
                      <div class="avatar-box">
                        <img src="~/assets/img/UserCircleProfile.svg" alt="">
                      </div>
                    </div>
                    <div class="d-flex d-md-none mt-5 align-center justify-center">
                      <span class="t24600 primary--text" >عباس قادری</span>
                    </div>
                  </v-col>

                </v-row>
                <div class="d-flex align-center justify-center my-10">
                  <v-btn color="primaryYellow" width="251" height="101" class="br-20 ">
                    <span class="t30600 primary--text">
                       ارسال پیام
                    </span>
                  </v-btn>

                </div>
                <div class="d-flex align-center justify-center my-10">
                  <v-btn color="primary" width="251" height="101" class="br-20">
                    <span class="t30600 white--text">
                       ثبت پروژه
                    </span>
                  </v-btn>

                </div>
              </div>

            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorDetailCard from '~/components/UserProfile/ContractorDetailCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    ContractorDetailCard
  }
}
</script>
