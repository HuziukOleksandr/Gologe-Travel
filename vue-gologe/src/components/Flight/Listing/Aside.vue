<template>
  <div class="w-full h-full flex flex-col gap-8 bg-default p-4 ">
    <p class="custom-text-xl font-semibold text-custom-darkgreen">
      {{ $t("ListingFlight.Aside.title") }}
    </p>
    <div class="filter-wrapper">
      <div class="filter">
        <div class="filter-header" @click="changePriceVisibility()">
          <h2 class="title">
            {{ $t("ListingFlight.Aside.price") }}
          </h2>
          <img
            class="image"
            :class="{ 'rotate-180': priceVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <Price :dialogVisible="priceVisible" />
      </div>
      <div class="line"></div>
      <div class="filter">
        <div class="filter-header" @click="changeTimeVisibility()">
          <h2 class="title">
            {{ $t("ListingFlight.Aside.departureTime") }}
          </h2>
          <img
            class="image"
            :class="{ 'rotate-180': timeVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <Departure :dialogVisible="timeVisible" />
      </div>
      <div class="line"></div>
      <div class="filter">
        <div class="filter-header" @click="changeRatingVisibility()">
          <h2 class="title">
            {{ $t("ListingFlight.Aside.rating") }}
          </h2>
          <img
            class="image"
            :class="{ 'rotate-180': ratingVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <Rating :dialogVisible="ratingVisible" />
      </div>
      <div class="line"></div>
      <div class="filter">
        <div class="filter-header" @click="changeAirlinesVisibility()">
          <h2 class="title">
            {{ $t("ListingFlight.Aside.airlines") }}
          </h2>
          <img
            class="image"
            :class="{ 'rotate-180': airlinesVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <Airlines :dialogVisible="airlinesVisible" :airlines="airlines" />
      </div>
      <div class="line"></div>
      <div class="filter">
        <div class="filter-header" @click="changeTripsVisibility()">
          <h2 class="title">
            {{ $t("ListingFlight.Aside.trips") }}
          </h2>
          <img
            class="image"
            :class="{ 'rotate-180': tripsVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <Trips :dialogVisible="tripsVisible" :trips="trips" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: переробити Filters в Absolute
import Price from "./Filters/Price.vue";
import Departure from "./Filters/Departure.vue";
import Rating from "./Filters/Rating.vue";
import Airlines from "./Filters/Airlines.vue";
import Trips from "./Filters/Trips.vue";
import { ref } from "vue";

const priceVisible = ref<boolean>(false);
const timeVisible = ref<boolean>(false);
const ratingVisible = ref<boolean>(false);
const airlinesVisible = ref<boolean>(false);
const tripsVisible = ref<boolean>(false);

function changePriceVisibility() {
  return (priceVisible.value = !priceVisible.value);
}

function changeTimeVisibility() {
  return (timeVisible.value = !timeVisible.value);
}

function changeRatingVisibility() {
  return (ratingVisible.value = !ratingVisible.value);
}

function changeAirlinesVisibility() {
  return (airlinesVisible.value = !airlinesVisible.value);
}

function changeTripsVisibility() {
  return (tripsVisible.value = !tripsVisible.value);
}

const airlines = ref<string[]>(["Emirates", "Fly Dubai", "Qatar", "Etihad"]);
const trips = ref<string[]>([
  "Round trip",
  "On Way",
  "Multi-City",
  "My Dates Are Flexible",
]);
</script>

<style lang="scss" scoped>
.filter-wrapper {
  @apply flex flex-col gap-8;

  .filter {
    @apply flex flex-col gap-4;

    .filter-header {
      @apply flex justify-between;

      &:hover {
        @apply cursor-pointer;
      }

      .title {
        @apply font-serrat text-base font-semibold text-custom-darkgreen;
      }
      .image {
        @apply transition-all duration-300;
      }
    }
  }

  .line {
    @apply w-full border-b-[0.5px] border-b-custom-lightgray;
  }
}
</style>
