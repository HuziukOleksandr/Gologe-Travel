<template>
  <!-- Content wrapper Start -->
  <div class="w-full h-[45px] flex gap-[20px]">
    <!-- Dummy CheckBox Start -->
    <div class="w-[24px] h-[24px] flex justify-center items-center">
      <div
        class="w-[18px] h-[18px] border-gray border-[2px] rounded-[4px] hover:cursor-pointer"
      ></div>
    </div>
    <!-- Dummy CheckBox End -->

    <!-- Columns Start -->
    <div class="flex gap-[40px]">
      <!-- First Column Start -->
      <div class="flex flex-col justify-between">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base font-semibold text-green">
            {{ flights.startTime }} - {{ flights.endTime }}
          </p>
          <!-- Text End -->
        </div>
        <!-- Time text wrapper End -->
        <!-- Name Start -->
        <p class="custom-text-sm text-gray">{{ flights.name }}</p>
        <!-- Name End -->
      </div>
      <!-- First Column End -->

      <!-- Second Column Start -->
      <p class="custom-text-sm font-semibold text-gray">{{ flights.type }}</p>
      <!-- Second Column End -->
      <!-- Third Column Start -->
      <div class="flex flex-col justify-between">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base font-semibold text-green">
            {{ flights.flightTime }}
          </p>
          <!-- Text End -->
        </div>
        <!-- Time text wrapper End -->
        <!-- Name Start -->
        <p class="custom-text-sm text-gray">{{ flights.flight }}</p>
        <!-- Name End -->
      </div>
      <!-- Third Column End -->
    </div>
    <!-- Columns End -->
  </div>
  <!-- Content wrapper End -->
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    flights: {};
  }>(),
  {}
);
</script>

<style scoped></style>
