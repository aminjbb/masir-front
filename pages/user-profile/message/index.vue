<template>
  <div>
    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card .messageSend mt-md-15 mb-15 pa-5 position__relative">
              <div style="margin-bottom: 100px">
                <MyMessage/>
                <UserMessage/>
                <MyMessage/>
                <UserMessage/>
                <MyMessage/>
              </div>
              <div style="   ; position: absolute;left: 0;right: 0;margin: 0 15px;bottom: 0">
                <div class="messageSend pt-5 position__relative">
                  <v-text-field outlined ></v-text-field>
                  <div style="   position: absolute;left: 17px;top: 29px;">
                    <img src="~/assets/img/send.svg"/>
                  </div>
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
import MyMessage from "~/components/UserProfile/MyMessage.vue";
import UserMessage from "~/components/UserProfile/UserMessage.vue";
export  default {
  layout:'userProfile',
  components:{
    UserMessage, MyMessage,
    UserProfileNavigationMenu,
    MassageCard
  }
}
</script>
