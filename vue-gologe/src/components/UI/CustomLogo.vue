<template>
  <img
    src="@/assets/images/svg/logo/logo.svg"
    alt="Logo"
    class="logo"
    @click="$router.push({ name: 'Landing' })"
    v-if="route.name == 'Landing'"
  />
  <img
    src="@/assets/images/svg/logo/logo-black.svg"
    alt="Logo"
    class="logo"
    @click="$router.push({ name: 'Landing' })"
    v-else
  />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.logo {
  @apply h-8;

  &:hover {
    @apply transition duration-500 transform hover:scale-105 cursor-pointer;
  }
}
</style>
