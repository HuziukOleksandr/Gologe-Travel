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
        <Card :name="cards" />
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
        <Flight />
        <Hotel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "./Cards/TripCard.vue";
import Hotel from "./Cards/TripHotelCard.vue";
import Flight from "./Cards/TripFlightCard.vue";
import { ref, watch } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement.ts";
import { useAnimationStore } from "@/stores/animatiomStore";
import { onMounted } from "vue";
import { db } from "@/main";
import { collection, getDocs } from "firebase/firestore";
import type  TripCard  from "@/types/trips-cards-types.ts";

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
    const data = doc.data() as { country: string, city: string}
    cards.value.push({
      id: doc.id,
      country: data.country,
      city: data.city
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
</style>
