<template>
  <!-- Search wrapper Start -->
  <div class="search_wrapper mx-auto top-[-75px] relative">
    <!-- Title Start -->
    <h1 class="custon-text-xl font-bold text-green">
      {{ $t("FlightSearch.Search.question") }}
    </h1>
    <!-- Title End -->

    <!-- Use Flight Search Component Start -->
    <CustomFlightSearch 
      fromWidth="lg:max-w-[324px]"
      tripWidth="lg:max-w-[140px]"
      departWidth="lg:max-w-[324px]"
      classWidth="lg:max-w-[324px]"
    />
    <!-- Use Flight Search Component End -->

    <!-- Buttons wrapper Start -->
    <div class="flex self-end gap-[24px] sm:flex-wrap sm:gap-[16px]">
      <!-- Use Custom Button Component "Add Promo Code" Start -->
      <CustomButton
        class="h-[48px] p-[16px] font-medium sm:flex-grow sm:justify-center"
      >
        <!-- Images for Button "Add Promo Code" -->
        <img src="@/assets/images/svg/UI/add-promo.svg" alt="hotel" />
        {{ $t("Landing.QuickSearch.addPromoCode") }}
      </CustomButton>
      <!-- Use Custom Button Component "Add Promo Code" End -->

      <!-- Use Custom Button Component "Show Flight" Start -->
      <CustomButton
        class="h-[48px] p-[16px] font-medium bg-button bg-buttonGreen sm:flex-grow sm:justify-center"
        @click="$router.push({ name: 'Listing' })"
      >
        <!-- Images for Button "Show Flight" -->
        <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
        {{ $t("Landing.QuickSearch.buttonFlight") }}
      </CustomButton>
      <!-- Use Custom Button Component "Show Flight" End -->
    </div>
    <!-- Buttons wrapper End -->
  </div>
  <!-- Search wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.search_wrapper {
  @apply max-w-[1230px] w-full bg-white 
	rounded-[16px] p-[32px]
	flex flex-col gap-[30px] shadow-2xl
  sm:gap-[20px];
}
</style>
