<template>
  <svg
    :class="['feather-icons-chevron-left', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M15 18L9 12L15 6"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "FeatherIconsChevronLeft",
  props: {
    color: {
      type: String,
      default: "#0C385F",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
