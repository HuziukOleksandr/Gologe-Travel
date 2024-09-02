<template>
  <!-- Details wrapper Start -->
  <div class="max-w-[1230px] w-full flex flex-col gap-[40px] py-[48px]">
    <!-- Use Navigation component -->
    <Navigation />
    <!-- Use Header component -->
    <Header />
    <!-- Use Features component -->
    <Features />
    <!-- Use Policies component -->
    <Policies />
    <!-- Use Ticket component -->
    <Ticket v-for="element in 2" />
  </div>
  <!-- Details wrapper End -->
</template>

<script setup lang="ts">
import Navigation from "./Navigation/Navigation.vue"
import Header from "./Header/Header.vue"
import Features from "./Features/Features.vue"
import Policies from "./Policies/Policies.vue"
import Ticket from "./Ticket/Ticket.vue"

</script>

<style scoped></style>
