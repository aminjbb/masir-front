<template>
  <div class="user-profile-navigation mt-15 mb-15 pt-15">
    <v-row justify="center">
      <div class="mobile-box d-flex justify-center align-center">
                  <span class="primaryYellow--text t18400">
                    ۰۹۳۰۰۱۷۹۶۴۸
                  </span>
      </div>
    </v-row>
    <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/user-detail" router exact
                 style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
      <v-list-item-action class="z-index-10">
        <img width="24" height="24" src="~/assets/img/info.svg" :class="$route.fullPath == '/user-profile/user-detail' ? 'filter-green' :''" >
      </v-list-item-action>
      <v-list-item-content class="z-index-10">
        <v-list-item-title>
          <span class="t18400 primary--text">اطلاعات شخصی </span></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-group
      :value="false"
      no-action
      sub-group

    >
      <template v-slot:activator >
        <div  class="pa-2 mx-2 d-flex"
              style=" border-radius: 10px; background: #fff;width: 100%" >
          <v-list-item-action class="z-index-10">
            <img width="24" height="24" src="~/assets/img/Barricade.svg"  >
          </v-list-item-action>
          <v-list-item-content class="z-index-10">
            <v-list-item-title class="mr-8">
              <span class="t18400 primary--text">پروژه‌ها </span></v-list-item-title>
          </v-list-item-content>
        </div>

      </template>


      <v-list-item router to="/user-profile/contractor-list">
        <v-list-item-title > <span class="primary--text mr-15">پروژه‌های شما</span></v-list-item-title>
      </v-list-item>
      <v-list-item router to="/user-profile/histort-contractor">
        <v-list-item-title > <span class="primary--text mr-15">تاریخچه پروژه‌ها</span></v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-group
      :value="false"
      no-action
      sub-group

    >
      <template v-slot:activator>
        <div  class="mt-4 pa-2 mx-2 d-flex"
              style=" border-radius: 10px; background: #fff;width: 100%" >
          <v-list-item-action class="z-index-10">

            <img width="24" height="24" src="~/assets/img/package.svg" >
          </v-list-item-action>
          <v-list-item-content class="z-index-10">
            <v-list-item-title class="mr-8">
              <span class="t18400 primary--text">فروشگاه </span></v-list-item-title>
          </v-list-item-content>
        </div>

      </template>


      <v-list-item router to="/user-profile/order">
        <v-list-item-title > <span class="primary--text mr-15">سفارش‌های شما</span></v-list-item-title>
      </v-list-item>
      <v-list-item router to="/user-profile/order">
        <v-list-item-title > <span class="primary--text mr-15">تاریخچه سفارش‌ها</span></v-list-item-title>
      </v-list-item>
      <v-list-item router to="/user-profile/my-product">
        <v-list-item-title > <span class="primary--text mr-15">محصولات شما</span></v-list-item-title>
      </v-list-item>
      <v-list-item router to="/user-profile/product">
        <v-list-item-title > <span class="primary--text mr-15">تاریخچه سفارش‌ها</span></v-list-item-title>
      </v-list-item>
      <v-list-item router to="/user-profile/message">
        <v-list-item-title > <span class="primary--text mr-15">پیام های شما</span></v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/address" router exact
                 style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
      <v-list-item-action class="z-index-10">
        <img width="24" height="24" src="~/assets/img/map-pin-y.svg" :class="$route.fullPath == '/user-profile/address' ? 'filter-green' :''">
      </v-list-item-action>
      <v-list-item-content class="z-index-10">
        <v-list-item-title>
          <span class="t18400 primary--text">آدرس‌ها </span></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="my-4 pa-2 mx-2" to="/user-profile/message" router exact
                 style="height: 60px; border-radius: 10px; background: #fff"  v-model="page">
      <v-list-item-action class="z-index-10">

        <img width="24" height="24" src="~/assets/img/ChatCircleDots.svg" :class="$route.fullPath == '/user-profile/message' ? 'filter-green' :''">
      </v-list-item-action>
      <v-list-item-content class="z-index-10">
        <v-list-item-title>
          <span class="t18400 primary--text">پشتیبانی </span></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </div>
</template>
<script setup>
</script>
