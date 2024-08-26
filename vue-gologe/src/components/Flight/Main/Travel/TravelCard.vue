<template>
  <!-- Travel Card wrapper Start -->
  <div class="h-[420px] rounded-[12px] relative" v-for="card in props.cards">
    <!-- Card image -->
    <img :src="getTravelCardImagePng(card.image)" :alt="card.image" />
    <!-- Card content wrapper Start -->
    <div
      class="max-w-[248px] w-full flex flex-col gap-[16px] absolute left-[50%] translate-x-[-50%] bottom-[24px]"
    >
      <!-- Text wrapper Start -->
      <div class="w-full flex justify-between">
        <!-- Aside wrapper Start -->
        <div class="flex flex-col justify-between">
          <!-- Title Start -->
          <h1 class="custom-text-2xl font-bold text-white">
            {{ card.title }}
          </h1>
          <!-- Title End -->

          <!-- Sub Title Start -->
          <p class="custom-text-sm font-regular text-white">
            {{ card.subTitle }}
          </p>
          <!-- Sub Title End -->
        </div>
        <!-- Aside wrapper End -->

        <!-- Price wrapper Start -->
        <div class="flex justify-center items-center">
          <!-- Price Text Start -->
          <p class="custom-text-2xl font-bold text-white">$ {{ card.price }}</p>
          <!-- Price Text End -->
        </div>
        <!-- Price wrapper End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Use Custom Button Start -->
      <CustomButton
        class="custom-text-sm w-full font-medium text-green bg-buttonGreen h-[48px] justify-center"
      >
        {{ $t("FlightSearch.Travel.button") }}
      </CustomButton>
      <!-- Use Custom Button End -->
    </div>
    <!-- Card content wrapper End -->

  </div>
  <!-- Travel Card wrapper End -->
</template>

<script setup lang="ts">
import { getTravelCardImagePng } from "@/helpers/helpers.ts";

// Props, array with card
const props = withDefaults(
  defineProps<{
    cards: [];
  }>(),
  {}
);
</script>

<style scoped>

</style>
