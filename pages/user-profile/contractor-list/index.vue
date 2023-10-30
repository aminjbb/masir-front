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
            <ContractorCard/>
            <ContractorCard/>

            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorCard from '~/components/UserProfile/ContractorCard.vue'
import UserProfileNavigationMenu from '~/components/Public/UserProfileNavigationMenu.vue'
export  default {
  layout:'userProfile',
  components:{
    ContractorCard,UserProfileNavigationMenu
  },
  data(){
    return{
      page:'',
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      items: [
        // {
        //   icon: require('~/assets/img/shopMenu.svg'),
        //   title: 'فروشگاه',
        //   to: '/products'
        // },
        {
          icon: require('~/assets/img/House.svg'),
          title: 'اطلاعات شخصی',
          to: '/user-profile/contractor-list'
        },
        {
          icon: require('~/assets/img/TrafficCone.svg'),
          title: 'پروژه‌ها',
          to: '/service'
        },
        {
          icon: require('~/assets/img/Storefront.svg'),
          // icon: require('~/assets/img/laveanMenu.svg'),
          title: 'فروشگاه',
          to: '/about-us'
        },
        {
          icon: require('~/assets/img/UsersFour.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'آدرس‌ها',
          to: '/contact-us'
        },
        {
          icon: require('~/assets/img/Chats.svg'),
          // icon: require('~/assets/img/contactusMenu.svg'),
          title: 'پشتیبانی',
          to: '/contact-us'
        },


      ],
    }
  }
}
</script>
