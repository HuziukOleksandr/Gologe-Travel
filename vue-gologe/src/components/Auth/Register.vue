<template>
  <!-- Register wrapper Start -->
  <div class="auth-wrapper">
    <!-- Carousel wrapper Start -->
    <div class="max-w-[490px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Carousel wrapper End -->

    <!-- Aside wrapper Start -->
    <VForm
      class="max-w-[640px] auth-aside-wrapper"
      @submit="onSubmit"
      :validation-schema="validationScheme"
    >
      <!-- Use Custom Logo Component -->
      <CustomLogo class="logo" />

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("Register.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("Register.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Wrapper for "First Name and Lact Name Start" -->
        <div class="auth-inputs-line-wrapper">
          <!-- Use Custom Input "First Name" Start -->
          <div
            class="flex flex-col gap-1 flex-grow h-[76px] md:h-[68px] sm:h-[60px]"
          >
            <Field name="firstName" v-slot="{ field }">
              <CustomInput
                v-bind="field"
                type="text"
                :placeHolder="$t('Register.first')"
                v-model="field.value"
              >
                <!-- Slot for Name Start -->
                <template v-slot:input>
                  <p class="auth-input-text">
                    {{ $t("Register.first") }}
                    <span class="custom-text-base text-custom-red font-semibold"
                      >*</span
                    >
                  </p>
                </template>
                <!-- Slot for Name End -->
              </CustomInput>
            </Field>
            <ErrorMessage
              as="div"
              name="firstName"
              class="custom-text-xs text-custom-red font-semibold"
            />
          </div>
          <!-- Use Custom Input "First Name" End -->

          <!-- Use Custom Input "Last Name" Start -->
          <div
            class="flex flex-col gap-1 flex-grow h-[76px] md:h-[68px] sm:h-[60px]"
          >
            <Field name="lastName" v-slot="{ field }">
              <CustomInput
                v-bind="field"
                type="text"
                :placeHolder="$t('Register.last')"
                v-model="field.value"
              >
                <!-- Slot for Name Start-->
                <template v-slot:input>
                  <p class="auth-input-text">
                    {{ $t("Register.last") }}
                    <span class="custom-text-base text-custom-red font-semibold"
                      >*</span
                    >
                  </p>
                </template>
                <!-- Slot for Name End -->
              </CustomInput>
            </Field>
            <ErrorMessage
              as="div"
              name="lastName"
              class="custom-text-xs text-custom-red font-semibold"
            />
          </div>
          <!-- Use Custom Input "Last Name" End -->
        </div>
        <!-- Wrapper for "First Name and Last Name End" -->

        <!-- Wrapper for Email and Phone Number Start -->
        <div class="auth-inputs-line-wrapper">
          <!-- Use Custom Input "Email" Start -->
          <div
            class="flex flex-col gap-1 flex-grow h-[76px] md:h-[68px] sm:h-[60px]"
          >
            <Field name="email" v-slot="{ field }">
              <CustomInput
                v-bind="field"
                type="text"
                :placeHolder="$t('Register.email')"
                v-model="field.value"
              >
                <!-- Slot for Name Start -->
                <template v-slot:input>
                  <p class="auth-input-text">
                    {{ $t("Register.email") }}
                    <span class="custom-text-base text-custom-red font-semibold"
                      >*</span
                    >
                  </p>
                </template>
                <!-- Slot for Name End -->
              </CustomInput>
            </Field>
            <ErrorMessage
              as="div"
              name="email"
              class="custom-text-xs text-custom-red font-semibold"
            />
          </div>
          <!-- Use Custom Input "Email" End -->

          <!-- Use Custom Input "Phone Number" Start -->
          <div
            class="flex flex-col gap-1 flex-grow h-[76px] md:h-[68px] sm:h-[60px]"
          >
            <Field name="phone" v-slot="{ field }">
              <CustomInput
                v-bind="field"
                type="text"
                :placeHolder="$t('Register.phone')"
                v-model="field.value"
              >
                <!-- Slot for Name Start -->
                <template v-slot:input>
                  <p class="auth-input-text">
                    {{ $t("Register.phone") }}
                    <span class="custom-text-base text-custom-red font-semibold"
                      >*</span
                    >
                  </p>
                </template>
                <!-- Slot for Name End -->
              </CustomInput>
            </Field>
            <ErrorMessage
              as="div"
              name="phone"
              class="custom-text-xs text-custom-red font-semibold"
            />
          </div>
          <!-- Use Custom Input "Phone Number" End -->
        </div>
        <!-- Wrapper for Email and Phone Number End -->

        <!-- Use Custom Input Password "Password" Start -->
        <div
          class="flex flex-col gap-1 flex-grow h-[76px] md:h-[68px] sm:h-[60px]"
        >
          <Field name="password" v-slot="{ field }">
            <CustomInputPassword
              v-bind="field"
              :placeHolder="$t('Register.password')"
              v-model="field.value"
            >
              <!-- Slot for Name Start -->
              <template v-slot:input>
                <p class="auth-input-text">
                  {{ $t("Register.password") }}
                  <span class="custom-text-base text-custom-red font-semibold"
                    >*</span
                  >
                </p>
              </template>
              <!-- Slot for Name End -->
            </CustomInputPassword>
          </Field>
          <ErrorMessage
            as="div"
            name="password"
            class="custom-text-xs text-custom-red font-semibold"
          />
        </div>
        <!-- Use Custom Input Password "Password" End -->

        <!-- Use Custom Input Password "Confirm Password" Start -->
        <CustomInputPassword
          :placeHolder="$t('Register.confirm')"
          v-model="ConfirmPassword"
        >
          <!-- Slot for Name Start -->
          <template v-slot:input>
            <p class="auth-input-text">{{ $t("Register.confirm") }}</p>
          </template>
          <!-- Slot for Name End -->
        </CustomInputPassword>
        <!-- Use Custom Input Password "Confirm" End -->

        <!-- Use Custom CheckBox Start -->
        <CustomCheckbox class="custom-text-base font-semibold">
          <div class="sm:flex-wrap">
            {{ $t("Register.inputStart") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-custom-red">
              {{ $t("Register.terms") }}
            </router-link>
            <!-- Use Router Link End -->

            {{ $t("Register.inputAnd") }}

            <!-- Use Router Link Start -->
            <router-link to="#" class="text-custom-red">
              {{ $t("Register.privacy") }}
            </router-link>
            <!-- Use Router Link End -->
          </div>
        </CustomCheckbox>
        <!-- Use Custom CheckBox End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Register" Start -->
      <CustomButton class="auth-button" type="submit">
        <p class="auth-button-text">{{ $t("Register.title") }}</p>
      </CustomButton>
      <!-- Use Custom Button "Register" End -->

      <!-- Wrapper for Question and Login Start -->
      <div class="w-full flex justify-center gap-1 sm:flex-wrap mb-4 lg:mb-1">
        <!-- Text Question Start -->
        <span class="custom-text-base font-semibold">
          {{ $t("Register.question") }}
        </span>
        <!-- Text Question End -->

        <!-- Use Router Link "Login" Start -->
        <router-link
          to="/login"
          class="custom-text-base text-custom-red font-semibold"
        >
          {{ $t("Register.login") }}
        </router-link>
        <!-- Use Router Link "Login" End -->
      </div>
      <!-- Wrapper for Question and Login Start -->

      <!-- Text "Register With" wrapper Start -->
      <div class="w-full flex items-center mb-4 lg:mb-10">
        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->

        <!-- Text Start -->
        <p class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
          {{ $t("Register.orSignUpWith") }}
        </p>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->
      </div>
      <!-- Text "Register With" wrapper End -->

      <!-- Use Register With Component -->
      <CustomRegisterWith />
    </VForm>
    <!-- Aside wrapper End -->
  </div>
  <!-- Register wrapper End -->
</template>

<script setup lang="ts">
// TODO добавити логіку ConfirmPassword
import { ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { object, string } from "yup";
import { useI18n } from 'vue-i18n';

import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";

const ConfirmPassword = ref<string>(""),
  authStore = useAuthStore(),
  userStore = useUserStore(),
  { t } = useI18n();

const onSubmit = async (values: any) => {
  userStore.setUser(values);
  await authStore.register(values.email, values.password);
  await userStore.setUserInDatabase(values.phone);
};

const slides = ref<string[]>([
  "register-slide-one",
  "register-slide-two",
  "register-slide-one",
]);

const validationScheme = object().shape({
  firstName: string()
    .required(t("Errors.required"))
    .min(2, t("Errors.short"))
    .max(50, t("Errors.long")),
  lastName: string()
    .required(t("Errors.required"))
    .min(2, t("Errors.short"))
    .max(50, t("Errors.long")),
  email: string().required(t("Errors.required")).email(t("Errors.email")),
  phone: string()
    .required(t("Errors.required"))
    .matches(/^\+?[0-9]{10,15}$/, t("Errors.phone")),
  password: string()
    .required(t("Errors.required"))
    .min(8, t("Errors.passwordSize"))
    .matches(/[A-Z]/, t("Errors.passwordUpper"))
    .matches(/[a-z]/, t("Erorrs.passwordLower"))
    .matches(/\d/, t("Errors.passwordNumber")),
});
</script>
