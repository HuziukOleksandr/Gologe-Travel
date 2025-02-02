<template>
  <!-- Trips Card wrapper Start -->
  <div class="card_wrapper" v-for="card in props.name">
    <!-- Card image -->
    <img
      :src="getImageUrlPng(card?.city)"
      :alt="card?.city"
      class="max-w-[90px] h-[90px] sm:h-[60px]"
    />

    <!-- Content wrapper Start -->
    <div class="flex flex-col gap-1">
      <!-- Card Title Start -->
      <h2 class="custom-text-base font-semibold text-custom-darkgray">
        {{ card?.city }}, {{ card?.country }}
      </h2>
      <!-- Card Title End -->

      <!-- Card text Start -->
      <div class="flex items-center gap-2">
        <p class="card-text">{{ $t("Landing.Trips.flights") }}</p>

        <!-- Point -->
        <hr class="w-1 h-1 rounded-full bg-custom-darkgreen" />

        <p class="card-text">{{ $t("Landing.Trips.hotels") }}</p>

        <!-- Point -->
        <hr class="w-1 h-1 rounded-full bg-custom-darkgreen" />

        <p class="card-text">{{ $t("Landing.Trips.resorts") }}</p>
      </div>
      <!-- Card text End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Trips Card wrapper End -->
</template>

<script setup lang="ts">
import { getImageUrlPng } from "@/services/Helpers";
import type TripCard from "@/types/trips-cards-types.ts";

const props = withDefaults(
  defineProps<{
    name: TripCard[];
  }>(),
  {}
);
</script>

<style lang="scss" scoped>
.card_wrapper {
  @apply h-[120px] p-4 bg-default flex items-center flex-grow gap-4 
  shadow-lg rounded-2xl sm:gap-1 sm:h-[90px];

  &:hover {
    @apply cursor-pointer scale-105 duration-300;
  }

  .card-text {
    @apply font-serrat text-sm font-medium text-custom-darkgreen;
  }
}

</style>
