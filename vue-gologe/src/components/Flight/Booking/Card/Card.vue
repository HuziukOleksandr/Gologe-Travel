<template>
  <!-- Card wrapper Start -->
  <div
    class="max-w-[450px] w-full h-fit p-[24px] shadow-xl rounded-[12px] flex flex-col gap-[16px]"
  >
    <!-- Preview wrapper Start -->
    <div class="flex gap-[24px]">
      <!-- Image Start -->
      <img
        src="@/assets/images/png/Flight/EmiratesPicture.png"
        alt="EmiratesPicture"
      />
      <!-- Image End -->

      <!-- Text content wrapper Start -->
      <div class="flex flex-grow flex-col justify-between">
        <!-- Text header wrapper Start -->
        <div class="flex flex-col">
          <!-- Text class Start -->
          <p class="custom-text-base text-gray font-medium">
            {{ $t("FlightBooking.Card.economyClass") }}
          </p>
          <!-- Text class End -->

          <!-- Title Start -->
          <h1 class="custom-text-xl text-green font-bold">
            Emirates A380 Airbus
          </h1>
          <!-- Title End -->
        </div>
        <!-- Text header wrapper End -->

        <!-- Rate wrapper Start -->
        <div class="flex gap-[8px] items-center">
          <!-- Use Custom Button Start -->
          <CustomButtom
            class="h-[32px] p-[10px] border-lightGreen border-[2px] rounded-[4px] flex justify-center items-center"
          >
            <p class="custom-text-xs text-green font-semibold">4.5</p>
          </CustomButtom>
          <!-- Use Custom Button Start -->

          <!-- Rate text Start -->
          <div class="flex gap-[4px]">
            <!-- Rate Start -->
            <p class="custom-text-xs text-green font-semibold">
              {{ $t("FlightBooking.Card.rate") }}
            </p>
            <!-- Rate End -->
            <p class="custom-text-xs text-green font-medium">54</p>
            <p class="custom-text-xs text-green font-medium">
              {{ $t("FlightBooking.Card.reviews") }}
            </p>
          </div>
          <!-- Rate text End -->
        </div>
        <!-- Rate wrapper End -->
      </div>
      <!-- Text content wrapper End -->
    </div>
    <!-- Preview wrapper End -->

    <!-- Line Start -->
    <div class="w-full border-t border-green opacity-[25%]"></div>
    <!-- Line End -->

    <!-- Title wrapper Start -->
    <div>
      <!-- Title Start -->
      <p class="h-[20px] custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.title") }}
        <span class="font-semibold">gologe</span>
      </p>
      <!-- Title End -->
    </div>
    <!-- Title wrapper End -->

    <!-- Line Start -->
    <div class="w-full border-t border-green opacity-[25%]"></div>
    <!-- Line End -->

    <!-- Price Start -->
    <p class="h-[20px] custom-text-base text-green font-semibold">
      {{ $t("FlightBooking.Card.priceDetails") }}
    </p>
    <!-- Price End -->

    <!-- Base Fare Start -->
    <div class="h-[20px] flex justify-between">
      <!-- Text Start -->
      <p class="custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.baseFare") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="custom-text-base text-green font-semibold">$400</p>
      <!-- Price End -->
    </div>
    <!-- Base Fare End -->

    <!-- Discount Start -->
    <div class="flex justify-between">
      <!-- Text Start -->
      <p class="custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.discount") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="custom-text-base text-green font-semibold">$400</p>
      <!-- Price End -->
    </div>
    <!-- Discount End -->

    <!-- Taxes Start -->
    <div class="flex justify-between">
      <!-- Text Start -->
      <p class="custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.taxes") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="custom-text-base text-green font-semibold">$400</p>
      <!-- Price End -->
    </div>
    <!-- Taxes End -->

    <!-- Service Free Start -->
    <div class="flex justify-between">
      <!-- Text Start -->
      <p class="custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.serviceFree") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="custom-text-base text-green font-semibold">$400</p>
      <!-- Price End -->
    </div>
    <!-- Service Free End -->

    <!-- Line Start -->
    <div class="w-full border-t border-green opacity-[25%]"></div>
    <!-- Line End -->

    <!-- Total Start -->
    <div class="flex justify-between">
      <!-- Text Start -->
      <p class="custom-text-base text-green font-medium">
        {{ $t("FlightBooking.Card.total") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="custom-text-base text-green font-semibold">$400</p>
      <!-- Price End -->
    </div>
    <!-- Total End -->
  </div>
  <!-- Card wrapper Ebd -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
