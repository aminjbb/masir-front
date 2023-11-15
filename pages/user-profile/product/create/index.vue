<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="9">
            <div class="user-profile__detail-card-create mt-15 mb-15" id="create-form">
              <v-row justify="center" align="center" class="pa-5">
                <v-col cols="6">
                 <v-row class="pa-5">
                    <v-col class="px-0" cols="9">
                   <v-card height="258" width="258" class="br-15">

                   </v-card>
                 </v-col>
                    <v-col class="px-0" cols="3">
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
                 </v-col>
                   <v-col
                     cols="12"
                     class="py-0  pr-0 pl-6"
                   >
                     <v-text-field

                       solo
                       dense
                       placeholder="نام محصول"
                       class="br-25"
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
                     >
                       <template #no-data>
                          <span class="white--text">
                            گزینه ای وجود ندارد
                          </span>
                       </template>
                     </v-select>
                   </v-col>
                 </v-row>
                </v-col>
                <v-col cols="6">
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
                     <v-col class="pt-5" cols="4">
                       <v-text-field
                         solo
                         dense
                         placeholder="شماره تماس (اختیاری)"
                         class="br-25"
                       ></v-text-field>
                     </v-col>
                    <v-col class="pt-5" cols="4">
                       <v-text-field
                         solo
                         dense
                         placeholder="قیمت"
                         class="br-25"
                       ></v-text-field>
                     </v-col>
                    <v-col cols="4" >
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
