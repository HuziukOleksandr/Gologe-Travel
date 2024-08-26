<template>
    <div>
        <AccountComponent class="mx-auto" />
    </div>
</template>

<script setup lang="ts">
import AccountComponent from "@/components/Account/AccountComponent.vue";
import { scrollTop } from "@/helpers/ScrollHelper.ts"

scrollTop()
</script>

<style scoped></style>
