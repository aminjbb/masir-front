<template>
  <v-row justify="center">
    <div class="create-service-card mt-13">
      <v-row justify="center" align="center">
        <v-col md="6" cols="12" class="px-md-12">
          <div class="text-right pr-4">
            <span class="t18400 primary--text">انتخاب نوع وسیله</span>
          </div>
          <div class="mt-5">
            <v-select
              :items="vehicleItems"
              placeholder="انتخاب نوع وسیله"
              outlined
              v-model="form.vehicle"
              append-icon="mdi-chevron-down-circle-outline"

            >
              <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
              </template>
              <!--                <template v-slot:item="{ props, item }" class="pa-0">-->

              <!--                  <div class="v-menu-content-box pa-5">-->
              <!--                 <span class="white&#45;&#45;text">-->
              <!--                    {{item}}-->
              <!--                 </span>-->

              <!--                  </div>-->

              <!--                </template>-->
            </v-select>
          </div>
        </v-col>
        <v-col md="6" cols="12">
          <v-row align="center" class="pr-5 ">
            <v-col md="8" cols="8" class="py-0">
               <span class="primary--text t18400">
آیا وسیله شما دارای معاینه فنی سلامت می‌باشد؟
             </span>
            </v-col>

            <v-col md="1" cols="3" class="py-0">
              <v-switch
                inset
                v-model="form.does_have_technical_examination"
                color="primary"
              ></v-switch>
            </v-col>
          </v-row>
        </v-col>

        <v-col md="6" cols="12" class="py-0 px-10">

          <div class="">
            <v-row justify="end" class="pl-5 pt-2  d-none d-md-flex" >
              <v-card @click="selectFile()" outlined width="141" height="141" class="br-15 mx-2 d-flex align-center justify-center">
                <img src="~/assets/img/PlusCircleBlack.svg" alt="">
              </v-card>
              <div class="mx-1 " v-for="(image , index) in base64Images">
                <template v-if="index == 1">
                  <v-img class="br-15" width="141" height="141" :src="image" alt="" :key="index" >
                    <div class="d-flex justify-center align-center" v-if="base64.length > 2" style="height: 100% ; width: 100% ;background: rgba(0, 0, 0, 0.50);backdrop-filter: blur(4px);">
                      <span class="white--text dana-fa">{{base64.length -2}}</span>
                    </div>
                  </v-img>
                </template>
                <template v-if="index == 0">
                  <v-img class="br-15" width="141" height="141" :src="image" alt="" :key="index" >
                  </v-img>
                </template>


              </div>
<!--              <div class="mx-2">-->
<!--                <img  width="141" height="141" src="~/assets/img/addService.png" alt="">-->
<!--              </div>-->
<!--              <div class="mx-2">-->
<!--                <img  width="141" height="141" src="~/assets/img/addService.png" alt="">-->
<!--              </div>-->
            </v-row>
            <div class="text-right  mt-5 mb-8 d-flex d-md-none">
              <span class="t18400 primary--text">تصاویر وسیله</span>
            </div>
            <div  class="pl-2 pt-2 justify-start d-flex d-md-none" >
              <v-card @click="selectFile()" outlined width="87" height="87" class="br-15 mx-1 d-flex align-center justify-center">
                <img src="~/assets/img/PlusCircleBlack.svg" alt="">
              </v-card>
              <div class="mx-1 " v-for="(image , index) in base64Images">
                <template v-if="index == 1">
                  <v-img class="br-15" width="87" height="87" :src="image" alt="" :key="index" >
                    <div class="ma-1 position__absolute z-index-10" @click="deletePhoto(index)"><v-icon color="error">mdi-delete</v-icon></div>
                    <div class="d-flex justify-center align-center" v-if="base64.length > 2" style="height: 100% ; width: 100% ;background: rgba(0, 0, 0, 0.50);backdrop-filter: blur(4px);">
                      <span class="white--text dana-fa">{{base64.length -2}}</span>
                    </div>
                  </v-img>
                </template>
                <template v-if="index == 0">
                  <v-img class="br-15" width="87" height="87" :src="image" alt="" :key="index" >
                    <div class="ma-1"  @click="deletePhoto(index)"><v-icon color="error">mdi-delete</v-icon></div>
                  </v-img>
                </template>


              </div>
<!--              <div class="mx-1">-->
<!--                <img  width="87" height="87" src="~/assets/img/addService.png" alt="">-->
<!--              </div>-->
<!--              <div class="mx-1">-->
<!--                <img  width="87" height="87" src="~/assets/img/addService.png" alt="">-->
<!--              </div>-->
            </div>
          </div>
          <div class="text-right pr-4 mt-5 d-none d-md-flex">
            <span class="t18400 primary--text">تصاویر وسیله</span>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="py-0 px-10">

          <div class=" mt-mobile-5">
            <v-row justify="center" class="pl-2 pt-2">

              <v-col cols="6" md="5" class="px-0">
                <v-card v-if="certificateBase64 == null" @click="selectFileCertificate()" outlined width="141" height="141" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>
                <v-img width="141" height="141" v-else :src="certificateBase64" alt="" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <div class="ma-1 position__absolute z-index-10" @click="deleteCertificatePhoto()"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>

                <v-card  v-if="certificateBase64 == null" @click="selectFileCertificate" outlined width="133" height="133" class="br-15  align-center justify-center d-flex d-md-none">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>

                <v-img   width="133" height="133" v-else :src="certificateBase64" alt=""  class="br-15  align-center justify-center d-flex d-md-none">
                  <div class="ma-1 position__absolute z-index-10" @click="deleteCertificatePhoto()" style="top:0 ; right: 0"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>
                <div class="text-right pr-4 mt-5">
                  <span class="t18400 primary--text d-none d-md-block">تصاویر گواهینامه</span>
                  <span class="t14400 primary--text d-block d-md-none">تصاویر گواهینامه</span>
                </div>
              </v-col>
              <v-col cols="6" md="5" class="px-0">
                <v-card  v-if="technicalDiagnosisBase64 == null" @click="selectFileTechnicalDiagnosis()" outlined width="141" height="141" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>
                <v-img  width="141" height="141" v-else :src="technicalDiagnosisBase64" alt="" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <div class="ma-1 position__absolute z-index-10"  @click="deleteTechnicalDiagnosisPhoto()"  style="top:0 ; right: 0"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>
                <v-card  v-if="technicalDiagnosisBase64 == null" @click="selectFileTechnicalDiagnosis()" outlined width="133" height="133" class="br-15  align-center justify-center d-flex d-md-none">
                  <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                </v-card>
                <v-img  width="133" height="133" v-else :src="technicalDiagnosisBase64" alt=""  class="br-15  align-center justify-center d-flex d-md-none">
                  <div class="ma-1 position__absolute z-index-10" @click="deleteTechnicalDiagnosisPhoto()" style="top:0 ; right: 0"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>
                <div class="text-right  mt-5">
                  <span class="t18400 primary--text d-none d-md-block">تصاویر برگه معاینه فنی</span>
                  <span class="t14400  primary--text d-block d-md-none">تصاویر برگه معاینه فنی</span>
                </div>
              </v-col>
            </v-row>
          </div>

        </v-col>

      </v-row>

    </div>


  </v-row>
</template>
<script>
export default {
  props:{
    vehicleItems:[]
  },
  data(){
    return{
      items:['test' , 'tesst'],
      images : [],
      base64 : [],
      form:{
        vehicle:'',
        does_have_technical_examination:false
      },
      certificate:null,
      certificateBase64:null,
      technicalDiagnosis:null,
      technicalDiagnosisBase64:null,
      serviceType:['خاک ریزی','خاک برداری', 'مقاوم سازی گود' , 'محوطه سازی' , 'زیر سازی' , 'آسفالت' , 'حمل مصالح' , 'درخواست ماشین آلات سنگین' , 'درخواست راننده  (برای صاحبان دستگاه)' , 'حمل نخاله' , 'تخریب']
  }},

  methods:{
    deleteTechnicalDiagnosisPhoto(){
      this.technicalDiagnosis =null
        this. technicalDiagnosisBase64 =null
    },
    deleteCertificatePhoto(){
      this.certificate =null
        this. certificateBase64 =null
    },
    deletePhoto(index){
      this.images.splice(index , 1)
      this.base64.splice(index , 1)
    },
    selectFile() {
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
        this.images.push(file)
        this.base64.push(reader.result)
      };

    },
    selectFileCertificate() {
      var input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => {
        this.getBase64Certificate(e.target.files[0])
      }
      input.click();
    },

    getBase64Certificate(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =  () => {

        this.certificate = file
        this.certificateBase64 = reader.result

      };

    },
    selectFileTechnicalDiagnosis() {
      var input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => {
        this.getBase64TechnicalDiagnosis(e.target.files[0])
      }
      input.click();
    },

    getBase64TechnicalDiagnosis(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =  () => {
        this.technicalDiagnosis =file
        this.technicalDiagnosisBase64 = reader.result
      };

    },
  },
  computed:{
    base64Images(){
      try {
        return this.base64.slice(0, 2)
      }
      catch (e) {
        return  []
      }
    }
  }
}
</script>
