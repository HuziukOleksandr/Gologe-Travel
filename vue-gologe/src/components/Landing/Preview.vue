<template>
  <div class="landing-component-wrapper">
    <div
      class="background max-w-secondary-width w-full min-h-[600px] flex items-center rounded-2xl"
    >
      <div class="w-full flex flex-col items-center gap-6 animation"
      :class="{ animate: animationStore.previewTextIsAnimated }"
      >
        <h2
          class="custom-text-5xl text-default font-semibold sm:text-3xl ph:text-2xl"
        >
          {{ $t("Landing.Preview.headerTop") }}
        </h2>
        <h1
          class="font-serrat font-semibold text-default uppercase text-center"
          :class="getTitleStyles(locale)"
        >
          {{ $t("Landing.Preview.header") }}
        </h1>
        <h3
          class="custom-text-2xl text-default sm:text-xl ph:text-sm text-center"
        >
          {{ $t("Landing.Preview.headerBottom") }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTitleStyles } from "@/services/Localization";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { useAnimationStore } from '@/stores/animatiomStore';
const { locale } = useI18n();

const animationStore = useAnimationStore();

onMounted(() => {
  animationStore.startAnimation("previewTextIsAnimated", true, 1000);
});
</script>

<style scoped>
.background {
  background: url("../../assets/images/png/Landing/background.png");
  background-position: center;
  background-size: cover;
}

.animation {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateX(0);
}
</style>
