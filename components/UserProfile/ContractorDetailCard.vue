<template>
  <div>
   <div class="d-none d-md-block">
     <div class="d-flex justify-space-between mx-5">
       <div class="contractor-chip d-flex justify-start align-center px-5 ">
         <span class="primary--text t18400">{{ service?.service?.name }}</span>
       </div>
       <div class="contractor-chip d-flex justify-start align-center px-5 ">
         <span class="primary--text t18400 dana-fa "> {{ splitChar(service?.budget )}} تومان</span>
       </div>
     </div>
     <div class="contractor-detail-card my-5 mx-3 pa-5">
       <v-row  justify="start" class="pa-5">
         <v-col cols="6" v-for="(req , index) in service?.service?.requirements">
           <v-card outlined height="87" class="d-flex justify-center align-center br-15" v-if="req.valueType === 'TEXT'">
                        <span class="primary--text t18400">
                          {{ req.requirement }}
                        </span>
           </v-card>
         </v-col>
         <v-col cols="6">
           <div class="d-flex justify-end">
             <div class="mr-3">
               <img src="~/assets/img/addService.png" width="87" height="87" alt="">
             </div>
             <div class="mr-3">
               <img src="~/assets/img/addService.png" width="87" height="87" alt="">
             </div>
           </div>
         </v-col>
       </v-row>
     </div>
   </div>

    <div class="d-block d-md-none">

      <div class="mb-5 mx-3 py-5 ">
        <v-row  justify="center" class="pb-5 pt-1 px">
          <v-col cols="7" md="6">
            <div class="contractor-chip d-flex justify-center align-center px-5 mb-3 ">
              <span class="primary--text t18400">{{ service?.service?.name }}</span>
            </div>
          </v-col>
          <v-col cols="10" md="6">
            <div class="contractor-chip d-flex justify-center align-center  mb-3">
              <span class="primary--text t18400 dana-fa "> {{ splitChar(service?.budget )}} تومان</span>
            </div>
          </v-col>
          <v-col cols="12" md="6" v-for="(req , index) in service?.service?.requirements">
            <v-card  outlined height="87" class="d-flex justify-start align-center br-15 pr-3">
                        <span class="primary--text t16400">
                          {{ req.requirement }}
                        </span>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex justify-end pl-1">
              <div class="mr-3">
                <img src="~/assets/img/addService.png" width="87" height="87" alt="">
              </div>
              <div class="mr-3">
                <img src="~/assets/img/addService.png" width="87" height="87" alt="">
              </div> <div class="mr-3">
                <img src="~/assets/img/addService.png" width="87" height="87" alt="">
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>

import {splitChar} from "../../assets/js/public";

export default {
  methods: {splitChar},
  props :{
    service:null
  }
}
</script>
