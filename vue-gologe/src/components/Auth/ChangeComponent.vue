<template>
  <!-- Change Password wrapper Start -->
  <div class="auth-wrapper">
    <!-- Aside wrapper Start -->
    <div class="auth-aside-wrapper">
      <!-- Use Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Change Password Title Start -->
      <h1 class="max-w-[510px] auth-aside-title">
        {{ $t("ChangePassword.title") }}
      </h1>
      <!-- Change Password Title End -->

      <!-- Change Password SubTitle Start -->
      <h2 class="auth-aside-text">
        {{ $t("ChangePassword.subTitle") }}
      </h2>
      <!-- Change Password SubTitle End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Use Custom Input Password "Create Password" Start -->
        <CustomInputPassword
          class="auth-input-text"
          :placeHolder="$t('ChangePassword.create')"
        >
          <!-- Use Slot for Name Start -->
          <template v-slot:input>
            {{ $t("ChangePassword.create") }}
          </template>
          <!-- Use Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "CreatecPassword" End -->

        <!-- Use Custom Input Password "Re-Enter Passwordc" Start -->
        <CustomInputPassword
          class="auth-input-text"
          :placeHolder="$t('ChangePassword.re-enter')"
        >
          <!-- Use Slot for Name Start -->
          <template v-slot:input>
            {{ $t("ChangePassword.re-enter") }}
          </template>
          <!-- Use Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Re-Enter Password" End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Change Password" Start -->
      <CustomButton class="auth-button">
        <p class="auth-button-text">
          {{ $t("ChangePassword.button") }}
        </p>
      </CustomButton>
      <!-- Use Custom Button "Change Password" End -->
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Change Password wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

// Slides Image Array for carousel
const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
