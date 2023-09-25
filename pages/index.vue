<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="mb-15">
      <HomeBanner/>
    </v-col>
    <v-col cols="12" class="mt-10">
      <AboutMasir/>

    </v-col>
    <v-col cols="10" >
      <WhyMasir/>

    </v-col>
    <v-col cols="10" >
      <div class="text-center my-8">
          <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>

    </v-col>
    <v-col cols="10" >
      <MasirServiceAndShopSection/>

    </v-col>
    <v-col cols="10" class="my-10">
      <div class="text-center my-15">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>

    </v-col>
    <v-col cols="12" >
      <div class="text-center my-15">
        <span class="primary--text t40600">
          مجله مسیر
        </span>
      </div>
      <v-row justify="center">
        <MasirMag/>
        <MasirMag/>
        <MasirMag/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HomeBanner from '~/components/Home/HomeBanner'
import AboutMasir from '~/components/Home/AboutMasir'
import WhyMasir from '~/components/Home/WhyMasir'
import MasirServiceAndShopSection from '~/components/Home/MasirServiceAndShopSection'
import MasirMag from '~/components/Home/MasirMag'
export default {
  components:{
    HomeBanner,
    AboutMasir,
    WhyMasir,
    MasirServiceAndShopSection,
    MasirMag
  }
}
</script>
