<template>
  <!-- Listing wrapper Start -->
  <div class="max-w-[1230px] w-full flex flex-col py-[48px]">
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
      <div class="w-[1px] h-[1360px] bg-gray"></div>
      <!-- Line End -->

      <!-- Places wrapper Start -->
      <div
        class="max-w-[840px] w-full min-h-[1430px] flex flex-col justify-between"
      >
        <!-- Header wrapper Start -->
        <div class="w-full h-[80px] rounded-[12px] shadow-sm">
          <Sort/>
        </div>
        <!-- Header wrapper End -->

        <!-- Showing info wrapper start -->
        <div class="w-full h-[18px]">
          <Showing :pages="[4,265]" />
        </div>
        <!-- Showing info wrapper End -->

        <!-- Results wrapper Start -->
        <div class="w-full h-[1210px] flex flex-col justify-between">
          <Card :cards="cards"/>
        </div>
        <!-- Results wrapper End -->

        <!-- Show button Start -->
        <CustomButton class="w-full h-[48px] bg-green"> </CustomButton>
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
import Sort from "./Sort/Sort.vue"
import Showing from "./Showing/Showing.vue"
import Card from "./Card/Card.vue"
import { ref } from "vue"

const cards = ref([
  {
    name: "Emirates",
    image: "Emirates",
    rate: 4.5,
    views: 64,
    price: "$104",
    startTimeTo: "12:00 pm",
    endTimeTo: "1:28 pm",
    typeTo: "non stop",
    flightTimeTo: "2h 28m",
    flightTo: "EWR-BNA",
    startTimeFrom: "12:00 pm",
    endTimeFrom: "1:28 pm",
    typeFrom: "non stop",
    flightTimeFrom: "2h 28m",
    flightFrom: "EWR-BNA"
  },
  {
    name: "Emirates",
    image: "FlyDubai",
    rate: 4.5,
    views: 64,
    price: "$104",
    startTimeTo: "12:00 pm",
    endTimeTo: "1:28 pm",
    typeTo: "non stop",
    flightTimeTo: "2h 28m",
    flightTo: "EWR-BNA",
    startTimeFrom: "12:00 pm",
    endTimeFrom: "1:28 pm",
    typeFrom: "non stop",
    flightTimeFrom: "2h 28m",
    flightFrom: "EWR-BNA"
  },
  {
    name: "Emirates",
    image: "Qatar",
    rate: 4.5,
    views: 64,
    price: "$104",
    startTimeTo: "12:00 pm",
    endTimeTo: "1:28 pm",
    typeTo: "non stop",
    flightTimeTo: "2h 28m",
    flightTo: "EWR-BNA",
    startTimeFrom: "12:00 pm",
    endTimeFrom: "1:28 pm",
    typeFrom: "non stop",
    flightTimeFrom: "2h 28m",
    flightFrom: "EWR-BNA"
  },
  {
    name: "Emirates",
    image: "Etihad",
    rate: 4.5,
    views: 64,
    price: "$104",
    startTimeTo: "12:00 pm",
    endTimeTo: "1:28 pm",
    typeTo: "non stop",
    flightTimeTo: "2h 28m",
    flightTo: "EWR-BNA",
    startTimeFrom: "12:00 pm",
    endTimeFrom: "1:28 pm",
    typeFrom: "non stop",
    flightTimeFrom: "2h 28m",
    flightFrom: "EWR-BNA"
  }
])
</script>

<style scoped></style>
