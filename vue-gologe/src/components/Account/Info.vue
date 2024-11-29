<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <div
    class="w-full flex flex-col gap-8 px-6 py-8 rounded-2xl shadow-xl border-[1px] border-custom-lightgreen"
  >
    <Name @show-error="openModalWindow"/>

    <Email />

    <Phone />

    <Address />

    <Birth />

    <Password />

    <!-- Save Button Start -->
    <CustomButton
      class="px-4 h-12 bg-custom-red flex justify-center"
      @click="SaveChanges()"
    >
      <p class="custom-text-sm text-custom-darkgreen font-semibold">
        {{ $t("Account.Account.save") }}
      </p>
    </CustomButton>
    <!-- Save Button End -->
  </div>

  <!-- Modal Window Start -->
  <CustomErrorWindow :isOpen="isModalOpen" @close-window="closeModal">
    <div class="h-fit flex items-center bg-default gap-2 px-10 py-4 rounded-xl shadow-2xl" @click="closeModal">
      <img
        src="@/assets/images/svg/UI/close.svg"
        alt="close"
        class="h-4 w-4"
      />
      <div class="w-fit">
        <p class="custom-text-base">Undefained email</p>
      </div>
    </div>
  </CustomErrorWindow>
  <!-- Modal Window Emd -->
</template>

<script setup lang="ts">
//TODO: Добавити валідацію
//TODO: Добавити Зміну пароля
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import Name from "./InfoComponents/Name.vue";
import Email from "./InfoComponents/Email.vue";
import Password from "./InfoComponents/Password.vue";
import Phone from "./InfoComponents/Phone.vue";
import Address from "./InfoComponents/Address.vue";
import Birth from "./InfoComponents/Birth.vue";
import CustomButton from "../UI/CustomButton.vue";

const userStore = useUserStore(),
  isModalOpen = ref(false);

const openModalWindow = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

async function SaveChanges() {
  await userStore.updateUserInDatabase();
}
</script>

