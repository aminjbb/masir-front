<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="3" class="d-none d-md-block">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="d-block d-md-none " >
              <div class="d-flex justify-center">
                <div>
                  <v-img style="margin-top: -63px;" width="204"  height="100" :src="require('~/assets/img/Untitled.png')" alt="">
                    <div class="d-flex justify-center">
                      <img src="~/assets/img/untitled-design-98-2.png" width="80" height="80" alt="">
                    </div>
                  </v-img>
                </div>
              </div>

              <div class="d-flex justify-center">

                <div class="primary--text t30600" >
                  عباس قادری
                </div>
              </div>

            </div>
            <div class="d-block d-md-none ">
              <v-divider class="my-5"></v-divider>
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <span><img src="@/assets/img/UserCircle.svg" alt=""></span>
                  <span class="t16600 primary--text mr-5">میترا حجار</span>

                </div>
                <span>
                  <v-icon size="50" color="primary" @click="$router.go(-1)">
                    mdi-chevron-left
                  </v-icon>
              </span>
              </div>
              <v-divider class="my-5"></v-divider>
            </div>
            <div class="user-profile__detail-card mt-user-profile mb-15 pa-5 pb-1 position__relative">

              <MyMessage/>
              <UserMessage/>
              <MyMessage/>
              <UserMessage/>
              <MyMessage/>
              <UserMessage/>
              <div class="messageSend pt-5 position__relative d-none d-md-block">
                <v-text-field outlined ></v-text-field>
                <div style="    position: absolute;left: 17px;top: 29px;">
                  <img src="~/assets/img/send.svg"/>
                </div>
              </div>
              <div class="messageSend mobile-text-message pt-5 position__relative d-block d-md-none mx-8">
                <v-text-field outlined ></v-text-field>
                <div style="    position: absolute;left: 17px;top: 29px;">
                  <img src="~/assets/img/send.svg"/>
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
import OrderCard from '~/components/UserProfile/OrderCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
import MassageCard from "~/components/UserProfile/MassageCard.vue";
import UserMessage from "~/components/UserProfile/UserMessage.vue";
import MyMessage from "~/components/UserProfile/MyMessage.vue";
export  default {
  layout:'userProfileWithOutFooter',
  components:{
    MyMessage, UserMessage,
    UserProfileNavigationMenu,
    MassageCard
  }
}
</script>

<style>
.mobile-text-message{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
