<template>
  <div class="relative">
    <div class="flex items-center px-2 py-3">
      <img
        :src="getImageUrlSvg(locale)"
        alt="Flag uk"
        class="w-6 rounded transition duration-200 hover:cursor-pointer"
        @click="toggleVisible = !toggleVisible"
      />
    </div>
    <CustomLocalization :dialogVisible="toggleVisible" @close-window="close" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { getImageUrlSvg } from "@/services/Helpers";

const { locale } = useI18n();
const toggleVisible = ref<boolean>(false);

const close = () => {
  toggleVisible.value = !toggleVisible;
};
</script>
