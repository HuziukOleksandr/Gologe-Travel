<template>
  <div>
    <AddPaymentComponent class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import AddPaymentComponent from "@/components/Auth/AddPaymentComponent.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
