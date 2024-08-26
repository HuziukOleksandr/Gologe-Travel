<template>
  <!-- History Title Start -->
  <h1 class="custom-text-3xl font-bold mb-[16px]">
    {{ $t("Account.History.title") }}
  </h1>
  <!-- History Title End -->

  <!-- History wrapper Start -->
  <div
    class="w-full h-[80px] flex items-center shadow-xl rounded-[12px] mb-[32px]"
  >
    <!-- Use Custom Button "Stays" Start -->
    <CustomButton
      class="relative max-w-[624px] w-full h-full px-[24px] custom-text-base font-bold"
      :class="{ active: selectedTab === 'Flight' }"
      @click="changeTab('Flight')"
    >
      <!-- Buuton Image -->
      <img src="@/assets/images/svg/UI/flight-black.svg" alt="flight-black" />
      {{ $t("Account.History.flights") }}
    </CustomButton>
    <!-- Use Custom Button "Stays" Start -->

    <!-- Line Start -->
    <div class="w-[1px] h-[48px] bg-gray"></div>
    <!-- Line End -->

    <!-- Use Custom Button "Stays" Start -->
    <CustomButton
      class="relative max-w-[624px] w-full h-full px-[24px] custom-text-base font-bold"
      :class="{ active: selectedTab === 'Stays' }"
      @click="changeTab('Stays')"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel-black" />
      {{ $t("Account.History.stays") }}
    </CustomButton>
    <!-- Use Custom Button "Stays" End -->
  </div>
  <!-- History wrapper End -->

  <!-- Use Stays Component -->
  <Stays v-if="selectedTab === 'Stays'" />

  <!-- Use Flight Component -->
  <Flight v-else />
</template>

<script setup lang="ts">
import Flight from "./FlightCard.vue";
import Stays from "./StaysCard.vue";
import { ref } from "vue";

const selectedTab = ref<string>("Flight");

// Method Change Tab
const changeTab = (type: string) => {
  selectedTab.value = type;
};
</script>

<style scoped>
.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 560px;
  border-bottom: solid 3px #8dd3bb;
}
</style>
