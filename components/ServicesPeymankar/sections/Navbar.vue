<template>
  <div>
    <div class="navbar d-none justify-start align-center mt-16 d-md-flex scroller">
      <div class="overlap-30 mx-5 d-flex justify-center align-center">
        <div class="text-wrapper-49">خاک برداری</div>
      </div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8 ml-15  d-flex justify-center align-center">خاک برداری</div>
      <PhosphorIconsCaretcircleleft2 className="ml-5" class="phosphor-icons-caretcircleleft-2" color="#0C385F" />
    </div>
    <div class="navbar-mobile d-flex justify-start align-center mt-16 mx-4 d-md-none scroller">
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8  d-flex justify-center align-center">خاک برداری</div>
      <div class="text-wrapper-50 mx-8 ml-15  d-flex justify-center align-center">خاک برداری</div>
      <PhosphorIconsCaretcircleleft2 class="phosphor-icons-caretcircleleft-2" color="#0C385F" />
    </div>
  </div>

</template>

<script>
import PhosphorIconsCaretcircleleft2 from "~/assets/icons/PhosphorIconsCaretcircleleft2.vue";

export default {
  name: "Navbar",
  components: {
    PhosphorIconsCaretcircleleft2,
  },
};
</script>

<style>
.navbar {
  background-color: var(--monocolorcultured);
  border: 1px solid;
  border-color: var(--monocolorchinese-white);
  border-radius: 15px;
  height: 89px;

}
.navbar-mobile{
  background-color: var(--monocolorcultured);
  border: 1px solid;
  border-color: var(--monocolorchinese-white);
  border-radius: 15px;
  height: 89px;
  width: 332px;
}

.navbar .overlap-30 {
  background-color: var(--primary-and-secondaryprimary);
  border-radius: 10px;
  height: 50px;
  width: 132px;
}

.navbar .text-wrapper-49 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .text-wrapper-50 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;

}
.navbar-mobile .text-wrapper-50 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;

}

.navbar .text-wrapper-51 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .text-wrapper-52 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .text-wrapper-53 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .text-wrapper-54 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .text-wrapper-55 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;
  white-space: nowrap;
}

.navbar .phosphor-icons-caretcircleleft-2 {
  height: 32px !important;
  width: 32px !important;
}
</style>
