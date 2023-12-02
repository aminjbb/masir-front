<template>
  <div>
    <div class="d-md-block d-none">
      <div class="mt-15">
                    <span class="primary--text t18400">
                     سلام
                    </span>
      </div>
      <div class="mt-4">
                    <span class="primary--text t18400">
                     شماره تلفن همراه خود را وارد کنید.
                    </span>
      </div>
      <div class="mt-8 loginForm">
        <v-form ref="login" v-model="valid" class="pl-15">
          <v-text-field :rules="rule" solo v-model="mobile">
          </v-text-field>
        </v-form>
      </div>
      <div class="d-flex ">
        <v-btn @click="validate()" color="primaryYellow" width="121" height="60" class="br-10 mx-2">
                      <span class="primary--text t18400">
                         ورود کارفرما
                      </span>
        </v-btn>
        <v-btn @click="validate()" color="primary" width="121" height="60" class="br-10 mx-2">
                      <span class="primaryYellow--text t18400">
                          ورود پیمانکار
                      </span>
        </v-btn>
      </div>
      <div class="text-center mt-5 pl-15">
      <span class="dimGray--text t14400">
        ورود شما به معنای پذیرش شرایط ‌وقوانین حریم‌خصوصی مسیر است.
      </span>
      </div>
    </div>
    <div class="d-md-none d-block">
      <div class="mt-15">
                    <span class="primary--text t18400">
                     سلام
                    </span>
      </div>
      <div class="mt-4">
                    <span class="primary--text t18400">
                     شماره تلفن همراه خود را وارد کنید.
                    </span>
      </div>
      <div class="mt-8 loginForm">
        <v-form ref="login" v-model="valid" class="pl-5 " >
          <v-text-field :rules="rule" solo v-model="mobile">
          </v-text-field>
        </v-form>
      </div>
      <div class="d-flex pl-5">
        <v-btn :loading="loading" @click="validate()" color="primaryYellow" width="121" height="60" class="br-10 mx-1">
                      <span class="primary--text t18400">
                         ورود کارفرما
                      </span>
        </v-btn>
        <v-btn :loading="loading" @click="validate()" color="primary" width="121" height="60" class="br-10 mx-1">
                      <span class="primaryYellow--text t18400">
                          ورود پیمانکار
                      </span>
        </v-btn>
      </div>
      <div class="text-center mt-5 pl-5">
      <span class="dimGray--text t14400">
        ورود شما به معنای پذیرش شرایط ‌وقوانین حریم‌خصوصی مسیر است.
      </span>
      </div>
    </div>
  </div>
</template>
<script >
import axios from "axios";

export default {
  props:{
    login:{type:Function }
  },
  data(){
    return{
      mobile:'',
      valid:true,
      rule:[v=>!!v || 'این فیلد الزامی است'],
      loading:false
    }
  },
  methods:{
    convertPersianNumber(str) {
      var persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ];
      var englishnumber = [
        /0/g,
        /1/g,
        /2/g,
        /3/g,
        /4/g,
        /5/g,
        /6/g,
        /7/g,
        /8/g,
        /9/g,
      ];

      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(englishnumber[i], i);
        }
      }
      return str;
    },
    validate(){
      this.$refs.login.validate()
      setTimeout(()=>{
        if (this.valid) this.sendPhone()
      }, 200)
    },
    sendPhone(){
      axios({
        method: "get",
        url: process.env.apiUrl + `client/request-token/${this.convertPersianNumber(this.mobile)}/`,

      })
        .then((response) => {
          this.resendLoading = false;
          this.login()
        })
        .catch((err) => {
          this.resendLoading = false;
        });
    }
  }
}
</script>
