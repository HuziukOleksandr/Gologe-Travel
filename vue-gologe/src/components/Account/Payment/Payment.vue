<template>
    <!-- Payment Title Start -->
    <h1 class="custom-text-3xl font-bold mb-[16px]">
        {{ $t("Account.Payment.title") }}
    </h1>
    <!-- Payment Title End -->

    <!-- Content wrapper Start -->
    <div
        class="w-full flex gap-[24px] px-[24px] py-[32px] rounded-[16px] shadow-xl"
    >
        <!-- Use Card Component -->
        <Card />

        <!-- Use Add Payment Component -->
        <Add @open-window="open" />
    </div>
    <!-- Content wrapper End -->
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Add from "./AddCard.vue";

const emit = defineEmits(["openWindow"]);

// Method Open
const open = () => {
    emit("openWindow");
};
</script>

<style scoped></style>
