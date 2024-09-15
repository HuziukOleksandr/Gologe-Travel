<template>
  <!-- Login wrapper Start -->
  <div
    class="max-w-[790px] w-full min-h-[455px] shadow-2xl rounded-[12px] p-[16px] flex flex-col justify-between gap-[24px]"
  >
    <!-- Input wrapper Start -->
    <div class="flex flex-col gap-[16px]">
      <!-- Header Start -->
      <h1 class="custom-text-xl text-green font-semibold">
        {{ $t("FlightBooking.Login.title") }}
      </h1>
      <!-- Header End -->
      <!-- Input Start -->
      <CustomInput
        class="font-serrat font-medium text-green"
        :placeHolder="$t('FlightBooking.Login.placeholder')"
        type="text"
      >
      </CustomInput>
      <!-- Input End -->
      <!-- Text Start -->
      <p class="custom-text-sm text-green font-medium">
        {{ $t("FlightBooking.Login.text") }}
      </p>
      <!-- Text End -->
    </div>
    <!-- Input wrapper End -->

    <!-- Use Custom Buttom "Continue" Start -->
    <CustomButton class="w-full h-[48px] bg-buttonGreen flex justify-center">
      <!-- Button Text Start -->
      <p class="custom-text-base text-green font-semibold">
        {{ $t("FlightBooking.Login.button") }}
      </p>
      <!-- Button Text End -->
    </CustomButton>
    <!-- Use Custom Buttom "Continue" End -->

    <!-- Text "Login With" wrapper Startc -->
    <div class="w-full flex items-center mb-[24px] md:mb-[15px] sm:mb-[15px]">
      <!-- Line Start -->
      <hr class="grow text-gray" />
      <!-- Line End -->

      <!-- Text Start -->
      <div class="custom-text-sm px-[10px] grow-0 text-gray bg-background">
        {{ $t("FlightBooking.Login.or") }}
      </div>
      <!-- Text End -->

      <!-- Line Start -->
      <hr class="grow text-gray" />
      <!-- Line End -->
    </div>
    <!-- Text "Login With" wrapper End -->

     <!-- Use Login With Component -->
     <LoginWith />

    <!-- Use Custom Buttom "Continue" Start -->
    <CustomButton
      class="w-full h-[48px] flex justify-center border-buttonGreen border-[2px]"
    >
      <!-- Image Start -->
      <img src="@/assets/images/svg/UI/mail.svg" alt="mail" />
      <!-- Image End -->
      <!-- Button Text Start -->
      <p class="custom-text-base text-green font-semibold">
        {{ $t("FlightBooking.Login.withEmail") }}
      </p>
      <!-- Button Text End -->
    </CustomButton>
    <!-- Use Custom Buttom "Continue" End -->
  </div>
  <!-- Login wrapper End -->
</template>

<script setup lang="ts">
import LoginWith from "./LoginWith.vue"

</script>

<style scoped></style>
