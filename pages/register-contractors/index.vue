<template>
  <div class="main-container mt-10">
    <!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
    <div class="d-none d-md-block ">
      <div>
        <span class="t40600 primary--text">
          ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <div class="d-block d-md-none mt-15 pt-15">
      <div class="text-center">
        <span class="t24600 primary--text">
           ثبت‌نام پیمانکاران
        </span>
      </div>
      <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ثبت‌نام فرم زیر را پر کنید
        </span>
      </div>
      <div class="mt-15 pr-5">
        <span class="t18600 primary--text">
          اطلاعات شخصی
        </span>
      </div>
    </div>
    <v-row justify="center">
      <div class="create-service-card mt-13">
        <v-row justify="center" align="center">
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">نام و نام خانوادگی</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="نام و نام خانوادگی"
                outlined
                v-model="form.name"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">شماره تماس</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="شماره تماس"
                outlined
                v-model="form.mobile"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">ایمیل</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="ایمیل"
                outlined
                v-model="form.email"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">کد ملی</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="کد ملی"
                outlined
                v-model="form.nationalId"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب مهارت ها</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب مهارت ها "
                outlined
                multiple
                append-icon="mdi-chevron-down-circle-outline"
                :items="skillItems"
                v-model="form.skill">
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
              </v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب محدوده</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب محدوده"
                outlined
                :items="neighborhoodItems"
                v-model="form.neighborhood"
                append-icon="mdi-chevron-down-circle-outline"
              >
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
              </v-select>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">تاریخ تولد</span>
            </div>
            <div class="mt-5 px-4">
              <date-picker v-model="form.birthdate" class="pb-8" mode="single" :column="1"
                           color="primary"></date-picker>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">کد پیمانکاری</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="کد پیمانکاری "
                outlined
                v-model="form.code"
              ></v-text-field>
            </div>
          </v-col>

          <v-col md="9" cols="11">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">از تجربیات خود بنویسید.</span>
            </div>
            <div class="mt-10">
              <v-textarea
                placeholder="تجربیات "
                outlined
                rows="9"
                row-height="30"
                v-model="form.description"
              ></v-textarea>
            </div>
          </v-col>
          <v-col md="3" cols="11">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">تصویر صفحه کاربری</span>
            </div>
            <div class="mt-5">

              <v-card v-if="profile.base64 == null" @click="selectProfileImage" color="cultured" outlined height="251  "
                      width="251" class="br-15 mx-1 d-flex align-center justify-center">
                <img src="~/assets/img/PlusCircleBlack2.svg" alt="">
              </v-card>
              <v-img height="251" v-else :src="profile.base64" alt=""
                     class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                <div class="ma-1 position__absolute z-index-10" @click="deleteProfilePhoto()">
                  <v-icon color="error">mdi-delete</v-icon>
                </div>
              </v-img>
            </div>
          </v-col>

        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات وسیله
        </span>
      </div>
    </div>
    <DeviceInformation :vehicleItems="vehicleItems" v-for="(device , index) in devices" :ref="`devices${index}`" :key="`devices${index}`"/>
    <v-row justify="space-between" class="px-15 py-10 d-none d-md-flex">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                 افزودن وسیله اضافه
              </span>

      </v-btn>
      <v-btn :loading="loading" @click="EditUser()" color="primaryYellow" width="251" height="101" class="br-20">
              <span class="t30600 primary--text">
                ثبت‌نام
              </span>
      </v-btn>
    </v-row>
    <div class="py-10 d-flex justify-center d-md-none">
      <div>
        <div class="d-flex justify-center ">
          <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
            <span class="t18400 primary--text">
                  افزودن وسیله اضافه
              </span>

          </v-btn>
        </div>
        <div class="d-flex justify-center ">
          <v-btn :loading="loading" color="primaryYellow" width="251" height="101" class="br-20 mt-10">
                <span class="t30600 primary--text">
                  ثبت‌نام
                </span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceInformation from '~/components/Service/DeviceInformation.vue'
import {gql} from "nuxt-graphql-request";
import axios from "axios";
import {convertDateToGregorian} from "~/assets/js/public";

export default {
  components: {

    DeviceInformation
  },
  data() {
    return {
      loading: false,
      clientDetail: null,
      neighborhoods: [],
      vehicles: [],
      skills: [],
      profile: {base64: null, image: ''},
      items: ['test', 'tesst'],
      devices: [
        {name: ''}
      ],
        thumbnail:null,
        form: {
        name: '',
        mobile: null,
        email: null,
        nationalId: null,
        birthdate: null,
        neighborhood: null,
        code: null,
        description: null,
        skill: []
      }
    }
  },
  methods: {
    async EditUser(){
      await axios
        .post(process.env.apiUrl + `user/v1/client/me/`, {
            first_name: this.form.name,
            thumbnail: this.profile.image,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
              'accept': 'application/json',
              'Content-Type': `multipart/form-data`,
            },
          })
        .then((response) => {
          this.SubmitData()
        })
        .catch((err) => {
        })
    },
    async SubmitData() {
      this.loading = true
      await axios
        .post(process.env.apiUrl + `employee/v1/client/`, {
            skills: this.form.skill,
            neighborhood: this.form.neighborhood.id,
            code: this.form.code,
            description: this.form.description,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
            },
          })
        .then((response) => {
          this.devices.forEach((element, index) => {
            this.addVehicle(this.$refs[`devices${index}`][0].form)
          })
        })
        .catch((err) => {
        }).finally(() => {
        this.loading = false
      });
    },
    async addVehicle(vehicle) {
      this.loading = true
       axios
        .post(process.env.apiUrl + `vehicle/v1/client/`, {
            vehicle: vehicle.vehicle,
            does_have_technical_examination: vehicle.does_have_technical_examination,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
            },
          })
        .then((response) => {
          this.devices.forEach((element , index) =>{
            if (this.$refs[`devices${index}`][0].images?.length){
               this.$refs[`devices${index}`][0].images.forEach(image=>{
                  this.assingImageVehicle(image , response.data.id)
              })
              this.assingCertificateImageVehicle(this.$refs[`devices${index}`][0].certificate ,  response.data.id)
              this.assingTechnicalDiagnosisImageVehicle(this.$refs[`devices${index}`][0].technicalDiagnosis ,  response.data.id)
            }
          })
        })
        .catch((err) => {
        }).finally(() => {
        this.loading = false
      });
    },
    assingTechnicalDiagnosisImageVehicle(image , id){
      const formData = new FormData()
      formData.append('image' , image)
      formData.append('employee_vehicle' , id)
      formData.append('type' , 'technical_examination')
      axios
        .post(process.env.apiUrl + `vehicle/v1/client/image/`, formData,
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
              'accept': 'application/json',
              'Content-Type': `multipart/form-data`,
            },
          })
        .then((response) => {

        })
        .catch((err) => {
        }).finally(() => {
        this.loading = false
      });
    },
    assingCertificateImageVehicle(image , id){
      const formData = new FormData()
      formData.append('image' , image)
      formData.append('employee_vehicle' , id)
      formData.append('type' , 'driving_license')
      axios
        .post(process.env.apiUrl + `vehicle/v1/client/image/`, formData,
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
              'accept': 'application/json',
              'Content-Type': `multipart/form-data`,
            },
          })
        .then((response) => {

        })
        .catch((err) => {
        }).finally(() => {
        this.loading = false
      });
    },
    assingImageVehicle(image , id){
      const formData = new FormData()
      formData.append('image' , image)
      formData.append('employee_vehicle' , id)
      formData.append('type' , 'vehicle')
      axios
        .post(process.env.apiUrl + `vehicle/v1/client/image/`, formData,
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
              'accept': 'application/json',
              'Content-Type': `multipart/form-data`,
            },
          })
        .then((response) => {

        })
        .catch((err) => {
        }).finally(() => {
        this.loading = false
      });
    },
    addProject() {
      const form = {name: ''}
      this.projects.push(form)
    },

    deleteProfilePhoto() {
      this.profile.base64 = null
      this.profile.image = null
    },
    selectProfileImage() {

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
      reader.onload = () => {

        this.profile.image = file
        this.profile.base64 = reader.result

      };

    },
    async getClientDetail() {

      const requestHeaders = {
        Authorization: "Bearer " + this.$cookies.get("userToken"),
      };
      const query = gql`
        query{
            clientMe{
                id,
                    firstName,
                    lastName,
                    nationalId,
                    mobile
            }
          } `;
      const obj = await this.$graphql.default.request(query, {}, requestHeaders);
      this.clientDetail = obj.clientMe
    },
    async getClientVehicles() {
      const query = gql`
        query{
            clientVehicles{
            results{

              id,
              name,
              }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.vehicles = obj.clientVehicles.results
    },
    async getClientNeighborhood() {
      const query = gql`
        query{
            clientNeighborhoods{
             id,
              name,
              city{
                id,
                name,
              }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.neighborhoods = obj.clientNeighborhoods
    },
    async getClientSkills() {
      const query = gql`
        query{
            clientSkills{
              results{
              id,
              name,
              }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.skills = obj.clientSkills.results
    },
    setForm() {
      this.form.name = this.clientDetail.firstName
      this.form.nationalId = this.clientDetail.nationalId
      this.thumbnail= this.clientDetail.thumbnail

      this.form.mobile = this.clientDetail.mobile
    },
  },
  watch: {
    clientDetail() {
      this.setForm()
    }
  },
  computed: {
    neighborhoodItems() {
      let neighborhoods = []
      this.neighborhoods.forEach(element => {
        const form = {
          text: element.name,
          value: element
        }
        neighborhoods.push(form)

      })
      return neighborhoods
    },
    skillItems() {
      let skills = []
      this.skills.forEach(element => {
        const form = {
          text: element.name,
          value: element.id
        }
        skills.push(form)

      })
      return skills
    },
    vehicleItems() {
      let vehicles = []
      this.vehicles.forEach(element => {
        const form = {
          text: element.name,
          value: element.id
        }
        vehicles.push(form)

      })
      return vehicles
    },
  },
  mounted() {
    this.getClientDetail()
    this.getClientNeighborhood()
    this.getClientSkills()
    this.getClientVehicles()
  },
  layout: 'WithOutContact'
}
</script>
<style>

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: white !important;
}
</style>
