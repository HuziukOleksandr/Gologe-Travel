<template>
	<!-- Forgot Password wrapper Start -->
    <div
        class="max-w-[1440px] w-full min-h-[500px] py-[50px] flex gap-[20px] justify-center sm:py-[20px] sm:px-[20px]"
    >
        <div class="max-w-[510px] w-full">
			<!-- USe Custom Logo -->
            <CustomLogo class="mb-[64px] sm:mb-[10px]" />

			<!-- Use Custom button "Back to login" Start -->
            <CustomButton
                class="h-[24px] font-medium mb-[15px]"
                @click="$router.push({ name: 'Login' })"
            >
				<!-- image for button -->
                <img
                    src="@/assets/images/chevron-down.svg"
                    alt="hotel"
                    class="rotate-90"
                />
                {{ $t("ForgotPassword.buttonBack") }}
            </CustomButton>
			<!-- Use Custom button "Back to login" End -->

			<!-- Title Start -->
            <h1 class="custom-text-4xl font-bold mb-[16px]">
                {{ $t("ForgotPassword.title") }}
            </h1>
			<!-- Title End -->

			<!-- Text Start -->
            <h2 class="custom-text-base font-regular mb-[50px] text-gray">
                {{ $t("ForgotPassword.subTitle") }}
            </h2>
			<!-- Text End -->

			<!-- Wrapper for Inputs Start -->
            <div class="flex flex-col gap-[24px] mb-[30px]">
				<!-- Use Custom Input "Email" Start -->
                <CustomInput
                    class="h-[56px] font-serrat font-medium text-green"
                    type="email"
                    :placeHolder="$t('ForgotPassword.email')"
                >
                    <template v-slot:input>
                        {{ $t("ForgotPassword.email") }}
                    </template>
                </CustomInput>
				<!-- Use Custom Input "Email" End -->
            </div>
			<!-- Wrapper for Inputs End -->

			<!-- Use Custom button "Submit" Start -->
            <CustomButton
                class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
                @click="$router.push({ name: 'Verify' })"
            >
                {{ $t("ForgotPassword.button") }}
            </CustomButton>
			<!-- Use Custom button "Submit" End -->

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
	<!-- Forgot Password wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginWith from "../Login/LoginWith.vue";

const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
