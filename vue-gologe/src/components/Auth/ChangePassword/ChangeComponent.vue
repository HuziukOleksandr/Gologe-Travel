<template>
    <!-- Change Password wrapper Start -->
    <div
        class="max-w-[1440px] w-full min-h-[900px] py-[50px] px-[104px] flex justify-between"
    >
        <!-- Aside wrapper Start -->
        <div class="max-w-[510px] w-full">
            <!-- Use Custom Logo -->
            <CustomLogo class="mb-[64px]" />

            <!-- Change Password Title Start -->
            <h1 class="custom-text-4xl font-bold mb-[16px]">
                {{ $t("ChangePassword.title") }}
            </h1>
            <!-- Change Password Title End -->

            <!-- Change Password SubTitle Start -->
            <h2 class="custom-text-base font-regular mb-[50px] text-gray">
                {{ $t("ChangePassword.subTitle") }}
            </h2>
            <!-- Change Password SubTitle End -->

            <!-- Wrapper for Inputs Start -->
            <div class="flex flex-col gap-[24px] mb-[30px]">
                <!-- Use Custom Input Password "Create Password" Start -->
                <CustomInputPassword
                    class="h-[56px] font-serrat font-medium text-green"
                    :placeHolder="$t('ChangePassword.create')"
                >
                    <!-- Use Slot for Name Start -->
                    <template v-slot:input>
                        {{ $t("ChangePassword.create") }}
                    </template>
                    <!-- Use Slot for Name End -->
                </CustomInputPassword>
                <!-- Use Custom Input Password "CreatecPassword" End -->

                <!-- Use Custom Input Password "Re-Enter Passwordc" Start -->
                <CustomInputPassword
                    class="h-[56px] font-serrat font-medium text-green"
                    :placeHolder="$t('ChangePassword.re-enter')"
                >
                    <!-- Use Slot for Name Start -->
                    <template v-slot:input>
                        {{ $t("ChangePassword.re-enter") }}
                    </template>
                    <!-- Use Slot for Name End -->
                </CustomInputPassword>
                <!-- Use Custom Input Password "Re-Enter Password" End -->
            </div>
            <!-- Wrapper for Inputs End -->

            <!-- Use Custom Button "Change Password" Start -->
            <CustomButton
                class="w-full h-[48px] rounded-[4px] mb-[50px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
            >
                {{ $t("ChangePassword.button") }}
            </CustomButton>
            <!-- Use Custom Button "Change Password" End -->
        </div>
        <!-- Aside wrapper End -->

        <!-- Wrapper for Carousel Start -->
        <div class="max-w-[620px] w-full relative flex">
            <!-- Use Custom Carousel Component -->
            <CustomCarousel :slides="slides" />
        </div>
        <!-- Wrapper for Carousel End -->
    </div>
    <!-- Change Password wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";

// Slides Image Array for carousel
const slides = ref(["login-one", "login-two", "login-three"]);
</script>

<style scoped></style>
