<template>
  <!-- Flight Card wrapper Start -->
  <div
    class="landing-trips-wrapper flight animation-card"
    id="flightcard"
    :class="{ animate: animationStore.tripsCardsIsAnimated }"
  >
    <!-- Card Title Start -->
    <h1 class="landing-trips-title">
      {{ $t("Landing.Trips.flights") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="landing-trips-text">
      {{ $t("Landing.Trips.textFlight") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="landing-trips-button"
      @click="$router.push({ name: 'Flight' })"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="show-flights" />
      <p class="landing-trips-button-text">
        {{ $t("Landing.Trips.buttonFlight") }}
      </p>
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Flight Card wrapper End -->
</template>

<script setup lang="ts">
import { useAnimationStore } from "@/stores/animatiomStore";
import { watch } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement";

const animationStore = useAnimationStore(),
  isVisible = useScrollToElement("flightcard", window.innerHeight / 2);

watch(isVisible, (newValue) => {
  if (!newValue) {
    animationStore.startAnimation("tripsCardsIsAnimated", true, 100);
  }
});
</script>

<style scoped>
.flight {
  background: url("../../../assets/images/png/Landing/Flight.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.animation-card {
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation-card.animate {
  opacity: 1;
  transform: translateX(0);
}
</style>
