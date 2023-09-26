<template>
 <div class="my-15">
   <v-row justify="center" class="mt-15 mb-15  d-none d-md-flex" >
     <DriverCard/>
     <DriverCard/>
   </v-row>
   <v-row justify="center" class="mt-15 mb-15 d-flex d-md-none" >
     <DriverCardMobile/>
     <DriverCardMobile/>
   </v-row>
   <v-row justify="center" class="mt-15 pt-10 d-none d-md-flex" >
     <v-btn color="primary" width="251" height="101" class="br-25">
        <span class="t30600 white--text">
          بیشتر
        </span>
     </v-btn>
   </v-row>
   <v-row justify="center" class="mt-15 d-flex d-md-none" >
     <v-btn color="primary" width="164" height="66" class="br-15">
        <span class="t20600 white--text">
          بیشتر
        </span>
     </v-btn>
   </v-row>
 </div>
</template>
<script>
import DriverCard from '~/components/Service/DriverCard.vue'
import DriverCardMobile from '~/components/Service/DriverCardMobile.vue'
export default {
components:{
  DriverCard,
  DriverCardMobile
}
}
</script>
