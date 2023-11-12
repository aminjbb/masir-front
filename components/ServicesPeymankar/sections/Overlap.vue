<template>
  <div >
    <div class="overlap d-md-flex justify-space-between align-center my-10 d-none">
      <div class="d-flex justify-start align-center">
        <div class="text-wrapper-5 ml-15 mr-10">پروژه حدادیان</div>
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper">خاک برداری</div>
        </div>
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper-2">تهران</div>
        </div>
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper-3">سعادت آباد</div>
        </div>
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper-4">۱ بهمن ماه ۱۴۰۲</div>
        </div>
      </div>

      <div class="text-wrapper-6 ml-15 dana-fa"> ۱۲۵,۰۰۰,۰۰۰ تومان</div>
    </div>
    <div class="overlap d-md-none  my-10 d-block py-8">
      <div class="d-flex justify-space-between align-center px-5 w-100">
          <span class="primary--text t24600">
            پروژه حدادیان
          </span>
        <span  class="primary--text t14400">
            ۱ بهمن ماه ۱۴۰۲
          </span>
      </div>
      <div class="px-5 mt-3">
        <span class="primary--text t18400 ">
          خاک برداری
        </span>
      </div>
      <div class="d-flex mt-3">
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper  px-5">تهران</div>
        </div>
        <div class="overlap-group-2 d-flex justify-center align-center mx-3">
          <div class="text-wrapper  px-5">سعادت آباد</div>
        </div>
      </div>
      <div class="text-wrapper-6 ml-15 mt-7 dana-fa">
      <span class="t24600">
        ۱۲۵,۰۰۰,۰۰۰ تومان
      </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Overlap",
};
</script>

<style>
.overlap {
  background-color: var(--monocolorwhite);
  border: 1px solid;
  border-color: var(--monocolorchinese-white);
  border-radius: 40px;
  box-shadow: 0px 4px 8px #0000001a;
  min-height: 137px;
}

.overlap .overlap-group-2 {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 50px;
}


.overlap .text-wrapper {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;

  letter-spacing: 0;
  line-height: 40px;
  text-align: justify;

  white-space: nowrap;
}

.overlap .overlap-group-3 {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 50px;
  width: 74px;
}

.overlap .text-wrapper-2 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  text-align: left;
  white-space: nowrap;
}

.overlap .overlap-group-4 {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 50px;
  width: 113px;
}

.overlap .text-wrapper-3 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  text-align: left;
  white-space: nowrap;
}

.overlap .overlap-group-5 {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 50px;
  width: 145px;
}

.overlap .text-wrapper-4 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  text-align: left;
  white-space: nowrap;
}

.overlap .text-wrapper-5 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: var(--headline-desktop-t-24-600-font-size);
  font-style: var(--headline-desktop-t-24-600-font-style);
  font-weight: var(--headline-desktop-t-24-600-font-weight);
  letter-spacing: var(--headline-desktop-t-24-600-letter-spacing);
  line-height: var(--headline-desktop-t-24-600-line-height);
  text-align: left;
  white-space: nowrap;
}

.overlap .text-wrapper-6 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: var(--headline-desktop-t-24-600-font-size);
  font-style: var(--headline-desktop-t-24-600-font-style);
  font-weight: var(--headline-desktop-t-24-600-font-weight);
  letter-spacing: var(--headline-desktop-t-24-600-letter-spacing);
  line-height: var(--headline-desktop-t-24-600-line-height);
  text-align: left;
  white-space: nowrap;
}
</style>
