<template>
    <div class="main-container">
        <v-row justify="center">
          <v-img :src="require('~/assets/img/login-img.png')">
            <div class="d-flex justify-start align-center height-vh-100">
              <div>
                <v-card width="391" min-height="407" outlined color="cultured" class="br-15 mt-5 pr-15">
                  <Step1Login v-if="step ===1" :login="login"/>
                  <Step2Login v-if="step ===2" :editNumber="editNumber"/>
                </v-card>
                <div class="d-flex justify-center mt-5">
                  <img src="~/assets/img/headerLogo.png" alt="logo">
                </div>
              </div>
            </div>

          </v-img>
        </v-row>
    </div>
</template>

<script>
import Step1Login from "~/components/Login/Step1Login.vue";
import Step2Login from "~/components/Login/Step2Login.vue";

export default {
  components: {Step2Login, Step1Login},
  layout:'empty',
  data(){
    return{
      step:1
    }
  },
  methods:{
    login(){
        this.step =2
    },
    editNumber(){
      this.step =1
    }
  }
}
</script>
