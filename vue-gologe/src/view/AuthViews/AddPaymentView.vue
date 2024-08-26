<template>
  <div>
    <AddPaymentComponent class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import AddPaymentComponent from "@/components/Auth/AddPayment/AddPaymentComponent.vue";
import { scrollTop } from "@/helpers/ScrollHelper.ts"

scrollTop()
</script>
