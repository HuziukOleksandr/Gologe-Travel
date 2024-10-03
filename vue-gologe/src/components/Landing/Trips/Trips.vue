<template>
  <!-- Trips Start -->
  <div class="landing-component-wrapper">
    <!-- Trips wrapper Start -->
    <div class="max-w-[1230px] w-full min-h-[280px] flex flex-col gap-10">
      <!-- Trips Header wrapper Start -->
      <div
        class="flex items-center justify-between sm:flex-col sm:gap-4 sm:items-start"
      >
        <!-- Text wrapper Start -->
        <div class="flex flex-col gap-[15px]">
          <!-- Title Start -->
          <h1 class="custom-text-3xl font-semibold text-black">
            {{ $t("Landing.Trips.title") }}
          </h1>
          <!-- Title End -->

          <!-- Sub-Title Start -->
          <h2 class="custom-text-base font-medium text-custom-darkgray">
            {{ $t("Landing.Trips.sub-title") }}
          </h2>
          <!-- Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Trip Header button Start -->
        <CustomButton class="landing-component-button sm:hidden">
          <p class="landing-component-button-text">
            {{ $t("Landing.Trips.button") }}
          </p>
        </CustomButton>
        <!-- Trip Header button End -->
      </div>
      <!-- Trips Header wrapper End -->

      <!-- Cards wrapper Start -->
      <div class="flex flex-wrap gap-[30px]">
        <!-- User Card Component -->
        <Card :name="cards" />
      </div>
      <!-- Cerds wrapper End -->

      <!-- Trip Header button Start -->
      <CustomButton
        class="landing-component-button hidden sm:flex sm:justify-center"
      >
      <p class="landing-component-button-text">
            {{ $t("Landing.Trips.button") }}
          </p>
      </CustomButton>
      <!-- Trip Header button End -->

      <!-- Content for Large Cards wrapper Start -->
      <div
        class="w-full flex flex-wrap justify-between md:justify-center md:gap-4 sm:gap-3"
      >
        <!-- Use Flight Component -->
        <Flight />

        <!-- Use Hotel Component -->
        <Hotel />
      </div>
      <!-- Content for Large Cards wrapper End -->
    </div>
    <!-- Trips wrapper End -->
  </div>
  <!-- Trips Start -->
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Hotel from "./Hotel.vue";
import Flight from "./Flight.vue";
import { ref } from "vue";

// Array of card
const cards = ref([
  { city: "Istanbul", country: "Turkey" },
  { city: "Sydney", country: "Australia" },
  { city: "Baku", country: "Azerbaijan" },
  { city: "Male", country: "Maldives" },
  { city: "Paris", country: "France" },
  { city: "New York", country: "US" },
  { city: "London", country: "UK" },
  { city: "Tokyo", country: "Japan" },
  { city: "Dubai", country: "UAE" },
]);
</script>

<style scoped></style>
