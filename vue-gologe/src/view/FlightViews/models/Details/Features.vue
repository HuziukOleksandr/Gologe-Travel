<template>
  <!-- Features wrapper Start -->
  <div class="min-h-[175px] flex flex-col justify-between gap-6">
    <!-- Header wrapper Start -->
    <div class="flex justify-between flex-wrap">
      <!-- Title Start -->
      <h1 class="custom-text-2xl text-custom-darkgreen font-semibold">
        Basic Economy Features
      </h1>
      <!-- Title End -->
      <!-- Filters Start -->
      <Filters :filters="filters" />
      <!-- Filters End -->
    </div>
    <!-- Header wrapper End -->
    <!-- Content wrapper Start -->
    <div class="w-full flex justify-between flex-wrap">
      <img
        v-for="element in images"
        :src="getDetailsImagePng(element)"
        :alt="element"
      />
    </div>
    <!-- Content wrapper End -->
  </div>
  <!-- Features wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getDetailsImagePng } from "@/services/Helpers";
import Filters from "./Features/Filters.vue";

const filters = ref<string[]>(["Economy", "First Class", "Busines Class"]);

const images = ref<string[]>([
  "emirates1",
  "emirates2",
  "emirates3",
  "emirates4",
  "emirates5",
  "emirates6",
  "emirates7",
  "emirates5",
  "emirates6",
]);
</script>

<style scoped></style>
