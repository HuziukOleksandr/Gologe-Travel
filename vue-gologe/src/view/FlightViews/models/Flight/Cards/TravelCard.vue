<template>
  <div class="h-[420px] rounded-xl relative" v-for="card in props.cards">
    <img :src="getTravelCardImagePng(card.image)" :alt="card.image" />
    <div
      class="max-w-[248px] w-full flex flex-col gap-4 absolute left-[50%] translate-x-[-50%] bottom-6"
    >
      <div class="w-full flex justify-between">
        <div class="flex flex-col justify-between">
          <h1 class="custom-text-2xl text-default font-semibold">
            {{ card.title }}
          </h1>
          <p class="custom-text-sm text-default font-medium">
            {{ card.subTitle }}
          </p>
        </div>
        <div class="flex justify-center items-center">
          <p class="custom-text-2xl font-semibold text-default">
            $ {{ card.price }}
          </p>
        </div>
      </div>
      <CustomButton class="w-full bg-custom-lightgreen h-12 justify-center">
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.Travel.button") }}
        </p>
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTravelCardImagePng } from "@/services/Helpers";

interface Card {
  title: string;
  subTitle: string;
  price: string;
  image: string;
}

const props = withDefaults(
  defineProps<{
    cards: Card[];
  }>(),
  {}
);
</script>
