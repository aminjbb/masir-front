<template>
  <div>
    <div class="user-profile__head mt-15 pt-15 mt-md-0 pt-md-0">
      <div class="main-container">
        <v-row class="d-none d-md-flex" justify="start" align="start" >
          <v-col cols="3" class="pl-5">
            <div class="avatar-box">
              <img style="width: 100% ; height: 100%" :src="thumbnail" alt="">
            </div>
          </v-col>
          <v-col cols="6" class="pl-15">
            <div class="pt-2">
                <span class="white--text t30600">
                 {{clientDetail?.firstName }}
                </span>
            </div>
            <div class="d-flex justify-start mt-15">
              <div class="chip px-5 d-flex justify-center align-center ml-2">

                <span class="primary--text t18400" v-for="(skill , index) in clientDetail?.employee?.skills">{{skill?.name}}</span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400">{{ clientDetail?.employee?.neighborhood?.name }}</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t18400" v-for="(vehicle , index) in clientDetail?.employee?.vehicles">{{ vehicle?.vehicle?.name }}</span>
              </div>
            </div>
            <div class="mt-8 text-right">
              <p class="white--text t14400 lh-28">
                لودر یکی از کاربردی‌ترین ماشین‌آلات ساختمانی و عمرانی است. این ماشین که در اندازه‌های مختلف ساخته می‌شود
              </p>
            </div>
          </v-col>

          <v-col cols="3">
            <div class="d-flex justify-end" style="margin-top: -35px">
              <div class=" d-none d-md-block">
                <div class="mt-15">
                  <v-row  align="center" class="pr-15">
                  <span class="t14400 success--text mx-3">
                  verified
                </span>
                    <span >
                  <img width="28" height="28" src="~/assets/img/verified.png" alt="">
                </span>
                  </v-row>
                </div>
                <div class="mt-3">
               <span class="t14400 secondary--text mx-3">
                  دارای تایید پلتفرم مسیر
                </span>

                </div>
              </div>
            </div>

            <div class="text-right pr-2 mt-10">
              <div>
                <span class="primaryYellow--text t18400">وضعیت فعلی:</span>
                <span  class="primaryYellow--text t18400 mr-4">
                    <v-btn-toggle
                      v-model="toggle_exclusive"
                      mandatory
                      color="primaryYellow"
                      class="br-10"
                    >
                    <v-btn class="br-10" text>
                      <span class="primary--text t16400">
                        آزاد
                      </span>
                    </v-btn>
                    <v-btn class="br-10" text>
                     <span class="primary--text t16400">
                        مشغول
                      </span>
                    </v-btn>

                  </v-btn-toggle>
                </span>
              </div>
              <div class="mt-5">
                <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">۱۷</span>
              </div>

              <div class="mt-16 pt-5">
                <v-btn  @click="EditUser()" block color="primaryYellow" width="251" height="101" class="br-20">
                  <span class="t30600 primary--text">
                     ثبت تغییرات
                  </span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex d-md-none" justify="center" align="start" >
          <div>
            <div class="d-flex justify-center">
              <div class="avatar-box"></div>
            </div>
            <div class="pt-2 text-center mt-8">
              <span class="white--text t18600">
                عباس قادری
              </span>
            </div>
            <div class="d-flex justify-start mt-15 position__relative scroller px-10" style="max-width: 359px;">
              <div class="chip  d-flex justify-center align-center ml-2"  style="min-width: 150px;">
                <span class="primary--text t14400">خاک برداری، تخریب </span>
              </div>
              <div class="chip px-5 d-flex justify-center align-center mx-2" style="min-width: 120px;">
                <span class="primary--text t14400">سعادت آباد</span>
              </div>
              <div class="chip px-10 d-flex justify-center align-center mx-2">
                <span class="primary--text t14400">لودر</span>
              </div>
            </div>
            <div class="text-justify px-13 mt-8">
              <span class="white--text t16400">
                لودر یکی از کاربردی‌ترین ماشین‌آلات ساختمانی و عمرانی است. این ماشین که در اندازه‌های مختلف ساخته می‌شود
              </span>
            </div>

            <div class="d-flex justify-center ma-5">
              <div class="status-mobile-box pt-5">
                <div class="d-flex justify-center align-center ">
                  <span class="primaryYellow--text t18400">وضعیت فعلی:</span>
                  <span class="primaryYellow--text t18400 mr-4">
                   <v-btn-toggle
                     v-model="toggle_exclusive"
                     mandatory
                     color="primaryYellow"
                     class="br-10"
                   >
                    <v-btn class="br-10" text>
                      <span class="primary--text t16400">
                        آزاد
                      </span>
                    </v-btn>
                    <v-btn class="br-10" text>
                     <span class="primary--text t16400">
                        مشغول
                      </span>
                    </v-btn>

                  </v-btn-toggle>
              </span>
                </div>
                <div class="d-flex justify-center align-center mt-5">
                  <span class="primaryYellow--text t18400">پروژه‌های انجام شده:</span> <span  class="primaryYellow--text t18400 mr-4 dana-fa">۱۷</span>
                </div>
              </div>

            </div>
          </div>

        </v-row>
      </div>
    </div>

    <div>
      <div class="main-container">
        <div class="d-md-flex d-none justify-space-between align-center mt-10">
          <span class="primary--text t24600 mr-10">
            اطلاعات شخصی
          </span>
          <div class="d-flex">
            <v-btn width="163" height="70" color="gray02" class="br-15 ml-5">
              <span class="primary--text t18400"> پروژه ها</span>
            </v-btn>
            <v-btn width="163" height="70" color="gray02" class="br-15">
              <span class="primary--text t18400"> پیام ها</span>
            </v-btn>
          </div>
        </div>
        <div class="d-flex d-md-none justify-center align-center mt-10">
          <span class="primary--text t24600">
            اطلاعات شخصی
          </span>

        </div>

        <div class="create-service-card mt-13" id="create-form">
          <v-row justify="center" align="center">
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">نام و نام خانوادگی</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="نام و نام خانوادگی"
                  v-model="form.name"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">شماره تماس</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  readonly
                  placeholder="شماره تماس"
                  v-model="form.mobile"
                  outlined
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
                  v-model="form.email"
                  outlined
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
                  v-model="form.nationalId"
                  outlined
                ></v-text-field>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">انتخاب مهارت ها</span>
              </div>
              <div class="mt-5">
                <v-select
                  item-text="text"
                  item-value="value"
                  :items="skillItems"
                  multiple
                  placeholder="انتخاب مهارت ها "
                  outlined
                  v-model="form.skill"
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
                <span class="t18400 primary--text">انتخاب محدوده</span>
              </div>
              <div class="mt-5">
                <v-select
                  placeholder="انتخاب محدوده"
                  v-model="form.neighborhood"
                  :items="neighborhoodItems"
                  outlined
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
                <date-picker  v-model="form.birthDate" class="pb-8" mode="single" :column="1" color="primary"></date-picker>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">کد پیمانکاری</span>
              </div>
              <div class="mt-5">
                <v-text-field
                  placeholder="کد پیمانکاری "
                  v-model="form.code"
                  outlined
                ></v-text-field>
              </div>
            </v-col>

            <v-col md="8" cols="11">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">از تجربیات خود بنویسید.</span>
              </div>
              <div class="mt-10">
                <v-textarea
                  placeholder="بنویسید "
                  v-model="form.description"
                  outlined
                  rows="9"
                  row-height="30"
                ></v-textarea>
              </div>
            </v-col>
            <v-col md="4" cols="11">
              <div class="text-right pr-4">
                <span class="t18400 primary--text">تصویر صفحه کاربری</span>
              </div>
              <div class="mt-5">

                <v-card v-if="profile.base64 == null" @click="selectProfileImage" color="cultured" outlined height="251  " class="br-15 mx-1 d-flex align-center justify-center">
                  <img height="251" style="width: 100%" v-if="thumbnail"  :src="thumbnail" alt="">
                  <img v-else src="~/assets/img/PlusCircleBlack2.svg" alt="">
                </v-card>



                  <v-img height="251" v-else :src="profile.base64" alt="" class="br-15 mx-4  align-center justify-center d-none d-md-flex">
                  <div class="ma-1 position__absolute z-index-10" @click="deleteProfilePhoto()"><v-icon color="error">mdi-delete</v-icon></div>
                </v-img>
              </div>
            </v-col>

          </v-row>
        </div>
        <div>
          <div class="mt-15 pr-5">
        <span class="t24600 primary--text">
          اطلاعات وسیله
        </span>
          </div>
        </div>
        <EditDevice v-for="(vehicle , index) in vehiclesShow" :vehicle="vehicle" :vehicleItems="vehicleItems" />
      </div>
    </div>


    <div
      style="position: fixed; height: 100px ;bottom: 0 ;background: #fff;width: 100%"
      class="py-3 d-block d-md-none"
    >
      <v-btn  color="gray02" width="153" height="66" class="br-20 mx-2">
                  <span class="t18600 primary--text">
                    پیام‌ها
                  </span>
      </v-btn>
      <v-btn @click="EditUser()" color="primaryYellow" width="153" height="66" class="br-20 mx-2">
                  <span class="t18600 primary--text">
                     ثبت تغییرات
                  </span>
      </v-btn>


    </div>
  </div>
</template>

<script>
import EditDevice from "~/components/UserProfile/EditDevice.vue";
import {gql} from "nuxt-graphql-request";
import axios from "axios";
import {convertDateToGregorian} from "~/assets/js/public";

export  default {
  components: {EditDevice},
  layout:'Peymankar',
  data(){
    return{
      toggle_exclusive:null,
      profile:{base64:null , image:''},
      clientDetail:null,
      vehicles:[],
      vehiclesShow:[],
      neighborhoods:[],
      skills:[],
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
  methods:{
    async  getClientDetail(){
    try {
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
                    mobile,
                    email,
                    birthdate,
                    thumbnail
                    employee{
                      id
                      CreatedAt
                      UpdatedAt
                      neighborhood{
                        id
                        name
                      }
                      skills{
                        id
                        name
                      }
                      code
                      description
                      drivingLicence
                      roadworthinessInspection
                      vehicles{
                        id
                        doesHaveTechnicalExamination
                        vehicle{
                          id
                          name
                        }
                        images{
                          id,
                          image,
                          type
                        }
                      }
                      rating
                    }
            }
          } `;
          const obj = await this.$graphql.default.request(query , {} , requestHeaders);
          this.setForm( obj.clientMe)
          this.clientDetail =  obj.clientMe
        }
        catch (e) {
          console.log(e)
        }
    },

    setForm(form){
      this.form.name = form.firstName
      this.form.mobile = form.mobile
      this.form.email = form.email
      if (form.thumbnail) this.thumbnail= process.env.baseUrl + form.thumbnail
      this.form.nationalId = form.nationalId
      // todo: convert date
      this.birthdate = form.birthdate
      this.form.nationalId = form.nationalId
      this.form.neighborhood = form?.employee?.neighborhood?.id
      this.form.code = form.employee?.code
      this.form.description = form.employee?.description
      form.employee?.skills.forEach((element)=>{
        this.form.skill.push(element.id)
      })
      form?.employee?.vehicles.forEach(element=>{
        this.vehiclesShow.push(element)
      })
    },
    deleteProfilePhoto(){
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
      reader.onload =  () => {

        this.profile.image = file
        this.profile.base64 = reader.result

      };

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

    async EditUser(){
      const formData = new FormData()
      formData.append('first_name' ,  this.form.name)
      if (this.profile.image)    formData.append('thumbnail' ,   this.profile.image)
      formData.append('national_id' ,  this.form.nationalId)

      await axios
        .patch(process.env.apiUrl + `user/v1/client/me/`, formData,
          {
            headers: {
              Authorization: `Bearer ${this.$cookies.get('userToken')}`,
              'accept': 'application/json',
              'Content-Type': `multipart/form-data`,
            },
          })
        .then((response) => {
          // this.SubmitData()
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
  },
  computed: {
    baseUrl(){
      return process.env.baseUrl
    },
    neighborhoodItems() {
      let neighborhoods = []
      this.neighborhoods.forEach(element => {
        const form = {
          text: element.name,
          value: element.id
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
  }
}
</script>
