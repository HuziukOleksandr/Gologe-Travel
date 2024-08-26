<template>
  <div
    class="background w-full h-[540px] py-[80px] px-[128px] md:px-[60px] sm:px-[35px] sm:py-[120px]"
  >
    <!-- Preview Text wrapper Start -->
    <div
      class="lg:max-w-[440px] md:max-w-[380px] w-full flex flex-col gap-[8px]"
    >
      <!-- Title Start -->
      <h1
        class="font-serrat text-5xl font-bold text-white leading-[55px] md:text-4xl sm:text-2xl sm:text-center"
      >
        {{ $t("FlightSearch.Preview.title") }}
      </h1>
      <!-- Title End -->

      <!-- Sub Title Start -->
      <h2 class="custom-text-xl text-white sm:text-center sm:text-base">
        {{ $t("FlightSearch.Preview.sub-Title") }}
      </h2>
      <!-- Sub Title End -->
    </div>
    <!-- Preview Text wrapper End -->
  </div>
  <!-- Preview Frame wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.background {
  background-image: url("../../../../assets/images/png/Flight/Flight-search-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
