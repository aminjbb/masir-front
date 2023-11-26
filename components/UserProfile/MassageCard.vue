<template>
 <div>
   <div class="d-none d-md-block  ma-3" :class="activeClass" @click="$router.push(`/user-profile/${route}/1`)">
     <div class="d-flex justify-space-between pa-5 align-center">
       <div class="d-flex align-center">
         <span><img width="30" height="30" src="@/assets/img/UserCircle.svg" alt=""></span>
         <span class="t14600 primary--text mr-5">میترا حجار</span>
       </div>

       <div class="px-5">
         <span class="t14400 primary--text ">من در سفارشم برای پرداخت به مشکل خوردم.</span>
       </div>
       <div>
        <span class="t14400 secondary2--text">
          ۱۴۰۲/۱۲/۱۵
        </span>
       </div>
     </div>


   </div>

   <div class="d-block d-md-none ma-3" :class="activeClass"  @click="$router.push(`/user-profile/${route}/1`)">
     <div class="pa-5">
       <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <span><img width="30" height="30" src="@/assets/img/UserCircle.svg" alt=""></span>
          <span class="t14600 primary--text mr-5">میترا حجار</span>
        </div>
         <span class="t14400 secondary2--text">
          ۱۴۰۲/۱۲/۱۵
        </span>
       </div>
       <div class="px-2">
         <span class="t14400 primary--text ">من در سفارشم برای پرداخت به مشکل خوردم.</span>
       </div>

       <div>

       </div>
     </div>


   </div>
 </div>
</template>

<script>
  export default {
    props:{
      activeClass:'',
      route:''
    }
  }
</script>
