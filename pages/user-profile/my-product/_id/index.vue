<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="9">
            <div class="user-profile__detail-card mt-user-profile mb-15 " id="create-form">
              <div class="contractor-card-detail ma-7 pt-3 pb-5">
                <div class="d-flex justify-center position__relative mt-5 mr-3">
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div class="mx-2"><img src="~/assets/img/addService.png" alt="" width="148" height="148"></div>
                  <div style="position: absolute; top: 20px ;left: 20px" @click="$router.go(-1)">
                    <img src="~/assets/img/arrow-up-left.svg" alt="">
                  </div>
                </div>
                <div class="d-flex justify-center mr-7 mt-10">
                   <span class="primary--text t24600">
                  {{ product?.persianName }}
                  </span>

                </div>
                <div class="d-flex justify-center mr-7 mt-2">
                   <span class="primary--text t18400">
                    {{product?.englishName}}
                  </span>

                </div>
                <div>
                  <v-card class="br-20 mt-10 mx-15">
                    <v-row justify="space-between" class="pa-11 px-13 ">
                      <div class="d-flex">
                        <div class="d-flex">

                        </div>
                        <div class="d-flex mr-15">
                          <span class="t18400 primary--text">
                            {{ product?.seller?.user?.firstName }}
                          </span>

                        </div>
                      </div>
                      <div class="d-flex">
                      <span class="t18400 primary--text">
                        شماره تماس:
                      </span>
                        <span class="mr-8 t18400 primary--text">
                        {{ product?.seller?.mobile}}
                        </span>
                      </div>
                    </v-row>
                  </v-card>
                </div>
                <v-divider class="my-8"/>
                <v-row justify="center" align="center" class="pr-10 pl-3">
                  <v-col cols="5">
                    <div class="">
                      <div class="mt-5">
                        <span class="t18400 primary--text">
                          {{product?.description}}
                        </span>
                      </div>

                    </div>
                  </v-col>
                  <v-col cols="7">
                    <v-card height="129" class="br-25 ">
                      <div class="d-flex align-center justify-center" style="height: 100%">
                        <span class="primary--text t24600">{{ splitChar(product?.price) }} تومان</span>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>


<!--                <div class="d-flex align-center justify-center my-10">-->
<!--                  <v-btn color="primaryYellow" width="251" height="101" class="br-20 ml-5">-->
<!--                    <span class="t24600 primary&#45;&#45;text">-->
<!--                      فروخته شد-->
<!--                    </span>-->
<!--                  </v-btn>-->

<!--                </div>-->
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
import {splitChar} from "../../../../assets/js/public";
export  default {
  methods: {splitChar},
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    ContractorDetailCard
  },
  computed:{
    product() {
      return this.$store.getters['get_product'];
    }
  },
  beforeMount() {
    this.$store.dispatch('set_product' , this.$route.params.id)
  }
}
</script>
