<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="3" class="d-none d-md-block">>
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-15 mb-15 d-none d-md-block" id="create-form">
              <div class="contractor-card-detail ma-7 pt-3">
                <div class="d-flex justify-start position__relative mr-3">
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                    <div style="position: absolute; top: 20px ;left: 20px">
                      <img src="~/assets/img/arrow-up-left.svg" alt="">
                    </div>
                  </div>
                <div class="d-flex justify-start mr-7 my-3">
                   <span class="primary--text t24600">
                    پروژه حدادیان
                  </span>
                  <span class="primary--text t18400 mr-8 mt-1">
                    کارفرما: گلزار حیدری
                  </span>
                </div>
                <div class="d-flex justify-start align-start mt-5 mr-5">
                  <div class="contractor-chip d-flex justify-start align-center px-5 ">
                    <span class="primary--text t18400">تهران، سعادت آباد</span>
                  </div>
                  <div class="contractor-chip d-flex justify-start align-center px-5 mr-3">
                    <span class="primary--text t18400">خاک برداری</span>
                  </div>
                  <div class="contractor-chip d-flex justify-start align-center px-5 mr-3">
                    <span class="primary--text t18400">خاک برداری</span>
                  </div>

                </div>
                <v-divider class="my-5"></v-divider>


<!--                -->

              <ContractorDetailCard/>
                <v-divider class="my-5"/>
                <ContractorDetailCard/>
              </div>

            </div>
            <div class="user-profile__detail-card mt-15 mb-15 d-block d-md-none" id="create-form">
              <div class="contractor-card-detail ma-7 py-3">
                <div class="d-flex justify-start scroller position__relative mr-3">
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                    <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>

                  </div>
                <div class="text-center my-3">
                   <span class="primary--text t24600">
                    پروژه حدادیان
                  </span>

                </div>
                <div class="text-center  my-3">
                   <span class="primary--text t18400  mt-1">
                    کارفرما: گلزار حیدری
                  </span>

                </div>
                <div class=" mt-5 mr-5">
                  <div class="d-flex justify-center pl-3 my-3">
                    <div class="contractor-chip d-flex justify-start align-center px-5 ">
                      <span class="primary--text t16400">تهران، سعادت آباد</span>
                    </div>
                  </div>
                  <div class="d-flex justify-center pl-3 my-3">
                    <div class="contractor-chip d-flex justify-start align-center px-2 ">
                      <span class="primary--text t16400">تاریخ شروع: ۱ بهمن ماه ۱۴۰۲</span>
                    </div>
                  </div>
                  <div class="d-flex justify-center pl-3 my-3">
                    <div class="contractor-chip d-flex justify-start align-center px-5 ">
                      <span class="primary--text t16400">خاک برداری</span>
                    </div>
                  </div>



                </div>



<!--                -->

<!--              <ContractorDetailCard/>-->
<!--                <v-divider class="my-5"/>-->
<!--                <ContractorDetailCard/>-->
              </div>
              <v-divider class="my-5"></v-divider>
              <ContractorDetailCard/>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorDetailCard from '~/components/UserProfile/ContractorDetailCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    ContractorDetailCard
  }
}
</script>
