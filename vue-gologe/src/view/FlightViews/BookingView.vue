<template>
  <div class="max-w-[1440px] w-full flex justify-center mx-auto">
    <div class="max-w-primary-width w-full flex flex-col gap-7 py-12 md:px-7">
      <Navigation />
      <div class="flex justify-between">
        <div class="flex flex-col gap-10">
          <Ticket />
          <Pays />
          <Login />
          <Payment />
        </div>
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Flight/UI/Navigation.vue";
import Ticket from "@/components/Flight/UI/Ticket.vue";
import Card from "@/components/Flight/Booking/Card.vue";
import Pays from "@/components/Flight/Booking/Pays.vue";
import Login from "@/components/Flight/Booking/Login.vue";
import Payment from "@/components/Flight/Booking/Payment.vue";
import { scrollTop } from "@/services/Scroll";

scrollTop();
</script>
