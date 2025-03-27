<template>
  <div
    class="max-w-[1440px] w-full my-[30px] mx-auto relative flex flex-col items-center"
  >
    <Preview />
    <Search />
    <Places />
    <Travel />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/view/FlightViews/models/Flight/Preview.vue";
import Search from "@/view/FlightViews/models/Flight/Search.vue";
import Places from "@/view/FlightViews/models/Flight/Places.vue";
import Travel from "@/view/FlightViews/models/Flight/Travel.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
