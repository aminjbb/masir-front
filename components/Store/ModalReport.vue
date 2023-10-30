<template>
  <v-dialog
    v-model="dialog"
    width="628"
    hide-overlay
    style="background: #fff"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs"
             v-on="on" color="error" width="125" height="43" class="br-10">
        <span class="t14400 white--text">گزارش مشکل</span>
      </v-btn>
    </template>
    <div>
     <div class="d-flex justify-space-between pa-3">
       <span class="primary--text t18600">گزارش مشکل</span>
       <v-icon @click="dialog =false">mdi-close</v-icon>
     </div>
    <v-divider class="my-3"></v-divider>
      <div class="d-flex justify-center">
        <v-chip outlined class="py-3 mx-3">
          <span class="primary--text t14400 pa-3" >شماره تماس اشتباه</span>
        </v-chip>
        <v-chip outlined class="py-3 mx-3">
          <span class="primary--text t14400" >ناموجود</span>
        </v-chip>
        <v-chip outlined class="py-3 mx-3">
          <span class="primary--text t14400" >اطلاعات غلط</span>
        </v-chip>
        <v-chip outlined class="py-3 mx-3">
          <span class="primary--text t14400" >شماره تماس اشتباه</span>
        </v-chip>

      </div>
      <div class="pa-3 modal-report">
        <v-textarea placeholder="پیام شما" hide-details outlined/>
      </div>
      <div class="d-flex justify-end pa-3">
        <v-btn color="primaryYellow" width="154" height="50"  class="br-10">
          <span class="primary--text t18400">
            ثبت پیام
          </span>
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
