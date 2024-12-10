<template>
  <div>
    <div class="d-none d-md-block">
    <div class="d-flex justify-center">
      <img src="~/assets/img/about-us-image.png" class="about-us-image" alt="">
    </div>

    <div class="main-container" >
      <div class="d-flex justify-center " style="    margin-top: -334px;">
        <v-img :src="require('~/assets/img/Ellipse 105.png')" alt="">
          <div class="about-us-box-yellow d-flex justify-center align-center">

            <img src="~/assets/img/arrow-up-right-Pr.svg" alt="">
          </div>
          <div class="about-us-box-primary d-flex justify-center align-center">
            <img src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
          </div>
          <div class="about-us-box-white d-flex justify-center align-center">
            <img src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
          </div>
        </v-img>
      </div>
      <div style="margin-top: -1026px;z-index: 1;position: relative;">
       <div class="text-center">
        <span class="primary--text t40600">
         {{ firstBlog?.mainTitle }}
        </span>
       </div>
       <div class="text-center mt-5">
        <span class="primary--text t24600">
         {{ firstBlog?.metaDescription.substring(0 , 20) }}
        </span>
       </div>
       <div class="text-center mt-5">
        <span class="primary--text t18400">
        نویسنده: {{ firstBlog?.createdBy?.user?.lastName }} {{ firstBlog?.createdBy?.user?.fristName }}
        </span>
       </div>
       <div class="text-center mt-5">
        <span class="primary--text t18400" v-if="firstBlog">
       تاریخ:   {{convertDateToJalai(firstBlog?.CreatedAt , '-' , true)}}
         </span>
       </div>
       <div class="text-center my-15">
         <v-btn @click="$router.push(`/blog/${firstBlog?.id}`)" color="primary" width="251" height="101" class="br-25">
          <span class="white--text t30600">
            بازدید از مقاله
          </span>
         </v-btn>
       </div>
       <div class="text-center mt-15 pt-15">
        <span class="primary--text t30600">
          مقاله های اخیرا منتشر شده
        </span>
       </div>
       <v-row justify="center" class="mt-15 position__relative">
         <span class="bg-white d-none d-md-flex justify-center align-center arrow-left-blog-card">
           <img src="~/assets/img/arrow-left-circle.svg" alt="">
         </span>
         <span class="bg-white d-none d-md-flex justify-center align-center arrow-right-blog-card" >
           <img   src="~/assets/img/arrow-right-circle-banner.svg" alt="">
         </span>
         <BlogCard :blog="blog" v-for="(blog , index) in bannerBlogs"/>

       </v-row>

       <div class="text-center mt-15 pt-15">
        <span class="primary--text t30600">
          دسته بندی
        </span>
       </div>

       <div class="d-flex justify-center mt-15 position__relative" >
         <span class="bg-white d-none d-md-block arrow-left-blog">
           <img src="~/assets/img/arrow-left-circle.svg" alt="">
         </span>
         <span class="bg-white d-none d-md-block arrow-right-blog" >
           <img   src="~/assets/img/arrow-right-circle-banner.svg" alt="">
         </span>
         <v-card width="370" height="166 " class="br-20 d-flex justify-center align-center mx-2">
           <span class="mx-1">
              <img width="65" height="65" src="~/assets/img/Truck.svg">
          </span>
           <span class="primary--text t24600 mx-1">
            ماشین‌های سنگین
          </span>

         </v-card>
         <v-card width="370" height="166 " class="br-20 d-flex justify-center align-center mx-2">

          <span class="mx-1">
               <img width="65" height="65" src="~/assets/img/BarricadeBlog.svg"  >
          </span>
           <span class="primary--text t24600 mx-1">
            کارگاه‌های ساختمانی
          </span>
         </v-card>
         <v-card width="370" height="166 " class="br-20 d-flex justify-center align-center mx-2">
              <span class="mx-1">
               <img width="65" height="65" src="~/assets/img/Shipping.svg"  >
          </span>
           <span class="primary--text t24600 mx-1">
           حمل و نقل مصالح
          </span>
         </v-card>
       </div>
       <div class="text-right mt-15 pt-10 pr-10">
        <span class="primary--text t30600">
          انتخاب نویسنده
        </span>
       </div>
       <div class="mt-10 px-7">
         <v-card min-height="240" class="d-flex justify-space-between align-center br-20 px-7" v-for="(blog , index) in blogs">
           <div class="d-flex justify-start align-center">
             <div>
               <img width="237" height="183" src="~/assets/img/addService.png">
             </div>
             <div class="mr-10">
               <div>
                <span class="primaryYellow--text t18600">
                 {{blog?.mainTitle }}
                </span>
               </div>
               <div class="mt-8">
                <span class="primary--text t18600">
                 {{blog?.mainTitle }}
                </span>
               </div>
               <div class="mt-3">
                <span class="t16400">
                  {{ blog?.metaDescription.substring(0 , 20) }}
                </span>
               </div>
             </div>
           </div>

           <div>
             <div>
              <span class="primary--text t18400">
                تاریخ: {{ convertDateToJalai(blog?.CreatedAt , '-' , true) }}
              </span>
             </div>

             <div @click="$router.push(`/blog/${blog?.id}`)" class="link-primary d-flex justify-center align-center mr-8 mt-10">
               <img src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
             </div>
           </div>
         </v-card>
       </div>
     </div>
    </div>
  </div>
<!--  mobile-->
    <div class="d-block d-md-none">
      <div class="blog-box-yellow-mobile d-flex justify-center align-center">
        <img width="56" height="56" src="~/assets/img/arrow-up-right-Pr.svg" alt="">
      </div>
      <div class="d-flex justify-center" style="    margin-top: 92px;">
        <img  src="~/assets/img/about-us-image.png" class="about-us-image" alt="">
      </div>
      <div class="blog-box-primary-mobile d-flex justify-center align-center">
        <img  width="36" height="36" src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
      </div>
      <div class="d-flex justify-center " style="    margin-top: -80px;" >
        <v-img :src="require('~/assets/img/EllipseMobile.png')" alt="">
        </v-img>
      </div>
      <div class="main-container" style="margin-top: -275px;">
        <div class="text-center px-15">
          <span class="primary--text t18600">
         {{ firstBlog?.mainTitle }}
          </span>
        </div>
        <div class="text-center mt-2">
          <span class="primary--text t16600">
         {{ firstBlog?.metaDescription.substring(0 , 20) }}
          </span>
        </div>

        <div class="text-center mt-5">
          <span class="primary--text t16400">
          نویسنده: {{ firstBlog?.createdBy?.user?.lastName }} {{ firstBlog?.createdBy?.user?.fristName }}
          </span>
        </div>
        <div class="text-center mt-5">
        <span class="primary--text t16400"  v-if="firstBlog">
       تاریخ:  {{convertDateToJalai(firstBlog?.CreatedAt , '-' , true)}}
        </span>
        </div>
        <div class="text-center my-15">
          <v-btn @click="$router.push(`/blog/${firstBlog?.id}`)" color="primary" width="166" height="67" class="br-15">
          <span class="white--text t18600">
            بازدید از مقاله
          </span>
          </v-btn>
        </div>
        <div class="text-center mt-15 ">
        <span class="primary--text t18600">
          مقاله های اخیرا منتشر شده
        </span>
        </div>
        <v-row justify="center" class="mt-15">
          <BlogCard :blog="blog" v-for="(blog , index) in bannerBlogs"/>

        </v-row>

        <div class="text-center mt-15 pt-15">
        <span class="primary--text t18600">
          دسته بندی
        </span>
        </div>

        <div class=" mt-15" >
          <v-card  height="166 " class="br-20 d-flex justify-center align-center ma-2" >
           <span class="mx-1">
              <img width="65" height="65" src="~/assets/img/Truck.svg">
           </span>
            <span class="primary--text t24600 mx-1">
              ماشین‌های سنگین
            </span>

          </v-card>
          <v-card height="166 " class="br-20 d-flex justify-center align-center ma-2">

          <span class="mx-1">
               <img width="65" height="65" src="~/assets/img/BarricadeBlog.svg"  >
          </span>
            <span class="primary--text t24600 mx-1">
            کارگاه‌های ساختمانی
          </span>
          </v-card>
          <v-card  height="166 " class="br-20 d-flex justify-center align-center ma-2">
              <span class="mx-1">
               <img width="65" height="65" src="~/assets/img/Shipping.svg"  >
          </span>
            <span class="primary--text t24600 mx-1">
           حمل و نقل مصالح
          </span>
          </v-card>
        </div>
        <div class="text-right mt-15 pt-10 pr-5">
          <span class="primary--text t30600">
            انتخاب نویسنده
          </span>
        </div>
        <div class="mt-10">
          <v-card min-height="240" class="  br-20 pa-7" v-for="(blog , index) in blogs">
            <div class="d-flex justify-center align-center">
              <img src="~/assets/img/addService.png" height="209" style="width: 100%">
            </div>
            <div class="px-5 mt-5">
              <span class="primaryYellow--text t18600">
                 {{blog?.mainTitle }}
              </span>
            </div>

            <div class="px-5 mt-4">
              <span class="primary--text t18600">
                 {{blog?.mainTitle }}
              </span>
            </div>
            <div class="px-5 mt-4">
              <span class="t16400">
                  {{ blog?.metaDescription.substring(0 , 20) }}
              </span>
            </div>

            <div class="d-flex align-end justify-center">
              <div>
                <span class="primary--text t18400">
                تاریخ: {{ convertDateToJalai(blog?.CreatedAt , '-' , true) }}
                </span>
              </div>

              <div @click="$router.push(`/blog/${blog?.id}`)"  class="link-primary d-flex justify-center align-center mr-8 mt-10">
                <img src="~/assets/img/arrow-up-right-Yellow.svg" alt="">
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>


</template>
<script>

import BlogCard from "~/components/Public/BlogCard.vue";
import {convertDateToJalai} from "../../assets/js/public";

export default {
  methods: {convertDateToJalai},
  components: {BlogCard},
  layout:'static',
  computed:{
    firstBlog(){
      try {
        return this.blogs[0]
      }
      catch (e) {
        return null
      }
    },
    blogs(){
      return this.$store.getters['get_clientBlogPosts']
    },

    bannerBlogs(){
      try {
        if (this.blogs.length > 3) return this.blogs.slice(0 ,  3)
        else return  this.blogs
      }
      catch (e) {
        return  e
      }
    }
  },
  beforeMount() {
    this.$store.dispatch('set_clientBlogPosts')
  }
}
</script>

<style>
.arrow-left-blog{
  position: absolute;
  left: -2px;
  z-index: 1;
  top: 34%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
}
.arrow-left-blog-card{
  position: absolute;
  left: 14px;
  z-index: 1;
  top: 40%;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: #fff;
}
.arrow-right-blog{
  position: absolute;
  right: -2px;
  z-index: 1;
  top: 34%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
}
.arrow-right-blog-card{
  position: absolute;
  right: 14px;
  z-index: 1;
  top: 40%;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: #fff;
}
.link-primary{

  width: 78px;
  height: 73px;
  border-radius: 20px;
  background: #0C385F;
}
.blog-box-yellow-mobile{
  position: absolute;
  top: 150px;
  z-index: 1;
  left: 42px;
  width: 80px;
  height: 76px;
  border-radius: 10px;
  background: #FFC51E;
}
.blog-box-primary-mobile{
  position: absolute;
  top: 110px;
  z-index: 1;
  right: 42px;
  width: 52px;
  height: 49px;
  border-radius: 10px;
  background: #0C385F;
}
</style>
