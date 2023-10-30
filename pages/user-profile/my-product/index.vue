<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="9">
            <div class="user-profile__detail-card mt-15 mb-15" id="create-form">
              <div class="create-product-box d-flex justify-space-between align-center px-5 ma-7">
                <div class="d-flex align-center">
                  <img src="~/assets/img/imageCreate.svg" alt="">
                  <span class="mr-10 primary--text t18600">محصول جدید بارگذاری کنید</span>
                </div>
                <v-btn to="/user-profile/my-product/create" color="primaryYellow" height="55" width="149" class="br-15">
                  <span class="primary--text t18600">ساخت محصول</span>
                </v-btn>
              </div>
              <ProduCard/>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ProduCard from '~/components/UserProfile/ProduCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    ProduCard
  }
}
</script>
