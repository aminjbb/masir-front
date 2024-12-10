<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="3" class="d-none d-md-block">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-user-profile mb-15 d-none d-md-block" id="create-form">
              <div class="contractor-card-detail ma-7 pt-3">
                <div class="d-flex justify-start position__relative mr-3">
                    <div v-for="image in project?.images" class="mx-2"><img :src="baseUrl + image?.image" alt="" width="148" height="148"></div>

                    <div style="position: absolute; top: 20px ;left: 20px" @click="$router.go(-1)">
                      <img src="~/assets/img/arrow-up-left.svg" alt="">
                    </div>
                  </div>
                <div class="d-flex justify-start mr-7 my-3">
                   <span class="primary--text t24600">
                    {{ project?.name }}
                  </span>
                  <span class="primary--text t18400 mr-8 mt-1">
                    کارفرما: {{ project?.employer?.user?.firstName }}
                  </span>
                </div>
                <div class="d-flex justify-start align-start mt-5 mr-5">
                  <div class="contractor-chip d-flex justify-start align-center px-5 ">
                    <span class="primary--text t18400">{{ project?.city?.name }}، {{ project?.neighborhood?.name }}</span>
                  </div>
                  <div class="contractor-chip d-flex justify-start align-center px-5 mr-3" v-for="(service , index) in project?.projectServices">
                    <span class="primary--text t18400">{{ service?.service?.name }}</span>
                  </div>
                </div>
                <v-divider class="my-5"></v-divider>
                  <div class="justify-center align-center d-flex px-5" >
                    <v-btn block color="primaryYellow" class="br-15" height="55">
                      <span class="t18400 primary--text">
                        دیدن درخواست‌ها
                      </span>

                    </v-btn>
                  </div>
                <v-divider class="my-5"></v-divider>
                <div v-for="(service , index) in project?.projectServices" :key="`service${service.id}`">
                  <ContractorDetailCard :service="service"/>
                  <v-divider class="my-5"/>
                </div>

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
                    {{ project?.name }}
                  </span>

                </div>
                <div class="text-center  my-3">
                   <span class="primary--text t18400  mt-1">
                    کارفرما: {{ project?.employer?.user?.firstName }}
                  </span>

                </div>
                <div class=" mt-5 mr-5">
                  <div class="d-flex justify-center pl-3 my-3">
                    <div class="contractor-chip d-flex justify-start align-center px-5 ">
                      <span class="primary--text t16400">{{ project?.city?.name }}، {{ project?.neighborhood?.name }}</span>
                    </div>
                  </div>
                  <div class="d-flex justify-center pl-3 my-4">
                    <div class="contractor-chip d-flex justify-start align-center px-5 ">
                      <span class="primary--text t16400">تاریخ شروع: ۱ بهمن ماه ۱۴۰۲</span>
                    </div>
                  </div>
                  <div class="d-flex justify-center pl-3 my-4">
                    <div class="contractor-chip d-flex justify-start align-center px-5 ">
                      <span class="primary--text t16400">تاریخ پایان: ۱ بهمن ماه ۱۴۰۲</span>
                    </div>
                  </div>
                </div>
              </div>
              <v-divider class="mt-10 mb-3"></v-divider>
              <div v-for="(service , index) in project?.projectServices" :key="`service${service.id}`">
                <ContractorDetailCard :service="service"/>
                <v-divider class="my-5"/>
              </div>
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
  },
  computed:{
    project(){
      return this.$store.getters['get_myProject']
    },
    baseUrl(){
      return process.env.baseUrl
    },
  },
  beforeMount() {
    this.$store.dispatch('set_myProject' , this.$route.params.id)
    this.$store.dispatch('set_employeeMyAppliesProject' , this.$route.params.id)
  }
}
</script>
