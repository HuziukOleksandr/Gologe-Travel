<template>
    <!-- Add Payment wrapper Start -->
    <div
        class="max-w-[1440px] w-full min-h-[900px] py-[50px] px-[104px] flex justify-between"
    >
        <!-- Add Payment carousel wrapper Start -->
        <div class="max-w-[490px] w-full h-[816px] relative flex">
            <!-- Use Custom Carousel Component -->
            <CustomCarousel :slides="slides" />
        </div>
        <!-- Add Payment carousel wrapper End -->

        <!-- Aside wrapper Start -->
        <div class="max-w-[640px] w-full min-h-[750px]">
            <!-- Use Custom Logo -->
            <CustomLogo class="mb-[60px]" />

            <!-- Use Custom Buttom "Back" Start -->
            <CustomButton
                class="h-[24px] font-medium mb-[15px]"
                @click="$router.push({ name: 'Register' })"
            >
                <!-- Button Image -->
                <img
                    src="@/assets/images/chevron-down.svg"
                    alt="hotel"
                    class="rotate-90"
                />
                {{ $t("AddPayment.back") }}
            </CustomButton>
            <!-- Use Custom Buttom "Back" End -->

            <!-- Add Payment Title Start -->
            <h1 class="custom-text-4xl font-bold mb-[16px]">
                {{ $t("AddPayment.title") }}
            </h1>
            <!-- Add Payment Title End -->

            <!-- Add Payment SubTitle Start -->
            <h2 class="custom-text-base font-regular mb-[50px] text-gray">
                {{ $t("AddPayment.subTitle") }}
            </h2>
            <!-- Add Payment SubTitle End -->

            <!-- Add Payment inputs wrapper Start -->
            <div class="flex flex-col gap-[24px] mb-[40px]">
                <!-- Use Custom Input "Card Numder" Start -->
                <CustomInput
                    class="w-full h-[56px] font-serrat font-medium text-green"
                    type="text"
                    :placeHolder="$t('AddPayment.card')"
                >
                    <!-- Use Slot for Input Name Start -->
                    <template v-slot:input>
                        {{ $t("AddPayment.card") }}
                    </template>
                    <!-- Use Slot for Input Name Start -->
                </CustomInput>
                <!-- Use Custom Input "Card Numder" End -->

                <!-- Wrapper for Date and CVC inputs Start -->
                <div class="flex justify-between">
                    <!-- Use Custom Input "Exp. Date" Start -->
                    <CustomInput
                        class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
                        type="date"
                        :placeHolder="$t('AddPayment.date')"
                    >
                        <!-- Use Slot for Input Name End -->
                        <template v-slot:input>
                            {{ $t("AddPayment.date") }}
                        </template>
                        <!-- Use Slot for Input Name End -->
                    </CustomInput>
                    <!-- Use Custom Input "Exp. Date" End -->

                    <!-- Use Custom Input "CVC" Start -->
                    <CustomInput
                        class="max-w-[310px] w-full h-[56px] font-serrat font-medium text-green"
                        type="text"
                        :placeHolder="$t('AddPayment.CVC')"
                    >
                        <!-- Use Slot for Input Name Start -->
                        <template v-slot:input>
                            {{ $t("AddPayment.CVC") }}
                        </template>
                        <!-- Use Slot for Input Name End -->
                    </CustomInput>
                    <!-- Use Custom Input "CVC" End -->
                </div>
                <!-- Wrapper for Date and CVC inputs End -->

                <!-- Use Custom Input "Name of Card" Start -->
                <CustomInput
                    class="h-[56px] font-serrat font-medium text-green"
                    :placeHolder="$t('AddPayment.cardName')"
                >
                    <!-- Use Slot for Input Name Start -->
                    <template v-slot:input>
                        {{ $t("AddPayment.cardName") }}
                    </template>
                    <!-- Use Slot for Input Name End -->
                </CustomInput>
                <!-- Use Custom Input "Name of Card" End -->

                <!-- Wrapper Custom Input "Country or Region" Start -->
                <div
                    class="relative w-full"
                    @click="tripVisible = !tripVisible"
                >
                    <!-- Use Custom Input "Country or Region" Start -->
                    <CustomInput
                        class="h-[56px] font-serrat font-medium text-green"
                        :placeHolder="$t('AddPayment.from')"
                    >
                        <!-- Use Slot for Input Name Start -->
                        <template v-slot:input>
                            {{ $t("AddPayment.from") }}
                        </template>
                        <!-- Use Slot for Input Name Start -->

                        <!-- Use Slot for Input Image Start -->
                        <template v-slot:image>
                            <!-- Input Image -->
                            <img
                                src="@/assets/images/chevron-down.svg"
                                alt="arrowswap"
                                class="h-[24px]"
                            />
                        </template>
                        <!-- Use Slot for Input Image End -->
                    </CustomInput>
                    <!-- Use Custom Input "Country or Region" End -->

                    <!-- Use Custom Input List Component -->
                    <CustomInputList
                        :dialogVisible="tripVisible"
                        @close-window="tripVisible = !tripVisible"
                    />
                </div>
                <!-- Wrapper Custom Input "Country or Region" End -->

                <!-- Use Custom Check Box Component Start -->
                <CustomCheckbox>
                    {{ $t("AddPayment.checkbox") }}
                </CustomCheckbox>
                <!-- Use Custom Check Box Component End -->
            </div>
            <!-- Add Payment inputs wrapper End -->

            <!-- Use Custom Button "Add Payment" Start -->
            <CustomButton
                class="w-full h-[48px] rounded-[4px] mb-[16px] justify-center custom-text-sm font-bold bg-buttonGreen text-green"
            >
                {{ $t("AddPayment.button") }}
            </CustomButton>
            <!-- Use Custom Button "Add Payment" End -->

            <!-- Bottom Text wrapper Start -->
            <div class="mb-[40px] max-w-[530px] w-full h-[45px] flex mx-auto">
                <!-- Text Start -->
                <span class="custom-text-xs font-regular text-center text-gray">
                    {{ $t("AddPayment.text") }}
                </span>
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

const tripVisible = ref<boolean>(false);

// Slides Image Array for carousel
const slides = ref([
    "register-slide-one",
    "register-slide-two",
    "register-slide-one",
]);
</script>

<style scoped></style>
