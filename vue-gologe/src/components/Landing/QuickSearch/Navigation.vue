<template>
    <!-- Quick Search Custom Navigation -->
    <!-- Use Custom Button Component "Flight" Start -->
    <CustomButton class="custom-text-base font-bold">
        <!-- Flight Button Image -->
        <img src="@/assets/images/flight-black.svg" alt="flight" />
        {{ $t("Landing.QuickSearch.flights") }}
    </CustomButton>
    <!-- Use Custom Button Component "Flight" End -->

    <!-- Use Custom Button Component "Hotel" Start -->
    <CustomButton class="custom-text-base font-bold">
        <!-- Hotel Button Image -->
        <img src="@/assets/images/hotel-black.svg" alt="hotel" />
        {{ $t("Landing.QuickSearch.stays") }}
    </CustomButton>
    <!-- Use Custom Button Component "Hotel" End -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
