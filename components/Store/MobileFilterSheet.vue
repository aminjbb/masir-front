<template>
  <div class="text-center">

    <div @click="sheet = !sheet" class="store__plp-filter-box z-index-10 position__relative" >
      <v-row justify="space-between" align="center" class="px-6 pt-6">
                <span class="t14400 primary--text">
                  فیلتر محصولات
                </span>
        <span >
                 <img width="27" height="27" src="~/assets/img/CaretCircleLeft.svg" class="mt-2">
                </span>
      </v-row>
    </div>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center position__relative"
        height="388px"
      >
        <div class="d-flex justify-space-between px-10 pt-8" >
            <span class="t18400 primary--text">
              فیلتر محصولات
            </span>
          <v-icon @click="sheet = !sheet"> mdi-close</v-icon>
        </div>
        <v-divider class="my-5"></v-divider>
        <div class="px-10">
         <v-radio-group v-model="category">
           <v-radio color="primaryYellow" :value="item?.id" class="my-3" v-for="item in categories" :key="item.id">
             <template v-slot:label>
               <div class="t18400 primary--tex">{{ item?.name }}</div>
             </template>
           </v-radio>

         </v-radio-group>

        </div>

        <div class="d-flex justify-center mt-5 submit-btn">
          <v-btn @click="filter()" color="primaryYellow" width="251" height="50" class="br-10">
            <span class="t20600 primary--text ">ثبت</span>
          </v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    sheet: false,
    radios:null,
    category:null
  }),
  props:{
    categories:[]
  },
  methods:{
    filter(){
      this.sheet = false
      this.$emit('categoryFilter' , this.category)
    }
  }
}
</script>
<style>
.submit-btn{
  position: absolute;
  bottom: 8px;

  width: 100%;
  background: #fff;
}
</style>
