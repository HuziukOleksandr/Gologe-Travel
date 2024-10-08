<template>
  <!-- Aside wrapper Start -->
  <aside class="flex flex-col gap-8">
    <!-- Aside Title Start -->
    <p class="custom-text-xl font-semibold text-custom-darkgreen">
      {{ $t("ListingFlight.Aside.title") }}
    </p>
    <!-- Aside Title End -->

    <!-- Filters wrapper Start -->
    <div class="filter-wrapper">
      <!-- Price Start -->
      <div class="filter">
        <!-- Price Header Start -->
        <div class="filter-header" @click="changePriceVisibility()">
          <!-- Price Title Start -->
          <h2 class="title">
            {{ $t("ListingFlight.Aside.price") }}
          </h2>
          <!-- Price Title End -->
          <!-- Filter image -->
          <img
            class="image"
            :class="{ 'rotate-180': priceVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <!-- Price Header End -->
        <!-- Custom Filter for Price Start -->
        <Price :dialogVisible="priceVisible" />
        <!-- Custom Filter for Price End -->
      </div>
      <!-- Price End -->

      <!-- Line Start -->
      <div class="line"></div>
      <!-- Line Start -->

      <!-- Departure Time Start -->
      <div class="filter">
        <!-- Departure Time Header Start -->
        <div class="filter-header" @click="changeTimeVisibility()">
          <!-- Departure Time Title Start -->
          <h2 class="title">
            {{ $t("ListingFlight.Aside.departureTime") }}
          </h2>
          <!-- Departure Time Title Start -->
          <!-- Filter image -->
          <img
            class="image"
            :class="{ 'rotate-180': timeVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <!-- Departure Time Header End -->
        <!-- Custom Filter for Departure Time Start -->
        <Departure :dialogVisible="timeVisible" />
        <!-- Custom Filter for Departure Time End -->
      </div>
      <!-- Departure Time End -->

      <!-- Line Start -->
      <div class="line"></div>
      <!-- Line Start -->

      <!-- Rating Start -->
      <div class="filter">
        <!-- Rating Header Start -->
        <div class="filter-header" @click="changeRatingVisibility()">
          <!-- Rating Title Start -->
          <h2 class="title">
            {{ $t("ListingFlight.Aside.rating") }}
          </h2>
          <!-- Rating Title End -->
          <!-- Filter image -->
          <img
            class="image"
            :class="{ 'rotate-180': ratingVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <!-- Rating Header End -->
        <!-- Custom Filter for Rating Start -->
        <Rating :dialogVisible="ratingVisible" />
        <!-- Custom Filter for Rating End -->
      </div>
      <!-- Rating End -->

      <!-- Line Start -->
      <div class="line"></div>
      <!-- Line Start -->

      <!-- Airlines Start -->
      <div class="filter">
        <!-- Airlines Header Start -->
        <div class="filter-header" @click="changeAirlinesVisibility()">
          <!-- Airlines Title Start -->
          <h2 class="title">
            {{ $t("ListingFlight.Aside.airlines") }}
          </h2>
          <!-- Airlines Title End -->
          <!-- Filter image -->
          <img
            class="image"
            :class="{ 'rotate-180': airlinesVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <!-- Airlines Header End -->
        <!-- Custom Filter for Airlines Start -->
        <Airlines :dialogVisible="airlinesVisible" :airlines="airlines" />
        <!-- Custom Filter for Airlines End -->
      </div>
      <!-- Airlines End -->

      <!-- Line Start -->
      <div class="line"></div>
      <!-- Line Start -->

      <!-- Trips Start -->
      <div class="filter">
        <!-- Trips Header Start -->
        <div class="filter-header" @click="changeTripsVisibility()">
          <!-- Trips Title Start -->
          <h2 class="title">
            {{ $t("ListingFlight.Aside.trips") }}
          </h2>
          <!-- Trips Title End -->
          <!-- Filter image -->
          <img
            class="image"
            :class="{ 'rotate-180': tripsVisible }"
            src="@/assets/images/svg/UI/chevron.svg"
            alt="chevron-down"
          />
        </div>
        <!-- Trips Header End -->
        <!-- Custom Filter for Trips Start -->
        <Trips :dialogVisible="tripsVisible" :trips="trips" />
        <!-- Custom Filter for Trips End -->
      </div>
      <!-- Trips End -->
    </div>
    <!-- Filters wrapper  End -->
  </aside>
  <!-- Aside wrapper End -->
</template>

<script setup lang="ts">
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
