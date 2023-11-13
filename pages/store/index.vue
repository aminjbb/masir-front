<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="pb-0">
      <StorePlpBanner/>
    </v-col>
    <v-col cols="12" class="mb-10 pt-0">
      <div class="main-container">
        <v-row justify="center" align="center" class="d-none d-md-flex">
          <v-col cols="4" >
            <div class="store__plp-filter-box">
              <v-row justify="center" align="center" class="pt-7">
                <v-btn-toggle
                  v-model="text"
                  tile
                  color="primaryYellow"
                  group
                >
                  <v-btn class="br-10 mx-3" >
                    <span class="t18400 primary--text ">ماشین سنگین</span>
                  </v-btn>
                  <v-btn  class="br-10 mx-3">
                    <span class="t18400 primary--text ">کامیون</span>
                  </v-btn>
                  <v-btn  class="br-10 mx-3">
                    <span class="t18400 primary--text ">قطعات</span>
                  </v-btn>

                </v-btn-toggle>
              </v-row>
            </div>

          </v-col>
          <v-col cols="4" class="headerPage pt-0">
            <v-text-field
              class="mt-8"
              outlined
              color="black"
              placeholder="جست‌و‌جو کنید"
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="4" class="store">
            <v-menu >
              <template v-slot:activator="{ on, attrs }">
                <div   v-bind="attrs"
                       v-on="on" class="store__plp-filter-box z-index-10 position__relative" >
                  <v-row justify="space-between" align="center" class="px-10 py-5">
                <span class="t18400 primary--text">
                  مرتب سازی
                </span>
                    <span >
                 <img src="~/assets/img/CaretCircleLeft.svg" class="mt-2">
                </span>
                  </v-row>
                </div>
              </template>
              <v-list class="mt-5 pt-6 store">
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"

                >
                  <v-list-item-title class="my-3">
                    <span class="white--text t18400 mr-5">
                    {{ item.title }}
                    </span>
                    <v-divider v-if="index+1 < items.length" class="mt-5" dark></v-divider>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="d-flex d-md-none px-2">
          <v-col cols="6" >
            <MobileFilterSheet/>
          </v-col>

          <v-col cols="6">
            <MobileSortSheet/>
          </v-col>

          <v-col cols="12" class="headerPage pt-0">
            <v-text-field
              class="mt-8"
              outlined
              color="black"
              placeholder="جست‌و‌جو کنید"
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" class="">
          <v-col cols="12" md="4" class=" pt-10">
            <ProductCard/>
          </v-col>
          <v-col cols="12" md="4" class=" pt-10">
            <ProductCard />
          </v-col>
          <v-col cols="12" md="4" class="pt-10">
            <ProductCard/>
          </v-col>

        </v-row>


      </div>

    </v-col>
  </v-row>


</template>

<script>
import StorePlpBanner from '~/components/Store/StorePlpBanner'
import ProductCard from '~/components/Store/ProductCard.vue'
import MobileSortSheet from '~/components/Store/MobileSortSheet.vue'
import MobileFilterSheet from '~/components/Store/MobileFilterSheet.vue'
import DriverCardMobile from '~/components/Service/DriverCardMobile.vue'

export default {
  layout:'WithOutContact',
  data(){
    return{
      text:'',
      items: [
        { title: 'بر اساس محبوبیت' },
        { title: 'بر اساس کمترین قیمت' },
        { title: 'بر اساس کمترین قیمت' },
        { title: 'بر اساس جدید‌ترین' },
      ],
    }
  },
  components:{
    StorePlpBanner,
    ProductCard,DriverCardMobile,MobileSortSheet,MobileFilterSheet,
  }
}
</script>
