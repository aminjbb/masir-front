<template>
  <v-row justify="center" align="center">
    <v-col cols="12" >
      <Servicebanner/>
    </v-col>
    <v-col cols="12" class="my-10">
      <Services/>
    </v-col>
    <v-col cols="10" class="d-none d-md-block" >
      <div class="text-center my-15 ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>

    </v-col>
    <v-col cols="10" class="d-block d-md-none py-0" >
      <div class="text-center ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>
    </v-col>
    <v-col cols="11" >
      <div class="text-center py-15">
        <span class="t24600">
          رانندگان برتر ماه
        </span>
      </div>
      <TopDiriver :employees="employees"/>
    </v-col>
    <v-col cols="10" class="d-none d-md-block" >
      <div class="text-center my-15 ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>

    </v-col>
    <v-col cols="10" class="d-block d-md-none py-0" >
      <div class="text-center ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>
    </v-col>
    <v-col cols="10" >
      <RequestMasir/>

    </v-col>

    <v-col cols="10" class="d-none d-md-block" >
      <div class="text-center my-15 ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>

    </v-col>
    <v-col cols="10" class="d-block d-md-none py-0" >
      <div class="text-center ">
        <v-avatar color="primaryYellow" size="15" class=" my-15"></v-avatar>
      </div>
    </v-col>
    <v-col md="10" cols="12" >
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
import {gql} from "nuxt-graphql-request";

export default {
  layout:'WithOutContact',
  data(){
    return{
      employees:[]
    }
  },
  components:{
    Servicebanner,
    Services,
    TopDiriver,
    RequestMasir,
    Accordion,
  },
  methods:{
    async getClientEmployees(page){

      const query = gql`
        query{
            clientEmployees(limit:10,offset:${page}){
            results{
            id
              description
                vehicles{
                  vehicle{
                    name
                  }
                }
                user{
                  firstName
                },
                neighborhood{
                  name
                },
                skills{
                  name
                }
              }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.employees = obj.clientEmployees.results
    }
  },
  mounted() {
    this.getClientEmployees(0)
  },
}
</script>
