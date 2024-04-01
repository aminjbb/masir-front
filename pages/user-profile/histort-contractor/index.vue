<template>
  <div>
    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-user-profile mb-15" id="create-form">
              <ContractorCard :project="project" v-for="(project , index) in myProject " :key="`myProject${project.id}`"/>
            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorCard from '~/components/UserProfile/ContractorCard.vue'
import UserProfileNavigationMenu from '~/components/Public/UserProfileNavigationMenu.vue'
export  default {
  layout:'userProfile',
  components:{
    ContractorCard,UserProfileNavigationMenu
  },
  data(){
    return{
      page:'',

    }
  },

  computed:{
    myProject(){
      return this.$store.getters['get_myProjects']
    }
  },
  beforeMount() {
    this.$store.dispatch('set_myProjects')
  }
}
</script>
