<template>
    <div class="mt-10 mb-10">
        <v-row justify="center" class="mt-5">
            <v-col md="6" cols="11">
                <v-img
                  class="h-home-image"
                :src="require('~/assets/img/HomeService.png')"
                >
                <div class="about-box-img-down ">
                    <div class="text-rigth pt-8 pr-15  d-none d-md-flex">
                        <span class="white--text t40600">
                            نیروی متخصص
                        </span>
                    </div>
                  <div class="text-rigth d-block d-sm-none pr-5 mt-8">
                        <span class="white--text t20600">
                            نیروی متخصص
                        </span>
                    </div>
                    <div class="text-center pt-5 pr-15 d-none d-md-flex">
                        <span class="white--text t30600">
                            ایجاد پروژه برای نیروی متخصص
                        </span>
                    </div>
                  <div class="text-right d-block d-md-none pr-3 mt-3 ">
                        <span class="white--text t18600">
                            ایجاد پروژه برای نیروی متخصص
                        </span>
                    </div>
                </div>
                <div class="about-link-box-img-up pointer" @click="$router.push('/service')">
                    <img src="~/assets/img/arrow-up-right.svg" alt="" class="d-block d-sm-none">
                    <img src="~/assets/img/arrow-up-right-desctot.svg" alt="" class="d-none d-md-flex">
                </div>
                </v-img>
            </v-col>
            <v-col md="6" cols="11">
                <v-img
                :src="require('~/assets/img/homeShop.png')"
                >
                <div class="about-box-img-up ">
                  <div class="text-rigth pt-8 pr-15  d-none d-md-flex">
                        <span class="white--text t40600">
                            فروشگاه تخصصی مسیر
                        </span>
                  </div>
                  <div class="text-rigth d-block d-sm-none pr-5 pt-5">
                        <span class="white--text t20600">
                            فروشگاه تخصصی مسیر
                        </span>
                  </div>
                  <div class="text-center pt-5 pr-15 d-none d-md-flex">
                        <span class="white--text t20600">
                           بیش از ۱۰۰ راننده فعال و ۱۰۰ ها پروژه پایان یافته
                        </span>
                  </div>
                  <div class="text-right d-block d-md-none px-5 pt-2">
                        <span class="white--text t13400">
                            ایجاد پروژه برای نیروی متخصصبیش از ۱۰۰ راننده فعال و ۱۰۰ ها پروژه پایان یافته
                        </span>
                  </div>
                </div>

                <div class="about-link-box-img-down" @click="$router.push('/store')">
                    <img src="~/assets/img/arrow-up-right.svg" alt="" class="d-block d-sm-none">
                    <img src="~/assets/img/arrow-up-right-desctot.svg" alt="" class="d-none d-md-flex">
                </div>
            </v-img>
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
