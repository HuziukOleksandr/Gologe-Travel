<template>
  <div class="max-w-[1440px] w-full flex justify-center">
    <Details />
  </div>
</template>

<script setup lang="ts">
import Details from "@/components/Flight/Details/Details.vue";
import { scrollTop } from "@/helpers/ScrollHelper.ts";

scrollTop();
</script>

<style scoped></style>
