<template>
  <!-- History Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.History.title") }}
  </h1>
  <!-- History Title End -->

  <!-- History wrapper Start -->
  <div class="w-full h-20 flex items-center shadow-xl rounded-xl mb-8">
    <!-- Use Custom Button "Stays" Start -->
    <CustomButton
      class="button"
      :class="{ active: selectedTab === 'Flight' }"
      @click="changeTab('Flight')"
    >
      <!-- Buuton Image -->
      <img src="@/assets/images/svg/UI/flight-black.svg" alt="flight-black" />
      <p class="button-text">
        {{ $t("Account.History.flights") }}
      </p>
    </CustomButton>
    <!-- Use Custom Button "Stays" Start -->

    <!-- Line Start -->
    <div class="history-vertical-line"></div>
    <!-- Line End -->

    <!-- Use Custom Button "Stays" Start -->
    <CustomButton
      class="button"
      :class="{ active: selectedTab === 'Stays' }"
      @click="changeTab('Stays')"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel-black" />
      <p class="button-text">{{ $t("Account.History.stays") }}</p>
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
import Flight from "./Cards/FlightCard.vue";
import Stays from "./Cards/StaysCard.vue";
import { ref } from "vue";

const selectedTab = ref<string>("Flight");

// Method Change Tab
const changeTab = (type: string) => {
  selectedTab.value = type;
};
</script>

<style lang="scss" scoped>
.button {
  @apply relative max-w-[624px] w-full h-full px-6;

  .button-text {
    @apply font-serrat text-base font-semibold;
  }
}

.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 560px;
  border-bottom: solid 3px #8dd3bb;
}
</style>
