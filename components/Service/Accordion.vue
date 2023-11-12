<template>
  <div>
    <div class="px-15 d-none d-md-block">
      <h2 class="mr-5 mb-5">پرسش‌های شما</h2>


      <button class="accordion"  @click="changeIcon(0)">
        <v-row justify="space-between" class="pa-4">
          <span class="secondary2--text t16300">
           چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
         </span>
          <span>
            <v-icon>{{icons[0]}}</v-icon>
         </span>
        </v-row>
      </button>
      <div class="panel">
        <p class="text--black t16400 lh-28">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین
          در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به
          روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
      </div>
      <button class="accordion mt-5" @click="changeIcon(1)">
        <v-row justify="space-between" class="pa-4">
          <span class="secondary2--text t16300">
           چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
         </span>
          <span>
            <v-icon>{{ icons[1] }}</v-icon>
         </span>
        </v-row>
      </button>
      <div class="panel">
        <p class="text--black t16400 lh-28">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین
          در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به
          روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
      </div>

    </div>
    <div class=" d-block d-md-none px-3 pl-4">
      <h6 class=" mr-3 mb-5">پرسش‌های شما</h6>
      <button class="accordion">
        <v-row justify="space-between" class="pa-4">
           <span class="secondary2--text t14400">
           چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
         </span>
          <span>
          <v-icon>{{ icons[0] }}</v-icon>
         </span>
        </v-row>
      </button>
      <div class="panel">
        <p class="text--black t14400 lh-28">
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین
          در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به
          روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
      </div>

    </div>
  </div>


</template>

<script>
  export default {
    data(){
      return{
        windowSize :1000,
        icons:['mdi-chevron-down-circle-outline' , 'mdi-chevron-down-circle-outline']
      }
    },
    mounted() {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";

          } else {
            panel.style.display = "block";

          }
        });
      }
    },

    beforeMount() {
      this.getWindowSize()
    },
    methods:{
      changeIcon(index){
        console.log(this.icons[index] === 'mdi-chevron-down-circle-outline')
        if (this.icons[index] === 'mdi-chevron-down-circle-outline') {
          this.icons[index] = 'mdi-chevron-up-circle-outline'
          console.log(this.icons)
        }
        else {
          this.icons[index] = 'mdi-chevron-down-circle-outline'
          console.log(this.icons)
        }
      },
      getWindowSize(){
        setTimeout(()=>{

          try {
            this.windowSize = screen.width
          }
          catch (e) {
            return e
          }
        },1000)
      }
    }
  }
</script>
