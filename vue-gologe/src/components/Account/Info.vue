<template>
  <!-- Info Title Start -->
  <h1 class="custom-text-3xl font-semibold mb-4">
    {{ $t("Account.account") }}
  </h1>
  <!-- Info Title Start -->

  <!-- Info wrapper Start -->
  <VForm
    @submit="SaveChanges"
    :validationSchema="validationScheme"
    v-slot="{ values }"
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
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="name"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.name"
            />
          </Transition>
          <!-- Change input End -->
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('name', values.name)"
          v-if="inputVisible.name"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.name = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />
          <p class="button-text">
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
        <div class="flex flex-col gap-1">
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
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="email"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.email"
            />
          </Transition>
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('email', values.email)"
          v-if="inputVisible.email"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.email = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Email wrapper End -->

    <!-- Password wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.password") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">***********</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <div class="flex flex-col gap-1">
          <!-- Change input Start -->
          <Field name="password" v-slot="{ field }">
            <Transition name="grow-right">
              <input
                v-show="inputVisible.password"
                v-bind="field"
                class="change_input"
                type="text"
                placeHolder="Password"
                v-model="field.value"
              />
            </Transition>
          </Field>
          <!-- Change input End -->
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="password"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.password"
            />
          </Transition>
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('password', values.password)"
          v-if="inputVisible.password"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.password = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Password wrapper End -->

    <!-- Phone wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.number") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">{{ userStore.user.phone }}</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <div class="flex flex-col gap-1">
          <!-- Change input Start -->
          <Field name="phone" v-slot="{ field }">
            <Transition name="grow-right">
              <input
                v-show="inputVisible.phone"
                v-bind="field"
                class="change_input"
                type="text"
                placeHolder="Phone"
                v-model="field.value"
              />
            </Transition>
          </Field>
          <!-- Change input End -->
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="phone"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.password"
            />
          </Transition>
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('phone', values.phone)"
          v-if="inputVisible.phone"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.phone = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Phone wrapper End -->

    <!-- Address wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.address") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">{{ userStore.user.address }}</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <div class="flex flex-col gap-1">
          <!-- Change input Start -->
          <Field name="address" v-slot="{ field }">
            <Transition name="grow-right">
              <input
                v-show="inputVisible.address"
                v-bind="field"
                class="change_input"
                type="text"
                placeHolder="Address"
                v-model="field.value"
              />
            </Transition>
          </Field>
          <!-- Change input End -->
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="address"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.password"
            />
          </Transition>
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('address', values.address)"
          v-if="inputVisible.address"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.address = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Address wrapper End -->

    <!-- Date of Birth wrapper Start -->
    <div class="wrapper">
      <!-- Text wrapper Start -->
      <div class="text-wrapper">
        <!-- Title Start -->
        <h1 class="title flex gap-1">
          {{ $t("Account.Account.birth") }}
          <p class="text-custom-red">*</p>
        </h1>
        <!-- Title End -->

        <!-- Text Start -->
        <h2 class="text">{{ userStore.user.birth }}</h2>
        <!-- Text End -->
      </div>
      <!-- Text wrapper End -->

      <!-- Change wrapper Start -->
      <div class="change_wrapper">
        <div class="flex flex-col gap-1">
          <!-- Change input Start -->
          <Field name="birth" v-slot="{ field }">
            <Transition name="grow-right">
              <input
                v-show="inputVisible.birth"
                v-bind="field"
                class="change_input"
                type="text"
                placeHolder="Date"
                v-model="field.value"
              />
            </Transition>
          </Field>
          <!-- Change input End -->
          <Transition name="grow-right">
            <ErrorMessage
              as="div"
              name="birth"
              class="custom-text-xs text-custom-red font-semibold"
              v-show="inputVisible.password"
            />
          </Transition>
        </div>
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="Change('birth', values.birth)"
          v-if="inputVisible.birth"
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.confirm") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
        <!-- Confirm Button Start -->
        <CustomButton
          class="change_button"
          type="submit"
          @click="inputVisible.birth = true"
          v-else
        >
          <!-- Button Image -->
          <img src="@/assets/images/svg/UI/change.svg" alt="change" />

          <p class="button-text">
            {{ $t("Account.Account.change") }}
          </p>
        </CustomButton>
        <!-- Confirm Button End -->
      </div>
      <!-- Change wrapper End -->
    </div>
    <!-- Date of Birth wrapper End -->

    <!-- Save Button Start -->
    <CustomButton
      class="w-fit px-8 h-12 bg-custom-darkgreen self-center"
      @click="SaveChanges"
    >
      <p class="custom-text-sm text-default font-semibold">
        {{ $t("Account.Account.save") }}
      </p>
    </CustomButton>
    <!-- Save Button End -->
  </VForm>
</template>

<script setup lang="ts">
//TODO: Добавити Зміну пароля
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { ErrorMessage, Field, useForm, Form as VForm } from "vee-validate";
import { object, string } from "yup";
import { useI18n } from "vue-i18n";

const userStore = useUserStore(),
  { t } = useI18n(),
  inputVisible = ref({
    name: false,
    email: false,
    password: false,
    phone: false,
    address: false,
    birth: false,
  });

const Change = (field: keyof typeof inputVisible.value, values: any) => {
  inputVisible.value[field] = !inputVisible.value[field];
  if(values) {
    if (field === "name") {
    const [firstName, lastName] = values.split(" ");
    userStore.setUserProperty("firstName", firstName);
    userStore.setUserProperty("lastName", lastName);
  } else if (field === "password") {
  } else {
    userStore.setUserProperty(field, values);
  }
  }
};

const validationScheme = object().shape({
  name: string()
    .required(t("Errors.required"))
    .min(2, t("Errors.short"))
    .max(50, t("Errors.long")),
  email: string().required(t("Errors.required")).email(t("Errors.email")),
  password: string()
    .required(t("Errors.required"))
    .min(8, t("Errors.passwordSize"))
    .matches(/[A-ZА-Я]/, t("Errors.passwordUpper"))
    .matches(/[a-zа-я]/, t("Errors.passwordLower"))
    .matches(/\d/, t("Errors.passwordNumber")),
  phone: string()
    .required(t("Errors.required"))
    .matches(/^\+?[0-9]{10,15}$/, t("Errors.phone")),
  address: string().required(t("Errors.required")),
  dirth: string().required(t("Errors.required")),
});

const SaveChanges = async () => {
  await userStore.updateUserInDatabase();
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
