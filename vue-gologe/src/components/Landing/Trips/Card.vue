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
    <div class="flex flex-col gap-[5px]">
      <!-- Card Title Start -->
      <h2 class="custom-text-base font-bold text-gray">
        {{ card?.city }}, {{ card?.country }}
      </h2>
      <!-- Card Title End -->

      <!-- Card text Start -->
      <div
        class="custom-text-sm font-medium flex items-center gap-[10px] text-green"
      >
        {{ $t("Landing.Trips.flights") }}

        <!-- Point -->
        <hr class="w-[4px] h-[4px] rounded-[50%] bg-green" />

        {{ $t("Landing.Trips.hotels") }}

        <!-- Point -->
        <hr class="w-[4px] h-[4px] rounded-[50%] bg-green" />

        {{ $t("Landing.Trips.resorts") }}
      </div>
      <!-- Card text End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Trips Card wrapper End -->
</template>

<script setup lang="ts">
import { getImageUrlPng } from "@/helpers/helpers.ts";
import type TripCard from "@/types/trips-cards-types.ts";

const props = withDefaults(
  defineProps<{
    name: TripCard[];
  }>(),
  {}
);
</script>

<style scoped>
.card_wrapper {
  @apply h-[120px] p-[15px] bg-white
	flex items-center flex-grow gap-[15px] 
	shadow-lg rounded-[15px]
  sm:gap-[5px] sm:h-[90px]
  hover:cursor-pointer hover:scale-105 hover:duration-300;
}
</style>
