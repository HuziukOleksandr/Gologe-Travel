<template>
    <div
        class="max-w-[1440px] w-full min-h-[900px] p-[104px] flex justify-between"
    >
        <div class="max-w-[510px] w-full">
            <CustomLogo class="mb-[64px]" />

            <CustomButton
                class="h-[24px] font-medium mb-[15px]"
                @click="$router.push({ name: 'Login' })"
            >
                <img
                    src="@/assets/images/chevron-down.svg"
                    alt="hotel"
                    class="rotate-90"
                />
                {{ $t("ForgotPassword.buttonBack") }}
            </CustomButton>

            <h1 class="custom-text-4xl font-bold mb-[16px]">
                {{ $t("ForgotPassword.title") }}
            </h1>

            <h2 class="custom-text-base font-regular mb-[50px] text-gray">
                {{ $t("ForgotPassword.subTitle") }}
            </h2>

            <div class="flex flex-col gap-[24px] mb-[30px]">
                <CustomInput
                    class="h-[56px] font-serrat font-medium text-green"
                    type="email"
                    :placeHolder="$t('ForgotPassword.email')"
                >
                    <template v-slot:input>
                        {{ $t("ForgotPassword.email") }}
                    </template>
                </CustomInput>
            </div>

            <CustomButton
                class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
                @click="$router.push({ name: 'Verify' })"
            >
                {{ $t("ForgotPassword.button") }}
            </CustomButton>

            <div class="w-full h-[18px] flex items-center mb-[50px]">
                <hr class="grow text-gray" />
                <div
                    class="font-serrat font-[400] text-sm px-[10px] grow-0 text-gray bg-background"
                >
                    {{ $t("Login.orLoginWith") }}
                </div>
                <hr class="grow text-gray" />
            </div>

            <LoginWith />
        </div>

        <div class="max-w-[620px] w-full relative flex">
            <CustomCarousel :slides="slides" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginWith from "../Login/LoginWith.vue";

const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
