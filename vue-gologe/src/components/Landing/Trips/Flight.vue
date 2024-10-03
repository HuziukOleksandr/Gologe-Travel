<template>
  <!-- Flight Card wrapper Start -->
  <div class="landing-trips-wrapper flight">
    <!-- Card Title Start -->
    <h1 class="landing-trips-title">
      {{ $t("Landing.Trips.flights") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="landing-trips-text">
      {{ $t("Landing.Trips.textFlight") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="landing-trips-button"
      @click="$router.push({ name: 'Flight' })"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="show-flights" />
      <p class="landing-trips-button-text">
        {{ $t("Landing.Trips.buttonFlight") }}
      </p>
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Flight Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>

.flight {
  background: url("../../../assets/images/png/Landing/Flight.png") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
