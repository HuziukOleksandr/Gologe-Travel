<template>
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.History.title") }}
  </h1>
  <div class="w-full min-h-20 flex justify-around items-center shadow-xl rounded-xl mb-8 px-8">
    <CustomButton
      class="button"
      :class="{ active: selectedTab === 'Flight' }"
      @click="changeTab('Flight')"
    >
      <img src="@/assets/images/svg/UI/flight-black.svg" alt="flight-black" />
      <p class="button-text">
        {{ $t("Account.History.flights") }}
      </p>
    </CustomButton>
    <div class="line"></div>
    <CustomButton
      class="button"
      :class="{ active: selectedTab === 'Stays' }"
      @click="changeTab('Stays')"
    >
      <img src="@/assets/images/svg/UI/hotel-black.svg" alt="hotel-black" />
      <p class="button-text">{{ $t("Account.History.stays") }}</p>
    </CustomButton>
  </div>
  <Stays v-if="selectedTab === 'Stays'" />
  <Flight v-else />
</template>

<script setup lang="ts">
import Flight from "@/components/tickets/TicketFlights.vue";
import Stays from "@/components/tickets/TicketStays.vue";
import { ref } from "vue";

const selectedTab = ref<string>("Flight");

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

.line {
  @apply w-[1px] h-12 bg-custom-darkgray mx-2;
}

.active::after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: solid 3px #8dd3bb;
}
</style>
