<template>
  <div class="main-container">
    <div class="d-none d-md-block ">
      <div>
        <span class="t40600 primary--text">
          {{ project?.name }}
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <div class="d-block d-md-none mt-15 pt-15">
      <div class="text-right">
        <span class="t24600 primary--text">
          {{ project?.name }}
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t18600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <div class="user-profile__detail-card mt-md-15  mb-15" id="create-form">
      <v-row justify="space-between" class="mb-10 px-md-15 px-2 pt-10">
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">نام کارفرما</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
                {{project?.employer?.user?.firstName}}  {{project?.employer?.user?.lastName}}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">نام پروژه</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
              {{ project?.name }}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">شهر پروژه</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
                {{ project?.city?.name }}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">محدوده</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
                {{ project?.neighborhood?.name }}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">زمان شروع پروژه</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
               {{project?.predictedStartDate }}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">پیش بینی پایان پروژه</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400">
                {{ project?.predictedCompletionDate }}
              </span>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات پروژه
        </span>
      </div>
    </div>
    <div class="user-profile__detail-card mt-15 mb-15" id="create-form">
      <v-row justify="space-between" class="mb-10 px-md-15 px-2 pt-10">
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">نوع سرویس</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
              <span class="primary--text t18400" v-if="project?.projectServices?.length">
               {{project?.projectServices[0]?.service?.name }}
              </span>
            </v-card>
          </div>
        </v-col>
        <v-col md="6" cols="12" >
          <div class="text-right pr-4">
            <span class="t18400 primary--text">بودجه مد نظر کارفرما</span>
          </div>
          <div class="mt-5">
            <v-card outlined height="87" color="cultured" class="br-15 d-flex align-center px-8">
               <span class="primary--text t18400 dana-fa" v-if="project?.projectServices?.length">
                 تومان   {{splitChar(project?.projectServices[0]?.budget)}}
              </span>

            </v-card>
          </div>
        </v-col>
      </v-row>
      <div>
        <div class="d-none d-md-block">
          <div class="contractor-detail-card my-5 mx-3 pa-5">
            <v-row  justify="start" class="pa-5">
              <v-col cols="6" v-for="projectServiceRequirements in project?.projectServiceRequirements">
                <v-card outlined height="87" class="d-flex justify-center align-center br-15">
                        <span class="primary--text t18400">
                          {{ projectServiceRequirements?.serviceRequirement?.requirement}}
                        </span>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>

        <div class="d-block d-md-none">

          <div class="mb-5 mx-3 py-5 ">
            <v-row  justify="center" class="pb-5 pt-1 px">
              <v-col cols="12" md="6" v-for="projectServiceRequirements in project?.projectServiceRequirements">
                <v-card  outlined height="87" class="d-flex justify-start align-center br-15 pr-3">
                        <span class="primary--text t16400">
                           {{ projectServiceRequirements?.serviceRequirement?.requirement}}
                        </span>
                </v-card>
              </v-col>

            </v-row>
          </div>
        </div>
      </div>

    </div>

    <div class="d-flex justify-center mt-15">
      <v-btn :loading="loading" @click="applyProject()" color="primaryYellow" class="br-15 d-none d-md-block" width="304" height="101">
        <span class="primary--text t24600"> درخواست برای پروژه</span>
      </v-btn>
      <v-btn :loading="loading" @click="applyProject()" color="primaryYellow" class="br-15  d-block d-md-none" width="251" height="101">
        <span class="primary--text t24600"> درخواست برای پروژه</span>
      </v-btn>
    </div>
  </div>
</template>
<script >
import project from "../index.vue";
import {splitChar} from "../../../assets/js/public";
import axios from "axios";

export default {
  methods: {
    splitChar,

    applyProject() {
      this.loading = true
      axios({
        method: 'post',
        url: process.env.apiUrl + 'project/v1/client/application/apply/',
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        },
        data: {
          project:  this.$route.params.id,


        }
      })
        .then(response => {
          this.loading = false;
          this.$router.push('/project')

        })
        .catch(err => {
          this.loading = false
        })
    },

  },
  data(){
    return{
      loading:false
    }
  },
  layout:'WithOutContact',
  beforeMount() {
    this.$store.dispatch('set_myProject' , this.$route.params.id)
  },
  computed:{
    project(){
        return this.$store.getters['get_myProject']
    }
  }
}
</script>
