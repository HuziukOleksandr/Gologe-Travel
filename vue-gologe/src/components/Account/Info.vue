<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <div class="w-full flex flex-col gap-8 px-6 py-8 rounded-2xl shadow-xl border-[1px] border-custom-lightgreen">
    <!-- Name wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.name") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">John Doe</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">{{ $t("Account.Account.change") }}</p>
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Name wrapper End -->

    <!-- Email wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.email") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">john.doe@gmail.com</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Buttons wrapper Start -->
      <div class="flex gap-[8px] sm:justify-between">
        <!-- Button Add Email Start -->
        <CustomButton class="change_button">
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/add.svg" alt="add" />
          <p class="button-text">{{ $t("Account.Account.addEmail") }}</p>
        </CustomButton>
        <!-- Button Add Email End -->

        <!-- Change Button Start -->
        <CustomButton class="change_button">
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />
          <p class="button-text">{{ $t("Account.Account.change") }}</p>
        </CustomButton>
        <!-- Change Button End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Email wrapper End -->

    <!-- Password wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.password") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="text">************</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">{{ $t("Account.Account.change") }}</p>
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Password wrapper End -->

    <!-- Phone Number wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.number") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">+1 000-000-0000</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper Start -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">{{ $t("Account.Account.change") }}</p>
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Phone Number wrapper End -->

    <!-- Address wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.address") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="text">St 32 main downtown, Los Angeles, California, USA</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">{{ $t("Account.Account.change") }}</p>
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Address wrapper End -->

    <!-- Date of Birth wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title">
          {{ $t("Account.Account.birth") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">01-01-1992</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">{{ $t("Account.Account.change") }}</p>
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Date of Birth wrapper End -->
  </div>
  <!-- Info wrapper End -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrapper {
  @apply w-full min-h-[52px] flex justify-between gap-2;

  .text-wrapper {
    @apply flex flex-col justify-between;

    .title {
      @apply font-serrat text-base font-semibold text-custom-darkgray;
    }

    .text {
      @apply font-serrat text-xl font-semibold text-black overflow-hidden text-ellipsis text-nowrap;

      @screen sm {
        @apply max-w-[200px]
      }
    }
  }

  .change_button {
    @apply w-fit h-12 flex justify-center self-end gap-1 border-custom-lightgreen border-2 px-8 
    sm:h-10 sm:px-2 sm:w-10;

    .button-text {
      @apply font-serrat text-sm text-custom-darkgreen font-medium sm:hidden;
    }
  }
}
</style>
