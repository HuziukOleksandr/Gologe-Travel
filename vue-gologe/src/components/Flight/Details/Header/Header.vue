<template>
  <!-- Header wrapper Start -->
  <div class="w-full h-[105px] flex justify-between">
    <!-- Aside wrapper Start -->
    <div class="flex flex-col justify-between">
      <!-- Title Start -->
      <h1 class="custom-text-2xl text-green font-semibold">
        Emirates A380 Airbus
      </h1>
      <!-- Title End -->
      <!-- Location Start -->
      <div class="flex gap-[8px]">
        <!-- Icon -->
        <img src="@/assets/images/svg/UI/location.svg" alt="location" />
        <!-- Location text Start -->
        <p class="custom-text-sm text-green font-medium">
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </p>
        <!-- Location text End -->
      </div>
      <!-- Location End -->

      <!-- Rate Start -->
      <div class="flex items-center gap-[8px]">
        <!-- Mark Start -->
        <div
          class="h-[40px] flex items-center px-[11px] border-[2px] border-lightGreen rounded-[4px]"
        >
          <!-- Text Start -->
          <p class="custom-text-xs text-green font-medium">4.3</p>
          <!-- Text End -->
        </div>
        <!-- Mark End -->

        <!-- Rate text Start -->
        <div class="flex gap-[4px]">
          <p class="custom-text-xs text-green font-semibold">
            {{ $t("FlightDetails.Header.rate") }}
          </p>
          <p class="custom-text-xs text-green font-medium">54</p>
          <p class="custom-text-xs text-green font-medium">
            {{ $t("FlightDetails.Header.reviews") }}
          </p>
        </div>
        <!-- Rate text End -->
      </div>
      <!-- Rate end -->
    </div>
    <!-- Aside wrapper end -->

    <!-- Right side wrapper Start -->
    <div class="max-w-[276px] w-full flex flex-col justify-between">
      <!-- Price text Start -->
      <p class="custom-text-3xl self-end text-red font-semibold">$204</p>
      <!-- Price text End -->
      <!-- Buttons wrapper Start -->
      <div class="flex gap-[15px]">
        <!-- Button "Favorite" Start -->
        <CustomButton class="h-[48px] p-[14px] border-[2px] border-lightGreen">
          <img src="@/assets/images/svg/UI/heart.svg" alt="heart" />
        </CustomButton>
        <!-- Button "Favorite" End -->

        <!-- Button "Share" Start -->
        <CustomButton class="h-[48px] p-[14px] border-[2px] border-lightGreen">
          <img src="@/assets/images/svg/UI/share.svg" alt="share" />
        </CustomButton>
        <!-- Button "Share" End -->

        <!-- Button "Book" Start -->
        <CustomButton
          class="max-w-[150px] w-full h-[48px] bg-buttonGreen flex justify-center"
        >
          <p class="custom-text-sm text-green font-semibold">
            {{ $t("FlightDetails.Header.button") }}
          </p>
        </CustomButton>
        <!-- Button "Book" End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Right side wrapper End -->
  </div>
  <!-- Header wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
