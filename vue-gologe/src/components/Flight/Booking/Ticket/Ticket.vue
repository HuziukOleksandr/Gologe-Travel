<template>
  <div
    class="max-w-[790px] w-full h-[350px] flex flex-col justify-between shadow-xl p-[24px] rounded-[12px]"
  >
    <!-- Header wrapper Start -->
    <div class="w-full flex flex-col gap-[32px]">
      <!-- Title wrapper Start -->
      <div class="w-full h-[40px] flex justify-between items-center">
        <!-- Title Start -->
        <h1 class="custom-text-2xl text-green font-semibold">
          Emirates A380 Airbus
        </h1>
        <!-- Title Ebd -->
        <!-- Price Start -->
        <p class="custom-text-3xl text-red font-semibold">$204</p>
        <!-- Price End -->
      </div>
      <!-- Title wrapper Start -->

      <!-- Sub-title wrapper Start -->
      <div class="w-full flex justify-between">
        <!-- Name text Start -->
        <p class="custom-text-xl font-semibold text-green">
          Returned Wed, Dec 8
        </p>
        <!-- Name text End -->
        <!-- Time text Start -->
        <p class="custom-text-xl font-medium text-gray">2h 28m</p>
        <!-- Time text End -->
      </div>
      <!-- Sub-title wrapper End -->
    </div>
    <!-- Header wrapper End -->

    <!-- Content wrapper Start -->
    <div class="w-full flex justify-between h-[86px]">
      <!-- Logo Start -->
      <div
        class="max-w-[265px] w-full flex justify-between items-center px-[32px]"
      >
        <!-- Use Image -->
        <img
          src="@/assets/images/svg/airlines/emirates.svg"
          alt="emirates"
          class="w-[66px] h-[45px]"
        />
        <!-- Text Start -->
        <div class="h-[54px] flex flex-col justify-between">
          <!-- Name Start -->
          <p class="custom-text-2xl text-green font-semibold">Emirates</p>
          <!-- Name End -->
          <!-- Plane Start -->
          <p class="custom-text-sm text-gray font-medium">Airbus A320</p>
          <!-- Plane End -->
        </div>
        <!-- Text End -->
      </div>
      <!-- Logo End -->
      <!-- Icons Start -->
      <div class="flex items-center">
        <!-- Airplane icon Start -->
        <div class="h-[48px] py-[12px] px-[24px]">
          <img src="@/assets/images/svg/UI/airplane.svg" alt="airplane" />
        </div>
        <!-- Airplane icon End -->

        <!-- Line Start -->
        <div class="w-[2px] h-[48px] bg-lightGray"></div>
        <!-- Line End -->

        <!-- Wifi icon Start -->
        <div class="h-[48px] py-[12px] px-[24px]">
          <img src="@/assets/images/svg/UI/wifi.svg" alt="wifi" />
        </div>
        <!-- Wifi icon End -->

        <!-- Line Start -->
        <div class="w-[2px] h-[48px] bg-lightGray"></div>
        <!-- Line End -->

        <!-- Stopwatch icon Start -->
        <div class="h-[48px] py-[12px] px-[24px]">
          <img src="@/assets/images/svg/UI/stopwatch.svg" alt="stopwatch" />
        </div>
        <!-- Stopwatch icon End -->

        <!-- Line Start -->
        <div class="w-[2px] h-[48px] bg-lightGray"></div>
        <!-- Line End -->

        <!-- Fast-food icon Start -->
        <div class="h-[48px] py-[12px] px-[24px]">
          <img src="@/assets/images/svg/UI/fast-food.svg" alt="fast-food" />
        </div>
        <!-- Fast-food icon End -->

        <!-- Line Start -->
        <div class="w-[2px] h-[48px] bg-lightGray"></div>
        <!-- Line End -->

        <!-- Seat icon Start -->
        <div class="h-[48px] py-[12px] px-[24px]">
          <img src="@/assets/images/svg/UI/seat.svg" alt="seat" />
        </div>
        <!-- Seat icon End -->
      </div>
      <!-- Icons End -->
    </div>
    <!-- Content wrapper End -->

    <!-- Plan wrapper Start -->
    <div class="w-full h-[48px] flex justify-center items-center gap-[40px]">
      <!-- Start Time text Start -->
      <div class="flex gap-[16px]">
        <!-- Time Start -->
        <p class="custom-text-2xl text-green font-semibold">12:00 pm</p>
        <!-- Time End -->
        <!-- Airport Start -->
        <p class="custom-text-base text-gray font-semibold self-center">
          Newark(EWR)
        </p>
        <!-- Airport End -->
      </div>
      <!-- Start Time text End -->

      <!-- Images Start -->
      <div class="flex items-center gap-[24px]">
        <!-- Line Start -->
        <div class="flex h-[6px] items-center">
          <div class="w-[6px] h-[6px] bg-green rounded-[50%]"></div>
          <div class="w-[36px] h-[2px] bg-green"></div>
        </div>

        <!-- Line End -->
        <!-- Plane Image Start -->
        <img
          src="@/assets/images/svg/UI/airplane.svg"
          alt="airplane"
          class="w-[48px]"
        />
        <!-- Plane Image End -->
        <!-- Line Start -->
        <div class="flex h-[6px] items-center">
          <div class="w-[36px] h-[2px] bg-green"></div>
          <div class="w-[6px] h-[6px] bg-green rounded-[50%]"></div>
        </div>
        <!-- Line End -->
      </div>
      <!-- Images End -->

      <!-- End Time text Start -->
      <div class="flex gap-[16px]">
        <!-- Time Start -->
        <p class="custom-text-2xl text-green font-semibold">12:00 pm</p>
        <!-- Time End -->
        <!-- Airport Start -->
        <p class="custom-text-base text-gray font-semibold self-center">
          Newark(EWR)
        </p>
        <!-- Airport End -->
      </div>
      <!-- End Time text End -->
    </div>
    <!-- Plan wrapper End -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
