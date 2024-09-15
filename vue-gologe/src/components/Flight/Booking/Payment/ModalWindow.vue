<template>
  <div
      class="w-[640px] h-[740px] bg-white rounded-xl p-16 flex flex-col justify-between"
    >
      <!-- Button wrapper Start -->
      <div class="w-full flex justify-end">
        <CustomButton @click="closeModalWindow()">
          <img src="@/assets/images/svg/UI/close.svg" alt="close" />
        </CustomButton>
      </div>
      <!-- Button wrapper End -->

      <!-- Title wrapper Start -->
      <h1 class="custom-text-4xl font-semibold mb-16">
        {{ $t("FlightBooking.Payment.title") }}
      </h1>
      <!-- Title wrapper End -->

      <!-- Wrapper for Inputs Start -->
      <div class="w-full flex flex-col gap-6">
        <!-- Use Custom Input "Card Numder" Start -->
        <CustomInput
          class="font-serrat font-medium text-green"
          type="text"
          :placeHolder="$t('FlightBooking.Payment.card')"
        >
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            {{ $t("FlightBooking.Payment.card") }}
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
            :placeHolder="$t('FlightBooking.Payment.date')"
          >
            <!-- Use Slot for Input Name End -->
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.date") }}
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "Exp. Date" End -->

          <!-- Use Custom Input "CVC" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('FlightBooking.Payment.CVC')"
          >
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.CVC") }}
            </template>
            <!-- Use Slot for Input Name End -->
          </CustomInput>
          <!-- Use Custom Input "CVC" End -->
        </div>
        <!-- Wrapper for Date and CVC inputs End -->

        <!-- Use Custom Input "Name of Card" Start -->
        <CustomInput
          class="font-serrat font-medium text-green flex-grow"
          :placeHolder="$t('FlightBooking.Payment.cardName')"
        >
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            {{ $t("FlightBooking.Payment.cardName") }}
          </template>
          <!-- Use Slot for Input Name End -->
        </CustomInput>
        <!-- Use Custom Input "Name of Card" End -->

        <!-- Wrapper Custom Input "Country or Region" Start -->
        <div class="relative w-full" @click="tripVisible = !tripVisible">
          <!-- Use Custom Input "Country or Region" Start -->
          <CustomInput
            class="font-serrat font-medium text-green"
            :placeHolder="$t('FlightBooking.Payment.from')"
          >
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.from") }}
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
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Check Box Component Start -->
      <CustomCheckbox>
        <!-- Text Start -->
        <p class="custom-text-base font-semibold">
          {{ $t("FlightBooking.Payment.checkbox") }}
        </p>
        <!-- Text End -->
      </CustomCheckbox>
      <!-- Use Custom Check Box Component End -->

      <!-- Buttom "Add Card" Start -->
      <CustomButton class="w-full h-12 justify-center bg-buttonGreen mb-4">
        <p class="custom-text-sm text-green font-semibold">
          {{ $t("FlightBooking.Payment.buttonAddCard") }}
        </p>
      </CustomButton>
      <!-- Buttom "Add Card" End -->

      <!-- Text Start -->
      <p class="custom-text-xs text-gray font-semibold text-center">
        {{ $t("FlightBooking.Payment.text") }}
      </p>
      <!-- Text End -->
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const countryVisible = ref<boolean>(false);

const emit = defineEmits(["close-window"])

const closeModalWindow = () => {
  emit("close-window")
};

</script>

<style scoped>

</style>