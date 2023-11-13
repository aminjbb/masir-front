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
<!--                <ModalAddress/>-->
                <v-btn @click="openAddress()" height="62" outlined color="primary" class="br-10">
                  <span class="primary--text t18600 ml-3"><v-icon>mdi-plus-circle-outline</v-icon></span>
                  <span class="primary--text t18600">افزودن آدرس جدید</span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>

  <ModalMapuserAddress/>
    <ModalAddress/>
  </div>
</template>

<script>
import AddressCard from '~/components/UserProfile/AddressCard.vue'
import ModalAddress from '~/components/UserProfile/ModalAddress.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
import ModalMapuserAddress from "~/components/UserProfile/Address/ModalMapuserAddress.vue";
export  default {
  layout:'userProfile',
  components:{
    ModalMapuserAddress,
    UserProfileNavigationMenu,
    AddressCard ,ModalAddress
  },
  methods:{
    openAddress(){
      this.$store.commit('set_addressMapModal' , true)
    }
  }
}
</script>
