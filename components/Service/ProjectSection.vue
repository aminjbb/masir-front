<template>
  <v-row justify="center">
    <div class="create-service-card bg-cultured mt-13 ">
      <v-row justify="center" align="center" >
        <v-col  md="6" cols="12">
          <div class="text-right pr-4">
            <span class="t18400 primary--text">انتخاب نوع سرویس</span>
          </div>
          <div class="mt-5">
            <v-select
              placeholder="انتخاب نوع سرویس"
              outlined
              append-icon="mdi-chevron-down-circle-outline"
              :items="serviceType"
            >
              <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
              </template>
              <template v-slot:item="{ props, item }" class="pa-0">

                <div class="v-menu-content-box pa-5">
                 <span class="white--text">
                    {{item}}
                 </span>

                </div>

              </template>
            </v-select>
          </div>
        </v-col>
        <v-col  md="6" cols="12">
          <div class="text-right pr-4">
            <span class="t18400 primary--text">بودجه مد نظر شما</span>
          </div>
          <div class="mt-5">
            <v-text-field
              placeholder="انتخاب محدوده"
              outlined
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <div class="add-service-type-box">
          <v-row justify="center">
            <v-col md="6" cols="12" class="py-0">
              <v-text-field
                placeholder="شکل زمین از نظر پستی و بلندی را بنویسید"
                outlined
              ></v-text-field>
            </v-col>
            <v-col  md="6" cols="12" class="py-0">
              <v-text-field
                placeholder="حجم خاک برداری را به متر مکعب بنویسید"
                outlined
              ></v-text-field>
            </v-col>
            <v-col  md="6" cols="12" class="py-0">
              <v-text-field
                placeholder="رمپ پروژه در انتها میماند و یا خیر؟"
                outlined
              ></v-text-field>
            </v-col>
            <v-col  md="6" cols="12" class="py-0 px-10">
              <v-row justify="space-between" align="center">
                  <span class="t18400 primary--text">
                    تصاویر پروژه:
                  </span>
                <div class="mt-mobile-5">
                  <v-row class="pl-2 pt-2">
                    <v-card @click="selectFile()" outlined width="87" height="87" class="br-15 mx-1">
                      <v-row justify="center" align="center" class="pt-6">
                        <img src="~/assets/img/PlusCircleBlack.svg" alt="">
                      </v-row>
                    </v-card>
                    <div class="mx-1 " v-for="(image , index) in base64Images">
                      <template v-if="index == 1">
                        <v-img class="br-15" width="87" height="87" :src="image" alt="" :key="index" >
                          <div class="d-flex justify-center align-center" v-if="base64.length > 2" style="height: 100% ; width: 100% ;background: rgba(0, 0, 0, 0.50);backdrop-filter: blur(4px);">
                            <span class="white--text dana-fa">{{base64.length -2}}</span>
                          </div>
                        </v-img>
                      </template>
                      <template v-if="index == 0">
                        <v-img class="br-15" width="87" height="87" :src="image" alt="" :key="index" >
                        </v-img>
                      </template>


                    </div>

                  </v-row>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" class="py-0  px-3 mt-mobile-10">
              <v-textarea
                class="ml-5"
                placeholder="توضیحات تکمیلی جهت پیدا کردن نیروی بهتر را وارد فرمایید"
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </div>

  </v-row>
</template>
<script >
export default {
  data(){return{
    items:['test' , 'tesst'],
    images : [],
    base64 : [],
    serviceType:['خاک ریزی','خاک برداری', 'مقاوم سازی گود' , 'محوطه سازی' , 'زیر سازی' , 'آسفالت' , 'حمل مصالح' , 'درخواست ماشین آلات سنگین' , 'درخواست راننده  (برای صاحبان دستگاه)' , 'حمل نخاله' , 'تخریب']
  }},

  methods:{
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
        console.log(this.base64);
      };

    }
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
