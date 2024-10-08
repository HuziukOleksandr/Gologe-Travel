<template>
  <!-- Card wrapper Start -->
  <div
    class="w-full h-[285px] shadow-xl p-4 flex justify-between"
    v-for="element in cards"
  >
    <!-- Company image -->
    <img
      :src="getFlightsImagePng(element.image)"
      :alt="element.image"
      class="self-start"
    />
    <!-- Content wrapper Start -->
    <div class="max-w-[645px] w-full px-6 flex flex-col justify-between">
      <!-- Content Header Start -->
      <div class="w-full h-11 flex justify-between">
        <!-- Header Left Start -->
        <div class="flex gap-2 items-center">
          <!-- Rate Start -->
          <div
            class="h-8 px-3 flex items-center rounded-sm border-2 border-custom-lightgreen"
          >
            <!-- Rate text Start -->
            <p class="custom-text-xs text-custom-darkgreen font-semibold">
              {{ element.rate }}
            </p>
            <!-- Rate text End -->
          </div>
          <!-- Rate End -->
          <!-- View Start -->
          <p class="custom-text-xs text-custom-darkgreen font-semibold flex gap-1">
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
           <p class="custom-text-xs text-custom-darkgray">
            {{ $t("ListingFlight.Card.startingPrice") }}
          </p>
          <!-- Text End -->
          <!-- Price Start -->
           <p class="custom-text-2xl text-custom-red self-end font-semibold">{{ element.price }}</p>
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
      <div class="flex justify-between gap-4">
        <!-- Favorite Button Start -->
        <CustomButton class="w-12 h-12 flex justify-center items-center border-2 border-custom-lightgreen">
          <img src="@/assets/images/svg/UI/heart.svg" alt="heart">
        </CustomButton>
        <!-- Favorite Button End -->
        <!-- Favorite Button Start -->
        <CustomButton 
          class="w-full h-12 flex justify-center items-center bg-custom-lightgreen"
          @click="$router.push({ name: 'FlightDetails' })"
        >
          <p class="custom-text-sm text-custom-darkgreen font-semibold">
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

interface Flight {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: string;
  flightTime: string;
  flight: string;
}

interface Card {
  name: string;
  image: string;
  rate: number;
  views: number;
  price: string;
  flights: Flight[];
}


const props = withDefaults(
  defineProps<{
    cards: Card[];
  }>(),
  {}
);


</script>

<style scoped></style>
