<template>
  <svg
    :class="['phosphor-icons-instagramlogo-1', className]"
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
      stroke="black"
      stroke-miterlimit="10"
      stroke-width="2"
    />
    <path
      class="path"
      d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  name: "PhosphorIconsInstagramlogo1",
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
