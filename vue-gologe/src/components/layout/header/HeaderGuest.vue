<template>
  <div class="flex gap-2" v-if="isLoggedIn == false">
    <CustomButton
      :class="getButtonClass('Landing')"
      class="button"
      @click="$router.push({ name: 'Login' })"
    >
      <p class="button-text">{{ $t("Header.login") }}</p>
    </CustomButton>
    <CustomButton
      :class="getButtonClass('Register', true)"
      class="button"
      @click="$router.push({ name: 'Register' })"
    >
      <p class="button-text">{{ $t("Header.signUp") }}</p>
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/authStore.ts";
import { storeToRefs } from "pinia";

const { t } = useI18n();
const route = useRoute();
const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

const getButtonClass = (type: string, isPrimary: boolean = false) => {
  const isLanding = route.name === "Landing";
  if (isPrimary) {
    return isLanding
      ? "text-custom-darkgreen bg-default"
      : "text-default bg-custom-darkgreen";
  }
  return isLanding ? "text-default" : "text-custom-darkgreen";
};
</script>

<style lang="scss" scoped>
.button {
  @apply h-12 px-6 block;

  .button-text {
    @apply font-serrat text-sm font-semibold;
  }
}
</style>
