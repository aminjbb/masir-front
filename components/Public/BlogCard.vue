<template>
  <div class="mt-15 mb-15" @click="$router.push(`/blog/${blog?.id}`)">
    <v-card height="431" width="360" class="br-50 mx-3 d-none d-md-block">
      <img width="360" :src=" baseUrl + blog?.image" alt="" class="br-unset" style="border-radius: 50px 50px 0px 0px !important;">
      <div class="text-center mt-8">
            <span class="t22600">
               {{blog?.mainTitle }}
            </span>
      </div>
      <div class="text-center mt-5">
            <span class="t14600">
                {{ blog?.metaDescription.substring(0 , 20) }}
            </span>
      </div>

    </v-card>
    <v-card height="468" width="313" class="br-50 mx-3 d-block d-sm-none">
      <img width="313" src="~/assets/img/MagImage.png" alt="" class="br-unset">
      <div class="text-center mt-8">
            <span class="t20600">
                  {{blog?.mainTitle }}
            </span>
      </div>
      <div class="text-center mt-5 px-12">
            <span class="t18400">
                 {{ blog?.metaDescription.substring(0 , 20) }}
            </span>
      </div>

    </v-card>

  </div>
</template>
<script>
export default {
  props:{
    blog: null
  },
  computed:{
    baseUrl(){
      return process.env.baseUrl
    }
  }
}
</script>
<style lang="">

</style>
