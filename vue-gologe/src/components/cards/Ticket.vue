<template>
  <section class="booking-section-wrapper h-[350px]">
    <div class="w-full flex flex-col gap-8">
      <div class="w-full h-10 flex justify-between items-center">
        <h1 class="custom-text-2xl text-custom-darkgreen font-semibold">
          Emirates A380 Airbus
        </h1>
        <p class="custom-text-3xl text-custom-red font-semibold">$204</p>
      </div>
      <div class="w-full flex justify-between">
        <p class="custom-text-xl text-custom-darkgreen font-semibold">
          Returned Wed, Dec 8
        </p>
        <p class="custom-text-xl text-custom-darkgray font-medium">2h 28m</p>
      </div>
    </div>
    <div class="w-full flex justify-between h-20">
      <div class="max-w-[265px] w-full flex justify-between items-center px-8">
        <img
          src="@/assets/images/svg/airlines/emirates.svg"
          alt="emirates"
          class="w-16 h-11"
        />
        <div class="h-[54px] flex flex-col justify-between">
          <p class="custom-text-2xl text-custom-darkgreen font-semibold">
            Emirates
          </p>
          <p class="custom-text-sm text-custom-darkgray font-medium">
            Airbus A320
          </p>
        </div>
      </div>
      <div class="icons-wrapper">
        <div class="icon">
          <img src="@/assets/images/svg/UI/airplane.svg" alt="airplane" />
        </div>
        <div class="icon-line"></div>
        <div class="icon">
          <img src="@/assets/images/svg/UI/wifi.svg" alt="wifi" />
        </div>
        <div class="icon-line"></div>
        <div class="icon">
          <img src="@/assets/images/svg/UI/stopwatch.svg" alt="stopwatch" />
        </div>
        <div class="icon-line"></div>
        <div class="icon">
          <img src="@/assets/images/svg/UI/fast-food.svg" alt="fast-food" />
        </div>
        <div class="icon-line"></div>
        <div class="icon">
          <img src="@/assets/images/svg/UI/seat.svg" alt="seat" />
        </div>
      </div>
    </div>
    <div class="plan-wrapper">
      <div class="plan-content">
        <p class="time-text">12:00 pm</p>
        <p class="airport-text">Newark(EWR)</p>
      </div>
      <div class="plan-image">
        <div class="plan-lines-wrapper">
          <div class="plan-dot"></div>
          <div class="plan-line"></div>
        </div>
        <img
          src="@/assets/images/svg/UI/airplane.svg"
          alt="airplane"
          class="w-12"
        />
        <div class="plan-lines-wrapper">
          <div class="plan-line"></div>
          <div class="plan-dot"></div>
        </div>
      </div>
      <div class="plan-content">
        <p class="time-text">12:00 pm</p>
        <p class="airport-text">Newark(EWR)</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.icons-wrapper {
  @apply flex items-center;

  .icon {
    @apply h-12 py-3 px-6;
  }

  .icon-line {
    @apply w-0.5 h-12 bg-custom-lightgray;
  }
}

.plan-wrapper {
  @apply w-full h-12 flex justify-center items-center gap-10;

  .plan-content {
    @apply flex gap-4;

    .time-text {
      @apply font-serrat text-2xl text-custom-darkgreen font-semibold;
    }

    .airport-text {
      @apply font-serrat text-base text-custom-darkgray font-semibold self-center;
    }
  }

  .plan-image {
    @apply flex items-center gap-6;

    .plan-lines-wrapper {
      @apply flex h-1.5 items-center;

      .plan-dot {
        @apply w-1.5 h-1.5 bg-custom-darkgreen rounded-full;
      }

      .plan-line {
        @apply w-9 h-0.5 bg-custom-darkgreen;
      }
    }
  }
}
</style>
