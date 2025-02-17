<template>
  <div class="max-w-large-width mx-auto md:px-2 sm:px-2">
    <div class="max-w-primary-width w-full flex flex-col gap-10 py-3 mb-10">
      <Navigation />
      <Header />
      <Features class="sm:hidden"/>
      <Policies class="sm:hidden" />
      <Ticket class="sm:hidden"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Flight/UI/Navigation.vue";
import Header from "@/components/Flight/Details/Header.vue";
import Features from "@/components/Flight/Details/Features.vue";
import Policies from "@/components/Flight/Details/Policies.vue";
import Ticket from "@/components/Flight/UI/Ticket.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
