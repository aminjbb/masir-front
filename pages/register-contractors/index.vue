<template>
  <div class="main-container mt-10">
    <!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
    <div class="d-none d-md-block ">
      <div>
        <span class="t40600 primary--text">
          ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <div class="d-block d-md-none mt-15 pt-15">
      <div class="text-center">
        <span class="t24600 primary--text">
           ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t18600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <v-row justify="center">
      <div class="create-service-card mt-13">
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
              <v-card color="cultured" outlined height="251  " class="br-15 mx-1 d-flex align-center justify-center">
                <img src="~/assets/img/PlusCircleBlack2.svg" alt="">
              </v-card>
            </div>
          </v-col>

        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات وسیله
        </span>
      </div>
    </div>
    <v-row justify="center">
      <div class="create-service-card mt-13">
        <v-row justify="center" align="center">
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب نوع وسیله</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب نوع وسیله"
                outlined
                append-icon="mdi-chevron-down-circle-outline"

              >
<!--                <template v-slot:item="{ props, item }" class="pa-0">-->

<!--                  <div class="v-menu-content-box pa-5">-->
<!--                 <span class="white&#45;&#45;text">-->
<!--                    {{item}}-->
<!--                 </span>-->

<!--                  </div>-->

<!--                </template>-->
              </v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
           <v-row align="center" class="pr-5">
             <span class="primary--text t18400">
آیا وسیله شما دارای معاینه فنی سلامت می‌باشد؟
             </span>

             <v-switch
               inset
               class="mr-10"
               color="primary"
             ></v-switch>
           </v-row>
          </v-col>

          <v-col md="6" cols="12" class="py-0 px-10">

            <div class="">
              <v-row justify="center" class="pl-2 pt-2  d-none d-md-flex" >
                <v-card outlined width="104" height="104" class="br-15 mx-4 d-flex align-center justify-center">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>
                <div class="mx-4">
                  <img  width="104" height="104" src="~/assets/img/addService.png" alt="">
                </div>
                <div class="mx-4">
                  <img  width="104" height="104" src="~/assets/img/addService.png" alt="">
                </div>
              </v-row>
              <v-row justify="center" class="pl-2 pt-2  d-flex d-md-none" >
                <v-card outlined width="87" height="87" class="br-15 mx-1 d-flex align-center justify-center">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>
                <div class="mx-1">
                  <img  width="87" height="87" src="~/assets/img/addService.png" alt="">
                </div>
                <div class="mx-1">
                  <img  width="87" height="87" src="~/assets/img/addService.png" alt="">
                </div>
              </v-row>
            </div>
            <div class="text-right pr-4 mt-5">
              <span class="t18400 primary--text">تصاویر وسیله</span>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="py-0 px-10">

            <div class="">
              <v-row justify="center" class="pl-2 pt-2">

               <v-col cols="6" md="5">
                 <v-card outlined width="104" height="104" class="br-15 mx-4 d-flex align-center justify-center">
                   <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                 </v-card>
                 <div class="text-right pr-4 mt-5">
                   <span class="t18400 primary--text">تصاویر گواهینامه</span>
                 </div>
               </v-col>
                <v-col cols="6" md="5">
                 <v-card outlined width="104" height="104" class="br-15 mx-4 d-flex align-center justify-center">
                   <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                 </v-card>
                  <div class="text-right pr-4 mt-5">
                    <span class="t18400 primary--text">تصاویر برگه معاینه فنی</span>
                  </div>
               </v-col>
              </v-row>
            </div>

          </v-col>

        </v-row>
        <div class="px-15 d-none d-md-block">
          <v-row justify="space-between" class="px-15 py-10">
            <v-btn outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
              <span class="t18400 primary--text">
                 افزودن وسیله اضافه
              </span>

            </v-btn>
            <v-btn color="primaryYellow" width="251" height="101" class="br-20">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
            </v-btn>
          </v-row>
        </div>
        <div class="px-15 d-block d-md-none">
          <v-row justify="center" class="px-15 py-10">
            <v-btn outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
              <span class="t18400 primary--text">
                  افزودن وسیله اضافه
              </span>

            </v-btn>
            <v-btn color="primaryYellow" width="251" height="101" class="br-20 mt-10">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
            </v-btn>
          </v-row>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  layout:'WithOutContact'
}
</script>
