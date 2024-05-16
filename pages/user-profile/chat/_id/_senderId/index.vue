<template>
  <div>
     <div class="main-container pt-10">
        <div class="user-profile__chat-card mt-15 position__relative">


          <div class="user-profile__chat-user-chat  position__relative">
            <div class=" header-chat d-flex align-center px-10">
              <span><img src="../../../../../assets/img/UserCircle.svg" alt=""></span>
              <span class="t16400 primary--text mr-5">میترا حجار</span>
            </div>
            <v-divider></v-divider>
            <MyMessage/>
            <UserMessage/>
            <div style="    position: absolute;left: 0;right: 0;margin: 0 15px;bottom: 0">
              <div class="messageSend pt-5 position__relative">
                <v-text-field v-model="message" outlined @keyup.enter="sendMassage()"></v-text-field>
                <div style="   position: absolute;left: 17px;top: 29px;">
                  <img src="~/assets/img/send.svg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import ChatCard from '~/components/UserProfile/ChatCard.vue'
import MyMessage from '~/components/UserProfile/MyMessage.vue'
import UserMessage from '~/components/UserProfile/UserMessage.vue'
import MassageCard from "~/components/UserProfile/MassageCard.vue";
import axios from 'axios'
export default {
  components:{
    MassageCard,
    ChatCard,
    MyMessage,
    UserMessage
  },
  data(){
    return{
      message:null
    }
  },
  methods:{
    sendMassage(){
      if (this.message){
        axios({
          method: 'post',
          url: process.env.apiUrl + 'messaging/v1/client/',
          headers: {
            Authorization: "Bearer " + this.$cookies.get("userToken"),
          },
          data: {
            message: this.message,
            receiver_id: this.$route.params.id
          }
        })
          .then(response => {
            this.message = null;
            this.$store.dispatch('set_clientSingleMessage' , this.$route.params.id)
          })
          .catch(err => {
            this.loading = false
          })
      }

    }
  },

  mounted() {
    const form = {
      id: this.$route.params.id,
      clientId: this.$route.params.senderId,
    }
    this.$store.dispatch('set_clientSingleMessage' , form)
  }
}
</script>
