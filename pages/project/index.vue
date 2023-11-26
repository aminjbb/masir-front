<template>
  <div class="main-container mt-15 pt-10 mt-md-0 pt-md-0">
    <div class="services-peymankar">
      <div class="div-2">
        <Navbar />
        <div class="d-flex justify-end mt-5">
          <v-menu class="mx-5" >
            <template v-slot:activator="{ on, attrs }">

              <v-btn v-bind="attrs" v-on="on" color="primaryYellow" width="199" height="55" class="br-10 ml-md-0 ml-5">
                <span class="primary--text t18400">
                  محدوده فعالیت
                </span>
                <span class="mr-3">
                <v-icon>
                  mdi-chevron-down-circle-outline
                </v-icon>
              </span>
              </v-btn>
            </template>
            <v-list class="px-15">
              <v-list-item
              >
                <v-list-item-title  >
                  <div class="text-center">
                    <span class="white--text">سعادت آباد</span>
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </div>
        <Overlap />
        <Overlap />
        <Overlap />
        <Overlap />
        <Overlap />
      </div>
    </div>
  </div>
</template>

<script>
import FeatherIconsChevronLeft from "~/assets/icons/FeatherIconsChevronLeft.vue";
import FeatherIconsChevronRight from "~/assets/icons/FeatherIconsChevronRight.vue";
import PhosphorIconsShoppingcart1 from "~/assets/icons/PhosphorIconsShoppingcart1.vue";
import PhosphorIconsUsercircle1 from "~/assets/icons/PhosphorIconsUsercircle1.vue";
import Div from "~/components/ServicesPeymankar/sections/Div.vue";
import DivWrapper from "~/components/ServicesPeymankar/sections/DivWrapper.vue";
import NamecandidateNameOverlapGroupScore10001 from "~/components/ServicesPeymankar/sections/NamecandidateNameOverlapGroupScore10001.vue";
import NamecandidateNameOverlapScore10001 from "~/components/ServicesPeymankar/sections/NamecandidateNameOverlapScore10001.vue";
import NamecandidateNameOverlapScore10002 from "~/components/ServicesPeymankar/sections/NamecandidateNameOverlapScore10002.vue";
import NamecandidateNameOverlapScore10003 from "~/components/ServicesPeymankar/sections/NamecandidateNameOverlapScore10003.vue";
import NamecandidateNameOverlapScore10004 from "~/components/ServicesPeymankar/sections/NamecandidateNameOverlapScore10004.vue";
import Navbar from "~/components/ServicesPeymankar/sections/Navbar.vue";
import Overlap from "~/components/ServicesPeymankar/sections/Overlap.vue";
import OverlapGroup from "~/components/ServicesPeymankar/sections/OverlapGroup.vue";
import OverlapGroupWrapper from "~/components/ServicesPeymankar/sections/OverlapGroupWrapper.vue";
import OverlapWrapper from "~/components/ServicesPeymankar/sections/OverlapWrapper.vue";
import SectionComponentNode from "~/components/ServicesPeymankar/sections/SectionComponentNode.vue";

export default {
  layout: "WithOutContact",
  components: {
    FeatherIconsChevronLeft,
    FeatherIconsChevronRight,
    PhosphorIconsShoppingcart1,
    PhosphorIconsUsercircle1,
    Div,
    DivWrapper,
    NamecandidateNameOverlapGroupScore10001,
    NamecandidateNameOverlapScore10001,
    NamecandidateNameOverlapScore10002,
    NamecandidateNameOverlapScore10003,
    NamecandidateNameOverlapScore10004,
    Navbar,
    Overlap,
    OverlapGroup,
    OverlapGroupWrapper,
    OverlapWrapper,
    SectionComponentNode,
  },
};
</script>

<style>
.services-peymankar {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.services-peymankar .div-2 {
  background-color: #ffffff;
  position: relative;
}

.services-peymankar .text-wrapper-73 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-74 {
  color: var(--primary-and-secondarysecondari);
  direction: rtl;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
}

.services-peymankar .text-wrapper-75 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-76 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-77 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .text-wrapper-78 {
  color: #000000;
  direction: rtl;
  font-size: var(--body-desktop-t-18-400-font-size);
  font-style: var(--body-desktop-t-18-400-font-style);
  font-weight: var(--body-desktop-t-18-400-font-weight);
  letter-spacing: var(--body-desktop-t-18-400-letter-spacing);
  line-height: var(--body-desktop-t-18-400-line-height);
  white-space: nowrap;
}

.services-peymankar .phosphor-icons-usercircle-1 {
  height: 39px !important;
  width: 39px !important;
}

.services-peymankar .phosphor-icons-shoppingcart-1 {
  height: 39px !important;
  width: 39px !important;
}

.services-peymankar .asset-2 {
  height: 22px;
  width: 196px;
}

.services-peymankar .feather-icons-wrapper {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 65px;
  width: 65px;
}

.services-peymankar .feather-icons {
  height: 32px !important;
  width: 32px !important;
}

.services-peymankar .feather-icons-chevron-left-wrapper {
  background-color: var(--monocolorcultured);
  border-radius: 10px;
  height: 65px;
  width: 65px;
}

.services-peymankar .feather-icons-chevron-left {
  height: 32px !important;
  width: 32px !important;
}
</style>
