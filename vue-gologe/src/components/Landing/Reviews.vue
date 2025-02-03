<template>
  <!-- Reviews Start -->
  <div class="landing-component-wrapper">
    <!-- Review wrapper Start -->
    <div
      class="max-w-secondary-width w-full min-h-[280px] flex flex-col gap-10"
    >
      <!-- Review Heared wrapper Start -->
      <div class="flex items-center justify-between animation" id="reviews-header"
      :class="{ animate: animationStore.reviewsIsAnimated }">
        <!-- Text wrapper Start -->
        <div class="flex flex-col gap-4">
          <!-- Review Title Start -->
          <h1 class="w-[90%] min-h-[35px] custom-text-3xl font-semibold">
            {{ $t("Landing.Review.title") }}
          </h1>
          <!-- Review Title End -->

          <!-- Review Sub-Title Start -->
          <h2 class="custom-text-base font-medium text-custom-darkgray">
            {{ $t("Landing.Review.sub-title") }}
          </h2>
          <!-- Review Sub-Title End -->
        </div>
        <!-- Text wrapper End -->

        <!-- Review Button Start -->
        <CustomButton
          class="landing-component-button sm:hidden"
        >
          <p class="landing-component-button-text">
            {{ $t("Landing.Review.button") }}
          </p>
        </CustomButton>
        <!-- Review Button End -->
      </div>
      <!-- Review Heared wrapper Start -->

      <!-- Review Content wrapper Start -->
      <div
        class="flex flex-wrap justify-between gap-5 md:justify-around sm:justify-center"
      >
        <!-- Use Review Card Component -->
        <Card :reviews="reviews" />
      </div>
      <!-- Review Content wrapper End -->

      <!-- Review Button Start -->
      <CustomButton
        class="landing-component-button hidden sm:flex sm:justify-center"
      >
        <p class="landing-component-button-text">
          {{ $t("Landing.Review.button") }}
        </p>
      </CustomButton>
      <!-- Review Button End -->
    </div>
    <!-- Review wrapper End -->
  </div>
  <!-- Reviews End -->
</template>

<script setup lang="ts">
import Card from "./Cards/ReviewCard.vue";
import axios from "axios";
import { ref, watch } from "vue";
import { useAnimationStore } from '@/stores/animatiomStore';
import { useScrollToElement } from '@/services/ScrollToElement';

const reviews = ref<any>(),
  animationStore = useAnimationStore(),
  isVisible = useScrollToElement("reviews-header", window.innerHeight / 2);

watch(isVisible, (newValue) => {
  if(!newValue) 
    animationStore.startAnimation("reviewsIsAnimated", true, 100)
})



// Get Cards fron json file
axios
  .get("./Review.json")
  .then(function (response) {
    reviews.value = response.data.Reviews ?? response.data.Reviews.slice(0, 3);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
</script>


<style lang="scss" scoped>
.animation {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateX(0);
}
</style>