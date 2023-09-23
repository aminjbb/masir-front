<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <Servicebanner/>
    </v-col>
    <v-col cols="12" >
      <Services/>
    </v-col>
    <v-col cols="10" >
      <div class="text-center my-15">
        <v-avatar color="primaryYellow" size="20" class=" my-15"></v-avatar>
      </div>
    </v-col>
    <v-col cols="10" >
      <div class="text-center py-15">
        <span class="t24600">
          رانندگان برتر ماه
        </span>
      </div>
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
import Servicebanner from '~/components/Service/Servicebanner'
import Services from '~/components/Service/Services'
import TopDiriver from '~/components/Service/TopDiriver'
import RequestMasir from '~/components/Service/RequestMasir'
import Accordion from '~/components/Service/Accordion'

export default {
  layout:'WithOutContact',
  components:{
    Servicebanner,
    Services,
    TopDiriver,
    RequestMasir,
    Accordion,
  }
}
</script>
