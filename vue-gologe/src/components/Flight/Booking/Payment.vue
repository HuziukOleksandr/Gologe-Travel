<template>
  <!-- Payment wrapper Start -->
  <section class="booking-section-wrapper min-h-[315px]">
    <!-- Card wrapper Start -->
    <div
      class="h-20 rounded-xl px-4 flex items-center justify-between hover:cursor-pointer"
      :class="{ 'bg-custom-green': activeValue }"
      @click="selectBar"
    >
      <!-- Aside wrapper Start -->
      <div class="flex gap-8">
        <!-- Image -->
        <img
          src="@/assets/images/svg/card-icon.svg"
          alt="card-icon"
          class="h-5"
        />
        <!-- Text wrapper Start -->
        <div class="flex gap-2 items-center">
          <p class="custom-text-base text-custom-darkgreen font-semibold">
            **** 4321
          </p>
          <p class="custom-text-sm text-custom-darkgreen font-medium">01/23</p>
        </div>
        <!-- Text wrapper End -->
      </div>
      <!-- Aside wrapper End -->

      <!-- Image wrapper Start -->
      <div class="w-12 h-12 flex justify-center items-center">
        <img
          src="@/assets/images/svg/UI/iconActive.svg"
          alt="iconActive"
          v-show="activeValue"
        />
        <img
          src="@/assets/images/svg/UI/iconNonActive.svg"
          alt="iconActive"
          v-show="!activeValue"
        />
      </div>
      <!-- Image wrapper End -->
    </div>
    <!-- Card wrapper End -->
    <!-- Add card wrapper Start -->
    <div
      class="h-[188px] border-dashed border-4 border-custom-lightgreen rounded-xl flex flex-col items-center justify-center hover:cursor-pointer"
      @click="openModalWindow()"
    >
      <div
        class="flex items-center justify-center rounded-full p-3 border-2 border-custom-lightgreen"
      >
        <img src="@/assets/images/svg/UI/plus.svg" alt="plus" class="h-5" />
      </div>
      <p class="custom-text-xs text-custom-darkgray font-medium">
        {{ $t("FlightBooking.Payment.button") }}
      </p>
    </div>
    <!-- Add card wrapper End -->
  </section>
  <!-- Payment wrapper End -->
  <CustomModalWindow :isOpen="openWindow" @close-window="closeModalWindow()">
    <CustomAddPayment @close-window="closeModalWindow()" />
  </CustomModalWindow>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeValue = ref<boolean>(false);
const openWindow = ref<boolean>(false);
const countryVisible = ref<boolean>(false);

const openModalWindow = () => {
  openWindow.value = true;
};

const closeModalWindow = () => {
  openWindow.value = false;
};

const selectBar = () => {
  activeValue.value = !activeValue.value;
};
</script>

<style scoped></style>
