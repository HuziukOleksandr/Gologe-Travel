<template>
  <!-- Header content for User wrapper Start -->
  <div class="flex gap-2 items-center" v-if="isLoggedIn == true">
    <!-- Favourites Start -->
    <CustomButton class="w-40 flex gap-1 items-center mr-2">
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
          route.name !== 'Landing' ? 'text-custom-darkgreen ' : 'text-default'
        "
      >
        {{ $t("Header.favourites") }}
      </p>
    </CustomButton>
    <!-- Favourites End -->

    <!-- Line Start -->
    <div
      class="w-0.5 h-4 bg-custom-darkgreen"
      :class="route.name !== 'Landing' ? 'bg-custom-darkgreen ' : 'bg-default'"
    ></div>
    <!-- Line End -->

    <div class="max-w-40 w-full relative hover:cursor-pointer">
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
            route.name !== 'Landing' ? 'text-custom-darkgreen ' : 'text-default'
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
</template>

<script setup lang="ts">
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
const settingsVisible = ref<boolean>(false);
const List = ref<string[]>([t("Header.setting"), t("Header.signOut")]);

const openWindow = () => {
  settingsVisible.value = true;
};
</script>

<style scoped></style>
