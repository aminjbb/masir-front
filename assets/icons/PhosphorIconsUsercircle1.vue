<template>
  <svg
    :class="['phosphor-icons-usercircle-1', className]"
    fill="none"
    height="39"
    viewBox="0 0 39 39"
    width="39"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M19.5 34.125C27.5772 34.125 34.125 27.5772 34.125 19.5C34.125 11.4228 27.5772 4.875 19.5 4.875C11.4228 4.875 4.875 11.4228 4.875 19.5C4.875 27.5772 11.4228 34.125 19.5 34.125Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M19.5 24.375C22.8655 24.375 25.5938 21.6467 25.5938 18.2812C25.5938 14.9158 22.8655 12.1875 19.5 12.1875C16.1345 12.1875 13.4062 14.9158 13.4062 18.2812C13.4062 21.6467 16.1345 24.375 19.5 24.375Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M9.71875 30.3773C10.6357 28.5711 12.0349 27.0542 13.7613 25.9946C15.4876 24.9349 17.4736 24.374 19.4992 24.374C21.5248 24.374 23.5108 24.9349 25.2372 25.9946C26.9635 27.0542 28.3627 28.5711 29.2797 30.3773"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "PhosphorIconsUsercircle1",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
