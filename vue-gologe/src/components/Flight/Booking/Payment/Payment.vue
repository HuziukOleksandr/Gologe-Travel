<template>
  <!-- Payment wrapper Start -->
  <div
    class="max-w-[790px] w-full min-h-[315px] shadow-2xl rounded-[12px] p-[16px] flex flex-col justify-between gap-[24px]"
  >
    <!-- Card wrapper Srart -->
    <div
      class="h-[80px] rounded-[12px] px-[16px] flex items-center justify-between hover:cursor-pointer"
      :class="{ 'bg-mintGreen': activeValue }"
      @click="selectBar(true)"
    >
      <!-- Aside wrapper Start -->
      <div class="flex gap-[32px]">
        <!-- Image -->
        <img
          src="@/assets/images/svg/card-icon.svg"
          alt="card-icon"
          class="h-[20px]"
        />
        <!-- Text wrapper Start -->
        <div class="flex gap-[8px] items-center">
          <p class="custom-text-base text-green font-semibold">**** 4321</p>
          <p class="custom-text-sm text-green font-medium">01/23</p>
        </div>
        <!-- Text wrapper End -->
      </div>
      <!-- Aside wrapper End -->

      <!-- Image wrapper Start -->
      <div class="w-[48px] h-[48px] flex justify-center items-center">
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
      class="h-[188px] border-dashed border-[4px] border-buttonGreen rounded-[12px] flex flex-col items-center justify-center hover:cursor-pointer"
      @click="openModalWindow()"
    >
      <div
        class="flex items-center justify-center rounded-[50%] p-[14px] border-[2px] border-buttonGreen"
      >
        <img
          src="@/assets/images/svg/UI/plus.svg"
          alt="plus"
          class="h-[20px]"
        />
      </div>
      <p class="custom-text-xs text-gray font-medium">
        {{ $t("FlightBooking.Payment.button") }}
      </p>
    </div>
    <!-- Add card wrapper End -->
  </div>
  <!-- Payment wrapper End -->
  <CustomModalWindow :isOpen="openWindow" @close-window="closeModalWindow()">
    <ModalWindow @close-window="closeModalWindow()" />
  </CustomModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "./ModalWindow.vue";
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

const selectBar = (value: boolean) => {
  activeValue.value = !activeValue.value;
};
</script>

<style scoped></style>
