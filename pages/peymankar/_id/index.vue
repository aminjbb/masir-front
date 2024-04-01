<template>
  <div>
    <div class="user-profile__head  pt-15 mt-md-0 pt-md-0">
      <div class="main-container">
        <v-row class="d-none d-md-flex" justify="start" align="start" >
          <v-col cols="3" class="pl-5">
            <div class="avatar-box"></div>
          </v-col>
          <v-col cols="6" class="pl-15">
            <div class="pt-4">
                <span class="white--text t30600">
                 {{employee?.user?.firstName }}
                </span>
            </div>
            <div class="d-flex justify-start mt-10">
              <div class="chip px-5 d-flex justify-center align-center ml-2">
                <span class="primary--text t18400" v-for="(skill , index) in employee?.skills" :key="`skill${index}`">{{ skill.name }}, </span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400">{{ employee?.neighborhood?.name }}</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400">{{ employee?.vehicles[0]?.vehicle?.name }}</span>
              </div>
            </div>
            <div class="mt-8 text-right pl-15 ">
              <p class="white--text t14400 lh-28">
               {{employee?.description}}
              </p>
            </div>
          </v-col>

          <v-col cols="3">
            <div class="d-flex justify-end" style="margin-top: -35px">
              <div class=" d-none d-md-block">
                <div class="mt-15">
                  <v-row  align="center" class="pr-15">
                  <span class="t14400 success--text mx-3">
                  verified
                </span>
                    <span >
                  <img width="28" height="28" src="~/assets/img/verifySvg.png" alt="">
                </span>
                  </v-row>
                </div>
                <div class="mt-3">
               <span class="t14400 secondary--text mx-3">
                  دارای تایید پلتفرم مسیر
                </span>

                </div>
              </div>
            </div>

            <div class="text-right pr-2 mt-10">
              <div>
                <span class="primaryYellow--text t18400">وضعیت فعلی:</span> <span  class="primaryYellow--text t18400 mr-4">آزاد</span>
              </div>
              <div class="mt-5">
                <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">۱۷</span>
              </div>

              <div class="mt-16 pt-5">
                <v-btn block color="primaryYellow" width="251" height="101" class="br-20">
                  <span class="t30600 primary--text">
                     تماس با پیمانکار
                  </span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="d-flex d-md-none " justify="center" align="start" >
          <div>
            <div class="d-flex justify-center">
              <div class="avatar-box"></div>
            </div>
            <div class="pt-2 text-center mt-8">
              <span class="white--text t18600">
                {{employee?.user?.firstName }}
              </span>
            </div>
            <div class="d-flex justify-start mt-15 position__relative scroller px-10" style="max-width: 359px;">
              <div class="chip  d-flex justify-center align-center ml-2"  style="min-width: 150px;">
                <span class="primary--text t14400" v-for="(skill , index) in employee?.skills" :key="`skill${index}`">{{ skill.name }}, </span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2" style="min-width: 120px;">
                <span class="primary--text t14400"> {{ employee?.neighborhood?.name }}</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t14400">{{ employee?.vehicles[0]?.vehicle?.name }}</span>
              </div>
            </div>
            <div class="text-justify px-13 mt-8">
              <span class="white--text t16400">
                لودر یکی از کاربردی‌ترین ماشین‌آلات ساختمانی و عمرانی است. این ماشین که در اندازه‌های مختلف ساخته می‌شود
              </span>
            </div>

            <div class="d-flex justify-center ma-5">
              <div class="status-mobile-box pt-5">
                <div class="d-flex justify-start align-center pr-13">
                  <span class="primaryYellow--text t18400">وضعیت فعلی:</span> <span  class="primaryYellow--text t18400 mr-4">آزاد</span>
                </div>
                <div class="d-flex justify-start align-center mt-5 pr-13">
                  <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">۱۷</span>
                </div>
              </div>

            </div>
          </div>

        </v-row>
      </div>
    </div>

    <div>
      <div class="main-container">
        <div class="d-md-block d-none">
          <div class="d-flex justify-space-between align-center mt-10">
            <span class="primary--text t24600 mr-10">
              اطلاعات تکمیلی
            </span>
            <v-btn width="163" height="70" color="primaryYellow" class="br-15">
              <span class="primary--text t18400"> پیام به پیمانکار</span>
            </v-btn>
          </div>

          <div class="user-profile__detail-card mt-15 mb-15 pb-10">
            <v-row justify="space-between" class="mb-10">
              <v-col cols="4" class="pr-15 pt-15">
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">نام و نام خانوادگی</span>
                  <span class="primary--text t18400">{{ employee?.user?.firstName }}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">شماره تماس</span>
                  <span class="primary--text t18400">{{ employee?.user?.mobile }}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">مهارت ها</span>
                  <span class="primary--text t18400" v-for="(skill , index) in employee?.skills" :key="`skill${index}`">{{ skill.name }}, </span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">محدوده</span>
                  <span class="primary--text t18400">{{ employee?.neighborhood?.name }}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">کد پیمانکاری</span>
                  <span class="primary--text t18400 dana-fa ">{{ employee?.code }}</span>
                </v-row>
              </v-col>
              <v-col cols="7" class=" pt-15 pl-15">
                <span class="primary--text t18600" >
                  از تجربیات پیمانکار
                </span>
                <div class="user-profile__experience-box mt-10 pa-10">
                  <p class="t18400 primary--text lh-40 text-justify">
                    {{employee?.description}}

                  </p>
                </div>
              </v-col>
            </v-row>

            <v-divider class="mb-10"></v-divider>

            <v-row justify="start" class="pr-5" >
              <v-col cols="6" class="px-15">
                <div class="d-flex justify-space-between">
                    <span class="primary--text t18600">
                      تصاویر وسیله
                    </span>
                    <span class="primary--text t18600" v-if="employee?.vehicles[0]?.doesHaveTechnicalExamination">
                     دارای معاینه فنی سلامت
                    </span>
                </div>

                <div class="d-flex justify-start mt-10">
<!--                  <img class="br-15 ml-4" width="140" height="140" :src="baseUrl+image" alt=""  v-for="(image , index) in vehicle?.images" :key="`image${index}`">-->
                </div>
              </v-col>
              <v-col cols="6">
                <v-row justify="start">
                  <v-col cols="6">
                    <div class="user-profile__status-card mt-10 d-flex justify-space-between align-center px-10">
                      <span class="primaryYellow--text t30600 dena-fa">۳</span>
                      <span class="primary--text t18400 dena-fa">پروژه در دست اقدام</span>

                    </div>
                    <div class="user-profile__status-card mt-3 d-flex justify-space-between align-center px-10">
                      <span class="primaryYellow--text t30600 dena-fa">۳۰</span>
                      <span class="primary--text t18400 dena-fa">محصول در فروشگاه</span>

                    </div>
                  </v-col>
                  <v-col cols="6" class="pt-13 pl-8 ">
                    <div class="user-profile__status-card-full px-10 position__relative">
                      <p class="primaryYellow--text t100800 dena-fa">{{ employee?.skills?.length }}</p>
                      <div>
                        <span class="primary--text t18400  " style="position: absolute; top: 120px">مهارت انتخاب شده</span>
                      </div>

                    </div>

                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>

          <div class="text-center my-15 pt-10">
            <span class="primary--text t24600">
              به این پیمانکار امتیاز دهید
            </span>
            <v-row justify="center" >
              <v-col class="pa-12" cols="6">
                <v-slider
                  v-vuetify-ltr
                  color="primaryYellow"
                  track-fill-color="primaryYellow"
                  step="1"
                  :max="4"
                  ticks="always"
                  hide-details
                  tick-size="15"

                >
                </v-slider>
              <v-row justify="space-between" class="dir-ltr">
                <v-col  v-for="(ticksLabel , index) in ticksLabels" cols="1" :key="`pppp${index}`">
                  <span class="dana-fa primary--text t18600">{{ticksLabel}}</span>
                </v-col>
              </v-row>

              </v-col>
            </v-row>
            <div class="d-flex justify-center mt-15">
              <v-btn color="primary" class="br-15" width="204" height="65">
                <span class="white--text t24600"> ثبت امتیاز</span>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="d-block d-md-none">
          <div class="text-center mt-15">
              <span class="primary--text t24600 mr-10">
              اطلاعات تکمیلی
            </span>
          </div>

          <div class="user-profile__detail-card mt-15 mb-15 pt-10 pb-10">
              <div class="text-center primary--text">
                <p class="t18600">
                  نام و نام خانوادگی
                </p>
                <p class="t18400 mt-5">
                  {{ employee?.user?.firstName }}
                </p>
              </div>
              <div class="text-center primary--text mt-15">
                <p class="t18600">
                  شماره تماس
                </p>
                <p class="t18400 mt-5">
                  {{ employee?.user?.mobile }}
                </p>
              </div>
              <div class="text-center primary--text mt-15">
                <p class="t18600">
                  مهارت ها
                </p>
                <p class="t18400 mt-5">
                  <span class="primary--text t18600">{{ employee?.neighborhood?.name }}</span>
                </p>
              </div>
              <div class="text-center primary--text mt-15">
                <p class="t18600">
                  محدوده
                </p>
                <p class="t18400 mt-5">
                  {{ employee?.neighborhood?.name }}
                </p>
              </div>
              <div class="text-center primary--text mt-15">
                <p class="t18600">
                  کد پیمانکاری
                </p>
                <p class="t18400 mt-5">
                  {{ employee?.code }}
                </p>
              </div>
              <v-divider class="mt-10"></v-divider>
              <div class="text-center primary--text mt-15">
              <p class="t18600">
                از تجربیات پیمانکار
              </p>
              <p class="t18400 mt-5 lh-40 text-justify px-10">
                {{employee?.description}}
              </p>
            </div>
            <v-divider class="mt-10"></v-divider>
              <div class="text-center primary--text mt-15">
              <p class="t18600">
                تصاویر وسیله
              </p>
             <div>
              <div class="d-flex justify-center mt-5">
                <img class="br-15 " width="140" height="140" src="~/assets/img/addService.png" alt=""  >
              </div>
               <div class="d-flex justify-center mt-5">
                <img class="br-15" width="140" height="140" src="~/assets/img/addService.png" alt=""  >
              </div>
               <div class="d-flex justify-center mt-5">
                <img class="br-15" width="140" height="140" src="~/assets/img/addService.png" alt=""  >
              </div>

             </div>
            </div>
              <div class="text-center primary--text mt-15">
                <p class="t18600">
                  دارای معاینه فنی سلامت
                </p>
                <div class="user-profile__status-card mt-10 mx-5 d-flex justify-space-between align-center px-10">
                  <span class="primaryYellow--text t30600 dena-fa">۳</span>
                  <span class="primary--text t18400 dena-fa">پروژه در دست اقدام</span>

                </div>
                <div class="user-profile__status-card mt-5 mx-5 d-flex justify-space-between align-center px-10">
                  <span class="primaryYellow--text t30600 dena-fa">۳۰</span>
                  <span class="primary--text t18400 dena-fa">محصول در فروشگاه</span>

                </div>
                <div class="user-profile__status-card mt-5 mx-5 d-flex justify-space-between align-center px-10">
                  <span class="primaryYellow--text t30600 dena-fa">۱۰</span>
                  <span class="primary--text t18400 dena-fa">مهارت انتخاب شده</span>

                </div>

             </div>
            </div>
          <div class="text-center primary--text">
               <span class="primary--text t24600">
              به این پیمانکار امتیاز دهید
            </span>
            <v-row justify="center" >
              <v-col class="pa-12" cols="12">
                <v-slider
                  v-vuetify-ltr
                  color="primaryYellow"
                  track-fill-color="primaryYellow"
                  step="1"
                  :max="4"
                  ticks="always"
                  hide-details
                  tick-size="15"

                >
                </v-slider>
                <v-row justify="space-between" class="dir-ltr">
                  <v-col  v-for="(ticksLabel , index) in ticksLabels" :key="`ppppp${index}`" cols="1" class="pr-6">
                    <span class="dana-fa primary--text t18600">{{ticksLabel}}</span>
                  </v-col>
                </v-row>

              </v-col>
            </v-row>
          </div>
          <div class="d-flex justify-center mt-15">
            <v-btn color="primary" class="br-15" width="204" height="65">
              <span class="white--text t24600"> ثبت امتیاز</span>
            </v-btn>
          </div>
          </div>


      </div>
    </div>


  </div>
</template>

<script>
import {gql} from "nuxt-graphql-request";

export  default {
  layout:'Peymankar',
  data: () => ({
    employee:null,
    ticksLabels: [
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
  }),

  methods: {

    async getClientEmployees(){

      const query = gql`
        query{
            clientEmployee(employeeId:${this.$route.params.id}){
             id
              description
              code
                vehicles{
                 doesHaveTechnicalExamination
                  vehicle{
                    name

                  }
                }
                user{
                  firstName
                  mobile
                },
                neighborhood{
                  name
                },
                skills{
                  name
                }
              }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.employee = obj.clientEmployee
    }
  },

  computed:{
    baseUrl(){
      return process.env.baseUrl
    }
  },
  mounted() {
    this.getClientEmployees()
  }
}
</script>
