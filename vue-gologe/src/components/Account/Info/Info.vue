<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-bold mb-[16px]">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <div
    class="w-full flex flex-col gap-[32px] px-[24px] py-[32px] rounded-[16px] shadow-xl"
  >
    <!-- Name wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.name") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">John Doe</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        {{ $t("Account.Account.change") }}
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Name wrapper End -->

    <!-- Email wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.email") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">john.doe@gmail.com</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Buttons wrapper Start -->
      <div class="flex gap-[8px]">
        <!-- Button Add Email Start -->
        <CustomButton
          class="h-full flex gap-[5px] border-buttonGreen border-[2px] px-[16px]"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/add.svg" alt="add" />
          {{ $t("Account.Account.addEmail") }}
        </CustomButton>
        <!-- Button Add Email End -->

        <!-- Change Button Start -->
        <CustomButton class="change_button">
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />
          {{ $t("Account.Account.change") }}
        </CustomButton>
        <!-- Change Button End -->
      </div>
      <!-- Buttons wrapper End -->
    </div>
    <!-- Email wrapper End -->

    <!-- Password wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.password") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">************</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        {{ $t("Account.Account.change") }}
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Password wrapper End -->

    <!-- Phone Number wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.number") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">+1 000-000-0000</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper Start -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        {{ $t("Account.Account.change") }}
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Phone Number wrapper End -->

    <!-- Address wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.address") }}
        </h1>
        <!-- Title Start -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">
          St 32 main downtown, Los Angeles, California, USA
        </h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        {{ $t("Account.Account.change") }}
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Address wrapper End -->

    <!-- Date of Birth wrapper Start -->
    <div class="w-full h-[52px] flex justify-between">
      <!-- Text wrapper Start -->
      <div class="flex flex-col justify-between">
        <!-- Title Start -->
        <h1 class="custom-text-base font-bold text-gray">
          {{ $t("Account.Account.birth") }}
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="custom-text-xl font-bold">01-01-1992</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change Button Start -->
      <CustomButton class="change_button">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        {{ $t("Account.Account.change") }}
      </CustomButton>
      <!-- Change Button End -->
    </div>
    <!-- Date of Birth wrapper End -->
  </div>
  <!-- Info wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped>
.change_button {
  @apply h-full flex gap-[5px] border-buttonGreen border-[2px] px-[32px];
}
</style>
