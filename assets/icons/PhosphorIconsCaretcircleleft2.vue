<template>
  <svg
    :class="['phosphor-icons-caretcircleleft-2', className]"
    fill="none"
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
      :stroke="color"
      stroke-miterlimit="10"
      stroke-width="2"
    />
    <path
      class="path"
      d="M18 11.5L13 16L18 20.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "PhosphorIconsCaretcircleleft2",
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
