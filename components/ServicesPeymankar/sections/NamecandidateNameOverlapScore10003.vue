<template>
  <div class="namecandidate-name-overlap-score-1000-3">
    <FeatherIconsSearch class="feather-icons-search" />
    <div class="text-wrapper-64">جست‌و‌جو کنید</div>
  </div>
</template>

<script>
import FeatherIconsSearch from "~/assets/icons/FeatherIconsSearch.vue";

export default {
  name: "NamecandidateNameOverlapScore10003",
  components: {
    FeatherIconsSearch,
  },
};
</script>

<style>
.namecandidate-name-overlap-score-1000-3 {
  background-color: var(--monocolorwhite);
  border: 1px solid;
  border-color: var(--primary-and-secondarysecondari);
  border-radius: 22px;
  height: 44px;
  left: 348px;
  position: absolute;
  top: 36px;
  width: 355px;
}

.namecandidate-name-overlap-score-1000-3 .feather-icons-search {
  height: 24px !important;
  left: 12px !important;
  position: absolute !important;
  top: 9px !important;
  width: 24px !important;
}

.namecandidate-name-overlap-score-1000-3 .text-wrapper-64 {
  color: #000000;
  direction: rtl;
  font-family: var(--body-desktop-t-16-400-font-family);
  font-size: var(--body-desktop-t-16-400-font-size);
  font-style: var(--body-desktop-t-16-400-font-style);
  font-weight: var(--body-desktop-t-16-400-font-weight);
  left: 237px;
  letter-spacing: var(--body-desktop-t-16-400-letter-spacing);
  line-height: var(--body-desktop-t-16-400-line-height);
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}
</style>
