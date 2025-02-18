<template>
  <div
      class="w-[640px] h-[740px] bg-default rounded-xl p-16 flex flex-col justify-between"
    >
      <div class="w-full flex justify-end">
        <CustomButton @click="closeModalWindow()">
          <img src="@/assets/images/svg/UI/close.svg" alt="close" />
        </CustomButton>
      </div>
      <h1 class="custom-text-4xl font-semibold mb-16">
        {{ $t("FlightBooking.Payment.title") }}
      </h1>
      <div class="w-full flex flex-col gap-6">
        <CustomInput
          class="font-serrat font-medium text-custom-darkgreen"
          type="text"
          :placeHolder="$t('FlightBooking.Payment.card')"
        >
          <template v-slot:input>
            {{ $t("FlightBooking.Payment.card") }}
          </template>
        </CustomInput>
        <div class="flex justify-between flex-wrap gap-5">
          <CustomInput
            class="font-serrat font-medium text-custom-darkgreen flex-grow"
            type="date"
            :placeHolder="$t('FlightBooking.Payment.date')"
          >
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.date") }}
            </template>
          </CustomInput>
          <CustomInput
            class="font-serrat font-medium text-custom-darkgreen flex-grow"
            type="text"
            :placeHolder="$t('FlightBooking.Payment.CVC')"
          >
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.CVC") }}
            </template>
          </CustomInput>
        </div>
        <CustomInput
          class="font-serrat font-medium text-custom-darkgreen flex-grow"
          :placeHolder="$t('FlightBooking.Payment.cardName')"
        >
          <template v-slot:input>
            {{ $t("FlightBooking.Payment.cardName") }}
          </template>
        </CustomInput>
        <div class="relative w-full" @click="countryVisible = !countryVisible">
          <CustomInput
            class="font-serrat font-medium text-custom-darkgreen"
            :placeHolder="$t('FlightBooking.Payment.from')"
          >
            <template v-slot:input>
              {{ $t("FlightBooking.Payment.from") }}
            </template>
            <template v-slot:image>
              <!-- Input Image -->
              <img
                src="@/assets/images/svg/UI/chevron-down.svg"
                alt="arrowswap"
                class="h-6"
              />
            </template>
          </CustomInput>
          <CustomInputList
            :dialogVisible="countryVisible"
            @close-window="countryVisible = !countryVisible"
          />
        </div>
      </div>
      <CustomCheckbox>
        <p class="custom-text-base font-semibold">
          {{ $t("FlightBooking.Payment.checkbox") }}
        </p>
      </CustomCheckbox>
      <CustomButton class="w-full h-12 justify-center bg-custom-lightgreen mb-4">
        <p class="custom-text-sm text-custom-darkgreen font-semibold">
          {{ $t("FlightBooking.Payment.buttonAddCard") }}
        </p>
      </CustomButton>
      <p class="custom-text-xs text-custom-darkgray font-semibold text-center">
        {{ $t("FlightBooking.Payment.text") }}
      </p>
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
