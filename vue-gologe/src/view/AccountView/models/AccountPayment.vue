<template>
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.Payment.title") }}
  </h1>
  <div class="w-full flex flex-wrap gap-6 px-6 py-8 rounded-2xl shadow-xl">
    <MasterCard />
    <!-- Add -->
    <div class="add_wrapper" @click="openModalWindow">
      <div class="flex flex-col gap-4 items-center">
        <CustomButtom class="button">
          <img src="@/assets/images/svg/UI/plus.svg" alt="plus" />
        </CustomButtom>

        <h1 class="custom-text-sm">
          {{ $t("Account.Payment.addButton") }}
        </h1>
      </div>
    </div>
  </div>
  <CustomModalWindow :isOpen="openWindow" @close-window="closeModalWindow()">
    <CustomAddPayment @close-window="closeModalWindow()" />
  </CustomModalWindow>
</template>

<script setup lang="ts">
import MasterCard from "@/components/cards/MasterCard.vue";
import { ref } from "vue";

const openWindow = ref<boolean>(false);

const openModalWindow = () => {
  openWindow.value = true;
};

const closeModalWindow = () => {
  openWindow.value = false;
};
</script>

<style lang="scss" scoped>
.add_wrapper {
  @apply max-w-[375px] w-full h-[210px] 
	border-dashed border-custom-lightgreen border-2 rounded-2xl 
	flex justify-center items-center cursor-pointer;

  .button {
    @apply w-12 h-12 flex justify-center items-center
	  border-solid border-custom-lightgreen border-2 rounded-full;
  }
}
</style>
