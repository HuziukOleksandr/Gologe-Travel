<template>
  <div class="landing-component-wrapper">
    <div
      class="max-w-secondary-width w-full min-h-[280px] flex flex-col gap-10"
    >
      <div
        class="flex items-center justify-between animation"
        id="reviews-header"
        :class="{ animate: animationStore.reviewsIsAnimated }"
      >
        <div class="flex flex-col gap-4">
          <h1 class="w-[90%] min-h-[35px] custom-text-3xl font-semibold">
            {{ $t("Landing.Review.title") }}
          </h1>
          <h2 class="custom-text-base font-medium text-custom-darkgray">
            {{ $t("Landing.Review.sub-title") }}
          </h2>
        </div>
        <CustomButton class="landing-component-button sm:hidden">
          <p class="landing-component-button-text">
            {{ $t("Landing.Review.button") }}
          </p>
        </CustomButton>
      </div>
      <div
        class="flex flex-wrap justify-between gap-5 md:justify-around sm:justify-center"
      >
        <div
          class="card_wrapper"
          v-for="review in reviews"
          id="reviews-card"
          :class="{ animate: animationStore.reviewsCardIsAnimated }"
        >
          <h1 class="custom-text-2xl font-semibold text-custom-darkgreen">
            {{ review?.title }}
          </h1>
          <div class="flex flex-col">
            <div
              class="truncate w-[90%] min-h-5 font-serrat font-medium text-sm text-custom-darkgray"
            >
              {{ review?.text }}
            </div>
            <button
              class="custom-text-base font-semibold text-custom-darkgreen flex self-end"
            >
              {{ $t("Landing.Review.more") }}
            </button>
          </div>
          <div class="w-[100%] h-11 flex gap-3">
            <div v-for="index in +review.rate">
              <img src="@/assets/images/svg/UI/star.svg" :alt="`${index}`" />
            </div>
            <div v-for="index in 5 - review?.rate">
              <img
                src="@/assets/images/svg/UI/star.svg"
                :alt="`${index}`"
                class="opacity-35"
              />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h1 class="custom-text-sm font-semibold text-custom-lightgreen">
              {{ review?.name }}
            </h1>
            <p class="custom-text-sm font-medium text-custom-darkgray">
              {{ review?.subTitle }}
            </p>
          </div>
          <div class="flex gap-3">
            <img src="@/assets/images/svg/messengers/google.svg" alt="google" />
            <p class="custom-text-sm font-semibold text-custom-darkgray">
              Google
            </p>
          </div>
          <img
            class="h-[200px] rounded-xl"
            :src="getImageUrlPng(review?.picture)"
            :alt="review?.picture"
          />
        </div>
      </div>
      <CustomButton
        class="landing-component-button hidden sm:flex sm:justify-center"
      >
        <p class="landing-component-button-text">
          {{ $t("Landing.Review.button") }}
        </p>
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { useAnimationStore } from "@/stores/animatiomStore";
import { useScrollToElement } from "@/services/ScrollToElement";
import { getImageUrlPng } from "@/services/Helpers";

const reviews = ref<any>([]),
  animationStore = useAnimationStore(),
  isVisible = useScrollToElement("reviews-header", window.innerHeight / 2);

watch(isVisible, (newValue) => {
  if (!newValue) animationStore.startAnimation("reviewsIsAnimated", true, 100);
});

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
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateX(0);
}

.card_wrapper {
  @apply min-h-[585px] bg-white rounded-3xl
	shadow-2xl p-6 flex flex-col justify-around gap-3
    lg:max-w-[400px]
    md:max-w-[380px]
    sm:w-full;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.animation {
  opacity: 0;
  
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
}
</style>
