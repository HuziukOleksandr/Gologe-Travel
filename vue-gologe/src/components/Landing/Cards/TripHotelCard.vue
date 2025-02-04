<template>
  <!-- Hotel Card wrapper Start -->
  <div class="landing-trips-wrapper hotel animations"
    id="hotelcard"
    :class="{ animate: animationStore.tripsCardsIsAnimated }">
    <!-- Card Title Start -->
    <h1 class="landing-trips-title">
      {{ $t("Landing.Trips.hotels") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="landing-trips-text">
      {{ $t("Landing.Trips.textHotel") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="landing-trips-button"
      @click="$router.push({ name: 'Hotel' })"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
      <p class="landing-trips-button-text">
        {{ $t("Landing.Trips.buttonHotel") }}
      </p>
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Hotel Card wrapper End -->
</template>

<script setup lang="ts">
import { useAnimationStore } from "@/stores/animatiomStore";
import { watch } from "vue";
import { useScrollToElement } from "@/services/ScrollToElement";

const animationStore = useAnimationStore(),
  isVisible = useScrollToElement("hotelcard", window.innerHeight / 2);

watch(isVisible, (newValue) => {
  if (!newValue) {
    animationStore.startAnimation("tripsCardsIsAnimated", true, 100);
  }
});
</script>

<style scoped>

.hotel {
  background: url("../../../assets/images/png/Landing/Hotel.png") no-repeat;
  background-size: cover;
  background-position: center;
}

.animations {
  opacity: 0;
  transform: translatex(10px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animations.animate {
  opacity: 1;
  transform: translatex(0);
}
</style>
