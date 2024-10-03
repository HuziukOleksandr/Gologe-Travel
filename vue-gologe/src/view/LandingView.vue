<template>
  <div class="max-w-large-width w-full my-7 mx-auto relative flex flex-col">
    <Header class="absolute" />
    <Preview />
    <QuickSearch class="mt-[-100px] mb-10" />
    <Trips class="mb-10" />
    <Review class="mb-10" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Landing/Preview/Preview.vue";
import Header from "@/components/Header/Header.vue";
import QuickSearch from "@/components/Landing/QuickSearch/QuickSearch.vue";
import Trips from "@/components/Landing/Trips/Trips.vue";
import Review from "@/components/Landing/Reviews/Reviews.vue";
import { scrollTop } from "@/helpers/ScrollHelper.ts";

scrollTop();
</script>

<style scoped></style>
