<template>
  <div>
     <div class="main-container pt-10">
        <div class="user-profile__chat-card mt-15 position__relative">
          <div class="user-profile__chat-user-card">
            <div class="px-10 headerPage header-chat d-flex align-center">
              <v-text-field
                class="mt-7"
                outlined
                color="black"
                placeholder="جست‌و‌جو کنید"
                append-icon="mdi-magnify"
              ></v-text-field>
            </div>
            <v-divider></v-divider>
            <ChatCard activeClass="active-chat" />
            <ChatCard activeClass="unactive-chat"/>
          </div>

          <div class="user-profile__chat-user-chat  position__relative">
            <div class=" header-chat d-flex align-center px-10">
              <span><img src="@/assets/img/UserCircle.svg" alt=""></span>
              <span class="t16400 primary--text mr-5">میترا حجار</span>
            </div>
            <v-divider></v-divider>
            <MyMessage/>
            <UserMessage/>
            <div style="    position: absolute;left: 0;right: 0;margin: 0 15px;bottom: 0">
              <div class="messageSend pt-5 position__relative">
                <v-text-field outlined ></v-text-field>
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
export default {
  components:{
    MassageCard,
    ChatCard,
    MyMessage,
    UserMessage
  }
}
</script>
