<template>
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.Payment.title") }}
  </h1>
  <div class="w-full flex flex-wrap gap-6 px-6 py-8 rounded-2xl shadow-xl">
    <Card />
    <Add @open-window="open" @click="openModalWindow()" />
  </div>
  <CustomModalWindow :isOpen="openWindow" @close-window="closeModalWindow()">
    <CustomAddPayment @close-window="closeModalWindow()" />
  </CustomModalWindow>
</template>

<script setup lang="ts">
import Card from "./Cards/Card.vue";
import Add from "./Cards/AddCard.vue";
import { ref } from "vue";

const emit = defineEmits(["openWindow"]),
  openWindow = ref<boolean>(false);

const openModalWindow = () => {
  openWindow.value = true;
};

const closeModalWindow = () => {
  openWindow.value = false;
};

const open = () => {
  emit("openWindow");
};
</script>

<style scoped></style>
