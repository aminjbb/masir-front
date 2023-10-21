<template>
  <div class="text-center">

    <div @click="sheet = !sheet" class="store__plp-filter-box z-index-10 position__relative" >
      <v-row justify="space-between" align="center" class="px-6 pt-6">
                <span class="t14400 primary--text">
                  مرتب سازی
                </span>
        <span >
                 <img width="27" height="27" src="~/assets/img/CaretCircleLeft.svg" class="mt-2">
                </span>
      </v-row>
    </div>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="460px"
      >
        <div class="d-flex justify-space-between px-10 pt-8" >
            <span class="t18400 primary--text">
              مرتب سازی
            </span>
            <v-icon @click="sheet = !sheet"> mdi-close</v-icon>
        </div>
        <v-divider class="my-5"></v-divider>
        <div>
          <v-radio-group v-model="radios" class="px-10">

            <v-radio color="primaryYellow" value="1" class="my-3">
              <template v-slot:label>
                <div class="t18400 primary--tex">بر اساس محبوبیت</div>
              </template>
            </v-radio>
      <v-radio color="primaryYellow" value="2" class="my-3">
              <template v-slot:label>
                <div class="t18400 primary--tex">بر اساس کمترین قیمت</div>
              </template>
            </v-radio>
      <v-radio color="primaryYellow" value="3" class="my-3">
              <template v-slot:label>
                <div class="t18400 primary--tex">بر اساس کمترین قیمت</div>
              </template>
            </v-radio>
      <v-radio color="primaryYellow" value="4" class="my-3">
              <template v-slot:label>
                <div class="t18400 primary--tex">بر اساس جدید‌ترین</div>
              </template>
            </v-radio>


          </v-radio-group>
        </div>

        <div class="d-flex justify-center mt-5">
          <v-btn  color="primaryYellow" width="251" height="50" class="br-10">
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
    radios:null
  }),
}
</script>
