<template>
  <!-- Travel Card wrapper Start -->
  <div class="h-[420px] rounded-xl relative" v-for="card in props.cards">
    <!-- Card image -->
    <img :src="getTravelCardImagePng(card.image)" :alt="card.image" />
    <!-- Card content wrapper Start -->
    <div
      class="max-w-[248px] w-full flex flex-col gap-4 absolute left-[50%] translate-x-[-50%] bottom-6"
    >
      <!-- Text wrapper Start -->
      <div class="w-full flex justify-between">
        <!-- Aside wrapper Start -->
        <div class="flex flex-col justify-between">
          <!-- Title Start -->
          <h1 class="custom-text-2xl text-default font-semibold">
            {{ card.title }}
          </h1>
          <!-- Title End -->

          <!-- Sub Title Start -->
          <p class="custom-text-sm text-default font-medium">
            {{ card.subTitle }}
          </p>
          <!-- Sub Title End -->
        </div>
        <!-- Aside wrapper End -->

        <!-- Price wrapper Start -->
        <div class="flex justify-center items-center">
          <!-- Price Text Start -->
          <p class="custom-text-2xl font-semibold text-default">
            $ {{ card.price }}
          </p>
          <!-- Price Text End -->
        </div>
        <!-- Price wrapper End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Use Custom Button Start -->
      <CustomButton class="w-full bg-custom-lightgreen h-12 justify-center">
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.Travel.button") }}
        </p>
      </CustomButton>
      <!-- Use Custom Button End -->
    </div>
    <!-- Card content wrapper End -->
  </div>
  <!-- Travel Card wrapper End -->
</template>

<script setup lang="ts">
import { getTravelCardImagePng } from "@/helpers/helpers.ts";

interface Card {
  title: string,
  subTitle: string,
  price: string,
  image: string
}

// Props, array with card
const props = withDefaults(
  defineProps<{
    cards: Card[];
  }>(),
  {}
);
</script>

<style scoped></style>
