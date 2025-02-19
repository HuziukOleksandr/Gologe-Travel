<template>
  <div class="max-w-primary-width w-full flex flex-col py-12 lg:px-0 px-10 mx-auto">
    <Search />
    <div class="w-full flex gap-2 mb-40 relative justify-between">
      <Transition name="slide-fade">
        <div
          class="max-w-[300px] w-full min-h-[880px] h-full absolute shadow-xl rounded-xl"
          v-if="filterVisible"
          v-click-away="onClickAway"
        >
          <Aside />
        </div>
      </Transition>
      <div class="max-w-[375px] w-full min-h-[880px] lg:flex hidden">
        <Aside />
      </div>
      <div class="w-[1px] h-full bg-custom-green lg:block hidden"></div>
      <div class="w-full flex flex-col justify-between gap-4">
        <div class="w-fit flex gap-2 px-2 lg:hidden">
          <CustomButton class="" @click="showFilters()">
            <p class="custom-text-base text-custom-darkgreen font-semibold">Filter</p>
            <img
              src="@/assets/images/svg/UI/chevron-forward.svg"
              alt=""
              class="w-5"
            />
          </CustomButton>
        </div>
        <div class="w-full rounded-xl shadow-sm">
          <Sort />
        </div>

        <!-- <div class="w-full h-5">
          <Showing :pages="page" />
        </div> -->

        <div class="w-full min-h-[1210px] flex flex-col justify-between">
          <Card :cards="cards" />
        </div>

        <CustomButton
          class="w-full h-12 bg-custom-darkgreen flex justify-center"
        >
          <p class="custom-text-sm text-default font-semibold">
            {{ $t("ListingFlight.button") }}
          </p>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/components/Flight/Listing/Search.vue";
import Aside from "@/components/Flight/Listing/Aside.vue";
import Sort from "@/components/Flight/Listing/Sort.vue";
import Card from "@/components/Flight/Listing/Ticket.vue";
import { ref } from "vue";
import { scrollTop } from "@/services/Scroll";


const page = ref<[number, number]>([4, 265]);
const filterVisible = ref<boolean>(false);
const showFilters = () => {
  filterVisible.value = !filterVisible.value;
};

const onClickAway = () => {
  filterVisible.value = false;
};

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
scrollTop();
</script>
