<template>
  <!-- Sort wrapper Srart -->
  <div class="w-full h-[80px] px-[24px] flex justify-between shadow-xl">
    <!-- Cheapest wrapper Start -->
    <div
      class="max-w-[160px] w-full py-[17px] flex flex-col justify-between hover:cursor-pointer"
      :class="{ 'border-b-buttonGreen border-b-[3px]': cheapest === true }"
      @click="activeCheapest"
    >
      <!-- Header Start -->
      <h2 class="custom-text-sm font-semibold text-green">
        {{ $t("ListingFlight.Sort.cheapest") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="flex gap-[10px] h-[17px]">
        <!-- Price Start -->
        <p class="custom-text-xs text-gray">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="custom-text-xs text-gray">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Cheapest wrapper End -->
    <!-- Line Start -->
    <div class="w-[2px] bg-lightGray"></div>
    <!-- Line End -->
    <!-- Best wrapper Start -->
    <div
      class="max-w-[160px] w-full py-[17px] flex flex-col justify-between hover:cursor-pointer"
      :class="{ 'border-b-buttonGreen border-b-[3px]': best === true }"
      @click="activeBest"
    >
      <!-- Header Start -->
      <h2 class="custom-text-sm font-semibold text-green">
        {{ $t("ListingFlight.Sort.best") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="flex gap-[10px] h-[17px]">
        <!-- Price Start -->
        <p class="custom-text-xs text-gray">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="custom-text-xs text-gray">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Best wrapper End -->

    <!-- Line Start -->
    <div class="w-[2px] bg-lightGray"></div>
    <!-- Line End -->

    <!-- Quickest wrapper Start -->
    <div
      class="max-w-[160px] w-full py-[17px] flex flex-col justify-between hover:cursor-pointer"
      :class="{ 'border-b-buttonGreen border-b-[3px]': quickest === true }"
      @click="activeQuickest"
    >
      <!-- Header Start -->
      <h2 class="custom-text-sm font-semibold text-green">
        {{ $t("ListingFlight.Sort.quickest") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="flex gap-[10px] h-[17px]">
        <!-- Price Start -->
        <p class="custom-text-xs text-gray">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="custom-text-xs text-gray">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Quickest wrapper End -->

    <!-- Line Start -->
    <div class="w-[2px] bg-lightGray"></div>
    <!-- Line End -->

    <!-- Other Sort wrapper Start -->
    <CustomButton class="max-w-[160px] w-full flex">
      <img src="@/assets/images/svg/UI/menu.svg" alt="" />
      <p class="custom-text-xs text-green font-semibold">
        {{ $t("ListingFlight.Sort.other") }}
      </p>
    </CustomButton>
    <!-- Other Sort wrapper End -->
  </div>
  <!-- Sort wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const price = ref("99$");
const hour = ref("2");
const minute = ref("18");

const cheapest = ref(false);
const best = ref(false);
const quickest = ref(false);

const activeCheapest = () => {
  cheapest.value = !cheapest.value;
  best.value = false;
  quickest.value = false;
};

const activeBest = () => {
  cheapest.value = false;
  best.value = !best.value;
  quickest.value = false;
};

const activeQuickest = () => {
  cheapest.value = false;
  best.value = false;
  quickest.value = !quickest.value;
};
</script>

<style scoped></style>
