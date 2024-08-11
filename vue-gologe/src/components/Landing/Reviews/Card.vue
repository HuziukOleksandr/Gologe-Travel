<template>
  <!-- Card wrapper Start -->
  <div class="card_wrapper" v-for="review in props.reviews">
    <!-- Card Title Start -->
    <h1 class="custom-text-2xl font-bold text-green">
      {{ review?.title }}
    </h1>
    <!-- Card Title End -->

    <!-- Card review and button Start -->
    <div class="flex flex-col">
      <!-- Review Text Start -->
      <div
        class="truncate w-[90%] min-h-[22px] font-serrat font-regular text-sm text-grey"
      >
        {{ review?.text }}
      </div>
      <!-- Review Text End -->

      <!-- Button "More" Start -->
      <button class="custom-text-base font-bold text-green flex self-end">
        {{ $t("Landing.Review.more") }}
      </button>
      <!-- Button "More" End -->
    </div>
    <!-- Card review and button End -->

    <!-- Rates wrapper Start -->
    <div class="w-[100%] h-[45px] flex gap-[10px]">
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
    <div class="flex flex-col gap-[5px]">
      <!-- User Name Title Start -->
      <h1 class="custom-text-sm font-bold text-green">
        {{ review?.name }}
      </h1>
      <!-- User Name Title End -->

      <!-- User  Sub-Titte Start -->
      <p class="custom-text-sm text-gray">
        {{ review?.subTitle }}
      </p>
      <!-- User  Sub-Titte End -->
    </div>
    <!-- User wrapper Start -->

    <!-- Google wrapper Start -->
    <div class="flex gap-[10px]">
      <!-- Google Image -->
      <img src="@/assets/images/svg/messengers/google.svg" alt="google" />

      <!-- Google text Start -->
      <p class="font-serrat font-bold text-[14px] text-grey">Google</p>
      <!-- Google text End -->
    </div>
    <!-- Google wrapper End -->

    <!-- Card Image -->
    <img
      class="h-[200px] rounded-[10px]"
      :src="getImageUrlPng(review?.picture)"
      :alt="review?.picture"
    />
  </div>
  <!-- Card wrapper End -->
</template>

<script setup lang="ts">
import { getImageUrlPng } from "@/helpers/helpers.ts";
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
  @apply min-h-[585px] bg-white rounded-[20px]
	shadow-2xl p-[24px] flex flex-col justify-around gap-[10px]
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
