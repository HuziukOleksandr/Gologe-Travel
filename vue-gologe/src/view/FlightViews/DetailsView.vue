<template>
  <div class="max-w-large-width mx-auto md:px-2 sm:px-2">
    <!-- Details wrapper Start -->
    <div class="max-w-primary-width w-full flex flex-col gap-10 py-3 mb-10">
      <!-- Use Navigation component -->
      <Navigation />
      <!-- Use Header component -->
      <Header />
      <!-- Use Features component -->
      <Features class="sm:hidden"/>
      <!-- Use Policies component -->
      <Policies class="sm:hidden" />
      <!-- Use Ticket component -->
      <Ticket class="sm:hidden"/>
    </div>
    <!-- Details wrapper End -->
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
