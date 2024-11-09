<template>
  <!-- Localization wrapper Start -->
  <div class="relative">
    <!-- Wrapper for localization Image Start -->
    <div class="flex items-center px-2 py-3">
      <!-- Localization Image -->
      <img
        :src="getImageUrlSvg(locale)"
        alt="Flag uk"
        class="w-6 rounded transition duration-200 hover:cursor-pointer"
        @click="toggleVisible = !toggleVisible"
      />
    </div>
    <!-- Wrapper for localization Image End -->

    <!-- Use Localization-DropDawn Component -->
    <CustomLocalization :dialogVisible="toggleVisible" @close-window="close" />
  </div>
  <!-- Localization wrapper End -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { getImageUrlSvg } from "@/services/Helpers";

const { locale } = useI18n();
const toggleVisible = ref<boolean>(false);

// Method for Close window
const close = () => {
  toggleVisible.value = !toggleVisible;
};
</script>
