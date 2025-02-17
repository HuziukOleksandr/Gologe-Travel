<template>
  <div class="w-full flex justify-between gap-6 sm:flex-col">
    <div
      class="lg:max-w-[550px] bg-custom-lightgreen rounded-3xl p-6 flex flex-col justify-between sm:flex-grow"
    >
      <div class="flex flex-col gap-6">
        <div class="flex justify-between flex-wrap">
          <h1
            class="custom-text-4xl text-custom-darkgreen font-semibold max-w-[363px]"
          >
            {{ $t("FlightSearch.Travel.card-Title") }}
          </h1>
          <CustomButton
            class="h-13 px-4 py-2 flex gap-1 flex-col justify-center bg-default "
          >
            <p class="custom-text-sm text-custom-darkgreen fort-medium">
              {{ $t("FlightSearch.Travel.card-Button") }}
            </p>
            <h1 class="custom-text-xl text-custom-darkgreen font-semibold">
              $700
            </h1>
          </CustomButton>
        </div>
        <div>
          <p class="custom-text-sm text-custom-darkgreen font-medium">
            {{ $t("FlightSearch.Travel.card-Text") }}
          </p>
        </div>
      </div>
      <CustomButton class="w-full h-12 flex justify-center bg-default">
        <p class="custom-text-sm text-custom-darkgreen font-medium">
          {{ $t("FlightSearch.Travel.button") }}
        </p>
      </CustomButton>
    </div>
    <div class="max-w-[656px] flex flex-wrap justify-between gap-2">
      <img
        src="@/assets/images/png/Flight/shri-Lanka-1.jpg"
        alt="shri-Lanka-1"
        class="image"
      />
      <img
        src="@/assets/images/png/Flight/shri-Lanka-2.jpg"
        alt="shri-Lanka-2"
        class="image"
      />
      <img
        src="@/assets/images/png/Flight/shri-Lanka-3.jpg"
        alt="shri-Lanka-3"
        class="image"
      />
      <img
        src="@/assets/images/png/Flight/shri-Lanka-4.jpg"
        alt="shri-Lanka-4"
        class="image"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.image {
  @apply max-w-[320px] flex-grow rounded-3xl sm:max-w-full;
}
</style>
