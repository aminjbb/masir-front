<template>
 <div class="my-15">
   <v-row justify="center" class="mt-15 mb-15  d-none d-md-flex" >
     <DriverCard rate="5" :employee="employee" v-for="(employee , index) in employees" :key="`employee${index}`"/>

   </v-row>
   <v-row justify="center" class="mt-15 mb-5 d-flex d-md-none" >
     <DriverCardMobile  rate="3.5"  :employee="employee" v-for="(employee , index) in employees" :key="`Memployee${index}`"/>/>
   </v-row>
   <v-row justify="center" class="mt-15 pt-10 d-none d-md-flex" >
     <v-btn  @click="$router.push('/service/list')"  color="primary" width="251" height="101" class="br-25">
        <span class="t30600 white--text">
          بیشتر
        </span>
     </v-btn>
   </v-row>
   <v-row justify="center" class=" d-flex d-md-none" >
     <v-btn @click="$router.push('/service/list')" color="primary" width="164" height="66" class="br-15">
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
  props:{
    employees:[]
  },
components:{
  DriverCard,
  DriverCardMobile
}
}
</script>
