<template>
  <!-- Sort wrapper Srart -->
  <div class="w-full h-20 px-6 flex justify-between shadow-xl">
    <!-- Cheapest wrapper Start -->
    <div
      class="filter-wrapper"
      :class="{
        'border-b-custom-lightgreen border-b-[3px]': cheapest === true,
      }"
      @click="activeCheapest"
    >
      <!-- Header Start -->
      <h2 class="title">
        {{ $t("ListingFlight.Sort.cheapest") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="content-wrapper">
        <!-- Price Start -->
        <p class="price">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Cheapest wrapper End -->
    <!-- Line Start -->
    <div class="line"></div>
    <!-- Line End -->
    <!-- Best wrapper Start -->
    <div
      class="filter-wrapper"
      :class="{ 'border-b-custom-lightgreen border-b-[3px]': best === true }"
      @click="activeBest"
    >
      <!-- Header Start -->
      <h2 class="title">
        {{ $t("ListingFlight.Sort.best") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="content-wrapper">
        <!-- Price Start -->
        <p class="price">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Best wrapper End -->

    <!-- Line Start -->
    <div class="line"></div>
    <!-- Line End -->

    <!-- Quickest wrapper Start -->
    <div
      class="filter-wrapper"
      :class="{
        'border-b-custom-lightgreen border-b-[3px]': quickest === true,
      }"
      @click="activeQuickest"
    >
      <!-- Header Start -->
      <h2 class="title">
        {{ $t("ListingFlight.Sort.quickest") }}
      </h2>
      <!-- Header End -->
      <!-- Wrapper for content Start -->
      <div class="content-wrapper">
        <!-- Price Start -->
        <p class="price">{{ price }}</p>
        <!-- Price End -->

        <!-- Time Start -->
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
        <!-- Time End -->
      </div>
      <!-- Wrapper for content End -->
    </div>
    <!-- Quickest wrapper End -->

    <!-- Line Start -->
    <div class="line"></div>
    <!-- Line End -->

    <!-- Other Sort wrapper Start -->
    <CustomButton class="max-w-40 w-full flex">
      <img src="@/assets/images/svg/UI/menu.svg" alt="menu" />
      <p class="custom-text-xs text-custom-darkgreen font-semibold">
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

<style lang="scss" scoped>
@mixin font {
  @apply font-serrat;
}

.line {
  @apply w-0.5 bg-custom-lightgray;
}

.filter-wrapper {
  @apply max-w-40 w-full py-4 flex flex-col justify-between;

  &:hover {
    @apply cursor-pointer;
  }

  .title {
    @include font();
    @apply text-sm font-semibold text-custom-darkgreen;
  }

  .content-wrapper {
    @apply flex gap-12 h-6;

    .price {
      @include font();
      @apply text-xs text-custom-darkgray;
    }

    .time {
      @include font();
      @apply text-xs text-custom-darkgray;
    }
  }
}
</style>
