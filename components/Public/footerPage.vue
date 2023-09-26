<template>
  <div class="masir-footer pb-15">
      <v-row justify="center" align="center">
          <div class="footer-contactus-box position__relative">
            <div class="d-flex justify-center" >
              <div class="contact-us-title-box text-center pt-5">
                <span class="t30600 white--text">
                      تماس با ما
                </span>
              </div>


            </div>
            <v-row justify="center" class="px-13 mt-10 " id="contactUsForm">
              <v-col class="pa-2" md="6" cols="12">
                <v-text-field
                  outlined
                  color="white"
                  label="نام و نام خانوادگی"
                ></v-text-field>
              </v-col>
              <v-col class="pa-2" md="6" cols="12">
                <v-text-field
                  outlined
                  color="white"
                  label="ایمیل"
                ></v-text-field>
              </v-col>
              <v-col class="pa-2 pt-0 mb-sm-10" cols="12">
                <v-textarea
                  outlined
                  color="white"
                  label="متن پیام خود را بنویسید."
                  rows="12"
                ></v-textarea>
              </v-col>

            </v-row>

            <v-row justify="end" class="pb-10 pt-5 pl-13 d-none d-md-flex">
              <v-btn color="primaryYellow" width="183" height="74" class="br-15">
                <span class="t24600">
                    ارسال
                </span>
              </v-btn>
            </v-row>
            <v-row justify="center" class="pb-10 pt-5 d-flex d-sm-none position__absolute" style="right: 109px;bottom: -81px;">
              <v-btn color="primaryYellow" width="183" height="74" class="br-15">
                <span class="t24600">
                    ارسال
                </span>
              </v-btn>
            </v-row>

          </div>
            <v-col md="8" cols="12">
              <v-row justify="space-between" align="center" class="pt-15 px-15 d-none d-md-flex">
                <v-col cols="6">
                  <v-row class="pt-12">
                    <v-col cols="3">
                      <div class="mt-15">
                        <v-list class="background_unset">

                          <v-list-item
                            class="px-0"
                          >

                            <v-list-item-content>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text"> درباره ما</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">تماس با ما</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">چرا مسیر</span></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <div class="mt-15">
                        <v-list class="background_unset">

                          <v-list-item
                            class="px-0"
                          >

                            <v-list-item-content>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text"> مرکز پشتیبانی آنلاین</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">راهنمای خرید</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">راهنمای استرداد</span></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-col>
                    <v-col cols="5">
                      <div class="mt-15 pr-10">
                        <v-list class="background_unset">

                          <v-list-item
                            class="px-0"
                          >

                            <v-list-item-content>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">قوانین و مقررات</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">پرسش و پاسخ</span></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider color="white" class="mt-8"></v-divider>
                  <v-row justify="center">
                    <v-col cols="6" class="mt-5">
                        <span class="t24600 white--text">
                            شبکه های اجتماعی
                        </span>
                    </v-col>
                    <v-col cols="6" class="mt-8">
                      <v-row justify="end">
                        <img src="~/assets/img/WhatsappLogo.svg" alt=""  class="mx-2">
                        <img src="~/assets/img/YoutubeLogo.svg" alt=""  class="mx-2">
                        <img src="~/assets/img/InstagramLogo.svg" alt="" class="mx-2">
                      </v-row>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                        <span class="t14400 white--text">
                          کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت مسیر می‌باشد.
                        </span>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                      <div>
                       <span class="t14400 white--text">
                        powered by HMS Innovation
                     </span>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="5" class="pr-15">
                  <div class="mb-4 mt-8">
                    <img style="    width: 304px;" src="~/assets/img/footerLogo.png" alt="">
                  </div>
                  <v-row justify="center">
                    <v-col cols="6">
                        <span class="t24600 white--text">
                          شماره تماس:
                        </span>
                    </v-col>
                    <v-col cols="6" >
                        <span class="t24600 white--text">
                          ۰۲۱-۶۶۵۶۱۲۰۴
                        </span>

                    </v-col>
                    <v-col cols="12">
                      <v-divider color="white" class="mt-8"></v-divider>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                        <span class="t14400 white--text">
                          دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1
                        </span>
                    </v-col>
                  </v-row>

                </v-col>
              </v-row>
              <v-row justify="center" align="center" class="d-block d-sm-none mt-15">
                <v-col cols="12">
                  <div class="my-10  px-10 ">
                    <img width="274" src="~/assets/img/footerLogo.png" alt="">
                  </div>
                  <v-row justify="center" class=" px-10 ">
                    <v-col cols="6">
                    <span class="t24600 white--text">
                      شماره تماس:
                    </span>
                    </v-col>
                    <v-col cols="6" >
                    <span class="t24600 white--text">
                      ۰۲۱-۶۶۵۶۱۲۰۴
                    </span>

                    </v-col>
                    <v-col cols="12">
                      <v-divider color="white" class="mt-8"></v-divider>
                    </v-col>
                    <v-col cols="12" class="mt-5 text-justify">
                    <span class="t16400 white--text">
                      دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1
                    </span>
                    </v-col>
                  </v-row>

                </v-col>

                <v-col cols="12">
                  <v-row class=" px-10">
                    <v-col cols="6">
                      <div class="mt-15">
                        <v-list class="background_unset">

                          <v-list-item
                            class="px-0"
                          >

                            <v-list-item-content>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text"> درباره ما</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">تماس با ما</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">چرا مسیر</span></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="mt-15">
                        <v-list class="background_unset">

                          <v-list-item
                            class="px-0"
                          >

                            <v-list-item-content>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text"> مرکز پشتیبانی آنلاین</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">راهنمای خرید</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">راهنمای استرداد</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">قوانین و مقررات</span></v-list-item-title>
                              <v-list-item-title class="mt-5"> <span class="t16400 white--text">پرسش و پاسخ</span></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </div>
                    </v-col>

                  </v-row>
                  <v-row justify="center" class="px-10">
                    <v-col cols="12" class="mt-5">
                      <div class="text-center">
                      <span class="t24600 white--text">
                        شبکه های اجتماعی
                    </span>
                      </div>
                    </v-col>
                    <v-col cols="12" class="mt-8">
                      <v-row justify="center">
                        <img src="~/assets/img/WhatsappLogo.svg" alt=""  class="mx-5">
                        <img src="~/assets/img/YoutubeLogo.svg" alt=""  class="mx-5">
                        <img src="~/assets/img/InstagramLogo.svg" alt="" class="mx-5">

                      </v-row>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                      <div class="text-justify">
                       <span class="t14400 white--text">
                       کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت مسیر می‌باشد.
                     </span>
                      </div>
                    </v-col>
                    <v-col cols="12" class="mt-5">
                      <div class="text-center">
                         <span class="t14400 white--text">
                          powered by HMS Innovation
                       </span>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

              </v-row>
            </v-col>
      </v-row>
  </div>
</template>
<script>
import footer from '~/components/Public/footerPage.vue'
export default {}
</script>
