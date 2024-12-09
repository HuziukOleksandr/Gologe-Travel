<template>
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
    <VForm
      class="change_wrapper"
      @submit="Change"
      :validationSchema="validationScheme"
    >
      <div class="flex flex-col gap-1">
        <!-- Change input Start -->
        <Field name="name" v-slot="{ field }">
          <Transition name="grow-right">
            <input
              v-if="inputVisible"
              v-bind="field"
              class="change_input"
              type="text"
              placeHolder="Name"
              v-model="field.value"
              :class="{ 'required-input': error, 'default-input': !error }"
            />
          </Transition>
        </Field>
        <ErrorMessage as="div" name="name" class="custom-text-xs text-custom-red font-semibold" />
        <!-- Change input End -->
      </div>
      <!-- Confirm Button Start -->
      <CustomButton v-if="inputVisible" class="change_button" type="submit">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />

        <p class="button-text">
          {{ $t("Account.Account.confirm") }}
        </p>
      </CustomButton>
      <!-- Confirm Button End -->
      <!-- Change Button Start -->
      <CustomButton v-else class="change_button" @click="inputVisible = true">
        <!-- Button Image -->
        <img src="@/assets/images/svg/UI/change.svg" alt="change" />
        <p class="button-text">
          {{ $t("Account.Account.change") }}
        </p>
      </CustomButton>
      <!-- Change Button End -->
    </VForm>
    <!-- Change wrapper End -->
  </div>
  <!-- Name wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { object, string } from "yup";

const emit = defineEmits(["show-error"]);

const Name = ref<string>(""),
  inputVisible = ref<boolean>(false),
  userStore = useUserStore(),
  error = ref<boolean>(false);

const Change = (value: any) => {
  console.log(value);
};

const validationScheme = object().shape({
  name: string()
  .required("Required field" + "*")
  .min(2, "Too Short" + "*"),
});
</script>

<style lang="scss" scoped>
.wrapper {
  @apply w-full min-h-[68px] flex justify-between gap-2;
  @screen sm {
    @apply flex-col;
  }

  .text-wrapper {
    @apply flex flex-col gap-1;

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
