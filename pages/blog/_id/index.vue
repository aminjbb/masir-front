<template>
  <div>
   <div >
     <div class="pdp-blog-header-box">
       <div class="yellow-box d-flex justify-center align-center">
         <img  src="~/assets/img/arrow-up-right-Pr.svg" alt="">
       </div>
       <div class="white-box d-none d-md-flex justify-center align-center">
         <img  src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
       </div>
       <div class="primary-box d-flex justify-center align-center">
         <img   src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
       </div>
     </div>
     <div class="main-container margin-lg">
       <div class="pr-10 d-none d-md-block">
         <h1 class="primaryYellow--text t30600 ">{{post?.mainTitle}}</h1>

       </div>
       <div class="d-block d-md-none text-center">
         <h1 class="primaryYellow--text t18600 ">{{post?.mainTitle}}</h1>

       </div>

       <div class="pr-10 mt-5 d-none d-md-block">
         <span class="white--text t24600">{{post?.mainTitle}}</span>
       </div>
       <div class=" mt-5 d-block d-md-none text-center">
         <span class="white--text t16600">{{post?.mainTitle}}</span>
       </div>
       <div class="d-none d-md-flex justify-start pr-10 my-5">
        <span class="primaryYellow--text t18400">
          نویسنده: {{ post?.createdBy?.user?.lastName }} {{ post?.createdBy?.user?.fristName }}
        </span>
         <span class="primaryYellow--text t18400 mr-8" v-if="post">
          تاریخ: {{convertDateToJalai(post?.CreatedAt , '-' , true)}}
        </span>
       </div>
       <div class="d-block d-md-none my-5">
         <div class="text-center">
            <span class="white--text t16400">
            نویسنده: بهار قاسمی
          </span>
         </div>
         <div class="text-center mt-3">
            <span class="white--text t16400">
            تاریخ: ۱۴۰۲/۱۲/۲۴
          </span>
         </div>
       </div>
       <div class="d-flex justify-center ">

         <img class="blog-banner-img" src="~/assets/img/blogBanner.png" >
       </div>

       <div class="mt-10 px-15 d-none d-md-block">
        <span class="primary--text t30600 ">
          {{post?.mainTitle}}
        </span>

         <div class="mt-10 lh-40 text-justify t18400"  v-html="post?.description">
         </div>
       </div>
       <div class="mt-10  d-block d-md-none">
        <span class="primary--text t18600 ">
          {{post?.mainTitle}}
        </span>


         <div class="mt-10 lh-40 px-5 text-justify t18400"  v-html="post?.description">
         </div>
       </div>
       <div class="pdp-blog-status-box mt-15 px-5 d-md-flex d-none justify-space-between align-center">
         <div class="d-flex justify-start align-center">
           <div class="chip mx-2">
            <span class="primary--text t18400">
              سنگ های گرانبها
            </span>
           </div>
           <div class="chip mx-2">
            <span class="primary--text t18400">
              سنگ های گرانبها
            </span>
           </div>
         </div>
         <div>
           <div class="chip mx-2 pointer" @click="copyLink()">

            <span class="primary--text t18400">
              Copy Link
            </span>
             <span class="mr-2">
              <img src="~/assets/img/copy.svg">
            </span>
           </div>
         </div>
       </div>
       <div class="pdp-blog-status-box mt-15 pa-5 mx-5 d-md-none d-block ">
         <div class="chip my-2">
            <span class="primary--text t18400">
              سنگ های گرانبها
            </span>
         </div>
         <div class="chip my-2">
            <span class="primary--text t18400">
              سنگ های گرانبها
            </span>
         </div>

       </div>
        <div @click="copyLink()" class="d-md-none d-flex justify-center">
          <div class="d-md-none d-block text-center pa-15">
            <div class="chip-mobile  mx-2 px-5">

            <span class="primary--text t18400">
              Copy Link
            </span>
              <span class="mr-2 mt-2">
              <img src="~/assets/img/copy.svg">
            </span>
            </div>
          </div>
        </div>
     </div>
   </div>

  </div>
</template>

<script>
import {convertDateToJalai} from "../../../assets/js/public";

export default {
  layout:'userProfile',
  methods: {
    convertDateToJalai,
    copyLink(){
      console.log(this.$route)
      navigator.clipboard.writeText(`https://masir-web.roshak.dev${this.$route.fullPath}`);
    }
  },

  computed:{
    post(){
      return this.$store.getters['get_clientBlogPost']
    }
  },
  beforeMount() {
    this.$store.dispatch('set_clientBlogPost' , this.$route.params.id)
  }
}
</script>
<style>
@media only screen and (max-width: 500px) {
  .chip-mobile{
    width: 176px;
    height: 51px;
    border-radius: 24.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #DAF1FF;
  }
  .blog-banner-img{
    width: 289px;
    height: 194px;
    margin-top: 48px;
    border-radius: 20px ;
  }
  .margin-lg{
    margin-top: -324px  !important;
  }
  .pdp-blog-header-box{
    height: 271px !important;
    border-radius: 0px 0px 30px 30px !important;
  }
  .pdp-blog-header-box>.yellow-box{
    border-radius: 10px !important;
    z-index: 1;
    position: absolute;
    top: 123px!important;
    left: 51px!important;
    width: 80px !important;
    height: 76px !important;
    background: #FFC51E;
  }
  .pdp-blog-header-box>.yellow-box img{
    width: 56px;
    height: 55px;
  }
  .pdp-blog-header-box>.primary-box {
    border-radius: 10px !important;
    z-index: 1;
    position: absolute;
    top: 197px !important;
    right: 38px !important;
    width: 52px !important;
    height: 49px !important;
    background: #0C385F;
  }
  .pdp-blog-header-box>.primary-box img {
    width: 36px ;
    height: 36px;
  }

}

.pdp-blog-header-box{
  margin-top: -2px;
  position: relative;
  height: 450px;
  border-radius: 0px 0px 100px 100px;
  background: #0C385F;
}
.pdp-blog-header-box>.yellow-box{
  border-radius: 50px;

  z-index: 1;
  position: absolute;
  top: -33px;
  left: 254px;
  width: 161px;
  height: 152px;
  background: #FFC51E;
}
.pdp-blog-header-box>.primary-box {
  border-radius: 20px;
  z-index: 1;
  position: absolute;
  top: 175px;
  right: 260px;
  width: 78px;
  height: 73px;
  background: #0C385F;
}

.pdp-blog-header-box>.white-box{
  border-radius: 20px;

  z-index: 1;
  position: absolute;
  top: -153px;
  left: 145px;
  width: 78px;
  height: 73px;
  background: #fff;
}
.pdp-blog-status-box{
  min-height: 105px;
  background: #DAF1FF;
  border-radius: 20px;
}
.pdp-blog-status-box .chip{
  height: 51px;
  border-radius: 24.5px;
  min-width: 176px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#fff;
}

.margin-lg{
  margin-top: -550px;
}
</style>
