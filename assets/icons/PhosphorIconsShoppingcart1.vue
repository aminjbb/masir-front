<template>
  <svg
    :class="['phosphor-icons-shoppingcart-1', className]"
    fill="none"
    height="39"
    viewBox="0 0 39 39"
    width="39"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M28.0312 28.0312H10.6336L6.3832 4.66172C6.33347 4.38185 6.18748 4.12818 5.97049 3.94457C5.7535 3.76096 5.47916 3.65897 5.19492 3.65625H2.4375"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M12.1875 34.125C13.8702 34.125 15.2344 32.7609 15.2344 31.0781C15.2344 29.3954 13.8702 28.0312 12.1875 28.0312C10.5048 28.0312 9.14062 29.3954 9.14062 31.0781C9.14062 32.7609 10.5048 34.125 12.1875 34.125Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M28.0312 34.125C29.714 34.125 31.0781 32.7609 31.0781 31.0781C31.0781 29.3954 29.714 28.0312 28.0312 28.0312C26.3485 28.0312 24.9844 29.3954 24.9844 31.0781C24.9844 32.7609 26.3485 34.125 28.0312 34.125Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <path
      class="path"
      d="M9.52148 21.9375H28.6559C29.2256 21.9392 29.7777 21.7401 30.2151 21.3751C30.6525 21.0101 30.9473 20.5026 31.0477 19.9418L32.9062 9.75H7.3125"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: "PhosphorIconsShoppingcart1",
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
