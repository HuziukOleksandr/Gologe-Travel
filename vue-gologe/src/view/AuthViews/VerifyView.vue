<template>
  <!-- Verify wrapper Start -->
  <div class="auth-wrapper">
    <!-- Aside wrapper Start -->
    <div class="max-w-[510px] auth-aside-wrapper">
      <!-- Use Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Use Custom Button "Back" Start -->
      <CustomButton
        class="back-button"
        @click="$router.push({ name: 'Login' })"
      >
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="button-image"
        />
        <p class="button-text">
          {{ $t("Verify.buttonBack") }}
        </p>
      </CustomButton>
      <!-- Use Custom Button "Back" End -->

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("Verify.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("Verify.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper input Start -->
      <div class="lg:mb-10 mb-5 sm:gap-5">
        <!-- Use Custom Input Password "Code" Start -->
        <CustomInputPassword class="h-14" :placeHolder="$t('Verify.code')">
          <!-- Use slot for Name Start -->
          <template v-slot:input>
            <p class="font-serrat font-medium text-custom-darkgreen">
              {{ $t("Verify.code") }}
            </p>
          </template>
          <!-- Use slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Code" End -->
      </div>
      <!-- Wrapper input End -->

      <!-- Wrapper for question and resend Start -->
      <div class="w-full flex gap-1 mb-4 lg:mb-8">
        <!-- Question Start -->
        <span class="custom-text-base font-semibold">
          {{ $t("Verify.question") }}
        </span>
        <!-- Question End -->

        <!-- Use Router Link Start -->
        <router-link
          to="/register"
          class="custom-text-base font-bold text-custom-red"
        >
          {{ $t("Verify.resend") }}
        </router-link>
        <!-- Use Router Link End -->
      </div>
      <!-- Wrapper for question and resend End -->

      <!-- Use Custom Button "Verify Password" Start -->
      <CustomButton
        class="auth-button"
        @click="$router.push({ name: 'ChangePassword' })"
      >
        <p class="auth-button-text">
          {{ $t("Verify.button") }}
        </p>
      </CustomButton>
      <!-- Use Custom Button "Verify Password" End -->
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] auth-carousel-wrapper">
      <!-- Use Custom Carousel -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Verify wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { scrollTop } from "@/services/Scroll";

const slides = ref(["login-one", "login-two", "login-three"]);

scrollTop();
</script>
