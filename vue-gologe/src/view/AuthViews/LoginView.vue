<template>
  <!-- Login wrapper Start -->
  <div class="auth-wrapper">
    <!-- Aside wrapper Start -->
    <VForm
      class="max-w-[510px] auth-aside-wrapper"
      @submit="Login"
      :validation-schema="validationScheme"
    >
      <!-- USe Custom Logo -->
      <CustomLogo class="logo" />

      <!-- Title Start -->
      <h1 class="auth-aside-title">
        {{ $t("Login.title") }}
      </h1>
      <!-- Title End -->

      <!-- Text Start -->
      <h2 class="auth-aside-text">
        {{ $t("Login.subTitle") }}
      </h2>
      <!-- Text End -->

      <!-- Wrapper for Inputs Start -->
      <div class="auth-inputs-wrapper">
        <!-- Use Custom Input "Email" Start -->
        <div
          class="flex flex-col gap-1 flex-grow min-h-[76px] md:min-h-[68px] sm:min-h-[60px]"
        >
          <Field name="email" v-slot="{ field }">
            <CustomInput
              class="lg:h-14"
              type="email"
              :placeHolder="$t('Login.email')"
              v-bind="field"
              v-model="field.value"
            >
              <!-- Slot for Name Start -->
              <template v-slot:input>
                <p class="auth-input-text">{{ $t("Login.email") }}</p>
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

        <!-- Use Custom Input Password "Password" Start -->
        <div
          class="flex flex-col gap-1 flex-grow min-h-[76px] md:min-h-[68px] sm:min-h-[60px]"
        >
          <Field name="password" v-slot="{ field }">
            <CustomInputPassword
              :placeHolder="$t('Login.password')"
              v-bind="field"
              v-model="field.value"
            >
              <!-- Slot for Name -->
              <template v-slot:input>
                <p class="auth-input-text">{{ $t("Login.password") }}</p>
              </template>
            </CustomInputPassword>
          </Field>
          <ErrorMessage
            as="div"
            name="password"
            class="custom-text-xs text-custom-red font-semibold"
          />
        </div>
        <!-- Use Custom Input Password "Password" End -->

        <!-- Wrapper for CheckBox and Forgot Start -->
        <div class="w-full flex justify-between sm:flex-wrap sm:mb-4 sm:gap-1">
          <!-- Use Custom CheckBox "Remember" Start  -->
          <CustomCheckbox class="custom-text-base font-semibold">
            {{ $t("Login.remember") }}
          </CustomCheckbox>
          <!-- Use Custom CheckBox "Remember" End  -->

          <!-- Use Router Link "Forgot Password" Start -->
          <router-link
            to="/login/forgotpassword/"
            class="custom-text-base text-custom-red font-semibold"
          >
            {{ $t("Login.forgot") }}
          </router-link>
          <!-- Use Router Link "Forgot Password" End -->
        </div>
        <!-- Wrapper for CheckBox and Forgot End -->
      </div>
      <!-- Wrapper for Inputs End -->

      <!-- Use Custom Button "Login" Start -->
      <CustomButton class="auth-button" @click="Login">
        <p class="auth-button-text">{{ $t("Login.title") }}</p>
      </CustomButton>
      <!-- Use Custom Button "Login" End -->

      <!-- Wrapper for Question and Register Start -->
      <div class="w-full flex justify-center gap-1 mb-4 sm:flex-wrap lg:mb-10">
        <!-- Text question Start -->
        <span class="custom-text-base font-semibold">
          {{ $t("Login.question") }}
        </span>
        <!-- Text question End -->

        <!-- Ise Router Link for Register Start -->
        <router-link
          to="/register"
          class="custom-text-base text-custom-red font-semibold"
        >
          {{ $t("Login.signUp") }}
        </router-link>
        <!-- Ise Router Link for Register End -->
      </div>
      <!-- Wrapper for Question and Register End -->

      <!-- Text "Login With" wrapper Startc -->
      <div class="w-full flex items-center mb-4 lg:mb-10">
        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->

        <!-- Text Start -->
        <div class="custom-text-sm px-3 grow-0 text-custom-darkgray bg-default">
          {{ $t("Login.orLoginWith") }}
        </div>
        <!-- Text End -->

        <!-- Line Start -->
        <hr class="grow text-custom-darkgray" />
        <!-- Line End -->
      </div>
      <!-- Text "Login With" wrapper End -->

      <!-- Use Login With Component -->
      <CustomLoginWith />
    </VForm>

    <!-- Wrapper for Carousel Start -->
    <div class="max-w-[620px] auth-carousel-wrapper">
      <!-- Use Custom Carousel Component -->
      <CustomCarousel :slides="slides" />
    </div>
    <!-- Wrapper for Carousel End -->
  </div>
  <!-- Login wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { object, string } from "yup";
import { useI18n } from "vue-i18n";
import { scrollTop } from "@/services/Scroll";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const slides = ref(["login-one", "login-two", "login-three"]),
  authStore = useAuthStore(),
  { t } = useI18n(),
  router = useRouter();

const Login = async (values: any) => {
  try {
    await authStore.login(values.email, values.password);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Користувач підтверджений:", user);
        router.push({ name: "Account" });
      }
    });
  } catch (error) {
    alert(error);
  }
};

const validationScheme = object().shape({
  email: string().required(t("Errors.required")).email(t("Errors.email")),
  password: string()
    .required(t("Errors.required"))
    .min(8, t("Errors.passwordSize"))
    .matches(/[A-ZА-Я]/, t("Errors.passwordUpper"))
    .matches(/[a-zа-я]/, t("Errors.passwordLower"))
    .matches(/\d/, t("Errors.passwordNumber")),
});

scrollTop();
</script>
