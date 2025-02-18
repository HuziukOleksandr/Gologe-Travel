<template>
  <div class="h-full flex gap-7 items-center sm:gap-4">
    <router-link
      to="/flight"
      class="custom-text-sm h-full flex items-center gap-1 whitespace-nowrap"
      :class="
        route.name == 'Flight' ? 'border-b-custom-lightgreen border-b-4' : ''
      "
    >
      <img
        src="@/assets/images/svg/UI/flight.svg"
        alt="flight"
        class="w-6 sm:w-6 sm:h-6"
        v-if="route.name == 'Landing'"
      />
      <img
        src="@/assets/images/svg/UI/flight-black.svg"
        alt="flight"
        class="w-6 sm:w-6 sm:h-6"
        v-else
      />
      <div class="hidden lg:block">
        {{ $t("Navigation.flight") }}
      </div>
    </router-link>
    <router-link
      to="/hotel"
      class="custom-text-sm h-full flex items-center gap-1 whitespace-nowrap"
      :class="
        route.name == 'Hotel' ? 'border-b-custom-lightgreen border-b-4' : ''
      "
    >
      <img
        src="@/assets/images/svg/UI/hotel.svg"
        alt="hotel"
        class="w-6 sm:w-6 sm:h-6"
        v-if="route.name == 'Landing'"
      />
      <img
        src="@/assets/images/svg/UI/hotel-black.svg"
        alt="hotel"
        class="w-6 sm:w-6 sm:h-6"
        v-else
      />
      <div class="hidden lg:block">
        {{ $t("Navigation.hotel") }}
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
