<template>
  <div class="my-15">
    <v-row justify="center" class="mt-15 d-none d-md-flex">
      <v-col  @click="$router.push('/service/add')"  cols="5" class="d-flex justify-center">
       <v-row justify="start">
         <div class="service__service-box position__relative">
          <span class="t40600 primary--text ">
            ایجاد پروژه
          </span>
           <div class="service__action-box-left" @click="$router.push('/service/add')">
             <img src="~/assets/img/PlusCircle.svg" alt="">
           </div>
         </div>
       </v-row>

      </v-col>
      <v-col @click="$router.push('/register-contractors')" cols="5" class="d-flex justify-center">
       <v-row justify="end">
         <div class="service__service-box position__relative">
          <span class="t40600 primary--text">

           ثبت‌نام پیمانکاران
          </span>
           <div class="service__action-box-right" @click="$router.push('/register-contractors')">
             <img src="~/assets/img/arrow-right-circle.svg" alt="">
           </div>
         </div>
       </v-row>
      </v-col>
    </v-row>

    <v-row justify="start" class="mt-15 d-block d-md-none">
      <v-col @click="$router.push('/service/add')" cols="12" class="d-flex justify-start pr-5">
        <div class="service__service-box-mobile position__relative pl-15">
          <span class="t24600 primary--text">
            ایجاد پروژه
          </span>
          <div class="service__action-box-left-mobile" @click="$router.push('/service/add')">
            <img src="~/assets/img/PlusCircle.svg" alt="">
          </div>
        </div>

      </v-col>
      <v-col @click="$router.push('/register-contractors')" cols="12" class="d-flex justify-end pl-5">
        <div class="service__service-box-mobile position__relative">
          <span class="t24600 primary--text">

           ثبت‌نام پیمانکاران
          </span>
          <div class="service__action-box-right-mobile" @click="$router.push('/register-contractors')">
            <img src="~/assets/img/arrow-right-circle.svg" alt="">
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
