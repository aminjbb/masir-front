<template>
  <svg
    :class="['phosphor-icons-caretcircleleft', className]"
    fill="none"
    height="29"
    viewBox="0 0 29 29"
    width="29"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M25.375 14.5C25.375 8.4939 20.5061 3.625 14.5 3.625C8.4939 3.625 3.625 8.4939 3.625 14.5C3.625 20.5061 8.4939 25.375 14.5 25.375C20.5061 25.375 25.375 20.5061 25.375 14.5Z"
      stroke="#0C385F"
      stroke-miterlimit="10"
      stroke-width="2"
    />
    <path
      class="path"
      d="M10.4219 12.6875L14.5 17.2187L18.5781 12.6875"
      stroke="#0C385F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "PhosphorIconsCaretcircleleft",
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
