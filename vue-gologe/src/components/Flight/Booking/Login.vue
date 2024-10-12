<template>
  <!-- Login wrapper Start -->
  <section class="booking-section-wrapper min-h-[455px]">
    <!-- Input wrapper Start -->
    <div class="flex flex-col gap-4">
      <!-- Header Start -->
      <h1 class="custom-text-xl text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.title") }}
      </h1>
      <!-- Header End -->
      <!-- Input Start -->
      <CustomInput
        class="custom-text-sm text-custom-darkgreen font-medium"
        :placeHolder="$t('FlightBooking.Login.placeholder')"
        type="text"
      >
      </CustomInput>
      <!-- Input End -->
      <!-- Text Start -->
      <p class="custom-text-sm text-custom-darkgreen font-medium">
        {{ $t("FlightBooking.Login.text") }}
      </p>
      <!-- Text End -->
    </div>
    <!-- Input wrapper End -->

    <!-- Use Custom Buttom "Continue" Start -->
    <CustomButton class="w-full h-12 bg-custom-lightgreen flex justify-center">
      <!-- Button Text Start -->
      <p class="custom-text-base text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.button") }}
      </p>
      <!-- Button Text End -->
    </CustomButton>
    <!-- Use Custom Buttom "Continue" End -->

    <!-- Text "Login With" wrapper Startc -->
    <div class="w-full flex items-center mb-4 lg:mb-6">
      <!-- Line Start -->
      <hr class="grow text-custom-darkgray" />
      <!-- Line End -->

      <!-- Text Start -->
      <div class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
        {{ $t("FlightBooking.Login.or") }}
      </div>
      <!-- Text End -->

      <!-- Line Start -->
      <hr class="grow text-custom-darkgray" />
      <!-- Line End -->
    </div>
    <!-- Text "Login With" wrapper End -->

    <!-- Use Login With Component -->
    <CustomLoginWith />

    <!-- Use Custom Buttom "Continue" Start -->
    <CustomButton
      class="w-full h-12 flex justify-center border-custom-lightgreen border-2"
    >
      <!-- Image Start -->
      <img src="@/assets/images/svg/UI/mail.svg" alt="mail" />
      <!-- Image End -->
      <!-- Button Text Start -->
      <p class="custom-text-base text-custom-darkgreen font-semibold">
        {{ $t("FlightBooking.Login.withEmail") }}
      </p>
      <!-- Button Text End -->
    </CustomButton>
    <!-- Use Custom Buttom "Continue" End -->
  </section>
  <!-- Login wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
