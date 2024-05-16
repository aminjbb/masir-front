<template>
  <div>

    <div >
      <div class="main-container">
        <v-row justify="center">
          <v-col cols="11" md="3">
            <UserProfileNavigationMenu/>
          </v-col>
          <v-col cols="11" md="9">
            <div class="user-profile__detail-card mt-user-profile  mb-15" id="create-form">
              <v-row justify="space-between" class="mb-10 px-md-15 px-2 pt-10">
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
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
                <v-col md="6" cols="12" class="py-0">
                  <div class="text-right pr-4">
                    <span class="t18400 primary--text">تاریخ تولد</span>
                  </div>
                  <div class="mt-5" id="birthdateInput">
                    <client-only>
                      <date-picker  display-format="jD jMMMM" mode="single" v-model="form.birthdate" format="jYYYY/jMM/jDD" type="date"/>
                    </client-only>
                  </div>
                </v-col>
                <v-col md="6" cols="12" class="py-0">
                  <div class="text-right pr-4">
                    <span class="t18400 primary--text">جنسیت</span>
                  </div>
                  <div class="mt-5">
                    <v-select
                      placeholder="جنسیت"
                      :items="sexItems"
                      v-model="form.sex"
                      outlined
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="12" >
                  <div class="d-none justify-end d-md-flex">
                    <v-btn :loading="loading" @click="userUpdate()" color="primaryYellow" height="55" width="149" class="br-15">
                      <span class="primary--text t18600">ویرایش</span>
                    </v-btn>
                  </div>
                  <div class="d-flex justify-center d-md-none mb-3">
                    <v-btn :loading="loading" @click="userUpdate()"  color="primaryYellow" height="55" width="149" class="br-15">
                      <span class="primary--text t18600">ویرایش</span>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" class="py-0">
                  <div class="user-detail-dec-box pa-5 mx-md-0 mx-3">
                    <div> <span class="t16400 primary--text">محرمانگی اطلاعات مشتری</span></div>
                    <div>
                      <span class="t16400 primary--text">داده‌های شخصی‌ای که فراهم می‌کنید برای پاسخ دادن به سوالات، پردازش سفارشات یا صدور اجازه دسترسی به اطلاعات خاص مورد استفاده قرار می‌گیرد. شما می‌توانید تمام اطلاعات شخصی که در صفحه «حساب‌کاربری من» وجود دارد را ویرایش یا حذف کنید.</span>

                    </div>
                  </div>
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
import UserProfileNavigationMenu from "~/components/Public/UserProfileNavigationMenu.vue";
import {gql} from "nuxt-graphql-request";
import axios from 'axios'
import {convertDateToGregorian, convertDateToJalai} from "~/assets/js/public";
export  default {
  components: {UserProfileNavigationMenu},
  data(){
    return{
      clientDetail:null,
      loading:false,
      sexItems:[
        {
          text:'مرد',
          value:'male'
        },
        {
          text:'زن',
          value:'female'
        }
      ],
      form:{
        name:'',
        mobile:null,
        email:null,
        nationalId:null,
        birthdate:null,
        sex:null
      }
    }
  },
  layout:'userProfile',
  methods:{
    async  getClientDetail(){
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
                    sex
            }
          } `;
      const obj = await this.$graphql.default.request(query , {} , requestHeaders);
      this.clientDetail =  obj.clientMe
    },
    setForm(){
      this.form.name= this.clientDetail.firstName
      this.form.nationalId= this.clientDetail.nationalId
      this.form.mobile= this.clientDetail.mobile
      this.form.email= this.clientDetail.email
      this.form.sex = this.clientDetail.sex.toLocaleLowerCase()
      if (this.clientDetail.birthdate) this.form.birthdate =convertDateToJalai(this.clientDetail.birthdate , '-' , false)
      console.log(this.form)
    },
    userUpdate(){
      this.loading = true
      axios({
        method: "PATCH",
        url: process.env.apiUrl + "user/v1/client/me/",
        headers: {
          Authorization: "Bearer " + this.$cookies.get("userToken"),
        },
        data: {
          first_name: this.form.name,
          national_id: this.form.nationalId,
          email: this.form.email,
          birthdate:convertDateToGregorian(this.form.birthdate , '-' , false),
          sex:this.form.sex
        },
      })
        .then((response) => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });

    }
  },
  beforeMount() {
    this.getClientDetail()
  },
  watch:{
    clientDetail(){
      this.setForm()
    }
  }
}
</script>

<style scoped>
#birthdateInput input{
  height: 87px !important;
}

.user-profile__detail-card .v-text-field--filled>.v-input__control>.v-input__slot, .v-text-field--full-width>.v-input__control>.v-input__slot, .v-text-field--outlined>.v-input__control>.v-input__slot{
  height: 87px !important;
  min-height: 87px !important;

}
</style>

