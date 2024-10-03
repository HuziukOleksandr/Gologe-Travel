<template>
  <!-- Card wrapper Start -->
  <section
    class="max-w-[450px] w-full h-fit p-6 shadow-xl rounded-xl flex flex-col gap-4"
  >
    <!-- Preview wrapper Start -->
    <div class="flex gap-6">
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
          <p class="custom-text-base text-custom-darkgray font-medium">
            {{ $t("FlightBooking.Card.economyClass") }}
          </p>
          <!-- Text class End -->

          <!-- Title Start -->
          <h1 class="text font-semibold">Emirates A380 Airbus</h1>
          <!-- Title End -->
        </div>
        <!-- Text header wrapper End -->

        <!-- Rate wrapper Start -->
        <div class="flex gap-2 items-center">
          <!-- Use Custom Button Start -->
          <CustomButtom
            class="h-8 p-3 border-custom-lightgreen border-2 rounded-md flex justify-center items-center"
          >
            <p class="text font-semibold">4.5</p>
          </CustomButtom>
          <!-- Use Custom Button Start -->

          <!-- Rate text Start -->
          <div class="flex gap-1">
            <!-- Rate Start -->
            <p class="text font-semibold">
              {{ $t("FlightBooking.Card.rate") }}
            </p>
            <!-- Rate End -->
            <p class="text font-medium">54</p>
            <p class="text font-medium">
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
    <div class="line"></div>
    <!-- Line End -->

    <!-- Title wrapper Start -->
    <div>
      <!-- Title Start -->
      <p class="h-5 custom-text-base text-custom-darkgreen font-medium">
        {{ $t("FlightBooking.Card.title") }}
        <span class="font-semibold">gologe</span>
      </p>
      <!-- Title End -->
    </div>
    <!-- Title wrapper End -->

    <!-- Line Start -->
    <div class="line"></div>
    <!-- Line End -->

    <!-- Price Start -->
    <p class="h-5 custom-text-base text-custom-darkgreen font-semibold">
      {{ $t("FlightBooking.Card.priceDetails") }}
    </p>
    <!-- Price End -->

    <!-- Base Fare Start -->
    <div class="price-wrapper">
      <!-- Text Start -->
      <p class="price-text">
        {{ $t("FlightBooking.Card.baseFare") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="price-number">$400</p>
      <!-- Price End -->
    </div>
    <!-- Base Fare End -->

    <!-- Discount Start -->
    <div class="price-wrapper">
      <!-- Text Start -->
      <p class="price-text">
        {{ $t("FlightBooking.Card.discount") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="price-number">$400</p>
      <!-- Price End -->
    </div>
    <!-- Discount End -->

    <!-- Taxes Start -->
    <div class="price-wrapper">
      <!-- Text Start -->
      <p class="price-text">
        {{ $t("FlightBooking.Card.taxes") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="price-number">$400</p>
      <!-- Price End -->
    </div>
    <!-- Taxes End -->

    <!-- Service Free Start -->
    <div class="price-wrapper">
      <!-- Text Start -->
      <p class="price-text">
        {{ $t("FlightBooking.Card.serviceFree") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="price-number">$400</p>
      <!-- Price End -->
    </div>
    <!-- Service Free End -->

    <!-- Line Start -->
    <div class="line"></div>
    <!-- Line End -->

    <!-- Total Start -->
    <div class="price-wrapper">
      <!-- Text Start -->
      <p class="price-text">
        {{ $t("FlightBooking.Card.total") }}
      </p>
      <!-- Text End -->

      <!-- Price Start -->
      <p class="price-number">$400</p>
      <!-- Price End -->
    </div>
    <!-- Total End -->
  </section>
  <!-- Card wrapper Ebd -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@mixin font {
  @apply font-serrat;
}

.line {
  @apply w-full border-t border-custom-darkgreen opacity-25;
}

.text {
  @include font();
  @apply text-xs text-custom-darkgreen;
}

.price-wrapper {
  @apply h-5 flex justify-between;

  .price-text {
    @include font();
    @apply text-base text-custom-darkgreen font-medium;
  }

  .price-number {
    @include font();
    @apply text-base text-custom-darkgreen font-semibold;
  }
}
</style>
