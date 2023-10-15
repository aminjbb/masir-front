<template>
  <div class="main-container mt-10"  id="create-form">
<!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
   <div class="d-none d-md-block">
     <div>
        <span class="t40600 primary--text">
          ایجاد پروژه
        </span>
     </div>
     <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
        </span>
     </div>
     <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات شخصی
        </span>
     </div>
   </div>
    <div class="d-block d-md-none mt-15 pt-15">
     <div class="text-center">
        <span class="t24600 primary--text">
          ایجاد پروژه
        </span>
     </div>
     <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
        </span>
     </div>
     <div class="mt-15 pr-5">
        <span class="t18600 primary--text">
          اطلاعات شخصی
        </span>
     </div>
   </div>

    <v-row justify="center">
      <div class="create-service-card mt-13">
        <v-row justify="center" align="center" >
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">نام و نام خانوادگی</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="نام و نام خانوادگی"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">شماره تماس</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="شماره تماس"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">ایمیل</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="ایمیل"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">نام پروژه</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="نام پروژه"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب شهر پروژه</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="نام پروژه"
                outlined
                  append-icon="mdi-chevron-down-circle-outline"
              >

              </v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب محدوده</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب محدوده"
                outlined
                append-icon="mdi-chevron-down-circle-outline"
              ></v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات پروژه
        </span>
      </div>
    </div>
    <ProjectSection v-for="(project , index) in projects" :key="`project${index}`"/>

    <v-row justify="space-between" class="px-15 py-10 d-none d-md-flex">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                   افزودن سرویس اضافه
              </span>

      </v-btn>
      <v-btn color="primaryYellow" width="251" height="101" class="br-20">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
      </v-btn>
    </v-row>
    <v-row justify="center" class="px-15 py-10 d-flex d-md-none">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                  افزودن وسیله اضافه
              </span>

      </v-btn>
      <v-btn color="primaryYellow" width="251" height="101" class="br-20 mt-10">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import ProjectSection from '~/components/Service/ProjectSection.vue'
export default {
  components:{ProjectSection},
data(){return{
  items:['test' , 'tesst'],
  projects:[
    {name:''}
  ]
}},
  methods:{
    addProject(){
      const form = {name:''}
      this.projects.push(form)
    },


  },
  layout:'WithOutContact'
}
</script>
