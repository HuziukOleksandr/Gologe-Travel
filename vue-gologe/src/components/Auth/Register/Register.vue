<template>
  <!-- Register wrapper Start -->
  <div class="auth-wrapper">
    <!-- Carousel wrapper Start -->
    <div class="max-w-[490px] auth-carousel-wrappe">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Carousel wrapper End -->

    <!-- Aside wrapper Start -->
    <div class="max-w-[640px] auth-aside-wrapper">
      <!-- Use Custom Logo Component -->
      <CustomLogo class="logo" />

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("Register.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("Register.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Wrapper for "First Name and Lact Name Start" -->
        <div class="auth-inputs-line-wrapper">
          <!-- Use Custom Input "First Name" Start -->
          <CustomInput
            type="text"
            :placeHolder="$t('Register.first')"
            v-model="user.firstName"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              <p class="auth-input-text">{{ $t("Register.first") }}</p>
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "First Name" End -->

          <!-- Use Custom Input "Last Name" Start -->
          <CustomInput
            type="text"
            :placeHolder="$t('Register.last')"
            v-model="user.lastName"
          >
            <!-- Slot for Name Start-->
            <template v-slot:input>
              <p class="auth-input-text">{{ $t("Register.last") }}</p>
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Last Name" End -->
        </div>
        <!-- Wrapper for "First Name and Lact Name End" -->

        <!-- Wrapper for Email and Phone Number Start -->
        <div class="auth-inputs-line-wrapper">
          <!-- Use Custom Input "Email" Start -->
          <CustomInput
            type="text"
            :placeHolder="$t('Register.email')"
            v-model="user.email"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              <p class="auth-input-text">{{ $t("Register.email") }}</p>
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Email" End -->

          <!-- Use Custom Input "Phone Number" Start -->
          <CustomInput
            type="text"
            :placeHolder="$t('Register.phone')"
            v-model="user.phone"
          >
            <!-- Slot for Name Start -->
            <template v-slot:input>
              <p class="auth-input-text">{{ $t("Register.phone") }}</p>
            </template>
            <!-- Slot for Name End -->
          </CustomInput>
          <!-- Use Custom Input "Phone Number" End -->
        </div>
        <!-- Wrapper for Email and Phone Number End -->

        <!-- Use Custom Input Password "Password" Start -->
        <CustomInputPassword
          :placeHolder="$t('Register.password')"
          v-model="user.password"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            <p class="auth-input-text">{{ $t("Register.password") }}</p>
          </template>
          <!-- Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Password" End -->

        <!-- Use Custom Input Password "Confirm Password" Start -->
        <CustomInputPassword
          :placeHolder="$t('Register.confirm')"
          v-model="ConfirmPassword"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            <p class="auth-input-text">{{ $t("Register.confirm") }}</p>
          </template>
          <!-- Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Confirm" End -->

        <!-- Use Custom CheckBox Start -->
        <CustomCheckbox class="custom-text-base font-semibold">
          <div class="sm:flex-wrap">
            {{ $t("Register.inputStart") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-custom-red">
              {{ $t("Register.terms") }}
            </router-link>
            <!-- Use Router Link End -->

            {{ $t("Register.inputAnd") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-custom-red">
              {{ $t("Register.privacy") }}
            </router-link>
            <!-- Use Router Link End -->
          </div>
        </CustomCheckbox>
        <!-- Use Custom CheckBox End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Login" Start -->
      <CustomButton class="auth-button" @click="Register">
        <p class="auth-button-text">{{ $t("Register.title") }}</p>
      </CustomButton>
      <!-- Use Custom Button "Login" End -->

      <!-- Wrapper for Question and Login Start -->
      <div class="w-full flex justify-center gap-1 sm:flex-wrap mb-4 lg:mb-1">
        <!-- Text Question Start -->
        <span class="custom-text-base font-semibold">
          {{ $t("Register.question") }}
        </span>
        <!-- Text Question End -->

        <!-- Use Router Link "Login" Start -->
        <router-link
          to="/login"
          class="custom-text-base text-custom-red font-semibold"
        >
          {{ $t("Register.login") }}
        </router-link>
        <!-- Use Router Link "Login" End -->
      </div>
      <!-- Wrapper for Question and Login Start -->

      <!-- Text "Register With" wrapper Start -->
      <div class="w-full flex items-center mb-4 lg:mb-10">
        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->

        <!-- Text Start -->
        <p class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
          {{ $t("Register.orSignUpWith") }}
        </p>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->
      </div>
      <!-- Text "Register With" wrapper End -->

      <!-- Use Register With Component -->
      <CustomRegisterWith />
    </div>
    <!-- Aside wrapper End -->
  </div>
  <!-- Register wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import type UserType from "@/types/user-types";

const authStore = useAuthStore();
const user = ref<UserType | null>(null);
const ConfirmPassword = ref<string>("");


async function Register() {
  if (user.value) { 
    authStore.setUser(user.value);
    await authStore.register();
  } else {
    console.error("User data is missing.");
  }

const slides = ref([
  "register-slide-one",
  "register-slide-two",
  "register-slide-one",
]);
</script>
