<template>
  <!-- Card wrapper Start -->
  <div class="card_wrapper" v-for="review in props.reviews">
    <!-- Card Title Start -->
    <h1 class="custom-text-2xl font-semibold text-custom-darkgreen">
      {{ review?.title }}
    </h1>
    <!-- Card Title End -->

    <!-- Card review and button Start -->
    <div class="flex flex-col">
      <!-- Review Text Start -->
      <div
        class="truncate w-[90%] min-h-5 font-serrat font-medium text-sm text-custom-darkgray"
      >
        {{ review?.text }}
      </div>
      <!-- Review Text End -->

      <!-- Button "More" Start -->
      <button
        class="custom-text-base font-semibold text-custom-darkgreen flex self-end"
      >
        {{ $t("Landing.Review.more") }}
      </button>
      <!-- Button "More" End -->
    </div>
    <!-- Card review and button End -->

    <!-- Rates wrapper Start -->
    <div class="w-[100%] h-11 flex gap-3">
      <!-- Active stars wrapper Start -->
      <div v-for="index in +review.rate">
        <!-- Active Star image  -->
        <img src="@/assets/images/svg/UI/star.svg" :alt="`${index}`" />
      </div>
      <!-- Active stars wrapper End -->

      <!-- Non-Active stars wrapper Start -->
      <div v-for="index in 5 - review?.rate">
        <!-- Non-Active star image -->
        <img
          src="@/assets/images/svg/UI/star.svg"
          :alt="`${index}`"
          class="opacity-35"
        />
      </div>
      <!-- Non-Active stars wrapper End -->
    </div>
    <!-- Rates wrapper End -->

    <!-- User wrapper Start -->
    <div class="flex flex-col gap-1">
      <!-- User Name Title Start -->
      <h1 class="custom-text-sm font-semibold text-custom-lightgreen">
        {{ review?.name }}
      </h1>
      <!-- User Name Title End -->

      <!-- User  Sub-Titte Start -->
      <p class="custom-text-sm font-medium text-custom-darkgray">
        {{ review?.subTitle }}
      </p>
      <!-- User  Sub-Titte End -->
    </div>
    <!-- User wrapper Start -->

    <!-- Google wrapper Start -->
    <div class="flex gap-3">
      <!-- Google Image -->
      <img src="@/assets/images/svg/messengers/google.svg" alt="google" />

      <!-- Google text Start -->
      <p class="custom-text-sm font-semibold text-custom-darkgray">Google</p>
      <!-- Google text End -->
    </div>
    <!-- Google wrapper End -->

    <!-- Card Image -->
    <img
      class="h-[200px] rounded-xl"
      :src="getImageUrlPng(review?.picture)"
      :alt="review?.picture"
    />
  </div>
  <!-- Card wrapper End -->
</template>

<script setup lang="ts">
import { getImageUrlPng } from "@/services/Helpers";
import type Reviews from "@/types/reviews-types.ts";

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
    lg:max-w-[425px]
    md:max-w-[425px]
    sm:w-full;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
