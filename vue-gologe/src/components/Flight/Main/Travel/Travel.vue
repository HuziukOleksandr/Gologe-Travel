<template>
  <!-- Travel wrapper Srart -->
  <div
    class="max-w-primary-width w-full min-h-[280px] flex flex-col gap-6 mb-20 md:px-12 sm:px-6"
  >
    <!-- Travel Header wrapper Start -->
    <div class="flex items-center justify-between mb-10">
      <!-- Text wrapper Start -->
      <div>
        <!-- Title Start -->
        <h1 class="custom-text-3xl font-semibold text-black">
          {{ $t("FlightSearch.Travel.title") }}
        </h1>
        <!-- Title End -->

        <!-- Sub-Title Start -->
        <h2
          class="custom-text-base font-medium text-custom-darkgray max-w-[850px]"
        >
          {{ $t("FlightSearch.Travel.sub-Title") }}
        </h2>
        <!-- Sub-Title End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Travel Header button Start -->
      <CustomButton
        class="h-10 border-2 border-custom-lightgreen px-4hidden lg:flex"
      >
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.button") }}
        </p>
      </CustomButton>
      <!-- Travel Header button End -->
    </div>
    <!-- Travel Header wrapper End -->

    <!-- Travel Content wrapper Start -->
    <div class="w-full flex lg:justify-between flex-wrap justify-around gap-8">
      <!-- Use Travel Card Component -->
      <TravelCard :cards="cards" />
    </div>
    <!-- Travel Content wrapper End -->

    <!-- Use Travel Bottom Component  -->
    <Bottom />

    <!-- Travel Header button Start -->
    <CustomButton
      class="h-10 border-2 border-custom-lightgreen px-4 lg:hidden justify-center"
    >
      <p class="custom-text-sm text-custom-darkgreen font-medium">
        {{ $t("FlightSearch.button") }}
      </p>
    </CustomButton>
    <!-- Travel Header button End -->
  </div>
  <!-- Travel wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import TravelCard from "./TravelCard.vue";
import Bottom from "./TravelBottom.vue";

const cards = ref([
  {
    title: "Melbourne",
    subTitle: "An amazing journey",
    price: "700",
    image: "Melbourne-image",
  },
  {
    title: "Paris",
    subTitle: "A Paris Adventure",
    price: "600",
    image: "Paris-image",
  },
  {
    title: "London",
    subTitle: "London eye adventure",
    price: "350",
    image: "London-image",
  },
  {
    title: "Columbia",
    subTitle: "Amazing streets",
    price: "700",
    image: "Columbia-image",
  },
]);
</script>
