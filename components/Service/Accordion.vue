<template>
 <div>
   <h2 class="mr-5">پرسش‌های شما</h2>

   <button class="accordion">
     <span class="secondary--text t16400">
       چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
     </span>
   </button>
   <div class="panel">
      <p class="text--black t16400">
        امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین
        در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به
        روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
      </p>
   </div>
 <button class="accordion">
     <span class="secondary--text t16400">
       چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
     </span>
   </button>
   <div class="panel">
      <p class="text--black t16400">
        امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین
        در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به
        روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
      </p>
   </div>


 </div>

</template>

<script>
  export default {
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
    }
  }
</script>
