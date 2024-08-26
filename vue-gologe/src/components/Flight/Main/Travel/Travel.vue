<template>
  <!-- Travel wrapper Srart -->
  <div
    class="max-w-[1230px] w-[100%] min-h-[280px] flex flex-col gap-[24px] mb-[80px] md:px-[50px] sm:px-[25px]"
  >
    <!-- Travel Header wrapper Start -->
    <div class="flex items-center justify-between mb-[40px]">
      <!-- Text wrapper Start -->
      <div class="text_wrapper">
        <!-- Title Start -->
        <h1 class="custom-text-3xl font-semibold text-black">
          {{ $t("FlightSearch.Travel.title") }}
        </h1>
        <!-- Title End -->

        <!-- Sub-Title Start -->
        <h2 class="custom-text-base font-regular text-gray max-w-[850px]">
          {{ $t("FlightSearch.Travel.sub-Title") }}
        </h2>
        <!-- Sub-Title End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Travel Header button Start -->
      <CustomButton
        class="h-[40px] border-[2px] border-buttonGreen px-[16px] hidden lg:flex"
      >
        {{ $t("FlightSearch.button") }}
      </CustomButton>
      <!-- Travel Header button End -->
    </div>
    <!-- Travel Header wrapper End -->

    <!-- Travel Content wrapper Start -->
    <div
      class="w-full flex lg:justify-between flex-wrap justify-around gap-[35px]"
    >
      <!-- Use Travel Card Component -->
      <TravelCard :cards="cards" />
    </div>
    <!-- Travel Content wrapper End -->

    <!-- Use Travel Bottom Component  -->
    <Bottom />

    <!-- Travel Header button Start -->
    <CustomButton
      class="h-[40px] border-[2px] border-buttonGreen px-[16px] lg:hidden justify-center"
    >
      {{ $t("FlightSearch.button") }}
    </CustomButton>
    <!-- Travel Header button End -->
  </div>
  <!-- Travel wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import TravelCard from "./TravelCard.vue";
import Bottom from "./TravelBottom.vue"

const cards = ref<array>([
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
