<template>
  <div id="main" class="relative w-[100%] h-[100vh] flex flex-col bg-background">
    <router-view name="Header" v-if="route.name !== 'Landing'" class="shadow-md" />
    <router-view />
    <router-view name="Footer" />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>
