<template>
  <div class="main-container mt-10">
    <!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
    <div class="d-none d-md-block ">
      <div>
        <span class="t40600 primary--text">
          ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
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
           ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
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
        <v-row justify="center" align="center">
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
              <span class="t18400 primary--text">کد ملی</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="کد ملی"
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب مهارت ها</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب مهارت ها "
                outlined
                append-icon="mdi-chevron-down-circle-outline"
              >
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
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
              >
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
              </v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">تاریخ تولد</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">کد پیمانکاری</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="کد پیمانکاری "
                outlined
              ></v-text-field>
            </div>
          </v-col>

          <v-col md="9" cols="11">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">از تجربیات خود بنویسید.</span>
            </div>
            <div class="mt-10">
              <v-textarea
                placeholder="کد پیمانکاری "
                outlined
                rows="9"
                row-height="30"
              ></v-textarea>
            </div>
          </v-col>
          <v-col md="3" cols="11">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">تصویر صفحه کاربری</span>
            </div>
            <div class="mt-5">

              <v-card v-if="profile.base64 == null" @click="selectProfileImage" color="cultured" outlined height="251  " width="251" class="br-15 mx-1 d-flex align-center justify-center">
                <img src="~/assets/img/PlusCircleBlack2.svg" alt="">
              </v-card>
              <v-img height="251" v-else :src="profile.base64" alt="" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                <div class="ma-1 position__absolute z-index-10" @click="deleteProfilePhoto()"><v-icon color="error">mdi-delete</v-icon></div>
              </v-img>
            </div>
          </v-col>

        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات وسیله
        </span>
      </div>
    </div>
    <DeviceInformation  v-for="(project , index) in projects" :key="`project${index}`"/>
    <v-row justify="space-between" class="px-15 py-10 d-none d-md-flex">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                 افزودن وسیله اضافه
              </span>

      </v-btn>
      <v-btn color="primaryYellow" width="251" height="101" class="br-20">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
      </v-btn>
    </v-row>
    <div class="py-10 d-flex justify-center d-md-none">
      <div>
        <div class="d-flex justify-center ">
          <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
          <span class="t18400 primary--text">
                  افزودن وسیله اضافه
              </span>

        </v-btn></div>
        <div class="d-flex justify-center ">
          <v-btn color="primaryYellow" width="251" height="101" class="br-20 mt-10">
                <span class="t30600 primary--text">
                   ثبت پروژه
                </span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceInformation from '~/components/Service/DeviceInformation.vue'
export default {
  components:{

    DeviceInformation
  },
  data(){return{
    profile:{base64:null , image:''},
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

    deleteProfilePhoto(){
      this.profile.base64 = null
      this.profile.image = null
    },
    selectProfileImage() {
      var input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => {
        this.getBase64(e.target.files[0])
      }
      input.click();
    },

    getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =  () => {

        this.profile.image = file
        this.profile.base64 = reader.result

      };

    },
  },
  layout:'WithOutContact'
}
</script>
