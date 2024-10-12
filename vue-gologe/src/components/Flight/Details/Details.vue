<template>
  <!-- Details wrapper Start -->
  <div class="max-w-primary-width w-full flex flex-col gap-10 py-3 mb-10">
    <!-- Use Navigation component -->
    <Navigation />
    <!-- Use Header component -->
    <Header />
    <!-- Use Features component -->
    <Features />
    <!-- Use Policies component -->
    <Policies />
    <!-- Use Ticket component -->
    <Ticket />
  </div>
  <!-- Details wrapper End -->
</template>

<script setup lang="ts">
import Navigation from "@/components/Flight/UI/Navigation.vue";
import Header from "@/components/Flight/Details/Header.vue";
import Features from "@/components/Flight/Details/Features.vue";
import Policies from "@/components/Flight/Details/Policies.vue";
import Ticket from "@/components/Flight/UI/Ticket.vue";
</script>

<style scoped></style>
