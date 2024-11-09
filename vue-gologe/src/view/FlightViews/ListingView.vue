<template>
  <div>
    <FlightListing class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import FlightListing from "@/components/Flight/Listing/FlightListing.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
