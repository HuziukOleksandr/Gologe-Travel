<template>
  <!-- Booking wrapper Start -->
  <div class="max-w-primary-width w-full flex flex-col gap-7 py-12">
    <!-- Use Navigation component -->
    <Navigation />

    <!-- Content wrapper Start -->
    <div class="flex justify-between">
      <!-- Aside wrapper Start -->
      <div class="flex flex-col gap-10">
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
import Ticket from "@/components/Flight/UI/Ticket.vue"
import Card from "@/components/Flight/Booking/Card/Card.vue"
import Pays from "@/components/Flight/Booking/Pays/Pays.vue"
import Login from "@/components/Flight/Booking/Login/Login.vue"
import Payment from "@/components/Flight/Booking/Payment/Payment.vue"
</script>

<style scoped>

</style>