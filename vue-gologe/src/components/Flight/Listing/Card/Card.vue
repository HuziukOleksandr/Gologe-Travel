<template>
  <!-- Card wrapper Start -->
  <div
    class="w-full h-[285px] shadow-xl p-[16px] flex justify-between"
    v-for="element in cards"
  >
    <!-- Company image -->
    <img
      :src="getFlightsImagePng(element.image)"
      :alt="element.image"
      class="self-start"
    />
    <!-- Content wrapper Start -->
    <div class="max-w-[645px] w-full px-[24px] flex flex-col justify-between">
      <!-- Content Header Start -->
      <div class="w-full h-[44px] flex justify-between">
        <!-- Header Left Start -->
        <div class="flex gap-[8px] items-center">
          <!-- Rate Start -->
          <div
            class="h-[32px] px-[10px] flex items-center rounded-[4px] border-[2px] border-buttonGreen"
          >
            <!-- Rate text Start -->
            <p class="custom-text-xs font-bold text-green">
              {{ element.rate }}
            </p>
            <!-- Rate text End -->
          </div>
          <!-- Rate End -->
          <!-- View Start -->
          <p class="custom-text-xs text-green font-bold flex gap-[4px]">
            {{ $t("ListingFlight.Card.mark") }}
            <p class="font-medium">
              {{ element.views }} 
              {{ $t("ListingFlight.Card.reviews") }}
            </p>
          </p>
          <!-- View End -->
        </div>
        <!-- Header Left End -->
        <!-- Header Right Start -->
        <div class="flex flex-col justify-between">
          <!-- Text Start -->
           <p class="custom-text-xs text-gray">
            {{ $t("ListingFlight.Card.startingPrice") }}
          </p>
          <!-- Text End -->
          <!-- Price Start -->
           <p class="custom-text-2xl font-bold text-red self-end">{{ element.price }}</p>
          <!-- Price End -->
        </div>
        <!-- Header Right End -->
      </div>
      <!-- Content Header End -->

      <!-- Content Center Start -->
      <div class="flex flex-col ">
        <!-- First CheckBox Start -->
        <div class="h-[100px] flex flex-col justify-between">
          <Content :flights="element.flights[0]"/>
          <Content :flights="element.flights[1]"/>
        </div>
      </div>
      <!-- Content Center End -->

      <!-- Content Button Start -->
      <div class="flex justify-between gap-[16px]">
        <!-- Favorite Button Start -->
        <CustomButton class="w-[48px] h-[48px] flex justify-center items-center border-[2px] border-buttonGreen">
          <img src="@/assets/images/svg/UI/heart.svg" alt="heart">
        </CustomButton>
        <!-- Favorite Button End -->
        <!-- Favorite Button Start -->
        <CustomButton class="w-full h-[48px] flex justify-center items-center bg-buttonGreen">
          <p class="custom-text-sm text-green font-bold">
            {{ $t("ListingFlight.Card.button") }}
          </p>
        </CustomButton>
        <!-- Favorite Button End -->
      </div>
      <!-- Content Button End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Card wrapper End -->
</template>

<script setup lang="ts">
import { getFlightsImagePng } from "@/helpers/Helpers.ts";
import Content from "./Content.vue"
import { ref } from "vue"

const props = withDefaults(
  defineProps<{
    cards: [];
  }>(),
  {}
);


</script>

<style scoped></style>
