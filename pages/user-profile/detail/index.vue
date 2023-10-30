<template>
  <div>
    <div class="user-profile__head pt-15">
      <div class="main-container">
        <v-row justify="start" align="start" class="pt-15">
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
      </div>
    </div>

    <div  >
      <div class="main-container">
        <div class="d-flex justify-space-between align-center mt-10">
          <span class="primary--text t24600 mr-10">
            اطلاعات شخصی
          </span>
         <div class="d-flex ">
           <v-btn width="163" height="70" color="gray02" class="br-15 ml-8">
             <span class="primary--text t18400"> پروژه ها</span>
           </v-btn>
           <v-btn width="163" height="70" color="gray02" class="br-15">
             <span class="primary--text t18400"> پیام ها</span>
           </v-btn>
         </div>
        </div>

        <div class="user-profile__detail-card mt-15 mb-15" id="create-form">
          <v-row justify="space-between" class="mb-10 px-15 pt-10">
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
                  placeholder="ایمیل"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">انتخاب مهارت ها</span>
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
                <span class="t18400 primary--text">انتخاب محدوده</span>
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
                <span class="t18400 primary--text">تاریخ تولد</span>
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
                <span class="t18400 primary--text">کد پیمانکاری</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="ایمیل"
                  outlined
                ></v-text-field>
              </div>
            </v-col>


          </v-row>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
export  default {
  layout:'userProfile'
}
</script>
