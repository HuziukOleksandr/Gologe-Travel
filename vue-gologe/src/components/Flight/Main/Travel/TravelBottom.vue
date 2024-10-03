<template>
  <!-- Travel wrapper Srart -->
  <div class="w-full flex justify-between gap-6 sm:flex-col">
    <!-- Aside wrapper Start -->
    <div
      class="lg:max-w-[550px] bg-custom-lightgreen rounded-3xl p-6 flex flex-col justify-between sm:flex-grow"
    >
      <!-- Top wrapper Start -->
      <div class="flex flex-col gap-6">
        <!-- Header wrapper Start -->
        <div class="flex justify-between flex-wrap">
          <!-- Title Start -->
          <h1
            class="custom-text-4xl text-custom-darkgreen font-semibold max-w-[363px]"
          >
            {{ $t("FlightSearch.Travel.card-Title") }}
          </h1>
          <!-- Title End -->
          <!-- Button with Price Start -->
          <CustomButton
            class="h-[62px] px-2 flex gap-1 flex-col justify-center flex-grow bg-default"
          >
            <!-- Button text Start -->
            <p class="custom-text-sm text-custom-darkgreen fort-medium">
              {{ $t("FlightSearch.Travel.card-Button") }}
            </p>
            <!-- Button text End -->

            <!-- Price Text Start -->
            <h1 class="custom-text-xl text-custom-darkgreen font-semibold">
              $700
            </h1>
            <!-- Price Text End -->
          </CustomButton>
          <!-- Button with Price End -->
        </div>
        <!-- Header wrapper End -->

        <!-- Text wrapper Start -->
        <div>
          <!-- Text Start -->
          <p class="custom-text-sm text-custom-darkgreen font-medium">
            {{ $t("FlightSearch.Travel.card-Text") }}
          </p>
          <!-- Text End -->
        </div>
        <!-- Text wrapper End -->
      </div>
      <!-- Top wrapper End -->

      <!-- Use Custom Button Component Start -->
      <CustomButton class="w-full h-12 flex justify-center bg-default">
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.Travel.button") }}
        </p>
      </CustomButton>
      <!-- Use Custom Button Component End -->
    </div>
    <!-- Aside wrapper End -->
    <!-- Left Side wrapper Start -->
    <div class="max-w-[656px] flex flex-wrap justify-between">
      <!-- Image -->
      <img
        src="@/assets/images/png/Flight/shri-Lanka-1.png"
        alt="shri-Lanka-1"
        class="flex-grow"
      />
      <!-- Image -->
      <img
        src="@/assets/images/png/Flight/shri-Lanka-2.png"
        alt="shri-Lanka-2"
        class="flex-grow"
      />
      <!-- Image -->
      <img
        src="@/assets/images/png/Flight/shri-Lanka-3.png"
        alt="shri-Lanka-3"
        class="flex-grow"
      />
      <!-- Image -->
      <img
        src="@/assets/images/png/Flight/shri-Lanka-4.png"
        alt="shri-Lanka-4"
        class="flex-grow"
      />
    </div>
    <!-- Left Side wrapper End -->
  </div>
  <!-- Travel wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
