<template>
 <div v-if="windowSize >= 955" class="px-15">
   <h2 class="mr-5 mb-15">پرسش‌های شما</h2>

   <button class="accordion">
   <v-row justify="space-between" class="pa-4">
       <span class="secondary2--text t16300">
       چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
     </span>
     <span>

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

</template>

<script>
  export default {
    data(){
      return{
        windowSize :1000
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
