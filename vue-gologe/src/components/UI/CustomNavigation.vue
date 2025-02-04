<template>
  <!-- Custon navigation component wrapper Start -->
  <div class="h-full flex gap-7 items-center sm:gap-4">
    <!-- Router link button Flight Start -->
    <router-link
      to="/flight"
      class="custom-text-sm h-full flex items-center gap-1 whitespace-nowrap"
      :class="
        route.name == 'Flight' ? 'border-b-custom-lightgreen border-b-4' : ''
      "
    >
      <!-- Flight Image -->
      <img
        src="@/assets/images/svg/UI/flight.svg"
        alt="flight"
        class="w-6 sm:w-6 sm:h-6"
        v-if="route.name == 'Landing'"
      />

      <!-- Flight Dark Image -->
      <img
        src="@/assets/images/svg/UI/flight-black.svg"
        alt="flight"
        class="w-6 sm:w-6 sm:h-6"
        v-else
      />

      <!-- Flight Text Start -->
      <div class="hidden lg:block">
        {{ $t("Navigation.flight") }}
      </div>
      <!-- Flight Text End -->
    </router-link>
    <!-- Router link button Flight End -->

    <!-- Router link button Hotel Start -->
    <router-link
      to="/hotel"
      class="custom-text-sm h-full flex items-center gap-1 whitespace-nowrap"
      :class="
        route.name == 'Hotel' ? 'border-b-custom-lightgreen border-b-4' : ''
      "
    >
      <!-- Hotel Image -->
      <img
        src="@/assets/images/svg/UI/hotel.svg"
        alt="hotel"
        class="w-6 sm:w-6 sm:h-6"
        v-if="route.name == 'Landing'"
      />

      <!-- Hotel dark Iamge -->
      <img
        src="@/assets/images/svg/UI/hotel-black.svg"
        alt="hotel"
        class="w-6 sm:w-6 sm:h-6"
        v-else
      />
      <!-- Hotel Text Start -->
      <div class="hidden lg:block">
        {{ $t("Navigation.hotel") }}
      </div>
      <!-- Hotel Text End -->
    </router-link>
    <!-- Router link button Hotel End -->
  </div>
  <!-- Custon navigation component wrapper End -->
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
