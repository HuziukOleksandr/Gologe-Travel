<template>
  <!-- Header wrapper Start -->
  <div class="wrapper_header">
    <!-- Use Navigation UI Component -->
    <CustomNavigation
      :class="
        route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
      "
    />
    <!-- Use Logo UI Component -->
    <CustomLogo class="sm:hidden" />

    <!-- Header-Content wrapper Start -->
    <div class="wrapper_content">
      <!-- Wrapper for Buttons Start -->
      <div class="flex gap-2" v-if="isLoggedIn == false">
        <!-- Use UI Button component, Login button Start -->
        <CustomButton
          :class="
            route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
          "
          class="button"
          @click="$router.push({ name: 'Login' })"
        >
          <p class="button-text">{{ $t("Header.login") }}</p>
        </CustomButton>
        <!-- Use UI Button component, Login button End -->

        <!-- Use UI Button component, Register button Start -->
        <CustomButton
          :class="
            route.name !== 'Landing'
              ? 'text-default bg-custom-darkgreen'
              : 'text-custom-darkgreen bg-default'
          "
          class="button"
          @click="$router.push({ name: 'Register' })"
        >
          <p class="button-text">{{ $t("Header.signUp") }}</p>
        </CustomButton>
        <!-- Use UI Button component, Register button End -->
      </div>
      <!-- Wrapper for Buttons End -->

      <!-- Header content for User wrapper Start -->
      <div class="flex gap-2 items-center" v-if="isLoggedIn == true">
        <!-- Favourites Start -->
        <CustomButton class="flex gap-1 items-center mr-2">
          <img
            src="@/assets/images/svg/UI/favourites-light.svg"
            alt="favourites"
            v-if="route.name == 'Landing'"
          />
          <img
            src="@/assets/images/svg/UI/favourites-dark.svg"
            alt="favourites"
            v-else
          />
          <p
            class="custom-text-sm text-custom-darkgreen font-semibold sm:hidden"
            :class="
              route.name !== 'Landing'
                ? 'text-custom-darkgreen '
                : 'text-default'
            "
          >
            {{ $t("Header.favourites") }}
          </p>
        </CustomButton>
        <!-- Favourites End -->

        <!-- Line Start -->
        <div
          class="w-0.5 h-4 bg-custom-darkgreen"
          :class="
            route.name !== 'Landing' ? 'bg-custom-darkgreen ' : 'bg-default'
          "
        ></div>
        <!-- Line End -->

        <div class="relative hover:cursor-pointer">
          <!-- User Start -->
          <div class="flex h-11 gap-1 items-center" @click="openWindow">
            <!-- Image Start -->
            <div class="w-11 h-11 rounded-full relative">
              <img
                src="@/assets/images/png/Account/avatar-light.svg"
                alt="avatar"
                class="w-11 h-11"
                v-if="route.name == 'Landing'"
              />
              <img
                src="@/assets/images/png/Account/avatar.svg"
                alt="avatar"
                class="w-11 h-11"
                v-else
              />
              <CustomButton
                class="w-3 h-3 rounded-full absolute bg-custom-red right-0 top-8 flex justify-center items-center"
              >
                <img
                  src="@/assets/images/svg/UI/chevron-down-user.svg"
                  alt="chevron-down-user"
                  class="rotate-180"
                  :class="{ 'rotate-0': settingsVisible }"
                />
              </CustomButton>
            </div>
            <!-- Image End -->
            <!-- User Name Start -->
            <p
              class="custom-text-sm text-custom-darkgreen font-semibold sm:hidden"
              :class="
                route.name !== 'Landing'
                  ? 'text-custom-darkgreen '
                  : 'text-default'
              "
            >
              ASAP
            </p>
            <!-- User Name End -->
          </div>
          <!-- User Name End -->
          <HeaderList
            :dialogVisible="settingsVisible"
            :list="List"
            @close-window="settingsVisible = !settingsVisible"
          />
          <!-- User End -->
        </div>
      </div>
      <!-- Header content for User wrapper End -->

      <!-- Use Localization Component -->
      <Localization />
    </div>
    <!-- Header-Content wrapper End -->
  </div>
  <!-- Header wrapper End -->
</template>

<script setup lang="ts">
import Localization from "./Localization.vue";
import HeaderList from "./HeaderList.vue";
import { useRoute } from "vue-router";
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/authStore.ts";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const route = useRoute();
const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

// const isLoggedIn = computed(() => authStore.getAuthState);
const settingsVisible = ref<boolean>(false);
const List = ref<string[]>([t("Header.setting"), t("Header.signOut")]);

// const firstName = computed(() => authStore.getUserField("firstName"));

const openWindow = () => {
  settingsVisible.value = true;
};
</script>

<style lang="scss" scoped>
.wrapper_header {
  @apply w-full h-[90px] m-auto flex justify-between items-center
	lg:px-28 md:px-24 sm:px-10 sm:h-16 ;

  .wrapper_content {
    @apply flex items-center justify-between gap-2 md:gap-2.5 sm:gap-1;

    .button {
      @apply h-12 px-6 block;

      .button-text {
        @apply font-serrat text-sm font-semibold;
      }
    }
  }
}

.logo:hover {
  transition-duration: 500ms;
  cursor: pointer;
  transform: scale(1.02);
}
</style>
