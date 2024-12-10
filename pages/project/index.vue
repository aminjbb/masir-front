<template>
  <div class="main-container mt-15 pt-10 mt-md-0 pt-md-0">
    <div class="d-none d-md-block ">
      <div class="d-flex justify-start mt-15">
        <div @click="changeTab(1)" class="d-flex justify-center align-center tab-container ml-5 pointer" :class="tab===1 ?'tab-active' :''">
          <span class="t18400 text--primary">پروژه‌های موجود</span>
        </div>
        <div  @click="changeTab(2)"  class="d-flex justify-center align-center tab-container ml-5 pointer"  :class="tab===2 ?'tab-active' :''">
          <span class="t18400 text--primary">پروژه‌های درخواستی</span>
        </div>
        <div  @click="changeTab(3)"  class="d-flex justify-center align-center tab-container ml-5 pointer"  :class="tab===3 ?'tab-active' :''">
          <span class="t18400 text--primary">لیست پروژه‌های شما</span>
        </div>
      </div>
    </div>

    <div class="d-block d-md-none">
      <div class="d-flex justify-center mt-15">
        <div @click="changeTab(1)" class="d-flex justify-center align-center tab-container-m ml-5 pointer" :class="tab===1 ?'tab-active' :''">
          <span class="t12400 text--primary">پروژه‌های موجود</span>
        </div>
        <div  @click="changeTab(2)"  class="d-flex justify-center align-center tab-container-m ml-5 pointer"  :class="tab===2 ?'tab-active' :''">
          <span class="t12400 text--primary">پروژه‌های درخواستی</span>
        </div>
        <div  @click="changeTab(3)"  class="d-flex justify-center align-center tab-container-m ml-5 pointer"  :class="tab===3 ?'tab-active' :''">
          <span class="t12400 text--primary">لیست پروژه‌های شما</span>
        </div>
      </div>
    </div>
    <div class="services-peymankar  w-100">

      <div class="div-2 w-100 px-15">
        <div class="d-flex justify-end my-5">
          <v-menu class="mx-5" >
            <template v-slot:activator="{ on, attrs }">

              <v-btn v-bind="attrs" v-on="on" color="primaryYellow" width="199" height="55" class="br-10 ml-md-0 ml-5">
                <span class="primary--text t18400" v-if="neighborhoodSelected == null">
                  محدوده فعالیت
                </span>
                <span class="primary--text t18400" v-else>
                  {{neighborhoodSelected?.name}}
                </span>
                <span class="mr-3">
                <v-icon>
                  mdi-chevron-down-circle-outline
                </v-icon>
              </span>
              </v-btn>
            </template>
            <v-list class="px-15">
              <v-list-item v-for="(neighborhoods , index) in neighborhoods">
                <v-list-item-title  >
                  <div class="text-center pointer" @click="selectNeighborhoods(neighborhoods)">
                    <span class="white--text">{{ neighborhoods.name }}</span>
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div  class="d-none d-md-block ">
          <Overlap :project="project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 1"/>
          <Overlap :project="project?.project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 2"/>
          <Overlap :project="project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 3"/>
        </div>
        <div class="d-block d-md-none">
          <ProjectCardMobile :project="project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 1"/>
          <ProjectCardMobile :project="project?.project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 2"/>
          <ProjectCardMobile :project="project" v-for="(project , index) in clientProject" :key="project?.id" v-if="tab == 3"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "~/components/ServicesPeymankar/sections/Navbar.vue";
import Overlap from "~/components/ServicesPeymankar/sections/Overlap.vue";
import ProjectCardMobile from "~/components/Project/ProjectCardMobile.vue";


export default {
  layout: "WithOutContact",
  components: {
    Navbar,
    Overlap,
    ProjectCardMobile

  },

  data(){
    return{
      neighborhoodSelected:null,
      tab:1
    }
  },

  methods:{
    selectNeighborhoods(item){
      this.neighborhoodSelected = item
      this.$store.dispatch('set_clientProject' , `,neighborhood_Id:${item?.id}`)

    },
    changeTab(tab){
      this.tab = tab
      if (tab == 1) this.$store.dispatch('set_clientProject' , '')
      else if (tab == 2) this.$store.dispatch('set_employeeMyApplies' , '')
      else if (tab == 3)  this.$store.dispatch('set_myProjects')



    }
  },

  computed:{
    neighborhoods(){
      return this.$store.getters['get_neighborhoods']
    },
    clientProject(){
      if (this.tab == 1) return  this.$store.getters['get_clientProject']
      else if (this.tab == 2) return  this.$store.getters['get_employeeMyApplies']
      else if (this.tab == 3) return this.$store.getters['get_myProjects']
    }
  },
  mounted() {
    this.$store.dispatch('set_clientProject' , '')
    this.$store.dispatch('set_neighborhoods')
  }
};
</script>

<style>
.services-peymankar {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.services-peymankar .div-2 {
  background-color: #ffffff;
  position: relative;
}

.services-peymankar .text-wrapper-73 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-74 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
}

.services-peymankar .text-wrapper-75 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-76 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-77 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-78 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .phosphor-icons-usercircle-1 {
  height: 39px !important;
  width: 39px !important;
}

.services-peymankar .phosphor-icons-shoppingcart-1 {
  height: 39px !important;
  width: 39px !important;
}

.services-peymankar .asset-2 {
  height: 22px;
  width: 196px;
}

.services-peymankar .feather-icons-wrapper {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 65px;
  width: 65px;
}

.services-peymankar .feather-icons {
  height: 32px !important;
  width: 32px !important;
}

.services-peymankar .feather-icons-chevron-left-wrapper {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 65px;
  width: 65px;
}

.services-peymankar .feather-icons-chevron-left {
  height: 32px !important;
  width: 32px !important;
}
.tab-container{
  border-radius: 15px;
  border: 1px solid  #E0E0E0;
  background:  #F5F5F5;
  width: 270px;
  height: 89px;
}
.tab-container-m{
  border-radius: 15px;
  border: 1px solid  #E0E0E0;
  background:  #F5F5F5;
  width: 120px;
  height: 70px;
}

.tab-active{
  background:  #FFC51E !important;

}
</style>
