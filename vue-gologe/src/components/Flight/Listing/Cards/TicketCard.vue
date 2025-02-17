<template>
  <div class="w-full flex gap-5">
    <div class="w-6 h-6 flex justify-center items-center">
      <div
        class="w-5 h-5 border-custom-darkgray border-2 rounded-sm hover:cursor-pointer"
      ></div>
    </div>
    <div class="w-full flex justify-between sm:flex-col sm:gap-1">
      <div class="flex flex-col justify-between sm:flex-row sm:w-full">
        <div class="flex">
          <p class="custom-text-base text-custom-darkgreen font-semibold sm:text-lg">
            {{ flights.startTime }} - {{ flights.endTime }}
          </p>
        </div>
        <p class="custom-text-sm text-custom-darkgray font-medium">
          {{ flights.name }}
        </p>
      </div>

      <p class="custom-text-sm font-semibold text-custom-darkgray text-center">
        {{ flights.type }}
      </p>
      <div class="w-full flex flex-col justify-between sm:flex-row">
        <div class="flex">
          <p class="custom-text-base text-custom-darkgreen font-semibold sm:text-lg">
            {{ flights.flightTime }}
          </p>
        </div>
        <p class="custom-text-sm text-custom-darkgray font-medium">
          {{ flights.flight }}
        </p>
      </div>
    </div>
  </div>
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
