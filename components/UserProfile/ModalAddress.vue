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
      <v-form ref="addAddress" v-model="valid">
        <v-row justify="center" class="px-5">
          <v-col cols="12">
            <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                آدرس پستی
              </span>
            </div>
            <v-textarea :rules="rule" v-model="form.address" rows="2" outlined></v-textarea>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
                استان
              </span>
            </div>
            <v-select :items="provinceItems" @change="setCity()" :rules="rule" v-model="form.province" outlined>
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
            <v-select :items="cities" :rules="rule" v-model="form.city" outlined>
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
            <v-text-field :rules="rule" v-model="form.no" outlined></v-text-field>
          </v-col>
          <v-col cols="12" class=" text-address">
            <div class="text-right px-5 mb-3">
              <span class="primary--text t16600">
               کد پستی
              </span>
            </div>
            <v-text-field :rules="rule" v-model="form.postalCode" outlined></v-text-field>
          </v-col>
        </v-row>

      </v-form>
      <div class="d-flex justify-end px-8 mb-8">
        <v-btn :loading="loading" @click="validate()" height="62" outlined color="primary" class="br-10">
          <span class="primary--text t18600">افزودن آدرس جدید</span>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>
<script>
import axios from "axios";
import {gql} from "nuxt-graphql-request";
export default {
  data() {
    return {
      form: {
        address: null,
        province: null,
        city: null,
        no: null,
        postalCode: null,
      },
      rule: [(v) => !!v || 'این فیلد الزامی است'],
      valid: true,
      loading:false,
      provinces:[],
      cities:[]

    }
  },
  computed: {
    dialog() {
      return this.$store.getters['get_addressModal']
    },
    provinceItems(){
      let provinces = []
      this.provinces.forEach(element => {
        const form = {
          text :element.name ,
          value: element
        }
        provinces.push(form)

      })
      return provinces
    },
    addressForEdit(){
     return this.$store.getters['get_addressForEdit']
    },
  },
  methods: {
    setForm(){
      this.form.city = this.addressForEdit?.city?.id
      this.form.province = this.addressForEdit?.city?.province
      this.setCity()
      this.form.address = this.addressForEdit?.addressDetail
      this.form.no = this.addressForEdit?.no
      this.form.postalCode = this.addressForEdit?.postalCode
    },
    setCity(){

      this.form.province.cities.forEach(element=>{
        const form = {
          text : element.name,
          value :element. id
        }
        this.cities.push(form)
      })
    },
    async getClientProvinces() {
      const query = gql`
        query{
            clientProvinces{
            results{
              id,
              name,
              cities{
                id,
                name,
              }
            }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.provinces = obj.clientProvinces.results
    },

    close() {
      this.$store.commit('set_addressModal', false)
    },
    async validate() {
      await this.$refs.addAddress.validate()
      if (this.valid) {
        if (this.addressForEdit != null) this.editForm()
        else this.submitForm()
      }
    },
    editForm() {
      this.loading = true
      axios({
        method: 'PATCH',
        url: process.env.apiUrl + 'address/v1/client/' +this.addressForEdit?.id,
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        },
        data: {
          city: this.form.city,
          address_detail: this.form.address,
          postal_code: this.form.postalCode,
          no: this.form.no,
          unit: this.form.no,

        }
      })
        .then(response => {
          this.loading = false;
          this.close()
          this.$refs.addAddress.reset()
        })
        .catch(err => {
          this.loading = false
        })
    },
    submitForm() {
      this.loading = true
      axios({
        method: 'post',
        url: process.env.apiUrl + 'address/v1/client/  ',
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        },
        data: {
          city: this.form.city,
          address_detail: this.form.address,
          postal_code: this.form.postalCode,
          no: this.form.no,
          unit: this.form.no,

        }
      })
        .then(response => {
          this.loading = false;
          this.close()
          this.$refs.addAddress.reset()
        })
        .catch(err => {
          this.loading = false
        })
    }
  },
  mounted() {
    this.getClientProvinces()
  } ,
  watch:{
    dialog(val){
      if (val) {
        if (this.addressForEdit != null) this.setForm()
      }
    }
  }
}
</script>
