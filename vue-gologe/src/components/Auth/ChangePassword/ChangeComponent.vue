<template>
  <!-- Change Password wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-[50px] flex gap-[20px] lg:justify-center md:px-[90px] sm:py-[20px] sm:px-[45px]"
  >
    <!-- Aside wrapper Start -->
    <div
      class="max-w-[510px] w-full flex flex-col justify-center sm:max-w-[700px]"
    >
      <!-- Use Custom Logo -->
      <CustomLogo class="hidden sm:flex sm:mb-[10px] sm:h-[24px] sm:mx-auto" />

      <!-- Change Password Title Start -->
      <h1 class="custom-text-4xl font-bold mb-[16px] sm:text-center">
        {{ $t("ChangePassword.title") }}
      </h1>
      <!-- Change Password Title End -->

      <!-- Change Password SubTitle Start -->
      <h2
        class="custom-text-base font-regular text-gray mb-[15px] lg:mb-[50px] sm:text-center"
      >
        {{ $t("ChangePassword.subTitle") }}
      </h2>
      <!-- Change Password SubTitle End -->

      <!-- Wrapper for Inputs Start -->
      <div
        class="flex flex-col gap-[24px] mb-[40px] md:mb-[20px] sm:mb-[10px] sm:gap-[20px]"
      >
        <!-- Use Custom Input Password "Create Password" Start -->
        <CustomInputPassword
          class="font-serrat font-medium text-green"
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
          class="font-serrat font-medium text-green"
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
      <CustomButton
        class="custom-text-sm font-bold w-full h-[48px] rounded-[4px] mb-[16px] justify-center bg-buttonGreen text-green sm:h-[45px]"
      >
        {{ $t("ChangePassword.button") }}
      </CustomButton>
      <!-- Use Custom Button "Change Password" End -->
    </div>
    <!-- Aside wrapper End -->

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] w-full relative flex items-center sm:hidden">
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
