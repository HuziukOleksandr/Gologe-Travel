<template>
  <section class="booking-section-wrapper h-[350px]">
    <!-- Header wrapper Start -->
    <div class="w-full flex flex-col gap-8">
      <!-- Title wrapper Start -->
      <div class="w-full h-10 flex justify-between items-center">
        <!-- Title Start -->
        <h1 class="custom-text-2xl text-custom-darkgreen font-semibold">
          Emirates A380 Airbus
        </h1>
        <!-- Title Ebd -->
        <!-- Price Start -->
        <p class="custom-text-3xl text-custom-red font-semibold">$204</p>
        <!-- Price End -->
      </div>
      <!-- Title wrapper Start -->

      <!-- Sub-title wrapper Start -->
      <div class="w-full flex justify-between">
        <!-- Name text Start -->
        <p class="custom-text-xl text-custom-darkgreen font-semibold">
          Returned Wed, Dec 8
        </p>
        <!-- Name text End -->
        <!-- Time text Start -->
        <p class="custom-text-xl text-custom-darkgray font-medium">2h 28m</p>
        <!-- Time text End -->
      </div>
      <!-- Sub-title wrapper End -->
    </div>
    <!-- Header wrapper End -->

    <!-- Content wrapper Start -->
    <div class="w-full flex justify-between h-20">
      <!-- Logo Start -->
      <div class="max-w-[265px] w-full flex justify-between items-center px-8">
        <!-- Use Image -->
        <img
          src="@/assets/images/svg/airlines/emirates.svg"
          alt="emirates"
          class="w-16 h-11"
        />
        <!-- Text Start -->
        <div class="h-[54px] flex flex-col justify-between">
          <!-- Name Start -->
          <p class="custom-text-2xl text-custom-darkgreen font-semibold">
            Emirates
          </p>
          <!-- Name End -->
          <!-- Plane Start -->
          <p class="custom-text-sm text-custom-darkgray font-medium">
            Airbus A320
          </p>
          <!-- Plane End -->
        </div>
        <!-- Text End -->
      </div>
      <!-- Logo End -->
      <!-- Icons Start -->
      <div class="icons-wrapper">
        <!-- Airplane icon Start -->
        <div class="icon">
          <img src="@/assets/images/svg/UI/airplane.svg" alt="airplane" />
        </div>
        <!-- Airplane icon End -->

        <!-- Line Start -->
        <div class="icon-line"></div>
        <!-- Line End -->

        <!-- Wifi icon Start -->
        <div class="icon">
          <img src="@/assets/images/svg/UI/wifi.svg" alt="wifi" />
        </div>
        <!-- Wifi icon End -->

        <!-- Line Start -->
        <div class="icon-line"></div>
        <!-- Line End -->

        <!-- Stopwatch icon Start -->
        <div class="icon">
          <img src="@/assets/images/svg/UI/stopwatch.svg" alt="stopwatch" />
        </div>
        <!-- Stopwatch icon End -->

        <!-- Line Start -->
        <div class="icon-line"></div>
        <!-- Line End -->

        <!-- Fast-food icon Start -->
        <div class="icon">
          <img src="@/assets/images/svg/UI/fast-food.svg" alt="fast-food" />
        </div>
        <!-- Fast-food icon End -->

        <!-- Line Start -->
        <div class="icon-line"></div>
        <!-- Line End -->

        <!-- Seat icon Start -->
        <div class="icon">
          <img src="@/assets/images/svg/UI/seat.svg" alt="seat" />
        </div>
        <!-- Seat icon End -->
      </div>
      <!-- Icons End -->
    </div>
    <!-- Content wrapper End -->

    <!-- Plan wrapper Start -->
    <div class="plan-wrapper">
      <!-- Start Time text Start -->
      <div class="plan-content">
        <!-- Time Start -->
        <p class="time-text">12:00 pm</p>
        <!-- Time End -->
        <!-- Airport Start -->
        <p class="airport-text">Newark(EWR)</p>
        <!-- Airport End -->
      </div>
      <!-- Start Time text End -->

      <!-- Images Start -->
      <div class="plan-image">
        <!-- Line Start -->
        <div class="plan-lines-wrapper">
          <div class="plan-dot"></div>
          <div class="plan-line"></div>
        </div>

        <!-- Line End -->
        <!-- Plane Image Start -->
        <img
          src="@/assets/images/svg/UI/airplane.svg"
          alt="airplane"
          class="w-12"
        />
        <!-- Plane Image End -->
        <!-- Line Start -->
        <div class="plan-lines-wrapper">
          <div class="plan-line"></div>
          <div class="plan-dot"></div>
        </div>
        <!-- Line End -->
      </div>
      <!-- Images End -->

      <!-- End Time text Start -->
      <div class="plan-content">
        <!-- Time Start -->
        <p class="time-text">12:00 pm</p>
        <!-- Time End -->
        <!-- Airport Start -->
        <p class="airport-text">Newark(EWR)</p>
        <!-- Airport End -->
      </div>
      <!-- End Time text End -->
    </div>
    <!-- Plan wrapper End -->
  </section>
</template>

<script setup lang="ts"></script>

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
