<template>
  <div>
    <div  class="contractor-card ma-7  justify-space-between position__relative d-md-flex d-none pl-10">
      <div class="d-flex justify-center align-center pr-5">
        <img width="148" height="148" :src="baseUrl + project?.images[0]?.image" alt="">
      </div>
      <div>
        <div class="d-flex align-start justify-start mt-10 mr-5">
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
          <div class="contractor-chip d-flex justify-start align-center px-5 mr-3" v-for="(service , index) in project?.projectServices "  :key="`service${service.id}`">
            <span class="primary--text t18400">{{ service?.service?.name }}</span>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-start align-start mr-15 pr-3 mt-5">
          <span class="primary--text t18400">۱ بهمن ماه ۱۴۰۲</span>
        </div>

      </div>
      <div @click="$router.push(`/user-profile/contractor-list/${project?.id}`)" class="pointer" style="position: absolute; bottom: 30px ;left: 40px">
        <img src="~/assets/img/arrow-down-left.svg" alt="">
      </div>
    </div>



    <div  class="contractor-card ma-7 py-5 justify-start position__relative d-md-none d-block">
      <div class="text-center mt-3 mb-5">
        <span class="t18400 primary--text">
          ۱ بهمن ماه ۱۴۰۲
        </span>
      </div>
      <div class="d-flex justify-center align-center w-100  mt-3">
        <img width="148" height="148" src="~/assets/img/addService.png" alt="">
      </div>
      <div class="text-center mt-3">
        <span class="t24600 primary--text">
                    {{ project?.name }}
        </span>
      </div>
      <div class="text-center mt-3">
        <span class="t18400 primary--text">
          کارفرما:  {{ project?.employer?.user?.firstName }}
        </span>
      </div>
      <v-row justify="center" class="mt-3 ">
        <v-col cols="8" class="px-0">
          <div class="contractor-chip d-flex justify-center align-center ">
            <span class="primary--text t18400">{{ project?.city?.name }}، {{ project?.neighborhood?.name }}</span>
          </div>
        </v-col>
        <v-col cols="5" class="px-0" v-for="(service , index) in project?.projectServices " :key="`mService${service.id}`">
          <div class="contractor-chip text-center pt-3  ml-1">
            <span class="primary--text t18400">{{ service?.service?.name }} </span>
          </div>
        </v-col>


      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    project:null
  },
  computed:{
    baseUrl(){
      return process.env.baseUrl
    },
  }
}
</script>
