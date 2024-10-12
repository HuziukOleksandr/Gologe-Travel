<template>
  <!-- Header wrapper Start -->
  <div class="w-full h-[105px] flex justify-between">
    <!-- Aside wrapper Start -->
    <div class="flex flex-col justify-between">
      <!-- Title Start -->
      <h1 class="custom-text-2xl text-custom-darkgreen font-semibold">
        Emirates A380 Airbus
      </h1>
      <!-- Title End -->
      <!-- Location Start -->
      <div class="flex gap-2">
        <!-- Icon -->
        <img src="@/assets/images/svg/UI/location.svg" alt="location" />
        <!-- Location text Start -->
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </p>
        <!-- Location text End -->
      </div>
      <!-- Location End -->

      <!-- Rate Start -->
      <div class="flex items-center gap-2">
        <!-- Mark Start -->
        <div
          class="h-10 flex items-center px-3 border-2 border-custom-green rounded-md"
        >
          <!-- Text Start -->
          <p class="custom-text-xs text-custom-darkgreen font-medium">4.3</p>
          <!-- Text End -->
        </div>
        <!-- Mark End -->

        <!-- Rate text Start -->
        <div class="flex gap-1">
          <p class="custom-text-xs text-custom-darkgreen font-semibold">
            {{ $t("FlightDetails.Header.rate") }}
          </p>
          <p class="custom-text-xs text-custom-darkgreen font-medium">54</p>
          <p class="custom-text-xs text-custom-darkgreen font-medium">
            {{ $t("FlightDetails.Header.reviews") }}
          </p>
        </div>
        <!-- Rate text End -->
      </div>
      <!-- Rate end -->
    </div>
    <!-- Aside wrapper end -->

    <!-- Right side wrapper Start -->
    <div class="max-w-[276px] w-full flex flex-col justify-between">
      <!-- Price text Start -->
      <p class="custom-text-3xl self-end text-custom-red font-semibold">$204</p>
      <!-- Price text End -->
      <!-- Buttons wrapper Start -->
      <div class="flex gap-4">
        <!-- Button "Favorite" Start -->
        <CustomButton class="h-12 p-3 border-2 border-custom-green">
          <img src="@/assets/images/svg/UI/heart.svg" alt="heart" />
        </CustomButton>
        <!-- Button "Favorite" End -->

        <!-- Button "Share" Start -->
        <CustomButton class="h-12 p-3 border-2 border-custom-green">
          <img src="@/assets/images/svg/UI/share.svg" alt="share" />
        </CustomButton>
        <!-- Button "Share" End -->

        <!-- Button "Book" Start -->
        <CustomButton
          class="max-w-[150px] w-full h-12 bg-custom-lightgreen flex justify-center"
          @click="$router.push({ name: 'BookingDetails' })"
        >
          <p class="custom-text-sm text-custom-darkgreen font-semibold">
            {{ $t("FlightDetails.Header.button") }}
          </p>
        </CustomButton>
        <!-- Button "Book" End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Right side wrapper End -->
  </div>
  <!-- Header wrapper End -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>


</style>
