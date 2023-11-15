<template>
  <div>
    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card-chat mt-md-15 mb-15 pa-5">

              <div class="chatHeader">
                <v-col cols="4" class="py-0">
                  <v-text-field
                    outlined

                    placeholder="جست‌و‌جو کنید"
                    append-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
              </div>
              <MassageCard activeClass="active-chat" />
              <MassageCard activeClass="unactive-chat"/>
              <MassageCard activeClass="unactive-chat"/>

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
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    MassageCard
  }
}
</script>
