<template>
  <!-- Header wrapper Start -->
  <div class="header_wrapper">
    <!-- Header Content Start -->
    <div class="header_content">
      <!-- Use Navigation UI Component -->
      <CustomNavigation
        :class="
          route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
        "
      />
      <!-- Use Logo UI Component -->

      <!-- Use Logo UI Component -->
      <CustomLogo class="sm:hidden" />

      <!-- Header Auth wrapper Start -->
      <div class="header-auth-wrapper">

        <!-- Use component if User not Login -->
        <HeaderLoggedOff/>
        <!-- Use component if User Is LoggedIn -->
        <HeaderLoggenIn/>
        <!-- Use Localization Component -->
        <Localization />
      </div>
      <!-- Header Auth wrapper End -->
    </div>
    <!-- Header Content End -->
  </div>
  <!-- Header wrapper End -->
</template>

<script setup lang="ts">
import HeaderLoggedOff from './HeaderLoggedOff.vue';
import HeaderLoggenIn from './HeaderLoggenIn.vue'
import Localization from "./Localization.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.header_wrapper {
  @apply max-w-large-width w-full h-20 mx-auto px-[104px];

  @screen md {
    @apply px-12;
  }

  @screen sm {
    @apply px-12 h-[60px];
  }
  .header_content {
    @apply w-full h-full flex  items-center justify-between;

    .header-auth-wrapper {
      @apply max-w-[400px] w-full h-full flex items-center justify-end gap-4;


    }
  }
}
</style>
