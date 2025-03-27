<template>
  <div
    class="w-full shadow-xl p-4 flex justify-between md:justify-around"
    v-for="element in cards"
  >
    <img
      :src="getFlightsImagePng(element.image)"
      :alt="element.image"
      class="self-start sm:hidden md:self-center"
    />
    <div class="max-w-[645px] w-full px-6 flex flex-col justify-between gap-2">
      <div class="w-full flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <div
            class="px-3 flex items-center rounded-sm border-2 border-custom-lightgreen"
          >
            <p class="custom-text-xs text-custom-darkgreen font-semibold">
              {{ element.rate }}
            </p>
          </div>
          <p class="custom-text-xs text-custom-darkgreen font-semibold flex gap-1 sm:hidden">
            {{ $t("ListingFlight.Card.mark") }}
            <span class="font-medium">
              {{ element.views }} 
              {{ $t("ListingFlight.Card.reviews") }}
            </span>
          </p>
        </div>
        <img
            :src="getFlightsImagePng(element.image)"
            :alt="element.image"
            class="h-8 sm:flex hidden"
          />
        <div class="flex flex-col justify-between">
           <p class="custom-text-xs text-custom-darkgray">
            {{ $t("ListingFlight.Card.startingPrice") }}
          </p>
           <p class="custom-text-2xl text-custom-red self-end font-semibold">{{ element.price }}</p>
        </div>
      </div>
      <div class="flex flex-col ">
        <div class="flex flex-col justify-between gap-2">
          <Content :flights="element.flights[0]"/>
          <Content :flights="element.flights[1]"/>
        </div>
      </div>
      <div class="flex justify-between gap-4">
        <CustomButton class="w-12 h-12 flex justify-center items-center border-2 border-custom-lightgreen">
          <img src="@/assets/images/svg/UI/heart.svg" alt="heart">
        </CustomButton>
        <CustomButton 
          class="w-full h-12 flex justify-center items-center bg-custom-lightgreen"
          @click="$router.push({ name: 'FlightDetails' })"
        >
          <p class="custom-text-sm text-custom-darkgreen font-semibold">
            {{ $t("ListingFlight.Card.button") }}
          </p>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getFlightsImagePng } from "@/services/Helpers";
import Content from "@/components/cards/TicketCard.vue"

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
