<template>
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
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="show-flights" />
      <p class="landing-trips-button-text">
        {{ $t("Landing.Trips.buttonFlight") }}
      </p>
    </CustomButton>
  </div>
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
