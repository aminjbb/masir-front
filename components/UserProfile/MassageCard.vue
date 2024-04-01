<template>
 <div>
   <div class="d-none d-md-block  ma-3" :class="activeClass" @click="$router.push(`/user-profile/${route}/1`)">
     <div class="d-flex justify-space-between pa-5 align-center">
       <div class="d-flex align-center">
         <span><img width="30" height="30" src="@/assets/img/UserCircle.svg" alt=""></span>
         <span class="t14600 primary--text mr-5">{{ message?.sender?.firstName }} {{ message?.sender?.lastName }}</span>
       </div>

       <div class="px-5">
         <span class="t14400 primary--text ">{{ message?.message?.substring(1 ,10) }} ...</span>
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
          <span class="t14600 primary--text mr-5">{{ message?.sender?.firstName }} {{ message?.sender?.lastName }}</span>
        </div>
         <span class="t14400 secondary2--text">
          ۱۴۰۲/۱۲/۱۵
        </span>
       </div>
       <div class="px-2">
         <span class="t14400 primary--text ">{{ message?.message?.substring(1 ,10) }} ...</span>
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
      route:'',
      message:null
    }
  }
</script>
