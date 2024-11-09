<template>
  <!-- Booking View wrapper Start-->
  <div class="max-w-[1440px] w-full flex justify-center mx-auto">
    <Booking />
  </div>
  <!-- Booking View wrapper End-->
</template>

<script setup lang="ts">
import Booking from "@/components/Flight/Booking/Booking.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
