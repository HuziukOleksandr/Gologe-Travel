<template>
  <!-- Content wrapper Start -->
  <div class="w-full flex gap-5">
    <!-- Dummy CheckBox Start -->
    <div class="w-6 h-6 flex justify-center items-center">
      <div
        class="w-5 h-5 border-custom-darkgray border-2 rounded-sm hover:cursor-pointer"
      ></div>
    </div>
    <!-- Dummy CheckBox End -->

    <!-- Columns Start -->
    <div class="w-full flex justify-between sm:flex-col sm:gap-1">
      <!-- First Column Start -->
      <div class="flex flex-col justify-between sm:flex-row sm:w-full">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base text-custom-darkgreen font-semibold sm:text-lg">
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
      <p class="custom-text-sm font-semibold text-custom-darkgray text-center">
        {{ flights.type }}
      </p>
      <!-- Second Column End -->
      <!-- Third Column Start -->
      <div class="w-full flex flex-col justify-between sm:flex-row">
        <!-- Time text wrapper Start -->
        <div class="flex">
          <!-- Text Start -->
          <p class="custom-text-base text-custom-darkgreen font-semibold sm:text-lg">
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

interface Flight {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: string;
  flightTime: string;
  flight: string;
}

const props = defineProps<{
  flights: Flight;
}>();
</script>

<style scoped></style>
