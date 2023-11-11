<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-md-15  mb-15" id="create-form">
              <v-row justify="space-between" class="mb-10 px-md-15 px-2 pt-10">
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
                  <div class="text-right pr-4">
                    <span class="t18400 primary--text">تاریخ تولد</span>
                  </div>
                  <div class="mt-5">
                    <v-text-field
                      placeholder="تاریخ تولد"
                      outlined
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col md="6" cols="12" class="py-0">
                  <div class="text-right pr-4">
                    <span class="t18400 primary--text">جنسیت</span>
                  </div>
                  <div class="mt-5">
                    <v-text-field
                      placeholder="جنسیت"
                      outlined
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" >
                  <div class="d-none justify-end d-md-flex">
                    <v-btn  color="primaryYellow" height="55" width="149" class="br-15">
                      <span class="primary--text t18600">ویرایش</span>
                    </v-btn>
                  </div>
                  <div class="d-flex justify-center d-md-none mb-3">
                    <v-btn  color="primaryYellow" height="55" width="149" class="br-15">
                      <span class="primary--text t18600">ویرایش</span>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" class="py-0">
                  <div class="user-detail-dec-box pa-5 mx-md-0 mx-3">
                    <div> <span class="t16400 primary--text">محرمانگی اطلاعات مشتری</span></div>
                    <div>
                      <span class="t16400 primary--text">داده‌های شخصی‌ای که فراهم می‌کنید برای پاسخ دادن به سوالات، پردازش سفارشات یا صدور اجازه دسترسی به اطلاعات خاص مورد استفاده قرار می‌گیرد. شما می‌توانید تمام اطلاعات شخصی که در صفحه «حساب‌کاربری من» وجود دارد را ویرایش یا حذف کنید.</span>

                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>



      </div>
    </div>


  </div>
</template>

<script>
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";

export  default {
  components: {UserProfileNavigationMenu},
  layout:'userProfile'
}
</script>
