<template>
  <section
    class="max-w-[450px] w-full h-fit p-6 shadow-xl rounded-xl flex flex-col gap-4"
  >
    <div class="flex gap-6">
      <img
        src="@/assets/images/png/Flight/EmiratesPicture.png"
        alt="EmiratesPicture"
      />
      <div class="flex flex-grow flex-col justify-between">
        <div class="flex flex-col">
          <p class="custom-text-base text-custom-darkgray font-medium">
            {{ $t("FlightBooking.Card.economyClass") }}
          </p>
          <h1 class="text font-semibold">Emirates A380 Airbus</h1>
        </div>
        <div class="flex gap-2 items-center">
          <CustomButtom
            class="h-8 p-3 border-custom-lightgreen border-2 rounded-md flex justify-center items-center"
          >
            <p class="text font-semibold">4.5</p>
          </CustomButtom>
          <div class="flex gap-1">
            <p class="text font-semibold">
              {{ $t("FlightBooking.Card.rate") }}
            </p>
            <p class="text font-medium">54</p>
            <p class="text font-medium">
              {{ $t("FlightBooking.Card.reviews") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div>
      <p class="h-5 custom-text-base text-custom-darkgreen font-medium">
        {{ $t("FlightBooking.Card.title") }}
        <span class="font-semibold">gologe</span>
      </p>
    </div>
    <div class="line"></div>
    <p class="h-5 custom-text-base text-custom-darkgreen font-semibold">
      {{ $t("FlightBooking.Card.priceDetails") }}
    </p>
    <div class="price-wrapper">
      <p class="price-text">
        {{ $t("FlightBooking.Card.baseFare") }}
      </p>
      <p class="price-number">$400</p>
    </div>
    <div class="price-wrapper">
      <p class="price-text">
        {{ $t("FlightBooking.Card.discount") }}
      </p>
      <p class="price-number">$400</p>
    </div>
    <div class="price-wrapper">
      <p class="price-text">
        {{ $t("FlightBooking.Card.taxes") }}
      </p>
      <p class="price-number">$400</p>
    </div>
    <div class="price-wrapper">
      <p class="price-text">
        {{ $t("FlightBooking.Card.serviceFree") }}
      </p>
      <p class="price-number">$400</p>
    </div>
    <div class="line"></div>
    <div class="price-wrapper">
      <p class="price-text">
        {{ $t("FlightBooking.Card.total") }}
      </p>
      <p class="price-number">$400</p>
    </div>
  </section>
</template>

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
