<template>
  <!-- Login wrapper Start -->
  <div class="auth-wrapper">
    <!-- Aside wrapper Start -->
    <div class="max-w-[510px] auth-aside-wrapper">
      <!-- USe Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("Login.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("Login.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Use Custom Input "Email" Start -->
        <CustomInput
          class="lg:h-14"
          type="email"
          :placeHolder="$t('Login.email')"
          v-model="auth.email"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            <p class="auth-input-text">{{ $t("Login.email") }}</p>
          </template>
          <!-- Slot for Name End -->
        </CustomInput>
        <!-- Use Custom Input "Email" End -->

        <!-- Use Custom Input Password "Password" Start -->
        <CustomInputPassword
          :placeHolder="$t('Login.password')"
          v-model="auth.password"
        >
          <!-- Slot for Name -->
          <template v-slot:input>
            <p class="auth-input-text">{{ $t("Login.password") }}</p>
          </template>
        </CustomInputPassword>
        <!-- Use Custom Input Password "Password" End -->

        <!-- Wrapper for CheckBox and Forgot Start -->
        <div class="w-full flex justify-between sm:flex-wrap sm:mb-4 sm:gap-1">
          <!-- Use Custom CheckBox "Remember" Start  -->
          <CustomCheckbox class="custom-text-base font-semibold">
            {{ $t("Login.remember") }}
          </CustomCheckbox>
          <!-- Use Custom CheckBox "Remember" End  -->

          <!-- Use Router Link "Forgot Password" Start -->
          <router-link
            to="/login/forgotpassword/"
            class="custom-text-base text-custom-red font-semibold"
          >
            {{ $t("Login.forgot") }}
          </router-link>
          <!-- Use Router Link "Forgot Password" End -->
        </div>
        <!-- Wrapper for CheckBox and Forgot End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Login" Start -->
      <CustomButton class="auth-button" @click="Login">
        <p class="auth-button-text">{{ $t("Login.title") }}</p>
      </CustomButton>
      <!-- Use Custom Button "Login" End -->

      <!-- Wrapper for Question and Register Start -->
      <div class="w-full flex justify-center gap-1 mb-4 sm:flex-wrap lg:mb-10">
        <!-- Text question Start -->
        <span class="custom-text-base font-semibold">
          {{ $t("Login.question") }}
        </span>
        <!-- Text question End -->

        <!-- Ise Router Link for Register Start -->
        <router-link
          to="/register"
          class="custom-text-base text-custom-red font-semibold"
        >
          {{ $t("Login.signUp") }}
        </router-link>
        <!-- Ise Router Link for Register End -->
      </div>
      <!-- Wrapper for Question and Register End -->

      <!-- Text "Login With" wrapper Startc -->
      <div class="w-full flex items-center mb-4 lg:mb-10">
        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->

        <!-- Text Start -->
        <div class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
          {{ $t("Login.orLoginWith") }}
        </div>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->
      </div>
      <!-- Text "Login With" wrapper End -->

      <!-- Use Login With Component -->
      <CustomLoginWith />
    </div>

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Login wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import type AuthType from '@/types/auth-types';
const slides = ref(["login-one", "login-two", "login-three"]);

const router = useRouter();
const authStore = useAuthStore();

const auth = ref<AuthType>({
  email: "",
  password: "",
});

async function Login() {
  try {
    authStore.setAuth(auth.value);
    await authStore.login();
    router.push({name: "Account"})
  } catch (error) {
    alert(error);
  }
}
</script>
