<template>
  <v-dialog
    v-model="dialog"
    width="704"
    hide-overlay
    style="background: #fff"
  >
    <template v-slot:activator="{ on, attrs }">

      <v-btn v-bind="attrs" v-on="on" height="62" outlined color="primary" class="br-10">
        <span class="primary--text t18600 ml-3"><v-icon>mdi-plus-circle-outline</v-icon></span>
        <span class="primary--text t18600">افزودن آدرس جدید</span>
      </v-btn>
    </template>
    <div class="add-address">
      <div class="d-flex justify-space-between pa-3">
        <span class="primary--text t18600"> آدرس</span>
        <v-icon @click="dialog =false">mdi-close</v-icon>
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
        <v-col cols="4">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                استان
              </span>
          </div>
          <v-select outlined></v-select>
        </v-col>
        <v-col cols="4">
          <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                شهر
              </span>
          </div>
          <v-select outlined></v-select>
        </v-col>
        <v-col cols="4" class=" text-address">
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
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>
