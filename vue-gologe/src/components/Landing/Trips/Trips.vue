<template>
    <!-- Trips wrapper Start -->
    <div class="max-w-[1230px] w-full min-h-[280px] flex flex-col gap-[40px]">
        <!-- Trips Header wrapper Start -->
        <div class="flex items-center justify-between">
            <!-- Text wrapper Start -->
            <div class="max-w-[1060px] w-full flex flex-col gap-[15px]">
                <!-- Title Start -->
                <h1 class="custom-text-3xl font-semibold text-black">
                    {{ $t("Landing.Trips.title") }}
                </h1>
                <!-- Title End -->

                <!-- Sub-Title Start -->
                <h2 class="custom-text-base font-regular text-gray">
                    {{ $t("Landing.Trips.sub-title") }}
                </h2>
                <!-- Sub-Title End -->
            </div>
            <!-- Text wrapper End -->

            <!-- Trip Header button Start -->
            <CustomButton
                class="h-[40px] border-[2px] border-buttonGreen px-[16px]"
            >
                {{ $t("Landing.Trips.button") }}
            </CustomButton>
            <!-- Trip Header button End -->
        </div>
        <!-- Trips Header wrapper End -->

        <!-- Cards wrapper Start -->
        <div class="flex flex-wrap gap-[30px]">
            <!-- User Card Component -->
            <Card :name="cards" />
        </div>
        <!-- Cerds wrapper End -->

        <!-- Content for Large Cards wrapper Start -->
        <div class="w-full h-[560px] flex justify-between">
            <!-- Use Flight Component -->
            <Flight />

            <!-- Use Hotel Component -->
            <Hotel />
        </div>
        <!-- Content for Large Cards wrapper End -->
    </div>
    <!-- Trips wrapper End -->
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Hotel from "./Hotel.vue";
import Flight from "./Flight.vue";
import { ref } from "vue";

// Array of card
const cards = ref([
    { city: "Istanbul", country: "Turkey" },
    { city: "Sydney", country: "Australia" },
    { city: "Baku", country: "Azerbaijan" },
    { city: "Male", country: "Maldives" },
    { city: "Paris", country: "France" },
    { city: "New York", country: "US" },
    { city: "London", country: "UK" },
    { city: "Tokyo", country: "Japan" },
    { city: "Dubai", country: "UAE" },
]);
</script>

<style scoped></style>
