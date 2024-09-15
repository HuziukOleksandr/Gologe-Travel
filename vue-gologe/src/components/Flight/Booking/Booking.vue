<template>
  <!-- Booking wrapper Start -->
  <div class="max-w-[1280px] w-full flex flex-col gap-[30px] py-[48px]">
    <!-- Use Navigation component -->
    <Navigation />

    <!-- Content wrapper Start -->
    <div class="flex justify-between">
      <!-- Aside wrapper Start -->
      <div class="flex flex-col gap-[40px]">
        <Ticket />
        <Pays />
        <Login />
        <Payment />
      </div>
      <!-- Aside wrapper End -->
      <Card/>
    </div>
    <!-- Content wrapper End -->
    
  </div>
  <!-- Booking wrapper End -->
</template>

<script setup lang="ts">
import Navigation from "@/components/Flight/UI/Navigation/Navigation.vue"
import Ticket from "@/components/Flight/Booking/Ticket/Ticket.vue"
import Card from "@/components/Flight/Booking/Card/Card.vue"
import Pays from "@/components/Flight/Booking/Pays/Pays.vue"
import Login from "@/components/Flight/Booking/Login/Login.vue"
import Payment from "@/components/Flight/Booking/Payment/Payment.vue"
</script>

<style scoped>

</style>