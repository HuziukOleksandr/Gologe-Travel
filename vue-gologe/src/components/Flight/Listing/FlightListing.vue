<template>
    <!-- Listing wrapper Start -->
    <div class="max-w-[1230px] w-full flex flex-col">
        <!-- Flight Search wrapper Start -->
        <div
            class="w-full h-[120px] rounded-[16px] flex gap-[24px] items-center shadow-xl mb-[32px] px-[24px]"
        >
            <!-- Use Flight Search Component -->
            <CustomFlightSearch />

            <!-- Button for Search Start -->
            <CustomButton
                class="p-[16px] rounded-[4px] bg-buttonGreen flex justify-center items-center"
            >
                <img src="@/assets/images/Search.svg" alt="Search" />
            </CustomButton>
            <!-- Button for Search End -->
        </div>
        <!-- Flight Search wrapper End -->

        <!-- Content wrapper Start -->
        <div class="w-full flex justify-between mb-[120px]">
            <!-- Filters wrapper Start -->
            <div class="max-w-[345px] w-full min-h-[880px]"></div>
            <!-- Filters wrapper End -->

            <!-- Line Start -->
            <div class="w-[1px] h-[1360px] bg-gray"></div>
            <!-- Line End -->

            <!-- Places wrapper Start -->
            <div
                class="max-w-[840px] w-full min-h-[1430px] flex flex-col justify-between"
            >
                <!-- Header wrapper Start -->
                <div class="w-full h-[80px] rounded-[12px] shadow-sm"></div>
                <!-- Header wrapper End -->

                <!-- Showing info wrapper start -->
                <div class="w-full h-[18px]"></div>
                <!-- Showing info wrapper End -->

                <!-- Results wrapper Start -->
                <div class="w-full h-[1210px]"></div>
                <!-- Results wrapper End -->

                <!-- Show button Start -->
                <CustomButton class="w-full h-[48px] bg-green"> </CustomButton>
                <!-- Show button End -->
            </div>
            <!-- Places wrapper End -->
        </div>
        <!-- Content wrapper End -->
    </div>
    <!-- Listing wrapper End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
