<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-md-15 mb-15" id="create-form">
              <AddressCard/>
              <AddressCard/>
              <div class="d-flex justify-end px-8 mb-8">
                <ModalAddress/>
              </div>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import AddressCard from '~/components/UserProfile/AddressCard.vue'
import ModalAddress from '~/components/UserProfile/ModalAddress.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    AddressCard ,ModalAddress
  }
}
</script>
