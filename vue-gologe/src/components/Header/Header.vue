<template>
  <!-- Header wrapper Start -->
  <div class="wrapper_header">
    <!-- Use Navigation UI Component -->
    <CustomNavigation
      :class="
        route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
      "
    />

    <!-- Use Logo UI Component -->
    <CustomLogo class="sm:hidden" />

    <!-- Header-Content wrapper Start -->
    <div class="wrapper_content">
      <!-- Use UI Button component, Login button Start -->
      <CustomButton
        :class="
          route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
        "
        class="button"
        @click="$router.push({ name: 'Login' })"
      >
        <p class="button-text">{{ $t("Header.login") }}</p>
      </CustomButton>
      <!-- Use UI Button component, Login button End -->

      <!-- Use UI Button component, Register button Start -->
      <CustomButton
        :class="
          route.name !== 'Landing'
            ? 'text-default bg-custom-darkgreen'
            : 'text-custom-darkgreen bg-default'
        "
        class="button"
        @click="$router.push({ name: 'Register' })"
      >
        <p class="button-text">{{ $t("Header.signUp") }}</p>
      </CustomButton>
      <!-- Use UI Button component, Register button End -->

      <!-- Use Localization Component -->
      <Localization />

      <!-- Image for sm media -->
      <img
        src="@/assets/images/svg/UI/login-white.svg"
        alt="login-white"
        class="w-[25px] lg:hidden"
        :class="route.name !== 'Landing' ? 'hidden' : 'block'"
      />

      <!-- Dark Image for sm media -->
      <img
        src="@/assets/images/svg/UI/login-black.svg"
        alt="login-black"
        class="w-[25px] lg:hidden"
        :class="route.name !== 'Landing' ? 'block' : 'hidden'"
      />
    </div>
    <!-- Header-Content wrapper End -->
  </div>
  <!-- Header wrapper End -->
</template>

<script setup lang="ts">
import Localization from "./Localization.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.wrapper_header {
  @apply w-full h-[90px] m-auto flex justify-between items-center
	lg:px-28 md:px-24 sm:px-10 sm:h-16;

  .wrapper_content {
    @apply flex items-center justify-between gap-2 md:gap-2.5 sm:gap-1;

    .button {
      @apply hidden h-12 px-6 lg:block;

      .button-text {
        @apply font-serrat text-sm font-semibold;
      }
    }
  }
}

.logo:hover {
  transition-duration: 500ms;
  cursor: pointer;
  transform: scale(1.02);
}
</style>
