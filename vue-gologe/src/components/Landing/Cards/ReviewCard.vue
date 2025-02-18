<template>
  <div class="card_wrapper animation" v-for="review in props.reviews"
    id="reviews-card"
    :class="{ animate : animationStore.reviewsCardIsAnimated}"
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
      <p class="custom-text-sm font-semibold text-custom-darkgray">Google</p>
    </div>
    <img
      class="h-[200px] rounded-xl"
      :src="getImageUrlPng(review?.picture)"
      :alt="review?.picture"
    />
  </div>
</template>

<script setup lang="ts">
import { getImageUrlPng } from "@/services/Helpers";
import type Reviews from "@/types/reviews-types.ts";
import { watch } from 'vue';
import { useAnimationStore } from '@/stores/animatiomStore';
import { useScrollToElement } from '@/services/ScrollToElement';

const isVisible = useScrollToElement("reviews-card", window.innerHeight / 2),
  animationStore = useAnimationStore();

watch(isVisible, (newValue) => {
  if(!newValue)
    animationStore.startAnimation("reviewsCardIsAnimated", true, 100)
})

// Card props expected Array
const props = withDefaults(
  defineProps<{
    reviews: Reviews[];
  }>(),
  {}
);
</script>

<style scoped>
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
