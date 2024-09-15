<template>
  <!-- Add Payment wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-12 flex gap-5 justify-center md:px-20 sm:py-5 sm:px-11"
  >
    <!-- Carousel wrapper Start -->
    <div class="max-w-[490px] w-full relative flex items-center sm:hidden">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!--Carousel wrapper End -->

    <!-- Aside wrapper Start -->
    <div class="max-w-[640px] w-full flex flex-col justify-center">
      <!-- Use Custom Logo -->
      <CustomLogo class="hidden sm:flex sm:mb-3 sm:h-6 sm:mx-auto" />

      <!-- Use Custom Buttom "Back" Start -->
      <CustomButton
        class="max-w-[70px] mb-4"
        @click="$router.push({ name: 'Register' })"
      >
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="rotate-90"
        />
        <p class="custom-text-xs font-bold">{{ $t("AddPayment.back") }}</p>
      </CustomButton>
      <!-- Use Custom Buttom "Back" End -->

      <!-- Title Start -->
      <h1 class="custom-text-4xl font-bold mb-[16px] sm:text-center">
        {{ $t("AddPayment.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2
        class="custom-text-base font-regular text-gray mb-[15px] lg:mb-[50px] sm:text-center"
      >
        {{ $t("AddPayment.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for inputs Start -->
      <div
        class="flex flex-col gap-[24px] mb-[40px] md:mb-[20px] sm:mb-[10px] sm:gap-[20px]"
      >
        <!-- Use Custom Input "Card Numder" Start -->
        <CustomInput type="text" :placeHolder="$t('AddPayment.card')">
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            <!-- Text Start -->
            <p class="font-serrat font-medium text-green">
              {{ $t("AddPayment.card") }}
            </p>
            <!-- Text End -->
          </template>
          <!-- Use Slot for Input Name Start -->
        </CustomInput>
        <!-- Use Custom Input "Card Numder" End -->

        <!-- Wrapper for Date and CVC inputs Start -->
        <div class="flex justify-between flex-wrap gap-[20px]">
          <!-- Use Custom Input "Exp. Date" Start -->
          <CustomInput
            class="flex-grow"
            type="date"
            :placeHolder="$t('AddPayment.date')"
          >
            <!-- Use Slot for Input Name End -->
            <template v-slot:input>
              <!-- Text Start -->
              <p class="font-serrat font-medium text-green">
                {{ $t("AddPayment.date") }}
              </p>
              <!-- Text End -->
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "Exp. Date" End -->

          <!-- Use Custom Input "CVC" Start -->
          <CustomInput
            class="flex-grow"
            type="text"
            :placeHolder="$t('AddPayment.CVC')"
          >
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              <!-- Text Start -->
              <p class="font-serrat font-medium text-green">
                {{ $t("AddPayment.CVC") }}
              </p>
              <!-- Text End -->
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "CVC" End -->
        </div>
        <!-- Wrapper for Date and CVC inputs End -->

        <!-- Use Custom Input "Name of Card" Start -->
        <CustomInput class="flex-grow" :placeHolder="$t('AddPayment.cardName')">
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            <!-- Text Start -->
            <p class="font-serrat font-medium text-green">
              {{ $t("AddPayment.cardName") }}
            </p>
            <!-- Text End -->
          </template>
          <!-- Use Slot for Input Name End -->
        </CustomInput>
        <!-- Use Custom Input "Name of Card" End -->

        <!-- Wrapper Custom Input "Country or Region" Start -->
        <div class="relative w-full" @click="tripVisible = !tripVisible">
          <!-- Use Custom Input "Country or Region" Start -->
          <CustomInput :placeHolder="$t('AddPayment.from')">
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              <!-- text Start -->
              <p class="font-serrat font-medium text-green">
                {{ $t("AddPayment.from") }}
              </p>
              <!-- text End -->
            </template>
            <!-- Use Slot for Input Name Start -->

            <!-- Use Slot for Input Image Start -->
            <template v-slot:image>
              <!-- Input Image -->
              <img
                src="@/assets/images/svg/UI/chevron-down.svg"
                alt="arrowswap"
                class="h-[24px]"
              />
            </template>
            <!-- Use Slot for Input Image End -->
          </CustomInput>
          <!-- Use Custom Input "Country or Region" End -->

          <!-- Use Custom Input List Component -->
          <CustomInputList
            :dialogVisible="countryVisible"
            @close-window="countryVisible = !countryVisible"
          />
        </div>
        <!-- Wrapper Custom Input "Country or Region" End -->

        <!-- Use Custom Check Box Component Start -->
        <CustomCheckbox>
          <!-- Text Start -->
          <p class="custom-text-base font-semibold">
            {{ $t("AddPayment.checkbox") }}
          </p>
          <!-- Text End -->
        </CustomCheckbox>
        <!-- Use Custom Check Box Component End -->
      </div>
      <!-- Wrapper for inputs End -->

      <!-- Use Custom Button "Add Payment" Start -->
      <CustomButton
        class="w-full h-16 mb-4 justify-center bg-buttonGreen sm:h-[45px]"
      >
        <!-- Text Start -->
        <p class="custom-text-sm font-semibold text-green">
          {{ $t("AddPayment.button") }}
        </p>
        <!-- Text End -->
      </CustomButton>
      <!-- Use Custom Button "Add Payment" End -->

      <!-- Bottom Text wrapper Start -->
      <div class="w-full flex">
        <!-- Text Start -->
        <p class="custom-text-xs font-regular text-center text-gray">
          {{ $t("AddPayment.text") }}
        </p>
        <!-- Text End -->
      </div>
      <!-- Bottom Text wrapper End -->
    </div>
    <!-- Aside wrapper End -->
  </div>
  <!-- Add Payment wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const countryVisible = ref<boolean>(false);

// Slides Image Array for carousel
const slides = ref([
  "register-slide-one",
  "register-slide-two",
  "register-slide-one",
]);
</script>
