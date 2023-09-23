<template>
 <div class="my-15">
   <v-row justify="center" class="mt-15 d-none d-md-flex" >
     <DriverCard/>
     <DriverCard/>
   </v-row>
   <v-row justify="center" class="mt-15 d-flex d-md-none" >
     <DriverCardMobile/>
     <DriverCardMobile/>
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
