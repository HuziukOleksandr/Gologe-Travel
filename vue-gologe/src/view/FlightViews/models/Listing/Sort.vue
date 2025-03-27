<template>
  <div class="wrapper">
    <div class="filter-wrapper" @click="activeCheapest">
      <h2 class="title">
        {{ $t("ListingFlight.Sort.cheapest") }}
      </h2>
      <div class="content-wrapper">
        <p class="price">{{ price }}</p>
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
      </div>
    </div>
    <div class="filter-wrapper" @click="activeBest">
      <h2 class="title">
        {{ $t("ListingFlight.Sort.best") }}
      </h2>
      <div class="content-wrapper">
        <p class="price">{{ price }}</p>
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
      </div>
    </div>
    <div class="filter-wrapper" @click="activeQuickest">
      <h2 class="title">
        {{ $t("ListingFlight.Sort.quickest") }}
      </h2>
      <div class="content-wrapper">
        <p class="price">{{ price }}</p>
        <p class="time">
          {{ hour + $t("ListingFlight.Sort.hour") }}
          {{ minute + $t("ListingFlight.Sort.minute") }}
        </p>
      </div>
    </div>
    <CustomButton class="w-full flex">
      <img src="@/assets/images/svg/UI/menu.svg" alt="menu" />
      <p class="custom-text-xs text-custom-darkgreen font-semibold">
        {{ $t("ListingFlight.Sort.other") }}
      </p>
    </CustomButton>
  </div>
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

.wrapper {
  @apply px-6 shadow-xl grid justify-items-center justify-between gap-5 auto-rows-[minmax(80px,_auto)] lg:grid-cols-[repeat(auto-fit,_minmax(100px,_160px))] grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))];

  .filter-wrapper {
    @apply w-full h-20 p-4  flex flex-col flex-grow justify-between;

    &:hover {
      @apply cursor-pointer;
    }

    .title {
      @include font();
      @apply text-sm font-semibold text-custom-darkgreen;
    }

    .content-wrapper {
      @apply flex justify-between h-6;

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
}
</style>
