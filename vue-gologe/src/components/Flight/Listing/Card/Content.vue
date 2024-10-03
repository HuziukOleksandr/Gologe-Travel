<template>
  <!-- Content wrapper Start -->
  <div class="w-full h-11 flex gap-5">
    <!-- Dummy CheckBox Start -->
    <div class="w-6 h-6 flex justify-center items-center">
      <div
        class="w-5 h-5 border-custom-darkgray border-2 rounded-sm hover:cursor-pointer"
      ></div>
    </div>
    <!-- Dummy CheckBox End -->

    <!-- Columns Start -->
    <div class="flex gap-20">
      <!-- First Column Start -->
      <div class="flex flex-col justify-between">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base text-custom-darkgreen font-semibold">
            {{ flights.startTime }} - {{ flights.endTime }}
          </p>
          <!-- Text End -->
        </div>
        <!-- Time text wrapper End -->
        <!-- Name Start -->
        <p class="custom-text-sm text-custom-darkgray font-medium">
          {{ flights.name }}
        </p>
        <!-- Name End -->
      </div>
      <!-- First Column End -->

      <!-- Second Column Start -->
      <p class="custom-text-sm font-semibold text-custom-darkgray">
        {{ flights.type }}
      </p>
      <!-- Second Column End -->
      <!-- Third Column Start -->
      <div class="flex flex-col justify-between">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base text-custom-darkgreen font-semibold">
            {{ flights.flightTime }}
          </p>
          <!-- Text End -->
        </div>
        <!-- Time text wrapper End -->
        <!-- Name Start -->
        <p class="custom-text-sm text-custom-darkgray font-medium">
          {{ flights.flight }}
        </p>
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
