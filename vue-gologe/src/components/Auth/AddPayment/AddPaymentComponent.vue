<template>
  <!-- Add Payment wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-[50px] flex gap-[20px] justify-center md:px-[90px] sm:py-[20px] sm:px-[45px]"
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
      <CustomLogo class="hidden sm:flex sm:mb-[10px] sm:h-[24px] sm:mx-auto" />

      <!-- Use Custom Buttom "Back" Start -->
      <CustomButton
        class="custom-text-xs font-bold mb-[15px] max-w-[70px]"
        @click="$router.push({ name: 'Register' })"
      >
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="rotate-90"
        />
        {{ $t("AddPayment.back") }}
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
        <CustomInput
          class="font-serrat font-medium text-green"
          type="text"
          :placeHolder="$t('AddPayment.card')"
        >
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            {{ $t("AddPayment.card") }}
          </template>
          <!-- Use Slot for Input Name Start -->
        </CustomInput>
        <!-- Use Custom Input "Card Numder" End -->

        <!-- Wrapper for Date and CVC inputs Start -->
        <div class="flex justify-between flex-wrap gap-[20px]">
          <!-- Use Custom Input "Exp. Date" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="date"
            :placeHolder="$t('AddPayment.date')"
          >
            <!-- Use Slot for Input Name End -->
            <template v-slot:input>
              {{ $t("AddPayment.date") }}
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "Exp. Date" End -->

          <!-- Use Custom Input "CVC" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('AddPayment.CVC')"
          >
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              {{ $t("AddPayment.CVC") }}
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "CVC" End -->
        </div>
        <!-- Wrapper for Date and CVC inputs End -->

        <!-- Use Custom Input "Name of Card" Start -->
        <CustomInput
          class="font-serrat font-medium text-green flex-grow"
          :placeHolder="$t('AddPayment.cardName')"
        >
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            {{ $t("AddPayment.cardName") }}
          </template>
          <!-- Use Slot for Input Name End -->
        </CustomInput>
        <!-- Use Custom Input "Name of Card" End -->

        <!-- Wrapper Custom Input "Country or Region" Start -->
        <div class="relative w-full" @click="tripVisible = !tripVisible">
          <!-- Use Custom Input "Country or Region" Start -->
          <CustomInput
            class="font-serrat font-medium text-green"
            :placeHolder="$t('AddPayment.from')"
          >
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              {{ $t("AddPayment.from") }}
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
            :dialogVisible="tripVisible"
            @close-window="tripVisible = !tripVisible"
          />
        </div>
        <!-- Wrapper Custom Input "Country or Region" End -->

        <!-- Use Custom Check Box Component Start -->
        <CustomCheckbox>
          {{ $t("AddPayment.checkbox") }}
        </CustomCheckbox>
        <!-- Use Custom Check Box Component End -->
      </div>
      <!-- Wrapper for inputs End -->

      <!-- Use Custom Button "Add Payment" Start -->
      <CustomButton
        class="custom-text-sm font-bold w-full h-[48px] rounded-[4px] mb-[16px] justify-center bg-buttonGreen text-green sm:h-[45px]"
      >
        {{ $t("AddPayment.button") }}
      </CustomButton>
      <!-- Use Custom Button "Add Payment" End -->

      <!-- Bottom Text wrapper Start -->
      <div class="w-full flex">
        <!-- Text Start -->
        <span class="custom-text-xs font-regular text-center text-gray">
          {{ $t("AddPayment.text") }}
        </span>
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

const tripVisible = ref<boolean>(false);

// Slides Image Array for carousel
const slides = ref([
  "register-slide-one",
  "register-slide-two",
  "register-slide-one",
]);
</script>
