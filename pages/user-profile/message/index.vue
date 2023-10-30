<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="9">
            <div class="user-profile__detail-card mt-15 mb-15 pa-5">
<!--              <div class="px-10 headerPage header-chat d-flex align-center">-->
<!--                <v-text-field-->
<!--                  class="mt-7"-->
<!--                  outlined-->
<!--                  color="black"-->
<!--                  placeholder="جست‌و‌جو کنید"-->
<!--                  append-icon="mdi-magnify"-->
<!--                ></v-text-field>-->
<!--              </div>-->
              <MassageCard @click="$router.push('/user-profile/message/1')"/>
              <MassageCard/>
              <MassageCard/>

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
