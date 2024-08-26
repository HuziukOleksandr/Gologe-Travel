<template>
  <div class="max-w-[1440px] w-full my-[30px] mx-auto relative flex flex-col items-center">
    <Preview />
    <Search />
    <Places />
    <Travel />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Flight/Main/Preview/Preview.vue"
import Search from "@/components/Flight/Main/Search/Search.vue"
import Places from "@/components/Flight/Main/Places/Places.vue"
import Travel from "@/components/Flight/Main/Travel/Travel.vue"
import { scrollTop } from "@/helpers/ScrollHelper.ts"

scrollTop()

</script>

<style scoped>
 
</style>