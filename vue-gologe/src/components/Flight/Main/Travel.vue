<template>
  <div
    class="max-w-primary-width w-full min-h-[280px] flex flex-col gap-6 mb-20 md:px-12 sm:px-6"
  >
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="custom-text-3xl font-semibold text-black">
          {{ $t("FlightSearch.Travel.title") }}
        </h1>
        <h2
          class="custom-text-base font-medium text-custom-darkgray max-w-[850px]"
        >
          {{ $t("FlightSearch.Travel.sub-Title") }}
        </h2>
      </div>
      <CustomButton
        class="h-10 border-2 border-custom-lightgreen px-4 hidden lg:flex"
      >
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.button") }}
        </p>
      </CustomButton>
    </div>
    <div class="w-full flex lg:justify-between lg:gap-0 flex-wrap justify-around gap-4">
      <TravelCard :cards="cards" />
    </div>
    <Bottom />
    <CustomButton
      class="h-10 border-2 border-custom-lightgreen px-4 lg:hidden justify-center"
    >
      <p class="custom-text-sm text-custom-darkgreen font-medium">
        {{ $t("FlightSearch.button") }}
      </p>
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TravelCard from "./Cards/TravelCard.vue";
import Bottom from "./Travel/TravelBottom.vue";

interface Card {
  title: string,
  subTitle: string,
  price: string,
  image: string
}

const cards = ref<Card[]>([
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
