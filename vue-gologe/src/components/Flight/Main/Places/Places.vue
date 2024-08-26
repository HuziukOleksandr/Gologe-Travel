<template>
  <!-- Places wrapper Start -->
  <div
    class="max-w-[1230px] w-[100%] min-h-[280px] flex flex-col gap-[24px] mb-[80px] md:px-[10px] sm:px-[10px]"
  >
    <!-- Places Header wrapper Start -->
    <div class="flex items-center justify-between">
      <!-- Text wrapper Start -->
      <div class="text_wrapper">
        <!-- Title Start -->
        <h1 class="custom-text-3xl font-semibold text-black">
          {{ $t("FlightSearch.Places.title") }}
        </h1>
        <!-- Title End -->

        <!-- Sub-Title Start -->
        <h2 class="custom-text-base font-regular text-gray">
          {{ $t("FlightSearch.Places.sub-Title") }}
        </h2>
        <!-- Sub-Title End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Places Header button Start -->
      <CustomButton
        class="h-[40px] border-[2px] border-buttonGreen px-[16px] md:hidden sm:hidden"
      >
        {{ $t("FlightSearch.button") }}
      </CustomButton>
      <!-- Places Header button End -->
    </div>
    <!-- Places Header wrapper End -->

    <!-- Places Content wrapper Start -->
    <div class="places_background w-full h-[490px]"></div>
    <!-- Places Content wrapper End -->

    <!-- Places Header button Start -->
    <CustomButton
      class="h-[40px] border-[2px] border-buttonGreen px-[16px] lg:hidden justify-center"
    >
      {{ $t("FlightSearch.button") }}
    </CustomButton>
    <!-- Places Header button End -->
  </div>
  <!-- Places wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.places_background {
  background-image: url("../../../../assets/images/png/Flight/Flight-Places.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
