<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-user-profile mb-15" id="create-form">
              <OrderCard :order="order" v-for="(order , index) in orderList" :key="`order${order.id}`"/>

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
import {gql} from "nuxt-graphql-request";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    OrderCard
  },

  methods:{
  },
  computed:{
    orderList(){
      return this.$store.getters['get_clientOrders']
    }
  },
  beforeMount() {
    this.$store.dispatch('set_clientOrders')
  }
}
</script>
