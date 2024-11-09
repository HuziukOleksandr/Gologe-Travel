<template>
  <div
    class="max-w-[1440px] w-full mx-auto relative flex flex-col items-center"
  >
    <Preview />
    <Search />
    <Places />
    <Travel />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Flight/Main/Preview.vue";
import Search from "@/components/Flight/Main/Search.vue";
import Places from "@/components/Flight/Main/Places.vue";
import Travel from "@/components/Flight/Main/Travel.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
