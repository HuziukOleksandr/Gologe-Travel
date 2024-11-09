<template>
  <div>
    <ForgotCompotent class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import ForgotCompotent from "@/components/Auth/ForgotComponent.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
