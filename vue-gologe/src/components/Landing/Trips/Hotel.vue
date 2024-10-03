<template>
  <!-- Hotel Card wrapper Start -->
  <div class="landing-trips-wrapper hotel">
    <!-- Card Title Start -->
    <h1 class="landing-trips-title">
      {{ $t("Landing.Trips.hotels") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="landing-trips-text">
      {{ $t("Landing.Trips.textHotel") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="landing-trips-button"
      @click="$router.push({ name: 'Hotel' })"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
      <p class="landing-trips-button-text">
        {{ $t("Landing.Trips.buttonHotel") }}
      </p>
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Hotel Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>

.hotel {
  background: url("../../../assets/images/png/Landing/Hotel.png") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
