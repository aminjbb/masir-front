<template>
  <div class="d-flex justify-end  align-center ma-5">
    <div class="my-message d-flex justify-center align-center ">
      <span class="white--text t16400 ma-3">
       {{ message }}
      </span>
    </div>
    <span class="mx-4"><img width="30" height="30" src="@/assets/img/UserCircle.svg" alt=""></span>

  </div>
</template>
<script>
export default {
  props:{
    message:null
  },
  data(){
    return{

    }
  }
}
</script>
