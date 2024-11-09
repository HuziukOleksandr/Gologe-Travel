<template>
  <div>
    <VerifyComponent class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import VerifyComponent from "@/components/Auth/VerifyComponent.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
