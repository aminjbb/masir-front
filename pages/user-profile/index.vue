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
                  {{clientDetail?.firstName}}
                </span>
            </div>
            <div class="d-flex justify-start mt-10">
              <div class="chip px-5 d-flex justify-center align-center ml-2">
                <span class="primary--text t18400" v-for="(skill , index) in clientDetail?.employee?.skills">{{skill?.name}}</span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400" >{{ clientDetail?.employee?.neighborhood?.name }}</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400" v-if="clientDetail">{{ clientDetail?.employee?.vehicles[0]?.vehicle?.name }}</span>
              </div>
            </div>
            <div class="mt-8 text-right pl-15 ">
              <p class="white--text t14400 lh-28">
                لودر یکی از کاربردی‌ترین ماشین‌آلات ساختمانی و عمرانی است. این ماشین که در اندازه‌های مختلف ساخته می‌شود
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
                <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">{{ projects }}</span>
              </div>

              <div class="mt-16 pt-5">
                <v-btn @click="$router.push('/user-profile/dasboard/edit')" block color="primaryYellow" width="251" height="101" class="br-20">
                  <span class="t30600 primary--text">
                     تغییر اطلاعات
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
                  {{clientDetail?.firstName}}
              </span>
            </div>
            <div class="d-flex justify-start mt-15 position__relative scroller px-10" style="max-width: 359px;">
              <div class="chip  d-flex justify-center align-center ml-2"  style="min-width: 150px;">
                <span class="primary--text t14400"v-for="(skill , index) in clientDetail?.employee?.skills">{{skill?.name}}</span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2" style="min-width: 120px;">
                <span class="primary--text t14400">{{ clientDetail?.employee?.neighborhood?.name }}</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t14400">{{ clientDetail?.employee?.vehicles[0]?.vehicle?.name }}</span>
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
                  <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">{{ projects }}</span>
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

            <div class="d-flex">
              <v-btn width="163" height="70" color="primaryYellow" class="br-15 ml-5">
                <span class="primary--text t18400"> پروژه ها</span>
              </v-btn>
              <v-btn width="163" height="70" color="primaryYellow" class="br-15">
                <span class="primary--text t18400"> پیام ها</span>
              </v-btn>
            </div>
          </div>

          <div class="user-profile__detail-card mt-15 mb-15 pb-10">
            <v-row justify="space-between" class="mb-10">
              <v-col cols="4" class="pr-15 pt-15">
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">نام و نام خانوادگی</span>
                  <span class="primary--text t18400"> {{clientDetail?.firstName}}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">شماره تماس</span>
                  <span class="primary--text t18400">{{clientDetail?.mobile}}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">مهارت ها</span>
                  <span class="primary--text t18400" v-for="(skill , index) in clientDetail?.employee?.skills">{{ skill?.name }}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">محدوده</span>
                  <span class="primary--text t18400">{{ clientDetail?.employee?.neighborhood?.name }}</span>
                </v-row>
                <v-row justify="space-between" class="pt-15 pr-8">
                  <span class="primary--text t18600">کد پیمانکاری</span>
                  <span class="primary--text t18400 dana-fa ">{{ clientDetail?.employee?.code}}</span>
                </v-row>
              </v-col>
              <v-col cols="7" class=" pt-15 pl-15">
                <span class="primary--text t18600" >
                  از تجربیات پیمانکار
                </span>
                <div class="user-profile__experience-box mt-10 pa-10">
                  <p class="t18400 primary--text lh-40 text-justify" v-html="clientDetail?.employee?.description">
                  </p>
                </div>
              </v-col>
            </v-row>

            <v-divider class="mb-10"></v-divider>

            <v-row justify="start" class="pr-5">
              <v-col cols="6" class="px-15">
                <div class="d-flex justify-space-between">
                    <span class="primary--text t18600">
                      تصاویر وسیله
                    </span>
                  <span v-if="employeeVehicles?.doesHaveTechnicalExamination" class="primary--text t18600">
                     دارای معاینه فنی سلامت
                    </span>
                </div>

                <div class="d-flex justify-start mt-10">
                  <img v-for="(image , index) in employeeVehicles?.images" class="br-15 ml-4" width="140" height="140" :src="baseUrl +image.image" alt=""  >
                </div>
              </v-col>
              <v-col cols="6">
                <v-row justify="start">
                  <v-col cols="6">
                    <div class="user-profile__status-card mt-10 d-flex justify-space-between align-center px-10">
                      <span class="primaryYellow--text t30600 dana-fa">{{ clientDetail?.employee?.projectApplies.length }}</span>
                      <span class="primary--text t18400 dena-fa">پروژه در دست اقدام</span>

                    </div>
                    <div class="user-profile__status-card mt-3 d-flex justify-space-between align-center px-10">
                      <span class="primaryYellow--text t30600 dana-fa">{{ myProductsLength }}</span>
                      <span class="primary--text t18400 dena-fa">محصول در فروشگاه</span>

                    </div>
                  </v-col>
                  <v-col cols="6" class="pt-13 pl-8 ">
                    <div class="user-profile__status-card-full px-10 position__relative">
                      <p class="primaryYellow--text t100800 dana-fa">{{ clientDetail?.employee?.skills.length }}</p>
                      <div>
                        <span class="primary--text t18400  " style="position: absolute; top: 120px">مهارت انتخاب شده</span>
                      </div>

                    </div>

                  </v-col>
                </v-row>
              </v-col>
            </v-row>
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
                {{ clientDetail?.firstName }}
              </p>
            </div>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                شماره تماس
              </p>
              <p class="t18400 mt-5">
                {{ clientDetail?.mobile }}
              </p>
            </div>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                مهارت ها
              </p>
              <p class="t18400 mt-5"  v-for="(skill , index) in clientDetail?.employee?.skills">
                {{ skill?.name }}
              </p>
            </div>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                محدوده
              </p>
              <p class="t18400 mt-5">
                {{ clientDetail?.employee?.neighborhood?.name }}
              </p>
            </div>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                کد پیمانکاری
              </p>
              <p class="t18400 mt-5">
                {{ clientDetail?.employee?.code }}
              </p>
            </div>
            <v-divider class="mt-10"></v-divider>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                از تجربیات پیمانکار
              </p>
              <p class="t18400 mt-5 lh-40 text-justify px-10">
              {{clientDetail?.employee?.description}}
              </p>
            </div>
            <v-divider class="mt-10"></v-divider>
            <div class="text-center primary--text mt-15">
              <p class="t18600">
                تصاویر وسیله
              </p>
              <div>
                <div class="d-flex justify-center mt-5" v-for="(image , index) in employeeVehicles?.images">
                  <img class="br-15 " width="140" height="140" :src="baseUrl +image.image" alt=""  >
                </div>
              </div>
            </div>
            <div class="text-center primary--text mt-15">
              <p class="t18600"  v-if="employeeVehicles?.doesHaveTechnicalExamination" >
                دارای معاینه فنی سلامت
              </p>
              <div class="user-profile__status-card mt-10 mx-5 d-flex justify-space-between align-center px-10">
                <span class="primaryYellow--text t30600 dena-fa">{{clientDetail?.employee?.projectApplies.length }}</span>
                <span class="primary--text t18400 dena-fa">پروژه در دست اقدام</span>

              </div>
              <div class="user-profile__status-card mt-5 mx-5 d-flex justify-space-between align-center px-10">
                <span class="primaryYellow--text t30600 dena-fa">{{ myProductsLength }}</span>
                <span class="primary--text t18400 dena-fa">محصول در فروشگاه</span>

              </div>
              <div class="user-profile__status-card mt-5 mx-5 d-flex justify-space-between align-center px-10">
                <span class="primaryYellow--text t30600 dena-fa">{{ clientDetail?.employee?.skills.length }}</span>
                <span class="primary--text t18400 dena-fa">مهارت انتخاب شده</span>

              </div>

            </div>
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
  data(){
    return{
      clientDetail:null
    }
  },
  methods:{
    async  getClientDetail(){
      try {
        const requestHeaders = {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        };
        const query = gql`
        query{
            clientMe{
                    id,
                    firstName,
                    lastName,
                    nationalId,
                    mobile,
                    birthdate,
                    thumbnail
                    employee{
                      projectApplies{
                        id
                      }
                      id
                      CreatedAt
                      UpdatedAt
                      projectApplies{
                        id
                      }
                      neighborhood{
                        id
                        name
                      }
                      skills{
                        id
                        name
                      }
                      code
                      description
                      drivingLicence
                      roadworthinessInspection
                      vehicles{
                        id
                        doesHaveTechnicalExamination
                        vehicle{
                          name
                        }
                        images{
                          id,
                          image,
                          type
                        }
                      }
                      rating
                    }
            }
          } `;
        const obj = await this.$graphql.default.request(query , {} , requestHeaders);
        this.clientDetail =  obj.clientMe
      }
      catch (e) {
        console.log(e)
      }
    },
  },
  computed:{
    projects(){
      try {
        return this.clientDetail.employee?.projectApplies.length
      }
      catch (e) {
        return  0
      }
    },
    myProductsLength(){
     try {
       return this.$store.getters['get_myProduct'].length
     }
     catch (e) {
       return 0
     }
    },
    baseUrl() {
      return process.env.baseUrl
    },
    employeeVehicles(){
      try {
        const vehiclesLength = this.clientDetail?.employee?.vehicles.length
        return this.clientDetail?.employee?.vehicles[vehiclesLength-1]
      }
      catch (e) {
        return null
      }
    }
  },
  beforeMount() {
    this.getClientDetail()
    this.$store.dispatch('set_myProduct')
  }
}
</script>
