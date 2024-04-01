<template>
  <div>
    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card-chat mt-user-profile mb-15 pa-5">

              <div class="chatHeader">
                <v-col md="4" cols="12" class="py-0">
                  <v-text-field
                    outlined

                    placeholder="جست‌و‌جو کنید"
                    append-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
              </div>
              <MassageCard :message="message" v-for="(message, index) in massages" :key="`message${message.id}`" route="message" activeClass="active-chat" />
<!--              <MassageCard route="message" activeClass="unactive-chat"/>-->
<!--              <MassageCard route="message" activeClass="unactive-chat"/>-->

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
  },
  computed:{
    massages(){
      return this.$store.getters['get_clientMessages']
    }
  },
  beforeMount() {
    this.$store.dispatch('set_clientMessages')
  }
}
</script>
