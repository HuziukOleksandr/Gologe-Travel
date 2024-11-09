<template>
  <div>
    <Login class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/Auth/Login.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
