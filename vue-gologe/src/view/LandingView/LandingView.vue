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
import Header from "@/components/layout/header/Header.vue";
import Preview from "@/view/LandingView/models/LandingPreview.vue";
import QuickSearch from "@/view/LandingView/models/LandingQuickSearch.vue";
import Trips from "@/view/LandingView/models/LandingTrips.vue";
import Review from "@/view/LandingView/models/LandingReviews.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped>
.fromUp {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Анімація */
.fromUp.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
