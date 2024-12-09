<template>
  <!-- Add Payment wrapper Start -->
  <div class="auth-wrapper">
    <!-- Carousel wrapper Start -->
    <div class="max-w-[490px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!--Carousel wrapper End -->

    <!-- Aside wrapper Start -->
    <div class="max-w-[640px] auth-aside-wrapper">
      <!-- Use Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Use Custom Buttom "Back" Start -->
      <CustomButton
        class="back-button"
        @click="$router.push({ name: 'Register' })"
      >
        <!-- Button Image -->
        <img
          src="@/assets/images/svg/UI/chevron-down.svg"
          alt="hotel"
          class="button-image"
        />
        <p class="button-text">{{ $t("AddPayment.back") }}</p>
      </CustomButton>
      <!-- Use Custom Buttom "Back" End -->

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("AddPayment.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("AddPayment.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Use Custom Input "Card Numder" Start -->
        <CustomInput type="text" :placeHolder="$t('AddPayment.card')">
          <!-- Use Slot for Input Name Start -->
          <template v-slot:input>
            <!-- Text Start -->
            <p class="auth-input-text">
              {{ $t("AddPayment.card") }}
            </p>
            <!-- Text End -->
          </template>
          <!-- Use Slot for Input Name Start -->
        </CustomInput>
        <!-- Use Custom Input "Card Numder" End -->

        <!-- Wrapper for Date and CVC inputs Start -->
        <div class="auth-inputs-line-wrapper">
          <!-- Use Custom Input "Exp. Date" Start -->
          <CustomInput
            class="flex-grow"
            type="date"
            :placeHolder="$t('AddPayment.date')"
          >
            <!-- Use Slot for Input Name End -->
            <template v-slot:input>
              <!-- Text Start -->
              <p class="auth-input-text">
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
              <p class="auth-input-text">
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
            <p class="auth-input-text">
              {{ $t("AddPayment.cardName") }}
            </p>
            <!-- Text End -->
          </template>
          <!-- Use Slot for Input Name End -->
        </CustomInput>
        <!-- Use Custom Input "Name of Card" End -->

        <!-- Wrapper Custom Input "Country or Region" Start -->
        <div class="relative w-full" @click="countryVisible = !countryVisible">
          <!-- Use Custom Input "Country or Region" Start -->
          <CustomInput :placeHolder="$t('AddPayment.from')">
            <!-- Use Slot for Input Name Start -->
            <template v-slot:input>
              <!-- text Start -->
              <p class="auth-input-text">
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
                class="h-6"
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
      <CustomButton class="auth-button">
        <!-- Text Start -->
        <p class="auth-button-text">
          {{ $t("AddPayment.button") }}
        </p>
        <!-- Text End -->
      </CustomButton>
      <!-- Use Custom Button "Add Payment" End -->

      <!-- Bottom Text wrapper Start -->
      <div class="w-full flex">
        <!-- Text Start -->
        <p class="custom-text-xs font-regular text-center text-custom-darkgray">
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
import { scrollTop } from "@/services/Scroll";

const countryVisible = ref<boolean>(false),
  slides = ref(["login-one", "login-two", "login-three"]);

scrollTop();
</script>