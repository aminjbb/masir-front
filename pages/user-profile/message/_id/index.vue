<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="3" class="d-none d-md-block">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-user-profile mb-15 pa-5 pb-1 position__relative">

              <MyMessage/>
              <UserMessage/>
              <MyMessage/>
              <UserMessage/>
              <MyMessage/>
              <UserMessage/>
              <div class="messageSend pt-5 position__relative">
                <v-text-field outlined ></v-text-field>
                <div style="    position: absolute;
    left: 17px;
    top: 29px;">
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
