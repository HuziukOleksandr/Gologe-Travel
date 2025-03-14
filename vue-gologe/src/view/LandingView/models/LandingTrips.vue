<template>
  <div class="landing-component-wrapper">
    <div class="max-w-[1230px] w-full min-h-[280px] flex flex-col gap-10">
      <div
        class="flex items-center justify-between sm:flex-col sm:gap-4 sm:items-start animation"
        :class="{ animate: animationStore.tripsIsAnimated }"
        id="trips"
      >
        <div class="flex flex-col gap-[15px]">
          <h1 class="custom-text-3xl font-semibold text-black">
            {{ $t("Landing.Trips.title") }}
          </h1>

          <h2 class="custom-text-base font-medium text-custom-darkgray">
            {{ $t("Landing.Trips.sub-title") }}
          </h2>
        </div>
        <CustomButton class="landing-component-button sm:hidden">
          <p class="landing-component-button-text">
            {{ $t("Landing.Trips.button") }}
          </p>
        </CustomButton>
      </div>
      <div
        class="flex flex-wrap gap-[30px] animation"
        :class="{ animate: animationStore.tripsIsAnimated }"
      >
        <div class="card_wrapper" v-for="card in cards">
          <img
            :src="getImageUrlPng(card?.city)"
            :alt="card?.city"
            class="max-w-[90px] h-[90px] sm:h-[60px]"
          />
          <div class="flex flex-col gap-1">
            <!-- Card Title Start -->
            <h2 class="custom-text-base font-semibold text-custom-darkgray">
              {{ card?.city }}, {{ card?.country }}
            </h2>
            <div class="flex items-center gap-2">
              <p class="card-text">{{ $t("Landing.Trips.flights") }}</p>
              <hr class="w-1 h-1 rounded-full bg-custom-darkgreen" />
              <p class="card-text">{{ $t("Landing.Trips.hotels") }}</p>
              <hr class="w-1 h-1 rounded-full bg-custom-darkgreen" />
              <p class="card-text">{{ $t("Landing.Trips.resorts") }}</p>
            </div>
          </div>
        </div>
      </div>
      <CustomButton
        class="landing-component-button hidden sm:flex sm:justify-center"
      >
        <p class="landing-component-button-text">
          {{ $t("Landing.Trips.button") }}
        </p>
      </CustomButton>
      <div
        class="w-full flex flex-wrap justify-between md:justify-center md:gap-4 sm:gap-3"
      >
        <!-- Flight -->
        <div
          class="landing-trips-wrapper flight animation-card"
          id="flightcard"
          :class="{ animate: animationStore.tripsCardsIsAnimated }"
        >
          <h1 class="landing-trips-title">
            {{ $t("Landing.Trips.flights") }}
          </h1>
          <h2 class="landing-trips-text">
            {{ $t("Landing.Trips.textFlight") }}
          </h2>
          <CustomButton
            class="landing-trips-button"
            @click="$router.push({ name: 'Flight' })"
          >
            <img
              src="@/assets/images/svg/UI/show-flights.svg"
              alt="show-flights"
            />
            <p class="landing-trips-button-text">
              {{ $t("Landing.Trips.buttonFlight") }}
            </p>
          </CustomButton>
        </div>
        <!-- Hotel -->
        <div
          class="landing-trips-wrapper hotel animations"
          id="hotelcard"
          :class="{ animate: animationStore.tripsCardsIsAnimated }"
        >
          <h1 class="landing-trips-title">
            {{ $t("Landing.Trips.hotels") }}
          </h1>
          <h2 class="landing-trips-text">
            {{ $t("Landing.Trips.textHotel") }}
          </h2>
          <CustomButton
            class="landing-trips-button"
            @click="$router.push({ name: 'Hotel' })"
          >
            <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
            <p class="landing-trips-button-text">
              {{ $t("Landing.Trips.buttonHotel") }}
            </p>
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement.ts";
import { useAnimationStore } from "@/stores/animatiomStore";
import { db } from "@/main";
import { getImageUrlPng } from "@/services/Helpers";
import { collection, getDocs } from "firebase/firestore";
import type TripCard from "@/types/trips-cards-types.ts";

const cards = ref<TripCard[]>([]);
const isFrameVisible = useScrollToElement("trips", window.innerHeight / 2),
  animationStore = useAnimationStore();

watch(isFrameVisible, (newValue) => {
  if (!newValue) {
    animationStore.startAnimation("tripsIsAnimated", true, 100);
  }
});

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "tripCards"));
  querySnapshot.forEach((doc) => {
    const data = doc.data() as { country: string; city: string };
    cards.value.push({
      id: doc.id,
      country: data.country,
      city: data.city,
    });
  });
});
</script>

<style scoped>
.animation {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateX(0);
}

.card_wrapper {
  @apply h-[120px] p-4 bg-default flex items-center flex-grow gap-4 
  shadow-lg rounded-2xl sm:gap-1 sm:h-[90px];

  &:hover {
    @apply cursor-pointer scale-105 duration-300;
  }

  .card-text {
    @apply font-serrat text-sm font-medium text-custom-darkgreen;
  }
}

.flight {
  background: url("../../../assets/images/png/Landing/Flight.png") no-repeat;
  background-size: cover;
  background-position: center;
}

.hotel {
  background: url("../../../assets/images/png/Landing/Hotel.png") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
