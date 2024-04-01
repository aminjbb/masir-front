<template>
 <div>
   <div class="d-md-block d-none">
     <div class="mt-15">
                    <span class="primary--text t18400">
                     کد تایید را وارد کنید!
                    </span>
     </div>
     <div class="mt-4">
                    <span class="primary--text t18400">
                     کد تایید برای شماره موبایل ۰۹۳۰۰۱۷۹۶۴۸ ارسال گردید.
                    </span>
     </div>
     <div class="mt-1">
       <v-btn @click="editNumber()" text color="Azure">
        <span class="t14400">
                        ویرایش شماره موبایل
        </span>
       </v-btn>
     </div>
     <div class="mt-3">
       <v-form ref="login" v-model="valid" class="pl-15">

         <v-otp-input
           style="direction: ltr"
           v-model="otp"
           @finish="validate"
           length="5"
         ></v-otp-input>
       </v-form>
     </div>
     <div class="d-flex mt-5">
       <v-btn @click="validate()" color="primaryYellow" width="253" height="60" class="br-10 mx-2">
                      <span class="primary--text t18400">
                         ثبت کد
                      </span>
       </v-btn>

     </div>
     <div class=" pr-13 mb-5 mt-5">
      <span class="dimGray--text t14400">
        ارسال مجدد کد تا ۱۲ ثانیه دیگر
      </span>
     </div>
   </div>
   <div class="d-md-none d-block">
     <div class="mt-15">
                    <span class="primary--text t18400">
                     کد تایید را وارد کنید!
                    </span>
     </div>
     <div class="mt-4">
                    <span class="primary--text t18400">
                     کد تایید برای شماره موبایل ۰۹۳۰۰۱۷۹۶۴۸ ارسال گردید.
                    </span>
     </div>
     <div class="mt-1">
       <v-btn @click="editNumber()" text color="Azure">
        <span class="t14400">
                        ویرایش شماره موبایل
        </span>
       </v-btn>
     </div>
     <div class="mt-3">
       <v-form ref="login" v-model="valid" class="pl-5">

         <v-otp-input
           style="direction: ltr"
           v-model="otp"
           @finish="validate"
           length="5"
         ></v-otp-input>
       </v-form>
     </div>
     <div class="d-flex mt-5 pl-5">
       <v-btn @click="validate()" color="primaryYellow" width="223" height="60" class="br-10 mx-2">
                      <span class="primary--text t18400">
                         ثبت کد
                      </span>
       </v-btn>

     </div>
     <div class=" pr-8 mb-5 mt-5">
      <span class="dimGray--text t14400">
        ارسال مجدد کد تا ۱۲ ثانیه دیگر
      </span>
     </div>
   </div>
 </div>
</template>
<script >
import axios from "axios";

export default {
  props:{
    editNumber:{type:Function }
  },
  data(){
    return{
      otp:'',
      valid:true,
      rule:[v=>!!v || 'این فیلد الزامی است']
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
        if (this.valid) this.setToken()
      }, 200)
    },

    setToken(){
      axios({
        method: "post",
        url: process.env.apiUrl + "user/v1/client/verify-token/",
        data: {
          mobile: this.convertPersianNumber(localStorage.getItem('mobile')),
          code: this.otp
        },
      })
        .then((response) => {
          this.resendLoading = false;
          this.$cookies.set('userToken' , response.data.access)
          this.$router.push('/')
          this.code = "";
        })
        .catch((err) => {
          this.resendLoading = false;
        });
    },

  }
}
</script>
