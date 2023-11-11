<template>
  <svg
    :class="['feather-icons-chevron-right', className]"
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M12 24L20 16L12 8"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "FeatherIconsChevronRight",
  props: {
    color: {
      type: String,
      default: "black",
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
