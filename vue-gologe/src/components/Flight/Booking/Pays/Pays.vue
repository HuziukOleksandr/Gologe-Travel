<template>
  <!-- Pays wrapper Start -->
  <div
    class="max-w-[790px] w-full min-h-[240px] shadow-xl rounded-[12px] p-[16px] flex flex-col justify-between gap-[16px]"
  >
    <!-- Pay in Full wrapper Start -->
    <div
      class="h-[80px] rounded-[12px] p-[16px] flex justify-between"
      :class="{ 'bg-mintGreen': activeValue }"
      @click="selectBar(true)"
    >
      <!-- Text wrapper Start -->
      <div class="fle flex-col flex-grow justify-between">
        <!-- Title Start -->
        <p class="custom-text-base text-green font-semibold">
          {{ $t("FlightBooking.Pays.fullTitle") }}
        </p>
        <!-- Title End -->
        <!-- Text Start -->
        <p class="custom-text-sm text-green font-medium">
          {{ $t("FlightBooking.Pays.fullText") }}
        </p>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

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
    <!-- Pay in Full wrapper End -->

    <!-- Pay part wrapper Start -->
    <div
      class=" rounded-[12px] p-[16px] flex justify-between items-center"
      :class="{ 'bg-mintGreen': !activeValue }"
      @click="selectBar(false)"
    >
      <!-- Text wrapper Start -->
      <div class="flex flex-col flex-grow gap-[12px]">
        <!-- Title Start -->
        <p class="custom-text-base text-green font-semibold">
          {{ $t("FlightBooking.Pays.partTitle") }}
        </p>
        <!-- Title End -->
        <!-- Text Start -->
        <p class="custom-text-sm text-green font-medium">
          {{ $t("FlightBooking.Pays.partText") }}
        </p>
        <!-- Text End -->
        <!-- Button Start -->
        <CustomButton>
          <p class="custom-text-xs text-green font-medium underline">{{ $t("FlightBooking.Pays.button") }}</p>
        </CustomButton>
        <!-- Button End -->
      </div>
      <!-- Text wrapper End -->
      <!-- Image wrapper Start -->
      <div class="w-[48px] h-[48px] flex justify-center items-center">
        <img
          src="@/assets/images/svg/UI/iconActive.svg"
          alt="iconActive"
          v-show="!activeValue"
        />
        <img
          src="@/assets/images/svg/UI/iconNonActive.svg"
          alt="iconActive"
          v-show="activeValue"
        />
      </div>
      <!-- Image wrapper End -->
    </div>
    <!-- Pay part wrapper End -->
  </div>
  <!-- Pays wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeValue = ref<boolean>(false);

const selectBar = (value: boolean) => {
  activeValue.value = value;
};
</script>

<style scoped></style>
