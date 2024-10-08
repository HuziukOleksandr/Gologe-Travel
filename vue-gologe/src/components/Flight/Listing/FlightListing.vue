<template>
  <!-- Listing wrapper Start -->
  <div class="max-w-[1230px] w-full flex flex-col py-12">
    <!-- Flight Search wrapper Start -->
    <Search />
    <!-- Flight Search wrapper End -->

    <!-- Content wrapper Start -->
    <div class="w-full flex justify-between mb-[120px]">
      <!-- Filters wrapper Start -->
      <div class="max-w-[345px] w-full min-h-[880px]">
        <Aside />
      </div>
      <!-- Filters wrapper End -->

      <!-- Line Start -->
      <div class="w-[1px] h-full bg-custom-green"></div>
      <!-- Line End -->

      <!-- Places wrapper Start -->
      <div
        class="max-w-[840px] w-full min-h-[1430px] flex flex-col justify-between"
      >
        <!-- Header wrapper Start -->
        <div class="w-full h-20 rounded-xl shadow-sm">
          <Sort />
        </div>
        <!-- Header wrapper End -->

        <!-- Showing info wrapper start -->
        <div class="w-full h-5">
          <Showing :pages="page" />
        </div>
        <!-- Showing info wrapper End -->

        <!-- Results wrapper Start -->
        <div class="w-full h-[1210px] flex flex-col justify-between">
          <Card :cards="cards" />
        </div>
        <!-- Results wrapper End -->

        <!-- Show button Start -->
        <CustomButton
          class="w-full h-12 bg-custom-darkgreen flex justify-center"
        >
          <p class="custom-text-sm text-default font-semibold">
            {{ $t("ListingFlight.button") }}
          </p>
        </CustomButton>
        <!-- Show button End -->
      </div>
      <!-- Places wrapper End -->
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Listing wrapper End -->
</template>

<script setup lang="ts">
import Search from "./Search/Search.vue";
import Aside from "./Aside/Aside.vue";
import Sort from "./Sort/Sort.vue";
import Showing from "./Showing/Showing.vue";
import Card from "./Card/Card.vue";
import { ref } from "vue";

const page = ref<[number, number]>([4,265])

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


const cards = ref<Card[]>([
  {
    name: "Emirates",
    image: "Emirates",
    rate: 4.5,
    views: 64,
    price: "$104",
    flights: [
      {
        id: 1,
        name: "Emirates",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
      {
        id: 2,
        name: "Emirates",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
    ],
  },
  {
    name: "FlyDubai",
    image: "FlyDubai",
    rate: 4.5,
    views: 64,
    price: "$104",
    flights: [
      {
        id: 1,
        name: "FlyDubai",
        startTime: "14:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
      {
        id: 2,
        name: "FlyDubai",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
    ],
  },
  {
    name: "Qatar",
    image: "Qatar",
    rate: 4.5,
    views: 64,
    price: "$104",
    flights: [
      {
        id: 1,
        name: "Qatar",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
      {
        id: 2,
        name: "Qatar",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
    ],
  },
  {
    name: "Etihad",
    image: "Etihad",
    rate: 4.5,
    views: 64,
    price: "$104",
    flights: [
      {
        id: 1,
        name: "Etihad",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
      {
        id: 2,
        name: "Etihad",
        startTime: "12:00 pm",
        endTime: "01:28 pm",
        type: "non stop",
        flightTime: "2h 28m",
        flight: "EWR-BNA",
      },
    ],
  },
]);
</script>

<style scoped></style>
