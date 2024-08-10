<template>
  <!-- Quick Search -->
  <div
    class="max-w-[1440px] w-full flex justify-center px-[80px] md:px-[80px] sm:px-[80px] ph:px-[40px]"
  >
    <!-- Quick Search wrapper Start -->
    <div class="search_wrapper">
      <!-- Quick Search Navigation wrapper Start -->
      <div class="flex gap-[65px] mb-[30px] sm:justify-center sm:mb-[10px]">
        <!-- Use Quick Search Navigation Component -->
        <Navigation @changeWindow="change"/>
      </div>
      <!-- Quick Search Navigation wrapper End -->

      <!-- Use Custom Flihgt Search Component -->
      <CustomFlightSearch v-show="windowName == 'flight'"/>

      <!-- Use Custom Places Search Component -->
      <CustomPlaceSearch v-show="windowName == 'place'"/>
      
      <!-- Buttons wrapper Start -->
      <div
        class="w-full min-h-[48px] flex justify-end self-end gap-[24px] sm:flex-wrap sm:justify-end sm:gap-[10px] ph:justify-center"
      >
        <!-- Use Custom Button Component "Add Promo Code" Start -->
        <CustomButton
          class="h-[48px] p-[16px] font-medium sm:text-sm ph:w-full ph:justify-center"
        >
          <!-- Images for Button "Add Promo Code" -->
          <img src="@/assets/images/add-promo.svg" alt="hotel" />
          {{ $t("Landing.QuickSearch.addPromoCode") }}
        </CustomButton>
        <!-- Use Custom Button Component "Add Promo Code" End -->

        <!-- Use Custom Button Component "Show Fkight" Start -->
        <CustomButton
          class="h-[48px] p-[16px] font-medium bg-button bg-buttonGreen ph:w-full ph:justify-center"
          @click="$router.push({ name: 'Listing' })"
        >
          <!-- Images for Button "Show Flight" -->
          <img src="@/assets/images/show-flights.svg" alt="hotel" />
          {{ windowName == 'flight' ? $t("Landing.QuickSearch.buttonFlight") : $t("Landing.QuickSearch.buttonPlace")}}
        </CustomButton>
        <!-- Use Custom Button Component "Show Fkight" End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Quick Search wrapper End -->
  </div>
  <!-- Quick Search -->
</template>

<script setup lang="ts">
import Navigation from "./Navigation.vue";
import { useRoute } from "vue-router";
import { ref } from "vue"

const route = useRoute();
const windowName = ref<string>('flight')

const change = (value: string) => {
  windowName.value = value
}
</script>

<style scoped>
.search_wrapper {
  @apply max-w-[1230px] w-full min-h-[280px] bg-white 
	rounded-[15px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl
  ph:gap-[15px];
}
</style>
