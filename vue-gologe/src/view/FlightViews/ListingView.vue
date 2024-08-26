<template>
    <div>
        <FlightListing class="mx-auto" />
    </div>
</template>

<script setup lang="ts">
import FlightListing from "@/components/Flight/Listing/FlightListing.vue";
import { scrollTop } from "@/helpers/ScrollHelper.ts"

scrollTop()
</script>

<style scoped></style>
