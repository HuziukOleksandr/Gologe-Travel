<template>
  <!-- Pays wrapper Start -->
  <section class="booking-section-wrapper min-h-[240px]">
    <!-- Pay in Full wrapper Start -->
    <div
      class="content-wrapper h-20"
      :class="{ 'bg-custom-green': activeValue }"
      @click="selectBar(true)"
    >
      <!-- Text wrapper Start -->
      <div class="content-text-wrapper">
        <!-- Title Start -->
        <p class="content-title">
          {{ $t("FlightBooking.Pays.fullTitle") }}
        </p>
        <!-- Title End -->
        <!-- Text Start -->
        <p class="content-text">
          {{ $t("FlightBooking.Pays.fullText") }}
        </p>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Image wrapper Start -->
      <div class="image-wrapper">
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
      class="content-wrapper"
      :class="{ 'bg-custom-green': !activeValue }"
      @click="selectBar(false)"
    >
      <!-- Text wrapper Start -->
      <div class="content-text-wrapper max-w-[630px]">
        <!-- Title Start -->
        <p class="content-title">
          {{ $t("FlightBooking.Pays.partTitle") }}
        </p>
        <!-- Title End -->
        <!-- Text Start -->
        <p class="content-text">
          {{ $t("FlightBooking.Pays.partText") }}
        </p>
        <!-- Text End -->
        <!-- Button Start -->
        <CustomButton>
          <p class="custom-text-xs text-custom-darkgreen font-medium underline">
            {{ $t("FlightBooking.Pays.button") }}
          </p>
        </CustomButton>
        <!-- Button End -->
      </div>
      <!-- Text wrapper End -->
      <!-- Image wrapper Start -->
      <div class="image-wrapper">
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
  </section>
  <!-- Pays wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeValue = ref<boolean>(false);

const selectBar = (value: boolean) => {
  activeValue.value = value;
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  @apply rounded-xl p-4 flex justify-between hover:cursor-pointer;

  .content-text-wrapper {
    @apply flex flex-col flex-grow justify-between;

    .content-title {
      @apply font-serrat text-base text-custom-darkgreen font-semibold;
    }
    .content-text {
      @apply font-serrat text-sm text-custom-darkgreen font-medium;
    }
  }

  .image-wrapper {
    @apply w-12  flex justify-center items-center;
  }
}
</style>
