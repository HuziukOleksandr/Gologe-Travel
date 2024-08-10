<template>
  <!-- Forgot Password wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-[50px] flex gap-[20px] lg:justify-center md:px-[90px] sm:py-[20px] sm:px-[45px]"
  >
    <!-- Aside wrapper Start -->
    <div
      class="max-w-[510px] w-full flex flex-col justify-center sm:max-w-[700px]"
    >
      <!-- USe Custom Logo -->
      <CustomLogo class="hidden sm:flex sm:mb-[20px] sm:h-[24px] sm:mx-auto" />

      <!-- Use Custom button "Back to login" Start -->
      <CustomButton
        class="custom-text-xs font-bold mb-[25px] max-w-[140px]"
        @click="$router.push({ name: 'Login' })"
      >
        <!-- image for button -->
        <img
          src="@/assets/images/chevron-down.svg"
          alt="hotel"
          class="rotate-90"
        />
        {{ $t("ForgotPassword.buttonBack") }}
      </CustomButton>
      <!-- Use Custom button "Back to login" End -->

      <!-- Title Start -->
      <h1 class="custom-text-3xl font-bold mb-[16px] sm:text-center">
        {{ $t("ForgotPassword.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2
        class="custom-text-base font-regular text-gray mb-[15px] lg:mb-[50px] sm:mb-[30px] sm:text-center"
      >
        {{ $t("ForgotPassword.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="mb-[40px] md:mb-[20px] sm:mb-[20px] sm:gap-[20px]">
        <!-- Use Custom Input "Email" Start -->
        <CustomInput
          class="font-serrat font-medium text-green"
          type="email"
          :placeHolder="$t('ForgotPassword.email')"
        >
          <template v-slot:input>
            {{ $t("ForgotPassword.email") }}
          </template>
        </CustomInput>
        <!-- Use Custom Input "Email" End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom button "Submit" Start -->
      <CustomButton
        class="custom-text-sm font-bold w-full h-[48px] rounded-[4px] mb-[16px] justify-center bg-buttonGreen text-green sm:h-[45px] sm:mb-[24px]"
        @click="$router.push({ name: 'Verify' })"
      >
        {{ $t("ForgotPassword.button") }}
      </CustomButton>
      <!-- Use Custom button "Submit" End -->

      <!-- Text "Login With" wrapper Startc -->
      <div class="w-full flex items-center mb-[40px] md:mb-[15px] sm:mb-[35px]">
        <!-- Line Start -->
        <hr class="grow text-gray" />
        <!-- Line End -->

        <!-- Text Start -->
        <div class="custom-text-sm px-[10px] grow-0 text-gray bg-background">
          {{ $t("Login.orLoginWith") }}
        </div>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-gray" />
        <!-- Line End -->
      </div>
      <!-- Text "Login With" wrapper End -->

      <!-- Use Login With Component -->
      <LoginWith />
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] w-full relative flex items-center sm:hidden">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Forgot Password wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginWith from "../Login/LoginWith.vue";

const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
