<template>
  <div>
    <div class="user-profile__head mt-15 pt-15 mt-md-0 pt-md-0">
      <div class="main-container">
        <v-row class="d-none d-md-flex" justify="start" align="start" >
            <v-col cols="3" class="pl-5">
                <div class="avatar-box"></div>
            </v-col>
            <v-col cols="6" class="pl-15">
              <div class="pt-2">
                <span class="white--text t30600">
                  عباس قادری
                </span>
              </div>
              <div class="d-flex justify-start mt-15">
                <div class="chip px-5 d-flex justify-center align-center ml-2">
                  <span class="primary--text t18400">خاک برداری، تخریب </span>
                </div>
                <div class="chip px-5 d-flex justify-center align-center mx-2">
                  <span class="primary--text t18400">سعادت آباد</span>
                </div>
                <div class="chip px-10 d-flex justify-center align-center mx-2">
                  <span class="primary--text t18400">لودر</span>
                </div>
              </div>
              <div class="mt-8 text-right">
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
           </div>

            <div class="text-right pr-2 mt-10">
              <div>
                <span class="primaryYellow--text t18400">وضعیت فعلی:</span>
                <span  class="primaryYellow--text t18400 mr-4">
                    <v-btn-toggle
                      v-model="toggle_exclusive"
                      mandatory
                      color="primaryYellow"
                      class="br-10"
                    >
                    <v-btn class="br-10" text>
                      <span class="primary--text t16400">
                        آزاد
                      </span>
                    </v-btn>
                    <v-btn class="br-10" text>
                     <span class="primary--text t16400">
                        مشغول
                      </span>
                    </v-btn>

                  </v-btn-toggle>
                </span>
              </div>
              <div class="mt-5">
                <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">۱۷</span>
              </div>

              <div class="mt-16 pt-5">
                <v-btn block color="primaryYellow" width="251" height="101" class="br-20">
                  <span class="t30600 primary--text">
                     ثبت تغییرات
                  </span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex d-md-none" justify="center" align="start" >
          <div>
            <div class="d-flex justify-center">
              <div class="avatar-box"></div>
            </div>
            <div class="pt-2 text-center mt-8">
              <span class="white--text t18600">
                عباس قادری
              </span>
            </div>
            <div class="d-flex justify-start mt-15 position__relative scroller px-10" style="max-width: 359px;">
              <div class="chip  d-flex justify-center align-center ml-2"  style="min-width: 150px;">
                <span class="primary--text t14400">خاک برداری، تخریب </span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2" style="min-width: 120px;">
                <span class="primary--text t14400">سعادت آباد</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t14400">لودر</span>
              </div>
            </div>
            <div class="text-justify px-13 mt-8">
              <span class="white--text t16400">
                لودر یکی از کاربردی‌ترین ماشین‌آلات ساختمانی و عمرانی است. این ماشین که در اندازه‌های مختلف ساخته می‌شود
              </span>
            </div>

           <div class="d-flex justify-center ma-5">
             <div class="status-mobile-box pt-5">
               <div class="d-flex justify-center align-center ">
                 <span class="primaryYellow--text t18400">وضعیت فعلی:</span>
                 <span class="primaryYellow--text t18400 mr-4">
                   <v-btn-toggle
                     v-model="toggle_exclusive"
                     mandatory
                     color="primaryYellow"
                     class="br-10"
                   >
                    <v-btn class="br-10" text>
                      <span class="primary--text t16400">
                        آزاد
                      </span>
                    </v-btn>
                    <v-btn class="br-10" text>
                     <span class="primary--text t16400">
                        مشغول
                      </span>
                    </v-btn>

                  </v-btn-toggle>
              </span>
               </div>
               <div class="d-flex justify-center align-center mt-5">
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
        <div class="d-md-flex d-none justify-space-between align-center mt-10">
          <span class="primary--text t24600 mr-10">
            اطلاعات شخصی
          </span>
          <div class="d-flex">
            <v-btn width="163" height="70" color="gray02" class="br-15 ml-5">
              <span class="primary--text t18400"> پروژه ها</span>
            </v-btn>
            <v-btn width="163" height="70" color="gray02" class="br-15">
              <span class="primary--text t18400"> پیام ها</span>
            </v-btn>
          </div>
        </div>
        <div class="d-flex d-md-none justify-center align-center mt-10">
          <span class="primary--text t24600">
            اطلاعات شخصی
          </span>

        </div>

        <div class="create-service-card mt-13" id="create-form">
          <v-row justify="center" align="center">
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">نام و نام خانوادگی</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="نام و نام خانوادگی"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">شماره تماس</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="شماره تماس"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">ایمیل</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="ایمیل"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">کد ملی</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="کد ملی"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">انتخاب مهارت ها</span>
              </div>
              <div class="mt-5">
                <v-select
                  placeholder="انتخاب مهارت ها "
                  outlined
                  append-icon="mdi-chevron-down-circle-outline"
                >

                </v-select>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">انتخاب محدوده</span>
              </div>
              <div class="mt-5">
                <v-select
                  placeholder="انتخاب محدوده"
                  outlined
                  append-icon="mdi-chevron-down-circle-outline"
                ></v-select>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">تاریخ تولد</span>
              </div>
              <div class="mt-5 px-4">
                <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">کد پیمانکاری</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="کد پیمانکاری "
                  outlined
                ></v-text-field>
              </div>
            </v-col>

            <v-col md="8" cols="11">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">از تجربیات خود بنویسید.</span>
              </div>
              <div class="mt-10">
                <v-textarea
                  placeholder="کد پیمانکاری "
                  outlined
                  rows="9"
                  row-height="30"
                ></v-textarea>
              </div>
            </v-col>
            <v-col md="4" cols="11">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">تصویر صفحه کاربری</span>
              </div>
              <div class="mt-5">

                <v-card v-if="profile.base64 == null" @click="selectProfileImage" color="cultured" outlined height="251  " class="br-15 mx-1 d-flex align-center justify-center">
                  <img src="~/assets/img/PlusCircleBlack2.svg" alt="">
                </v-card>
                <v-img height="251" v-else :src="profile.base64" alt="" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <div class="ma-1 position__absolute z-index-10" @click="deleteProfilePhoto()"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>
              </div>
            </v-col>

          </v-row>
        </div>
        <div>
          <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات وسیله
        </span>
          </div>
        </div>
        <DeviceInformation />


      </div>
    </div>


    <div
      style="position: fixed; height: 100px ;bottom: 0 ;background: #fff;width: 100%"
      class="py-3 d-block d-md-none"
    >
      <v-btn  color="gray02" width="153" height="66" class="br-20 mx-2">
                  <span class="t18600 primary--text">
                    پیام‌ها
                  </span>
      </v-btn>
      <v-btn  color="primaryYellow" width="153" height="66" class="br-20 mx-2">
                  <span class="t18600 primary--text">
                     ثبت تغییرات
                  </span>
      </v-btn>


    </div>
  </div>
</template>

<script>
import DeviceInformation from "~/components/Service/DeviceInformation.vue";

export  default {
  components: {DeviceInformation},
  layout:'userProfile',
  data(){
    return{
      toggle_exclusive:null,
      profile:{base64:null , image:''},
    }
  },
  methods:{  deleteProfilePhoto(){
      this.profile.base64 = null
      this.profile.image = null
    },
    selectProfileImage() {
      var input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => {
        this.getBase64(e.target.files[0])
      }
      input.click();
    },

    getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =  () => {

        this.profile.image = file
        this.profile.base64 = reader.result

      };

    },

  }
}
</script>
