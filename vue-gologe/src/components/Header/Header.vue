<template>
  <!-- Header wrapper Start -->
  <div class="header_wrapper animation" :class="{ animate: animationStore.headerIsAnimated }">
    <div class="header_content">
      <CustomNavigation
        :class="
          route.name !== 'Landing' ? 'text-custom-darkgreen' : 'text-default'
        "
      />
      <CustomLogo class="sm:hidden absolute left-1/2 -translate-x-1/2"/>
      <div class="header-auth-wrapper">
        <HeaderLoggedOff/>
        <HeaderLoggenIn/>
        <Localization />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLoggedOff from './HeaderLoggedOff.vue';
import HeaderLoggenIn from './HeaderLoggenIn.vue'
import Localization from "./Localization.vue";
import { useRoute } from "vue-router";
import { onMounted } from 'vue';
import { useAnimationStore } from '@/stores/animatiomStore';

const animationStore = useAnimationStore(),
  route = useRoute();

onMounted(() => {
  animationStore.startAnimation("headerIsAnimated", true, 100);
});
</script>

<style lang="scss" scoped>
.header_wrapper {
  @apply max-w-large-width w-full h-20 mx-auto px-[104px];

  @screen md {
    @apply px-12;
  }

  @screen sm {
    @apply px-12 h-[60px];
  }
  .header_content {
    @apply w-full h-full flex  items-center justify-between relative;

    .header-auth-wrapper {
      @apply max-w-[400px] w-full h-full flex items-center justify-end gap-4;
    }
  }
}

.animation {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animation.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
