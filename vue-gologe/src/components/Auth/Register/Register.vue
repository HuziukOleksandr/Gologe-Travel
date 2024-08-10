<template>
  <!-- Register wrapper Start -->
  <div
    class="max-w-[1440px] w-full py-[50px] flex gap-[20px] justify-center md:px-[90px] sm:py-[20px] sm:px-[45px]"
  >
    <!-- Carousel wrapper Start -->
    <div class="max-w-[490px] w-full relative flex items-center sm:hidden">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Carousel wrapper End -->

    <!-- Aside wrapper Start -->
    <div class="max-w-[640px] w-full flex flex-col justify-center">
      <!-- Use Custom Logo Component -->
      <CustomLogo class="hidden sm:flex sm:mb-[10px] sm:h-[24px] sm:mx-auto" />

      <!-- Title Start -->
      <h1 class="custom-text-4xl font-bold mb-[16px] sm:text-center">
        {{ $t("Register.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2
        class="custom-text-base font-regular mb-[50px] text-gray md:mb-[15px] sm:mb-[15px] sm:text-center"
      >
        {{ $t("Register.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div
        class="flex flex-col gap-[24px] mb-[40px] md:mb-[20px] sm:mb-[10px] sm:gap-[20px]"
      >
        <!-- Wrapper for "First Name and Lact Name Start" -->
        <div class="flex justify-between flex-wrap gap-[20px]">
          <!-- Use Custom Input "First Name" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('Register.first')"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              {{ $t("Register.first") }}
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "First Name" End -->

          <!-- Use Custom Input "Last Name" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('Register.last')"
          >
            <!-- Slot for Name Start-->
            <template v-slot:input>
              {{ $t("Register.last") }}
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Last Name" End -->
        </div>
        <!-- Wrapper for "First Name and Lact Name End" -->

        <!-- Wrapper for Email and Phone Number Start -->
        <div class="flex justify-between flex-wrap gap-[20px]">
          <!-- Use Custom Input "Email" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('Register.email')"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              {{ $t("Register.email") }}
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Email" End -->

          <!-- Use Custom Input "Phone Number" Start -->
          <CustomInput
            class="font-serrat font-medium text-green flex-grow"
            type="text"
            :placeHolder="$t('Register.phone')"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              {{ $t("Register.phone") }}
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Phone Number" End -->
        </div>
        <!-- Wrapper for Email and Phone Number End -->

        <!-- Use Custom Input Password "Password" Start -->
        <CustomInputPassword
          class="font-serrat font-medium text-green flex-grow"
          :placeHolder="$t('Register.password')"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            {{ $t("Register.password") }}
          </template>
          <!-- Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Password" End -->

        <!-- Use Custom Input Password "Confirm Password" Start -->
        <CustomInputPassword
          class="font-serrat font-medium text-green flex-grow"
          :placeHolder="$t('Register.confirm')"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            {{ $t("Register.confirm") }}
          </template>
          <!-- Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Confirm" End -->

        <!-- Use Custom CheckBox Start -->
        <CustomCheckbox>
          <div class="sm:flex-wrap">
            {{ $t("Register.inputStart") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-red">
              {{ $t("Register.terms") }}
            </router-link>
            <!-- Use Router Link End -->

            {{ $t("Register.inputAnd") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-red">
              {{ $t("Register.privacy") }}
            </router-link>
            <!-- Use Router Link End -->
          </div>
        </CustomCheckbox>
        <!-- Use Custom CheckBox End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Login" Start -->
      <CustomButton
        class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green sm:h-[45px]"
        @click="$router.push({ name: 'AddPayment' })"
      >
        {{ $t("Register.title") }}
      </CustomButton>
      <!-- Use Custom Button "Login" End -->

      <!-- Wrapper for Question and Login Start -->
      <div
        class="w-full flex justify-center gap-[5px] sm:flex-wrap mb-[40px] md:mb-[15px] sm:mb-[15px]"
      >
        <!-- Text Question Start -->
        <span class="custom-text-base font-bold">
          {{ $t("Register.question") }}
        </span>
        <!-- Text Question End -->

        <!-- Use Router Link "Login" Start -->
        <router-link to="/login" class="custom-text-base font-bold text-red">
          {{ $t("Register.login") }}
        </router-link>
        <!-- Use Router Link "Login" End -->
      </div>
      <!-- Wrapper for Question and Login Start -->

      <!-- Text "Register With" wrapper Start -->
      <div class="w-full flex items-center mb-[40px] md:mb-[15px] sm:mb-[15px]">
        <!-- Line Start -->
        <hr class="grow text-gray" />
        <!-- Line End -->

        <!-- Text Start -->
        <p class="custom-text-sm px-[10px] grow-0 text-gray bg-background">
          {{ $t("Register.orSignUpWith") }}
        </p>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-gray" />
        <!-- Line End -->
      </div>
      <!-- Text "Register With" wrapper End -->

      <!-- Use Register With Component -->
      <RegisterWith />
    </div>
    <!-- Aside wrapper End -->
  </div>
  <!-- Register wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import RegisterWith from "./RegisterWith.vue";

const slides = ref([
  "register-slide-one",
  "register-slide-two",
  "register-slide-one",
]);
</script>
