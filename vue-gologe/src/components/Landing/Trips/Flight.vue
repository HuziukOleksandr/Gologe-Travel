<template>
  <!-- Flight Card wrapper Start -->
  <div class="flight_wrapper flight">
    <!-- Card Title Start -->
    <h1 class="custom-text-4xl font-bold text-white">
      {{ $t("Landing.Trips.flights") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="custom-text-base font-regular text-center text-background">
      {{ $t("Landing.Trips.textFlight") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="custom-text-sm font-medium h-[48px] p-[16px] bg-buttonGreen"
    >
      <!-- Button Image -->
      <img src="@/assets/images/svg/UI/show-flights.svg" alt="hotel" />
      {{ $t("Landing.Trips.buttonFlight") }}
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Flight Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.flight_wrapper {
  @apply max-w-[605px] w-full h-[560px] 
	flex flex-col items-center justify-end gap-[10px] 
	px-[100px] py-[25px] rounded-[20px]
    md:w-[500px] md:h-[460px] md:px-[50px] md:py-[20px] md:flex-grow
    sm:px-[20px] sm:max-w-[800px];
}

.flight {
  background: url("../../../assets/images/png/Landing/Flight.png") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
