<template>
  <div class="max-w-large-width mx-auto md:px-2 sm:px-2">
    <div class="max-w-primary-width w-full flex flex-col gap-10 py-3 mb-10">
      <Header />
      <Features class="sm:hidden" />
      <Policies class="sm:hidden" />
      <Ticket class="sm:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/view/FlightViews/models/Details/Header.vue";
import Features from "@/view/FlightViews/models/Details/Features.vue";
import Policies from "@/view/FlightViews/models/Details/Policies.vue";
import Ticket from "@/components/cards/Ticket.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>

<style scoped></style>
