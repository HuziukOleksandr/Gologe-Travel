<template>
  <div class="flex gap-2" v-if="isLoggedIn == false">
        <CustomButton
          :class="
            route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
          "
          class="button"
          @click="$router.push({ name: 'Login' })"
        >
          <p class="button-text">{{ $t("Header.login") }}</p>
        </CustomButton>
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
      </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/authStore.ts";
import { storeToRefs } from "pinia"

const { t } = useI18n();
const route = useRoute();
const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);
</script>

<style lang="scss" scoped>
.button {
      @apply h-12 px-6 block;

      .button-text {
        @apply font-serrat text-sm font-semibold;
      }
    }
</style>