<template>
  <!-- Verify wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-[50px] flex gap-[20px] lg:justify-center md:px-[90px] sm:py-[20px] sm:px-[45px]"
  >
    <!-- Aside wrapper Start -->
    <div
      class="max-w-[510px] w-full flex flex-col justify-center sm:max-w-[700px]"
    >
      <!-- Use Custom Logo -->
      <CustomLogo class="hidden sm:flex sm:mb-[20px] sm:h-[24px] sm:mx-auto" />

      <!-- Use Custom Button "Back" Start -->
      <CustomButton
        class="custom-text-xs font-bold mb-[15px] max-w-[140px] sm:mb-[35px]"
        @click="$router.push({ name: 'Login' })"
      >
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="rotate-90"
        />
        {{ $t("Verify.buttonBack") }}
      </CustomButton>
      <!-- Use Custom Button "Back" End -->

      <!-- Title Start -->
      <h1 class="custom-text-3xl font-bold mb-[16px] sm:text-center">
        {{ $t("Verify.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2
        class="custom-text-base font-regular text-gray mb-[15px] lg:mb-[50px] sm:mb-[30px] sm:text-center"
      >
        {{ $t("Verify.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper input Start -->
      <div class="mb-[40px] md:mb-[20px] sm:mb-[20px] sm:gap-[20px]">
        <!-- Use Custom Input Password "Code" Start -->
        <CustomInputPassword
          class="h-[56px] font-serrat font-medium text-green"
          :placeHolder="$t('Verify.code')"
        >
          <!-- Use slot for Name Start -->
          <template v-slot:input>
            {{ $t("Verify.code") }}
          </template>
          <!-- Use slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Code" End -->
      </div>
      <!-- Wrapper input End -->

      <!-- Wrapper for question and resend Start -->
      <div class="mb-[30px] w-full flex gap-[5px] md:mb-[15px] sm:mb-[15px]">
        <!-- Question Start -->
        <span class="custom-text-base font-bold">
          {{ $t("Verify.question") }}
        </span>
        <!-- Question End -->

        <!-- Use Router Link Start -->
        <router-link to="/register" class="custom-text-base font-bold text-red">
          {{ $t("Verify.resend") }}
        </router-link>
        <!-- Use Router Link End -->
      </div>
      <!-- Wrapper for question and resend End -->

      <!-- Use Custom Button "Verify Password" Start -->
      <CustomButton
        class="custom-text-sm font-bold w-full h-[48px] rounded-[4px] mb-[16px] justify-center bg-buttonGreen text-green sm:mb-[25px] sm:h-[45px]"
        @click="$router.push({ name: 'ChangePassword' })"
      >
        {{ $t("Verify.button") }}
      </CustomButton>
      <!-- Use Custom Button "Verify Password" End -->
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] w-full relative flex items-center sm:hidden">
      <!-- Use Custom Carousel -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Verify wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

// Slades Array for Carousel
const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
