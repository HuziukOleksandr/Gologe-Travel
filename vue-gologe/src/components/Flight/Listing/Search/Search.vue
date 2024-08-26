<template>
  <!-- Flight Search wrapper Start -->
  <div
    class="w-full rounded-[16px] flex justify-between shadow-xl mb-[32px] py-[32px] px-[24px] md:gap-[20px] sm:flex-col sm:gap-[15px]"
  >
    <!-- Use Flight Search Component -->
    <CustomFlightSearch 
      class="max-w-[1105px]"
      fromWidth="lg:max-w-[295px]"
      tripWidth="lg:max-w-[140px]"
      departWidth="lg:max-w-[295px]"
      classWidth="lg:max-w-[295px]"
    />

    <!-- Button for Search Start -->
    <CustomButton
      class="h-[56px] p-[16px] rounded-[4px] bg-buttonGreen flex justify-center items-center md:h-[50px] sm:h-[45px]"
    >
      <img src="@/assets/images/svg/UI/search.svg" alt="Search" />
    </CustomButton>
    <!-- Button for Search End -->
  </div>
  <!-- Flight Search wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
