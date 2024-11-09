<template>
  <div class="max-w-[1440px] w-full flex justify-center mx-auto">
    <Details />
  </div>
</template>

<script setup lang="ts">
import Details from "@/components/Flight/Details/Details.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
