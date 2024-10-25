<template>
  <!-- Places wrapper Start -->
  <div
    class="max-w-[1230px] w-[100%] min-h-[280px] flex flex-col gap-6 mb-20 md:px-2 sm:px-2"
  >
    <!-- Places Header wrapper Start -->
    <div class="flex items-center justify-between">
      <!-- Text wrapper Start -->
      <div class="text_wrapper">
        <!-- Title Start -->
        <h1 class="custom-text-3xl text-black font-semibold">
          {{ $t("FlightSearch.Places.title") }}
        </h1>
        <!-- Title End -->

        <!-- Sub-Title Start -->
        <h2 class="custom-text-base text-custom-darkgray font-medium">
          {{ $t("FlightSearch.Places.sub-Title") }}
        </h2>
        <!-- Sub-Title End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Places Header button Start -->
      <CustomButton
        class="h-10 border-2 border-custom-lightgreen px-4  justify-center hidden lg:flex"
      >
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.button") }}
        </p>
      </CustomButton>
      <!-- Places Header button End -->
    </div>
    <!-- Places Header wrapper End -->

    <!-- Places Content wrapper Start -->
    <div class="places_background w-full h-[490px]"></div>
    <!-- Places Content wrapper End -->

    <!-- Places Header button Start -->
    <CustomButton
      class="h-10 border-2 border-custom-lightgreen px-4 lg:hidden justify-center"
    >
      <p class="custom-text-sm text-custom-darkgreen font-medium">
        {{ $t("FlightSearch.button") }}
      </p>
    </CustomButton>
    <!-- Places Header button End -->
  </div>
  <!-- Places wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.places_background {
  background-image: url("../../../assets/images/png/Flight/Flight-Places.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
