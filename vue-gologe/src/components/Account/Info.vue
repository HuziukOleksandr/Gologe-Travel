<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <VForm
    @submit="Change"
    :validationSchema="validationScheme"
    class="w-full flex flex-col gap-8 px-6 py-8 rounded-2xl shadow-xl border-[1px] border-custom-lightgreen"
  >
    <!-- Name wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.name") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">
          {{ userStore.user.firstName }} {{ userStore.user.lastName }}
        </h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <div class="flex flex-col gap-1">
          <!-- Change input Start -->
          <Field name="name" v-slot="{ field }">
            <Transition name="grow-right">
              <input
                v-show="inputVisible.name"
                v-bind="field"
                class="change_input"
                type="text"
                placeHolder="Name"
                v-model="field.value"
              />
            </Transition>
          </Field>
          <ErrorMessage
            as="div"
            name="name"
            class="custom-text-xs text-custom-red font-semibold"
          />
          <!-- Change input End -->
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.name = true"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text" v-if="inputVisible.name">
            {{ $t("Account.Account.confirm") }}
          </p>
          <p class="button-text" v-else>
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Name wrapper End -->

    <!-- Email wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.email") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">{{ userStore.user.email }}</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <!-- Change input Start -->
        <Field name="email" v-slot="{ field }">
          <Transition name="grow-right">
            <input
              v-show="inputVisible.email"
              v-bind="field"
              class="change_input"
              type="text"
              placeHolder="Email"
              v-model="field.value"
            />
          </Transition>
        </Field>
        <!-- Change input End -->
        <ErrorMessage
          as="div"
          name="email"
          class="custom-text-xs text-custom-red font-semibold"
        />
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.email = true"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text" v-if="inputVisible.email">
            {{ $t("Account.Account.confirm") }}
          </p>
          <p class="button-text" v-else>
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Email wrapper End -->

    <!-- Save Button Start -->
    <CustomButton
      class="w-fit px-8 h-12 bg-custom-darkgreen self-center"
      @click="SaveChanges()"
    >
      <p class="custom-text-sm text-default font-semibold">
        {{ $t("Account.Account.save") }}
      </p>
    </CustomButton>
    <!-- Save Button End -->
  </VForm>

  <!-- Modal Window Start -->
  <CustomErrorWindow :isOpen="isModalOpen" @close-window="closeModal">
    <div
      class="h-fit flex items-center bg-default gap-2 px-10 py-4 rounded-xl shadow-2xl"
      @click="closeModal"
      :class="{ succes: result, error: !result }"
    >
      <img
        src="@/assets/images/svg/UI/close.svg"
        alt="close"
        class="h-4 w-4 hover:cursor-pointer"
      />
      <div class="w-fit">
        <p
          class="custom-text-base"
          :class="{
            'text-custom-lightgreen': result,
            'text-custom-red': !result,
          }"
        >
          {{ errorText }}
        </p>
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
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { object, string } from "yup";

const userStore = useUserStore(),
  isModalOpen = ref(false),
  errorText = ref<string>(""),
  result = ref<any>(),
  inputVisible = ref({
    name: false,
    email: false,
  }),
  error = ref<boolean>(false);

const Change = (value: any) => {
  inputVisible.value.email = false;
};

const validationScheme = object().shape({
  name: string()
    .required("Required field" + "*")
    .min(2, "Too Short" + "*"),
  email: string().required("Required field" + "*"),
});

async function SaveChanges() {
  await userStore.updateUserInDatabase();
}

const openModalWindow = (value: string) => {
  result.value = value[0];
  errorText.value = value[1];
  isModalOpen.value = true;
  closeAfterTime();
};

const closeModal = () => {
  isModalOpen.value = false;
};

const closeAfterTime = () => {
  setTimeout(() => {
    isModalOpen.value = false;
  }, 5000);
};
</script>

<style lang="scss" scoped>
.succes {
  @apply border-custom-lightgreen border-2 border-solid;
}

.error {
  @apply border-custom-red border-2 border-solid;
}

.wrapper {
  @apply w-full min-h-[68px] flex justify-between gap-2;
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
    @apply h-full flex  gap-2;
    @screen sm {
      @apply flex-col;
    }

    .change_input {
      @apply px-2 h-12  border-b-2;
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
.default-input {
  @apply border-b-custom-lightgreen;
}

.required-input {
  @apply border-b-custom-red;
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
