<template>
  <!-- Forgot Password wrapper Start -->
  <div class="auth-wrapper">
    <!-- Aside wrapper Start -->
    <div class="max-w-[510px] auth-aside-wrapper">
      <!-- USe Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Use Custom button "Back to login" Start -->
      <CustomButton
        class="back-button"
        @click="$router.push({ name: 'Login' })"
      >
        <!-- image for button -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="button-image"
        />
        <p class="button-text">{{ $t("ForgotPassword.buttonBack") }}</p>
      </CustomButton>
      <!-- Use Custom button "Back to login" End -->

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("ForgotPassword.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("ForgotPassword.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Use Custom Input "Email" Start -->
        <CustomInput
          class="auth-input-text"
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
        class="auth-button"
        @click="$router.push({ name: 'Verify' })"
      >
        <p class="auth-button-text">{{ $t("ForgotPassword.button") }}</p>
      </CustomButton>
      <!-- Use Custom button "Submit" End -->

      <!-- Text "Login With" wrapper Startc -->
      <div class="w-full flex items-center mb-[40px] md:mb-[15px] sm:mb-[35px]">
        <!-- Line Start -->
        <hr class="grow text-gray" />
        <!-- Line End -->

        <!-- Text Start -->
        <div class="login-with-tex">
          {{ $t("Login.orLoginWith") }}
        </div>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="login-with-line" />
        <!-- Line End -->
      </div>
      <!-- Text "Login With" wrapper End -->

      <!-- Use Login With Component -->
      <CustomLoginWith />
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Forgot Password wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { scrollTop } from "@/services/Scroll";

const slides = ref(["login-one", "login-two", "login-three"]);

scrollTop();
</script>
