<template>
  <div>
    <Register class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import Register from "@/components/Auth/Register.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
