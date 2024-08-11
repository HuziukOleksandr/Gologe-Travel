<template>
  <!-- Custon navigation component wrapper Start -->
  <div class="navigation h-[90px] flex gap-[30px] items-center">
    <!-- Router link button Flight Start -->
    <router-link
      to="/flight"
      class="custom-text-sm h-full flex items-center gap-[4px] whitespace-nowrap"
      :class="
        route.name == 'Flight' ? 'border-b-buttonGreen border-b-[4px]' : ''
      "
    >
      <!-- Flight Image -->
      <img
        src="@/assets/images/svg/UI/flight.svg"
        alt="flight"
        v-if="route.name == 'Landing'"
      />

      <!-- Flight Dark Image -->
      <img
        src="@/assets/images/svg/UI/flight-black.svg"
        alt="flight"
        class="w-[25px]"
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
      class="custom-text-sm h-full flex items-center gap-[4px] whitespace-nowrap"
      :class="
        route.name == 'Hotel' ? 'border-b-buttonGreen border-b-[4px]' : ''
      "
    >
      <!-- Hotel Image -->
      <img
        src="@/assets/images/svg/UI/hotel.svg"
        alt="hotel"
        v-if="route.name == 'Landing'"
      />

      <!-- Hotel dark Iamge -->
      <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel" v-else />
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

<style scoped></style>
