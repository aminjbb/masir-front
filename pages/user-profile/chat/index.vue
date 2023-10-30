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
            <ChatCard/>
          </div>

          <div class="user-profile__chat-user-chat">
            <div class=" header-chat d-flex align-center px-10">
              <span><img src="@/assets/img/UserCircle.svg" alt=""></span>
              <span class="t16400 primary--text mr-5">میترا حجار</span>
            </div>
            <v-divider></v-divider>
            <MyMessage/>
            <UserMessage/>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import ChatCard from '~/components/UserProfile/ChatCard.vue'
import MyMessage from '~/components/UserProfile/MyMessage.vue'
import UserMessage from '~/components/UserProfile/UserMessage.vue'
export default {
  components:{
    ChatCard,
    MyMessage,
    UserMessage
  }
}
</script>
