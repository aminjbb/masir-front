<template>
  <v-dialog
    v-model="dialog"
    width="704"
    hide-overlay
    style="background: #fff"
  >

    <div class="add-address">
      <div class="d-flex justify-space-between pa-3">
        <span class="primary--text t18600"> آدرس</span>
        <v-icon @click="close()">mdi-close</v-icon>
      </div>
      <v-divider class="my-3"></v-divider>
      <v-row justify="center" class="px-5">
        <v-col cols="12">
            <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                آدرس پستی
              </span>
            </div>
          <v-textarea rows="2" outlined></v-textarea>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                استان
              </span>
          </div>
          <v-select outlined>
            <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                شهر
              </span>
          </div>
          <v-select outlined>
            <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" md="4" class=" text-address">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                پلاک/واحد
              </span>
          </div>
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="12" class=" text-address">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
               کد پستی
              </span>
          </div>
          <v-text-field outlined></v-text-field>
        </v-col>
      </v-row>
      <div  class="d-flex justify-end px-8 mb-8">
        <v-btn v-bind="attrs" v-on="on" height="62" outlined color="primary" class="br-10">
          <span class="primary--text t18600">افزودن آدرس جدید</span>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {

      notifications: false,
      sound: true,
      widgets: false,
    }
  },
  computed:{
    dialog(){
      return this.$store.getters['get_addressModal']
    }
  },
  methods:{
    close(){
      this.$store.commit('set_addressModal' , false)
    }
  }
}
</script>
