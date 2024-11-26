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
    <Name />

    <Email />

    <Phone />

    <Address/>

    <Birth />

    <Password />

    <CustomButton class="px-4 h-12 bg-custom-red flex justify-center">
      <p class="custom-text-base font-semibold"></p>
      Save</CustomButton>
  </div>

  <!-- Info wrapper End -->
  <CustomErrorWindow :isOpen="isModalOpen" @close-window="closeModal">
    <div class="error-wrapper" @click="closeModal">
      <img
        src="@/assets/images/svg/UI/close.svg"
        alt="close"
        class="close-image"
      />
      <div class="w-fit">
        <p class="error-text">Undefained email</p>
      </div>
    </div>
  </CustomErrorWindow>
</template>

<script setup lang="ts">
//TODO: Добавити валідацію
//TODO: Добавити Зміну пароля
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useValidationStore } from "@/stores/validationStore";
import type UserType from "@/types/user-types";
import Name from "./InfoComponents/Name.vue";
import Email from "./InfoComponents/Email.vue";
import Password from "./InfoComponents/Password.vue";
import Phone from "./InfoComponents/Phone.vue";
import Address from "./InfoComponents/Address.vue";
import Birth from "./InfoComponents/Birth.vue";
import CustomButton from '../UI/CustomButton.vue'

const userStore = useUserStore(),
  validationStore = useValidationStore(),
  ChangeValue = ref<string>(""),
  Value = ref<string>(""),
  InputName = ref<string>(""),
  Error = ref<boolean>(true),
  isModalOpen = ref(false);

const openModalWindow = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const Change = (value: string) => {
  InputName.value = value;
  Value.value = "";
  ChangeValue.value = value;
};

async function Confirm() {
  switch (ChangeValue.value) {
    case "name":
      validationStore.Name(Value.value);
      break;
    case "email":
      console.log("Email");
      break;
  }

  if (Value.value) {
    if (InputName.value === "name") {
      const [firstName, lastName] = Value.value.split(" ");
      userStore.setUserProperty("firstName", firstName);
      userStore.setUserProperty("lastName", lastName);
    } else {
      userStore.setUserProperty(
        ChangeValue.value as keyof UserType,
        Value.value
      );
    }
  }
  await userStore.updateUserInDatabase();
  console.log(userStore.result);

  ChangeValue.value = "";
  Value.value = "";
}
</script>

<style lang="scss" scoped>
.wrapper {
  @apply w-full min-h-[52px] flex justify-between gap-2;
  @screen sm {
    @apply flex-col;
  }

  .text-wrapper {
    @apply flex flex-col justify-between;

    .title {
      @apply font-serrat text-base font-semibold text-custom-darkgray;
    }

    .text {
      @apply font-serrat text-xl font-semibold text-black overflow-hidden text-ellipsis text-nowrap;
    }
  }

  .change_wrapper {
    @apply h-full flex items-center gap-2;
    @screen sm {
      @apply flex-col;
    }

    .change_input {
      @apply px-2 h-12 border-b-custom-lightgreen border-b-2;
      @screen sm {
        @apply w-full;
      }
    }
    .change_button {
      @apply w-fit h-12 flex border-custom-lightgreen justify-center gap-1 border-2 px-8;
      @screen sm {
        @apply h-10 px-2 w-full;
      }

      .button-text {
        @apply font-serrat text-sm text-custom-darkgreen font-medium;
      }
    }
  }
}

.grow-right-enter-active,
.grow-right-leave-active {
  transition: transform 0.5s ease;
}
.grow-right-enter-from {
  transform: scaleX(0);
  transform-origin: right;
}
.grow-right-enter-to {
  transform: scaleX(1);
  transform-origin: right;
}
.grow-right-leave-from {
  transform: scaleX(1);
  transform-origin: right;
}
.grow-right-leave-to {
  transform: scaleX(0);
  transform-origin: right;
}
</style>
