<template>
    <!-- Login wrapper Start -->
    <div
        class="max-w-[1440px] w-full min-h-[500px] py-[50px] flex gap-[20px] justify-center sm:py-[20px] sm:px-[20px]"
    >
        <!-- Aside wrapper Start -->
        <div class="max-w-[510px] w-full">
            <!-- USe Custom Logo -->
            <CustomLogo class="mb-[64px] sm:mb-[10px]" />

            <!-- Title Start -->
            <h1 class="custom-text-4xl font-bold mb-[16px]">
                {{ $t("Login.title") }}
            </h1>
            <!-- Title End -->

            <!-- Text Start -->
            <h2
                class="custom-text-base font-regular mb-[50px] text-gray sm:mb-[15px]"
            >
                {{ $t("Login.subTitle") }}
            </h2>
            <!-- Text End -->

            <!-- Wrapper for Inputs Start -->
            <div class="flex flex-col gap-[24px] mb-[40px] sm:mb-[20px]">
                <!-- Use Custom Input "Email" Start -->
                <CustomInput
                    class="h-[56px] font-serrat font-medium text-green sm:h-[45px]"
                    type="email"
                    :placeHolder="$t('Login.email')"
                    @inputValue="loginForm"
                >
                    <!-- Slot for Name Start -->
                    <template v-slot:input>
                        {{ $t("Login.email") }}
                    </template>
                    <!-- Slot for Name End -->
                </CustomInput>
                <!-- Use Custom Input "Email" End -->

                <!-- Use Custom Input Password "Password" Start -->
                <CustomInputPassword
                    class="h-[56px] font-serrat font-medium text-green sm:h-[45px]"
                    :placeHolder="$t('Login.password')"
                >
                    <!-- Slot for Name -->
                    <template v-slot:input>
                        {{ $t("Login.password") }}
                    </template>
                </CustomInputPassword>
                <!-- Use Custom Input Password "Password" End -->

                <!-- Wrapper for CheckBox and Forgot Start -->
                <div
                    class="w-full h-[25px] flex justify-between sm:flex-wrap sm:mb-[15px] sm:gap-[5px]"
                >
                    <!-- Use Custom CheckBox "Remember" Start  -->
                    <CustomCheckbox>
                        {{ $t("Login.remember") }}
                    </CustomCheckbox>
                    <!-- Use Custom CheckBox "Remember" End  -->

                    <!-- Use Router Link "Forgot Password" Start -->
                    <router-link
                        to="/login/forgotpassword/"
                        class="custom-text-base font-bold text-red"
                    >
                        {{ $t("Login.forgot") }}
                    </router-link>
                    <!-- Use Router Link "Forgot Password" End -->
                </div>
                <!-- Wrapper for CheckBox and Forgot End -->
            </div>
            <!-- Wrapper for Inputs End -->

            <!-- Use Custom Button "Login" Start -->
            <CustomButton
                class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green sm:h-[45px]"
                @click="$router.push({ name: 'Account' })"
            >
                {{ $t("Login.title") }}
            </CustomButton>
            <!-- Use Custom Button "Login" End -->

            <!-- Wrapper for Question and Register Start -->
            <div
                class="w-full h-[20px] flex justify-center gap-[5px] mb-[40px] sm:flex-wrap sm:mb-[15px]"
            >
                <!-- Text question Start -->
                <span class="custom-text-base font-bold">
                    {{ $t("Login.question") }}
                </span>
                <!-- Text question End -->

                <!-- Ise Router Link for Register Start -->
                <router-link
                    to="/register"
                    class="custom-text-base font-bold text-red"
                >
                    {{ $t("Login.signUp") }}
                </router-link>
                <!-- Ise Router Link for Register End -->
            </div>
            <!-- Wrapper for Question and Register End -->

            <!-- Text "Login With" wrapper Startc -->
            <div
                class="w-full h-[18px] flex items-center mb-[40px] sm:mb-[15px]"
            >
                <!-- Line Start -->
                <hr class="grow text-gray" />
                <!-- Line End -->

                <!-- Text Start -->
                <div
                    class="font-serrat font-[400] text-sm px-[10px] grow-0 text-gray bg-background"
                >
                    {{ $t("Login.orLoginWith") }}
                </div>
                <!-- Text End -->

                <!-- Line Start -->
                <hr class="grow text-gray" />
                <!-- Line End -->
            </div>
            <!-- Text "Login With" wrapper End -->

            <!-- Use Login With Component -->
            <LoginWith />
        </div>

        <!-- Wrapper for Carousel Start -->
        <div class="max-w-[620px] w-full relative hidden lg:flex">
            <!-- Use Custom Carousel Component -->
            <CustomCarousel :slides="slides" />
        </div>
        <!-- Wrapper for Carousel End -->
    </div>
    <!-- Login wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginWith from "./LoginWith.vue";

// Slides Image Array for carousel
const slides = ref(["login-one", "login-two", "login-three"]);

let login = ref<string>();

// Method Login Form
const loginForm = (value: string) => {
    login.value = value;
};
</script>

<style scoped></style>
