<template>
  <div>

    <div >
      <div class="main-container">
        <v-row>
          <v-col cols="12" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="12" md="9">
            <div class="user-profile__detail-card-create mt-user-profile mb-15 " >
              <v-row justify="center" align="center" class="pa-5">
                <v-col cols="12" md="6">
                  <v-row class="pa-5" justify="center">
                    <v-col class="px-0" cols="10" md="9">
                      <v-card height="258" width="258" class="br-15 d-flex justify-center align-center">
                       <div>
                         <div class="d-flex justify-center" @click="selectFile()">
                           <img :src="pre.base64" v-if="pre.base64" width="394" height="394" alt=""
                                class="mt-17 br-25">
                           <img v-else src="~/assets/img/product-create.svg" alt="">

                         </div>
                         <div>
                           <div class="text-center" v-if="!pre.base64">
                             <span class="t14400">تصاویر محصول را بارگزاری کنید</span>
                           </div>

                        </div>
                       </div>
                      </v-card>
                    </v-col>
                    <v-col class="px-0" cols="3">
                      <div class="d-none d-md-block">
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">
                            <img :src="main[0].base64" v-if="main[0]" width="74px" height="74px" alt=""
                                 class="br-15" />
                          </v-card>
                        </div>
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">
                            <img :src="main[1].base64" v-if="main[1]" width="74px" height="74px" alt=""
                                 class="br-15" />
                          </v-card>
                        </div>
                        <div class="mb-4">
                          <v-card height="74" width="74" class="br-15">
                            <img :src="main[2].base64" v-if="main[2]" width="74px" height="74px" alt=""
                                 class="br-15" />
                          </v-card>
                        </div>
                      </div>
                      <div class="d-flex d-md-none justify-center mb-2">
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                        <div class="mx-2">
                          <v-card height="74" width="74" class="br-15">

                          </v-card>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0  pr-0 pl-6"
                    >
                      <v-text-field
                        v-model="form.name"
                        solo
                        dense
                        placeholder="نام محصول"
                        class="br-25 create-product"

                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0 pr-0 pl-6"
                    >
                      <v-text-field
                        v-model="form.englishName"
                        solo
                        dense
                        placeholder="نام محصول (انگلیسی)"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      class="py-0 pr-0 pl-6"
                    >
                      <v-select
                        v-model="form.category"
                        solo
                        dense
                        placeholder="انتخاب دسته بندی"
                        class="br-25"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="form.description"
                    rows="16"
                    solo
                    dense
                    placeholder="توضیحات محصول"
                    class="br-25 pa-5"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-row justify="center" align="center">
                    <v-col class="pt-5" cols="12" md="4">
                      <v-text-field
                        v-model="form.mobile"
                        solo
                        dense
                        placeholder="شماره تماس (اختیاری)"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col class="pt-5" cols="12" md="4">
                      <v-text-field
                        v-model="form.price"
                        solo
                        dense
                        placeholder="قیمت"
                        class="br-25"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="4">
                      <div class="d-flex justify-end align-start ml-md-5">
                        <v-btn :loading="loading" @click="createProduct()" width="149" height="50" color="primaryYellow" class="br-15">
                          <span class="primary--text t18600">
                            ساخت محصول
                          </span>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </div>
          </v-col>
        </v-row>

      </div>
    </div>


  </div>
</template>

<script>
import ContractorCard from '~/components/UserProfile/ContractorCard.vue'
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
import axios from 'axios'
export  default {
  layout:'userProfile',
  data(){
    return{
      loading:false,
      pre: {
        image: '',
        base64: '',

      },
      main: [],
      form:{
        name:null,
        englishName:null,
        category:null,
        description:null,
        mobile:null,
        price:null

      }
    }
  },

  methods:{
    imageToBase64(file) {
      const form ={
        image :file,
        base64:''
      }
      var imageFile = file
      var fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        form.base64 = srcData
      };
      fileReader.readAsDataURL(imageFile);
      this.main.push(form)

    },


    selectFile(){
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('multiple', '')
      input.addEventListener('change', e => {
        var file = e.target.files[0];
        this.imageToBase64(file)
      })
      input.click()

    },


    createProduct() {
      this.loading = true;
      axios({
        method: 'post',
        url: process.env.apiUrl + 'product/v1/client/',
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        },
        data: {
          persian_name: this.form.name,
          english_name: this.form.englishName,
          description: this.form.description,
          is_active: true,
          price: this.form.price
        }
      })
        .then(response => {
          this.loading = false;
          this.main.forEach(element => {
            this.uploadImage(element, response.data.id)
          });
          this.$router.push('/')
          this.$store.dispatch('set_products', '')
        })
        .catch(err => {
          this.loading = false;
        })
    },

    categoryAssignment(id){
      axios({
        method: 'post',
        url: process.env.apiUrl + 'category/client/assignment/',
        headers: {
          Authorization: "Bearer " + this.$cookies.get("token"),
          "Content-Type": "multipart/form-data",
        },
        data: {
          product: id,
          category: this.product.category,

        }
      })
        .then(response => {

        })
        .catch(err => {
          this.loading = false;
        })
    },

    uploadImage(obj, id) {
      axios({
        method: 'post',
        url: process.env.apiUrl + 'product/v1/client/image/',
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
          "Content-Type": "multipart/form-data",
        },
        data: {
          product: id,
          image: obj.image,
        }
      })
        .then(response => {

        })
        .catch(err => {
          this.loading = false;
        })
    }
  },
  components:{
    UserProfileNavigationMenu,
    ContractorCard
  }
}
</script>

<style>
.default-file-input {
  opacity: 0;
}
</style>
