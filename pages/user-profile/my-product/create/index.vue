<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="12" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="12" md="9">
            <div class="user-profile__detail-card-create mt-15 mb-15 " >
              <v-row justify="center" align="center" class="pa-5">
                <v-col cols="12" md="6">
                  <v-row class="pa-5" justify="center">
                    <v-col class="px-0" cols="10" md="9">
                      <v-card height="258" width="258" class="br-15 d-flex justify-center align-center">
                       <div>
                         <div class="d-flex justify-center">
                           <img src="~/assets/img/product-create.svg" alt="">
                         </div>

                         <div>
                          تصاویر محصول را بارگزاری کنید
                        </div>
                       </div>
                      </v-card>
                    </v-col>
                    <v-col class="px-0" cols="3">
                      <div class="d-none d-md-block">
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                      </div>
                      <div class="d-flex d-md-none justify-center mb-2">
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0  pr-0 pl-6"
                    >
                      <v-text-field
                        solo
                        dense
                        placeholder="نام محصول"
                        class="br-25 create-product"

                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0 pr-0 pl-6"
                    >
                      <v-text-field
                        solo
                        dense
                        placeholder="نام محصول (انگلیسی)"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0 pr-0 pl-6"
                    >
                      <v-select
                        solo
                        dense
                        placeholder="انتخاب دسته بندی"
                        class="br-25"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    rows="16"
                    solo
                    dense
                    placeholder="توضیحات محصول"
                    class="br-25 pa-5"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-row justify="center" align="center">
                    <v-col class="pt-5" cols="12" md="4">
                      <v-text-field
                        solo
                        dense
                        placeholder="شماره تماس (اختیاری)"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col class="pt-5" cols="12" md="4">
                      <v-text-field
                        solo
                        dense
                        placeholder="قیمت"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="4">
                      <div class="d-flex justify-end align-start">
                        <v-btn width="149" height="50" color="primaryYellow" class="br-15">
                          <span class="primary--text t18600">
                            ساخت محصول
                          </span>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorCard from '~/components/UserProfile/ContractorCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
export  default {
  layout:'userProfile',
  components:{
    UserProfileNavigationMenu,
    ContractorCard
  }
}
</script>
