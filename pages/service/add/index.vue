<template>
  <div class="main-container mt-10"  id="create-form">
<!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
   <div class="d-none d-md-block">
     <div>
        <span class="t40600 primary--text">
          ایجاد پروژه
        </span>
     </div>
     <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
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
          ایجاد پروژه
        </span>
     </div>
     <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
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
        <v-row justify="center" align="center" >
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
              <span class="t18400 primary--text">نام پروژه</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="نام پروژه"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب شهر پروژه</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="نام پروژه"
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
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات پروژه
        </span>
      </div>
    </div>
    <v-row justify="center">
      <div class="create-service-card mt-13 ">
        <v-row justify="center" align="center" >
          <v-col  md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب نوع سرویس</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب نوع سرویس"
                outlined
                append-icon="mdi-chevron-down-circle-outline"
                :items="items"
              >
                <template v-slot:item="{ props, item }" class="pa-0">

                <div class="v-menu-content-box pa-5">
                 <span class="white--text">
                    {{item}}
                 </span>

                </div>

                </template>
              </v-select>
            </div>
          </v-col>
          <v-col  md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">بودجه مد نظر شما</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="انتخاب محدوده"
                outlined
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <div class="add-service-type-box">
            <v-row justify="center">
              <v-col md="6" cols="12" class="py-0">
                <v-text-field
                  placeholder="شکل زمین از نظر پستی و بلندی را بنویسید"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col  md="6" cols="12" class="py-0">
                <v-text-field
                  placeholder="حجم خاک برداری را به متر مکعب بنویسید"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col  md="6" cols="12" class="py-0">
                <v-text-field
                  placeholder="رمپ پروژه در انتها میماند و یا خیر؟"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col  md="6" cols="12" class="py-0 px-10">
                <v-row justify="space-between" align="center">
                  <span class="t18400 primary--text">
                    تصاویر پروژه:
                  </span>
                <div class="mt-mobile-5">
                  <v-row class="pl-2 pt-2">
                    <v-card outlined width="87" height="87" class="br-15 mx-1">
                      <v-row justify="center" align="center" class="pt-6">
                        <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                      </v-row>
                    </v-card>
                    <div class="mx-1">
                      <img src="~/assets/img/addService.png" alt="">
                    </div>
                    <div class="mx-1">
                      <img src="~/assets/img/addService.png" alt="">
                    </div>
                  </v-row>
                </div>
                </v-row>
              </v-col>
              <v-col cols="12" class="py-0 mt-mobile-10">
                <v-textarea

                  placeholder="توضیحات تکمیلی جهت پیدا کردن نیروی بهتر را وارد فرمایید"
                  outlined
                ></v-textarea>
              </v-col>
            </v-row>
          </div>
        </v-row>
        <div class="px-15 d-none d-md-block">
          <v-row justify="space-between" class="px-15 py-10">
            <v-btn outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
              <span class="t18400 primary--text">
                  افزودن سرویس اضافه
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
                  افزودن سرویس اضافه
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
data(){return{
  items:['test' , 'tesst']
}},
  layout:'WithOutContact'
}
</script>
