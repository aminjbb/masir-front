<template>
  <div class="main-container mt-10" id="create-form">
    <!--    <date-picker mode="single" :column="1" color="primary"></date-picker>-->
    <div class="d-none d-md-block">
      <div>
        <span class="t40600 primary--text">
          ایجاد پروژه
        </span>
      </div>
      <div class="mt-8">
        <span class="t24600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
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
          ایجاد پروژه
        </span>
      </div>
      <div class="mt-8 text-center">
        <span class="t18600 primary--text">
          جهت ایجاد پروژه فرم زیر را پر کنید
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
              <span class="t18400 primary--text">نام پروژه</span>
            </div>
            <div class="mt-5">
              <v-text-field
                placeholder="نام پروژه"
                outlined
                v-model="form.projectName"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب استان پروژه</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="استان پروژه"
                outlined
                append-icon="mdi-chevron-down-circle-outline"
                v-model="form.province"
                :items="provinceItems"
                @change="setCity()"
              >
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
              </v-select>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب شهر پروژه</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="شهر پروژه"
                outlined
                append-icon="mdi-chevron-down-circle-outline"
                v-model="form.city"
                :items="cities"
              >
                <template #no-data>
                  <span class="white--text">
                    گزینه ای وجود ندارد
                  </span>
                </template>
              </v-select>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب محدوده</span>
            </div>
            <div class="mt-5">
              <v-select
                placeholder="انتخاب محدوده"
                outlined
                append-icon="mdi-chevron-down-circle-outline"
                multiple
                v-model="form.neighborhood"
                :items="neighborhoodItems"
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
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5 ">
              <date-picker v-model="form.startDate" class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="text-right pr-4">
              <span class="t18400 primary--text">انتخاب زمان شروع پروژه</span>
            </div>
            <div class="mt-5">
              <date-picker v-model="form.endDate" class="pb-8" mode="single" :column="1" color="primary"></date-picker>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-row>

    <div>
      <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات پروژه
        </span>
      </div>
    </div>
    <ProjectSection v-for="(project , index) in projects" :serviceItems="serviceItems" :ref="`project${index}`" :key="`project-${index}`"/>

    <v-row justify="space-between" class="px-15 py-10 d-none d-md-flex">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                   افزودن سرویس اضافه
              </span>

      </v-btn>
      <v-btn @click="test()" :loading="loading" color="primaryYellow" width="251" height="101" class="br-20">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
      </v-btn>
    </v-row>
    <v-row justify="center" class="px-15 py-10 d-flex d-md-none">
      <v-btn @click="addProject()" outlined color="primary" width="301" height="87" class="br-20">
              <span class="ml-5">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </span>
        <span class="t18400 primary--text">
                  افزودن وسیله اضافه
              </span>

      </v-btn>
      <v-btn @click="test()" :loading="loading" color="primaryYellow" width="251" height="101" class="br-20 mt-10">
              <span class="t30600 primary--text">
                 ثبت پروژه
              </span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import ProjectSection from '~/components/Service/ProjectSection.vue'
import {gql} from "nuxt-graphql-request";
import {convertDateToGregorian, convertDateToJalai} from "~/assets/js/public";
import axios from 'axios'
export default {
  components: {ProjectSection},
  data() {
    return {
      loading:false,
      clientDetail: null,
      provinces: [],
      cities:[],
      services:[],

      neighborhoods: [],
      items: ['test', 'tesst'],
      projects: [
        {name: ''}
      ],
      form: {
        projectName:'',
        name: '',
        mobile: null,
        email: null,
        nationalId: null,
        birthdate: null,
        province:null,
        city:null,
        neighborhood:null,
        startDate:null,
        endDate:null

      }
    }
  },
  methods: {
    setCity(){
      this.form.province.cities.forEach(elemet=>{
        const form = {
          text : elemet.name,
          value :elemet. id
        }
        this.cities.push(form)
      })
    },
    test(){
      this.loading = true
      let addServices= []
      let addServiceRequirements= []

      this.projects.forEach((element , index)=>{
        const form = {
          service: this.$refs[`project${index}`][0].form.service.id,
          budget: this.$refs[`project${index}`][0].form.budget
        }
        addServices.push(form)
        this.$refs[`project${index}`][0].servicesRequirementsForm.forEach((element, index)=>{
          const requirements = {
            service_requirement : element.id,
            value : element.value,
          }
          addServiceRequirements.push(requirements)
        })
      })
      console.log(this.form.startDate)
      axios
        .post(process.env.apiUrl + `project/v1/client/`, {
          name:this.form.projectName,
          description:this.form.projectName,
          city :this.form.city,
          neighborhood: this.form.neighborhood.id,
            predicted_start_date: this.form.startDate,
          predicted_completion_date: this.form.endDate,
          services:addServices,
          service_requirements:addServiceRequirements
        },
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
            },
          })
        .then((response) => {
          this.$router.go(-1)
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
    async getClientServices() {
      const query = gql`
        query{
            clientServices{
             id,
              name,
              requirements{
                id,
                requirement,
                valueType,
                doesNeedImage
              }
            }
          } `;
      const obj = await this.$graphql.default.request(query, {});
      this.services = obj.clientServices
    },
    setForm() {
      this.form.name = this.clientDetail.firstName
      this.form.nationalId = this.clientDetail.nationalId
      this.form.mobile = this.clientDetail.mobile
    },

  },
  beforeMount() {
    this.getClientDetail()
    this.getClientProvinces()
    this.getClientNeighborhood()
    this.getClientServices()

  },
  watch: {
    clientDetail() {
      this.setForm()
    }
  },
  computed:{
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
    neighborhoodItems(){
      let neighborhoods = []
      this.neighborhoods.forEach(element => {
        const form = {
          text :element.name ,
          value: element
        }
        neighborhoods.push(form)

      })
      return neighborhoods
    },
    serviceItems(){
      let services = []
      this.services.forEach(element => {
        const form = {
          text :element.name ,
          value: element
        }
        services.push(form)

      })
      return services
    },

  }
}
</script>
