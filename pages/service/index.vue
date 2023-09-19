<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <HomeBanner/>
    </v-col>
    <v-col cols="12" >
      <Services/>
    </v-col>
    <v-col cols="10" >
      <TopDiriver/>
    </v-col>
    <v-col cols="10" >
      <RequestMasir/>

    </v-col>
    <v-col cols="10" >
      <Accordion/>

    </v-col>
  </v-row>


</template>

<script>
import HomeBanner from '~/components/Home/HomeBanner'
import Services from '~/components/Service/Services'
import TopDiriver from '~/components/Service/TopDiriver'
import RequestMasir from '~/components/Service/RequestMasir'
import Accordion from '~/components/Service/Accordion'

export default {
  layout:'empty',
  components:{
    HomeBanner,
    Services,
    TopDiriver,
    RequestMasir,
    Accordion,
  }
}
</script>
