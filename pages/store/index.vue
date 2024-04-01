<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="pb-0">
      <StorePlpBanner/>
    </v-col>
    <v-col cols="12" class="mb-10 pt-0">
      <div class="main-container">
        <v-row justify="center" align="center" class="d-none d-md-flex">
          <v-col cols="4" >
            <v-menu >
              <template v-slot:activator="{ on, attrs }">
                <div   v-bind="attrs"
                       v-on="on" class="store__plp-filter-box z-index-10 position__relative" >
                  <v-row justify="space-between" align="center" class="px-10 py-5">
                <span class="t18400 primary--text">
                  دسته بندی
                </span>
                    <span >
                 <img src="~/assets/img/CaretCircleLeft.svg" class="mt-2">
                </span>
                  </v-row>
                </div>
              </template>
              <v-list class="mt-5 pt-6 store">
                <v-list-item
                  v-for="(item, index) in filters"
                  :key="`index${index}`"
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
          <v-col cols="12" md="4" class=" pt-10" v-for="(product , index) in products" :key="`product-${index}`">
            <ProductCard :product="product"/>
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
import {gql} from 'nuxt-graphql-request';
export default {
  layout:'WithOutContact',
  data(){
    return{
      products:[],
      pageLength:1,
      text:'',
      items: [
        { title: 'بر اساس محبوبیت' },
        { title: 'بر اساس کمترین قیمت' },
        { title: 'بر اساس کمترین قیمت' },
        { title: 'بر اساس جدید‌ترین' },
      ],
      filters:[
        { title: 'ماشین سنگین' },
        { title: 'کامیون' },
        { title: 'قطعات' },
      ]
    }
  },
  components:{
    StorePlpBanner,
    ProductCard,DriverCardMobile,MobileSortSheet,MobileFilterSheet,
  },
  methods:{
  async  getProducts(form){
      const query = gql`
        query{
            clientProducts(limit:10  ` + form + `){
                totalCount,
                results{
                    id,
                    englishName,
                    persianName,
                    metaDescription,
                    metaTitle,
                    canonical,
                    schema,
                    price,
                    nofollow,
                    noindex,
                    description,
                    images{
                      image
                    }
                }
            }
          } `;
      const obj = await this.$graphql.default.request(query , {});
      this.pageLength = Math.ceil(obj.clientProducts.totalCount /10)
      this.products =  obj.clientProducts.results
    }
  },

  beforeMount() {
    this.getProducts('')
  }
}
</script>
