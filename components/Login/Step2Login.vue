<template>
  <div>
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
</template>
<script >
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
    validate(){
      this.$refs.login.validate()
      setTimeout(()=>{
        if (this.valid) this.login()
      }, 200)
    }
  }
}
</script>
