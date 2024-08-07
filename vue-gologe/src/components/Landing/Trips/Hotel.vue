<template>
  <!-- Hotel Card wrapper Start -->
  <div class="hotel_wrapper hotel">
    <!-- Card Title Start -->
    <h1 class="custom-text-4xl font-bold text-white">
      {{ $t("Landing.Trips.hotels") }}
    </h1>
    <!-- Card Title End -->

    <!-- Card Text Start -->
    <h2 class="custom-text-base font-medium text-center text-background">
      {{ $t("Landing.Trips.textHotel") }}
    </h2>
    <!-- Card Text End -->

    <!-- Use Custom Button UI Component Start -->
    <CustomButton
      class="custom-text-sm font-medium h-[48px] p-[16px] bg-buttonGreen"
      @click="$router.push({ name: 'Hotel' })"
    >
      <!-- Button Image -->
      <img src="@/assets/images/show-flights.svg" alt="hotel" />
      {{ $t("Landing.Trips.buttonHotel") }}
    </CustomButton>
    <!-- Use Custom Button UI Component End -->
  </div>
  <!-- Hotel Card wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.hotel_wrapper {
  @apply max-w-[605px] w-full h-[560px] 
	flex flex-col items-center justify-end gap-[10px]
	px-[100px] py-[25px] rounded-[20px]
    md:w-[500px] md:h-[460px] md:px-[50px] md:py-[20px] md:flex-grow
    sm:px-[20px] sm:max-w-[800px];
}

.hotel {
  background: url("../../../assets/images/Hotel.png") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
