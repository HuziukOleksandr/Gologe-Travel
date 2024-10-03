<template>
  <!-- Payment Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.Payment.title") }}
  </h1>
  <!-- Payment Title End -->

  <!-- Content wrapper Start -->
  <div
    class="w-full flex gap-6 px-6 py-8 rounded-2xl shadow-xl"
  >
    <!-- Use Card Component -->
    <Card />

    <!-- Use Add Payment Component -->
    <Add @open-window="open" @click="openModalWindow()"/>
  </div>
  <!-- Content wrapper End -->
  <CustomModalWindow :isOpen="openWindow" @close-window="closeModalWindow()">
    <CustomAddPayment @close-window="closeModalWindow()" />
  </CustomModalWindow>
</template>

<script setup lang="ts">
import Card from "./Card.vue";
import Add from "./AddCard.vue";

import { ref } from "vue";

const emit = defineEmits(["openWindow"]);

const openWindow = ref<boolean>(false);
const openModalWindow = () => {
  openWindow.value = true;
};

const closeModalWindow = () => {
  openWindow.value = false;
};

// Method Open
const open = () => {
  emit("openWindow");
};
</script>

<style scoped></style>
