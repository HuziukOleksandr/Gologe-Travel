<template>
  <div class="max-w-[1440px] w-full my-[30px] mx-auto relative flex flex-col">
    <Header class="absolute" />
    <Preview />
    <QuickSearch class="mt-[-100px] mb-[40px]" />
    <Trips class="mb-[40px]"/>
    <Review class="mb-[40px]"/>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Landing/Preview/Preview.vue";
import Header from "@/components/Header/Header.vue";
import QuickSearch from "@/components/Landing/QuickSearch/QuickSearch.vue";
import Trips from "@/components/Landing/Trips/Trips.vue";
import Review from "@/components/Landing/Reviews/Reviews.vue";
</script>

<style scoped></style>
