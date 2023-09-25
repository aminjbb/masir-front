<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    style="background: #ffff;"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        v-bind="attrs"
        v-on="on"
        icon
      >
        <img src="~/assets/img/search.svg" alt=""  >
      </v-btn>
    </template>
    <div>
      <div class="pa-2 searchBox">
        <v-col cols="11">
          <v-text-field
            placeholder="جست‌و‌جو کنید"
            clearable
            filled
            rounded
            dense
          ></v-text-field>
        </v-col>
      </div>
      <div class="mobile-menu-back pl-5" @click="dialog = false">
        <v-row align="center">
            <span class="t14400 primary--text ml-5">
            بازگشت
          </span>
          <img src="~/assets/img/CaretCircleRight.svg" alt=""  @click="dialog =false">
        </v-row>
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
